/* eslint-disable no-unused-vars */
"use client";
import React, { useState, useEffect } from 'react';
import { Search, X, Filter, ExternalLink, Eye } from 'lucide-react';
import Image from 'next/image';

import { Navbar } from '@/components/Navbar';
import Footer from '@/components/Footer';

// Define TypeScript interface for website items
interface Website {
  id: number;
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
}

function Page() {
  // Sample showcase data with proper type
  const [websites, setWebsites] = useState<Website[]>([
    { 
      id: 1, 
      title: "Gym Fitness Template", 
      category: "Fitness", 
      description: "Modern fitness website with dark theme and neon accents",
      url: "https://gym-template-ea4.pages.dev/",
      image: "/api/placeholder/800/450"
    },
    { 
      id: 2, 
      title: "Neon Restaurant", 
      category: "Food", 
      description: "Restaurant website with vibrant neon aesthetics",
      url: "https://gym-template-ea4.pages.dev/", // Using same URL for demo
      image: "/api/placeholder/800/450"
    },
    { 
      id: 3, 
      title: "Digital Portfolio", 
      category: "Portfolio", 
      description: "Creative portfolio with dark mode and glowing elements",
      url: "https://gym-template-ea4.pages.dev/", // Using same URL for demo
      image: "/api/placeholder/800/450"
    },
    { 
      id: 4, 
      title: "Tech Conference", 
      category: "Event", 
      description: "Event website with cyberpunk inspired design",
      url: "https://gym-template-ea4.pages.dev/", // Using same URL for demo
      image: "/api/placeholder/800/450"
    },
    { 
      id: 5, 
      title: "E-commerce Shop", 
      category: "Shopping", 
      description: "Dark themed e-commerce with neon highlights",
      url: "https://gym-template-ea4.pages.dev/", // Using same URL for demo
      image: "/api/placeholder/800/450"
    },
    { 
      id: 6, 
      title: "Audio Studio", 
      category: "Entertainment", 
      description: "Audio production website with reactive glow effects",
      url: "https://gym-template-ea4.pages.dev/", // Using same URL for demo
      image: "/api/placeholder/800/450"
    },
  ]);

  // State for UI control with proper types
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [filteredWebsites, setFilteredWebsites] = useState<Website[]>(websites);
  const [previewModal, setPreviewModal] = useState<boolean>(false);
  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Get unique categories for filter
  const categories = ['All', ...new Set(websites.map(site => site.category))];

  // Filter websites based on search and category
  useEffect(() => {
    let results = websites;
    
    if (searchTerm) {
      results = results.filter(
        site => site.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                site.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'All') {
      results = results.filter(site => site.category === selectedCategory);
    }
    
    setFilteredWebsites(results);
  }, [searchTerm, selectedCategory, websites]);

  // Open preview modal
  const openPreview = (website: Website) => {
    setSelectedWebsite(website);
    setPreviewModal(true);
  };

  // Close preview modal
  const closePreview = () => {
    setPreviewModal(false);
    setSelectedWebsite(null);
  };

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="relative z-10 border-b border-purple-800 bg-black/80 px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <h1 className="mb-4 text-center text-4xl font-bold md:text-6xl">
                <span className="text-purple-400">Electro</span>
                <span className="text-blue-400">plix</span>
                {/* <span className="text-green-400"> Studio</span> */}
              </h1>
              <p className="mx-auto max-w-3xl text-center text-xl text-gray-300">
                Cutting-edge web designs with neon aesthetics and flawless functionality
              </p>
            </div>
          </div>
          {/* Neon glow effects */}
          <div className="absolute left-1/4 top-20 size-64 rounded-full bg-purple-500/20 blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 size-96 rounded-full bg-blue-500/20 blur-3xl"></div>
        </div>
        {/* Search and Filter */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input 
              type="text" 
              placeholder="Search websites..." 
              className="w-full rounded-lg border border-gray-700 bg-gray-800 py-2 pl-10 pr-4 text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div>
            <div className="flex w-full items-center space-x-4 md:w-auto">
              <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 transition-all hover:bg-gray-700"
            >
                <Filter size={18} />
                <span>Filter</span>
              </button>
              {showFilters && (
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-3 py-1 text-sm transition-all ${
                      selectedCategory === category
                        ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/30'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
            </div>
          </div>
          {/* Showcase Grid */}
          {filteredWebsites.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredWebsites.map((website) => (
                <div 
                key={website.id} 
                className="group overflow-hidden rounded-xl border border-gray-700 bg-gray-800 transition-all hover:border-purple-500"
              >
                  <div className="relative">
                    <Image
                    width={500}
                    height={500} 
                    src={website.image} 
                    alt={website.title} 
                    className="h-48 w-full object-cover"
                  />
                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 to-transparent">
                      <div className="w-full p-4">
                        <div className="flex items-center justify-between">
                          <span className="rounded-full bg-purple-600/90 px-2 py-1 text-xs font-medium">
                            {website.category}
                          </span>
                          <div className="flex space-x-2">
                            <button 
                            onClick={() => openPreview(website)}
                            className="rounded-full bg-blue-600 p-2 transition-all hover:bg-blue-500"
                            title="Preview Website"
                          >
                              <Eye size={16} />
                            </button>
                            <a 
                            href={website.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="rounded-full bg-green-600 p-2 transition-all hover:bg-green-500"
                            title="Visit Website"
                          >
                              <ExternalLink size={16} />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 text-xl font-semibold text-white transition-all group-hover:text-purple-400">
                      {website.title}
                    </h3>
                    <p className="text-gray-400">{website.description}</p>
                  </div>
                </div>
            ))}
            </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-xl text-gray-400">No websites found matching your search criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('All')}}
              className="mt-4 rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-500"
            >
              Clear Filters
            </button>
          </div>
        )}
        </div>
        {/* Preview Modal */}
        {previewModal && selectedWebsite && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-xl border border-purple-600 bg-gray-900">
            <div className="flex items-center justify-between border-b border-gray-800 p-4">
              <h3 className="text-xl font-semibold">{selectedWebsite.title} Preview</h3>
              <button 
                onClick={closePreview}
                className="rounded-full bg-gray-800 p-2 transition-all hover:bg-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative" style={{ height: "70vh" }}>
              <iframe 
                src={selectedWebsite.url} 
                title={selectedWebsite.title}
                className="size-full border-0"
              ></iframe>
            </div>
            <div className="flex items-center justify-between border-t border-gray-800 p-4">
              <div>
                <span className="rounded-full bg-purple-600/90 px-2 py-1 text-xs font-medium">
                  {selectedWebsite.category}
                </span>
              </div>
              <a 
                href={selectedWebsite.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 transition-all hover:bg-green-500"
              >
                <ExternalLink size={16} />
                <span>Visit Full Website</span>
              </a>
            </div>
            {/* Neon border effect */}
            <div className="pointer-events-none absolute inset-0 rounded-xl border border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)]"></div>
          </div>
        </div>
      )}
      </div>
      <Footer/>
    </>
  );
}

export default Page;