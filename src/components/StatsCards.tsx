import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Check } from 'lucide-react';
export function StatsCards() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {/* Growth Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.5,
          delay: 0.6
        }}
        className="bg-[#FFC107] rounded-3xl p-5 relative overflow-hidden flex flex-col justify-between h-40">

        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-3xl font-bold text-[#1A3A2A]">32k</h3>
            <p className="text-[#1A3A2A]/80 text-xs font-medium mt-1">
              User Growth Yearly
            </p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-[#1A3A2A]" />
        </div>

        <div className="mt-auto">
          <div className="text-xs font-bold text-[#1A3A2A] mb-1">67% avg</div>
          <div className="flex items-end gap-1 h-8">
            <div className="w-1/5 h-[40%] bg-white/30 rounded-t-sm"></div>
            <div className="w-1/5 h-[60%] bg-white/30 rounded-t-sm"></div>
            <div className="w-1/5 h-[30%] bg-white/30 rounded-t-sm"></div>
            <div className="w-1/5 h-[80%] bg-white/30 rounded-t-sm"></div>
            <div className="w-1/5 h-[100%] bg-white rounded-t-sm"></div>
          </div>
        </div>
      </motion.div>

      {/* Security Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.5,
          delay: 0.7
        }}
        className="bg-[#FCE8A8] rounded-3xl p-5 relative overflow-hidden flex flex-col h-40"
        style={{
          backgroundColor: '#FDE047'
        }} // Adjusting to a lighter yellow/cream based on image description "light green" but image looks yellow/cream
      >
        {/* Override bg color to match description "light green" or image "yellow"?
             Description says "Right card (light green background)".
             Let's use a light pastel yellow/green mix.
          */}
        <div className="absolute inset-0 bg-[#FFF9C4]"></div>

        <div className="relative z-10">
          <h3 className="text-sm font-bold text-[#1A3A2A]">
            Secure Your Assets
          </h3>
          <p className="text-[10px] text-[#1A3A2A]/70 mt-1 leading-tight">
            Expert team is always protecting you
          </p>

          <div className="mt-4 flex items-center justify-between">
            <div className="bg-[#1A3A2A]/5 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-[#1A3A2A]" />
              <span className="text-[10px] font-bold text-[#1A3A2A]">
                Secure you
              </span>
            </div>

            <div className="relative w-10 h-10 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#1A3A2A"
                  strokeWidth="3"
                  strokeDasharray="100, 100" />

              </svg>
              <span className="absolute text-[10px] font-bold text-[#1A3A2A]">
                100%
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>);

}