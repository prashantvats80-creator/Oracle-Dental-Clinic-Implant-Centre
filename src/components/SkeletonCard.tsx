import React from 'react';

export const SkeletonCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm overflow-hidden relative flex flex-col justify-between">
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-slate-200/50 to-transparent animate-shimmer pointer-events-none" />
      <div>
        <div className="w-12 h-12 bg-slate-200 rounded-xl mb-4 animate-pulse" />
        <div className="h-6 bg-slate-200 rounded-md w-3/4 mb-3 animate-pulse" />
        <div className="space-y-2 mb-6">
          <div className="h-3.5 bg-slate-200 rounded-md w-full animate-pulse" />
          <div className="h-3.5 bg-slate-200 rounded-md w-5/6 animate-pulse" />
          <div className="h-3.5 bg-slate-200 rounded-md w-2/3 animate-pulse" />
        </div>
      </div>
      <div className="h-10 bg-slate-200 rounded-xl w-full animate-pulse" />
    </div>
  );
};

export const SkeletonCardGrid: React.FC<{ count?: number }> = ({ count = 6 }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <div className="space-y-3 text-center mb-8">
        <div className="h-4 bg-slate-200 rounded-full w-48 mx-auto animate-pulse" />
        <div className="h-8 bg-slate-200 rounded-xl w-72 mx-auto animate-pulse" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: count }).map((_, idx) => (
          <SkeletonCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonCard;
