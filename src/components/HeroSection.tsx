import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { DashboardPanel } from './DashboardPanel';
export function HeroSection() {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto px-6 py-8 lg:py-16">
      {/* Left Column: Text Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-xl">

        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <span className="bg-[#D4E8D0] text-[#1A3A2A] px-4 py-1.5 rounded-full text-sm font-medium italic">
            Smarter Payments with Better Control
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl lg:text-[64px] leading-[1.1] font-serif text-[#1A3A2A] mb-6">

          Manage your money securely with a fast and easy
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">

          Experience a secure digital wallet designed to move your money faster
          and help you manage it smarter.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center gap-4 mb-12">

          <button className="bg-[#F25F3A] hover:bg-[#D94E2B] text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-105 group">
            Get Started
            <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
          <button className="bg-transparent border border-[#1A3A2A] text-[#1A3A2A] px-8 py-4 rounded-full font-medium hover:bg-[#1A3A2A]/5 transition-colors">
            Explore Features
          </button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          variants={itemVariants}
          className="bg-white/50 backdrop-blur-sm p-4 rounded-2xl inline-flex items-center gap-6 border border-white/60">

          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) =>
              <div
                key={i}
                className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white
                  ${i === 1 ? 'bg-blue-500' : i === 2 ? 'bg-purple-500' : i === 3 ? 'bg-pink-500' : 'bg-orange-500'}
                `}>

                  {/* Placeholder avatars */}
                  <span className="opacity-80">U{i}</span>
                </div>
              )}
            </div>
            <div>
              <div className="text-xs text-gray-500 font-medium">
                Happy Users
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-orange-400 text-orange-400" />
                <span className="font-bold text-[#1A3A2A]">4.8</span>
                <span className="text-xs text-gray-400">(32k+)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Column: Dashboard UI */}
      <div className="relative">
        <DashboardPanel />
      </div>
    </div>);

}