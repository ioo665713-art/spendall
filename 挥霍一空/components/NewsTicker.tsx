import React, { useEffect, useState } from 'react';
import { NEWS_HEADLINES } from '../constants';

interface NewsTickerProps {
  lastPurchasedItemId: string | null;
}

const NewsTicker: React.FC<NewsTickerProps> = ({ lastPurchasedItemId }) => {
  const [displayNews, setDisplayNews] = useState<string[]>([]);

  // Update news list based on recent purchase or randomly
  useEffect(() => {
    let newsPool = [...NEWS_HEADLINES];
    
    // Priority queue
    const relevantNews = lastPurchasedItemId 
      ? NEWS_HEADLINES.find(n => n.itemId === lastPurchasedItemId)
      : null;

    // Random selection for the ticker (pick 5 random + 1 specific if exists)
    const randomGeneral = NEWS_HEADLINES.filter(n => !n.itemId)
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
      
    const finalNews = relevantNews 
      ? [relevantNews, ...randomGeneral] 
      : randomGeneral;
      
    setDisplayNews(finalNews.map(n => n.text));
  }, [lastPurchasedItemId]);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-red-700 text-white z-[60] border-t-4 border-yellow-400 shadow-2xl font-mono h-10 flex items-center overflow-hidden">
      <div className="bg-red-800 px-4 h-full flex items-center font-black uppercase tracking-widest z-10 shrink-0 shadow-lg">
        BREAKING NEWS
      </div>
      <div className="flex whitespace-nowrap animate-marquee hover:pause">
        {displayNews.map((text, i) => (
          <span key={i} className="mx-8 font-bold text-lg flex items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
            {text}
          </span>
        ))}
        {/* Duplicate for seamless loop effect (basic implementation) */}
        {displayNews.map((text, i) => (
          <span key={`dup-${i}`} className="mx-8 font-bold text-lg flex items-center">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;