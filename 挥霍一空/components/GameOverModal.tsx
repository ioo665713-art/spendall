import React from 'react';

interface GameOverModalProps {
  onRestart: () => void;
  isOpen: boolean;
}

const GameOverModal: React.FC<GameOverModalProps> = ({ onRestart, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-[80] flex items-center justify-center p-4 animate-fade-in">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 drop-shadow-[0_0_15px_rgba(234,179,8,0.5)] mb-4">
            破产大吉!
          </h1>
          <p className="text-2xl text-slate-400 font-light">
            你终于花光了所有的钱。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-12">
           <div className="p-6 bg-slate-900 rounded-xl border border-slate-800">
              <div className="text-4xl mb-2">🏆</div>
              <h3 className="text-xl font-bold text-white">终极败家子</h3>
              <p className="text-slate-400 text-sm">世界因你的消费而改变（或者毁灭）了。</p>
           </div>
        </div>

        <button
          onClick={onRestart}
          className="group relative px-8 py-4 bg-white text-black font-black text-xl uppercase tracking-widest rounded hover:bg-slate-200 transition-colors"
        >
          再来一次 (Reset)
          <div className="absolute inset-0 border-2 border-white rounded scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"></div>
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;