import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { trackClinicEvent } from '../utils/analytics';

const BOTPRESS_BASE_URL = 'https://vdk-viber-runtime-prod.bot.botpress.host';
const BOTPRESS_BOT_ID = '50dd1c17-0fec-434b-b1ef-9ff0c3757ce1';
const BOTPRESS_CSS_URL = `${BOTPRESS_BASE_URL}/edge/webchat.css`;
const BOTPRESS_JS_URL = `${BOTPRESS_BASE_URL}/edge/webchat.js`;
const BOTPRESS_CONFIG_URL = `${BOTPRESS_BASE_URL}/edge/bots/${BOTPRESS_BOT_ID}/config`;

interface VdkEdgeWebchatInstance {
  open: () => void;
  close: () => void;
}

interface VdkEdgeWebchatGlobal {
  mount: (config: Record<string, unknown>) => Promise<VdkEdgeWebchatInstance>;
}

declare global {
  interface Window {
    VdkEdgeWebchat?: VdkEdgeWebchatGlobal;
    __oracleBotpressInstance?: VdkEdgeWebchatInstance;
    __oracleBotpressPromise?: Promise<VdkEdgeWebchatInstance> | null;
  }
}

/**
 * Loads Botpress webchat CSS and JS strictly on-demand (first click of the AI Dental Assistant button).
 * - Zero initial CSS/JS network or main-thread work during page load.
 * - Guaranteed single-load and single-mount across all routes.
 * - Preserves exact official Botpress Bot ID and base URL.
 */
function ensureBotpressLoadedAndMounted(): Promise<VdkEdgeWebchatInstance> {
  if (window.__oracleBotpressInstance) {
    return Promise.resolve(window.__oracleBotpressInstance);
  }
  if (window.__oracleBotpressPromise) {
    return window.__oracleBotpressPromise;
  }

  window.__oracleBotpressPromise = new Promise<VdkEdgeWebchatInstance>((resolve, reject) => {
    // 1. Load Botpress stylesheet once
    if (!document.getElementById('oracle-botpress-webchat-css')) {
      const css = document.createElement('link');
      css.id = 'oracle-botpress-webchat-css';
      css.rel = 'stylesheet';
      css.href = BOTPRESS_CSS_URL;
      document.head.appendChild(css);
    }

    const mountOnce = () => {
      if (!window.VdkEdgeWebchat || typeof window.VdkEdgeWebchat.mount !== 'function') {
        window.__oracleBotpressPromise = null;
        reject(new Error('VdkEdgeWebchat not available'));
        return;
      }

      fetch(BOTPRESS_CONFIG_URL)
        .then((res) => {
          if (!res.ok) throw new Error(`Botpress config fetch failed: ${res.status}`);
          return res.json();
        })
        .then((data: { webchat?: Record<string, unknown> }) => {
          const webchat = data && data.webchat ? data.webchat : {};
          return window.VdkEdgeWebchat!.mount({
            ...webchat,
            mode: 'bubble',
            baseUrl: BOTPRESS_BASE_URL,
            botId: BOTPRESS_BOT_ID,
          });
        })
        .then((instance) => {
          window.__oracleBotpressInstance = instance;
          resolve(instance);
        })
        .catch((err) => {
          window.__oracleBotpressPromise = null;
          reject(err);
        });
    };

    // 2. Load Botpress script once
    if (window.VdkEdgeWebchat && typeof window.VdkEdgeWebchat.mount === 'function') {
      mountOnce();
      return;
    }

    let script = document.getElementById('oracle-botpress-webchat-script') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'oracle-botpress-webchat-script';
      script.src = BOTPRESS_JS_URL;
      script.async = true;
      document.body.appendChild(script);
    }

    script.addEventListener('load', mountOnce, { once: true });
    script.addEventListener(
      'error',
      () => {
        window.__oracleBotpressPromise = null;
        reject(new Error('Failed to load Botpress webchat script'));
      },
      { once: true }
    );
  });

  return window.__oracleBotpressPromise;
}

/**
 * Global Floating Action Buttons (Portaled to document.body)
 * - Appears on EVERY route (homepage, /dental-services, all treatment/local/cost pages, and 404).
 * - Fixed on the right side in exact vertical order:
 *   TOP: AI Dental Assistant button -> loads & opens Botpress VdkEdgeWebchat on-demand
 *   MIDDLE: Existing Call button -> tel:+917011961515 (preserved unchanged)
 *   BOTTOM: Existing WhatsApp button -> https://wa.me/917011961515 (preserved unchanged)
 */
