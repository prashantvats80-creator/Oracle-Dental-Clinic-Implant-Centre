import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Clock,
  MapPin,
  AlertCircle,
  HelpCircle,
  Activity,
  Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface DentalBridgeCostPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function DentalBridgeCostPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: DentalBridgeCostPageProps) {
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
    const title = "Dental Bridge Cost in Ghaziabad | Dental Bridge Price | Oracle Dental Clinic";
    const description = "Transparent dental bridge cost in Ghaziabad. Learn about Zirconia & PFM bridges, unit calculations, implant bridges & alternatives. Consultation fee ₹200.";
    const pageUrl = `${window.location.origin}/dental-bridge-cost-ghaziabad`;

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
    setMetaTag("name", "keywords", "dental bridge cost Ghaziabad, dental bridge price Ghaziabad, teeth bridge cost, missing tooth bridge cost, dental bridge near me, zirconia bridge cost Ghaziabad, 3 unit bridge price Ghaziabad");

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

    // Schema: Service, WebPage, BreadcrumbList
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebPage",
          "@id": `${pageUrl}#webpage`,
          "url": pageUrl,
          "name": title,
          "description": description,
          "breadcrumb": {
            "@id": `${pageUrl}#breadcrumb`
          },
          "isPartOf": {
            "@type": "WebSite",
            "@id": `${window.location.origin}/#website`
          }
        },
        {
          "@type": "BreadcrumbList",
          "@id": `${pageUrl}#breadcrumb`,
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": `${window.location.origin}/`
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Dental Bridges",
              "item": `${window.location.origin}/dental-bridges`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Dental Bridge Cost in Ghaziabad",
              "item": pageUrl
            }
          ]
        },
        {
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          "name": "Dental Bridge Prosthetics & Fixed Restoration",
          "serviceType": "Prosthodontics",
          "provider": {
            "@type": "Dentist",
            "name": "Oracle Dental Clinic",
            "telephone": "+91-7011961515",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Shop No. 47, KTS Complex, Jaat Chowk, near Dolphin Public School, Chipiyana Buzurg",
              "addressLocality": "Ghaziabad",
              "addressRegion": "Uttar Pradesh",
              "postalCode": "201009",
              "addressCountry": "IN"
            }
          },
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "Ghaziabad" },
            { "@type": "AdministrativeArea", "name": "Chipiyana Buzurg" },
            { "@type": "AdministrativeArea", "name": "Crossings Republik" },
            { "@type": "AdministrativeArea", "name": "Noida Extension" }
          ],
          "description": "Customized fixed dental bridges using premium Zirconia, E-Max ceramic, or PFM units to restore missing teeth with stability and natural aesthetics."
        }
      ]
    };

    let scriptTag = document.getElementById('dental-bridge-cost-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dental-bridge-cost-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById('dental-bridge-cost-schema');
      if (el) el.remove();
    };
  }, []);

  const faqs = [
    {
      q: "How is the cost of a dental bridge calculated?",
      a: "Dental bridge pricing is determined per 'unit'. A unit represents each individual crown in the bridge. For example, replacing one missing tooth typically requires a 3-unit bridge (two abutment crowns on adjacent supporting teeth plus one pontic artificial tooth in the middle). The total price depends on the number of units and the chosen material (e.g., metal-free Zirconia vs. PFM)."
    },
    {
      q: "What is the difference between Zirconia and PFM dental bridges?",
      a: "Porcelain-Fused-to-Metal (PFM) bridges use a cast metal substructure layered with tooth-colored porcelain, offering good chewing durability at an economical price. Zirconia bridges are 100% metal-free, digitally milled (CAD/CAM) from solid monolithic zirconia blocks, delivering exceptional fracture toughness, biocompatibility, and no dark metal lines at the gumline."
    },
    {
      q: "How does a dental bridge compare to a dental implant?",
      a: "Neither option is universally superior; each has distinct clinical advantages. A dental bridge restores missing teeth quickly in 2 visits without surgery, but requires preparing (trimming) adjacent healthy teeth for support crowns. A dental implant replaces the root independently without altering adjacent teeth, but requires minor surgical placement and integration time."
    },
    {
      q: "How long does a dental bridge last?",
      a: "With good oral hygiene, daily flossing under the pontic using specialized bridge threaders or water flossers, and regular 6-month checkups, a high-quality dental bridge typically lasts 10 to 15 years or longer."
    },
    {
      q: "Can a dental bridge replace multiple missing teeth?",
      a: "Yes. When two or three adjacent teeth are missing, longer bridges (such as 4-unit or 5-unit bridges) can be fabricated, provided the supporting abutment teeth have strong, healthy roots and dense jawbone support. Alternatively, an implant-supported bridge can span wider gaps without touching natural teeth."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Dental Bridges', path: '/dental-bridges' },
          { label: 'Dental Bridge Cost in Ghaziabad', path: '/dental-bridge-cost-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Bridge Prosthetics Pricing"
      />

      {/* Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Fixed Prosthodontics • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Dental Bridge Cost in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Replace missing teeth with fixed, natural-looking dental bridges. Learn how unit calculations, material choices (Zirconia vs. PFM), and abutment preparations determine cost, with transparent clinical evaluations for <strong>₹200</strong> at <strong>Oracle Dental Clinic</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton 
              id="bridge-cost-call-btn" 
              onClick={handleCall} 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="bridge-cost-wa-btn" 
              onClick={handleWhatsApp} 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Appointment</span>
            </InteractiveButton>
            {handleDirections && (
              <InteractiveButton 
                id="bridge-cost-dir-btn" 
                onClick={handleDirections} 
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-4 py-3.5 rounded-xl flex items-center gap-2 text-xs transition-all"
              >
                <MapPin className="w-4 h-4 text-amber-400" /> <span>Directions to Clinic</span>
              </InteractiveButton>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Clinic Transparency Banner */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Verified Clinic Facts</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Oracle Dental Clinic & Implant Center</h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Led by <strong>Dr. Prashant Kumar Vats, BDS</strong> • KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-3.5 text-center shrink-0 w-full md:w-auto">
            <span className="block text-[11px] font-bold text-blue-900 uppercase">Consultation Fee</span>
            <span className="text-2xl font-black text-blue-700">₹200</span>
            <span className="block text-[10px] text-slate-500 mt-0.5">Includes Abutment & Bite Assessment</span>
          </div>
        </div>

        {/* How Bridges Work & Unit Calculation */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Prosthetic Principles</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Understanding Dental Bridges & Unit Calculations
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              A dental bridge consists of two main anatomical parts: <strong>abutments</strong> (the natural support teeth on either side of the gap) and <strong>pontics</strong> (the artificial teeth suspended in between).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-blue-100 text-blue-900 px-2 py-0.5 rounded-md uppercase">The Unit Formula</span>
              <h3 className="font-bold text-base text-slate-900">How Units are Counted</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                To replace <strong>1 missing tooth</strong>, dentists create a <strong>3-unit bridge</strong> (2 abutment crowns + 1 pontic). To replace <strong>2 missing teeth</strong>, a <strong>4-unit bridge</strong> is fabricated. Costs are calculated per unit.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md uppercase">Foundation Check</span>
              <h3 className="font-bold text-base text-slate-900">Supporting Tooth Health</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Before bridge fabrication, Dr. Prashant Kumar Vats, BDS evaluates the supporting abutment teeth with X-rays to ensure roots have sufficient bone density and no hidden periapical infections.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-md uppercase">Treatment Timeline</span>
              <h3 className="font-bold text-base text-slate-900">Two Easy Appointments</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Visit 1 includes gentle tooth preparation, high-precision impressions, and temporary bridge placement. Visit 2 (a few days later) involves fitting, bite check, and permanent cementation.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <TreatmentImage 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
              alt="Custom dental bridge restoring missing teeth"
              caption="Precision-milled dental bridges restore complete chewing ability and prevent neighboring teeth from shifting."
            />
          </div>
        </section>

        {/* Material Comparison: Zirconia vs PFM */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Material Science</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Dental Bridge Materials: Zirconia vs. PFM
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              The primary factor influencing bridge price is the prosthetic material chosen:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md uppercase">Premium Bio-Ceramic</span>
                <span className="text-xs font-semibold text-slate-500">100% Metal-Free</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Monolithic Zirconia Bridges</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Milled via precision CAD/CAM technology from solid zirconium dioxide. Zirconia offers immense fracture resistance, ideal for long spans across back molars. Because there is no metal core, gums never develop dark grey margins over time.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Exceptional flexural strength exceeding 1100 MPa</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Biocompatible and gentle on opposing enamel</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Natural translucency mimicking tooth enamel</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold bg-blue-100 text-blue-900 px-2.5 py-1 rounded-md uppercase">Time-Tested Choice</span>
                <span className="text-xs font-semibold text-slate-500">Economical Restoration</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Porcelain-Fused-to-Metal (PFM)</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Constructed with an inner coping of cast medical-grade alloy overlaid with layers of tooth-colored feldspathic porcelain. PFM has decades of clinical success for back chewing teeth where budget-conscious durability is key.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Very economical per-unit pricing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Excellent load-bearing support for back molars</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Well-established laboratory manufacturing</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Bridge vs Implant vs Denture Comparison Table */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Tooth Replacement Alternatives</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Dental Bridge vs. Dental Implant vs. Removable Denture
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
              No single tooth replacement solution is universally best for every patient. Compare the key differences to decide what matches your oral condition:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-amber-400 font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Feature</th>
                  <th className="py-3 px-3">Dental Bridge</th>
                  <th className="py-3 px-3">Dental Implant</th>
                  <th className="py-3 px-3">Removable Denture</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-white">Stability</td>
                  <td className="py-3.5 px-3">Fixed (permanently cemented)</td>
                  <td className="py-3.5 px-3">Fixed (integrated with jawbone)</td>
                  <td className="py-3.5 px-3">Removable (taken out at night)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-white">Adjacent Teeth</td>
                  <td className="py-3.5 px-3">Requires minor trimming of supports</td>
                  <td className="py-3.5 px-3">Untouched (completely independent)</td>
                  <td className="py-3.5 px-3">Rest clasps rest on natural teeth</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-white">Treatment Time</td>
                  <td className="py-3.5 px-3">Fast: 5 to 7 days (2 appointments)</td>
                  <td className="py-3.5 px-3">3 to 6 months (bone integration)</td>
                  <td className="py-3.5 px-3">1 to 2 weeks (impressions + trial)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-white">Surgical Procedure</td>
                  <td className="py-3.5 px-3">No surgery required</td>
                  <td className="py-3.5 px-3">Minor in-chair surgical fixture</td>
                  <td className="py-3.5 px-3">No surgery required</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold border-t border-slate-800 pt-4">
            <a 
              href="/dental-bridges" 
              onClick={(e) => handleLinkClick(e, '/dental-bridges')}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
            >
              Dental Bridges Guide <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/missing-teeth" 
              onClick={(e) => handleLinkClick(e, '/missing-teeth')}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
            >
              Missing Teeth Solutions <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/dental-implants" 
              onClick={(e) => handleLinkClick(e, '/dental-implants')}
              className="text-blue-300 hover:text-white flex items-center gap-1.5"
            >
              Dental Implants Overview <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/dentures" 
              onClick={(e) => handleLinkClick(e, '/dentures')}
              className="text-slate-300 hover:text-white flex items-center gap-1.5"
            >
              Dentures Care & Cost <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/tooth-cap" 
              onClick={(e) => handleLinkClick(e, '/tooth-cap')}
              className="text-slate-300 hover:text-white flex items-center gap-1.5"
            >
              Tooth Cap / Crown Details <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Patient Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
              Clear clinical answers regarding dental bridge unit pricing, materials, and maintenance.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 pt-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 bg-white hover:bg-slate-50 transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-blue-600 shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
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

        {/* Bottom CTA Banner */}
        <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Restore Your Complete Smile Today</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Don't let missing teeth compromise your digestion, speech, or confidence. Visit Dr. Prashant Kumar Vats, BDS at Oracle Dental Clinic for a thorough ₹200 consultation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <InteractiveButton 
              id="bridge-bottom-call-btn" 
              onClick={handleCall} 
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" /> <span>Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="bridge-bottom-wa-btn" 
              onClick={handleWhatsApp} 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Desk</span>
            </InteractiveButton>
          </div>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-xs text-blue-200">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> Mon–Sun: 10 AM–2 PM, 5 PM–9 PM</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> KTS Complex, Jaat Chowk, Chipiyana Buzurg</span>
          </div>
        </section>

      </main>
    </div>
  );
}
