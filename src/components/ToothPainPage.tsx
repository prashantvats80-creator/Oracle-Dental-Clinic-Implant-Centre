import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Navigation, 
  AlertTriangle,
  HelpCircle,
  Activity,
  ShieldAlert,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Stethoscope,
  Sparkles,
  Zap,
  Flame,
  Moon,
  AlertCircle,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface ToothPainPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath: (path: string) => void;
}

export default function ToothPainPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: ToothPainPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const title = "Tooth Pain Treatment in Ghaziabad | Oracle Dental Clinic";
    const description = "Suffering from severe toothache or tooth pain in Ghaziabad? Visit Oracle Dental Clinic in Chipiyana Buzurg for clinical examination, diagnosis, and relief.";
    const pageUrl = `${window.location.origin}/tooth-pain-treatment`;

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
    setMetaTag("name", "keywords", "tooth pain treatment, toothache treatment, tooth pain dentist, dentist for tooth pain, tooth pain treatment near me, toothache dentist in Ghaziabad, tooth pain treatment in Chipiyana Buzurg, emergency toothache relief, tooth pain Jaat Chowk, dental pain clinic Ghaziabad");

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
        { "@type": "ListItem", "position": 2, "name": "Tooth Pain Treatment", "item": pageUrl }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqsList.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": { "@type": "Answer", "text": faq.a }
      }))
    };

    const s1 = document.createElement('script'); s1.type = 'application/ld+json'; s1.text = JSON.stringify(dentistSchema); document.head.appendChild(s1);
    const s2 = document.createElement('script'); s2.type = 'application/ld+json'; s2.text = JSON.stringify(breadcrumbSchema); document.head.appendChild(s2);
    const s3 = document.createElement('script'); s3.type = 'application/ld+json'; s3.text = JSON.stringify(faqSchema); document.head.appendChild(s3);

    return () => {
      document.head.removeChild(s1); document.head.removeChild(s2); document.head.removeChild(s3);
    };
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Symptoms', path: '/#symptoms' },
          { label: 'Tooth Pain Relief', path: '/tooth-pain' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Emergency Relief"
      />

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900 text-white pt-12 pb-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full">
              <AlertTriangle className="w-4 h-4 text-rose-400" /> Urgent Toothache Relief & Examination
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Tooth Pain Treatment in Ghaziabad
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              If you are suffering from acute, throbbing, or persistent toothache, visit <strong className="text-amber-300">Oracle Dental Clinic</strong> in Chipiyana Buzurg, Ghaziabad. We perform clinical examinations to identify the underlying cause and recommend appropriate treatment.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <span className="text-slate-400 block">Consultation Fee</span>
                <span className="text-amber-300 font-bold text-sm">₹200 Only</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <span className="text-slate-400 block">Lead Doctor</span>
                <span className="text-white font-bold text-sm">Dr. Prashant Vats, BDS</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-slate-400 block">Location</span>
                <span className="text-white font-bold text-sm">Jaat Chowk, Chipiyana</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <InteractiveButton id="tp-call" onClick={handleCall} className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm">
                <PhoneCall className="w-5 h-5" /> Call 7011961515
              </InteractiveButton>
              <InteractiveButton id="tp-wa" onClick={handleWhatsApp} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm">
                <MessageCircle className="w-5 h-5" /> WhatsApp Consultation
              </InteractiveButton>
              <InteractiveButton id="tp-dir" onClick={handleDirections} className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 text-sm">
                <Navigation className="w-4 h-4 text-amber-400" /> Get Directions
              </InteractiveButton>
            </div>
          </div>

          {/* EMERGENCY WARNING BOX */}
          <div className="lg:col-span-5 bg-rose-950/80 border border-rose-800/80 p-6 rounded-3xl space-y-4">
            <h3 className="text-white font-bold text-lg flex items-center gap-2 text-rose-300">
              <ShieldAlert className="w-5 h-5 text-rose-400" /> Emergency Warning Signs
            </h3>
            <p className="text-xs text-rose-200 leading-relaxed">
              Seek immediate medical/dental attention if your tooth pain is accompanied by any of the following critical red flags:
            </p>
            <ul className="space-y-2 text-xs text-rose-100">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" /> Facial or neck swelling extending towards the eye or jaw.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" /> Difficulty breathing or difficulty swallowing.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" /> Rapidly spreading swelling or high fever with severe pain.</li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 flex-shrink-0" /> Uncontrolled oral bleeding following trauma.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHAT IS TOOTH PAIN & COMMON CAUSES */}
      <section className="py-14 px-4 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What Is Tooth Pain?</h2>
            <p className="text-slate-600 mt-2 leading-relaxed">
              Tooth pain (dental pain) is discomfort occurring in or around a tooth and its surrounding jaw structures. Pain is an alarm signal indicating that nerve tissues, gums, or bone structures are experiencing inflammation, pressure, or physical damage.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Common Causes of Toothache</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
              <TreatmentImage
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80"
                alt="Educational diagram illustrating deep cavity decay causing nerve pulp inflammation and toothache"
                caption="Educational diagram: Deep enamel decay reaching inner pulp nerve causing throbbing tooth pain."
                aspectRatio="4/3"
              />
              <TreatmentImage
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
                alt="Educational illustration showing professional clinical examination for toothache diagnosis"
                caption="Educational illustration: Clinical diagnostic examination and X-ray evaluation to identify pain root causes."
                aspectRatio="4/3"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: "Dental Cavities", desc: "Decay penetrating enamel into dentin or nerve pulp." },
                { title: "Pulp Inflammation (Pulpitis)", desc: "Infection or swelling of internal nerve tissue." },
                { title: "Dental Abscess", desc: "Pus collection at root apex due to untreated infection." },
                { title: "Cracked or Fractured Tooth", desc: "Incomplete crack flexing under biting pressure." },
                { title: "Periodontal / Gum Disease", desc: "Deep pocket inflammation and bone loss around roots." },
                { title: "Exposed Tooth Roots", desc: "Gum recession exposing sensitive root dentin." },
                { title: "Impacted Wisdom Tooth", desc: "Partially erupted wisdom tooth causing pericoronitis." },
                { title: "Food Impaction", desc: "Tightly wedged food debris creating interdental pressure." },
                { title: "Failed Old Filling or Crown", desc: "Recurrent decay developing under older restorations." }
              ].map((c, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-slate-900 text-sm">{c.title}</h4>
                  <p className="text-xs text-slate-600">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF PAIN PATTERNS */}
      <section className="py-14 px-4 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Understanding Different Pain Patterns</h2>
          <p className="text-slate-600 text-sm">Different types of pain may suggest different underlying dental issues, though symptoms alone cannot establish a definitive diagnosis without clinical examination:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-rose-700 flex items-center gap-1.5"><Zap className="w-4 h-4" /> Sharp Pain on Biting</span>
              <p className="text-slate-600 text-xs">May indicate a cracked tooth, high restoration, or localized cavity.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-blue-700 flex items-center gap-1.5"><Flame className="w-4 h-4" /> Lingering Hot/Cold Sensitivity</span>
              <p className="text-slate-600 text-xs">Sensitivity lasting more than 10-15 seconds after thermal stimulus often points toward irreversible nerve inflammation.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-amber-700 flex items-center gap-1.5"><Moon className="w-4 h-4" /> Throbbing Night-time Pain</span>
              <p className="text-slate-600 text-xs">Lying down increases blood pressure in the head, intensifying pressure inside an inflamed pulp chamber.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <span className="font-bold text-slate-900 flex items-center gap-1.5"><AlertCircle className="w-4 h-4 text-slate-600" /> Constant Dull Ache with Swelling</span>
              <p className="text-slate-600 text-xs">Often associated with periapical infection or abscess accumulation in surrounding bone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* DIAGNOSIS & TREATMENTS */}
      <section className="py-14 px-4 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">How Is Tooth Pain Diagnosed & Treated?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-lg">Clinical Diagnosis Process</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                At Oracle Dental Clinic, Dr. Prashant Vats BDS performs a comprehensive assessment including visual examination, gently tapping (percussion), checking gum pocket depths, vitality testing, and dental X-rays when clinically indicated to locate the exact source of pain.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-lg">Targeted Treatment Options</h3>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li>• <strong className="text-slate-800">Dental Fillings:</strong> For early to moderate cavities without nerve involvement (<button onClick={() => navigateToPath('/dental-fillings')} className="text-blue-600 underline">Dental Fillings</button>).</li>
                <li>• <strong className="text-slate-800">Root Canal Treatment:</strong> Removes infected nerve tissue while saving the natural tooth (<button onClick={() => navigateToPath('/root-canal-treatment')} className="text-blue-600 underline">Root Canal Treatment</button>).</li>
                <li>• <strong className="text-slate-800">Tooth Cap / Crown:</strong> Restores fractured or heavily decayed teeth (<button onClick={() => navigateToPath('/tooth-cap')} className="text-blue-600 underline">Tooth Cap</button>).</li>
                <li>• <strong className="text-slate-800">Tooth Extraction:</strong> When a tooth is non-restorable due to severe fracture or destruction (<button onClick={() => navigateToPath('/tooth-extraction')} className="text-blue-600 underline">Tooth Extraction</button>).</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 p-5 rounded-2xl space-y-2 text-amber-950 text-xs leading-relaxed">
            <h4 className="font-bold text-sm text-amber-900">Important Note on Painkillers & Self-Medication</h4>
            <p>Painkillers or antibiotics may temporarily lessen symptoms, but they <strong>do not cure the underlying physical tooth defect or infection</strong>. Never place aspirin directly on gums (causes chemical burns) or start antibiotics without a dentist's prescription.</p>
          </div>
        </div>
      </section>

      {/* FAQS SECTION */}
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
          <h3 className="text-xl font-bold">Get Evaluated at Oracle Dental Clinic</h3>
          <p className="text-xs text-slate-400">Jaat Chowk, Chipiyana Buzurg, Ghaziabad. Consultation fee ₹200.</p>
          <div className="flex justify-center gap-3">
            <InteractiveButton id="tp-f-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3 px-6 rounded-xl text-sm">
              Call 7011961515
            </InteractiveButton>
            <InteractiveButton id="tp-f-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl text-sm">
              WhatsApp Booking
            </InteractiveButton>
          </div>
        </div>
      </section>
    </div>
  );
}

