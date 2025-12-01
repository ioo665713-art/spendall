import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import ItemCard from './components/ItemCard';
import Receipt from './components/Receipt';
import AdvisorModal from './components/AdvisorModal';
import AchievementToast from './components/AchievementToast';
import NewsTicker from './components/NewsTicker';
import IncomeModal from './components/IncomeModal';
import GameOverModal from './components/GameOverModal';
import AdBanner from './components/AdBanner';
import Footer from './components/Footer';
import { ITEMS, INITIAL_MONEY, ACHIEVEMENTS, BAD_LUCK_EVENTS } from './constants';
import { Item, CartItem, AdvisorResponse, Achievement, BadLuckEvent } from './types';
import { getFinancialAdvice } from './services/geminiService';

const App: React.FC = () => {
  const [balance, setBalance] = useState(INITIAL_MONEY);
  const [cart, setCart] = useState<Record<string, number>>({});
  
  // Modals & UI State
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [loadingAdvice, setLoadingAdvice] = useState(false);
  const [advice, setAdvice] = useState<AdvisorResponse | null>(null);
  
  // Logic State
  const [lastPurchasedItemId, setLastPurchasedItemId] = useState<string | null>(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState<string[]>([]);
  const [currentAchievement, setCurrentAchievement] = useState<Achievement | null>(null);
  const [currentIncomeEvent, setCurrentIncomeEvent] = useState<BadLuckEvent | null>(null);
  const [showVictory, setShowVictory] = useState(false);

  // --- Handlers ---

  const handleBuy = (item: Item, quantity: number) => {
    const cost = item.price * quantity;
    if (balance >= cost) {
      setBalance((prev) => prev - cost);
      setCart((prev) => ({
        ...prev,
        [item.id]: (prev[item.id] || 0) + quantity,
      }));
      setLastPurchasedItemId(item.id);
    }
  };

  const handleSell = (item: Item, quantity: number) => {
    const currentQty = cart[item.id] || 0;
    if (currentQty >= quantity) {
      const refund = item.price * quantity;
      setBalance((prev) => prev + refund);
      setCart((prev) => {
        const newQty = currentQty - quantity;
        if (newQty <= 0) {
          const { [item.id]: _, ...rest } = prev;
          return rest;
        }
        return { ...prev, [item.id]: newQty };
      });
    }
  };

  const handleRestart = () => {
    setBalance(INITIAL_MONEY);
    setCart({});
    setAdvice(null);
    setUnlockedAchievements([]);
    setShowVictory(false);
    setCurrentIncomeEvent(null);
  };

  // --- Effects ---

  // 1. Check Victory Condition
  useEffect(() => {
    if (balance <= 1000) { // Practically broke
       setShowVictory(true);
    }
  }, [balance]);

  // 2. Check Achievements
  useEffect(() => {
    ACHIEVEMENTS.forEach((ach) => {
      if (!unlockedAchievements.includes(ach.id)) {
        if (ach.condition(cart)) {
          setUnlockedAchievements((prev) => [...prev, ach.id]);
          setCurrentAchievement(ach);
        }
      }
    });
  }, [cart, unlockedAchievements]);

  // 3. Random "Bad Luck" Income Events (runs every 45s)
  useEffect(() => {
    if (showVictory) return;

    const interval = setInterval(() => {
      // 30% chance to trigger an event if balance is below 50%
      const percentageLeft = balance / INITIAL_MONEY;
      const shouldTrigger = Math.random() < 0.3 && percentageLeft < 0.95;

      if (shouldTrigger) {
        const randomEvent = BAD_LUCK_EVENTS[Math.floor(Math.random() * BAD_LUCK_EVENTS.length)];
        setCurrentIncomeEvent(randomEvent);
        setBalance(prev => prev + randomEvent.amount);
      }
    }, 45000);

    return () => clearInterval(interval);
  }, [balance, showVictory]);


  // --- Derived Data ---

  const cartItems: CartItem[] = useMemo(() => {
    return Object.entries(cart).map(([id, quantity]) => {
      const item = ITEMS.find((i) => i.id === id);
      if (!item) return null;
      return { item, quantity };
    }).filter((i): i is CartItem => i !== null);
  }, [cart]);

  const totalSpent = INITIAL_MONEY - balance;

  // --- API Call ---

  const openAdvisor = async () => {
    setIsAdvisorOpen(true);
    setLoadingAdvice(true);
    setAdvice(null);
    try {
      const result = await getFinancialAdvice(cartItems, totalSpent);
      setAdvice(result);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingAdvice(false);
    }
  };

  return (
    <div className="min-h-screen pb-0 bg-slate-900 text-slate-100 selection:bg-emerald-500 selection:text-white flex flex-col">
      <Header balance={balance} />

      {/* Intro Text */}
      <div className="container mx-auto px-4 mt-12 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-4 drop-shadow-lg">
          挥霍 100000 兆美元
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
          你拥有 <span className="text-white font-mono font-bold">100,000,000,000,000,000</span> 美元。
          <br/>
          这不是简单的购物，这是对现实世界的重构。
          <br/>
          从买一杯咖啡到<span className="text-emerald-400">重建火星</span>，钱只是一个数字。
        </p>
      </div>

      {/* Achievement Status */}
      <div className="container mx-auto px-4 mb-8 text-center">
         <div className="inline-block bg-slate-800 rounded-full px-4 py-1 text-xs font-bold uppercase tracking-widest text-slate-500 border border-slate-700 hover:border-yellow-500/50 transition-colors cursor-help" title="收集所有隐藏成就！">
           隐藏成就: <span className="text-yellow-500">{unlockedAchievements.length}</span> / {ACHIEVEMENTS.length}
         </div>
      </div>

      {/* Main Grid */}
      <div className="container mx-auto px-4 flex-grow">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {ITEMS.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              quantity={cart[item.id] || 0}
              balance={balance}
              onBuy={(qty) => handleBuy(item, qty)}
              onSell={(qty) => handleSell(item, qty)}
            />
          ))}
        </div>
      </div>

      {/* Ad Banner (Middle) - Optional placement */}
      {/* <AdBanner /> */}

      {/* Receipt & Actions Area */}
      {cartItems.length > 0 && (
        <div className="container mx-auto px-4 mt-20 flex flex-col items-center animate-fade-in-up">
          <Receipt cartItems={cartItems} totalSpent={totalSpent} />
          
          <div className="mt-8 flex flex-col md:flex-row gap-4 z-10 mb-10">
            <button
              onClick={handleRestart}
              className="bg-rose-600 text-white font-bold py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(225,29,72,0.3)] hover:bg-rose-500 hover:shadow-[0_10px_30px_rgba(225,29,72,0.5)] transition-all transform hover:-translate-y-1 active:scale-95"
            >
              🔥 销毁记录 (重置)
            </button>
            
            <button
              onClick={openAdvisor}
              className="bg-purple-600 text-white font-bold py-4 px-8 rounded-full shadow-[0_10px_20px_rgba(147,51,234,0.3)] hover:bg-purple-500 hover:shadow-[0_10px_30px_rgba(147,51,234,0.5)] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2"
            >
              <span>🔮</span> 召唤 AI 财务顾问
            </button>
          </div>
        </div>
      )}

      {/* Bottom Ad Banner */}
      <AdBanner />

      {/* Footer with Donation */}
      <Footer />
      
      {/* Version Indicator for Update Confirmation */}
      <div className="text-center text-slate-800 text-[10px] pb-12 font-mono">v2.0 - Ultimate Edition</div>

      {/* News Ticker */}
      <NewsTicker lastPurchasedItemId={lastPurchasedItemId} />

      {/* Modals */}
      <AdvisorModal 
        isOpen={isAdvisorOpen} 
        onClose={() => setIsAdvisorOpen(false)}
        isLoading={loadingAdvice}
        advice={advice}
      />
      
      <AchievementToast 
        achievement={currentAchievement}
        onClose={() => setCurrentAchievement(null)}
      />

      <IncomeModal 
        event={currentIncomeEvent} 
        onClose={() => setCurrentIncomeEvent(null)} 
      />

      <GameOverModal 
        isOpen={showVictory}
        onRestart={handleRestart}
      />
    </div>
  );
};

export default App;