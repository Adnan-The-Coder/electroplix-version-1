"use client";
import React, { useState, useEffect } from 'react';
import { Search, X, Filter, ExternalLink, Eye } from 'lucide-react';
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
        <div className="bg-black/80 py-16 px-4 sm:px-6 lg:px-8 relative z-10 border-b border-purple-800">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
              <span className="text-purple-400">Electro</span>
              <span className="text-blue-400">plix</span>
              {/* <span className="text-green-400"> Studio</span> */}
            </h1>
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto">
              Cutting-edge web designs with neon aesthetics and flawless functionality
            </p>
          </div>
        </div>
        {/* Neon glow effects */}
        <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full bg-purple-500/20 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 filter blur-3xl"></div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search websites..." 
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg border border-gray-700 transition-all"
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
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebsites.map((website) => (
              <div 
                key={website.id} 
                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-purple-500 transition-all group"
              >
                <div className="relative">
                  <img 
                    src={website.image} 
                    alt={website.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                    <div className="p-4 w-full">
                      <div className="flex justify-between items-center">
                        <span className="bg-purple-600/90 text-xs font-medium px-2 py-1 rounded-full">
                          {website.category}
                        </span>
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => openPreview(website)}
                            className="bg-blue-600 hover:bg-blue-500 p-2 rounded-full transition-all"
                            title="Preview Website"
                          >
                            <Eye size={16} />
                          </button>
                          <a 
                            href={website.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-green-600 hover:bg-green-500 p-2 rounded-full transition-all"
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
                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-all">
                    {website.title}
                  </h3>
                  <p className="text-gray-400">{website.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No websites found matching your search criteria.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('All')}}
              className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg text-white"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Preview Modal */}
      {previewModal && selectedWebsite && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl border border-purple-600 w-full max-w-5xl overflow-hidden relative">
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <h3 className="text-xl font-semibold">{selectedWebsite.title} Preview</h3>
              <button 
                onClick={closePreview}
                className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-all"
              >
                <X size={20} />
              </button>
            </div>
            <div className="relative" style={{ height: "70vh" }}>
              <iframe 
                src={selectedWebsite.url} 
                title={selectedWebsite.title}
                className="w-full h-full border-0"
              ></iframe>
            </div>
            <div className="flex justify-between items-center p-4 border-t border-gray-800">
              <div>
                <span className="bg-purple-600/90 text-xs font-medium px-2 py-1 rounded-full">
                  {selectedWebsite.category}
                </span>
              </div>
              <a 
                href={selectedWebsite.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
              >
                <ExternalLink size={16} />
                <span>Visit Full Website</span>
              </a>
            </div>
            
            {/* Neon border effect */}
            <div className="absolute inset-0 rounded-xl border border-purple-500 shadow-[0_0_15px_rgba(147,51,234,0.5)] pointer-events-none"></div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}

export default Page;