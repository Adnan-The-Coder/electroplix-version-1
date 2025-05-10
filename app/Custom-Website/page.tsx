/* eslint-disable no-unused-vars */
/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";
import { useState, FormEvent } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    industry: "",
    websiteType: "business",
    budget: "1000-3000",
    features: [] as string[],
    timeline: "1-2 months",
    description: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);

  const websiteTypes = [
    { value: "business", label: "Business Website" },
    { value: "ecommerce", label: "E-Commerce Store" },
    { value: "portfolio", label: "Portfolio/Showcase" },
    { value: "blog", label: "Blog/Content" },
    { value: "web-app", label: "Web Application" },
  ];

  const budgetRanges = [
    { value: "under-1000", label: "Under $1,000" },
    { value: "1000-3000", label: "$ 1,000 - $ 3,000" },
    { value: "3000-5000", label: "$ 3,000 - $ 5,000" },
    { value: "5000-10000", label: "$ 5,000 - $ 10,000" },
    { value: "10000-plus", label: "$ 10,000+" },
  ];

  const timelineOptions = [
    { value: "asap", label: "As soon as possible" },
    { value: "2-weeks", label: "Within 2 weeks" },
    { value: "1-2 months", label: "1-2 months" },
    { value: "3-6 months", label: "3-6 months" },
    { value: "flexible", label: "Flexible" },
  ];

  const featureOptions = [
    { value: "responsive", label: "Responsive Design" },
    { value: "cms", label: "Content Management System" },
    { value: "seo", label: "SEO Optimization" },
    { value: "analytics", label: "Analytics Integration" },
    { value: "payment", label: "Payment Processing" },
    { value: "membership", label: "User Accounts/Membership" },
    { value: "blog", label: "Blog Section" },
    { value: "contact", label: "Contact Form" },
    { value: "social", label: "Social Media Integration" },
    { value: "multilingual", label: "Multilingual Support" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFeatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      features: checked
        ? [...prev.features, value]
        : prev.features.filter(feature => feature !== value)
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    
    try {
      // Insert form data into Supabase table
      const { error } = await supabase
        .from('website_requirements')
        .insert([formData]);
      
      if (error) throw error;
      
      setStatus({
        message: "Your requirements have been submitted successfully! We'll contact you soon.",
        isError: false
      });
      
      // Clear form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        industry: "",
        websiteType: "business",
        budget: "1000-3000",
        features: [],
        timeline: "1-2 months",
        description: "",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        message: "Failed to submit your requirements. Please try again later.",
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen overflow-hidden bg-black px-4 py-16 text-gray-200 sm:px-6 lg:px-8">
        {/* Grid background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(to right, #0f1014 1px, transparent 1px), linear-gradient(to bottom, #0f1014 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            backgroundPosition: 'center center'
          }}></div>
        </div>
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-black opacity-70"></div>
        {/* Accent glow orbs */}
        <div className="absolute -left-20 -top-20 size-96 animate-pulse rounded-full bg-purple-700 opacity-10 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-20 size-96 animate-pulse rounded-full bg-cyan-600 opacity-10 blur-3xl"></div>
        <div className="absolute -right-20 top-1/2 size-64 animate-pulse rounded-full bg-blue-600 opacity-10 blur-3xl"></div>
        {/* Main content */}
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="relative mb-16 text-center">
            {/* Decorative lines */}
            <div className="absolute left-0 top-1/2 h-px w-1/4 bg-gradient-to-r from-transparent to-cyan-500 opacity-50"></div>
            <div className="absolute right-0 top-1/2 h-px w-1/4 bg-gradient-to-l from-transparent to-purple-500 opacity-50"></div>
            <h1 className="relative mb-4 text-5xl font-black tracking-tighter md:text-7xl">
              <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-500 bg-clip-text text-transparent">
                Custom Website
              </span>
              <div className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-cyan-500 via-white to-purple-500 shadow-lg shadow-purple-500/50"></div>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-400">
              Tell us about your dream website and we`ll bring it to life with cutting-edge design and technology.
            </p>
          </div>
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-3">
            {/* Requirements Form */}
            <div className="relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 bg-opacity-60 shadow-2xl backdrop-blur-lg lg:col-span-2">
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl" 
                style={{
                  boxShadow: '0 0 40px rgba(34, 211, 238, 0.15) inset, 0 0 20px rgba(168, 85, 247, 0.15) inset',
                  pointerEvents: 'none'
                }}></div>
              {/* Header stripe */}
              <div className="h-2 w-full bg-gradient-to-r from-cyan-500 to-purple-500"></div>
              <div className="p-8 md:p-10">
                <h2 className="mb-8 flex items-center text-2xl font-bold text-white">
                  <span className="mr-3 flex size-8 items-center justify-center rounded-full bg-cyan-500 bg-opacity-20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Website Requirements
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-200 transition-all placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-200 transition-all placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-200 transition-all placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="mb-1 block text-sm font-medium text-gray-300">
                        Company/Organization Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-200 transition-all placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="industry" className="mb-1 block text-sm font-medium text-gray-300">
                      Industry/Sector
                    </label>
                    <input
                      type="text"
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-200 transition-all placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="e.g. Healthcare, Technology, Education"
                    />
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="websiteType" className="mb-1 block text-sm font-medium text-gray-300">
                        Website Type
                      </label>
                      <select
                        id="websiteType"
                        name="websiteType"
                        value={formData.websiteType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-200 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        {websiteTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="mb-1 block text-sm font-medium text-gray-300">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-200 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        {budgetRanges.map((range) => (
                          <option key={range.value} value={range.value}>
                            {range.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="mb-1 block text-sm font-medium text-gray-300">
                      Preferred Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-200 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      {timelineOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-3 block text-sm font-medium text-gray-300">
                      Features Required
                    </label>
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {featureOptions.map((feature) => (
                        <div key={feature.value} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`feature-${feature.value}`}
                            name="features"
                            value={feature.value}
                            checked={formData.features.includes(feature.value)}
                            onChange={handleFeatureChange}
                            className="size-4 rounded border-gray-700 bg-gray-800 text-cyan-500 focus:ring-cyan-500"
                          />
                          <label htmlFor={`feature-${feature.value}`} className="ml-2 text-sm text-gray-300">
                            {feature.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="description" className="mb-1 block text-sm font-medium text-gray-300">
                      Project Description
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={5}
                      className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-gray-200 transition-all placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Describe your website project, goals, specific requirements, and any other details that would help us understand your vision..."
                    />
                  </div>
                  {status && (
                    <div className={`rounded-lg px-4 py-3 ${status.isError ? 'border border-red-800 bg-red-900 bg-opacity-30 text-red-200' : 'border border-cyan-800 bg-cyan-900 bg-opacity-30 text-cyan-200'}`}>
                      {status.message}
                    </div>
                  )}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-4 text-lg font-medium text-black shadow-lg shadow-purple-500/20 transition-all duration-300 hover:from-cyan-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70"
                    >
                      <span className="relative z-10 flex items-center">
                        {isSubmitting ? (
                          <>
                            <svg className="-ml-1 mr-3 size-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            Submit Requirements 
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 size-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* Sidebar Information */}
            <div className="space-y-6 lg:col-span-1">
              {/* Our Process Card */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 bg-opacity-60 backdrop-blur-lg transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="h-1 w-full bg-purple-500"></div>
                <div className="p-6">
                  <h3 className="mb-4 flex items-center text-lg font-semibold text-white">
                    <span className="mr-3 flex size-8 items-center justify-center rounded-full bg-purple-500 bg-opacity-20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Our Design Process
                  </h3>
                  <ol className="space-y-4">
                    {[
                      { title: "Discovery", desc: "We learn about your business, goals, and target audience" },
                      { title: "Planning", desc: "Creating sitemaps and wireframes to outline the website structure" },
                      { title: "Design", desc: "Crafting beautiful, responsive mockups for your approval" },
                      { title: "Development", desc: "Building your site with clean, efficient code" },
                      { title: "Launch", desc: "Testing, optimization, and deployment of your new website" }
                    ].map((step, index) => (
                      <li key={index} className="flex">
                        <div className="mr-3 flex size-8 shrink-0 items-center justify-center rounded-full bg-purple-900 bg-opacity-30 text-sm font-bold text-purple-400">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium text-white">{step.title}</h4>
                          <p className="text-sm text-gray-400">{step.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              {/* Technologies Card */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 bg-opacity-60 backdrop-blur-lg transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="h-1 w-full bg-cyan-500"></div>
                <div className="p-6">
                  <h3 className="mb-4 flex items-center text-lg font-semibold text-white">
                    <span className="mr-3 flex size-8 items-center justify-center rounded-full bg-cyan-500 bg-opacity-20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Technologies We Use
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      "React", "Next.js", "JAVA", "Node.js", "Maven",
                      "Cloudflare", "GCP", "AWS", "MongoDB", "MySQL", "PostreSQL","Supabase","NeonDB","Tailwind"
                    ].map((tech, index) => (
                      <div key={index} className="rounded-lg border border-gray-700 bg-gray-800 bg-opacity-50 p-2 text-center text-sm text-cyan-300 transition-colors hover:border-cyan-500">
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Testimonial Card */}
              <div className="group relative overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 bg-opacity-60 backdrop-blur-lg transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                <div className="h-1 w-full bg-blue-500"></div>
                <div className="p-6">
                  <h3 className="mb-4 flex items-center text-lg font-semibold text-white">
                    <span className="mr-3 flex size-8 items-center justify-center rounded-full bg-blue-500 bg-opacity-20">
                      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Client Testimonials
                  </h3>
                  <div className="space-y-4">
                    <blockquote className="border-l-2 border-blue-500 pl-4 italic text-gray-300">
                      ``Electroplix transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. The team was professional, responsive, and delivered beyond our expectations.``
                      <footer className="mt-2 text-sm not-italic text-gray-400">— Sarah Johnson, Marketing Director</footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfolio Showcase */}
          {/* <div className="mt-16 relative rounded-2xl overflow-hidden border border-gray-800 shadow-lg shadow-purple-500/5">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-80 backdrop-filter backdrop-blur-sm"></div>
            <div className="relative z-10 p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-white">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                    Our Recent Projects
                  </span>
                </h2>
                <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
                  Browse through our portfolio of custom websites we've created for clients across various industries.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="group relative rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500 transition-all duration-300">
                    <div className="aspect-w-16 aspect-h-9 bg-gray-800 relative">
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
                      <div className="text-center p-4">
                        <h3 className="text-white font-medium">Project {item}</h3>
                        <p className="text-gray-400 text-sm">Website Design & Development</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-white font-medium">Client {item}</h3>
                    <p className="text-gray-400 text-sm mb-2">E-commerce Platform</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-purple-900 bg-opacity-30 text-purple-300 px-2 py-1 rounded">React</span>
                      <span className="text-xs bg-cyan-900 bg-opacity-30 text-cyan-300 px-2 py-1 rounded">Next.js</span>
                      <span className="text-xs bg-blue-900 bg-opacity-30 text-blue-300 px-2 py-1 rounded">Tailwind</span>
                    </div>
                  </div>
                </div>
              ))}
              </div>
              
              <div className="text-center mt-8">
                <a href="#" className="inline-flex items-center px-6 py-3 border border-purple-500 text-base font-medium rounded-lg text-purple-400 bg-transparent hover:bg-purple-900 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-purple-500 transition-all duration-300">
                  View Full Portfolio
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div> */}
          
          {/* FAQ Section */}
          <div className="relative mt-16">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold text-white">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Frequently Asked Questions
                </span>
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-gray-400">
                Common questions about our custom website development services
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {[
                {
                  q: "How long does it take to build a custom website?",
                  a: "The timeline varies based on complexity. A simple website might take 2-4 weeks, while more complex projects can take 2-3 months. We'll provide a detailed timeline after understanding your requirements."
                },
                {
                  q: "What information do you need to get started?",
                  a: "We need your business details, target audience, design preferences, functionality requirements, and content. The form above covers the essentials, and we'll discuss further details during our initial consultation."
                },
                {
                  q: "Do you provide website maintenance after launch?",
                  a: "Yes, we offer various maintenance packages to keep your website secure, updated, and performing optimally. We can discuss these options once your project is nearing completion."
                },
                {
                  q: "Can you redesign my existing website?",
                  a: "Absolutely! We specialize in redesigning existing websites to improve their look, functionality, and performance while preserving your brand identity and SEO value."
                },
                {
                  q: "Do you provide hosting services?",
                  a: "Yes, we offer reliable hosting solutions optimized for the technologies we use. We can also work with your existing hosting provider if preferred."
                },
                {
                  q: "How do you handle website security?",
                  a: "Security is built into our development process. We implement SSL certificates, secure coding practices, regular updates, and other security measures to protect your website and user data."
                }
              ].map((faq, index) => (
                <div key={index} className="rounded-xl border border-gray-800 bg-gray-900 bg-opacity-60 p-6 backdrop-blur-lg transition-all duration-300 hover:border-cyan-500">
                  <h3 className="mb-2 text-lg font-semibold text-white">{faq.q}</h3>
                  <p className="text-gray-400">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
          {/* CTA Section */}
          <div className="relative mt-16 overflow-hidden rounded-2xl border border-gray-800 shadow-lg shadow-purple-500/10">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black"></div>
            {/* Decorative elements */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500"></div>
            <div className="absolute -left-20 -top-20 size-64 rounded-full bg-purple-600 opacity-10 blur-3xl"></div>
            <div className="absolute -bottom-20 -right-20 size-64 rounded-full bg-cyan-600 opacity-10 blur-3xl"></div>
            <div className="relative z-10 p-8 text-center md:p-12">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Ready to Transform Your Online Presence?
                </span>
              </h2>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300">
                Fill out the form above to get started on your custom website journey. Our team is excited to bring your vision to life!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/book-meeting" className="inline-flex items-center rounded-lg border border-transparent bg-gradient-to-r from-cyan-400 to-purple-500 px-6 py-3 text-base font-medium text-black shadow-sm transition-all duration-300 hover:from-cyan-500 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900">
                  Schedule a Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 size-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </Link>
                {/* <a href="#" className="inline-flex items-center px-6 py-3 border border-cyan-500 text-base font-medium rounded-lg text-cyan-400 bg-transparent hover:bg-cyan-900 hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-500 transition-all duration-300">
                  View Pricing
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;