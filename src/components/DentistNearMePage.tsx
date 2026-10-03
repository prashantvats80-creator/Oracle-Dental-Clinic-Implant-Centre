import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  ChevronDown, 
  Navigation, 
  ArrowRight,
  HeartPulse,
  Compass,
  Car,
  Clock,
  AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { GBP_CONFIG } from '../config/googleBusinessProfile';

interface DentistNearMePageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function DentistNearMePage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: DentistNearMePageProps) {
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
    const title = "Dentist Near Me in Ghaziabad | Oracle Dental Clinic";
    const description = "Searching for a trusted dentist near me in Ghaziabad? Oracle Dental Clinic at KTS Complex, Jaat Chowk, Chipiyana Buzurg offers fast appointments and emergency care. Consultation ₹200.";
    const pageUrl = `${window.location.origin}/dentist-near-me`;

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
    setMetaTag("name", "keywords", "dentist near me, dental clinic near me, nearby dentist, nearby dental clinic, dentist near me Ghaziabad, dentist near Chipiyana Buzurg, dentist near Jaat Chowk, dentist near Crossings Republik, dentist near Lal Kuan, dentist near Noida Extension");

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", pageUrl);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    const schema = {
      "@context": "https://schema.org",
      "@type": ["Dentist", "LocalBusiness"],
      "@id": `${pageUrl}#dentist-near-me`,
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
      ]
    };

    let script = document.getElementById('dentist-near-me-schema') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'dentist-near-me-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schema);

    return () => {
      const s = document.getElementById('dentist-near-me-schema');
      if (s) s.remove();
    };
  }, []);

  const faqs = [
    {
      q: "Where is the nearest landmark to Oracle Dental Clinic?",
      a: "The clinic is located at Jaat Chowk, directly adjacent to Dolphin Public School in KTS Complex, Chipiyana Buzurg, Ghaziabad. Landmark: Ground floor shop No. 47 with visible clinic signboards."
    },
    {
      q: "Can I get an immediate appointment if I am nearby and in pain?",
      a: "Yes. We accommodate emergency walk-in patients during our clinic hours (10:00 AM–2:00 PM and 5:00 PM–9:00 PM daily). You can also call 7011961515 while on your way so our team is prepared."
    },
    {
      q: "What is the consultation fee for nearby patients?",
      a: "Our consultation fee is a straightforward ₹200. It covers clinical examination, diagnosis, and step-by-step guidance on recommended treatments."
    },
    {
      q: "Which localities are within convenient driving distance?",
      a: "Our clinic is within 5 to 15 minutes of Crossings Republik, Lal Kuan, Shahberi, Noida Extension, Panchsheel Greens 2, Chappraula, and the ABES Engineering College area."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Dentist Near Me in Ghaziabad', path: '/dentist-near-me' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Nearby Local Practice"
      />

      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xs">
              <Navigation className="w-3.5 h-3.5 text-amber-400" />
              <span>Nearby Dental Care • Chipiyana Buzurg, Ghaziabad</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Dentist Near Me in Ghaziabad
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
              When dental pain strikes or routine checkups are due, having a trusted clinic close to home makes all the difference. <strong>Oracle Dental Clinic</strong>, led by <strong>Dr. Prashant Kumar Vats, BDS</strong>, is situated at Jaat Chowk, Chipiyana Buzurg, providing rapid access, ethical care, and transparent ₹200 consultations.
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
                <span className="text-slate-300 text-xs block">Clinic Shifts</span>
                <span className="text-emerald-300 font-semibold text-xs sm:text-sm">10am–2pm | 5pm–9pm Daily</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <InteractiveButton id="near-me-call" onClick={handleCall} className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-lg">
                <PhoneCall className="w-4 h-4" /> <span>Call 7011961515</span>
              </InteractiveButton>
              <InteractiveButton id="near-me-wa" onClick={handleWhatsApp} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-lg">
                <MessageCircle className="w-4 h-4" /> <span>WhatsApp Desk</span>
              </InteractiveButton>
              <InteractiveButton id="near-me-dir" onClick={handleDirections} className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold px-5 py-3.5 rounded-xl flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" /> <span>Open GPS Map</span>
              </InteractiveButton>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Exact Location & Directions Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Fast Local Access</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Finding Your Way to Oracle Dental Clinic
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Finding a nearby dentist shouldn't involve driving across congested city traffic. We are located at <strong>Shop No. 47, KTS Complex, Jaat Chowk, near Dolphin Public School, Chipiyana Buzurg, Ghaziabad 201009</strong>.
              </p>
              <div className="space-y-2 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>From Crossings Republik:</strong> Quick drive via the main connecting road directly to Jaat Chowk.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>From Lal Kuan & NH-9:</strong> Direct approach towards Chipiyana Buzurg via ABES Engineering College road.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>From Noida Extension / Shahberi:</strong> Straight road connectivity into Jaat Chowk with convenient parking.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                <Car className="w-4 h-4 text-blue-600" /> Landmark & Parking Information
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Located right at Jaat Chowk near Dolphin Public School. Ground-level access with convenient scooter and car parking space outside the KTS Complex.
              </p>
              <InteractiveButton id="dir-btn-inner" onClick={handleDirections} className="w-full bg-blue-600 text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2">
                <Compass className="w-4 h-4" /> Get Live Driving Directions
              </InteractiveButton>
            </div>
          </div>
        </section>

        {/* Common Symptoms & Recommended Treatments */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What Treatment Should You Seek?</h2>
            <p className="text-slate-600 text-sm max-w-2xl">
              Unsure what kind of care your dental symptom requires? Here is a quick reference guide before your visit:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">1</div>
              <h3 className="font-bold text-base text-slate-900">Severe Throbbing Pain</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Usually indicates deep nerve infection or pulpitis. A <a href="/root-canal-treatment" onClick={(e) => handleLinkClick(e, '/root-canal-treatment')} className="text-blue-700 font-bold underline">Root Canal Treatment</a> cleans the infection while preserving your natural tooth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">2</div>
              <h3 className="font-bold text-base text-slate-900">Bleeding on Brushing</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                A sign of tartar buildup and early gingivitis. Professional <a href="/teeth-cleaning" onClick={(e) => handleLinkClick(e, '/teeth-cleaning')} className="text-blue-700 font-bold underline">Teeth Cleaning (Scaling)</a> clears subgingival plaque and stops gum inflammation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">3</div>
              <h3 className="font-bold text-base text-slate-900">Missing Tooth Gap</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Causes bone loss and shifting bite. Permanent <a href="/dental-implants" onClick={(e) => handleLinkClick(e, '/dental-implants')} className="text-blue-700 font-bold underline">Dental Implants</a> or fixed dental bridges restore chewing strength without slipping.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Dental Care Banner */}
        <section className="bg-rose-50 border border-rose-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 bg-rose-100 px-3 py-1 rounded-full uppercase">
              <AlertTriangle className="w-3.5 h-3.5" /> Urgent Care
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-rose-950">Experiencing a Dental Emergency Nearby?</h3>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
              Knocked-out tooth, severe facial swelling, or acute dental trauma? Call us immediately at <strong>7011961515</strong>.
            </p>
          </div>
          <InteractiveButton id="emerg-btn-call" onClick={handleCall} className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-3 rounded-xl text-sm shrink-0">
            Emergency Helpline: 7011961515
          </InteractiveButton>
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
      </main>
    </div>
  );
}
