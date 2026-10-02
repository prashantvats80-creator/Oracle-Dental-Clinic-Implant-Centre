import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Navigation, 
  AlertCircle,
  HelpCircle,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Droplets,
  HeartPulse,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface BleedingGumsPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath: (path: string) => void;
}

export default function BleedingGumsPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: BleedingGumsPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const title = "Bleeding Gums Treatment in Ghaziabad | Oracle Dental Clinic";
    const description = "Experiencing bleeding gums while brushing? Visit Oracle Dental Clinic in Chipiyana Buzurg, Ghaziabad for professional gum assessment, scaling, and care.";
    const pageUrl = `${window.location.origin}/bleeding-gums`;

    document.title = title;

    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attrName, attrVal); document.head.appendChild(el); }
      el.setAttribute('content', contentVal);
    };

    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", "bleeding gums treatment, bleeding gums while brushing, gums bleeding treatment, bleeding gums dentist, bleeding gums treatment near me, bleeding gums treatment Ghaziabad, bleeding gums dentist Chipiyana Buzurg");

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
        { "@type": "ListItem", "position": 2, "name": "Bleeding Gums Treatment", "item": pageUrl }
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
      <Breadcrumbs
        items={[
          { label: 'Dental Symptoms', path: '/#symptoms' },
          { label: 'Bleeding Gums Treatment', path: '/bleeding-gums' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Periodontal Care"
      />

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full">
              <Droplets className="w-4 h-4 text-emerald-400" /> Gum Health & Periodontal Care
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Bleeding Gums Treatment in Ghaziabad
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Bleeding gums while brushing or flossing is the earliest sign of gum inflammation. Visit <strong className="text-amber-300">Oracle Dental Clinic</strong> in Chipiyana Buzurg for a thorough periodontal examination and professional cleaning.
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
              <InteractiveButton id="bg-call" onClick={handleCall} className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm">
                <PhoneCall className="w-5 h-5" /> Call 7011961515
              </InteractiveButton>
              <InteractiveButton id="bg-wa" onClick={handleWhatsApp} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm">
                <MessageCircle className="w-5 h-5" /> WhatsApp Booking
              </InteractiveButton>
              <InteractiveButton id="bg-dir" onClick={handleDirections} className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 text-sm">
                <Navigation className="w-4 h-4 text-amber-400" /> Get Directions
              </InteractiveButton>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4">
            <h3 className="text-white font-bold text-lg">Why Gums Bleed</h3>
            <TreatmentImage
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
              alt="Educational illustration showing healthy gums vs gingivitis inflammation and gumline bleeding"
              caption="Educational diagram: Gingival inflammation caused by plaque accumulation leading to gum bleeding."
              aspectRatio="4/3"
            />
            <p className="text-xs text-slate-300 leading-relaxed">
              When plaque biofilm is allowed to sit along gum margins, bacteria produce toxins that cause redness, swelling, and easy bleeding during brushing.
            </p>
            <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2 text-xs text-slate-300">
              <span className="font-bold text-amber-400 block">Key Clinical Advice:</span>
              <p><strong>Do NOT stop brushing because your gums bleed!</strong> Stopping brushing allows more plaque to accumulate, worsening the inflammation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAUSES & SYMPTOMS */}
      <section className="py-14 px-4 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Common Causes of Bleeding Gums</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">Gingivitis (Early Gum Inflammation)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Reversible inflammation caused by plaque accumulation. Professional cleaning removes plaque and allows tissues to heal.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">Periodontitis (Advanced Gum Disease)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Infection spreading deeper into supporting bone tissue, causing pocket formation, bone loss, and loose teeth.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">Aggressive Brushing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Using hard bristles or sawing back-and-forth vigorously can mechanically cut delicate gum tissue.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">Tobacco & Smoking</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Tobacco reduces localized blood supply and impairs immune response, accelerating periodontal destruction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TREATMENT OPTIONS */}
      <section className="py-14 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How We Treat Bleeding Gums</h2>
          <p className="text-slate-600 text-sm">Treatment depends on the severity of inflammation and tartar buildup:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">1. Dental Scaling</h3>
              <p className="text-xs text-slate-600">Ultrasonic removal of plaque and calculus above and around gum margins (<button onClick={() => navigateToPath('/teeth-cleaning')} className="text-blue-600 underline">Teeth Cleaning</button>).</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">2. Subgingival Deep Cleaning</h3>
              <p className="text-xs text-slate-600">Scaling and root planing inside deep pockets when periodontal disease is identified.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">3. Home Care Instruction</h3>
              <p className="text-xs text-slate-600">Personalized guidance on soft brushing technique, interdental brushes, and routine recall.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqsList.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl bg-slate-50 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full p-4 text-left font-bold text-slate-900 flex justify-between items-center text-sm sm:text-base">
                  <span>Q{index + 1}: {faq.q}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t border-slate-200 bg-white p-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
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
          <h3 className="text-xl font-bold">Schedule Your Gum Evaluation</h3>
          <p className="text-xs text-slate-400">Jaat Chowk, Chipiyana Buzurg, Ghaziabad. Consultation fee ₹200.</p>
          <div className="flex justify-center gap-3">
            <InteractiveButton id="bg-f-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3 px-6 rounded-xl text-sm">Call 7011961515</InteractiveButton>
            <InteractiveButton id="bg-f-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl text-sm">WhatsApp Booking</InteractiveButton>
          </div>
        </div>
      </section>
    </div>
  );
}

const faqsList = [
  { q: "Why do my gums bleed when I brush?", a: "Bleeding gums are usually caused by bacterial plaque accumulation along the gumline triggering localized inflammation (gingivitis)." },
  { q: "Should I stop brushing if my gums bleed?", a: "No. You should continue brushing gently with a soft toothbrush. Stopping brushing allows plaque to build up further, worsening the condition." },
  { q: "Will dental scaling cure bleeding gums?", a: "Yes, in cases of plaque-induced gingivitis, professional scaling removes the bacterial irritants so gums can heal." },
  { q: "Can hard toothbrush bristles cause gum bleeding?", a: "Yes. Hard bristles or aggressive horizontal scrubbing can physically damage delicate gum margins." },
  { q: "How long does it take for bleeding gums to heal after scaling?", a: "With good home hygiene and professional scaling, mild gingivitis usually resolves within 7 to 14 days." },
  { q: "Is gum bleeding normal during pregnancy?", a: "Hormonal shifts during pregnancy make gums more sensitive to plaque, leading to 'pregnancy gingivitis'. Gentle cleaning is recommended." },
  { q: "Where is Oracle Dental Clinic located?", a: "Shop No. 47, KTS Complex, near Dolphin Public School, Jaat Chowk, Chipiyana Buzurg, Ghaziabad." },
  { q: "How much is the consultation fee?", a: "The consultation fee at Oracle Dental Clinic is ₹200." }
];
