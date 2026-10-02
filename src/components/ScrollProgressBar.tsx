import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-[100] h-1 md:h-[4px] bg-slate-200/20 pointer-events-none overflow-hidden"
      role="progressbar"
      aria-label="Scroll progress bar"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-amber-500 origin-left shadow-[0_0_10px_rgba(37,99,235,0.5)]"
        style={{ scaleX }}
      />
    </div>
  );
}
