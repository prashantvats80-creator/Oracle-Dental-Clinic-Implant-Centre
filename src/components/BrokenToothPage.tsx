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
  AlertTriangle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';

interface BrokenToothPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath: (path: string) => void;
}

export default function BrokenToothPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: BrokenToothPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const title = "Broken Tooth Treatment in Ghaziabad | Oracle Dental Clinic";
    const description = "Have a broken, cracked, or fractured tooth? Visit Oracle Dental Clinic in Chipiyana Buzurg, Ghaziabad for examination, dental bonding, crowns, or RCT.";
    const pageUrl = `${window.location.origin}/broken-tooth-treatment`;

    document.title = title;

    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute(attrName, attrVal); document.head.appendChild(el); }
      el.setAttribute('content', contentVal);
    };

    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", "broken tooth treatment, fractured tooth treatment, cracked tooth dentist, broken tooth dentist near me, broken tooth treatment Ghaziabad");

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
        { "@type": "ListItem", "position": 2, "name": "Broken Tooth Treatment", "item": pageUrl }
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
      <div className="bg-slate-900 text-white py-3 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-slate-400">
            <button onClick={navigateToHome} className="hover:text-amber-400 flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </button>
            <span>/</span>
            <span className="text-amber-400 font-medium">Broken Tooth Treatment</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-300">
            <span><MapPin className="w-3.5 h-3.5 text-amber-500 inline mr-1" /> Chipiyana Buzurg, Ghaziabad</span>
            <span><Clock className="w-3.5 h-3.5 text-amber-500 inline mr-1" /> 10 AM–2 PM | 5 PM–9 PM</span>
          </div>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full">
              <AlertTriangle className="w-4 h-4 text-rose-400" /> Fractured & Broken Tooth Repair
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Broken Tooth Treatment in Ghaziabad
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              A broken or cracked tooth can occur from biting hard food, accidental trauma, or underlying decay weakening the tooth structure. Visit <strong className="text-amber-300">Oracle Dental Clinic</strong> in Chipiyana Buzurg for clinical examination and restoration.
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
              <InteractiveButton id="bt-call" onClick={handleCall} className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm">
                <PhoneCall className="w-5 h-5" /> Call 7011961515
              </InteractiveButton>
              <InteractiveButton id="bt-wa" onClick={handleWhatsApp} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm">
                <MessageCircle className="w-5 h-5" /> WhatsApp Booking
              </InteractiveButton>
              <InteractiveButton id="bt-dir" onClick={handleDirections} className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 text-sm">
                <Navigation className="w-4 h-4 text-amber-400" /> Get Directions
              </InteractiveButton>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4">
            <h3 className="text-white font-bold text-lg">Immediate First-Aid Steps</h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-400" /> Save any broken tooth fragments in clean water or milk if possible</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-400" /> Rinse mouth gently with warm salt water</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-400" /> Avoid chewing on the broken side</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-400" /> Visit the clinic promptly to protect exposed inner layers</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Restoration According to Severity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm">Minor Enamel Chip</h3>
              <p className="text-xs text-slate-600 mt-1">Smoothed or repaired with tooth-colored composite bonding (<button onClick={() => navigateToPath('/dental-fillings')} className="text-blue-600 underline">Dental Fillings</button>).</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm">Moderate Cusp Fracture</h3>
              <p className="text-xs text-slate-600 mt-1">Protected with a full-coverage Zirconia or ceramic crown (<button onClick={() => navigateToPath('/tooth-cap')} className="text-blue-600 underline">Tooth Cap</button>).</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-sm">Deep Fracture into Nerve</h3>
              <p className="text-xs text-slate-600 mt-1">Requires root canal therapy followed by a supportive crown (<button onClick={() => navigateToPath('/root-canal-treatment')} className="text-blue-600 underline">Root Canal</button>).</p>
            </div>
          </div>
        </div>
      </section>

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

      <section className="bg-slate-950 text-white py-10 px-4 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-bold">Schedule Your Broken Tooth Examination</h3>
          <p className="text-xs text-slate-400">Jaat Chowk, Chipiyana Buzurg, Ghaziabad. Consultation fee ₹200.</p>
          <div className="flex justify-center gap-3">
            <InteractiveButton id="bt-f-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3 px-6 rounded-xl text-sm">Call 7011961515</InteractiveButton>
            <InteractiveButton id="bt-f-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl text-sm">WhatsApp Booking</InteractiveButton>
          </div>
        </div>
      </section>
    </div>
  );
}

const faqsList = [
  { q: "Does every broken tooth require a crown?", a: "No. Small enamel chips can be smoothed or filled with composite. Crowns are needed when significant tooth structure is lost." },
  { q: "Can a broken tooth heal on its own?", a: "No. Enamel and dentin cannot regenerate. A broken tooth must be restored by a dentist to prevent further decay or nerve exposure." },
  { q: "Where is Oracle Dental Clinic located?", a: "Shop No. 47, KTS Complex, near Dolphin Public School, Jaat Chowk, Chipiyana Buzurg, Ghaziabad." },
  { q: "How much is the consultation fee?", a: "The initial clinical consultation fee is ₹200." }
];
