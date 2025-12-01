import React from 'react';
import { AdvisorResponse } from '../types';

interface AdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  advice: AdvisorResponse | null;
}

const AdvisorModal: React.FC<AdvisorModalProps> = ({ isOpen, onClose, isLoading, advice }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl transform transition-all scale-100 relative overflow-hidden">
        
        {/* Decorative background element */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          &times;
        </button>

        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          🤖 <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">AI 毒舌顾问</span>
        </h3>

        {isLoading ? (
          <div className="flex flex-col items-center py-8">
            <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mb-4"></div>
            <p className="text-gray-500 animate-pulse">正在审视你的败家行为...</p>
          </div>
        ) : advice ? (
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-500">
              <p className="text-gray-800 text-lg leading-relaxed font-medium">
                "{advice.commentary}"
              </p>
            </div>
            
            <div className="flex justify-between items-center bg-gray-900 text-white p-4 rounded-lg">
              <span className="font-bold text-gray-400 uppercase text-xs tracking-widest">疯狂指数</span>
              <div className="flex items-center gap-1">
                <span className={`text-3xl font-black ${advice.rating > 8 ? 'text-red-500' : 'text-yellow-400'}`}>
                  {advice.rating}
                </span>
                <span className="text-gray-500 text-sm">/ 10</span>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-red-500">无法连接到顾问。</p>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full font-bold transition-colors"
          >
            我知错了
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvisorModal;