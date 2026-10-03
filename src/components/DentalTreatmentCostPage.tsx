import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  ShieldAlert,
  Coins,
  ReceiptText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { Breadcrumbs } from './Breadcrumbs';

interface DentalTreatmentCostPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function DentalTreatmentCostPage({
  handleCall,
  handleWhatsApp,
  navigateToHome,
  navigateToPath
}: DentalTreatmentCostPageProps) {
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
    const title = "Dental Treatment Cost in Ghaziabad | Oracle Dental Clinic";
    const description = "Transparent guide to dental treatment costs in Ghaziabad. Initial clinical consultation ₹200. Learn key factors influencing RCT, implants, crowns, and fillings pricing.";
    const pageUrl = `${window.location.origin}/dental-treatment-cost-ghaziabad`;

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
    setMetaTag("name", "keywords", "dental treatment cost Ghaziabad, dental treatment price Ghaziabad, dentist charges Ghaziabad, dental clinic price Ghaziabad, dental treatment cost near me, RCT cost Ghaziabad, dental implant cost Ghaziabad, tooth cap cost Ghaziabad");

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
      q: "What is the initial consultation fee at Oracle Dental Clinic?",
      a: "Our clinical consultation fee is verified at ₹200. This covers visual oral examination, symptom evaluation, and discussion of tailored treatment options with Dr. Prashant Kumar Vats, BDS."
    },
    {
      q: "Why do dental treatment costs vary between patients?",
      a: "Costs depend upon tooth location (front vs molar teeth), infection depth, number of root canals, need for diagnostic X-rays, choice of crown materials (metal-free Zirconia vs ceramic), and existing jawbone condition."
    },
    {
      q: "Are treatment costs explained before starting any dental procedure?",
      a: "Yes. At Oracle Dental Clinic, we follow strict ethical transparency. The entire treatment plan, necessary steps, and associated costs are clearly explained following your clinical consultation before beginning any procedure."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Dental Treatment Cost in Ghaziabad', path: '/dental-treatment-cost-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Transparent Pricing Guide"
      />

      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Coins className="w-3.5 h-3.5 text-amber-400" />
            <span>Ethical, Upfront Clinical Guidance • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Dental Treatment Cost in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Understanding dental costs before beginning treatment helps patients make confident healthcare decisions. At <strong>Oracle Dental Clinic</strong> in Chipiyana Buzurg, we provide thorough clinical consultations for <strong>₹200</strong>, followed by individualized, upfront treatment plans.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton id="cost-call-btn" onClick={handleCall} className="bg-amber-500 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="cost-wa-btn" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> <span>Inquire on WhatsApp</span>
            </InteractiveButton>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Transparent Overview Table */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Clinical Breakdown</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Overview of Key Dental Procedures & Pricing Factors
            </h2>
            <p className="text-slate-600 text-sm max-w-2xl">
              Because individual anatomy and clinical complexity vary, exact quotes require an in-person clinical exam. Below is an educational breakdown of how dental procedures are structured:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 font-extrabold">
                  <th className="p-4">Dental Procedure</th>
                  <th className="p-4">Pricing Basis</th>
                  <th className="p-4">Primary Cost Influencing Factors</th>
                  <th className="p-4">Learn More</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="p-4 font-bold text-slate-900">Doctor Consultation</td>
                  <td className="p-4 text-emerald-700 font-bold">₹200 (Verified)</td>
                  <td className="p-4">Clinical visual examination, diagnosis & individualized treatment plan.</td>
                  <td className="p-4"><a href="/dentist-ghaziabad" onClick={(e) => handleLinkClick(e, '/dentist-ghaziabad')} className="text-blue-700 font-semibold hover:underline">Clinic Details</a></td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Root Canal Treatment (RCT)</td>
                  <td className="p-4">Case-Specific</td>
                  <td className="p-4">Front tooth vs molar, number of canals (1 to 4+), calcified canals, rotary instrumentation.</td>
                  <td className="p-4"><a href="/root-canal-treatment" onClick={(e) => handleLinkClick(e, '/root-canal-treatment')} className="text-blue-700 font-semibold hover:underline">RCT Guide</a></td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Dental Implants</td>
                  <td className="p-4">Case-Specific</td>
                  <td className="p-4">Implant fixture brand, bone grafting need, single tooth vs full arch, crown material.</td>
                  <td className="p-4"><a href="/dental-implants" onClick={(e) => handleLinkClick(e, '/dental-implants')} className="text-blue-700 font-semibold hover:underline">Implant Guide</a></td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Tooth Caps & Dental Crowns</td>
                  <td className="p-4">Material-Dependent</td>
                  <td className="p-4">Material choice: metal-free Zirconia (monolithic / layered), ceramic, or PFM crowns.</td>
                  <td className="p-4"><a href="/tooth-cap" onClick={(e) => handleLinkClick(e, '/tooth-cap')} className="text-blue-700 font-semibold hover:underline">Crown Guide</a></td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Teeth Cleaning & Scaling</td>
                  <td className="p-4">Deposit Severity</td>
                  <td className="p-4">Extent of calculus deposits, subgingival plaque depth, presence of gingival pockets.</td>
                  <td className="p-4"><a href="/teeth-cleaning" onClick={(e) => handleLinkClick(e, '/teeth-cleaning')} className="text-blue-700 font-semibold hover:underline">Scaling Guide</a></td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-slate-900">Wisdom Tooth Extraction</td>
                  <td className="p-4">Impaction Complexity</td>
                  <td className="p-4">Simple erupted extraction vs surgical bone troughing for horizontal/impacted molars.</td>
                  <td className="p-4"><a href="/wisdom-tooth-extraction" onClick={(e) => handleLinkClick(e, '/wisdom-tooth-extraction')} className="text-blue-700 font-semibold hover:underline">Wisdom Tooth</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Why One-Price-Fits-All is Misleading */}
        <section className="bg-amber-50/70 border border-amber-200 rounded-3xl p-6 sm:p-10 space-y-4">
          <div className="flex items-center gap-2 text-amber-800 font-extrabold text-sm uppercase">
            <ShieldAlert className="w-5 h-5 text-amber-600" />
            <span>Ethical Healthcare Notice</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-amber-950">
            Why Universal Dental Price Tags Online Can Be Misleading
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed">
            Unlike commercial goods, every tooth has a unique anatomical structure and nerve configuration. Advertising blanket procedure costs online without inspecting bone condition or decay depth often leads to misleading expectations.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            At <strong>Oracle Dental Clinic</strong>, Dr. Prashant Kumar Vats, BDS performs an in-person diagnostic evaluation for ₹200 to establish the exact condition of the tooth and present transparent, tailored pricing before beginning any work.
          </p>
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
