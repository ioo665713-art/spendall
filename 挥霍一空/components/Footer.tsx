import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-slate-900 border-t border-slate-800 pt-12 pb-24 mt-12 text-center relative z-10">
      <div className="container mx-auto px-4">
        
        {/* Donation Section */}
        <div className="mb-12">
          <h3 className="text-white font-bold text-lg mb-4">喜欢这个败家模拟器？</h3>
          <a 
            href="https://www.buymeacoffee.com/" // 替换为你自己的链接，例如 ko-fi 或 buymeacoffee
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#FFDD00] hover:bg-[#FFEA00] text-black font-black py-3 px-8 rounded-full shadow-[0_0_20px_rgba(255,221,0,0.3)] hover:shadow-[0_0_30px_rgba(255,221,0,0.5)] transform hover:-translate-y-1 transition-all active:scale-95"
          >
            <span className="text-xl">☕</span>
            <span>给作者买杯真的咖啡</span>
          </a>
          <p className="text-slate-500 text-sm mt-4 max-w-md mx-auto">
            开发这款游戏没有花费1000兆美元，但也消耗了不少脑细胞。您的支持能让开发者少写几个Bug。
          </p>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="text-slate-600 text-xs font-mono space-y-2">
          <p>
            &copy; {new Date().getFullYear()} SPEND IT ALL SIMULATOR. ALL RIGHTS RESERVED.
          </p>
          <p className="max-w-2xl mx-auto opacity-70">
            免责声明：本网站仅供娱乐。您在这里花费的 1000 兆美元并非真实货币（很遗憾）。
            请勿尝试使用本网站截图去购买真实的航母或支付房租。
            所有商品价格均为虚构或估算。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;