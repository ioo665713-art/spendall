import React from 'react';
import { CartItem } from '../types';

interface ReceiptProps {
  cartItems: CartItem[];
  totalSpent: number;
}

const Receipt: React.FC<ReceiptProps> = ({ cartItems, totalSpent }) => {
  if (cartItems.length === 0) return null;

  return (
    <div className="relative bg-white text-slate-900 p-6 max-w-sm w-full mx-auto shadow-[0_0_40px_rgba(0,0,0,0.5)] rotate-1 transform transition-transform hover:rotate-0 mb-20">
      
      {/* Zigzag top edge */}
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-900" style={{ clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)'}}></div>

      <div className="text-center mb-6 pt-2">
        <div className="text-3xl font-black uppercase tracking-widest text-slate-900 mb-1">SPEND CORP</div>
        <div className="text-xs font-mono text-slate-500">TERMINAL #8821-X</div>
      </div>
      
      <div className="space-y-2 mb-6 max-h-96 overflow-y-auto receipt-scroll pr-2 border-b-2 border-dashed border-slate-300 pb-6">
        {cartItems.map((item) => (
          <div key={item.item.id} className="flex justify-between text-sm font-mono items-start">
            <div className="flex-1 pr-4">
              <div className="font-bold text-slate-800">{item.item.name}</div>
              <div className="text-slate-500 text-xs">Qty: {item.quantity} @ ${item.item.price.toLocaleString()}</div>
            </div>
            <div className="text-slate-900 font-bold whitespace-nowrap">
              ${(item.item.price * item.quantity).toLocaleString('en-US')}
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2">
        <div className="flex justify-between text-xl font-black uppercase mb-4">
          <span>TOTAL</span>
          <span>${totalSpent.toLocaleString('en-US')}</span>
        </div>
        <div className="text-center mt-6">
           <div className="w-32 h-12 bg-slate-900 mx-auto mb-2 flex items-center justify-center">
             <span className="text-white font-mono text-xs tracking-widest">BARCODE</span>
           </div>
           <div className="text-xs text-slate-400 font-mono">
             NO REFUNDS · 概不退换
             <br/>
             {new Date().toLocaleString()}
           </div>
        </div>
      </div>
      
      {/* Zigzag bottom edge */}
      <div className="absolute bottom-[-8px] left-0 w-full h-2 bg-white" style={{ clipPath: 'polygon(0% 0%, 5% 100%, 10% 0%, 15% 100%, 20% 0%, 25% 100%, 30% 0%, 35% 100%, 40% 0%, 45% 100%, 50% 0%, 55% 100%, 60% 0%, 65% 100%, 70% 0%, 75% 100%, 80% 0%, 85% 100%, 90% 0%, 95% 100%, 100% 0%)'}}></div>
    </div>
  );
};

export default Receipt;