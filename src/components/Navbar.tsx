import React from 'react';
import { Gem, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
export function Navbar() {
  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.6
      }}
      className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-[#1A3A2A] p-1.5 rounded-lg">
          <Gem className="w-5 h-5 text-white" />
        </div>
        <span className="text-[#1A3A2A] font-bold text-xl tracking-tight">
          Dolen Cred
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center bg-white/60 backdrop-blur-sm px-6 py-2.5 rounded-full shadow-sm border border-white/50 gap-8">
        <a
          href="#"
          className="text-gray-600 hover:text-[#1A3A2A] text-sm font-medium flex items-center gap-1 transition-colors">

          Features <ChevronDown className="w-3 h-3" />
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-[#1A3A2A] text-sm font-medium transition-colors">

          About Us
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-[#1A3A2A] text-sm font-medium transition-colors">

          Price
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-[#1A3A2A] text-sm font-medium transition-colors">

          Contact
        </a>
      </div>

      {/* Mobile Menu Placeholder (Hidden on desktop) */}
      <div className="md:hidden">{/* Simple hamburger would go here */}</div>
    </motion.nav>);

}