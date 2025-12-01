import React from 'react';
import { Item } from '../types';

interface ItemCardProps {
  item: Item;
  quantity: number;
  balance: number;
  onBuy: (amount: number) => void;
  onSell: (amount: number) => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ item, quantity, balance, onBuy, onSell }) => {
  const canAfford = balance >= item.price;
  const canSell = quantity > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = parseInt(e.target.value);
    if (isNaN(val)) val = 0;
    
    const diff = val - quantity;
    if (diff > 0) {
      if (balance >= diff * item.price) {
        onBuy(diff);
      } else {
        // Buy as many as possible
        const maxAffordable = Math.floor(balance / item.price);
        if (maxAffordable > 0) onBuy(maxAffordable);
      }
    } else if (diff < 0) {
      onSell(Math.abs(diff));
    }
  };

  // Dynamic price sizing
  const priceFontSize = item.price > 1000000000 ? 'text-md' : 'text-lg';

  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg border border-slate-700/50 hover:border-emerald-500/50 flex flex-col items-center justify-between p-4 h-full transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl group">
      
      <div className="w-full flex flex-col items-center mb-4">
        {/* Emoji Icon Container */}
        <div className="w-24 h-24 mb-4 bg-slate-700/50 rounded-full flex items-center justify-center text-6xl shadow-inner group-hover:scale-110 transition-transform duration-300">
           {item.icon}
        </div>
        
        <h3 className="text-lg font-bold text-white text-center leading-tight min-h-[3rem] flex items-center justify-center">
          {item.name}
        </h3>
        <p className={`font-mono font-bold text-emerald-400 mt-1 ${priceFontSize}`}>
          ${item.price.toLocaleString('en-US')}
        </p>
      </div>

      <div className="w-full grid grid-cols-3 gap-2 mt-auto">
        <button
          onClick={() => onSell(1)}
          disabled={!canSell}
          className={`py-2 px-1 rounded-lg font-bold text-sm transition-all ${
            canSell 
              ? 'bg-slate-600 text-white hover:bg-slate-500 active:scale-95' 
              : 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700'
          }`}
        >
          卖出
        </button>

        <input
          type="number"
          value={quantity}
          onChange={handleInputChange}
          className="bg-slate-900 border border-slate-700 text-white text-center rounded-lg font-mono font-bold focus:outline-none focus:border-emerald-500 transition-colors"
        />

        <button
          onClick={() => onBuy(1)}
          disabled={!canAfford}
          className={`py-2 px-1 rounded-lg font-bold text-sm transition-all shadow-lg ${
            canAfford 
              ? 'bg-emerald-600 text-white hover:bg-emerald-500 active:scale-95 hover:shadow-emerald-500/20' 
              : 'bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700'
          }`}
        >
          买入
        </button>
      </div>
    </div>
  );
};

export default ItemCard;