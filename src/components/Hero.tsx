import React from 'react';
import { PhoneCall, MessageCircle, Clock, MapPin, Star, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { trackClinicEvent } from '../utils/analytics';

interface HeroProps {
  handleCall?: () => void;
  handleWhatsApp?: () => void;
  navigateToPath?: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ navigateToPath }) => {
  const { language } = useLanguage();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (navigateToPath) {
      e.preventDefault();
      navigateToPath(path);
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden"
    >
      {/* Subtle Ambient Background Photo (WebP responsive, preserves original clinic ambience photo) */}
      <div className="absolute inset-0 pointer-events-none opacity-15">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&fm=webp&w=800&q=70"
          srcSet="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&fm=webp&w=480&q=65 480w, https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&fm=webp&w=900&q=70 900w"
          sizes="100vw"
          alt=""
          aria-hidden="true"
          width="900"
          height="506"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-blue-950/90 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-20 flex flex-col md:flex-row items-center gap-8">
        {/* Left Column: Primary Local SEO Headline & Immediate Native Anchor CTAs */}
        <div className="w-full md:w-7/12 z-10 text-center md:text-left space-y-5">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-xs sm:text-sm text-blue-100">
            <span className="font-semibold">
              {language === 'hi'
                ? 'ऑरैकल डेंटल क्लीनिक एवं इम्प्लांट सेंटर'
                : 'Oracle Dental Clinic & Implant Center'}
            </span>
            <span aria-hidden="true" className="text-blue-400">·</span>
            <span>Jaat Chowk, Chipiyana Buzurg</span>
            <span aria-hidden="true" className="text-blue-400">·</span>
            <a
              href={GBP_CONFIG.GOOGLE_BUSINESS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-300 hover:text-amber-200 font-semibold underline-offset-2 hover:underline"
            >
              <Star className="w-3.5 h-3.5 text-amber-400 fill-current" aria-hidden="true" />
              <span>{GBP_CONFIG.FALLBACK_RATING} on Google Maps</span>
            </a>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.15]">
            {language === 'hi' ? (
              <>
                चिपियाना बुजुर्ग, गाज़ियाबाद में{' '}
                <span className="text-amber-300">
                  विश्वसनीय डेंटिस्ट और डेंटल इम्प्लांट क्लीनिक
                </span>
              </>
            ) : (
              <>
                Dentist &amp; Dental Implants in{' '}
                <span className="text-amber-300">Chipiyana Buzurg, Ghaziabad</span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto md:mx-0 font-normal leading-relaxed">
            {language === 'hi'
              ? 'डॉ. प्रशांत कुमार वत्स (BDS) द्वारा डेंटल इम्प्लांट, रूट कैनाल (RCT), अकल दाढ़ सर्जरी, ज़िरकोनिया क्राउन, स्माइल मेकओवर और 24 घंटे इमरजेंसी दंत चिकित्सा।'
              : 'Comprehensive dental implants, root canal treatment (RCT), wisdom tooth surgery, zirconia crowns, clear aligners, smile makeovers, and 24-hour emergency dental care by Dr. Prashant Kumar Vats, BDS—serving Ghaziabad, Noida Extension, Greater Noida West, Crossings Republik & Shahberi.'}
          </p>

          {/* Primary Native Anchor Appointment Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-1">
            <a
              id="hero-whatsapp-btn"
              href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book an appointment on WhatsApp with Oracle Dental Clinic"
              onClick={() =>
                trackClinicEvent('appointment_cta_click', {
                  placement: 'hero_whatsapp',
                  interaction_label: 'book_whatsapp',
                })
              }
              className="w-full sm:w-auto min-h-[48px] bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-base py-3.5 px-7 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Book Appointment on WhatsApp</span>
            </a>

            <a
              id="hero-call-btn"
              href={GBP_CONFIG.CALL_URL}
              aria-label={`Call Oracle Dental Clinic at ${GBP_CONFIG.PHONE_DISPLAY}`}
              onClick={() =>
                trackClinicEvent('call_click', {
                  placement: 'hero_call',
                  interaction_label: 'call_clinic',
                })
              }
              className="w-full sm:w-auto min-h-[48px] bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-base py-3.5 px-7 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
            >
              <PhoneCall className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Call {GBP_CONFIG.PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* Direct Navigation to Interactive 9-Category Dental Services Page & Top Treatments */}
          <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-200">
            <a
              href="/dental-services"
              onClick={(e) => handleLinkClick(e, '/dental-services')}
              className="inline-flex items-center gap-1.5 font-semibold text-amber-300 hover:text-amber-200 underline underline-offset-4"
            >
              <span>Explore All 9 Dental Service Categories</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <span aria-hidden="true" className="text-slate-600">|</span>
            <a
              href="/dental-implants"
              onClick={(e) => handleLinkClick(e, '/dental-implants')}
              className="hover:text-white underline-offset-4 hover:underline"
            >
              Dental Implants
            </a>
            <a
              href="/root-canal-treatment"
              onClick={(e) => handleLinkClick(e, '/root-canal-treatment')}
              className="hover:text-white underline-offset-4 hover:underline"
            >
              Root Canal (RCT)
            </a>
            <a
              href="/cosmetic-dentistry"
              onClick={(e) => handleLinkClick(e, '/cosmetic-dentistry')}
              className="hover:text-white underline-offset-4 hover:underline"
            >
              Smile Makeover
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1 text-xs text-slate-300 pt-1">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
              <span>{GBP_CONFIG.HOURS}</span>
            </span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
              <span>Near Dolphin Public School, Jaat Chowk, Ghaziabad</span>
            </span>
          </div>
        </div>

        {/* Right Column: Doctor Card (Preserved Original Doctor Photo — Priority LCP Element) */}
        <div className="w-full md:w-5/12 z-10 flex justify-center md:justify-end relative">
          <div className="relative w-72 sm:w-80 bg-slate-900 border border-slate-800 p-4 rounded-3xl shadow-xl space-y-3.5">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-700 bg-slate-800">
              <img
                src={GBP_CONFIG.DOCTOR_IMAGE}
                alt="Dr. Prashant Kumar Vats, BDS at Oracle Dental Clinic & Implant Center in Chipiyana Buzurg, Ghaziabad"
                width="320"
                height="320"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <p className="font-bold text-base leading-tight text-amber-300">
                  {GBP_CONFIG.DOCTOR_TITLE}
                </p>
                <p className="text-xs text-slate-200">Dental Surgeon · Oracle Dental Clinic</p>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-300 bg-slate-950 p-3.5 rounded-xl border border-slate-800">
              <div className="flex items-start justify-between gap-2 font-semibold">
                <span className="text-slate-400 shrink-0">Clinic:</span>
                <span className="text-amber-300 text-right">{GBP_CONFIG.BUSINESS_NAME}</span>
              </div>
              <div className="flex items-start justify-between gap-2">
                <span className="text-slate-400 shrink-0">Address:</span>
                <span className="text-slate-200 text-right">
                  Shop No. 47, KTS Complex, Jaat Chowk, Near Dolphin Public School, Chipiyana Buzurg
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
