import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { LanguageProvider } from './context/LanguageContext.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
);

if ('serviceWorker' in navigator) {
  if (import.meta.env.PROD) {
    window.addEventListener('load', () => {
      const base = import.meta.env.BASE_URL || '/';
      const swPath = `${base.endsWith('/') ? base : `${base}/`}sw.js`;
      navigator.serviceWorker.register(swPath).catch(() => {
        navigator.serviceWorker.register('./sw.js').catch(() => {
          // Graceful fallback if registration fails
        });
      });
    });
  } else {
    // In development/preview, clear any stale service workers & caches so CSS/JS updates show immediately
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => reg.unregister());
    }).catch(() => {});
    if ('caches' in window) {
      caches.keys().then((keys) => {
        keys
          .filter((k) => k.startsWith('oracle-dental-'))
          .forEach((k) => caches.delete(k));
      }).catch(() => {});
    }
  }
}
