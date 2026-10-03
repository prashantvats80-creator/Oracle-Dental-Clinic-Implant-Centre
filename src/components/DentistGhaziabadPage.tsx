import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  ChevronDown, 
  Stethoscope, 
  ArrowRight,
  HeartPulse,
  Activity,
  AlertCircle,
  HelpCircle,
  Car,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { GBP_CONFIG } from '../config/googleBusinessProfile';

interface DentistGhaziabadPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function DentistGhaziabadPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: DentistGhaziabadPageProps) {
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
    // 1. Page Title & Meta Description (Strictly matching specifications)
    const title = "Dentist in Ghaziabad | Oracle Dental Clinic";
    const description = "Looking for a reliable dentist in Ghaziabad? Oracle Dental Clinic, led by Dr. Prashant Kumar Vats, BDS, provides comprehensive dental care in Chipiyana Buzurg near Jaat Chowk. Consultation fee ₹200.";
    const pageUrl = `${window.location.origin}/dentist-ghaziabad`;

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
    setMetaTag("name", "keywords", "dentist in Ghaziabad, dentist Ghaziabad, dentist near me, dental clinic Ghaziabad, dental clinic near me, nearby dentist, nearby dental clinic, dentist in Chipiyana Buzurg, dental treatment Ghaziabad, dentist near Chipiyana Buzurg, dental doctor Ghaziabad, dental surgeon Ghaziabad, Oracle Dental Clinic Ghaziabad");

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", pageUrl);
    setMetaTag("property", "og:image", "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80");

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80");

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    // 2. Structured Data (JSON-LD) for LocalBusiness/Dentist and WebPage
    const dentistSchema = {
      "@context": "https://schema.org",
      "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
      "@id": `${pageUrl}#dentist`,
      "name": "Oracle Dental Clinic",
      "legalName": "Oracle Dental Clinic",
      "url": pageUrl,
      "telephone": "+917011961515",
      "priceRange": "₹200 Consultation",
      "image": [
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80"
      ],
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
      "hasMap": GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL,
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
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": GBP_CONFIG.FALLBACK_RATING.toString(),
        "reviewCount": GBP_CONFIG.FALLBACK_REVIEW_COUNT.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Ghaziabad" },
        { "@type": "AdministrativeArea", "name": "Chipiyana Buzurg" },
        { "@type": "AdministrativeArea", "name": "Crossings Republik" },
        { "@type": "AdministrativeArea", "name": "Lal Kuan" },
        { "@type": "AdministrativeArea", "name": "Noida Extension" },
        { "@type": "AdministrativeArea", "name": "Shahberi" },
        { "@type": "AdministrativeArea", "name": "Chappraula" },
        { "@type": "AdministrativeArea", "name": "Panchsheel Greens 2" },
        { "@type": "AdministrativeArea", "name": "ABES Area" }
      ]
    };

    const webpageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      "url": pageUrl,
      "name": "Dentist in Ghaziabad | Oracle Dental Clinic",
      "description": description,
      "isPartOf": {
        "@type": "WebSite",
        "name": "Oracle Dental Clinic",
        "url": window.location.origin
      },
      "about": {
        "@id": `${pageUrl}#dentist`
      }
    };

    let script1 = document.getElementById('dentist-ghaziabad-schema') as HTMLScriptElement | null;
    if (!script1) {
      script1 = document.createElement('script');
      script1.id = 'dentist-ghaziabad-schema';
      script1.type = 'application/ld+json';
      document.head.appendChild(script1);
    }
    script1.text = JSON.stringify(dentistSchema);

    let script2 = document.getElementById('dentist-ghaziabad-webpage-schema') as HTMLScriptElement | null;
    if (!script2) {
      script2 = document.createElement('script');
      script2.id = 'dentist-ghaziabad-webpage-schema';
      script2.type = 'application/ld+json';
      document.head.appendChild(script2);
    }
    script2.text = JSON.stringify(webpageSchema);

    return () => {
      const s1 = document.getElementById('dentist-ghaziabad-schema');
      if (s1) s1.remove();
      const s2 = document.getElementById('dentist-ghaziabad-webpage-schema');
      if (s2) s2.remove();
    };
  }, []);

  const faqs = [
    {
      q: "Who is the attending dentist at Oracle Dental Clinic in Ghaziabad?",
      a: "Clinical consultations and dental treatments are personally handled by Dr. Prashant Kumar Vats, BDS. With extensive clinical experience across routine dentistry, rotary root canals, surgical extractions, and restorative procedures, Dr. Vats provides individualized, ethical dental care for every patient."
    },
    {
      q: "What is the consultation fee at Oracle Dental Clinic?",
      a: "The standard initial consultation fee is ₹200. This includes an in-depth clinical visual examination, examination of teeth and gums, symptom assessment, and a transparent discussion of suitable treatment options and timelines."
    },
    {
      q: "Where is the clinic located in Ghaziabad and how do I reach it?",
      a: "Oracle Dental Clinic is located at Shop No. 47, KTS Complex, Jaat Chowk, near Dolphin Public School, Chipiyana Buzurg, Ghaziabad, Uttar Pradesh 201009. The clinic is easily reachable from Crossings Republik, Lal Kuan, Shahberi, Noida Extension, and the ABES Engineering College area with straightforward road access."
    },
    {
      q: "What are your daily clinic hours?",
      a: "We are open daily Monday through Sunday with two convenient daily shifts: Morning from 10:00 AM to 2:00 PM, and Evening from 5:00 PM to 9:00 PM. Evening slots allow working professionals and families to visit after office or school hours."
    },
    {
      q: "Do I need an appointment before visiting, or can walk-in patients be accommodated?",
      a: "Walk-in patients are always welcomed during operating hours, especially for sudden toothaches or emergency symptoms. However, booking an appointment via phone (7011961515) or WhatsApp beforehand is recommended to minimize waiting time."
    },
    {
      q: "What dental treatments are available at Oracle Dental Clinic?",
      a: "We offer comprehensive family and restorative dental care including tooth pain relief, rotary root canal treatments (RCT), single & multiple dental implants, wisdom tooth surgical removals, tooth extraction, metal-free zirconia crowns, teeth cleaning (scaling), professional teeth whitening, composite tooth fillings, and gum disease care."
    },
    {
      q: "What should I do if I have severe tooth pain or a dental emergency?",
      a: "If you experience sharp nighttime throbbing pain, facial swelling, a knocked-out tooth, or severe trauma, call us immediately at 7011961515. We prioritize dental emergencies to help stabilize the infection, relieve acute pain, and protect the natural dentition."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      {/* Semantic Breadcrumbs with Google Rich Snippet compliance */}
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Dentist in Ghaziabad', path: '/dentist-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Ghaziabad Local Dental Care"
      />

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Oracle Dental Clinic • Chipiyana Buzurg, Ghaziabad</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Dentist in Ghaziabad
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed">
              Comprehensive, gentle, and ethical dental care for children and adults at <strong>Oracle Dental Clinic</strong>. Directed by <strong>Dr. Prashant Kumar Vats, BDS</strong>, we offer modern diagnosis, transparent consultations, and personalized dental treatments in Chipiyana Buzurg, serving patients across Ghaziabad and nearby neighborhoods.
            </p>

            {/* Quick Fact Badges */}
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
                <span className="text-slate-300 text-xs block">Clinic Timings (Daily)</span>
                <span className="text-emerald-300 font-semibold text-xs sm:text-sm">10am–2pm | 5pm–9pm</span>
              </div>
            </div>

            {/* Direct Contact & Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <InteractiveButton
                id="dentist-ghz-call-btn"
                onClick={handleCall}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-lg transition-transform active:scale-95"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call 7011961515</span>
              </InteractiveButton>

              <InteractiveButton
                id="dentist-ghz-wa-btn"
                onClick={handleWhatsApp}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 shadow-lg transition-transform active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book on WhatsApp</span>
              </InteractiveButton>

              <InteractiveButton
                id="dentist-ghz-dir-btn"
                onClick={handleDirections}
                className="bg-white/15 hover:bg-white/25 text-white border border-white/30 font-semibold px-5 py-3.5 rounded-xl flex items-center gap-2 transition-all active:scale-95"
              >
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>Directions & Map</span>
              </InteractiveButton>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section 1: Introduction to Oracle Dental Clinic & Dr. Prashant Kumar Vats */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5" /> Clinical Excellence & Patient Care
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Your Trusted Family Dentist in Ghaziabad
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Finding a skilled, communicative, and accessible dental clinic is essential for maintaining lifelong oral health. At <strong>Oracle Dental Clinic</strong>, we believe every patient deserves focused attention, clear explanations, and clinical care tailored to their dental anatomy and personal comfort.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Under the clinical direction of <strong>Dr. Prashant Kumar Vats, BDS</strong>, our practice prioritizes preventive strategies and conservative dentistry—striving to save natural teeth whenever clinically feasible, while offering proven restorative alternatives like dental implants and crowns when teeth are non-restorable.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Clear Consultations:</strong> No surprise fees; clinical findings explained thoroughly before treatment begins.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Convenient Hours:</strong> Open daily 10:00 AM–2:00 PM and 5:00 PM–9:00 PM for working families.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Sanitized Protocols:</strong> Modern autoclave sterilization and disposable barrier hygiene for patient safety.</span>
                </div>
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Multi-Disciplinary Care:</strong> From routine teeth scaling to microscopic RCT and surgical extractions.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TreatmentImage
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Modern dental clinic treatment operatory and consultation room at Oracle Dental Clinic Ghaziabad"
                caption="Oracle Dental Clinic: Modern diagnostic facilities and patient operatory in Chipiyana Buzurg, Ghaziabad."
                aspectRatio="4/3"
                priority={true}
              />
            </div>
          </div>
        </section>

        {/* Section 2: Why Patients Search for a Local Dentist & When to Visit */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              When Should You Visit a Dentist in Ghaziabad?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Dental problems often start quietly without noticeable pain. Early clinical assessment prevents minor cavities from progressing into deep infections that require root canals or tooth extractions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Tooth Pain & Lingering Sensitivity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Sharp pain while chewing, lingering sensitivity to hot or cold drinks, or spontaneous throbbing pain at night indicates possible pulp inflammation, deep decay, or a cracked tooth that requires prompt clinical attention.
              </p>
              <a 
                href="/tooth-pain-treatment" 
                onClick={(e) => handleLinkClick(e, '/tooth-pain-treatment')}
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 pt-1"
              >
                Explore toothache care <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <Activity className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Bleeding, Swollen, or Receding Gums</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Gums that bleed when brushing or flossing are usually experiencing gingival inflammation caused by plaque and tartar buildup. Professional ultrasonic scaling removes calculus deposits and restores gum attachment.
              </p>
              <a 
                href="/bleeding-gums" 
                onClick={(e) => handleLinkClick(e, '/bleeding-gums')}
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 pt-1"
              >
                Understand gum treatment <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Missing, Loose, or Chipped Teeth</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                A missing tooth leads to bone loss, chewing difficulties, and neighboring teeth drifting out of alignment. Restorations such as dental implants, fixed bridges, or aesthetic zirconia crowns protect the jaw structure.
              </p>
              <a 
                href="/dental-implants" 
                onClick={(e) => handleLinkClick(e, '/dental-implants')}
                className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:text-blue-900 pt-1"
              >
                Learn about dental implants <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 3: What to Expect During a Dental Consultation */}
        <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-lg">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-amber-400 text-xs font-extrabold uppercase tracking-wider">Step-by-Step Experience</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                What to Expect During Your ₹200 Consultation
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Visiting our clinic is designed to be an informative, comfortable experience. We believe clear communication and patient education are the cornerstone of successful dental care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center">1</div>
                <h3 className="font-bold text-base text-white">Symptom Discussion</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  We discuss your chief complaints, medical history, pain triggers, and any previous dental treatments or concerns you may have.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center">2</div>
                <h3 className="font-bold text-base text-white">Clinical Exam</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Dr. Prashant Kumar Vats conducts an oral examination inspecting enamel wear, cavities, gum health, bite alignment, and oral tissues.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center">3</div>
                <h3 className="font-bold text-base text-white">Digital Assessment</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  When necessary, targeted diagnostic X-rays are reviewed to evaluate bone density, root canal paths, or wisdom tooth impactions.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
                <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 font-black text-sm flex items-center justify-center">4</div>
                <h3 className="font-bold text-base text-white">Transparent Plan</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  You receive an honest, step-by-step treatment plan with procedural details, appointment schedules, and upfront pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Comprehensive Treatment Directory & Internal Linking */}
        <section className="space-y-8">
          <div className="space-y-3">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Comprehensive Clinical Services</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Dental Treatments Available at Oracle Dental Clinic
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl">
              We provide a complete spectrum of dental services under one roof in Chipiyana Buzurg, Ghaziabad. Click on any treatment below to read its dedicated clinical guide:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Treatment Card 1 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-slate-900">Root Canal Treatment (RCT)</h3>
                  <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full uppercase">Restorative</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Modern rotary endodontics designed to save infected or severely decayed teeth without extraction. Thorough cleaning and biocompatible sealing of root canals.
                </p>
              </div>
              <a 
                href="/root-canal-treatment"
                onClick={(e) => handleLinkClick(e, '/root-canal-treatment')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                Read about Root Canal Therapy <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Treatment Card 2 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-slate-900">Dental Implants</h3>
                  <span className="text-[10px] font-bold bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full uppercase">Tooth Replacement</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Permanent titanium artificial roots providing stable, lifelong foundation for single crowns, bridges, or full-mouth restorations without trimming adjacent teeth.
                </p>
              </div>
              <a 
                href="/dental-implants"
                onClick={(e) => handleLinkClick(e, '/dental-implants')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                Learn about Dental Implants <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Treatment Card 3 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-slate-900">Wisdom Tooth Extraction</h3>
                  <span className="text-[10px] font-bold bg-rose-50 text-rose-700 px-2.5 py-0.5 rounded-full uppercase">Oral Surgery</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Gentle, surgical removal of horizontally impacted or painful third molars causing recurrent cheek swelling, food impaction, or crowding damage.
                </p>
              </div>
              <a 
                href="/wisdom-tooth-extraction"
                onClick={(e) => handleLinkClick(e, '/wisdom-tooth-extraction')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                Explore Wisdom Tooth Care <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Treatment Card 4 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-slate-900">Tooth Caps & Dental Crowns</h3>
                  <span className="text-[10px] font-bold bg-indigo-50 text-indigo-700 px-2.5 py-0.5 rounded-full uppercase">Crowns & Caps</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  High-strength Zirconia, ceramic, and PFM tooth crowns to protect brittle root-canal-treated teeth, restore biting pressure, and renew smile aesthetics.
                </p>
              </div>
              <a 
                href="/tooth-cap"
                onClick={(e) => handleLinkClick(e, '/tooth-cap')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                View Tooth Cap Options <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Treatment Card 5 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-slate-900">Teeth Cleaning & Scaling</h3>
                  <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full uppercase">Preventive</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Ultrasonic scaling to remove hardened calculus, tobacco stains, and bacterial plaque that daily toothbrushing cannot eliminate, preventing periodontitis.
                </p>
              </div>
              <a 
                href="/teeth-cleaning"
                onClick={(e) => handleLinkClick(e, '/teeth-cleaning')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                Learn about Dental Scaling <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Treatment Card 6 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-slate-900">Teeth Whitening</h3>
                  <span className="text-[10px] font-bold bg-purple-50 text-purple-700 px-2.5 py-0.5 rounded-full uppercase">Cosmetic</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  In-clinic professional dental bleaching to lift stubborn extrinsic discolorations caused by tea, coffee, and aging, brightening enamel safely under clinical supervision.
                </p>
              </div>
              <a 
                href="/teeth-whitening"
                onClick={(e) => handleLinkClick(e, '/teeth-whitening')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                View Teeth Whitening Details <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Treatment Card 7 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-slate-900">Dental Fillings</h3>
                  <span className="text-[10px] font-bold bg-teal-50 text-teal-700 px-2.5 py-0.5 rounded-full uppercase">Conservative</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Composite tooth-colored resin restorations that blend naturally with real enamel. Stops cavity spread, seals food traps, and restores original tooth contours.
                </p>
              </div>
              <a 
                href="/dental-fillings"
                onClick={(e) => handleLinkClick(e, '/dental-fillings')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                Read about Dental Fillings <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Treatment Card 8 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-slate-900">Tooth Extraction</h3>
                  <span className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded-full uppercase">Surgical</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Gentle, conservative tooth removal when a tooth is cracked beyond repair, mobile from severe bone loss, or creating persistent recurrent infections.
                </p>
              </div>
              <a 
                href="/tooth-extraction"
                onClick={(e) => handleLinkClick(e, '/tooth-extraction')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                Understand Extraction Care <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Treatment Card 9 */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-slate-900">Emergency Dental Care</h3>
                  <span className="text-[10px] font-bold bg-red-50 text-red-700 px-2.5 py-0.5 rounded-full uppercase">Urgent Care</span>
                </div>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Immediate clinical stabilization for severe throbbing dental pain, oral trauma, broken teeth, or acute facial swelling. Rapid symptom relief.
                </p>
              </div>
              <a 
                href="/emergency-dentist"
                onClick={(e) => handleLinkClick(e, '/emergency-dentist')}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 inline-flex items-center gap-1 pt-2 border-t border-slate-100"
              >
                Access Emergency Dental Guide <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 5: Clinical Visuals & Diagnostic Setup */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Modern Clinical Environment & Diagnostic Technology
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We maintain a sanitized, well-equipped practice in Ghaziabad with modern dental chairs, digital diagnostic imaging, and multi-stage sterilization protocols to ensure predictable treatment outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <TreatmentImage
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
              alt="Dentist conducting focused oral examination and dental consultation at Oracle Dental Clinic"
              caption="Clinical diagnosis: Dr. Prashant Kumar Vats, BDS examining patient dentition and discussing treatment options."
              aspectRatio="16/9"
            />

            <TreatmentImage
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
              alt="High quality sanitized dental operatory chair and ergonomic dental equipment in Ghaziabad"
              caption="Ergonomic operatory setup: Modern dental unit and sterilization protocols for patient comfort."
              aspectRatio="16/9"
            />
          </div>
        </section>

        {/* Section 6: Location & Neighborhood Accessibility Context */}
        <section className="bg-slate-100/90 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-100/80 px-3 py-1 rounded-full uppercase tracking-wider">
                <Compass className="w-3.5 h-3.5" /> Neighborhood Accessibility
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Convenient Location for Patients in & Around Ghaziabad
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Oracle Dental Clinic is strategically located at <strong>Shop No. 47, KTS Complex, Jaat Chowk, near Dolphin Public School, Chipiyana Buzurg, Ghaziabad, Uttar Pradesh 201009</strong>.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our clinic is conveniently accessible for families and working professionals living in surrounding residential colonies and commercial hubs, including:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-medium text-slate-700 pt-1">
                <span className="p-2 bg-white rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Chipiyana Buzurg
                </span>
                <span className="p-2 bg-white rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Crossings Republik
                </span>
                <span className="p-2 bg-white rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Lal Kuan Area
                </span>
                <span className="p-2 bg-white rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Noida Extension
                </span>
                <span className="p-2 bg-white rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Shahberi
                </span>
                <span className="p-2 bg-white rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Chappraula
                </span>
                <span className="p-2 bg-white rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Panchsheel Greens 2
                </span>
                <span className="p-2 bg-white rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" /> ABES College Area
                </span>
                <span className="p-2 bg-white rounded-lg border border-slate-200/80 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Jaat Chowk Hub
                </span>
              </div>

              <div className="pt-3">
                <a
                  href="/dentist-chipiyana-buzurg-ghaziabad"
                  onClick={(e) => handleLinkClick(e, '/dentist-chipiyana-buzurg-ghaziabad')}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-900 bg-amber-200/70 hover:bg-amber-300/80 px-3.5 py-2 rounded-xl border border-amber-300 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-amber-800" />
                  <span>Visit Dedicated Chipiyana Buzurg Branch Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-extrabold text-slate-900 text-lg flex items-center gap-2">
                <Car className="w-5 h-5 text-blue-600" /> Clinic Location & Landmark
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>Address:</strong> Shop No. 47, KTS Complex, Jaat Chowk, near Dolphin Public School, Chipiyana Buzurg, Ghaziabad, UP 201009.
                </p>
                <p>
                  <strong>Landmark:</strong> Directly at Jaat Chowk, adjacent to Dolphin Public School, easily identifiable with ground-level access.
                </p>
                <p>
                  <strong>Parking:</strong> Two-wheeler and four-wheeler parking spaces available in the immediate vicinity of KTS Complex.
                </p>
              </div>

              <InteractiveButton
                id="dentist-ghz-map-btn"
                onClick={handleDirections}
                className="w-full bg-blue-50 hover:bg-blue-100 text-blue-900 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 border border-blue-200 transition-colors"
              >
                <Compass className="w-4 h-4 text-blue-700" /> Open in Google Maps for Navigation
              </InteractiveButton>
            </div>
          </div>
        </section>

        {/* Section 7: FAQs Section */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Patient Guidance</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-sm">
              Clear, transparent answers to common patient questions regarding consultations, timings, and dental care in Ghaziabad.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 focus:outline-none bg-white hover:bg-slate-50 transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-blue-600 shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden bg-slate-50/70 border-t border-slate-100"
                    >
                      <div className="p-6 text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8: Final Call to Action Banner */}
        <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl mx-auto space-y-3 relative z-10">
            <span className="text-amber-400 text-xs font-extrabold uppercase tracking-wider">Book Your Consultation</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Schedule Your Dental Visit in Ghaziabad Today
            </h2>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
              Don't delay treating toothache or ignoring routine checkups. Visit <strong>Oracle Dental Clinic</strong> at KTS Complex, Jaat Chowk, Chipiyana Buzurg for a thorough ₹200 clinical evaluation with Dr. Prashant Kumar Vats, BDS.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 relative z-10 pt-2">
            <InteractiveButton
              id="dentist-ghz-footer-call"
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-7 py-3.5 rounded-xl flex items-center gap-2 shadow-lg transition-transform active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call 7011961515</span>
            </InteractiveButton>

            <InteractiveButton
              id="dentist-ghz-footer-wa"
              onClick={handleWhatsApp}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-xl flex items-center gap-2 shadow-lg transition-transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </InteractiveButton>
          </div>
        </section>
      </main>
    </div>
  );
}