export const FloatingAppointmentButtons: React.FC = () => {
  const [isOpeningAssistant, setIsOpeningAssistant] = useState(false);

  const handleOpenAiAssistant = async () => {
    if (typeof window === 'undefined' || isOpeningAssistant) return;

    const existingRoot = document.querySelector('.vdk-edge.vdk-edge-mode-bubble');
    const isCurrentlyOpen = Boolean(existingRoot?.classList.contains('vdk-edge-open'));

    if (window.__oracleBotpressInstance) {
      if (isCurrentlyOpen) {
        window.__oracleBotpressInstance.close();
      } else {
        window.__oracleBotpressInstance.open();
      }
      return;
    }

    setIsOpeningAssistant(true);
    try {
      const instance = await ensureBotpressLoadedAndMounted();
      instance.open();
    } catch {
      // Keep UI resilient if Botpress host is temporarily unreachable
    } finally {
      setIsOpeningAssistant(false);
    }
  };

  const buttons = (
    <div
      id="global-floating-action-stack"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] fab-safe-bottom flex flex-col items-center gap-3"
    >
      {/* TOP: AI Dental Assistant Button -> Loads & Opens Botpress Chatbot On-Demand */}
      <div className="relative group flex items-center">
        <span
          role="tooltip"
          className="pointer-events-none hidden sm:inline-flex items-center whitespace-nowrap absolute right-[64px] top-1/2 -translate-y-1/2 bg-[#0F172A] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-within:opacity-100 group-focus-within:translate-x-0 transition-all duration-150"
        >
          {isOpeningAssistant ? 'Opening AI Assistant…' : 'AI Dental Assistant'}
        </span>
        <button
          id="global-floating-ai-assistant"
          type="button"
          onClick={handleOpenAiAssistant}
          disabled={isOpeningAssistant}
          aria-label="Open AI Dental Assistant"
          aria-busy={isOpeningAssistant}
          title="AI Dental Assistant"
          className="relative fab-contact-btn fab-contact-ai inline-flex items-center justify-center w-[54px] h-[54px] rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-[0_6px_22px_rgba(2,132,199,0.48)] border-2 border-white cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300 focus-visible:ring-offset-2 disabled:opacity-80"
        >
          <svg
            viewBox="0 0 24 24"
            width="26"
            height="26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
            className={isOpeningAssistant ? 'animate-pulse' : undefined}
          >
            <path d="M12 3v3" />
            <circle cx="12" cy="2.5" r="1" fill="currentColor" stroke="none" />
            <rect x="4" y="6" width="16" height="12" rx="4" />
            <circle cx="9.25" cy="11.5" r="1.25" fill="currentColor" stroke="none" />
            <circle cx="14.75" cy="11.5" r="1.25" fill="currentColor" stroke="none" />
            <path d="M9.5 15c.7.6 1.5.9 2.5.9s1.8-.3 2.5-.9" />
            <path d="M2 11v2" />
            <path d="M22 11v2" />
          </svg>
        </button>
      </div>

      {/* MIDDLE: Existing Call Handset Icon Button (Preserved Unchanged) */}
      <a
        id="global-floating-call"
        href={GBP_CONFIG.CALL_URL}
        aria-label={`Call Oracle Dental Clinic at ${GBP_CONFIG.PHONE_DISPLAY}`}
        title={`Call ${GBP_CONFIG.PHONE_DISPLAY}`}
        onClick={() =>
          trackClinicEvent('call_click', {
            placement: 'floating_bottom_right',
            interaction_label: 'floating_call_icon',
          })
        }
        className="relative fab-contact-btn fab-contact-call inline-flex items-center justify-center w-[54px] h-[54px] rounded-full bg-[#067067] hover:bg-[#087B57] text-white shadow-[0_6px_22px_rgba(6,112,103,0.48)] border-2 border-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD36A] focus-visible:ring-offset-2"
      >
        <svg
          viewBox="0 0 24 24"
          width="24"
          height="24"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
        </svg>
      </a>

      {/* BOTTOM: Existing WhatsApp Icon Button (Preserved Unchanged) */}
      <a
        id="global-floating-whatsapp"
        href={GBP_CONFIG.WHATSAPP_DIRECT_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Oracle Dental Clinic on WhatsApp"
        title="WhatsApp Oracle Dental Clinic"
        onClick={() =>
          trackClinicEvent('whatsapp_click', {
            placement: 'floating_bottom_left',
            interaction_label: 'floating_whatsapp_icon',
          })
        }
        className="relative fab-contact-btn inline-flex items-center justify-center w-[54px] h-[54px] rounded-full bg-[#128C4A] hover:bg-[#0E743D] text-white shadow-[0_6px_22px_rgba(18,140,74,0.48)] border-2 border-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 focus-visible:ring-offset-2"
      >
        <svg
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M16.002 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.256.592 4.456 1.716 6.392L3.2 28.8l6.588-1.728A12.74 12.74 0 0 0 16.002 28.8c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.436a10.6 10.6 0 0 1-5.408-1.484l-.388-.232-3.908 1.024 1.044-3.812-.252-.4a10.568 10.568 0 0 1-1.624-5.732c0-5.864 4.772-10.636 10.636-10.636 2.84 0 5.512 1.108 7.52 3.116a10.568 10.568 0 0 1 3.116 7.52c0 5.864-4.772 10.636-10.736 10.636zm5.832-7.968c-.32-.16-1.892-.932-2.184-1.04-.292-.108-.504-.16-.716.16-.212.32-.824 1.04-1.012 1.252-.188.212-.372.24-.692.08-.32-.16-1.352-.496-2.572-1.588-.952-.848-1.592-1.896-1.78-2.216-.188-.32-.02-.492.14-.652.144-.144.32-.372.48-.56.16-.188.212-.32.32-.532.108-.212.052-.4-.028-.56-.08-.16-.716-1.728-.984-2.368-.26-.624-.524-.54-.716-.548-.188-.008-.4-.012-.612-.012-.212 0-.56.08-.852.4-.292.32-1.12 1.092-1.12 2.664s1.148 3.092 1.308 3.304c.16.212 2.256 3.448 5.468 4.832.764.328 1.36.524 1.824.672.768.244 1.468.208 2.02.128.616-.092 1.892-.772 2.16-1.52.268-.748.268-1.388.188-1.52-.08-.132-.292-.212-.612-.372z" />
        </svg>
      </a>
    </div>
  );

  if (typeof document !== 'undefined' && document.body) {
    return createPortal(buttons, document.body);
  }
  return buttons;
};

export default FloatingAppointmentButtons;
