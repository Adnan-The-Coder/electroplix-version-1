/* eslint-disable react/jsx-no-useless-fragment */
"use client";
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { 
  FiSearch, 
  FiX, 
  FiFilter, 
  FiEye, 
  FiTag, 
  FiArrowUp, 
  FiGrid,
  FiStar,
  FiGift
} from 'react-icons/fi';
import { RiHeartFill } from 'react-icons/ri';
import { BiLoaderAlt } from 'react-icons/bi';
import Image from 'next/image';

import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

// Define TypeScript interface for template items
interface Template {
  id: number;
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
  isFree?: boolean;
  like_count: number;
}

function Page() {
  // State for templates data
  const [templates, setTemplates] = useState<Template[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // UI state
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredTemplates, setFilteredTemplates] = useState<Template[]>([]);
  const [previewModal, setPreviewModal] = useState<boolean>(false);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [hovered, setHovered] = useState<number | null>(null);
  const [updatingLike, setUpdatingLike] = useState<number | null>(null);

  // Load favorites from localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('electroplix_favorites');
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (err) {
        console.error('Error parsing favorites from localStorage:', err);
      }
    }
  }, []);

  // Fetch templates from Supabase
  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        setIsLoading(true);
        const { data, error } = await supabase
          .from('templates')
          .select('*');
          
        if (error) {
          throw new Error(error.message);
        }
        
        // Properly map each template and ensure default values are set
        const processedTemplates = data?.map(template => ({
          ...template,
          // Use the template's isFree property if it exists, otherwise default to true
          isFree: template.isFree !== undefined ? template.isFree : true,
          // Ensure like_count exists with a default of 0 if not present
          like_count: template.like_count || 0
        })) || [];
        
        setTemplates(processedTemplates);
        setFilteredTemplates(processedTemplates);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred while fetching templates');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTemplates();
  }, []);

  // Get unique categories for filter
  const categories = templates.length > 0 
    ? ['All', ...Array.from(new Set(templates.map(template => template.category)))]
    : ['All'];

  // Filter templates based on search and category
  useEffect(() => {
    let results = templates;
    
    if (searchTerm) {
      results = results.filter(
        template => template.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                    template.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'All') {
      results = results.filter(template => template.category === selectedCategory);
    }
    
    setFilteredTemplates(results);
  }, [searchTerm, selectedCategory, templates]);

  // Handle scroll events for the back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    
    window.addEventListener('scroll', handleScroll);
    
return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Open preview modal
  const openPreview = (template: Template) => {
    setSelectedTemplate(template);
    setPreviewModal(true);
    document.body.style.overflow = 'hidden';
  };

  // Close preview modal
  const closePreview = () => {
    setPreviewModal(false);
    setSelectedTemplate(null);
    document.body.style.overflow = 'auto';
  };

  // Toggle favorite status and update like count
  const toggleFavorite = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    
    // Don't allow multiple clicks while updating
    if (updatingLike === id) return;
    
    const isFavorited = favorites.includes(id);
    
    // Optimistically update UI
    const newFavorites = isFavorited 
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];
    
    setFavorites(newFavorites);
    
    // Save to localStorage
    localStorage.setItem('electroplix_favorites', JSON.stringify(newFavorites));
    
    // Find the template to update like count
    const templateToUpdate = templates.find(t => t.id === id);
    if (!templateToUpdate) return;
    
    // Optimistically update like count in state
    const updatedTemplates = templates.map(template => {
      if (template.id === id) {
        return {
          ...template,
          like_count: isFavorited 
            ? Math.max(0, template.like_count - 1) 
            : template.like_count + 1
        };
      }
      
return template;
    });
    
    setTemplates(updatedTemplates);
    setFilteredTemplates(prev => 
      prev.map(template => {
        if (template.id === id) {
          return {
            ...template,
            like_count: isFavorited 
              ? Math.max(0, template.like_count - 1) 
              : template.like_count + 1
          };
        }
        
return template;
      })
    );
    
    if (selectedTemplate?.id === id) {
      setSelectedTemplate({
        ...selectedTemplate,
        like_count: isFavorited 
          ? Math.max(0, selectedTemplate.like_count - 1) 
          : selectedTemplate.like_count + 1
      });
    }
    
    // Send update to database
    try {
      setUpdatingLike(id);
      
      // IMPORTANT FIX: First get the current like_count to avoid race conditions
      // Changed from Like_count to like_count for consistency
      const { data: currentData, error: fetchError } = await supabase
        .from('templates')
        .select('like_count')
        .eq('id', id)
        .single();
      
      if (fetchError) throw fetchError;
      
      // Extract like_count value (lowercase)
      const currentLikeCount = currentData?.like_count || 0;
      const newLikeCount = isFavorited 
        ? Math.max(0, currentLikeCount - 1) 
        : currentLikeCount + 1;
      
      // Update the like_count in the database (lowercase)
      const { error: updateError } = await supabase
        .from('templates')
        .update({ like_count: newLikeCount })
        .eq('id', id);
      
      if (updateError) throw updateError;
      
      console.log(`Successfully updated like count for template ${id} to ${newLikeCount}`);
    } catch (error) {
      console.error('Error updating like count:', error);
      
      // Revert the optimistic UI update if there was an error
      const revertedFavorites = isFavorited 
        ? [...favorites] 
        : favorites.filter(favId => favId !== id);
      
      setFavorites(revertedFavorites);
      localStorage.setItem('electroplix_favorites', JSON.stringify(revertedFavorites));
      
      // Revert template like count
      setTemplates(templates);
      setFilteredTemplates(prev => 
        prev.map(template => {
          if (template.id === id) {
            return templateToUpdate;
          }
          
return template;
        })
      );
      
      if (selectedTemplate?.id === id) {
        setSelectedTemplate(templateToUpdate);
      }
    } finally {
      setUpdatingLike(null);
    }
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="relative z-10 border-b border-purple-800/50 bg-black/50 px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <h1 className="mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-center text-4xl font-bold text-transparent drop-shadow-[0_0_25px_rgba(147,51,234,0.5)] md:text-6xl">
                <span>Web Templates</span>
              </h1>
              <p className="mx-auto max-w-3xl text-center text-xl text-gray-300">
                Cutting-edge web designs with neon aesthetics and flawless functionality
              </p>
              <div className="mt-8 flex justify-center">
                <button 
                  onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group rounded-lg border border-purple-500 bg-purple-600 px-8 py-3 shadow-lg shadow-purple-500/30 transition-all hover:bg-purple-500 hover:shadow-purple-500/50"
                >
                  <span className="transition-all group-hover:tracking-wider">
                    Explore Templates
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Neon glow effects */}
          <div className="absolute left-1/4 top-20 size-96 rounded-full bg-purple-500/20 blur-3xl"></div>
          <div className="absolute -bottom-20 right-1/4 size-96 rounded-full bg-blue-500/20 blur-3xl"></div>
        </div>
        {/* Search and Filter */}
        <div id="showcase" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="relative w-full md:w-1/2">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search templates..." 
                className="w-full rounded-lg border border-gray-700 bg-gray-800/70 py-3 pl-12 pr-4 text-white backdrop-blur-sm transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <FiX size={18} />
                </button>
              )}
            </div>
            <div className="flex w-full flex-wrap items-center gap-4 md:w-auto">
              <div className="relative">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-3 transition-all ${
                    showFilters 
                      ? 'border border-purple-500 bg-purple-600 text-white shadow-lg shadow-purple-500/30' 
                      : 'border border-gray-700 bg-gray-800/70 backdrop-blur-sm hover:border-purple-400'
                  }`}
                >
                  <FiFilter size={18} />
                  <span>Filter</span>
                </button>
                {showFilters && (
                  <div className="absolute left-0 top-full z-20 mt-2 w-64 rounded-lg border border-gray-700 bg-gray-800/90 p-4 shadow-xl backdrop-blur-md">
                    <h3 className="mb-3 text-sm font-medium text-gray-300">Categories</h3>
                    <div className="flex max-h-48 flex-wrap gap-2 overflow-y-auto">
                      {categories.map(category => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`rounded-full px-3 py-1 text-sm transition-all ${
                            selectedCategory === category
                              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                              : 'bg-gray-700/70 text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                    <div className="my-3 border-t border-gray-700"></div>
                    <div className="flex justify-end">
                      <button 
                        onClick={() => {
                          setSearchTerm(''); 
                          setSelectedCategory('All');
                          setShowFilters(false);
                        }}
                        className="text-sm text-purple-400 hover:text-purple-300"
                      >
                        Reset Filters
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex gap-2 rounded-lg border border-gray-700 bg-gray-800/70 p-1 backdrop-blur-sm">
                <button 
                  onClick={() => setView('grid')}
                  className={`rounded p-2 ${view === 'grid' ? 'bg-gray-700' : 'hover:bg-gray-700/50'}`}
                  title="Grid View"
                >
                  <FiGrid size={18} />
                </button>
                <button 
                  onClick={() => setView('list')}
                  className={`rounded p-2 ${view === 'list' ? 'bg-gray-700' : 'hover:bg-gray-700/50'}`}
                  title="List View"
                >
                  <FiTag size={18} />
                </button>
              </div>
            </div>
          </div>
          {/* Status messages */}
          {isLoading && (
            <div className="flex items-center justify-center py-20">
              <BiLoaderAlt size={40} className="animate-spin text-purple-500" />
            </div>
          )}
          {error && (
            <div className="rounded-lg border border-red-700 bg-red-900/20 py-12 text-center">
              <p className="text-lg text-red-400">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-500"
              >
                Try Again
              </button>
            </div>
          )}
          {/* Templates Display */}
          {!isLoading && !error && (
            <>
              {filteredTemplates.length > 0 ? (
                <div className={view === 'grid' 
                  ? "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" 
                  : "flex flex-col gap-6"
                }>
                  {filteredTemplates.map((template) => (
                    <div 
                      key={template.id} 
                      className={`group relative ${
                        view === 'grid'
                          ? "overflow-hidden rounded-xl border border-gray-700 bg-gray-800/60 backdrop-blur-sm transition-all hover:border-purple-500"
                          : "flex items-center overflow-hidden rounded-xl border border-gray-700 bg-gray-800/60 backdrop-blur-sm transition-all hover:border-purple-500"
                      }`}
                      onMouseEnter={() => setHovered(template.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* Preview image container */}
                      <div className={`relative ${view === 'list' ? "w-1/3" : ""}`}>
                        <Image
                          width={500}
                          height={500} 
                          src={template.image.startsWith('data:') ? template.image : "/api/placeholder/800/450"}
                          alt={template.title} 
                          className={`${
                            view === 'grid' 
                              ? "h-48 w-full object-cover object-top" 
                              : "h-36 w-full object-cover object-top"
                          } transition-transform duration-700 ease-in-out group-hover:scale-105`}
                        />
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent">
                          <div className="w-full p-4">
                            <div className="flex items-center justify-between">
                              <span className={`${
                                template.isFree 
                                  ? "bg-green-600/90" 
                                  : "bg-purple-600/90"
                              } flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium`}>
                                {template.isFree ? <FiGift size={12} /> : <FiStar size={12} />}
                                {template.isFree ? "Free" : "Premium"}
                              </span>
                              <div className="relative">
                                <button 
                                  onClick={(e) => toggleFavorite(template.id, e)}
                                  className={`rounded-full p-2 transition-all ${
                                    favorites.includes(template.id) 
                                      ? "bg-red-600 text-white" 
                                      : "bg-gray-800/70 hover:bg-gray-700"
                                  }`}
                                  disabled={updatingLike === template.id}
                                >
                                  {updatingLike === template.id ? (
                                    <BiLoaderAlt size={16} className="animate-spin" />
                                  ) : (
                                    <RiHeartFill 
                                      size={16} 
                                      className={favorites.includes(template.id) ? "animate-pulse" : ""} 
                                    />
                                  )}
                                </button>
                                {template.like_count > 0 && (
                                  <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                                    {template.like_count > 99 ? "99+" : template.like_count}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Category badge */}
                        <span className="absolute left-3 top-3 rounded-full bg-blue-600/90 px-2 py-1 text-xs font-medium">
                          {template.category}
                        </span>
                      </div>
                      {/* Template content */}
                      <div className={view === 'list' ? "w-2/3 p-4" : "p-4"}>
                        <h3 className="mb-2 text-xl font-semibold text-white transition-all group-hover:text-purple-400">
                          {template.title}
                        </h3>
                        <p className="line-clamp-2 text-gray-400">{template.description}</p>
                        {/* View button */}
                        <button 
                          onClick={() => openPreview(template)}
                          className={`mt-4 flex items-center gap-2 ${
                            view === 'grid'
                              ? "w-full justify-center rounded-lg border border-gray-600 bg-gray-700 p-2 transition-all hover:border-purple-500 hover:bg-purple-600"
                              : "rounded-lg border border-gray-600 bg-gray-700 px-4 py-2 transition-all hover:border-purple-500 hover:bg-purple-600"
                          }`}
                        >
                          <FiEye size={16} />
                          <span>Preview</span>
                        </button>
                      </div>
                      {/* Hover glow effect */}
                      {hovered === template.id && (
                        <div className="pointer-events-none absolute inset-0 rounded-xl border border-purple-500/50 shadow-[0_0_20px_rgba(147,51,234,0.3)]"></div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-gray-700 bg-gray-800/40 py-16 text-center backdrop-blur-sm">
                  <p className="mb-4 text-xl text-gray-300">No templates found matching your search criteria.</p>
                  <button 
                    onClick={() => {setSearchTerm(''); setSelectedCategory('All')}}
                    className="rounded-lg bg-purple-600 px-6 py-2 text-white transition-all hover:bg-purple-500"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </>
          )}
        </div>
        {/* Preview Modal */}
        {previewModal && selectedTemplate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
            <div className="animate-fadeIn relative w-full max-w-5xl overflow-hidden rounded-xl border border-purple-600 bg-gray-900">
              <div className="flex items-center justify-between border-b border-gray-800 p-4">
                <h3 className="text-xl font-semibold">{selectedTemplate.title}</h3>
                <button 
                  onClick={closePreview}
                  className="rounded-full bg-gray-800 p-2 transition-all hover:bg-gray-700"
                >
                  <FiX size={20} />
                </button>
              </div>
              <div className="relative" style={{ height: "70vh" }}>
                <iframe 
                  src={selectedTemplate.url} 
                  title={selectedTemplate.title}
                  className="size-full border-0"
                ></iframe>
              </div>
              <div className="flex items-center justify-between border-t border-gray-800 p-4">
                <div className="flex gap-3">
                  <span className="rounded-full bg-blue-600/90 px-2 py-1 text-xs font-medium">
                    {selectedTemplate.category}
                  </span>
                  <span className={`${
                    selectedTemplate.isFree 
                      ? "bg-green-600/90" 
                      : "bg-purple-600/90"
                  } flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium`}>
                    {selectedTemplate.isFree ? <FiGift size={12} /> : <FiStar size={12} />}
                    {selectedTemplate.isFree ? "Free" : "Premium"}
                  </span>
                </div>
                <button
                  onClick={(e) => toggleFavorite(selectedTemplate.id, e)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all ${
                    favorites.includes(selectedTemplate.id) 
                      ? "bg-red-600 text-white" 
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  disabled={updatingLike === selectedTemplate.id}
                >
                  {updatingLike === selectedTemplate.id ? (
                    <BiLoaderAlt size={16} className="animate-spin" />
                  ) : (
                    <RiHeartFill size={16} />
                  )}
                  <span>
                    {favorites.includes(selectedTemplate.id) ? "Added to Favorites" : "Add to Favorites"}
                  </span>
                  {selectedTemplate.like_count > 0 && (
                    <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs">
                      {selectedTemplate.like_count}
                    </span>
                  )}
                </button>
              </div>
              {/* Neon border effect */}
              <div className="pointer-events-none absolute inset-0 rounded-xl border border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)]"></div>
            </div>
          </div>
        )}
        {/* Back to top button */}
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="animate-fadeIn fixed bottom-8 right-8 z-40 rounded-full bg-purple-600 p-4 shadow-lg shadow-purple-500/30 transition-all hover:bg-purple-500 hover:shadow-purple-500/50"
          >
            <FiArrowUp size={20} />
          </button>
        )}
      </div>
      <Footer/>
      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .animate-pulse {
          animation: pulse 1s infinite;
        }
      `}</style>
    </>
  );
}

export default Page;