import React, { useEffect, useRef } from 'react';

const AdBanner: React.FC = () => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 部署说明:
    // 如果你使用 Google AdSense，可以在这里加载广告脚本
    // (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="container mx-auto px-4 my-12">
      <div className="relative w-full max-w-4xl mx-auto bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-xl overflow-hidden min-h-[120px] flex flex-col items-center justify-center group hover:border-emerald-500/50 transition-colors">
        
        {/* 这里是实际的广告代码区域 */}
        {/* <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true"></ins> */}

        {/* 占位符内容 (部署时可删除或保留作为替补) */}
        <div className="text-center p-4 select-none">
          <p className="text-slate-500 text-xs font-mono tracking-widest uppercase mb-2">Advertisement Space</p>
          <div className="text-xl md:text-2xl font-black text-slate-700 group-hover:text-emerald-500/80 transition-colors uppercase">
            此处招租: 您的广告位
          </div>
          <p className="text-slate-600 text-sm mt-1">
            联系开发者投放广告 (Google AdSense Placeholder)
          </p>
        </div>

        {/* 装饰性光效 */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-600 to-transparent opacity-20 group-hover:via-emerald-500 transition-all"></div>
      </div>
    </div>
  );
};

export default AdBanner;