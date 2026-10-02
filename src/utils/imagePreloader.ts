/**
 * Utility for preloading critical treatment images using <link rel="preload">
 * and in-memory pre-fetching to ensure immediate, instant rendering.
 */

const preloadedUrls = new Set<string>();

export function preloadImage(src: string): Promise<void> {
  if (!src || typeof window === 'undefined' || preloadedUrls.has(src)) {
    return Promise.resolve();
  }

  preloadedUrls.add(src);

  // Inject <link rel="preload" as="image" href="..."> tag into head
  try {
    const escapedSrc = CSS.escape ? CSS.escape(src) : src;
    if (!document.querySelector(`link[rel="preload"][href="${escapedSrc}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    }
  } catch (e) {
    // Fallback if selector fails
  }

  // Pre-fetch in browser memory cache
  return new Promise((resolve) => {
    const img = new Image();
    img.src = src;
    if (img.complete) {
      resolve();
    } else {
      img.onload = () => resolve();
      img.onerror = () => resolve();
    }
  });
}

export function preloadHeroImage(src: string): Promise<void> {
  return preloadImage(src);
}

export function preloadImages(srcs: string[]): Promise<void[]> {
  return Promise.all(srcs.filter(Boolean).map((s) => preloadImage(s)));
}
