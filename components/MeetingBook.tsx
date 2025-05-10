/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";

import { useState, useEffect, FormEvent } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function MeetingBook() {
  const [isVisible, setIsVisible] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    date: '',
    time: '',
    topic: '',
    additionalInfo: ''
  });
  
  const [availableTimes, setAvailableTimes] = useState<string[]>([
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00'
  ]);

  const [status, setStatus] = useState<{
    message: string;
    isError: boolean;
  } | null>(null);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle close function
  const handleClose = () => {
    setIsVisible(false);
  };

  // Close modal with escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleEsc);
    
return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Prevent scrolling when modal is visible
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  // Get minimum date for date picker (tomorrow)
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    
return tomorrow.toISOString().split('T')[0];
  };

  // Check if selected date is a weekend
  const isWeekend = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDay();
    
return day === 0 || day === 6; // 0 is Sunday, 6 is Saturday
  };

  // Update available times based on selected date
  useEffect(() => {
    if (formData.date) {
      if (isWeekend(formData.date)) {
        // Weekend hours
        if (new Date(formData.date).getDay() === 6) { // Saturday
          setAvailableTimes(['10:00', '11:00', '12:00', '13:00']);
        } else { // Sunday
          setAvailableTimes([]); // No availability on Sunday
        }
      } else {
        // Weekday hours
        setAvailableTimes(['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00']);
      }
      
      // Clear selected time if no longer available
      if (formData.time && !availableTimes.includes(formData.time)) {
        setFormData(prev => ({ ...prev, time: '' }));
      }
    }
  }, [formData.date]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(null);
    
    try {
      // Insert meeting booking data into Supabase table
      const { error } = await supabase
        .from('meeting_bookings')
        .insert([formData]);
      
      if (error) throw error;
      
      // Clear form on success
      setFormData({ 
        name: '', 
        email: '', 
        company: '', 
        date: '', 
        time: '', 
        topic: '', 
        additionalInfo: '' 
      });
      
      setStatus({
        message: "Meeting scheduled successfully! We'll send you a confirmation email shortly.",
        isError: false
      });
      
      // Close modal after successful submission with a small delay
      setTimeout(() => {
        handleClose();
      }, 3000);
    } catch (error) {
      console.error('Error scheduling meeting:', error);
      setStatus({
        message: "Failed to schedule meeting. Please try again later.",
        isError: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0  overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm transition-opacity " 
        onClick={handleClose}
      ></div>
      {/* Modal container */}
      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div 
          className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 text-left shadow-xl transition-all sm:my-8"
          onClick={e => e.stopPropagation()}
        >
          {/* Glow border effect */}
          <div className="absolute inset-0 rounded-2xl" 
            style={{
              boxShadow: '0 0 40px rgba(16, 185, 129, 0.15) inset, 0 0 20px rgba(112, 26, 117, 0.15) inset',
              pointerEvents: 'none'
            }}>
          </div>
          {/* Header stripe */}
          <div className="h-2 w-full bg-gradient-to-r from-emerald-500 to-fuchsia-500"></div>
          {/* Close button */}
          <button
            className="absolute right-3 top-3 rounded-full p-1 text-gray-400 transition-colors hover:bg-gray-800 hover:text-white"
            onClick={handleClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="p-6 sm:p-8">
            <h3 className="mb-6 flex items-center text-2xl font-bold text-white">
              <span className="mr-3 flex size-8 items-center justify-center rounded-full bg-emerald-500 bg-opacity-20">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
              </span>
              Schedule a Meeting
            </h3>
            <p className="mb-6 text-gray-400">
              Book a virtual consultation with our team to discuss your project needs.
            </p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-gray-200 transition-all placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-gray-200 transition-all placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="mb-1 block text-sm font-medium text-gray-300">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-gray-200 transition-all placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your Company"
                />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="date" className="mb-1 block text-sm font-medium text-gray-300">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={getMinDate()}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-gray-200 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  {formData.date && isWeekend(formData.date) && new Date(formData.date).getDay() === 0 && (
                    <p className="mt-1 text-xs text-amber-400">We're closed on Sundays. Please select another day.</p>
                  )}
                </div>
                <div>
                  <label htmlFor="time" className="mb-1 block text-sm font-medium text-gray-300">
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    disabled={!formData.date || availableTimes.length === 0}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-gray-200 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select a time</option>
                    {availableTimes.map(time => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="topic" className="mb-1 block text-sm font-medium text-gray-300">
                  Meeting Topic *
                </label>
                <input
                  type="text"
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-gray-200 transition-all placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Website Development, App Design, etc."
                />
              </div>
              <div>
                <label htmlFor="additionalInfo" className="mb-1 block text-sm font-medium text-gray-300">
                  Additional Information
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  rows={3}
                  className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2.5 text-gray-200 transition-all placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Tell us more about what you'd like to discuss..."
                />
              </div>
              {status && (
                <div className={`rounded-lg px-4 py-3 ${status.isError ? 'border border-red-800 bg-red-900 bg-opacity-30 text-red-200' : 'border border-emerald-800 bg-emerald-900 bg-opacity-30 text-emerald-200'}`}>
                  {status.message}
                </div>
              )}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || (formData.date && new Date(formData.date).getDay() === 0) || undefined}
                  className="relative flex w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-emerald-400 to-emerald-500 px-6 py-3 text-base font-medium text-black shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:from-emerald-500 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-70"
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
                        Schedule Meeting
                        <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 size-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
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
    </div>
  );
}