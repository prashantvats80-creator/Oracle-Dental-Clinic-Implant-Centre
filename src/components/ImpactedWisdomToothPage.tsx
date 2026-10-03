import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  Stethoscope,
  ShieldCheck,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface ImpactedWisdomToothPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function ImpactedWisdomToothPage({
  handleCall,
  handleWhatsApp,
  navigateToHome,
  navigateToPath
}: ImpactedWisdomToothPageProps) {
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
    const title = "Impacted Wisdom Tooth Treatment in Ghaziabad | Oracle Dental Clinic";
    const description = "Specialized surgical care for impacted wisdom teeth in Ghaziabad. Gentle diagnosis, radiographic evaluation, and removal by Dr. Prashant Kumar Vats, BDS. Consultation ₹200.";
    const pageUrl = `${window.location.origin}/impacted-wisdom-tooth`;

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
    setMetaTag("name", "keywords", "impacted wisdom tooth, impacted wisdom tooth treatment, impacted tooth treatment, impacted wisdom tooth dentist, impacted wisdom tooth Ghaziabad, wisdom tooth surgery Ghaziabad, horizontal wisdom tooth, mesioangular wisdom tooth");

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
  }, []);

  const faqs = [
    {
      q: "Does every impacted wisdom tooth need to be surgically removed?",
      a: "No. If a wisdom tooth is completely enclosed in healthy jawbone without pain, pathology, or damage to adjacent teeth, active clinical observation with periodic X-rays may be appropriate. Removal is recommended when recurrent infections (pericoronitis), decay, cysts, or second molar root damage occur."
    },
    {
      q: "What are the common angles of wisdom tooth impaction?",
      a: "Wisdom teeth can be mesioangular (angled forward towards neighboring tooth), horizontal (lying flat 90 degrees), vertical (upright but trapped under bone), or distoangular (angled backward into the jaw ramus)."
    },
    {
      q: "How is an impacted wisdom tooth safely diagnosed?",
      a: "Dr. Prashant Kumar Vats, BDS conducts an in-person clinical exam (₹200) and reviews panoramic radiographs (OPG) to evaluate the roots, impaction depth, and proximity to the inferior alveolar nerve before planning a gentle procedure."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Wisdom Tooth Removal', path: '/wisdom-tooth-extraction' },
          { label: 'Impacted Wisdom Tooth Treatment', path: '/impacted-wisdom-tooth' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Oral Surgery Care"
      />

      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Stethoscope className="w-3.5 h-3.5 text-amber-400" />
            <span>Oral Surgery & Impaction Guidance • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Impacted Wisdom Tooth Treatment in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            When third molars lack adequate space to emerge normally, they become impacted against neighboring teeth or dense jawbone. Learn about clinical diagnosis, surgical extraction, and recovery under <strong>Dr. Prashant Kumar Vats, BDS</strong> for <strong>₹200</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton id="impct-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="impct-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Desk</span>
            </InteractiveButton>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Impaction Types & Complications */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Clinical Classification</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Types of Wisdom Tooth Impaction
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Third molars develop late in jaw growth (ages 17–25). When dental arch length is insufficient, impactions take various forms:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-base text-slate-900">Mesioangular Impaction</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                The most frequent pattern, where the molar tilts forward toward the adjacent second molar, often creating an uncleansable food pocket and decay.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-base text-slate-900">Horizontal Impaction</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                The molar lies completely flat inside the jawbone, pushing sideways into neighboring roots, which can cause severe crowding or resorption.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-base text-slate-900">Partially Erupted (Pericoronitis)</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Part of the crown breaks through the gum while the rest remains covered by an inflamed tissue flap (operculum), causing recurrent cheek swelling.
              </p>
            </div>
          </div>
        </section>

        {/* Surgical Procedure & Recovery Overview */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Surgical Extraction & Dry Socket Prevention</h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
            Surgical removal is performed gently under local anesthesia. Sectioning the tooth into smaller pieces allows conservative removal with minimal bone reduction. Following simple aftercare rules—avoiding drinking straws, smoking, and vigorous spitting for 48 hours—protects the healing blood clot and prevents dry socket (alveolar osteitis).
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-blue-700">
            <a href="/wisdom-tooth-extraction" onClick={(e) => handleLinkClick(e, '/wisdom-tooth-extraction')} className="hover:underline flex items-center gap-1">
              General Wisdom Tooth Guide <ArrowRight className="w-3 h-3" />
            </a>
            <a href="/tooth-extraction" onClick={(e) => handleLinkClick(e, '/tooth-extraction')} className="hover:underline flex items-center gap-1">
              Tooth Extraction Details <ArrowRight className="w-3 h-3" />
            </a>
            <a href="/dental-abscess-treatment" onClick={(e) => handleLinkClick(e, '/dental-abscess-treatment')} className="hover:underline flex items-center gap-1">
              Infection & Abscess Care <ArrowRight className="w-3 h-3" />
            </a>
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
      </main>
    </div>
  );
}
