import React from 'react';
import { motion } from 'framer-motion';
import { Wifi } from 'lucide-react';
export function CreditCards() {
  return (
    <div className="relative w-full h-64 md:h-72 perspective-1000">
      {/* Back Card (Teal) */}
      <motion.div
        initial={{
          opacity: 0,
          x: 50,
          rotate: 5
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: -6
        }}
        transition={{
          duration: 0.8,
          delay: 0.2
        }}
        className="absolute top-12 left-4 right-4 h-48 bg-[#2D5A4E] rounded-2xl p-6 shadow-xl z-10 border-t border-white/10"
        style={{
          transformOrigin: 'bottom left'
        }}>

        <div className="flex justify-between items-start mb-8">
          <div className="w-10 h-6 bg-yellow-500/20 rounded flex items-center justify-center">
            <div className="w-8 h-4 border border-yellow-500/50 rounded-sm"></div>
          </div>
          <Wifi className="text-white/50 w-6 h-6 rotate-90" />
        </div>

        <div className="space-y-4 mt-8">
          <div className="flex items-center gap-3 text-white/80 font-mono text-lg tracking-widest">
            <span>****</span>
            <span>3864</span>
            <span>2835</span>
            <span>3862</span>
          </div>

          <div className="flex justify-between items-end">
            <div className="text-xs text-white/60 uppercase tracking-wider">
              Total Balance
            </div>
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-red-500/80"></div>
              <div className="w-8 h-8 rounded-full bg-yellow-500/80"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Front Card (Blue/Grey) */}
      <motion.div
        initial={{
          opacity: 0,
          x: 100,
          rotate: 10
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: 6
        }}
        transition={{
          duration: 0.8,
          delay: 0.4
        }}
        animate-float={{
          y: [0, -10, 0]
        }}
        // @ts-ignore - custom transition prop for float
        transition-float={{
          repeat: Infinity,
          duration: 4,
          ease: 'easeInOut'
        }}
        className="absolute top-0 left-4 right-4 h-48 bg-gradient-to-br from-[#9FBFE0] to-[#7A9CC6] rounded-2xl p-6 shadow-2xl z-20 border-t border-white/20">

        <div className="flex justify-between items-start mb-2">
          <div className="w-10 h-10 bg-orange-500 rounded-full opacity-80"></div>
          <span className="font-bold text-white text-lg italic">VISA</span>
        </div>

        <div className="mt-8 space-y-1">
          <div className="text-white/90 font-mono text-xl tracking-widest drop-shadow-md">
            **** 4976 0987 3864
          </div>
          <div className="text-white/60 font-mono text-sm tracking-widest">
            **** 3864 2836 3862
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="text-white/80 text-xs">Valid Thru 12/25</div>
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
            <span className="text-white font-bold text-xs">$</span>
          </div>
        </div>
      </motion.div>
    </div>);

}