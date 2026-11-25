import React from 'react';
import {
  PhoneCall,
  CalendarCheck2,
  Clock,
  MapPin,
  Star,
  ArrowRight,
  ShieldCheck,
  Cpu,
  HeartHandshake,
  Users,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { trackClinicEvent } from '../utils/analytics';
import { ToothMascot } from './ToothMascot';

interface HeroProps {
  handleCall?: () => void;
  handleWhatsApp?: () => void;
  navigateToPath?: (path: string) => void;
}

const HERO_FEATURES = [
  {
    title: 'Trusted & Professional',
    desc: 'Evidence-based dental care and honest guidance led by Dr. Prashant Kumar Vats, BDS, MIDA.',
    icon: ShieldCheck,
    iconBg: 'bg-gradient-to-br from-[#087B57] to-[#00A99D] text-white shadow-[0_6px_14px_rgba(8,123,87,0.22)]',
    topBar: 'bg-[#087B57]',
    borderHover: 'hover:border-[#00A99D]',
  },
  {
    title: 'Advanced Technology',
    desc: 'Digital X-rays, rotary RCT, ultrasonic scaling, zirconia crowns, and modern dental implants.',
    icon: Cpu,
    iconBg: 'bg-gradient-to-br from-[#FF8A24] to-[#FFB347] text-white shadow-[0_6px_14px_rgba(255,138,36,0.26)]',
    topBar: 'bg-[#FF8A24]',
    borderHover: 'hover:border-[#FF8A24]',
  },
  {
    title: 'Personalized Care',
    desc: 'Gentle treatments under effective local anesthesia tailored to your comfort and smile goals.',
    icon: HeartHandshake,
    iconBg: 'bg-gradient-to-br from-[#FF654F] to-[#FF8A24] text-white shadow-[0_6px_14px_rgba(255,101,79,0.26)]',
    topBar: 'bg-[#FF654F]',
    borderHover: 'hover:border-[#FF654F]',
  },
  {
    title: 'Family-Friendly Dentistry',
    desc: 'Warm, welcoming dental care for children, adults, and seniors—Open Daily: 9:00 AM – 9:00 PM in Chipiyana Buzurg.',
    icon: Users,
    iconBg: 'bg-gradient-to-br from-[#00A99D] to-[#087B57] text-white shadow-[0_6px_14px_rgba(0,169,157,0.24)]',
    topBar: 'bg-[#00A99D]',
    borderHover: 'hover:border-[#00A99D]',
  },
];

const Hero: React.FC<HeroProps> = ({ navigateToPath }) => {
  const { language } = useLanguage();
  const baseUrl = import.meta.env.BASE_URL || '/';
  const imgPrefix = `${baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`}assets/images/`;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (navigateToPath) {
      e.preventDefault();
      navigateToPath(path);
    }
  };

  return (
    <section
      id="hero"
      className="relative bg-gradient-to-b from-[#FFF8EC] via-[#FFF8EC] to-[#FFF2DB]/70 text-[#26352F] overflow-hidden"
    >
      {/* Vibrant Organic Background Shapes (Teal, Papaya Orange, Sunshine Yellow & Soft Green) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-[#E5F5EC] opacity-90"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-6 -right-20 w-72 h-72 sm:w-[30rem] sm:h-[30rem] rounded-full bg-[#FFD36A]/35"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none hidden md:block absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-[#FF8A24]/10"
      />
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        className="pointer-events-none hidden lg:block absolute -top-14 right-0 w-[580px] h-[580px] opacity-95"
        fill="none"
      >
        <path
          d="M445 62C522 104 574 189 565 280C556 371 486 468 393 507C300 546 184 527 117 458C50 389 32 270 76 177C120 84 226 17 327 24C373 27 409 42 445 62Z"
          fill="#E5F5EC"
        />
        <circle cx="498" cy="112" r="36" fill="#FFD36A" opacity="0.55" />
      </svg>

      {/* Subtle Floating Decorative Stars & Hearts */}
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="pointer-events-none hidden sm:block absolute top-10 left-[45%] w-6 h-6 text-[#FF8A24] hero-sparkle"
        fill="currentColor"
      >
        <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="pointer-events-none hidden sm:block absolute bottom-48 left-[41%] w-5 h-5 text-[#FF654F] hero-sparkle-delayed"
        fill="currentColor"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="pointer-events-none hidden md:block absolute top-24 left-8 w-5 h-5 text-[#00A99D] hero-sparkle-delayed"
        fill="currentColor"
      >
        <path d="M12 2l2.2 5.8L20 10l-5.8 2.2L12 18l-2.2-5.8L4 10l5.8-2.2L12 2z" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12 sm:pt-9 sm:pb-16 md:pt-12 md:pb-20">
        {/* Main Split Hero Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Stronger Vibrant Headline, Supporting Copy & Primary CTA */}
          <div className="lg:col-span-6 z-10 text-center lg:text-left space-y-4 sm:space-y-5">
            {/* Clean Local Trust Metadata */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2.5 gap-y-1 text-xs sm:text-sm font-semibold">
              <span className="inline-flex items-center gap-1.5 text-[#087B57]">
                <span className="w-2 h-2 rounded-full bg-[#FF8A24]" aria-hidden="true" />
                {language === 'hi'
                  ? 'ऑरैकल डेंटल क्लीनिक एवं इम्प्लांट सेंटर'
                  : 'Oracle Dental Clinic & Implant Center'}
              </span>
              <span aria-hidden="true" className="text-[#FF8A24]">·</span>
              <span className="text-[#26352F]/80">Chipiyana Buzurg, Ghaziabad</span>
              <span aria-hidden="true" className="text-[#FF8A24]">·</span>
              <a
                href={GBP_CONFIG.GOOGLE_BUSINESS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#087B57] hover:text-[#FF654F] transition-colors underline-offset-2 hover:underline"
              >
                <Star className="w-3.5 h-3.5 text-[#FF8A24] fill-current" aria-hidden="true" />
                <span>{GBP_CONFIG.FALLBACK_RATING} Google Rating</span>
              </a>
            </div>

            {/* Stronger Primary Display Headline */}
            <h1 className="text-[2.15rem] sm:text-5xl lg:text-[3.75rem] font-extrabold tracking-tight leading-[1.06] text-[#087B57]">
              {language === 'hi' ? (
                <>
                  स्वस्थ मुस्कान।{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#FF654F] to-[#FF8A24] bg-clip-text text-transparent">
                      खुशहाल आप!
                    </span>
                  </span>
                </>
              ) : (
                <>
                  Healthy Smile.{' '}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-[#FF654F] to-[#FF8A24] bg-clip-text text-transparent">
                      Happier You!
                    </span>
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 220 14"
                      className="w-full h-3 -mt-1 text-[#FFD36A]"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M4 10C55 3 145 2 216 9"
                        stroke="currentColor"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </>
              )}
            </h1>

            {/* Supporting Headline */}
            <p className="text-lg sm:text-2xl font-extrabold text-[#26352F] leading-snug">
              {language === 'hi'
                ? 'पूरे परिवार के लिए विशेषज्ञ दंत चिकित्सा देखभाल'
                : 'Expert Dental Care for the Whole Family'}
            </p>

            {/* Supporting Text */}
            <p className="text-xs sm:text-base font-bold text-[#00A99D] tracking-wide">
              {language === 'hi'
                ? 'आधुनिक उपचार • उन्नत तकनीक • कोमल देखभाल'
                : 'Modern Treatment • Advanced Technology • Gentle Care'}
            </p>

            <p className="text-sm sm:text-base text-[#26352F]/85 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {language === 'hi'
                ? 'डॉ. प्रशांत कुमार वत्स (BDS, MIDA) द्वारा डेंटल इम्प्लांट, रूट कैनाल (RCT), अकल दाढ़ सर्जरी, ज़िरकोनिया क्राउन, स्माइल मेकओवर और दैनिक दंत देखभाल (सुबह 9 से रात 9 बजे तक)।'
                : 'Trusted dentist in Chipiyana Buzurg near Jaat Chowk, Ghaziabad for dental implants, root canal treatment (RCT), zirconia crowns, smile makeovers, braces, clear aligners, and emergency dental care (Open Daily: 9:00 AM – 9:00 PM).'}
            </p>

            {/* Primary & Secondary Native Anchor CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-1">
              <a
                id="hero-whatsapp-btn"
                href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book Appointment at Oracle Dental Clinic via WhatsApp"
                onClick={() =>
                  trackClinicEvent('appointment_cta_click', {
                    placement: 'hero_book_appointment',
                    interaction_label: 'book_appointment',
                  })
                }
                className="w-full sm:w-auto min-h-[52px] bg-gradient-to-r from-[#FF654F] to-[#FF8A24] hover:from-[#e8533d] hover:to-[#e67617] text-white font-extrabold text-base py-3.5 px-8 rounded-full shadow-[0_12px_26px_rgba(255,101,79,0.36)] transition-all duration-200 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD36A]"
              >
                <CalendarCheck2 className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Book Appointment</span>
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
                className="w-full sm:w-auto min-h-[52px] bg-white hover:bg-[#E5F5EC] text-[#087B57] border-2 border-[#087B57]/30 hover:border-[#087B57] font-extrabold text-base py-3.5 px-7 rounded-full shadow-xs transition-colors flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00A99D]/35"
              >
                <PhoneCall className="w-5 h-5 shrink-0 text-[#00A99D]" aria-hidden="true" />
                <span>Call {GBP_CONFIG.PHONE_DISPLAY}</span>
              </a>
            </div>

            {/* Quick Internal Links & Clinic Timings */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-3.5 gap-y-2 text-xs sm:text-sm font-semibold text-[#26352F]/85">
              <a
                href="/dental-services"
                onClick={(e) => handleLinkClick(e, '/dental-services')}
                className="inline-flex items-center gap-1 font-bold text-[#087B57] hover:text-[#FF654F] underline underline-offset-4 transition-colors"
              >
                <span>All Dental Services</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <span aria-hidden="true" className="text-[#FF8A24]">•</span>
              <a
                href="/dental-implants"
                onClick={(e) => handleLinkClick(e, '/dental-implants')}
                className="hover:text-[#087B57] underline-offset-4 hover:underline transition-colors"
              >
                Dental Implants
              </a>
              <span aria-hidden="true" className="text-[#FF8A24]">•</span>
              <a
                href="/smile-makeover-ghaziabad"
                onClick={(e) => handleLinkClick(e, '/smile-makeover-ghaziabad')}
                className="hover:text-[#087B57] underline-offset-4 hover:underline transition-colors"
              >
                Smile Makeover
              </a>
              <span aria-hidden="true" className="text-[#FF8A24]">•</span>
              <a
                href="#contact"
                className="hover:text-[#087B57] underline-offset-4 hover:underline transition-colors"
              >
                Directions
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1.5 text-xs text-[#26352F]/80">
              <span className="inline-flex items-center gap-1.5 font-bold text-[#087B57]">
                <Clock className="w-3.5 h-3.5 text-[#FF8A24] shrink-0" aria-hidden="true" />
                <span>{GBP_CONFIG.HOURS}</span>
              </span>
              <span className="hidden sm:inline text-[#087B57]/30" aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF654F] shrink-0" aria-hidden="true" />
                <span>Jaat Chowk, Near Dolphin Public School, Chipiyana Buzurg</span>
              </span>
            </div>
          </div>

          {/* Right Column: Smiling Woman in Dental Chair (Responsive WebP <picture>) + Organic Shapes + Tooth Mascot */}
          <div className="lg:col-span-6 relative flex justify-center items-center pt-2 pb-6 sm:py-6">
            <div className="relative w-full max-w-[460px] lg:max-w-[520px] mx-auto">
              {/* Layered Vibrant Organic Teal, Papaya Orange & Sunshine Yellow Shapes Behind Photo */}
              <div
                aria-hidden="true"
                className="absolute -inset-2.5 sm:-inset-4 rounded-[2.5rem] sm:rounded-[2.75rem] bg-gradient-to-tr from-[#087B57] via-[#00A99D] to-[#22B8A6] rotate-2 opacity-95 shadow-lg"
              />
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-2.5 sm:-top-5 sm:-right-5 w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#FF8A24] to-[#FF654F] opacity-95"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-2.5 sm:-bottom-5 sm:-left-5 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-[#FFD36A] opacity-95"
              />

              {/* Subtle Decorative Floating Stars & Hearts Around Photo */}
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="pointer-events-none absolute -top-6 left-6 w-6 h-6 sm:w-7 sm:h-7 text-[#FFD36A] hero-sparkle z-20"
                fill="currentColor"
              >
                <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z" />
              </svg>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="pointer-events-none absolute top-5 -right-2 sm:-right-6 w-5 h-5 sm:w-6 sm:h-6 text-[#FF654F] hero-sparkle-delayed z-20"
                fill="currentColor"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>

              {/* Main Smiling Woman in Dental Chair Photo (Ultra-Light Responsive WebP + JPEG Fallback) */}
              <div className="hero-photo-float relative z-10 rounded-[2rem] sm:rounded-[2.25rem] overflow-hidden border-4 border-white shadow-[0_20px_44px_rgba(8,123,87,0.24)] bg-[#E5F5EC]">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${imgPrefix}hero-patient-480.webp 480w, ${imgPrefix}hero-patient-768.webp 768w, ${imgPrefix}hero-patient-1000.webp 1000w`}
                    sizes="(max-width: 640px) 92vw, 520px"
                  />
                  <img
                    src={`${imgPrefix}hero-patient.jpg`}
                    srcSet={`${imgPrefix}hero-patient-480.jpg 480w, ${imgPrefix}hero-patient.jpg 1000w`}
                    sizes="(max-width: 640px) 92vw, 520px"
                    alt="Smiling young woman seated comfortably in a dental chair during a cheerful checkup"
                    width="1000"
                    height="667"
                    className="w-full h-auto aspect-[3/2] object-cover object-center block"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                  />
                </picture>
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#087B57]/35 to-transparent pointer-events-none"
                />
              </div>

              {/* Cute Original Cartoon Tooth Mascot + "Smile Brighter!" Positioned Cleanly on Mobile & Desktop */}
              <div className="absolute -bottom-7 right-1 sm:-bottom-8 sm:-right-6 z-30 origin-bottom-right scale-[0.78] sm:scale-100">
                <ToothMascot />
              </div>
            </div>
          </div>
        </div>

        {/* 4 Vibrant Rounded Feature Cards Immediately Below the Hero */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {HERO_FEATURES.map((item, idx) => (
            <div
              key={item.title}
              id={`hero-feature-card-${idx}`}
              className={`relative overflow-hidden bg-white rounded-2xl p-5 border border-[#087B57]/12 ${item.borderHover} shadow-sm hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 flex items-start gap-4`}
            >
              <span
                aria-hidden="true"
                className={`absolute top-0 inset-x-0 h-1 ${item.topBar}`}
              />
              <div className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                <item.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <h2 className="text-base font-extrabold text-[#26352F] leading-snug">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#26352F]/75 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Organic Curved Bottom Wave Divider Into Doctor Profile */}
      <div aria-hidden="true" className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 48"
          className="w-full h-6 sm:h-10 block text-[#E5F5EC]"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,18 C320,54 1120,-10 1440,26 L1440,48 L0,48 Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
