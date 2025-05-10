/* eslint-disable tailwindcss/migration-from-tailwind-2 */
"use client";

import React, { useEffect, useRef, useState } from 'react';

import Footer from '@/components/Footer';
import MeetingBook from '@/components/MeetingBook';
import ModernFuturisticButton from '@/components/ui/Button-Modern-Animations';

function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [showMeetingBook, setShowMeetingBook] = useState(false);

  // Toggle meeting book visibility
  const handleShowMeeting = () => {
    setShowMeetingBook(prev => !prev);
  };

  // Canvas animation effect
  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let animationFrameId: number;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Particles setup
    const particlesArray: Particle[] = [];
    const numberOfParticles = 100;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = this.getRandomColor();
      }
      
      getRandomColor() {
        const colors = [
          'rgba(16, 185, 129, 0.5)',  // emerald
          'rgba(112, 26, 117, 0.3)',  // fuchsia
          'rgba(59, 130, 246, 0.3)'   // blue
        ];
        
return colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (ctx) {
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    
    // Initialize particles
    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };
    
    // Connect nearby particles with lines
    const connect = () => {
      const maxDistance = 150;
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            if (ctx) {
              ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.15})`;
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
              ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
              ctx.stroke();
            }
          }
        }
      }
    };
    
    // Animation loop
    const animate = () => {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw();
        }
        connect();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    init();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black">
        {/* Canvas background for animation */}
        <canvas 
        ref={canvasRef} 
        className="absolute left-0 top-0 size-full" 
        style={{ zIndex: 1 }}
      />
        {/* Dark overlay to increase contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-50" style={{ zIndex: 2 }}></div>
        {/* Content */}
        <div className="relative z-10" style={{ zIndex: 3 }}>
          {/* Hero section with agency branding */}
          <div className="container mx-auto px-4 pb-12 pt-20 text-center">
            <div className="mb-6 inline-block">
              <div className="mb-2 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-400 to-fuchsia-500"></div>
              <div className="ml-8 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-400 to-fuchsia-500"></div>
            </div>
            <h1 className="mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
              Transform Your Digital Presence
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400 md:text-xl">
              Book a consultation with our expert team to discuss how we can elevate your brand with custom web solutions.
            </p>
            <div className="mb-16 flex flex-wrap justify-center gap-6">
              <div className="flex max-w-xs items-center rounded-xl border border-gray-700 bg-gray-800 bg-opacity-70 p-5 backdrop-blur-sm">
                <span className="mr-4 flex size-10 items-center justify-center rounded-full bg-emerald-500 bg-opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="text-left">
                  <h3 className="font-medium text-white">Fast Delivery</h3>
                  <p className="text-sm text-gray-400">Quick turnaround on all projects</p>
                </div>
              </div>
              <div className="flex max-w-xs items-center rounded-xl border border-gray-700 bg-gray-800 bg-opacity-70 p-5 backdrop-blur-sm">
                <span className="mr-4 flex size-10 items-center justify-center rounded-full bg-fuchsia-500 bg-opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-fuchsia-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" />
                  </svg>
                </span>
                <div className="text-left">
                  <h3 className="font-medium text-white">Custom Design</h3>
                  <p className="text-sm text-gray-400">Tailored to your brand identity</p>
                </div>
              </div>
              <div className="flex max-w-xs items-center rounded-xl border border-gray-700 bg-gray-800 bg-opacity-70 p-5 backdrop-blur-sm">
                <span className="mr-4 flex size-10 items-center justify-center rounded-full bg-blue-500 bg-opacity-20">
                  <svg xmlns="http://www.w3.org/2000/svg" className="size-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="text-left">
                  <h3 className="font-medium text-white">Client Focused</h3>
                  <p className="text-sm text-gray-400">Your satisfaction is our priority</p>
                </div>
              </div>
            </div>
            {/* Book a meeting button */}
            {/* <div
            className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-emerald-500/30"
          > */}
            {/* {showMeetingBook ? 
          '': */}
            <ModernFuturisticButton
          text="Book a Meeting"
          action={handleShowMeeting}
          />
            {/* //  } */}

          </div>
          {/* Meeting booking component - only shown when button is clicked */}
          {showMeetingBook && (
          <div className="container mx-auto px-4 py-10">
            <div className="mx-auto max-w-5xl">
              <MeetingBook />
            </div>
          </div>
        )}
        </div>
        {/* Visual elements */}
        <div className="fixed -left-10 top-1/4 size-40 rounded-full bg-emerald-500 opacity-20 blur-3xl"></div>
        <div className="fixed -right-10 bottom-1/3 size-60 rounded-full bg-fuchsia-500 opacity-10 blur-3xl"></div>
      </div>
      <Footer/>
    </>
  );
}

export default Page;