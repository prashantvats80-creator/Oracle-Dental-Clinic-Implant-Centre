import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  AlertTriangle,
  HeartPulse,
  ShieldCheck,
  Stethoscope
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface DentalAbscessPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function DentalAbscessPage({
  handleCall,
  handleWhatsApp,
  navigateToHome,
  navigateToPath
}: DentalAbscessPageProps) {
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
    const title = "Dental Abscess & Tooth Infection Treatment in Ghaziabad | Oracle Dental Clinic";
    const description = "Urgent clinical care for dental abscess and tooth infections in Ghaziabad. Drainage, root canal, and infection relief by Dr. Prashant Kumar Vats, BDS. Consultation ₹200.";
    const pageUrl = `${window.location.origin}/dental-abscess-treatment`;

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
    setMetaTag("name", "keywords", "dental abscess treatment, tooth abscess treatment, dental infection treatment, tooth infection treatment, gum abscess treatment, dental abscess dentist near me, tooth infection dentist Ghaziabad, swollen face due to tooth infection");

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
      q: "What causes a dental abscess to develop?",
      a: "A dental abscess is an accumulation of pus caused by bacterial infection. Periapical abscesses occur when bacteria penetrate deep untreated cavities into the dental pulp. Periodontal abscesses originate from deep infected gum pockets harboring subgingival bacteria."
    },
    {
      q: "Why did my toothache suddenly stop even though the swelling remains?",
      a: "When acute pain suddenly disappears, it often indicates the nerve inside the pulp has died (pulpal necrosis). However, the bacterial infection has not disappeared—it continues spreading through the root apex into the surrounding jawbone and soft tissues."
    },
    {
      q: "Can antibiotics alone cure a dental abscess?",
      a: "No. Antibiotics circulate through the bloodstream and cannot enter the dead pulp tissue inside a non-vital tooth. Permanent relief requires mechanical clinical treatment—such as root canal cleaning, infection drainage, or extraction of a non-restorable tooth."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Emergency Dental Care', path: '/emergency-dentist' },
          { label: 'Dental Abscess Treatment', path: '/dental-abscess-treatment' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Urgent Infection Care"
      />

      <header className="relative bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-rose-500/20 text-rose-200 border border-rose-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>Urgent Infection Management • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Dental Abscess and Tooth Infection Treatment in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            A dental abscess is an active bacterial infection requiring prompt clinical diagnosis and targeted intervention. At <strong>Oracle Dental Clinic</strong> in Chipiyana Buzurg, <strong>Dr. Prashant Kumar Vats, BDS</strong> provides careful evaluation, drainage, and treatment for <strong>₹200</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton id="abscess-call" onClick={handleCall} className="bg-rose-500 hover:bg-rose-400 text-white font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> <span>Urgent Helpline: 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="abscess-wa" onClick={handleWhatsApp} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Consultation</span>
            </InteractiveButton>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Red Flag Emergency Box */}
        <section className="bg-rose-50 border-2 border-rose-300 rounded-3xl p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-rose-800 font-extrabold text-sm uppercase">
            <AlertTriangle className="w-5 h-5 text-rose-600" />
            <span>Emergency Red Flags Requiring Immediate Medical Attention</span>
          </div>
          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
            If you develop <strong>rapidly spreading facial swelling</strong>, swelling that closes an eye, <strong>difficulty swallowing or breathing</strong>, high fever, or severe lethargy, seek immediate emergency hospital medical care, as deep fascial space infections can compromise the airway.
          </p>
        </section>

        {/* Clinical Presentation & Treatment Path */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Clinical Pathways</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How a Tooth Abscess is Treated Clinically
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl leading-relaxed">
              Effective treatment targets the source of bacteria rather than simply masking symptoms with painkillers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-base text-slate-900">1. Drainage & Decompression</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Releasing trapped purulent fluid relieves throbbing pressure and minimizes further soft tissue distension.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-base text-slate-900">2. Root Canal (Restorable Teeth)</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                If the crown structure is intact, rotary endodontic therapy cleans out dead pulp bacteria, disinfecting root canals to save the tooth.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-base text-slate-900">3. Extraction (Non-Restorable)</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                If the tooth is split vertically or extensive bone is lost, gentle extraction eliminates the primary bacterial reservoir safely.
              </p>
            </div>
          </div>
        </section>

        {/* Related Treatment Links */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Related Clinical Procedures</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs font-bold text-blue-700">
            <a href="/tooth-pain-treatment" onClick={(e) => handleLinkClick(e, '/tooth-pain-treatment')} className="p-3 bg-white rounded-xl border border-slate-200 hover:underline flex justify-between items-center">
              Tooth Pain Relief <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="/root-canal-treatment" onClick={(e) => handleLinkClick(e, '/root-canal-treatment')} className="p-3 bg-white rounded-xl border border-slate-200 hover:underline flex justify-between items-center">
              Root Canal Therapy <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="/tooth-extraction" onClick={(e) => handleLinkClick(e, '/tooth-extraction')} className="p-3 bg-white rounded-xl border border-slate-200 hover:underline flex justify-between items-center">
              Tooth Extraction <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="/emergency-dentist" onClick={(e) => handleLinkClick(e, '/emergency-dentist')} className="p-3 bg-white rounded-xl border border-slate-200 hover:underline flex justify-between items-center">
              Emergency Dentist <ArrowRight className="w-3.5 h-3.5" />
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
