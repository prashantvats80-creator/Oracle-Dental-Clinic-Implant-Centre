import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  HeartPulse,
  ShieldAlert
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { Breadcrumbs } from './Breadcrumbs';

interface RootCanalCostPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function RootCanalCostPage({
  handleCall,
  handleWhatsApp,
  navigateToHome,
  navigateToPath
}: RootCanalCostPageProps) {
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
    const title = "Root Canal Treatment Cost in Ghaziabad | Oracle Dental Clinic";
    const description = "Educational guide to root canal treatment costs in Ghaziabad. Discover factors influencing front vs molar RCT, rotary systems, crowns, and consultation fee ₹200.";
    const pageUrl = `${window.location.origin}/root-canal-cost-ghaziabad`;

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
    setMetaTag("name", "keywords", "root canal cost Ghaziabad, RCT cost Ghaziabad, root canal treatment price Ghaziabad, root canal cost near me, RCT dentist Ghaziabad, molar RCT cost, front tooth RCT cost, root canal and crown cost");

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
      q: "Why do molar root canals cost more than front teeth?",
      a: "Front teeth (incisors and canines) typically have a single, straight root canal, making cleaning straightforward. Molars have 3 to 4 curved, microscopic canals requiring multiple rotary files, extended disinfection, and longer procedural time."
    },
    {
      q: "Does the root canal cost include the dental crown?",
      a: "Generally, the root canal procedure (pulp extirpation, cleaning, shaping, and obturation) and the dental crown (tooth cap) are separate procedural steps. Molars and premolars usually require a crown after RCT to protect the brittle tooth from chewing fractures."
    },
    {
      q: "How can I find out the exact cost for my tooth?",
      a: "Dr. Prashant Kumar Vats, BDS evaluates your tooth condition and diagnostic X-rays during a ₹200 consultation at Oracle Dental Clinic, providing an exact, transparent quote before treatment begins."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Root Canal Treatment', path: '/root-canal-treatment' },
          { label: 'Root Canal Cost in Ghaziabad', path: '/root-canal-cost-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="RCT Cost Guide"
      />

      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <HeartPulse className="w-3.5 h-3.5 text-amber-400" />
            <span>Tooth Preservation Guidance • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Root Canal Treatment Cost in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            A root canal relieves acute infection and saves your real tooth. Learn why RCT costs vary by tooth location, the importance of protective crowns, and how to get evaluated at <strong>Oracle Dental Clinic</strong> for <strong>₹200</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton id="rct-cost-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="rct-cost-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Desk</span>
            </InteractiveButton>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Anatomy & Cost Factors */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Clinical Complexity</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Root Canal Costs Vary Across Teeth
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Every tooth has a different canal anatomy. Cost variation is primarily determined by:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-base text-slate-900">Front Teeth (Incisors & Canines)</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Contains typically 1 canal with straight access. Usually completed in simpler sessions with straightforward instrumentation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-base text-slate-900">Premolars</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Usually have 1 to 2 canals requiring specialized rotary files to shape narrower passages.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-base text-slate-900">Back Molars</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Feature 3 to 4 curved, narrow canals situated far back in the mouth, requiring high-precision rotary endodontics and thorough disinfection.
              </p>
            </div>
          </div>
        </section>

        {/* Root Canal vs Extraction */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Root Canal vs. Tooth Extraction</h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-3xl">
            Extracting a tooth may initially seem like a cheaper alternative, but leaving a gap requires future replacement with a dental implant or bridge to prevent bite shifting. Preserving your natural tooth with an RCT is almost always the most cost-effective and biologically sound choice.
          </p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold text-blue-700">
            <a href="/root-canal-treatment" onClick={(e) => handleLinkClick(e, '/root-canal-treatment')} className="hover:underline flex items-center gap-1">
              Complete Root Canal Guide <ArrowRight className="w-3 h-3" />
            </a>
            <a href="/tooth-cap" onClick={(e) => handleLinkClick(e, '/tooth-cap')} className="hover:underline flex items-center gap-1">
              Crowns After RCT <ArrowRight className="w-3 h-3" />
            </a>
            <a href="/tooth-pain-treatment" onClick={(e) => handleLinkClick(e, '/tooth-pain-treatment')} className="hover:underline flex items-center gap-1">
              Tooth Pain Diagnosis <ArrowRight className="w-3 h-3" />
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
