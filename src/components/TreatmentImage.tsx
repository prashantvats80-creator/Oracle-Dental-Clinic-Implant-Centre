import React, { useState, useEffect } from 'react';
import { preloadImage } from '../utils/imagePreloader';

interface TreatmentImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2';
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export const TreatmentImage: React.FC<TreatmentImageProps> = ({
  src,
  alt,
  caption,
  aspectRatio = '16/9',
  className = '',
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px'
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Fallback high quality medical dental illustration
  const fallbackSrc = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80";
  const imageSrc = hasError ? fallbackSrc : src;

  // Build responsive srcSet for Unsplash images to save data on 2G mobile networks
  const isUnsplash = imageSrc.includes('images.unsplash.com');
  const cleanUrl = isUnsplash ? imageSrc.split('?')[0] : imageSrc;
  const srcSet = isUnsplash
    ? `${cleanUrl}?auto=format&fit=crop&w=400&q=75 400w, ${cleanUrl}?auto=format&fit=crop&w=800&q=80 800w, ${cleanUrl}?auto=format&fit=crop&w=1200&q=85 1200w`
    : undefined;

  useEffect(() => {
    preloadImage(imageSrc).then(() => {
      setIsLoaded(true);
    });
  }, [imageSrc]);

  return (
    <figure className={`my-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50 shadow-xs transition-all duration-300 hover:shadow-md ${className}`}>
      <div className="relative w-full overflow-hidden bg-slate-100 flex items-center justify-center">
        {/* Shimmer loading skeleton placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-slate-200 overflow-hidden z-10">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent animate-shimmer" />
          </div>
        )}
        <img
          src={imageSrc}
          srcSet={srcSet}
          sizes={sizes}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'low'}
          // @ts-ignore - React HTML attribute compatibility
          fetchpriority={priority ? 'high' : 'low'}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-auto object-cover transition-all duration-500 hover:scale-[1.02] ${
            isLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-xs'
          }`}
          style={{ aspectRatio }}
        />
        <div className="absolute top-2 right-2 bg-slate-900/75 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full border border-white/20 uppercase tracking-wider shadow-xs z-20">
          Educational Visual
        </div>
      </div>
      {caption && (
        <figcaption className="p-3 text-center text-xs font-medium text-slate-600 bg-white border-t border-slate-100 leading-snug">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default TreatmentImage;
