import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Navigation, 
  UserCheck, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Stethoscope, 
  Award, 
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  Activity,
  Layers,
  Sparkles,
  Info,
  Check,
  X,
  Droplets,
  HeartPulse,
  Smile,
  ShieldAlert,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';

interface TeethCleaningPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath: (path: string) => void;
}

export default function TeethCleaningPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: TeethCleaningPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // 1. Page Title, Meta Description & Canonical
    const title = "Teeth Cleaning & Dental Scaling in Ghaziabad | Oracle Dental Clinic";
    const description = "Get professional teeth cleaning, dental scaling and polishing in Ghaziabad at Oracle Dental Clinic, Chipiyana Buzurg. Remove plaque, tartar and surface stains and maintain healthier gums.";
    const pageUrl = `${window.location.origin}/teeth-cleaning`;

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
    setMetaTag("name", "keywords", "teeth cleaning, teeth cleaning in Ghaziabad, teeth cleaning in Chipiyana Buzurg, teeth cleaning near me, dental cleaning, dental cleaning in Ghaziabad, dental cleaning near me, professional teeth cleaning, professional dental cleaning, dental scaling, dental scaling in Ghaziabad, dental scaling near me, teeth scaling, teeth scaling in Ghaziabad, teeth scaling near me, scaling and polishing, dental scaling and polishing, tartar removal, tartar removal in Ghaziabad, tartar removal near me, calculus removal, plaque removal, dentist for teeth cleaning, dentist near me for teeth cleaning, dental clinic near me for cleaning, nearby dentist for scaling, nearby dental clinic for scaling, gum cleaning, gum treatment, oral hygiene cleaning, professional scaling, teeth cleaning dentist, dental cleaning clinic, dental hygiene treatment, teeth cleaning near Jaat Chowk, dental scaling near Jaat Chowk, teeth cleaning near KTS Complex, dental cleaning near Dolphin Public School, scaling near Crossings Republik, teeth cleaning near Lal Kuan, dental cleaning near Noida Extension, scaling near Shahberi, teeth cleaning near Chappraula, dental scaling near Panchsheel Greens 2, teeth cleaning near ABES area");

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", pageUrl);

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

    // 2. Structured Data (JSON-LD)
    const dentistSchema = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": `${pageUrl}#dentist`,
      "name": "Oracle Dental Clinic",
      "image": [
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        "https://i.postimg.cc/tCd8wLDv/Chat-GPT-Image-Apr-22-2026-08-21-13-PM.png"
      ],
      "url": pageUrl,
      "telephone": "+917011961515",
      "priceRange": "₹200 Consultation",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg",
        "addressLocality": "Ghaziabad",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201009",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6280",
        "longitude": "77.4520"
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

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Teeth Cleaning & Scaling",
          "item": pageUrl
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqsList.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    };

    const scriptDentist = document.createElement('script');
    scriptDentist.type = 'application/ld+json';
    scriptDentist.text = JSON.stringify(dentistSchema);
    document.head.appendChild(scriptDentist);

    const scriptBreadcrumb = document.createElement('script');
    scriptBreadcrumb.type = 'application/ld+json';
    scriptBreadcrumb.text = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(scriptBreadcrumb);

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.text = JSON.stringify(faqSchema);
    document.head.appendChild(scriptFaq);

    return () => {
      document.head.removeChild(scriptDentist);
      document.head.removeChild(scriptBreadcrumb);
      document.head.removeChild(scriptFaq);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      {/* Top Breadcrumb Header Bar */}
      <div className="bg-slate-900 text-white py-3 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-400">
            <button 
              onClick={navigateToHome}
              className="hover:text-amber-400 flex items-center gap-1 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </button>
            <span>/</span>
            <span className="text-amber-400 font-medium">Teeth Cleaning & Dental Scaling</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-amber-500" /> Chipiyana Buzurg, Ghaziabad</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-amber-500" /> 10 AM–2 PM | 5 PM–9 PM</span>
          </div>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-emerald-400" /> Professional Oral Hygiene & Gum Care
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Teeth Cleaning & Dental Scaling in Ghaziabad
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Remove plaque, tartar, and surface stains with professional dental cleaning and scaling at <strong className="text-amber-300 font-semibold">Oracle Dental Clinic</strong> in Chipiyana Buzurg, Ghaziabad. Protect your gums and enjoy a fresher, healthier mouth.
              </p>

              {/* Verified Info Pill */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs text-slate-300">
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 backdrop-blur-sm">
                  <span className="text-slate-400 block">Consultation Fee</span>
                  <span className="text-amber-300 font-bold text-sm">₹200 Only</span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 backdrop-blur-sm">
                  <span className="text-slate-400 block">Lead Dentist</span>
                  <span className="text-white font-bold text-sm">Dr. Prashant Vats, BDS</span>
                </div>
                <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 backdrop-blur-sm col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block">Location</span>
                  <span className="text-white font-bold text-sm">Jaat Chowk, Chipiyana</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                <InteractiveButton 
                  id="hero-cleaning-call" 
                  onClick={handleCall}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
                >
                  <PhoneCall className="w-5 h-5" /> Call 7011961515
                </InteractiveButton>

                <InteractiveButton 
                  id="hero-cleaning-whatsapp" 
                  onClick={handleWhatsApp}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5" /> Book Consultation
                </InteractiveButton>

                <InteractiveButton 
                  id="hero-cleaning-directions" 
                  onClick={handleDirections}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 transition-all text-sm sm:text-base"
                >
                  <Navigation className="w-4 h-4 text-amber-400" /> Get Directions
                </InteractiveButton>
              </div>
            </div>

            {/* Quick Consultation Form Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 p-6 rounded-3xl shadow-2xl backdrop-blur-md space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                  <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-xl flex items-center justify-center font-bold">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Book Oral Hygiene Care</h3>
                    <p className="text-slate-400 text-xs">Oracle Dental Clinic, Chipiyana Buzurg</p>
                  </div>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Ultrasonic Scaling:</strong> Thorough tartar & plaque removal above & below gumline.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Polishing & Stain Removal:</strong> Smooth tooth surfaces and eliminate external tea/coffee stains.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span><strong>Gum Assessment:</strong> Complete evaluation of gingival health and periodontal pocket depth.</span>
                  </li>
                </ul>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1 text-xs text-slate-300">
                  <p className="font-semibold text-amber-300 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Clinic Timings:
                  </p>
                  <p>Morning: 10:00 AM – 2:00 PM</p>
                  <p>Evening: 5:00 PM – 9:00 PM (Open Daily)</p>
                </div>

                <InteractiveButton 
                  id="hero-card-consult"
                  onClick={handleWhatsApp}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  <MessageCircle className="w-4 h-4" /> Book Dental Cleaning Visit
                </InteractiveButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHAT IS PROFESSIONAL TEETH CLEANING? */}
      <section className="py-14 px-4 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="inline-block bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-md">
            Educational Guide
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            What is Professional Teeth Cleaning?
          </h2>
          <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
            Professional teeth cleaning is a clinical dental procedure designed to thoroughly remove microbial deposits, soft plaque, hardened calculus (tartar), and external stains that regular home brushing and flossing cannot completely eliminate. 
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">1</div>
              <h3 className="font-bold text-slate-900 text-base">Plaque & Biofilm</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A sticky, colorless film of bacteria that continuously forms on tooth surfaces. If not removed daily, it hardens into calculus.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">2</div>
              <h3 className="font-bold text-slate-900 text-base">Calculus (Tartar)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Mineralized plaque that bonds firmly to enamel and root surfaces. It cannot be brushed off and requires professional dental instruments.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold">3</div>
              <h3 className="font-bold text-slate-900 text-base">Polishing & Finishing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Smooths micro-rough tooth surfaces and removes extrinsic discoloration caused by tea, coffee, food dyes, or tobacco.
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500 italic bg-amber-50 p-3 rounded-lg border border-amber-200">
            Note: Professional cleaning supports your daily home routine—it does not replace brushing twice daily and interdental flossing.
          </p>
        </div>
      </section>

      {/* 3. WHAT IS DENTAL SCALING? */}
      <section className="py-14 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            What is Dental Scaling?
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Dental scaling is the targeted clinical removal of plaque and hardened mineral deposits (calculus) from tooth structures. Once plaque absorbs minerals from saliva and hardens into calculus, ordinary toothbrushes can no longer detach it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Supragingival Scaling
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cleaning deposits located <strong>above the gumline</strong>. This addresses visible tartar buildup along enamel crowns and interdental spaces, keeping margins clean and preventing early gingival irritation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" /> Subgingival Scaling
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Cleaning deposits located <strong>below the gumline</strong> inside shallow pockets when clinically indicated. Removing subgingival calculus helps reduce bacterial accumulation next to delicate periodontal tissues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PLAQUE VS TARTAR / CALCULUS TABLE */}
      <section className="py-14 px-4 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Plaque vs. Tartar (Calculus): What's the Difference?
            </h2>
            <p className="text-slate-600 text-sm">
              Understanding how dental deposits evolve helps highlight why professional dental scaling is necessary.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-900 text-white font-bold text-xs uppercase">
                <tr>
                  <th className="p-4">Feature</th>
                  <th className="p-4 bg-blue-900/60">Dental Plaque</th>
                  <th className="p-4 bg-amber-900/60">Tartar / Calculus</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Consistency</td>
                  <td className="p-4 text-slate-600">Soft, sticky bacterial biofilm</td>
                  <td className="p-4 text-slate-600">Hardened, mineralized stone-like deposit</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Color</td>
                  <td className="p-4 text-slate-600">Colorless to pale yellow, hard to see</td>
                  <td className="p-4 text-slate-600">Yellow, brown, or dark grey/black deposits</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-900">Formation Time</td>
                  <td className="p-4 text-slate-600">Forms continuously within hours after eating</td>
                  <td className="p-4 text-slate-600">Hardens from plaque within 24–72 hours</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-4 font-semibold text-slate-900">Removal Method</td>
                  <td className="p-4 text-slate-600">Daily brushing & interdental flossing</td>
                  <td className="p-4 text-slate-600 font-bold text-amber-700">Requires professional ultrasonic scaling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. WHY DO I NEED TEETH CLEANING & SIGNS */}
      <section className="py-14 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Do You Need Professional Teeth Cleaning?
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Even with diligent home brushing, certain areas—such as between crowded teeth, around lower front teeth, or behind back molars—accumulate mineral deposits. Professional dental cleaning helps address:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "Visible yellow/brown tartar deposits",
                "Persistent plaque accumulation",
                "Bleeding gums during brushing",
                "Bad breath associated with deposits",
                "Extrinsic tea/coffee/food stains",
                "Crowded or overlapping teeth care",
                "Gingival swelling and redness",
                "Routine preventive oral maintenance",
                "Care around dental crowns & bridges"
              ].map((reason, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center gap-2.5 shadow-sm text-sm font-medium text-slate-800">
                  <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50/80 border border-amber-200 rounded-2xl p-6 space-y-3">
            <h3 className="text-lg font-bold text-amber-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" /> Common Signs You May Need Dental Scaling
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-amber-950">
              <li>• Gums that bleed easily when brushing or flossing</li>
              <li>• Red, swollen, or tender gum margins</li>
              <li>• Visible hard yellow or brown crust along tooth roots</li>
              <li>• Persistent unpleasant mouth taste or halitosis</li>
              <li>• Teeth feeling rough or unpolished to your tongue</li>
              <li>• Food frequently trapping between certain teeth</li>
            </ul>
            <p className="text-xs text-amber-800 pt-1">
              <em>Note: Persistent gum symptoms require a detailed in-person dental exam to evaluate periodontal tissue health.</em>
            </p>
          </div>
        </div>
      </section>

      {/* 6. GUM HEALTH, SCALING VS DEEP CLEANING, SCALING VS WHITENING */}
      <section className="py-14 px-4 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Gum Health */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Gum Health and Dental Scaling
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Plaque and calculus harbour active bacterial colonies. When allowed to rest against gum tissue, they trigger localized inflammation known as <strong>gingivitis</strong> (characterized by redness and bleeding). If left unmanaged over time, gingivitis can progress to <strong>periodontitis</strong>, affecting deep periodontal ligament attachment and supporting bone.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Dental scaling removes the bacterial irritants, giving gum tissues a clean environment to calm down and heal. However, advanced periodontal conditions may require specialized long-term maintenance.
            </p>
          </div>

          {/* Scaling vs Deep Cleaning */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">Routine Dental Scaling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cleans plaque and calculus deposits primarily around enamel crowns and shallow gum margins. Ideal for routine preventive care and early gingival maintenance.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">Deep Cleaning (Scaling & Root Planing)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Indicated when deeper periodontal pockets exist. It involves thorough subgingival cleaning and smoothing of root surfaces to help tissues reattach.
              </p>
            </div>
          </div>

          {/* Scaling vs Whitening Prominent Table */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Teeth Cleaning vs. Teeth Whitening
              </h2>
              <InteractiveButton 
                id="link-to-whitening"
                onClick={() => navigateToPath('/teeth-whitening')}
                className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 underline"
              >
                Learn about Teeth Whitening <ArrowRight className="w-3.5 h-3.5" />
              </InteractiveButton>
            </div>
            <p className="text-slate-600 text-sm">
              Patients often confuse dental cleaning with cosmetic whitening. Here is how they differ fundamentally:
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-900 text-white font-bold text-xs uppercase">
                  <tr>
                    <th className="p-4">Comparison Point</th>
                    <th className="p-4 bg-emerald-950/80">Teeth Cleaning / Scaling</th>
                    <th className="p-4 bg-blue-950/80">Teeth Whitening</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Primary Purpose</td>
                    <td className="p-4 text-slate-600">Oral hygiene, tartar removal & gum health</td>
                    <td className="p-4 text-slate-600">Cosmetic shade lightening of natural enamel</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Target Deposits</td>
                    <td className="p-4 text-slate-600">Plaque, calculus/tartar & surface stains</td>
                    <td className="p-4 text-slate-600">Deep intrinsic discoloration inside enamel</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-slate-900">Mechanism</td>
                    <td className="p-4 text-slate-600">Ultrasonic vibration & physical polishing</td>
                    <td className="p-4 text-slate-600">Safe dental gel shade lightening agents</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Removes Calculus?</td>
                    <td className="p-4 font-bold text-emerald-700">Yes, primary objective</td>
                    <td className="p-4 text-slate-500">No (Must clean calculus before whitening)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 7. MYTHS: DOES SCALING DAMAGE TEETH? SENSITIVITY & DISCOMFORT */}
      <section className="py-14 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Debunking Common Myths About Dental Scaling
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <div className="w-10 h-10 bg-rose-100 text-rose-600 rounded-xl flex items-center justify-center font-bold">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Does Scaling Make Teeth Weak?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>No.</strong> Ultrasonic tips vibrate to break hard calculus without shaving healthy enamel. Scaling removes irritants so gums stay healthy around your teeth.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <div className="w-10 h-10 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Does Scaling Create Gaps?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>No.</strong> Thick tartar acts like a hard bridge filling the spaces between teeth. When tartar is removed, you feel your natural, clean tooth contours again.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-bold">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base">Why Sensitivity After Scaling?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Removing heavy calculus exposes underlying root surfaces to temperature changes. Mild sensitivity is temporary and subsides as gums adapt.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="font-bold text-slate-900 text-lg">Does Teeth Cleaning Hurt?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              For most patients with healthy or mildly inflamed gums, dental scaling involves minimal discomfort. If gums are significantly swollen or heavy calculus is present, slight tenderness or sensitivity may occur during cleaning. Your dentist adjusts ultrasonic power settings and water flow to ensure maximum comfort throughout the visit.
            </p>
          </div>
        </div>
      </section>

      {/* 8. ULTRASONIC SCALING & HAND INSTRUMENTS */}
      <section className="py-14 px-4 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            How Dental Scaling Works: Ultrasonic vs. Hand Instruments
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Modern dental clinics use gentle ultrasonic scaling instruments combined with specialized hand scalers when necessary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Activity className="w-5 h-5 text-blue-600" /> Ultrasonic Scaling Technology
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Uses high-frequency microscopic vibrations along with a fine water spray mist. The vibrations dislodge stubborn tartar deposits quickly while the water spray flushes away debris and cools tooth surfaces.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-emerald-600" /> Precision Hand Instruments
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hand scalers or curettes allow fine tactile feedback to carefully clean tight interdental contacts or specific delicate root contours where ultrasonic tips need complementary detail work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. APPOINTMENT STEPS & FREQUENCY */}
      <section className="py-14 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-8">
          
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              What Happens During Your Dental Cleaning Visit?
            </h2>
            <p className="text-slate-600 text-sm">
              Here is what to expect during a professional dental cleaning appointment at Oracle Dental Clinic:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { step: "1", title: "Dental History Review", desc: "Discussion of medical history, medications, and any specific oral concerns." },
                { step: "2", title: "Visual Oral Exam", desc: "Checking teeth, gum margins, soft tissues, and checking for decay or inflammation." },
                { step: "3", title: "Plaque & Tartar Assessment", desc: "Identifying calculus buildup, stain locations, and areas needing detailed attention." },
                { step: "4", title: "Ultrasonic Scaling", desc: "Gentle removal of supragingival and subgingival deposits using water-cooled vibration." },
                { step: "5", title: "Interdental Detail & Polishing", desc: "Polishing enamel with fine paste to smooth surfaces and remove external coffee/tea stains." },
                { step: "6", title: "Hygiene Guidance & Follow-up", desc: "Personalized advice on brushing technique, interdental brushes, and routine recall." }
              ].map((s, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
                  <div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center font-bold text-xs">
                    {s.step}
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="font-bold text-slate-900 text-lg">How Often Should You Get Teeth Cleaning?</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              There is no single universal timeline for every person. Dental cleaning frequency depends on individual factors including plaque formation rate, gum condition, tobacco use, crowded teeth, and systemic health. Your dentist evaluates your oral hygiene during your visit and recommends an appropriate maintenance interval.
            </p>
          </div>

        </div>
      </section>

      {/* 10. SPECIAL CONSIDERATIONS */}
      <section className="py-14 px-4 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Special Considerations for Dental Cleaning
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Smokers & Tobacco Users</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Tobacco leads to stubborn dark brown/black tar stains and accelerated calculus accumulation. Professional scaling helps clear deposits and supports non-judgmental oral hygiene care.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Patients with Braces</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Brackets and archwires trap food particles easily. Professional dental cleaning around orthodontic hardware helps prevent decalcification and swollen gums.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Pregnancy & Gum Health</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hormonal shifts during pregnancy can cause "pregnancy gingivitis" (swollen, bleeding gums). Gentle dental cleaning helps manage plaque and protect maternal oral health.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Patients with Diabetes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Diabetes and gum health have a two-way relationship. Keeping oral plaque low through regular professional hygiene is an important part of overall wellness.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Heart Conditions & Blood Thinners</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Always inform your dentist regarding heart conditions or blood-thinning medications. Antibiotic prophylaxis or specific precautions are evaluated on a case-by-case medical basis.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Children's Dental Hygiene</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When clinically indicated, gentle cleaning for children removes stubborn plaque, instills positive oral habits, and reinforces proper home brushing techniques.
              </p>
            </div>
          </div>

          {/* WARNING AGAINST DIY TARTAR REMOVAL */}
          <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl space-y-3 text-rose-950">
            <h3 className="font-bold text-base flex items-center gap-2 text-rose-900">
              <ShieldAlert className="w-5 h-5 text-rose-600" /> Safety Warning: Never Attempt DIY Tartar Scraping at Home
            </h3>
            <p className="text-xs leading-relaxed">
              Attempting to scrape hard calculus with metal tools, sharp needles, or abrasive powders (like baking soda, lemon, or charcoal) can cut delicate gum tissue, scratch protective tooth enamel, and cause infection. Hardened calculus must always be removed safely with calibrated professional dental instruments.
            </p>
          </div>
        </div>
      </section>

      {/* 11. COST OF TEETH CLEANING IN GHAZIABAD */}
      <section className="py-14 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Cost of Teeth Cleaning & Dental Scaling in Ghaziabad
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The cost of professional teeth cleaning varies depending on individual clinical factors, such as the volume of tartar buildup, presence of heavy staining, gum health condition, and whether routine scaling or deep periodontal care is needed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm">
              <h3 className="font-bold text-slate-900 text-base">Factors Influencing Cleaning Cost</h3>
              <ul className="space-y-2 text-xs text-slate-600">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" /> Extent of plaque and mineralized calculus deposits
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" /> Degree of tobacco or beverage staining
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" /> Routine scaling vs. specialized periodontal subgingival care
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600" /> Number of visits required for heavy buildup
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-blue-950 text-white p-6 rounded-2xl space-y-4 shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">Transparent Pricing</span>
                <h3 className="font-extrabold text-xl text-white">Consultation Fee: ₹200</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  During your initial dental examination, Dr. Prashant Vats BDS will assess your teeth and gum health and provide an exact, transparent estimate before starting treatment.
                </p>
              </div>
              <InteractiveButton 
                id="cost-section-consult"
                onClick={handleWhatsApp}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3 rounded-xl transition-all flex items-center justify-center gap-2 text-xs shadow-md"
              >
                <MessageCircle className="w-4 h-4" /> Schedule Examination
              </InteractiveButton>
            </div>
          </div>
        </div>
      </section>

      {/* 12. LOCAL SEO SECTION */}
      <section className="py-14 px-4 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="bg-blue-50/60 border border-blue-200 p-8 rounded-3xl space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Teeth Cleaning & Dental Scaling in Chipiyana Buzurg, Ghaziabad
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Looking for reliable <strong>teeth cleaning near me</strong> or professional <strong>dental scaling in Ghaziabad</strong>? <strong className="text-blue-900">Oracle Dental Clinic</strong> is conveniently located at Jaat Chowk, Chipiyana Buzurg, serving patients across Ghaziabad and neighboring communities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 pt-2">
              <div className="bg-white p-4 rounded-xl border border-blue-100 space-y-1">
                <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-amber-500" /> Clinic Address:
                </span>
                <p>Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad, UP 201009</p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-blue-100 space-y-1">
                <span className="font-bold text-slate-900 block flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-blue-500" /> Serving Local Neighborhoods:
                </span>
                <p>Jaat Chowk, KTS Complex, Dolphin Public School, Crossings Republik, Lal Kuan, Noida Extension, Shahberi, Chappraula, Panchsheel Greens 2 & ABES area.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. WHY CHOOSE ORACLE DENTAL CLINIC */}
      <section className="py-14 px-4 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Patient-Centered Care</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Why Choose Oracle Dental Clinic for Teeth Cleaning?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <UserCheck className="w-6 h-6 text-amber-400" />
              <h3 className="font-bold text-white text-base">Qualified Lead Dentist</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Treatments evaluated directly by Dr. Prashant Kumar Vats, BDS with personalized care.
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <h3 className="font-bold text-white text-base">Modern Ultrasonic Tools</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Water-cooled ultrasonic scaling technology for gentle deposit removal and patient comfort.
              </p>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-2">
              <Clock className="w-6 h-6 text-blue-400" />
              <h3 className="font-bold text-white text-base">Convenient Daily Hours</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Open daily from 10:00 AM – 2:00 PM and 5:00 PM – 9:00 PM to fit your routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 14. FAQ SECTION (36 High Quality Questions) */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full">
              <HelpCircle className="w-4 h-4" /> Patient Knowledge Base
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Frequently Asked Questions About Teeth Cleaning & Scaling
            </h2>
            <p className="text-slate-600 text-sm">
              Everything you need to know about professional dental scaling, tartar removal, and oral hygiene.
            </p>
          </div>

          <div className="space-y-3">
            {faqsList.map((faq, index) => (
              <div 
                key={index} 
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left font-bold text-slate-900 flex justify-between items-center gap-4 text-sm sm:text-base focus:outline-none"
                >
                  <span className="flex items-center gap-2.5">
                    <span className="text-xs text-blue-600 font-mono bg-blue-100/80 px-2 py-0.5 rounded-md flex-shrink-0">
                      Q{index + 1}
                    </span>
                    {faq.q}
                  </span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-200 bg-white p-4 text-xs sm:text-sm text-slate-600 leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA BAR */}
      <section className="bg-slate-950 text-white py-12 px-4 border-t border-slate-800">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Schedule Your Dental Cleaning Examination</h3>
            <p className="text-xs text-slate-400 mt-1">Visit Oracle Dental Clinic at Jaat Chowk, Chipiyana Buzurg, Ghaziabad.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <InteractiveButton 
              id="footer-call-btn"
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 px-6 rounded-xl flex items-center gap-2 text-sm shadow-md transition-all"
            >
              <PhoneCall className="w-4 h-4" /> Call 7011961515
            </InteractiveButton>
            <InteractiveButton 
              id="footer-wa-btn"
              onClick={handleWhatsApp}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 text-sm shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Booking
            </InteractiveButton>
          </div>
        </div>
      </section>
    </div>
  );
}

// Complete List of 36 High Quality Medical FAQs
const faqsList = [
  {
    q: "What is teeth cleaning?",
    a: "Teeth cleaning is a professional dental procedure performed to remove plaque, mineralized calculus (tartar), and surface stains from tooth surfaces that routine brushing cannot eliminate."
  },
  {
    q: "What is dental scaling?",
    a: "Dental scaling is the clinical removal of hard calculus deposits and bacterial biofilm from above and below the gumline using specialized ultrasonic or hand instruments."
  },
  {
    q: "What is tartar?",
    a: "Tartar (dental calculus) is mineralized plaque that hardens onto tooth enamel when unremoved plaque absorbs calcium and minerals from saliva."
  },
  {
    q: "What is plaque?",
    a: "Plaque is a soft, sticky, colorless biofilm of bacteria that continuously forms on teeth after eating or drinking."
  },
  {
    q: "What is the difference between plaque and tartar?",
    a: "Plaque is soft and can be brushed away daily. Tartar is hardened mineralized plaque that firmly bonds to enamel and can only be removed by a dentist using professional scaling instruments."
  },
  {
    q: "Why do I need professional teeth cleaning?",
    a: "Professional cleaning removes tartar deposits that harbor bacteria, helping prevent gum inflammation, bleeding, bad breath, and long-term periodontal problems."
  },
  {
    q: "How often should I get my teeth cleaned?",
    a: "Cleaning frequency depends on your individual oral hygiene, rate of tartar buildup, and gum health. Your dentist evaluates your mouth during visits to recommend a personalized schedule."
  },
  {
    q: "Does teeth cleaning hurt?",
    a: "For most patients with healthy gums, routine dental cleaning involves minimal discomfort. If gums are inflamed or heavy calculus is present, mild tenderness may occur during cleaning."
  },
  {
    q: "Does dental scaling cause sensitivity?",
    a: "Temporary tooth sensitivity to cold or warm foods can occur shortly after scaling as exposed tooth surfaces adapt after tartar removal. It usually subsides within a few days."
  },
  {
    q: "Why are my teeth sensitive after scaling?",
    a: "Calculus acts as an artificial layer covering tooth roots. When removed, exposed enamel and root dentin temporarily respond to temperature changes until gums settle down."
  },
  {
    q: "Does scaling damage teeth?",
    a: "No. Professional ultrasonic scaling vibrates micro-tips to break hard calculus without shaving healthy tooth enamel when performed by a qualified dentist."
  },
  {
    q: "Does scaling remove enamel?",
    a: "No. Scaling targets only hard mineral deposits and plaque stuck to tooth surfaces; it does not remove intact dental enamel."
  },
  {
    q: "Can scaling make teeth loose?",
    a: "No. Scaling removes bacterial tartar that causes bone loss around teeth. If a tooth feels slightly loose after heavy tartar removal, it is because thick tartar was artificially wedging teeth together."
  },
  {
    q: "Does scaling create gaps between teeth?",
    a: "No. Scaling does not create new gaps. Thick tartar buildup often bridges spaces between teeth; removing it reveals your natural, healthy tooth margins."
  },
  {
    q: "Why do my teeth look different after tartar removal?",
    a: "Removing yellow or brown crusty deposits reveals clean natural enamel surfaces and open interdental spaces previously covered by calculus."
  },
  {
    q: "Can scaling whiten teeth?",
    a: "Scaling removes surface tea/coffee stains and tartar, making teeth look cleaner and brighter, but it does not chemically bleach natural enamel shade like teeth whitening."
  },
  {
    q: "What is the difference between scaling and whitening?",
    a: "Scaling removes physical deposits (calculus/plaque) for oral health. Teeth whitening uses safe bleaching gels to lighten the natural intrinsic shade of enamel."
  },
  {
    q: "Can scaling remove yellow stains?",
    a: "Scaling and polishing remove external yellow stains caused by food, tea, coffee, or tobacco deposits on tooth surfaces."
  },
  {
    q: "What is deep cleaning?",
    a: "Deep cleaning (scaling and root planing) is a specialized procedure for patients with periodontal disease, involving deep subgingival cleaning and root smoothing."
  },
  {
    q: "What is scaling and root planing?",
    a: "It is a therapeutic procedure that removes subgingival calculus from deep pockets and smooths root surfaces to encourage gum tissue reattachment."
  },
  {
    q: "Can scaling cure gum disease?",
    a: "Scaling removes bacterial irritants to treat gingivitis (early gum inflammation). Advanced periodontitis may require ongoing periodontal maintenance."
  },
  {
    q: "Why do my gums bleed when I brush?",
    a: "Bleeding gums are typically a sign of gingivitis caused by plaque accumulation along gum margins. A professional cleaning removes the irritant."
  },
  {
    q: "Can teeth cleaning help bad breath?",
    a: "Yes. When halitosis is caused by bacterial plaque, calculus, or trapped food particles, professional scaling significantly reduces odor-causing bacteria."
  },
  {
    q: "Can smokers get dental scaling?",
    a: "Yes. Tobacco users benefit greatly from scaling because smoking accelerates dark stain formation and tartar accumulation along tooth surfaces."
  },
  {
    q: "Can I get teeth cleaning with braces?",
    a: "Yes. Cleaning around brackets and archwires is essential during orthodontic treatment to prevent plaque buildup and gum swelling."
  },
  {
    q: "Can children have professional teeth cleaning?",
    a: "Yes. When clinically indicated, gentle cleaning removes stubborn plaque and instills positive oral hygiene habits in children."
  },
  {
    q: "Is teeth cleaning safe during pregnancy?",
    a: "Yes. Maintaining gum health is important during pregnancy. Routine dental cleaning is safe and helps manage pregnancy-related gingival swelling."
  },
  {
    q: "Can people with diabetes get dental scaling?",
    a: "Yes. Patients with diabetes have a higher risk of gum problems. Regular professional cleaning helps maintain low bacterial levels."
  },
  {
    q: "Can I get scaling if I take blood thinners?",
    a: "Inform your dentist about all medications. Simple scaling is usually safe, but your dentist evaluates medical history before procedure."
  },
  {
    q: "Can I remove tartar at home?",
    a: "No. Hardened tartar cannot be removed with a toothbrush. Scraping at home with metal tools can injure gums and scratch tooth enamel."
  },
  {
    q: "Is baking soda good for tartar?",
    a: "No. Baking soda cannot dissolve hardened calculus deposits, and aggressive scrubbing with abrasive powders can wear away enamel over time."
  },
  {
    q: "Is lemon safe for cleaning teeth?",
    a: "No. Lemon juice is highly acidic and can erode tooth enamel, leading to sensitivity and enamel damage. Avoid acid remedies."
  },
  {
    q: "How much does teeth cleaning cost in Ghaziabad?",
    a: "Cost depends on tartar volume, degree of staining, and whether routine scaling or deep periodontal care is required. Consultation fee at Oracle Dental Clinic is ₹200."
  },
  {
    q: "Where can I get teeth cleaning near Chipiyana Buzurg?",
    a: "Oracle Dental Clinic is located at Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad."
  },
  {
    q: "Where is Oracle Dental Clinic located?",
    a: "At Jaat Chowk, Chipiyana Buzurg, Ghaziabad, near Dolphin Public School and ABES Engineering College area."
  },
  {
    q: "Do I need an appointment for teeth cleaning?",
    a: "While walk-ins are welcomed during clinic hours (10 AM–2 PM and 5 PM–9 PM), booking an appointment via call or WhatsApp ensures zero waiting time."
  }
];
