import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  Building2, 
  ArrowRight,
  HeartPulse,
  Activity,
  Compass,
  Car
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { GBP_CONFIG } from '../config/googleBusinessProfile';

interface DentalClinicGhaziabadPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function DentalClinicGhaziabadPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: DentalClinicGhaziabadPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (navigateToPath) {
      navigateToPath(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  useEffect(() => {
    const title = "Dental Clinic in Ghaziabad | Oracle Dental Clinic";
    const description = "Looking for a modern dental clinic in Ghaziabad? Oracle Dental Clinic at KTS Complex, Jaat Chowk offers comprehensive multi-specialty dental care, rotary RCT, implants & crowns. Consultation ₹200.";
    const pageUrl = `${window.location.origin}/dental-clinic-ghaziabad`;

    document.title = title;

    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', contentVal);
    };

    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", "dental clinic in Ghaziabad, dental clinic Ghaziabad, dental clinic near me, dentist near me, dental treatment Ghaziabad, nearby dental clinic, dental clinic Chipiyana Buzurg, dental care Ghaziabad, dental doctor Ghaziabad, family dental clinic Ghaziabad");

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", pageUrl);
    setMetaTag("property", "og:image", "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80");

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    const clinicSchema = {
      "@context": "https://schema.org",
      "@type": ["Dentist", "LocalBusiness", "MedicalClinic"],
      "@id": `${pageUrl}#clinic`,
      "name": "Oracle Dental Clinic",
      "url": pageUrl,
      "telephone": "+917011961515",
      "priceRange": "₹200 Consultation",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No. 47, KTS Complex, Jaat Chowk, near Dolphin Public School, Chipiyana Buzurg",
        "addressLocality": "Ghaziabad",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201009",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6280,
        "longitude": 77.4520
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "10:00",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "17:00",
          "closes": "21:00"
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "Dr. Prashant Kumar Vats",
        "jobTitle": "Dental Surgeon & Oral Health Practitioner",
        "honorificSuffix": "BDS"
      }
    };

    let script = document.getElementById('dental-clinic-ghaziabad-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'dental-clinic-ghaziabad-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(clinicSchema);

    return () => {
      const s = document.getElementById('dental-clinic-ghaziabad-schema');
      if (s) s.remove();
    };
  }, []);