const faqsList = [
  { q: "What should I do if I have severe tooth pain at night?", a: "Rinse gently with warm salt water, keep your head elevated on pillows, avoid chewing on that side, and visit Oracle Dental Clinic for examination." },
  { q: "Can painkillers cure a toothache?", a: "No. Painkillers only temporarily numb pain signals; they do not remove decay, repair fractures, or cure bacterial nerve infections." },
  { q: "Why does my tooth hurt when I eat hot or cold food?", a: "Thermal sensitivity indicates that enamel is worn, dentin is exposed, or the inner tooth nerve (pulp) is inflamed." },
  { q: "Is tooth pain with facial swelling an emergency?", a: "Yes. Swelling indicates a spreading infection or abscess that requires prompt clinical attention." },
  { q: "How much is the consultation fee for tooth pain examination?", a: "At Oracle Dental Clinic, the initial clinical consultation fee is ₹200." },
  { q: "Can a cavity cause tooth pain?", a: "Yes. As decay progresses through enamel into dentin and pulp, it causes increasing sensitivity and pain." },
  { q: "What is the difference between sharp pain and dull ache?", a: "Sharp pain on biting often indicates a crack or cavity, while a constant dull throbbing ache usually points toward nerve inflammation or abscess." },
  { q: "Why shouldn't I put an aspirin on my aching tooth?", a: "Aspirin is acidic and will burn your delicate gum tissue, causing painful chemical ulcers without treating the tooth." },
  { q: "Can gum disease cause toothache?", a: "Yes. Deep gum pockets or bone loss can cause dull aching, tenderness on biting, and sensitivity." },
  { q: "Will I need a root canal if my tooth hurts?", a: "Not necessarily. If decay is shallow, a filling may suffice. Root canal is recommended only if the nerve is infected or inflamed." },
  { q: "Where is Oracle Dental Clinic located?", a: "At Shop No. 47, KTS Complex, near Dolphin Public School, Jaat Chowk, Chipiyana Buzurg, Ghaziabad." },
  { q: "What are the clinic timings?", a: "Oracle Dental Clinic is open daily from 10:00 AM – 2:00 PM and 5:00 PM – 9:00 PM." }
];
