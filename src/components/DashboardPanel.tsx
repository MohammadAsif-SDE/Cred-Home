import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Send, ArrowUp } from 'lucide-react';
import { CreditCards } from './CreditCards';
import { StatsCards } from './StatsCards';
export function DashboardPanel() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main Dark Panel */}
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.95
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 0.8
        }}
        className="bg-[#1C1C1E] rounded-[40px] p-6 pb-8 shadow-2xl relative z-10 overflow-hidden">

        {/* Credit Cards Section */}
        <div className="mb-6 -mt-4">
          <CreditCards />
        </div>

        {/* Balance Section */}
        <div className="mt-4 px-2">
          <div className="text-gray-400 text-sm font-medium mb-1">
            Total Balance
          </div>
          <div className="flex items-center justify-between mb-8">
            <motion.h2
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.5
              }}
              className="text-4xl font-bold text-white tracking-tight">

              $ 23,463.46
            </motion.h2>
            <div className="bg-[#D4E8D0] px-2 py-1 rounded-full flex items-center gap-1">
              <ArrowUp className="w-3 h-3 text-[#1A3A2A]" />
              <span className="text-xs font-bold text-[#1A3A2A]">+3.48%</span>
            </div>
          </div>

          {/* Action Buttons to add and send Money */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border border-white/20 text-white hover:bg-white/5 transition-colors text-sm font-medium">
              <Plus className="w-4 h-4" />
              Add Money
            </button>
            <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white text-[#1A3A2A] hover:bg-gray-100 transition-colors text-sm font-bold shadow-lg">
              <Send className="w-4 h-4" />
              Send Money
            </button>
          </div>
        </div>
      </motion.div>

      {/* Bottom Stats Cards */}
      <StatsCards />
    </div>);

}
