import React from 'react';
import { motion } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  key?: React.Key;
}

export function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  const directions = {
    up: { y: 24, x: 0 },
    down: { y: -24, x: 0 },
    left: { x: 24, y: 0 },
    right: { x: -24, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        scale: direction === 'none' ? 1 : 0.98,
        filter: 'blur(4px)',
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        filter: 'blur(0px)',
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1], // More dramatic and refined ease out
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
