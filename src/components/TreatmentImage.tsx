import React, { useState } from 'react';

interface TreatmentImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2';
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const ASPECT_DIMENSIONS: Record<NonNullable<TreatmentImageProps['aspectRatio']>, { width: number; height: number }> = {
  '16/9': { width: 800, height: 450 },
  '4/3': { width: 800, height: 600 },
  '1/1': { width: 600, height: 600 },
  '3/2': { width: 750, height: 500 },
};

export const TreatmentImage: React.FC<TreatmentImageProps> = ({
  src,
  alt,
  caption,
  aspectRatio = '16/9',
  className = '',
  priority = false,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px',
}) => {
  const [hasError, setHasError] = useState(false);

  const dims = ASPECT_DIMENSIONS[aspectRatio];
  const isUnsplash = src.includes('images.unsplash.com');
  const isLocalResponsiveWebp = src.startsWith('/assets/images/treatments/') && src.endsWith('-800.webp');
  const cleanUrl = isUnsplash ? src.split('?')[0] : src;

  const optimizedSrc = isUnsplash
    ? `${cleanUrl}?auto=format&fit=crop&fm=webp&w=800&q=75`
    : src;

  const srcSet = isLocalResponsiveWebp
    ? `${src.replace('-800.webp', '-400.webp')} 400w, ${src} 800w`
    : isUnsplash
    ? `${cleanUrl}?auto=format&fit=crop&fm=webp&w=400&q=70 400w, ${cleanUrl}?auto=format&fit=crop&fm=webp&w=800&q=75 800w`
    : undefined;

  return (
    <figure
      className={`my-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 ${className}`}
    >
      <div
        className="relative w-full overflow-hidden bg-slate-100 flex items-center justify-center"
        style={{ aspectRatio }}
      >
        {hasError ? (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-100 text-slate-600">
            <span className="text-sm font-semibold text-slate-800">{alt}</span>
            <span className="text-xs text-slate-500 mt-1">Oracle Dental Clinic &amp; Implant Center</span>
          </div>
        ) : (
          <img
            src={optimizedSrc}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            width={dims.width}
            height={dims.height}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
            referrerPolicy="no-referrer"
            onError={() => setHasError(true)}
            className="w-full h-full object-cover"
          />
        )}
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
