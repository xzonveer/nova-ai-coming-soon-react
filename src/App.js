import React, { useState, useEffect, useRef, useCallback } from 'react';
import Particles from './components/Particles';
import Countdown from './components/Countdown';
import SignupForm from './components/SignupForm';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen relative">
      <Particles quantity={120} />
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 pb-32 md:pb-48">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6 animate-float">
            Nova AI
          </h1>
          <p className="text-2xl md:text-3xl font-inter font-light text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Revolutionizing businesses with cutting-edge AI solutions. Your future starts here.
          </p>
          <div className="mb-20">
            <Countdown />
          </div>
          <SignupForm />
        </section>

        {/* Features Section */}
        <section className="py-32 px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-6">Why Choose Us?</h2>
            <p className="text-xl font-inter text-gray-300 max-w-2xl mx-auto">
              Pioneering AI innovation for the modern enterprise.
            </p>
          </div>
          <Features />
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 text-center border-t border-white/10">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-2xl hover:text-purple-400 transition-colors">🐦</a>
            <a href="#" className="text-2xl hover:text-blue-400 transition-colors">📘</a>
            <a href="#" className="text-2xl hover:text-pink-400 transition-colors">📸</a>
            <a href="#" className="text-2xl hover:text-gray-400 transition-colors">💼</a>
          </div>
          <p className="text-gray-500 font-inter">
            &copy; 2025 Nova AI Agency. All rights reserved. |{' '}
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;