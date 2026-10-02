import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Navigation, 
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Snowflake,
  Flame,
  ShieldCheck,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';

interface ToothSensitivityPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath: (path: string) => void;
}

export default function ToothSensitivityPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: ToothSensitivityPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const title = "Sensitive Teeth Treatment in Ghaziabad | Oracle Dental Clinic";
    const description = "Experiencing sharp pain with cold water, hot tea, or sweets? Visit Oracle Dental Clinic in Chipiyana Buzurg, Ghaziabad for tooth sensitivity evaluation and relief.";
    const pageUrl = `${window.location.origin}/tooth-sensitivity`;

    document.title = title;

    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attrName, attrVal); document.head.appendChild(el); }
      el.setAttribute('content', contentVal);
    };

    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", "sensitive teeth treatment, tooth sensitivity treatment, sensitive tooth treatment, teeth sensitivity dentist, sensitive teeth treatment near me, sensitive teeth dentist Ghaziabad, tooth sensitivity Chipiyana Buzurg");

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", pageUrl);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.setAttribute('rel', 'canonical'); document.head.appendChild(canonical); }
    canonical.setAttribute('href', pageUrl);

    const dentistSchema = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": `${pageUrl}#dentist`,
      "name": "Oracle Dental Clinic",
      "url": pageUrl,
      "telephone": "+917011961515",
      "priceRange": "₹200 Consultation",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No. 47, KTS Complex, near Dolphin Public School, Jaat Chowk, Chipiyana Buzurg",
        "addressLocality": "Ghaziabad",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201009",
        "addressCountry": "IN"
      }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": window.location.origin },
        { "@type": "ListItem", "position": 2, "name": "Sensitive Teeth Treatment", "item": pageUrl }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqsList.map(faq => ({
        "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a }
      }))
    };

    const s1 = document.createElement('script'); s1.type = 'application/ld+json'; s1.text = JSON.stringify(dentistSchema); document.head.appendChild(s1);
    const s2 = document.createElement('script'); s2.type = 'application/ld+json'; s2.text = JSON.stringify(breadcrumbSchema); document.head.appendChild(s2);
    const s3 = document.createElement('script'); s3.type = 'application/ld+json'; s3.text = JSON.stringify(faqSchema); document.head.appendChild(s3);

    return () => { document.head.removeChild(s1); document.head.removeChild(s2); document.head.removeChild(s3); };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      {/* Breadcrumb Header */}
      <div className="bg-slate-900 text-white py-3 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-400">
            <button onClick={navigateToHome} className="hover:text-amber-400 flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </button>
            <span>/</span>
            <span className="text-amber-400 font-medium">Sensitive Teeth Treatment</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-300">
            <span><MapPin className="w-3.5 h-3.5 text-amber-500 inline mr-1" /> Chipiyana Buzurg, Ghaziabad</span>
            <span><Clock className="w-3.5 h-3.5 text-amber-500 inline mr-1" /> 10 AM–2 PM | 5 PM–9 PM</span>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full">
              <Snowflake className="w-4 h-4 text-cyan-400" /> Tooth Sensitivity Management
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Sensitive Teeth Treatment in Ghaziabad
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Tooth sensitivity causes sharp, short pain when eating or drinking cold water, hot tea, or sweets. Visit <strong className="text-amber-300">Oracle Dental Clinic</strong> in Chipiyana Buzurg to identify the root cause and receive targeted care.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <span className="text-slate-400 block">Consultation Fee</span>
                <span className="text-amber-300 font-bold text-sm">₹200 Only</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <span className="text-slate-400 block">Lead Dentist</span>
                <span className="text-white font-bold text-sm">Dr. Prashant Vats, BDS</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-slate-400 block">Location</span>
                <span className="text-white font-bold text-sm">Jaat Chowk, Chipiyana</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <InteractiveButton id="ts-call" onClick={handleCall} className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm">
                <PhoneCall className="w-5 h-5" /> Call 7011961515
              </InteractiveButton>
              <InteractiveButton id="ts-wa" onClick={handleWhatsApp} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm">
                <MessageCircle className="w-5 h-5" /> WhatsApp Consultation
              </InteractiveButton>
              <InteractiveButton id="ts-dir" onClick={handleDirections} className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 text-sm">
                <Navigation className="w-4 h-4 text-amber-400" /> Get Directions
              </InteractiveButton>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4">
            <h3 className="text-white font-bold text-lg">What Causes Sensitivity?</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tooth sensitivity occurs when protective enamel wears away or gums recede, exposing microscopic dentinal tubules connected to nerve endings.
            </p>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Enamel erosion from acidic foods or hard brushing</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Gum recession exposing root dentin</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Untreated dental cavities or hairline tooth cracks</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> Temporary sensitivity after scaling or whitening</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TREATMENTS BY CAUSE */}
      <section className="py-14 px-4 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Treatment Based on Root Cause</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">Exposed Dentin & Enamel Wear</h3>
              <p className="text-xs text-slate-600 leading-relaxed">In-clinic fluoride varnish application or prescribed desensitizing toothpastes to block dentinal tubules.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">Dental Cavities</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Tooth-colored composite restoration to seal cavities and protect underlying nerve (<button onClick={() => navigateToPath('/dental-fillings')} className="text-blue-600 underline">Dental Fillings</button>).</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">Gum Recession & Root Exposure</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Periodontal care and gentle scaling to calm gum inflammation (<button onClick={() => navigateToPath('/teeth-cleaning')} className="text-blue-600 underline">Teeth Cleaning</button>).</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">Deep Nerve Involvement</h3>
              <p className="text-xs text-slate-600 leading-relaxed">If sensitivity turns into persistent lingering pain, root canal therapy may be needed (<button onClick={() => navigateToPath('/root-canal-treatment')} className="text-blue-600 underline">Root Canal</button>).</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqsList.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full p-4 text-left font-bold text-slate-900 flex justify-between items-center text-sm sm:text-base">
                  <span>Q{index + 1}: {faq.q}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-slate-200 p-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-slate-950 text-white py-10 px-4 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-bold">Schedule Your Sensitivity Examination</h3>
          <p className="text-xs text-slate-400">Jaat Chowk, Chipiyana Buzurg, Ghaziabad. Consultation fee ₹200.</p>
          <div className="flex justify-center gap-3">
            <InteractiveButton id="ts-f-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3 px-6 rounded-xl text-sm">Call 7011961515</InteractiveButton>
            <InteractiveButton id="ts-f-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl text-sm">WhatsApp Booking</InteractiveButton>
          </div>
        </div>
      </section>
    </div>
  );
}

const faqsList = [
  { q: "Why do my teeth hurt when I drink cold water?", a: "Cold sensitivity occurs when enamel is worn or root dentin is exposed, allowing temperature stimuli to reach inner nerve endings." },
  { q: "Do desensitizing toothpastes work?", a: "Yes, desensitizing toothpastes contain active compounds that help plug microscopic dentinal tubules over 2-4 weeks of regular use." },
  { q: "Is tooth sensitivity different from a toothache?", a: "Yes. Sensitivity is typically a short, sharp response to hot/cold that stops quickly, while a toothache is often a constant, deep or throbbing pain." },
  { q: "Can teeth whitening cause temporary sensitivity?", a: "Yes, whitening agents can temporarily increase enamel permeability, causing mild short-term sensitivity that subsides." },
  { q: "Where is Oracle Dental Clinic located?", a: "Shop No. 47, KTS Complex, near Dolphin Public School, Jaat Chowk, Chipiyana Buzurg, Ghaziabad." },
  { q: "How much is the consultation fee?", a: "The initial clinical consultation fee is ₹200." }
];
