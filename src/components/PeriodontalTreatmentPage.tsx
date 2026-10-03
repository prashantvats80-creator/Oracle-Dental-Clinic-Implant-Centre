import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  Activity,
  ShieldCheck,
  HeartPulse
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface PeriodontalTreatmentPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function PeriodontalTreatmentPage({
  handleCall,
  handleWhatsApp,
  navigateToHome,
  navigateToPath
}: PeriodontalTreatmentPageProps) {
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
    const title = "Gum Disease & Periodontal Treatment in Ghaziabad | Oracle Dental Clinic";
    const description = "Comprehensive periodontal care and gum disease treatment in Ghaziabad. Deep scaling, root planing, and bone protection under Dr. Prashant Kumar Vats, BDS. Consultation ₹200.";
    const pageUrl = `${window.location.origin}/periodontal-gum-treatment-ghaziabad`;

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
    setMetaTag("name", "keywords", "gum disease treatment Ghaziabad, gum treatment Ghaziabad, periodontal treatment Ghaziabad, periodontitis treatment Ghaziabad, gingivitis treatment Ghaziabad, gum disease dentist near me, deep cleaning teeth Ghaziabad, scaling and root planing");

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
      q: "What is the difference between gingivitis and periodontitis?",
      a: "Gingivitis is early superficial gum inflammation caused by surface plaque and tartar, characterized by red, bleeding gums with no bone loss; it is completely reversible with professional scaling. Periodontitis occurs when inflammation extends deep into the periodontal ligament and alveolar jawbone, forming deep pockets and causing irreversible bone resorption if left untreated."
    },
    {
      q: "What is scaling and root planing (deep cleaning)?",
      a: "Scaling cleans away hardened calculus above and below the gumline using gentle ultrasonic instruments. Root planing goes deeper under local anesthesia to smooth rough root surfaces, eliminating bacterial toxins and encouraging healthy gum reattachment."
    },
    {
      q: "Can gum disease cause teeth to become loose?",
      a: "Yes. The alveolar bone and periodontal fibers are the literal foundation anchoring teeth into the jaw. As chronic periodontitis destroys supporting bone, teeth lose their stability and begin to loosen or drift."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Gum Disease Treatment', path: '/gum-disease-treatment' },
          { label: 'Periodontal Gum Treatment', path: '/periodontal-gum-treatment-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Periodontal Care"
      />

      <header className="relative bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-200 border border-teal-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Activity className="w-3.5 h-3.5 text-amber-400" />
            <span>Gum Health & Bone Protection • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Gum Disease and Periodontal Treatment in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Healthy gums are the foundation of a lasting smile. From reversing bleeding gingivitis to controlling advanced periodontitis and bone loss, <strong>Dr. Prashant Kumar Vats, BDS</strong> provides thorough clinical periodontal evaluations for <strong>₹200</strong> at <strong>Oracle Dental Clinic</strong> in Chipiyana Buzurg.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton id="perio-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="perio-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Desk</span>
            </InteractiveButton>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Progression Stages */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Clinical Progression</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Stages of Gum Disease: Gingivitis to Periodontitis
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Periodontal disease is a progressive bacterial infection that develops in distinct stages:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md uppercase">Early Stage</span>
              <h3 className="font-bold text-base text-slate-900">1. Gingivitis</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Bacteria in plaque cause red, puffy gums that bleed when brushing or flossing. The bone structure is undamaged, and the condition is 100% reversible with routine ultrasonic scaling.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] font-bold bg-rose-100 text-rose-900 px-2 py-0.5 rounded-md uppercase">Moderate Stage</span>
              <h3 className="font-bold text-base text-slate-900">2. Mild to Moderate Periodontitis</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Toxins destroy connective tissue fibers, forming periodontal pockets (4–6 mm). Subgingival calculus accumulates on root surfaces and early bone resorption begins.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[10px] font-bold bg-red-100 text-red-900 px-2 py-0.5 rounded-md uppercase">Severe Stage</span>
              <h3 className="font-bold text-base text-slate-900">3. Advanced Periodontitis</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Severe alveolar bone loss leads to deep pockets (&gt;6 mm), recurrent gum abscesses, tooth mobility, and drifting. Requires deep scaling and careful periodontal maintenance.
              </p>
            </div>
          </div>
        </section>

        {/* Contributing Risk Factors */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Key Risk Factors for Periodontal Disease</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1 text-xs text-slate-700">
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong>Poor Oral Hygiene:</strong> Inadequate brushing and flossing permits plaque to calcify into rough tartar within 24–48 hours.
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong>Smoking & Tobacco:</strong> Impairs local blood circulation, delays tissue healing, and accelerates bone loss significantly.
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong>Diabetes Mellitus:</strong> Uncontrolled blood sugar levels impair immune response to oral bacteria and worsen pocket inflammation.
            </div>
            <div className="p-3 bg-white rounded-xl border border-slate-200">
              <strong>Genetic Predisposition:</strong> Family history of early tooth loss can increase susceptibility to aggressive periodontal disease.
            </div>
          </div>
        </section>

        {/* Related Gum Care Pages */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Related Gum & Symptom Care Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs font-bold text-blue-700">
            <a href="/bleeding-gums" onClick={(e) => handleLinkClick(e, '/bleeding-gums')} className="p-3 bg-white rounded-xl border border-slate-200 hover:underline flex justify-between items-center">
              Bleeding Gums Care <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="/swollen-gums" onClick={(e) => handleLinkClick(e, '/swollen-gums')} className="p-3 bg-white rounded-xl border border-slate-200 hover:underline flex justify-between items-center">
              Swollen Gums Relief <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="/loose-tooth-treatment" onClick={(e) => handleLinkClick(e, '/loose-tooth-treatment')} className="p-3 bg-white rounded-xl border border-slate-200 hover:underline flex justify-between items-center">
              Loose Tooth Care <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="/teeth-cleaning" onClick={(e) => handleLinkClick(e, '/teeth-cleaning')} className="p-3 bg-white rounded-xl border border-slate-200 hover:underline flex justify-between items-center">
              Ultrasonic Scaling <ArrowRight className="w-3.5 h-3.5" />
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
