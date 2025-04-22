"use client";
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';
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
        
        // Add isFree property to all templates (default to true as requested)
        // Ensure like_count exists with a default of 0 if not present
        const templatesWithFreeStatus = data?.map(template => ({
          ...template,
          isFree: true,
          like_count: template.like_count || 0
        })) || [];
        
        setTemplates(templatesWithFreeStatus);
        setFilteredTemplates(templatesWithFreeStatus);
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
          <div className="bg-black/50 py-20 px-4 sm:px-6 lg:px-8 relative z-10 border-b border-purple-800/50">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 drop-shadow-[0_0_25px_rgba(147,51,234,0.5)]">
                <span>Electroplix</span>
              </h1>
              <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
                Cutting-edge web designs with neon aesthetics and flawless functionality
              </p>
              <div className="flex justify-center mt-8">
                <button 
                  onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg transition-all border border-purple-500 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 group"
                >
                  <span className="group-hover:tracking-wider transition-all">
                    Explore Templates
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Neon glow effects */}
          <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-purple-500/20 filter blur-3xl"></div>
          <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 filter blur-3xl"></div>
        </div>

        {/* Search and Filter */}
        <div id="showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="relative w-full md:w-1/2">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Search templates..." 
                className="w-full bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg py-3 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  <FiX size={18} />
                </button>
              )}
            </div>
            
            <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
              <div className="relative">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-all ${
                    showFilters 
                      ? 'bg-purple-600 text-white border border-purple-500 shadow-lg shadow-purple-500/30' 
                      : 'bg-gray-800/70 backdrop-blur-sm border border-gray-700 hover:border-purple-400'
                  }`}
                >
                  <FiFilter size={18} />
                  <span>Filter</span>
                </button>
                
                {showFilters && (
                  <div className="absolute top-full left-0 mt-2 p-4 bg-gray-800/90 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl z-20 w-64">
                    <h3 className="text-sm font-medium text-gray-300 mb-3">Categories</h3>
                    <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
                      {categories.map(category => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-3 py-1 rounded-full text-sm transition-all ${
                            selectedCategory === category
                              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                              : 'bg-gray-700/70 text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                    <div className="border-t border-gray-700 my-3"></div>
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
              
              <div className="flex gap-2 bg-gray-800/70 backdrop-blur-sm border border-gray-700 rounded-lg p-1">
                <button 
                  onClick={() => setView('grid')}
                  className={`p-2 rounded ${view === 'grid' ? 'bg-gray-700' : 'hover:bg-gray-700/50'}`}
                  title="Grid View"
                >
                  <FiGrid size={18} />
                </button>
                <button 
                  onClick={() => setView('list')}
                  className={`p-2 rounded ${view === 'list' ? 'bg-gray-700' : 'hover:bg-gray-700/50'}`}
                  title="List View"
                >
                  <FiTag size={18} />
                </button>
              </div>
            </div>
          </div>
          
          {/* Status messages */}
          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <BiLoaderAlt size={40} className="text-purple-500 animate-spin" />
            </div>
          )}
          
          {error && (
            <div className="text-center py-12 bg-red-900/20 border border-red-700 rounded-lg">
              <p className="text-red-400 text-lg">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-500 rounded-lg text-white"
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
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" 
                  : "flex flex-col gap-6"
                }>
                  {filteredTemplates.map((template) => (
                    <div 
                      key={template.id} 
                      className={`group relative ${
                        view === 'grid'
                          ? "bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all"
                          : "bg-gray-800/60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all flex items-center"
                      }`}
                      onMouseEnter={() => setHovered(template.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      {/* Preview image container */}
                      <div className={`relative ${view === 'list' ? "w-1/3" : ""}`}>
                        <img 
                          src={template.image.startsWith('data:') ? template.image : "/api/placeholder/800/450"}
                          alt={template.title} 
                          className={`${
                            view === 'grid' 
                              ? "w-full h-48 object-cover object-top" 
                              : "w-full h-36 object-cover object-top"
                          } transition-transform group-hover:scale-105 duration-700 ease-in-out`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                          <div className="p-4 w-full">
                            <div className="flex justify-between items-center">
                              <span className={`${
                                template.isFree 
                                  ? "bg-green-600/90" 
                                  : "bg-purple-600/90"
                              } text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1`}>
                                {template.isFree ? <FiGift size={12} /> : <FiStar size={12} />}
                                {template.isFree ? "Free" : "Premium"}
                              </span>
                              <div className="relative">
                                <button 
                                  onClick={(e) => toggleFavorite(template.id, e)}
                                  className={`p-2 rounded-full transition-all ${
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
                                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                                    {template.like_count > 99 ? "99+" : template.like_count}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Category badge */}
                        <span className="absolute top-3 left-3 bg-blue-600/90 text-xs font-medium px-2 py-1 rounded-full">
                          {template.category}
                        </span>
                      </div>
                      
                      {/* Template content */}
                      <div className={view === 'list' ? "p-4 w-2/3" : "p-4"}>
                        <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-all">
                          {template.title}
                        </h3>
                        <p className="text-gray-400 line-clamp-2">{template.description}</p>
                        
                        {/* View button */}
                        <button 
                          onClick={() => openPreview(template)}
                          className={`mt-4 flex items-center gap-2 ${
                            view === 'grid'
                              ? "w-full justify-center bg-gray-700 hover:bg-purple-600 border border-gray-600 hover:border-purple-500 p-2 rounded-lg transition-all"
                              : "bg-gray-700 hover:bg-purple-600 border border-gray-600 hover:border-purple-500 px-4 py-2 rounded-lg transition-all"
                          }`}
                        >
                          <FiEye size={16} />
                          <span>Preview</span>
                        </button>
                      </div>
                      
                      {/* Hover glow effect */}
                      {hovered === template.id && (
                        <div className="absolute inset-0 rounded-xl border border-purple-500/50 shadow-[0_0_20px_rgba(147,51,234,0.3)] pointer-events-none"></div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700">
                  <p className="text-gray-300 text-xl mb-4">No templates found matching your search criteria.</p>
                  <button 
                    onClick={() => {setSearchTerm(''); setSelectedCategory('All')}}
                    className="px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white transition-all"
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
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gray-900 rounded-xl border border-purple-600 w-full max-w-5xl overflow-hidden relative animate-fadeIn">
              <div className="flex justify-between items-center p-4 border-b border-gray-800">
                <h3 className="text-xl font-semibold">{selectedTemplate.title}</h3>
                <button 
                  onClick={closePreview}
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all"
                >
                  <FiX size={20} />
                </button>
              </div>
              <div className="relative" style={{ height: "70vh" }}>
                <iframe 
                  src={selectedTemplate.url} 
                  title={selectedTemplate.title}
                  className="w-full h-full border-0"
                ></iframe>
              </div>
              <div className="flex justify-between items-center p-4 border-t border-gray-800">
                <div className="flex gap-3">
                  <span className="bg-blue-600/90 text-xs font-medium px-2 py-1 rounded-full">
                    {selectedTemplate.category}
                  </span>
                  <span className={`${
                    selectedTemplate.isFree 
                      ? "bg-green-600/90" 
                      : "bg-purple-600/90"
                  } text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1`}>
                    {selectedTemplate.isFree ? <FiGift size={12} /> : <FiStar size={12} />}
                    {selectedTemplate.isFree ? "Free" : "Premium"}
                  </span>
                </div>
                <button
                  onClick={(e) => toggleFavorite(selectedTemplate.id, e)}
                  className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
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
                    <span className="bg-white/20 rounded-full px-2 py-0.5 text-xs">
                      {selectedTemplate.like_count}
                    </span>
                  )}
                </button>
              </div>
              
              {/* Neon border effect */}
              <div className="absolute inset-0 rounded-xl border border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)] pointer-events-none"></div>
            </div>
          </div>
        )}
        
        {/* Back to top button */}
        {showScrollTop && (
          <button 
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-500 p-4 rounded-full shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all z-40 animate-fadeIn"
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