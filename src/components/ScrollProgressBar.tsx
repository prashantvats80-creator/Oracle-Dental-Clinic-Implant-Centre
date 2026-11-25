import React, { useEffect, useRef } from 'react';

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let ticking = false;
    let maxScroll = 0;

    const recalcMaxScroll = () => {
      maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    };

    const updateProgress = () => {
      ticking = false;
      if (!barRef.current) return;
      if (maxScroll <= 0) {
        recalcMaxScroll();
      }
      const progress = maxScroll > 0 ? Math.min(Math.max(window.scrollY / maxScroll, 0), 1) : 0;
      barRef.current.style.transform = `scaleX(${progress})`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateProgress);
      }
    };

    const onResize = () => {
      maxScroll = 0;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        maxScroll = 0;
      });
      ro.observe(document.documentElement);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      ro?.disconnect();
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-1 bg-[#E5F5EC]/60 pointer-events-none overflow-hidden"
      role="progressbar"
      aria-label="Reading progress"
    >
      <div
        ref={barRef}
        className="h-full w-full bg-gradient-to-r from-[#087B57] via-[#00A99D] to-[#FF8A24] origin-left"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
