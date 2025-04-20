"use client";

import { useState, FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';
import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import BuildTogetherQuatation from '@/components/BuildTogetherQuatation';
import MeetingBook from '@/components/MeetingBook';
import Link from 'next/link';
import { HiOutlineUserGroup, HiOutlineMail,HiOutlineUsers, HiOutlinePhone, HiOutlineCalendar } from 'react-icons/hi';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, FaFacebook } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function ContactPage() {
  const [isMeetingModalOpen, setIsMeetingModalOpen] = useState(false);
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
  const [activeTab, setActiveTab] = useState('message'); // 'message', 'support', 'partnership'

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
        .insert([{...formData, type: activeTab}]);
      
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
  const socials = [
    { name: 'Twitter', icon: <FaTwitter className="h-4 w-4 text-white" />, link: 'https://x.com/Electroplix_' },
    { name: 'LinkedIn', icon: <FaLinkedinIn className="h-4 w-4 text-white" />, link: 'http://linkedin.com/company/electroplix/' },
    { name: 'Instagram', icon: <FaInstagram className="h-4 w-4 text-white" />, link: 'https://www.instagram.com/electroplixofficial/' },
    { name: 'Facebook', icon: <FaFacebook className="h-4 w-4 text-white" />, link: 'https://www.facebook.com/people/Electroplix/61565564645521/' },
  ];

  return (
    <>
      <Navbar/>
      
      <div className="min-h-screen bg-black text-gray-200 relative overflow-hidden">
        {/* Hexagon pattern background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556l-1.414-1.414L28 0h4zM.284 0l28 28-1.414 1.414L0 2.544v-2.26zM0 5.373l25.456 25.455-1.414 1.415L0 8.2V5.374zm0 5.656l22.627 22.627-1.414 1.414L0 13.86v-2.83zm0 5.656l19.8 19.8-1.415 1.413L0 19.514v-2.83zm0 5.657l16.97 16.97-1.414 1.415L0 25.172v-2.83zM0 28l14.142 14.142-1.414 1.414L0 30.828V28zm0 5.657L11.314 44.97 9.9 46.386l-9.9-9.9v-2.828zm0 5.657L8.485 47.8 7.07 49.212 0 42.143v-2.83zm0 5.657l5.657 5.657-1.414 1.415L0 47.8v-2.83zm0 5.657l2.828 2.83-1.414 1.413L0 53.456v-2.83zM54.627 60L30 35.373 5.373 60H8.2L30 38.2 51.8 60h2.827zm-5.656 0L30 41.03 11.03 60h2.828L30 43.858 46.142 60h2.83zm-5.656 0L30 46.686 16.686 60h2.83L30 49.515 40.485 60h2.83zm-5.657 0L30 52.343 22.344 60h2.83L30 55.172 34.828 60h2.83zM32 60l-2-2-2 2h4zM59.716 0l-28 28 1.414 1.414L60 2.544V.283zm0 5.657L34.26 30.858l1.414 1.414L60 8.2V5.374zm0 5.656L37.088 33.484l1.414 1.414L60 13.86v-2.83zm0 5.657l-19.8 19.8 1.415 1.413L60 19.514v-2.83zm0 5.657l-16.97 16.97 1.414 1.415L60 25.172v-2.83zM60 28L45.858 42.142l1.414 1.414L60 30.828V28zm0 5.657L48.686 44.97l1.415 1.415 9.9-9.9v-2.828zm0 5.657L51.515 47.8l1.414 1.413 7.07-7.07v-2.83zm0 5.657l-5.657 5.657 1.414 1.415L60 47.8v-2.83zm0 5.657l-2.828 2.83 1.414 1.413L60 53.456v-2.83zM39.9 16.385l1.414-1.414L30 3.658 18.686 14.97l1.415 1.415 9.9-9.9 9.9 9.9zm-2.83 2.828l1.415-1.414L30 9.313 21.515 17.8l1.414 1.413L30 12.143l7.07 7.07zm-2.827 2.83l1.414-1.416L30 14.97l-5.657 5.657 1.414 1.415L30 17.8l4.243 4.242zm-2.83 2.827l1.415-1.414L30 20.626l-2.828 2.83 1.414 1.414L30 23.456l1.414 1.414zM56.87 59.414L58.284 58 30 29.716 1.716 58l1.414 1.414L30 32.544l26.87 26.87z' fill='%23a78bfa' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-black via-black to-black opacity-80"></div>
        
        {/* Accent glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-700 rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-600 rounded-full filter blur-3xl opacity-10 animate-pulse-slow"></div>
        
        {/* Hero Section with 3D-like elements */}
        <div className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* 3D floating elements */}
              <div className="absolute -top-10 left-1/4 w-20 h-20 bg-indigo-500 bg-opacity-20 rounded-lg transform rotate-12 animate-float-slow hidden md:block"></div>
              <div className="absolute top-20 right-1/4 w-16 h-16 bg-fuchsia-500 bg-opacity-20 rounded-full transform -rotate-12 animate-float-slow-reverse hidden md:block"></div>
              <div className="absolute -bottom-10 left-1/3 w-24 h-24 bg-indigo-500 bg-opacity-10 rounded-lg transform -rotate-45 animate-float hidden md:block"></div>
              
              <div className="text-center relative z-10">
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-indigo-400 animate-gradient-x">
                      Connect
                    </span>
                  </span>
                  <span className="inline-block ml-4 transform hover:scale-105 transition-transform duration-300">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-indigo-500 to-fuchsia-400 animate-gradient-x">
                      With Us
                    </span>
                  </span>
                </h1>
                <div className="h-px w-40 md:w-60 mx-auto bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500 mb-8"></div>
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  We're just a message away. Let's start a conversation about your digital needs.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content with glass cards */}
        <div className="relative px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Contact Options Tabs */}
            <div className="flex flex-wrap justify-center mb-12 gap-4">
              {[
                { id: 'message', label: 'Send Message', icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                )},
                { id: 'support', label: 'Get Support', icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                  </svg>
                )},
                { id: 'partnership', label: 'Partnership', icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                )}
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id 
                      ? 'bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow-lg shadow-indigo-500/30' 
                      : 'bg-gray-800 bg-opacity-50 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <span className="mr-2">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              {/* Contact Form - Spans 3 columns */}
              <div className="lg:col-span-3 relative">
                <div className="relative bg-gray-900 bg-opacity-40 backdrop-filter backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-800 shadow-2xl transform transition-all duration-500 hover:shadow-indigo-500/20">
                  {/* Animated border glow */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500 animate-gradient-x"></div>
                    <div className="absolute inset-y-0 right-0 w-1 h-full bg-gradient-to-b from-fuchsia-500 via-indigo-500 to-fuchsia-500 animate-gradient-y"></div>
                    <div className="absolute inset-x-0 bottom-0 h-1 w-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500 animate-gradient-x"></div>
                    <div className="absolute inset-y-0 left-0 w-1 h-full bg-gradient-to-b from-fuchsia-500 via-indigo-500 to-fuchsia-500 animate-gradient-y"></div>
                  </div>
                  
                  <div className="p-8 md:p-10 relative z-10">
                    <div className="flex items-center mb-8">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 mr-4">
                        {activeTab === 'message' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        )}
                        {activeTab === 'support' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                          </svg>
                        )}
                        {activeTab === 'partnership' && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                          </svg>
                        )}
                      </div>
                      <h2 className="text-2xl font-bold text-white">
                        {activeTab === 'message' && 'Send Us a Message'}
                        {activeTab === 'support' && 'Get Technical Support'}
                        {activeTab === 'partnership' && 'Explore Partnership'}
                      </h2>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative group">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1 ml-1">
                            Your Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-gray-500 group-hover:border-indigo-400"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="relative group">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1 ml-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-gray-500 group-hover:border-indigo-400"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>
                      
                      <div className="relative group">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1 ml-1">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-gray-500 group-hover:border-indigo-400"
                          placeholder={
                            activeTab === 'message' ? 'How can we help you?' : 
                            activeTab === 'support' ? 'Describe your technical issue' : 
                            'Partnership opportunity'
                          }
                        />
                      </div>
                      
                      <div className="relative group">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1 ml-1">
                          {activeTab === 'message' ? 'Your Message' : 
                           activeTab === 'support' ? 'Describe Your Issue' : 
                           'Partnership Details'}
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={6}
                          className="w-full bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all placeholder-gray-500 group-hover:border-indigo-400"
                          placeholder={
                            activeTab === 'message' ? 'Tell us about your project, goals, and timeline...' : 
                            activeTab === 'support' ? 'Please provide details about your issue including any error messages...' : 
                            'Tell us about your company and how you envision our partnership...'
                          }
                        />
                      </div>
                      
                      {status && (
                        <div className={`py-3 px-4 rounded-xl ${status.isError ? 'bg-red-900 bg-opacity-30 text-red-200 border border-red-800' : 'bg-indigo-900 bg-opacity-30 text-indigo-200 border border-indigo-800'}`}>
                          {status.message}
                        </div>
                      )}
                      
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full flex justify-center items-center py-4 px-6 rounded-xl text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-700 hover:to-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-all duration-300 relative overflow-hidden shadow-lg shadow-indigo-500/30 disabled:opacity-70"
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
                                {activeTab === 'message' && 'Send Message'}
                                {activeTab === 'support' && 'Submit Support Request'}
                                {activeTab === 'partnership' && 'Submit Partnership Inquiry'}
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
              </div>
              
              {/* Right Side Info - Spans 2 columns */}
              <div className="lg:col-span-2 space-y-8">
                {/* Connect Card */}
                <div className="bg-gray-900 bg-opacity-40 backdrop-filter backdrop-blur-xl rounded-3xl border border-gray-800 overflow-hidden transform transition-all duration-500 hover:shadow-indigo-500/20 hover:border-indigo-500/50">
                <div className="p-8">
                <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 mr-4">
                    <HiOutlineUserGroup className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Connect Directly</h3>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <MdMail className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Email Us</p>
                        <Link href="mailto:help.electroplix@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        help.electroplix@gmail.com
                        </Link>
                        <br />
                        <Link href="mailto:official.electroplix@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        official.electroplix@gmail.com
                        </Link>
                    </div>
                    </div>

                    <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gray-800 flex items-center justify-center mr-3">
                        <HiOutlinePhone className="h-5 w-5 text-indigo-400" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-400">Call Us</p>
                        <a href="tel:+918290393487" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                        +91 8290393487
                        </a>
                    </div>
                    </div>
                </div>

                <div className="mt-8">
                    <button 
                    onClick={() => window.open('book-meeting')}
                    className="w-full flex justify-center items-center py-3 px-4 rounded-xl text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-fuchsia-600 hover:from-indigo-700 hover:to-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-all duration-300"
                    >
                    <HiOutlineCalendar className="h-5 w-5 mr-2" />
                    Schedule a Meeting
                    </button>
                </div>
                </div>
                </div>
                
                {/* Social Media Card */}
                <div className="bg-gray-900 bg-opacity-40 backdrop-filter backdrop-blur-xl rounded-3xl border border-gray-800 overflow-hidden transform transition-all duration-500 hover:shadow-fuchsia-500/20 hover:border-fuchsia-500/50">
                    <div className="p-8">
                        <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-fuchsia-500/30 mr-4">
                            <HiOutlineUsers className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">Follow Us</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                        {socials.map((social, index) => (
                            <a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center p-3 rounded-xl bg-gray-800 bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 border border-gray-700 hover:border-fuchsia-500 group"
                            >
                            <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center mr-3 group-hover:bg-fuchsia-600 transition-colors duration-300">
                                {social.icon}
                            </div>
                            <span className="text-gray-300 group-hover:text-white transition-colors duration-300">{social.name}</span>
                            </a>
                        ))}
                        </div>
                    </div>
                </div>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="mt-20 relative rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 to-fuchsia-900/90"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-indigo-500"></div>
              <div className="absolute -top-20 -left-20 w-64 h-64 bg-indigo-600 rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-fuchsia-600 rounded-full filter blur-3xl opacity-20"></div>
              
              <div className="relative z-10 p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Start Your Digital Journey?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Let's create something amazing together. Reach out to us today and take the first step towards transforming your online presence.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => window.open('book-meeting')}
                    className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-xl shadow-lg shadow-indigo-500/30 text-black bg-gradient-to-r from-indigo-400 to-fuchsia-400 hover:from-indigo-500 hover:to-fuchsia-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-all duration-300"
                  >
                    Schedule a Consultation
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}