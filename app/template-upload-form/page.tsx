/* eslint-disable no-unused-vars */
"use client";
import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Upload, X, Check, AlertCircle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

// Update these with your actual Supabase credentials
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
const supabase = createClient(supabaseUrl, supabaseKey);

interface Template {
  id?: number;
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
}

// Predefined categories that match your existing data
const PREDEFINED_CATEGORIES = [
  'Fitness', 
  'Food', 
  'Portfolio', 
  'Event', 
  'Shopping', 
  'Entertainment',
  'Business',
  'Education',
  'Technology',
  'Health'
];

function TemplateUploadForm() {
  // Form state
  const [formData, setFormData] = useState<Template>({
    title: '',
    category: '',
    description: '',
    url: '',
    image: ''
  });
  
  // UI states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [newCategoryInput, setNewCategoryInput] = useState('');
  const [showCategoryInput, setShowCategoryInput] = useState(false);

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  // Handle file drop
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageSelect(e.dataTransfer.files[0]);
    }
  };
  
  // Handle file selection from input
  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleImageSelect(e.target.files[0]);
    }
  };
  
  // Process the selected image and convert to base64
  const handleImageSelect = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image.*')) {
      setStatusMessage('Please select an image file');
      setSubmitStatus('error');
      
return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setStatusMessage('Image must be less than 5MB');
      setSubmitStatus('error');
      