  const faqs = [
    {
      q: "Where is Oracle Dental Clinic located in Ghaziabad?",
      a: "The clinic is located at Shop No. 47, KTS Complex, Jaat Chowk, near Dolphin Public School, Chipiyana Buzurg, Ghaziabad, UP 201009. We are conveniently accessible from Crossings Republik, Lal Kuan, Shahberi, and Noida Extension."
    },
    {
      q: "What makes Oracle Dental Clinic distinct as a family dental center?",
      a: "Our clinic combines personalized clinical attention from Dr. Prashant Kumar Vats, BDS with modern diagnostic tools, strict multi-stage autoclave sterilization, transparent ₹200 consultation pricing, and comprehensive services from preventive cleaning to complex restorative implants."
    },
    {
      q: "What are the clinic's operational timings?",
      a: "We operate daily Monday through Sunday with two convenient daily shifts: 10:00 AM to 2:00 PM in the morning, and 5:00 PM to 9:00 PM in the evening, accommodating working individuals and school schedules."
    },
    {
      q: "How can I book an appointment at Oracle Dental Clinic?",
      a: "You can book easily by calling 7011961515 or messaging our official WhatsApp desk. Walk-in consultations are also welcomed during standard working hours."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Dental Clinic in Ghaziabad', path: '/dental-clinic-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Multi-Specialty Facility"
      />

      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xs">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Full-Service Dental Center • Chipiyana Buzurg, Ghaziabad</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Dental Clinic in Ghaziabad
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
              <strong>Oracle Dental Clinic</strong> provides clean, patient-centric, and technologically equipped dental care in Chipiyana Buzurg, Ghaziabad. Under <strong>Dr. Prashant Kumar Vats, BDS</strong>, our clinic offers comprehensive diagnosis, routine dental maintenance, restorative procedures, and gentle emergency care.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white/10 border border-white/15 rounded-xl p-3 backdrop-blur-xs">
                <span className="text-slate-300 text-xs block">Consultation Fee</span>
                <span className="text-amber-300 font-bold text-lg">₹200</span>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-xl p-3 backdrop-blur-xs">
                <span className="text-slate-300 text-xs block">Attending Doctor</span>
                <span className="text-white font-bold text-sm">Dr. Prashant Kumar Vats, BDS</span>
              </div>
              <div className="bg-white/10 border border-white/15 rounded-xl p-3 backdrop-blur-xs col-span-2 sm:col-span-1">
                <span className="text-slate-300 text-xs block">Operating Shifts</span>
                <span className="text-emerald-300 font-semibold text-xs sm:text-sm">Daily: 10am-2pm | 5pm-9pm</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <InteractiveButton
                id="clinic-ghz-call-btn"
                onClick={handleCall}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-lg transition-transform active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call 7011961515</span>
              </InteractiveButton>

              <InteractiveButton
                id="clinic-ghz-wa-btn"
                onClick={handleWhatsApp}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-lg transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book Appointment</span>
              </InteractiveButton>

              <InteractiveButton
                id="clinic-ghz-dir-btn"
                onClick={handleDirections}
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold px-5 py-3.5 rounded-xl flex items-center gap-2 transition-all active:scale-95"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Get Directions</span>
              </InteractiveButton>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Clinic Overview */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" /> Clinical Infrastructure & Hygiene
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Modern Dental Infrastructure for Predictable Care
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Oracle Dental Clinic has been established to serve the healthcare needs of local residents with integrity and high standards of operatory cleanliness. We prioritize conservative treatment methodologies, focusing on saving natural teeth and restoring oral comfort.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Multi-Stage Sterilization:</strong> Autoclaved instruments and strict surface sanitization protocols.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Digital Radiography:</strong> Targeted imaging to evaluate root canals and bone levels accurately.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Accessible Pricing:</strong> Clear ₹200 consultation fees with transparent procedural options.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Comprehensive Range:</strong> Restorative, surgical, preventive, and pediatric dental care.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TreatmentImage
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Oracle Dental Clinic consultation room and patient chair in Chipiyana Buzurg Ghaziabad"
                caption="Oracle Dental Clinic: Clean, professional dental operatory in Chipiyana Buzurg, Ghaziabad."
                aspectRatio="4/3"
                priority={true}
              />
            </div>
          </div>
        </section>

        {/* Clinical Services Range */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Clinical Offerings</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Range of Dental Treatments at Oracle Dental Clinic
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl">
              We provide comprehensive family dental services designed to treat oral pain, restore missing teeth, and maintain healthy gums:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="font-bold text-lg text-slate-900">Restorative Care & RCT</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Rotary root canal therapy for inflamed dental nerves, metal-free zirconia crowns, and durable composite fillings to restore damaged enamel.
              </p>
              <div className="pt-2 flex flex-col gap-1.5 text-xs font-bold text-blue-700">
                <a href="/root-canal-treatment" onClick={(e) => handleLinkClick(e, '/root-canal-treatment')} className="hover:underline flex items-center justify-between">
                  Root Canal Treatment <ArrowRight className="w-3 h-3" />
                </a>
                <a href="/tooth-cap" onClick={(e) => handleLinkClick(e, '/tooth-cap')} className="hover:underline flex items-center justify-between">
                  Tooth Caps & Crowns <ArrowRight className="w-3 h-3" />
                </a>
                <a href="/dental-fillings" onClick={(e) => handleLinkClick(e, '/dental-fillings')} className="hover:underline flex items-center justify-between">
                  Tooth-Colored Fillings <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="font-bold text-lg text-slate-900">Tooth Replacement</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Permanent titanium dental implants, fixed tooth-supported dental bridges, and flexible custom dentures to restore biting chewing strength.
              </p>
              <div className="pt-2 flex flex-col gap-1.5 text-xs font-bold text-blue-700">
                <a href="/dental-implants" onClick={(e) => handleLinkClick(e, '/dental-implants')} className="hover:underline flex items-center justify-between">
                  Dental Implants Guide <ArrowRight className="w-3 h-3" />
                </a>
                <a href="/dental-bridges" onClick={(e) => handleLinkClick(e, '/dental-bridges')} className="hover:underline flex items-center justify-between">
                  Fixed Dental Bridges <ArrowRight className="w-3 h-3" />
                </a>
                <a href="/dentures" onClick={(e) => handleLinkClick(e, '/dentures')} className="hover:underline flex items-center justify-between">
                  Dentures Options <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <h3 className="font-bold text-lg text-slate-900">Preventive & Surgical Care</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Gentle wisdom tooth surgical removals, ultrasonic scaling for bleeding gums, pediatric preventive treatments, and emergency toothache relief.
              </p>
              <div className="pt-2 flex flex-col gap-1.5 text-xs font-bold text-blue-700">
                <a href="/wisdom-tooth-extraction" onClick={(e) => handleLinkClick(e, '/wisdom-tooth-extraction')} className="hover:underline flex items-center justify-between">
                  Wisdom Tooth Removal <ArrowRight className="w-3 h-3" />
                </a>
                <a href="/teeth-cleaning" onClick={(e) => handleLinkClick(e, '/teeth-cleaning')} className="hover:underline flex items-center justify-between">
                  Teeth Cleaning & Scaling <ArrowRight className="w-3 h-3" />
                </a>
                <a href="/emergency-dentist" onClick={(e) => handleLinkClick(e, '/emergency-dentist')} className="hover:underline flex items-center justify-between">
                  Emergency Dental Care <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Location & Directions */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-3">
              <h2 className="text-2xl font-bold text-slate-900">Visiting Oracle Dental Clinic</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Located at <strong>Shop No. 47, KTS Complex, Jaat Chowk, near Dolphin Public School, Chipiyana Buzurg, Ghaziabad, UP 201009</strong>.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Serving patients across Chipiyana Buzurg, Crossings Republik, Lal Kuan, Shahberi, Noida Extension, and the ABES Engineering College area.
              </p>
              <div className="pt-2">
                <a
                  href="/dentist-ghaziabad"
                  onClick={(e) => handleLinkClick(e, '/dentist-ghaziabad')}
                  className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1"
                >
                  Meet Dr. Prashant Kumar Vats, BDS <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Quick Contact & Timings</span>
              <p className="text-xs text-slate-700"><strong>Daily Hours:</strong> 10:00 AM–2:00 PM & 5:00 PM–9:00 PM</p>
              <p className="text-xs text-slate-700"><strong>Direct Helpline:</strong> 7011961515</p>
              <InteractiveButton
                id="clinic-ghz-map-btn-2"
                onClick={handleDirections}
                className="w-full bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 border border-blue-200"
              >
                <Compass className="w-4 h-4 text-blue-700" /> Open in Google Maps
              </InteractiveButton>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-3 pt-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 bg-white hover:bg-slate-50"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-bold text-slate-900 text-sm">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-blue-600 shrink-0 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-slate-50/70 border-t border-slate-100 p-6 text-slate-600 text-xs sm:text-sm leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Schedule Your Visit to Oracle Dental Clinic</h2>
            <p className="text-slate-200 text-sm">
              Book a ₹200 consultation with Dr. Prashant Kumar Vats, BDS in Chipiyana Buzurg, Ghaziabad.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <InteractiveButton id="clinic-call-cta" onClick={handleCall} className="bg-amber-500 text-slate-950 font-extrabold px-6 py-3 rounded-xl flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> Call 7011961515
            </InteractiveButton>
            <InteractiveButton id="clinic-wa-cta" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> WhatsApp Booking
            </InteractiveButton>
          </div>
        </section>
      </main>
    </div>
  );
}
