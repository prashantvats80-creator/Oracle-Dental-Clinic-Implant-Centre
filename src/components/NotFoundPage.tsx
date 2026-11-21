import React from 'react';
import { Home, ArrowRight, PhoneCall, MessageCircle } from 'lucide-react';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { trackClinicEvent } from '../utils/analytics';

interface NotFoundPageProps {
  navigateToPath: (path: string) => void;
}

export default function NotFoundPage({ navigateToPath }: NotFoundPageProps) {
  const quickLinks = [
    { label: 'All 9 Dental Service Categories', path: '/dental-services' },
    { label: 'Dental Implants', path: '/dental-implants' },
    { label: 'Root Canal Treatment (RCT)', path: '/root-canal-treatment' },
    { label: 'Wisdom Tooth Extraction', path: '/wisdom-tooth-extraction' },
    { label: 'Smile Makeover & Cosmetic Dentistry', path: '/cosmetic-dentistry' },
    { label: 'Zirconia Crowns', path: '/zirconia-crowns' },
    { label: 'Clear Aligners & Braces', path: '/clear-aligners' },
    { label: '24/7 Emergency Dentist', path: '/emergency-dentist' },
  ];

  return (
    <section className="min-h-[70vh] bg-slate-50 py-16 px-4 flex items-center">
      <div className="max-w-3xl mx-auto w-full bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-xs text-center space-y-6">
        <p className="text-xs font-bold tracking-wider uppercase text-blue-700">
          404 · Page Not Found
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
          We Could Not Find That Page
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
          The page you are looking for may have moved. Explore our dental treatments at{' '}
          <strong>{GBP_CONFIG.BUSINESS_NAME}</strong> in Chipiyana Buzurg, Ghaziabad, or contact us directly.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateToPath('/');
            }}
            className="min-h-[44px] inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" /> Back to Homepage
          </a>
          <a
            href={GBP_CONFIG.CALL_URL}
            aria-label={`Call Oracle Dental Clinic at ${GBP_CONFIG.PHONE_DISPLAY}`}
            onClick={() => trackClinicEvent('call_click', { placement: '404_call' })}
            className="min-h-[44px] inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            <PhoneCall className="w-4 h-4" aria-hidden="true" /> Call {GBP_CONFIG.PHONE_DISPLAY}
          </a>
          <a
            href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book dental appointment on WhatsApp"
            onClick={() => trackClinicEvent('appointment_cta_click', { placement: '404_whatsapp' })}
            className="min-h-[44px] inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm px-6 py-3 rounded-xl transition-colors"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" /> Book on WhatsApp
          </a>
        </div>

        <div className="pt-6 border-t border-slate-100 text-left">
          <h2 className="text-sm font-bold text-slate-900 tracking-wide mb-3">
            Popular Dental Treatments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {quickLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPath(link.path);
                }}
                className="min-h-[44px] flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 text-sm font-medium transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
