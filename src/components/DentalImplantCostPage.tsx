import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Layers,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface DentalImplantCostPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function DentalImplantCostPage({
  handleCall,
  handleWhatsApp,
  navigateToHome,
  navigateToPath
}: DentalImplantCostPageProps) {
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
    const title = "Dental Implant Cost in Ghaziabad | Oracle Dental Clinic";
    const description = "Comprehensive clinical guide to dental implant costs in Ghaziabad. Learn about implant components, single vs full-mouth implants, bone grafting & consultation fee ₹200.";
    const pageUrl = `${window.location.origin}/dental-implant-cost-ghaziabad`;

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
    setMetaTag("name", "keywords", "dental implant cost Ghaziabad, dental implant price Ghaziabad, implant cost near me, tooth implant cost Ghaziabad, dental implant cost near me, single tooth implant cost, full mouth dental implant cost");

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
      q: "What components make up a complete dental implant?",
      a: "A dental implant consists of three key components: 1) The titanium implant fixture placed securely into the jawbone, 2) The abutment connector, and 3) The custom-milled prosthetic crown attached on top."
    },
    {
      q: "What factors affect the cost of dental implants?",
      a: "Costs vary depending on the patient's existing jawbone density, whether preparatory bone grafting or sinus lifts are required, the number of missing teeth to replace, and the choice of final crown restoration (such as high-translucency Zirconia)."
    },
    {
      q: "How can I get an accurate cost estimate for my implants?",
      a: "We recommend scheduling a clinical consultation (₹200) with Dr. Prashant Kumar Vats, BDS at Oracle Dental Clinic in Chipiyana Buzurg, Ghaziabad. We evaluate your bone condition and provide a transparent, personalized breakdown."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Dental Implants', path: '/dental-implants' },
          { label: 'Dental Implant Cost in Ghaziabad', path: '/dental-implant-cost-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Implant Pricing Guide"
      />

      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Permanent Tooth Replacement • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Dental Implant Cost in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Dental implants provide the most stable, natural-feeling restoration for missing teeth. Discover how implant pricing is determined, what procedures are involved, and how to get an authentic clinical evaluation at <strong>Oracle Dental Clinic</strong> for <strong>₹200</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton id="imp-cost-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2">
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="imp-cost-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Consultation</span>
            </InteractiveButton>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Implant Structure Breakdown */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Anatomical Components</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Understanding What an Implant Procedure Entails
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                When evaluating dental implant costs, it is important to know that a complete restoration involves three distinct stages:
              </p>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>1. Implant Fixture:</strong> A biocompatible titanium artificial root surgically placed into the alveolar jawbone.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>2. Abutment Connector:</strong> An intermediate titanium or ceramic post connecting the fixture to the crown.</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>3. Final Prosthetic Crown:</strong> A lifelike, custom-shaded crown (e.g., Zirconia or PFM) that restores chewing and aesthetics.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <TreatmentImage
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
                alt="Dental implant treatment tools and precision operatory in Ghaziabad"
                caption="Precision implant dentistry: Restoring natural aesthetics and bone foundation."
                aspectRatio="4/3"
              />
            </div>
          </div>
        </section>

        {/* Factors Influencing Cost */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Key Factors Determining Total Implant Cost</h2>
            <p className="text-slate-600 text-sm max-w-3xl">
              Implant pricing is shaped by biological, surgical, and restorative considerations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">1</div>
              <h3 className="font-bold text-base text-slate-900">Bone Density & Grafting</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                If teeth have been missing for years, the jawbone may have resorbed. Bone augmentation or sinus lift procedures may be required to build a solid foundation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">2</div>
              <h3 className="font-bold text-base text-slate-900">Number of Missing Teeth</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Replacing a single tooth requires one fixture. Multiple missing teeth can often be restored using an implant-supported bridge, reducing the number of fixtures needed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">3</div>
              <h3 className="font-bold text-base text-slate-900">Prosthetic Crown Material</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Monolithic Zirconia crowns offer superior fracture resistance and realistic translucency compared to traditional porcelain-fused-to-metal (PFM) caps.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links to Related Alternatives */}
        <section className="bg-slate-100 rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Compare Other Tooth Replacement Options</h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Explore alternative solutions depending on your clinical needs and preferences:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs font-bold text-blue-700">
            <a href="/dental-implants" onClick={(e) => handleLinkClick(e, '/dental-implants')} className="p-3 bg-white rounded-xl border border-slate-200 hover:underline flex justify-between items-center">
              Dental Implants Guide <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="/missing-teeth" onClick={(e) => handleLinkClick(e, '/missing-teeth')} className="p-3 bg-white rounded-xl border border-slate-200 hover:underline flex justify-between items-center">
              Missing Teeth Overview <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="/dental-bridges" onClick={(e) => handleLinkClick(e, '/dental-bridges')} className="p-3 bg-white rounded-xl border border-slate-200 hover:underline flex justify-between items-center">
              Fixed Dental Bridges <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a href="/dentures" onClick={(e) => handleLinkClick(e, '/dentures')} className="p-3 bg-white rounded-xl border border-slate-200 hover:underline flex justify-between items-center">
              Complete Dentures <ArrowRight className="w-3.5 h-3.5" />
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
