import React from 'react';
import { BadLuckEvent } from '../types';

interface IncomeModalProps {
  event: BadLuckEvent | null;
  onClose: () => void;
}

const IncomeModal: React.FC<IncomeModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="fixed inset-0 bg-red-900/40 backdrop-blur-sm z-[70] flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-slate-900 border-4 border-red-500 rounded-xl p-8 max-w-lg w-full shadow-[0_0_50px_rgba(239,68,68,0.5)] relative overflow-hidden transform transition-all scale-100">
        
        {/* Warning Stripes */}
        <div className="absolute top-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,yellow,yellow_10px,black_10px,black_20px)]"></div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-[repeating-linear-gradient(45deg,yellow,yellow_10px,black_10px,black_20px)]"></div>

        <div className="text-center mt-4">
          <div className="text-6xl mb-4 animate-bounce">{event.icon}</div>
          <h2 className="text-3xl font-black text-red-500 uppercase tracking-tighter mb-2">
            厄运降临！
          </h2>
          <p className="text-xl font-bold text-white mb-4">
            {event.title}
          </p>
          <div className="bg-red-900/30 p-4 rounded-lg border border-red-500/30 mb-6">
            <p className="text-slate-300 font-mono mb-2">{event.description}</p>
            <p className="text-3xl font-black text-green-400 font-mono">
              +${event.amount.toLocaleString('en-US')}
            </p>
          </div>
          
          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform active:scale-95 uppercase tracking-widest"
          >
            太倒霉了 (接受)
          </button>
        </div>
      </div>
    </div>
  );
};

export default IncomeModal;