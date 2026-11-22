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
    <section className="min-h-[70vh] bg-[#FFF8EC] py-16 px-4 flex items-center">
      <div className="max-w-3xl mx-auto w-full bg-white rounded-3xl border border-[#087B57]/12 p-8 sm:p-12 shadow-sm text-center space-y-6">
        <p className="text-xs font-bold tracking-wider uppercase text-[#FF8A24]">
          404 · Page Not Found
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#087B57]">
          We Could Not Find That Page
        </h1>
        <p className="text-[#26352F]/80 text-sm sm:text-base max-w-xl mx-auto">
          The page you are looking for may have moved. Explore our dental treatments at{' '}
          <strong className="text-[#26352F]">{GBP_CONFIG.BUSINESS_NAME}</strong> in Chipiyana Buzurg, Ghaziabad, or contact us directly.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigateToPath('/');
            }}
            className="min-h-[44px] inline-flex items-center gap-2 bg-[#087B57] hover:bg-[#066647] text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
          >
            <Home className="w-4 h-4" aria-hidden="true" /> Back to Homepage
          </a>
          <a
            href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book dental appointment on WhatsApp"
            onClick={() => trackClinicEvent('appointment_cta_click', { placement: '404_whatsapp' })}
            className="min-h-[44px] inline-flex items-center gap-2 bg-[#FF654F] hover:bg-[#e8533d] text-white font-bold text-sm px-6 py-3 rounded-full transition-colors"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" /> Book on WhatsApp
          </a>
          <a
            href={GBP_CONFIG.CALL_URL}
            aria-label={`Call Oracle Dental Clinic at ${GBP_CONFIG.PHONE_DISPLAY}`}
            onClick={() => trackClinicEvent('call_click', { placement: '404_call' })}
            className="min-h-[44px] inline-flex items-center gap-2 bg-[#E5F5EC] hover:bg-[#00A99D]/15 text-[#087B57] border border-[#087B57]/20 font-bold text-sm px-6 py-3 rounded-full transition-colors"
          >
            <PhoneCall className="w-4 h-4" aria-hidden="true" /> Call {GBP_CONFIG.PHONE_DISPLAY}
          </a>
        </div>

        <div className="pt-6 border-t border-[#087B57]/12 text-left">
          <h2 className="text-sm font-bold text-[#087B57] tracking-wide mb-3">
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
                className="min-h-[44px] flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#FFF8EC] hover:bg-[#E5F5EC] text-[#26352F] hover:text-[#087B57] text-sm font-semibold border border-[#087B57]/10 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-[#00A99D]" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
