import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

export function AnimatedCounter({ value, className }: { value: string, className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    // Parse the value string: prefix, number, suffix
    const match = value.match(/^([^0-9]*)([0-9.,]+)([^0-9]*)$/);
    if (!match || !inView) {
      if (inView) setDisplay(value); // Not purely numeric, fallback to just displaying it
      return;
    }
    
    const [, prefix, numStr, suffix] = match;
    const hasComma = numStr.includes(',');
    const hasDot = numStr.includes('.');
    const num = parseFloat(numStr.replace(/,/g, ''));
    
    if (isNaN(num)) {
      setDisplay(value);
      return;
    }

    const duration = 2000;
    let startTimestamp: number;

    const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = easeOutQuart(progress);
      const currentVal = easeProgress * num;

      let currentStr = "";
      if (hasDot) {
        currentStr = currentVal.toFixed(1);
      } else {
        currentStr = Math.floor(currentVal).toString();
        if (hasComma) {
          currentStr = currentStr.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      }

      setDisplay(`${prefix}${currentStr}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplay(value); // Ensure exact final value
      }
    };
    
    window.requestAnimationFrame(step);

  }, [inView, value]);

  return <span ref={ref} className={className}>{display}</span>;
}
