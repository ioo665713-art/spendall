import React, { useEffect, useState, useRef } from 'react';

interface CounterProps {
  value: number;
}

const Counter: React.FC<CounterProps> = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(value);
  const requestRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef<number | undefined>(undefined);
  const startValueRef = useRef<number>(value);

  // Formatting large currency
  const formatMoney = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
      notation: amount > 1000000000000 ? 'compact' : 'standard', // Compact only for crazy huge numbers to fit screen
      compactDisplay: 'short'
    }).format(amount);
  };
  
  // Custom full formatter for the main view to keep the sensation of length
  const formatMoneyFull = (amount: number) => {
     return '$' + amount.toLocaleString('en-US', { maximumFractionDigits: 0 });
  };

  useEffect(() => {
    startValueRef.current = displayValue;
    startTimeRef.current = undefined;
    
    // Faster animation for snappier feel
    const duration = 600; 

    const animate = (time: number) => {
      if (startTimeRef.current === undefined) {
        startTimeRef.current = time;
      }
      const timeElapsed = time - startTimeRef.current;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function: easeOutExpo for dramatic slowdown
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const nextValue = startValueRef.current + (value - startValueRef.current) * ease;
      setDisplayValue(nextValue);

      if (progress < 1) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [value]);

  return (
    <span className="font-mono tracking-tighter tabular-nums">
        {formatMoneyFull(Math.round(displayValue))}
    </span>
  );
};

export default Counter;