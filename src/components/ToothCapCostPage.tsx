import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface ToothCapCostPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function ToothCapCostPage({
  handleCall,
  handleWhatsApp,
  navigateToHome,
  navigateToPath
}: ToothCapCostPageProps) {
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
    const title = "Tooth Cap Cost in Ghaziabad | Dental Crown Price | Oracle Dental Clinic";
    const description = "Comprehensive guide to tooth cap & dental crown costs in Ghaziabad. Learn about metal-free Zirconia, ceramic, and PFM crowns. Consultation fee ₹200.";
    const pageUrl = `${window.location.origin}/tooth-cap-cost-ghaziabad`;

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
    setMetaTag("name", "keywords", "tooth cap cost Ghaziabad, dental crown cost Ghaziabad, tooth cap price Ghaziabad, dental crown price Ghaziabad, zirconia crown cost, ceramic crown cost, tooth crown cost, cap after root canal cost");

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
      q: "What is the difference in price between Zirconia and PFM crowns?",
      a: "Porcelain-Fused-to-Metal (PFM) crowns feature a metal interior with porcelain overlay, making them economical. Zirconia crowns are 100% metal-free, biocompatible, and digitally milled (CAD/CAM) for superior natural translucency and strength, reflecting higher manufacturing quality."
    },
    {
      q: "Is a tooth cap always necessary after a root canal?",
      a: "For back molars and premolars that absorb heavy chewing forces, a crown is almost always recommended to prevent vertical root fractures. Front teeth with minimal structural loss may sometimes be restored with composite bonding alone."
    },
    {
      q: "How can I check which crown material is right for me?",
      a: "During a ₹200 consultation at Oracle Dental Clinic, Dr. Prashant Kumar Vats, BDS assesses your bite forces, smile line, and enamel condition to recommend the ideal crown material."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Tooth Caps & Crowns', path: '/tooth-cap' },
          { label: 'Tooth Cap Cost in Ghaziabad', path: '/tooth-cap-cost-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Dental Crown Pricing"
      />

      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Crowns & Tooth Caps • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Tooth Cap / Dental Crown Cost in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Protecting root-canal-treated teeth and restoring broken enamel requires a durable, precision-milled crown. Explore the differences between Zirconia, ceramic, and PFM caps, with transparent clinical consultations for <strong>₹200</strong> at <strong>Oracle Dental Clinic</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton id="crown-cost-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="crown-cost-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Desk</span>
            </InteractiveButton>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Crown Material Comparison */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Material Science</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Crown Material Options & Cost Considerations
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Dental crowns are customized laboratory prosthetics. Their cost depends upon the material grade and manufacturing precision:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md uppercase">Premium Aesthetic</span>
              <h3 className="font-bold text-lg text-slate-900">Zirconia Crowns</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Biocompatible, 100% metal-free, and digitally milled from solid zirconium oxide blocks. Extremely fracture-resistant and eliminates grey metal margins at the gumline.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[10px] font-bold bg-blue-100 text-blue-900 px-2 py-0.5 rounded-md uppercase">High Esthetics</span>
              <h3 className="font-bold text-lg text-slate-900">All-Ceramic (E-Max)</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Lithium disilicate glass-ceramic crowns designed primarily for front smile teeth. Matches natural dental enamel translucency and light reflection seamlessly.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[10px] font-bold bg-slate-200 text-slate-800 px-2 py-0.5 rounded-md uppercase">Economical</span>
              <h3 className="font-bold text-lg text-slate-900">PFM (Porcelain-Metal)</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                A traditional choice featuring a cast metal alloy interior with tooth-colored porcelain baked over the top. Durable for back molar chewing.
              </p>
            </div>
          </div>
        </section>

        {/* Crown vs Alternatives */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Crown vs. Filling vs. Veneer</h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
            A small cavity only requires a direct composite filling. When more than 50% of the tooth structure is damaged, a filling alone lacks the structural integrity to withstand biting forces, necessitating a 360-degree crown cap.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-blue-700">
            <a href="/tooth-cap" onClick={(e) => handleLinkClick(e, '/tooth-cap')} className="hover:underline flex items-center gap-1">
              Full Tooth Cap Guide <ArrowRight className="w-3 h-3" />
            </a>
            <a href="/dental-fillings" onClick={(e) => handleLinkClick(e, '/dental-fillings')} className="hover:underline flex items-center gap-1">
              Composite Fillings <ArrowRight className="w-3 h-3" />
            </a>
            <a href="/broken-tooth-treatment" onClick={(e) => handleLinkClick(e, '/broken-tooth-treatment')} className="hover:underline flex items-center gap-1">
              Broken Tooth Repair <ArrowRight className="w-3 h-3" />
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
