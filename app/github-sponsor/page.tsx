'use client';

import React, { useState, useEffect } from 'react';
import { CreditCard, Heart, Gift, ChevronRight, Check, ArrowRight, DollarSign, Zap } from 'lucide-react';

export default function SponsorPage() {
  const [amount, setAmount] = useState(5);
  const [customAmount, setCustomAmount] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [formStep, setFormStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  // Simulated animation for button hover effect
  const [pulseEffect, setPulseEffect] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseEffect(prev => !prev);
    }, 2000);
    
return () => clearInterval(interval);
  }, []);

  const handlePredefinedAmount = (value:any) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmount = (e:any) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(value);
    if (value) {
      setAmount(parseInt(value));
    } else {
      setAmount(5); // Default if custom amount is cleared
    }
  };

  const formatCardNumber = (input:any) => {
    const value = input.replace(/\s/g, '').replace(/[^0-9]/g, '');
    const parts = [];
    for (let i = 0; i < value.length && i < 16; i += 4) {
      parts.push(value.substring(i, i + 4));
    }
    
return parts.join(' ');
  };

  const handleCardNumberChange = (e:any) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
  };

  const formatExpiryDate = (input:any) => {
    const value = input.replace(/[^0-9]/g, '');
    if (value.length <= 2) return value;
    
return `${value.substring(0, 2)}/${value.substring(2, 4)}`;
  };

  const handleExpiryDateChange = (e:any) => {
    const formatted = formatExpiryDate(e.target.value);
    setExpiryDate(formatted);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (formStep === 0) {
      setFormStep(1);
    } else {
      // Simulate processing
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setFormStep(2); // Success state
      }, 1500);
    }
  };

  const predefinedAmounts = [5, 10, 25, 50, 100];

  // Animation classes for elements
  const glowEffect = "animate-pulse bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full absolute inset-0 blur-lg";
  const gradientText = "bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600";
  const buttonGradient = "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700";

  return (
    <div className="flex min-h-screen flex-col bg-gray-900 text-white">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="animate-blob absolute left-10 top-10 size-64 rounded-full bg-purple-600/30 blur-3xl"></div>
          <div className="animate-blob animation-delay-2000 absolute right-10 top-40 size-72 rounded-full bg-cyan-600/20 blur-3xl"></div>
          <div className="animate-blob animation-delay-4000 absolute bottom-10 left-1/3 size-80 rounded-full bg-pink-600/20 blur-3xl"></div>
        </div>
        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <div className="relative mb-8 inline-block">
            <div className={glowEffect}></div>
            <Heart className="mx-auto size-16 animate-pulse text-pink-500" />
          </div>
          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            <span className={gradientText}>Support Electroplix</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300 md:text-2xl">
            Help us build the future of <span className="text-cyan-400">AI-powered IT solutions</span> and 
            <span className="text-purple-400"> innovative web design</span> for businesses worldwide.
          </p>
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <div className="flex items-center rounded-lg border border-gray-700 bg-gray-800/70 px-4 py-2">
              <Zap className="mr-2 size-5 text-yellow-400" />
              <span>Accelerate Development</span>
            </div>
            <div className="flex items-center rounded-lg border border-gray-700 bg-gray-800/70 px-4 py-2">
              <Gift className="mr-2 size-5 text-purple-400" />
              <span>Unlock Exclusive Features</span>
            </div>
            <div className="flex items-center rounded-lg border border-gray-700 bg-gray-800/70 px-4 py-2">
              <CreditCard className="mr-2 size-5 text-cyan-400" />
              <span>Simple, Secure Payments</span>
            </div>
          </div>
        </div>
      </div>
      {/* Main Content - Payment Form */}
      <div className="relative flex-1">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-gray-700 bg-gray-800/70 shadow-2xl backdrop-blur-lg">
            {/* Stepper */}
            <div className="px-6 pt-6">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`flex size-8 items-center justify-center rounded-full ${formStep >= 0 ? 'bg-cyan-500' : 'bg-gray-700'}`}>
                    {formStep > 0 ? <Check className="size-5" /> : '1'}
                  </div>
                  <div className={`mx-2 h-1 w-16 ${formStep >= 1 ? 'bg-cyan-500' : 'bg-gray-700'}`}></div>
                  <div className={`flex size-8 items-center justify-center rounded-full ${formStep >= 1 ? 'bg-cyan-500' : 'bg-gray-700'}`}>
                    {formStep > 1 ? <Check className="size-5" /> : '2'}
                  </div>
                  <div className={`mx-2 h-1 w-16 ${formStep >= 2 ? 'bg-cyan-500' : 'bg-gray-700'}`}></div>
                  <div className={`flex size-8 items-center justify-center rounded-full ${formStep >= 2 ? 'bg-cyan-500' : 'bg-gray-700'}`}>
                    3
                  </div>
                </div>
                <span className="text-sm text-gray-400">
                  {formStep === 0 && 'Choose amount'}
                  {formStep === 1 && 'Payment details'}
                  {formStep === 2 && 'Confirmation'}
                </span>
              </div>
            </div>
            {/* Form Content */}
            <div className="px-6 pb-8">
              {formStep === 0 && (
                <form onSubmit={handleSubmit}>
                  {/* Billing Frequency */}
                  <div className="mb-8">
                    <h3 className="mb-4 text-xl font-semibold">Select billing frequency</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedPlan('monthly')}
                        className={`rounded-xl border p-4 ${
                          selectedPlan === 'monthly' 
                            ? 'border-cyan-500 bg-cyan-900/20' 
                            : 'border-gray-700 bg-gray-800'
                        } flex items-center justify-between`}
                      >
                        <div>
                          <p className="font-medium">Monthly</p>
                          <p className="text-sm text-gray-400">Billed every month</p>
                        </div>
                        {selectedPlan === 'monthly' && (
                          <div className="rounded-full bg-cyan-500 p-1">
                            <Check className="size-4" />
                          </div>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedPlan('yearly')}
                        className={`rounded-xl border p-4 ${
                          selectedPlan === 'yearly' 
                            ? 'border-purple-500 bg-purple-900/20' 
                            : 'border-gray-700 bg-gray-800'
                        } relative flex items-center justify-between overflow-hidden`}
                      >
                        {selectedPlan === 'yearly' && (
                          <div className="absolute right-0 top-0">
                            <div className="translate-x-2 translate-y-2 rotate-45 bg-purple-500 px-2 py-1 text-xs">
                              15% off
                            </div>
                          </div>
                        )}
                        <div>
                          <p className="font-medium">Yearly</p>
                          <p className="text-sm text-gray-400">Billed annually (save 15%)</p>
                        </div>
                        {selectedPlan === 'yearly' && (
                          <div className="rounded-full bg-purple-500 p-1">
                            <Check className="size-4" />
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                  {/* Amount Selection */}
                  <div className="mb-8">
                    <h3 className="mb-4 text-xl font-semibold">Select amount</h3>
                    <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-5">
                      {predefinedAmounts.map(value => (
                        <button
                          key={value}
                          type="button"
                          onClick={() => handlePredefinedAmount(value)}
                          className={`rounded-lg py-3 ${
                            amount === value && !customAmount 
                              ? buttonGradient
                              : 'border border-gray-700 bg-gray-800 hover:bg-gray-700'
                          }`}
                        >
                          ${value}
                        </button>
                      ))}
                    </div>
                    <div className="relative mb-2">
                      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <DollarSign className="size-5 text-gray-500" />
                      </div>
                      <input
                        type="text"
                        value={customAmount}
                        onChange={handleCustomAmount}
                        placeholder="Custom amount"
                        className="w-full rounded-lg border border-gray-700 bg-gray-800 py-3 pl-10 focus:border-transparent focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                    <p className="text-sm text-gray-400">Enter any amount you`d like to contribute</p>
                  </div>
                  <div className="mb-8 rounded-xl border border-gray-700 bg-gray-900/50 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-gray-300">Amount:</span>
                      <span className="font-semibold">${amount}.00</span>
                    </div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-gray-300">Frequency:</span>
                      <span className="font-semibold capitalize">{selectedPlan}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                      <span className="font-semibold">Total:</span>
                      <span className="text-xl font-bold">${amount}.00 / {selectedPlan === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                  </div>
                  {/* Continue Button */}
                  <div className="relative">
                    {pulseEffect && (<div className="absolute inset-0 animate-ping rounded-lg bg-cyan-500/30 duration-1000"></div>)}
                    <button
                      type="submit"
                      className={`${buttonGradient} flex w-full items-center justify-center rounded-lg py-4 text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-cyan-500/20`}
                      onMouseEnter={() => setIsHovering(true)}
                      onMouseLeave={() => setIsHovering(false)}
                    >
                      Continue to payment
                      <ChevronRight className={`ml-2 size-5 transition-transform${isHovering ? 'translate-x-1' : ''}`} />
                    </button>
                  </div>
                </form>
              )}
              {formStep === 1 && (
                <form onSubmit={handleSubmit}>
                  <h3 className="mb-6 text-xl font-semibold">Payment details</h3>
                  <div className="mb-6 space-y-4">
                    <div>
                      <label htmlFor="cardName" className="mb-1 block text-sm font-medium text-gray-300">Name on card</label>
                      <input
                        id="cardName"
                        type="text"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-cyan-500"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cardNumber" className="mb-1 block text-sm font-medium text-gray-300">Card number</label>
                      <div className="relative">
                        <input
                          id="cardNumber"
                          type="text"
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-cyan-500"
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                          required
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                          <div className="flex space-x-1">
                            <div className="h-4 w-6 rounded bg-gray-600"></div>
                            <div className="h-4 w-6 rounded bg-gray-600"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="mb-1 block text-sm font-medium text-gray-300">Expiry date</label>
                        <input
                          id="expiryDate"
                          type="text"
                          value={expiryDate}
                          onChange={handleExpiryDateChange}
                          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-cyan-500"
                          placeholder="MM/YY"
                          maxLength={5}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="mb-1 block text-sm font-medium text-gray-300">CVV</label>
                        <input
                          id="cvv"
                          type="text"
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value.replace(/[^0-9]/g, '').substring(0, 3))}
                          className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-cyan-500"
                          placeholder="123"
                          maxLength={3}
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-6 rounded-xl border border-gray-700 bg-gray-900/50 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-gray-300">Amount:</span>
                      <span className="font-semibold">${amount}.00</span>
                    </div>
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-gray-300">Frequency:</span>
                      <span className="font-semibold capitalize">{selectedPlan}</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-700 pt-4">
                      <span className="font-semibold">Total:</span>
                      <span className="text-xl font-bold">${amount}.00 / {selectedPlan === 'monthly' ? 'mo' : 'yr'}</span>
                    </div>
                  </div>
                  <div className="mb-6 flex items-start text-sm text-gray-400">
                    <div className="mt-0.5 shrink-0">
                      <svg className="size-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-2">Your payment information is secure and encrypted. We never store your full card details.</p>
                  </div>
                  <button
                    type="submit"
                    className={`${buttonGradient} flex w-full items-center justify-center rounded-lg py-4 text-lg font-medium shadow-lg transition-all duration-300 hover:shadow-cyan-500/20 ${isLoading ? 'opacity-80' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <span className="flex items-center">
                        <svg className="-ml-1 mr-3 size-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        Complete Payment
                        <ArrowRight className="ml-2 size-5" />
                      </span>
                    )}
                  </button>
                </form>
              )}
              {formStep === 2 && (
                <div className="pt-6 text-center">
                  <div className="relative mb-6 inline-block">
                    <div className={`${glowEffect} animate-pulse`}></div>
                    <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-green-500">
                      <Check className="size-10" />
                    </div>
                  </div>
                  <h2 className="mb-4 text-2xl font-bold">Thank You for Your Support!</h2>
                  <p className="mb-8 text-gray-300">
                    Your ${amount}.00 {selectedPlan} sponsorship for Electroplix has been processed successfully.
                    We`ll send you a confirmation email shortly.
                  </p>
                  <div className="mx-auto mb-8 max-w-md rounded-xl border border-gray-700 bg-gray-900/50 p-6">
                    <h3 className="mb-4 text-lg font-semibold text-cyan-400">What happens next?</h3>
                    <ul className="space-y-3 text-left">
                      <li className="flex items-start">
                        <Check className="mr-2 mt-0.5 size-5 shrink-0 text-green-500" />
                        <span>You`ll receive a confirmation email within the next few minutes</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 mt-0.5 size-5 shrink-0 text-green-500" />
                        <span>Your GitHub account will be linked to your sponsorship</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="mr-2 mt-0.5 size-5 shrink-0 text-green-500" />
                        <span>You`ll gain access to our sponsor-only repositories and resources</span>
                      </li>
                    </ul>
                  </div>
                  <div className="inline-block">
                    <button 
                      className="flex items-center font-medium text-cyan-400 transition-colors hover:text-cyan-300"
                      onClick={() => window.location.href = '/dashboard'}
                    >
                      Return to dashboard
                      <ChevronRight className="ml-1 size-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* Security Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-gray-400">
            <div className="flex items-center">
              <svg className="mr-2 size-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center">
              <svg className="mr-2 size-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v-1l1-1 1-1-0.257-0.257A6 6 0 1118 8zm-6-4a1 1 0 100 2h2a1 1 0 100-2h-2z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Secure Payments</span>
            </div>
            <div className="flex items-center">
              <svg className="mr-2 size-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="text-sm">Privacy Protected</span>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="mt-16 bg-gray-950 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between border-t border-gray-800 pt-8 md:flex-row">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold">
                <span className={gradientText}>Electroplix</span>
              </div>
              <p className="mt-1 text-sm text-gray-400">Web Design & AI Solutions</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 transition-colors hover:text-cyan-400">
                <span className="sr-only">Twitter</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-cyan-400">
                <span className="sr-only">GitHub</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-cyan-400">
                <span className="sr-only">LinkedIn</span>
                <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Electroplix. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-300">Privacy Policy</a>
              <a href="#" className="hover:text-gray-300">Terms of Service</a>
              <a href="#" className="hover:text-gray-300">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes blob {
          0% {
            transform: scale(1);
          }
          33% {
            transform: scale(1.1);
          }
          66% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}