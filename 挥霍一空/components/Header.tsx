import React from 'react';
import Counter from './Counter';
import { INITIAL_MONEY } from '../constants';

interface HeaderProps {
  balance: number;
}

const Header: React.FC<HeaderProps> = ({ balance }) => {
  const percentageLeft = (balance / INITIAL_MONEY) * 100;
  
  return (
    <div className="sticky top-0 z-50">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-2xl"></div>
      
      <div className="relative z-10 py-6">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-6xl font-black tracking-tight mb-2 drop-shadow-xl scale-100 transition-transform duration-100">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 via-emerald-400 to-green-300 animate-pulse-gold">
               <Counter value={balance} />
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 text-slate-400 text-sm font-bold uppercase tracking-[0.2em]">
            <span>剩余资金</span>
            <span className="text-emerald-500">{percentageLeft.toFixed(6)}%</span>
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="h-1.5 w-full bg-slate-800 relative z-20">
        <div 
          className="h-full bg-gradient-to-r from-emerald-500 to-green-400 shadow-[0_0_10px_rgba(16,185,129,0.7)] transition-all duration-300 ease-out"
          style={{ width: `${100 - percentageLeft}%` }}
        />
      </div>
    </div>
  );
};

export default Header;