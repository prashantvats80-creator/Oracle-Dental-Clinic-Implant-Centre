import React from 'react';
import { createPortal } from 'react-dom';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { trackClinicEvent } from '../utils/analytics';

/**
 * Global Icon-Only Floating Contact Buttons (Portaled to document.body)
 * - Appears on EVERY route (homepage, /dental-services, all 52 treatment/local pages, and 404).
 * - Bottom-left: Compact circular WhatsApp logo button -> https://wa.me/917011961515
 * - Bottom-right: Compact circular Telephone handset button -> tel:+917011961515
 * - Subtle CSS-only pulse & glow animations; respects prefers-reduced-motion and mobile safe areas.
 */
export const FloatingAppointmentButtons: React.FC = () => {
  const buttons = (
    <>
      {/* Bottom-Left: Compact Circular WhatsApp Icon Button */}
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
        className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-[9999] fab-safe-bottom fab-contact-btn inline-flex items-center justify-center w-[54px] h-[54px] rounded-full bg-[#25D366] hover:bg-[#1DAA54] text-white shadow-[0_6px_22px_rgba(37,211,102,0.5)] border-2 border-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300 focus-visible:ring-offset-2"
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

      {/* Bottom-Right: Compact Circular Call Handset Icon Button */}
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
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] fab-safe-bottom fab-contact-btn fab-contact-call inline-flex items-center justify-center w-[54px] h-[54px] rounded-full bg-[#1D4ED8] hover:bg-[#1E40AF] text-white shadow-[0_6px_22px_rgba(29,78,216,0.5)] border-2 border-white focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300 focus-visible:ring-offset-2"
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
    </>
  );

  if (typeof document !== 'undefined' && document.body) {
    return createPortal(buttons, document.body);
  }
  return buttons;
};

export default FloatingAppointmentButtons;
