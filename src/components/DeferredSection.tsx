import React, { useEffect, useRef, useState } from 'react';

interface DeferredSectionProps {
  children: React.ReactNode;
  id?: string;
  minHeight?: number;
  rootMargin?: string;
  forceMount?: boolean;
  idleDelayMs?: number;
  bgClassName?: string;
}

/**
 * Crawler-safe below-the-fold deferred hydration wrapper:
 * - Keeps initial mobile TBT, DOM size, and JS chunk waterfall minimal on first paint.
 * - Mounts immediately when the user approaches via scroll (IntersectionObserver),
 *   when targeted by a hash anchor / nav link (forceMount), or gently during browser idle
 *   time after window load so search engine crawlers always index all links and content.
 * - Reserves intrinsic vertical space to guarantee zero Cumulative Layout Shift (CLS = 0).
 */
export default function DeferredSection({
  children,
  id,
  minHeight = 420,
  rootMargin = '350px 0px',
  forceMount = false,
  idleDelayMs = 6500,
  bgClassName = '',
}: DeferredSectionProps) {
  const [shouldRender, setShouldRender] = useState(forceMount);
  const hostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (forceMount) {
      setShouldRender(true);
    }
  }, [forceMount]);

  useEffect(() => {
    if (shouldRender) return;

    let cancelled = false;
    const mount = () => {
      if (!cancelled) setShouldRender(true);
    };

    // Mount immediately if URL hash points inside this section
    if (id && typeof window !== 'undefined' && window.location.hash === `#${id}`) {
      mount();
      return;
    }

    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined' && hostRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              mount();
              observer?.disconnect();
              break;
            }
          }
        },
        { rootMargin }
      );
      observer.observe(hostRef.current);
    }

    // Gentle post-load idle mount (ensures crawlers and passive visitors still receive full DOM)
    let timerId: number | null = null;
    let idleId: number | null = null;

    const scheduleIdleMount = () => {
      timerId = window.setTimeout(() => {
        if ('requestIdleCallback' in window) {
          idleId = (
            window as unknown as {
              requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number;
            }
          ).requestIdleCallback(mount, { timeout: 2000 });
        } else {
          mount();
        }
      }, idleDelayMs);
    };

    const onLoad = () => scheduleIdleMount();
    if (document.readyState === 'complete') {
      scheduleIdleMount();
    } else {
      window.addEventListener('load', onLoad, { once: true });
    }

    return () => {
      cancelled = true;
      observer?.disconnect();
      window.removeEventListener('load', onLoad);
      if (timerId !== null) window.clearTimeout(timerId);
      if (idleId !== null && 'cancelIdleCallback' in window) {
        (
          window as unknown as { cancelIdleCallback: (id: number) => void }
        ).cancelIdleCallback(idleId);
      }
    };
  }, [shouldRender, id, rootMargin, idleDelayMs]);

  if (shouldRender) {
    return <>{children}</>;
  }

  return (
    <div
      ref={hostRef}
      id={id}
      className={bgClassName}
      style={{
        minHeight: `${minHeight}px`,
        contentVisibility: 'auto',
        containIntrinsicSize: `auto ${minHeight}px`,
      }}
      aria-busy="true"
    />
  );
}