return;
    }
    
    setImageFile(file);
    
    // Create preview and convert to base64
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setPreviewImage(base64String);
      // Store the base64 string in form data
      setFormData(prev => ({ ...prev, image: base64String }));
    };
    reader.readAsDataURL(file);
    
    setSubmitStatus('idle');
  };
  
  // Handle adding a new category
  const handleAddCategory = () => {
    if (newCategoryInput.trim() !== '') {
      setFormData(prev => ({ ...prev, category: newCategoryInput.trim() }));
      setNewCategoryInput('');
      setShowCategoryInput(false);
    }
  };
  
  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Validate form
      if (!formData.title || !formData.category || !formData.description || !formData.url) {
        throw new Error('Please fill out all required fields');
      }
      
      if (!formData.image) {
        throw new Error('Please upload an image');
      }
      
      // Prepare data for database insertion
      const templateData: Template = {
        ...formData
      };
      
      // Insert into Supabase database - using the templates table
      const { data, error } = await supabase
        .from('templates')
        .insert([templateData])
        .select();
        
      if (error) {
        throw new Error('Error saving template: ' + error.message);
      }
      
      // Success
      setSubmitStatus('success');
      setStatusMessage('Website template uploaded successfully!');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          title: '',
          category: '',
          description: '',
          url: '',
          image: ''
        });
        setPreviewImage(null);
        setImageFile(null);
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage(error instanceof Error ? error.message : 'An unknown error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Reset status message after 5 seconds
  useEffect(() => {
    if (submitStatus !== 'idle') {
      const timer = setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);
  
  return (
    <div className="min-h-screen bg-gray-900 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-10">
          <a 
            href="/showcase" 
            className="mb-6 inline-flex items-center text-purple-400 transition-colors hover:text-purple-300"
          >
            <ArrowLeft size={18} className="mr-2" />
            Back to Showcase
          </a>
          <h1 className="mb-2 text-3xl font-bold">Upload Website Template</h1>
          <p className="text-gray-400">
            Share your web design with our community. Fill out the form below to add your template to our showcase.
          </p>
        </div>
        {/* Status message */}
        {submitStatus !== 'idle' && (
          <div 
            className={`mb-6 flex items-start rounded-lg p-4 ${
              submitStatus === 'success' ? 'border border-green-500 bg-green-900/50' : 'border border-red-500 bg-red-900/50'
            }`}
          >
            {submitStatus === 'success' ? (
              <Check className="mr-3 mt-0.5 text-green-400" size={18} />
            ) : (
              <AlertCircle className="mr-3 mt-0.5 text-red-400" size={18} />
            )}
            <p>{statusMessage}</p>
          </div>
        )}
        {/* Upload Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Upload Image Section */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Website Screenshot <span className="text-purple-400">*</span>
            </label>
            <div 
              className={`mt-1 flex justify-center rounded-lg border-2 border-dashed p-6 ${
                isDragging ? 'border-purple-500 bg-purple-900/20' : 'border-gray-700 hover:border-purple-400'
              } cursor-pointer transition-all`}
              onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
              onDragLeave={() => setIsDragging(false)}
              onDrop={handleDrop}
              onClick={() => document.getElementById('image-upload')?.click()}
            >
              <div className="text-center">
                {previewImage ? (
                  <div className="relative">
                    <Image width={500} height={500} src={previewImage} alt="Preview" className="mx-auto h-48 w-auto rounded-lg" />
                    <button 
                      type="button"
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        setPreviewImage(null); 
                        setImageFile(null);
                        setFormData(prev => ({ ...prev, image: '' }));
                      }}
                      className="absolute right-2 top-2 rounded-full bg-black/70 p-1 hover:bg-black"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ) : (
                  <>
                    <Upload className="mx-auto size-12 text-gray-400" />
                    <div className="mt-4 flex text-sm text-gray-400">
                      <p className="pl-1">Drag and drop image or click to upload</p>
                    </div>
                    <p className="mt-2 text-xs text-gray-500">PNG, JPG, WebP up to 5MB</p>
                  </>
                )}
                <input 
                  id="image-upload" 
                  name="image" 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileInput} 
                  className="sr-only" 
                />
              </div>
            </div>
          </div>
          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-300">
              Template Title <span className="text-purple-400">*</span>
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              placeholder="e.g. Fitness Gym Template"
            />
          </div>
          {/* URL */}
          <div>
            <label htmlFor="url" className="block text-sm font-medium text-gray-300">
              Website URL <span className="text-purple-400">*</span>
            </label>
            <input
              type="url"
              name="url"
              id="url"
              value={formData.url}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              placeholder="https://your-website-url.com"
            />
          </div>
          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-300">
              Category <span className="text-purple-400">*</span>
            </label>
            {showCategoryInput ? (
              <div className="mt-1 flex">
                <input
                  type="text"
                  value={newCategoryInput}
                  onChange={(e) => setNewCategoryInput(e.target.value)}
                  className="block w-full rounded-l-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  placeholder="Enter new category..."
                />
                <button
                  type="button"
                  onClick={handleAddCategory}
                  className="inline-flex items-center rounded-r-md border border-l-0 border-gray-700 bg-gray-700 px-3 text-sm hover:bg-gray-600"
                >
                  Add
                </button>
              </div>
            ) : (
              <div className="mt-1 flex">
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-l-md border border-gray-700 bg-gray-800 px-3 py-2 text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  <option value="">Select a category</option>
                  {PREDEFINED_CATEGORIES.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={() => setShowCategoryInput(true)}
                  className="inline-flex items-center rounded-r-md border border-l-0 border-gray-700 bg-gray-700 px-3 text-sm hover:bg-gray-600"
                >
                  New
                </button>
              </div>
            )}
          </div>
          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-300">
              Description <span className="text-purple-400">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder:text-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              placeholder="Describe your website template..."
            />
          </div>
          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full rounded-md px-4 py-3 font-medium text-white ${
                isSubmitting 
                  ? 'cursor-not-allowed bg-purple-800' 
                  : 'bg-purple-600 hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900'
              } transition-all`}
            >
              {isSubmitting ? 'Uploading...' : 'Upload Template'}
            </button>
          </div>
        </form>
        {/* Neon glow effects */}
        <div className="fixed right-1/4 top-20 -z-10 size-64 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="fixed bottom-40 left-1/4 -z-10 size-64 rounded-full bg-blue-500/10 blur-3xl"></div>
      </div>
    </div>
  );
}

export default TemplateUploadForm;