import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
export function App() {
  return (
    <div className="min-h-screen w-full bg-[#EEF5EE] relative overflow-hidden">
      {/* Background decoration (optional subtle gradient or blur) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4E8D0]/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow flex items-center">
          <HeroSection />
        </main>
      </div>
    </div>);

}