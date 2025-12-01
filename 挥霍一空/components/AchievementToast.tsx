import React, { useEffect, useState } from 'react';
import { Achievement } from '../types';

interface AchievementToastProps {
  achievement: Achievement | null;
  onClose: () => void;
}

const AchievementToast: React.FC<AchievementToastProps> = ({ achievement, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (achievement) {
      setIsVisible(true);
      // Auto hide after 4 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
        setTimeout(onClose, 500); // Wait for animation to finish before clearing data
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [achievement, onClose]);

  if (!achievement) return null;

  return (
    <div 
      className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-500 ease-out ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90'
      }`}
    >
      <div className="relative bg-slate-900 border-2 border-yellow-500 rounded-lg p-1 shadow-[0_0_30px_rgba(234,179,8,0.5)] overflow-hidden min-w-[320px] md:min-w-[450px]">
        {/* Shine effect */}
        <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-20deg] animate-[shine_2s_infinite]"></div>
        
        <div className="flex items-center gap-5 bg-slate-800/90 p-4 rounded backdrop-blur-sm">
          <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center text-5xl shadow-lg border-2 border-yellow-200 animate-bounce-short">
            {achievement.icon}
          </div>
          <div className="flex-1">
            <div className="text-yellow-400 font-black uppercase text-xs tracking-widest mb-1">
              Hidden Achievement Unlocked
            </div>
            <h4 className="text-white font-bold text-xl leading-none mb-2">
              {achievement.title}
            </h4>
            <p className="text-slate-300 text-sm font-mono leading-tight">
              {achievement.description}
            </p>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 200%; }
          100% { left: 200%; }
        }
        @keyframes bounce-short {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-bounce-short {
          animation: bounce-short 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default AchievementToast;