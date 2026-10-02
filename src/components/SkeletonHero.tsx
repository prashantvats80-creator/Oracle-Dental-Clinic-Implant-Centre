import React from 'react';

export const SkeletonHero: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white min-h-[460px] py-12 px-4 sm:px-8 overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none" />
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
        <div className="md:col-span-7 space-y-5">
          <div className="h-7 bg-white/10 rounded-full w-64 animate-pulse" />
          <div className="h-12 bg-white/15 rounded-xl w-4/5 animate-pulse" />
          <div className="space-y-2">
            <div className="h-4 bg-white/10 rounded-md w-full animate-pulse" />
            <div className="h-4 bg-white/10 rounded-md w-11/12 animate-pulse" />
            <div className="h-4 bg-white/10 rounded-md w-3/4 animate-pulse" />
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            <div className="h-12 bg-white/20 rounded-xl w-44 animate-pulse" />
            <div className="h-12 bg-white/10 rounded-xl w-36 animate-pulse" />
          </div>
        </div>
        <div className="md:col-span-5 flex justify-center">
          <div className="w-full max-w-md h-64 sm:h-80 bg-white/10 rounded-3xl animate-pulse border border-white/10" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonHero;
