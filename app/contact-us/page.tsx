"use client";

import { useState, FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';
import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';

// Initialize Supabase client - replace with your actual keys in environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    
    try {
      // Insert form data into Supabase table
      const { error } = await supabase
        .from('contact_messages')
        .insert([formData]);
      
      if (error) throw error;
      
      // Clear form on success
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus({
        message: "Message sent successfully! We'll get back to you soon.",
        isError: false
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({
        message: "Failed to send message. Please try again later.",
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar/>
      <div className="min-h-screen bg-black text-gray-200 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-fuchsia-700 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-emerald-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 -right-20 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
        
        {/* Main content */}
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16 relative">
            {/* Decorative lines */}
            <div className="absolute top-1/2 left-0 w-1/4 h-px bg-gradient-to-r from-transparent to-emerald-500 opacity-50"></div>
            <div className="absolute top-1/2 right-0 w-1/4 h-px bg-gradient-to-l from-transparent to-fuchsia-500 opacity-50"></div>
            
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-white to-fuchsia-500">
                Let's Create
              </span>
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-emerald-500 via-white to-fuchsia-500 shadow-lg shadow-fuchsia-500/50"></div>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
              Ready to transform your digital presence? Tell us about your project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-2 bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-800 overflow-hidden relative">
              {/* Glow border effect */}
              <div className="absolute inset-0 rounded-2xl" 
                style={{
                  boxShadow: '0 0 40px rgba(16, 185, 129, 0.15) inset, 0 0 20px rgba(112, 26, 117, 0.15) inset',
                  pointerEvents: 'none'
                }}></div>
              
              {/* Header stripe */}
              <div className="h-2 w-full bg-gradient-to-r from-emerald-500 to-fuchsia-500"></div>
              
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold mb-8 text-white flex items-center">
                  <span className="w-8 h-8 mr-3 rounded-full bg-emerald-500 bg-opacity-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                    </svg>
                  </span>
                  Send Us a Message
                </h2>
              
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder-gray-500"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder-gray-500"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder-gray-500"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder-gray-500"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>
                  
                  {status && (
                    <div className={`py-3 px-4 rounded-lg ${status.isError ? 'bg-red-900 bg-opacity-30 text-red-200 border border-red-800' : 'bg-emerald-900 bg-opacity-30 text-emerald-200 border border-emerald-800'}`}>
                      {status.message}
                    </div>
                  )}
                  
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center items-center py-4 px-6 rounded-lg text-lg font-medium text-black bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-emerald-500 transition-all duration-300 relative overflow-hidden shadow-lg shadow-emerald-500/20 disabled:opacity-70"
                    >
                      <span className="relative z-10 flex items-center">
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </>
                        ) : (
                          <>
                            Submit Message 
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
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
            
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              {/* Virtual Office Card */}
              <div className="bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-2xl border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-fuchsia-500/10 transition-all duration-500 group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-1 w-full bg-fuchsia-500"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <span className="w-8 h-8 mr-3 rounded-full bg-fuchsia-500 bg-opacity-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-fuchsia-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </span>
                    About Us
                  </h3>
                  <div className="text-gray-400">
                    <p>We're a remote-first digital agency, serving clients worldwide with innovative design solutions.</p>
                    <p className="mt-2">Our team collaborates virtually to deliver exceptional results for every project.</p>
                  </div>
                </div>
              </div>
              
              {/* Email Card */}
              <div className="bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-2xl border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-500 group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-1 w-full bg-emerald-500"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <span className="w-8 h-8 mr-3 rounded-full bg-emerald-500 bg-opacity-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </span>
                    Email Us
                  </h3>
                  <p className="text-gray-400">
                    <a href="mailto:official.electroplix@gmail.com" className="text-emerald-400 hover:text-white transition-colors">official.electroplix@gmail.com</a>
                  </p>
                  <p className="text-gray-400 mt-1">
                    <a href="mailto:help.electroplix@gmail.com" className="text-emerald-400 hover:text-white transition-colors">help.electroplix@gmail.com</a>
                  </p>
                </div>
              </div>
              
              {/* Phone Card */}
              <div className="bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-2xl border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-500 group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-1 w-full bg-indigo-500"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <span className="w-8 h-8 mr-3 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </span>
                    Call Us
                  </h3>
                  <p className="text-gray-400">
                    <a href="tel:+918290393487" className="text-indigo-400 hover:text-white transition-colors">+91-8290393487</a>
                  </p>
                </div>
              </div>
              
              {/* Hours Card */}
              <div className="bg-gray-900 bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-2xl border border-gray-800 overflow-hidden hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-500 group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-1 w-full bg-amber-500"></div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-2 flex items-center">
                    <span className="w-8 h-8 mr-3 rounded-full bg-amber-500 bg-opacity-20 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Business Hours
                  </h3>
                  <dl className="divide-y divide-gray-800">
                    <div className="flex justify-between py-1">
                      <dt className="text-gray-400">Mon - Fri</dt>
                      <dd className="text-gray-300">9:00 AM - 6:00 PM</dd>
                    </div>
                    <div className="flex justify-between py-1">
                      <dt className="text-gray-400">Saturday</dt>
                      <dd className="text-gray-300">10:00 AM - 4:00 PM</dd>
                    </div>
                    <div className="flex justify-between py-1">
                      <dt className="text-gray-400">Sunday</dt>
                      <dd className="text-gray-300">Closed</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section - Virtual Connect */}
          <div className="mt-16 relative rounded-2xl overflow-hidden h-64 border border-gray-800 shadow-lg shadow-emerald-500/5">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <span className="w-10 h-10 rounded-full bg-emerald-500 bg-opacity-20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
                <h3 className="text-lg font-medium text-white mb-1">Connect Virtually</h3>
                <p className="text-gray-400 mb-4">Schedule a video consultation with our team</p>
                <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-black bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors">
                  Book a Meeting
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-30" style={{
              backgroundImage: 'linear-gradient(to right, #0f1014 1px, transparent 1px), linear-gradient(to bottom, #0f1014 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              backgroundPosition: 'center center',
              pointerEvents: 'none'
            }}></div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}