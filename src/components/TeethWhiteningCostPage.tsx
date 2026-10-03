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

interface TeethWhiteningCostPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function TeethWhiteningCostPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: TeethWhiteningCostPageProps) {
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
    const title = "Teeth Whitening Cost in Ghaziabad | Laser & In-Office Price | Oracle Dental Clinic";
    const description = "Transparent teeth whitening cost in Ghaziabad. Compare in-office laser whitening, home bleaching trays, and scaling polish. Consultation fee ₹200.";
    const pageUrl = `${window.location.origin}/teeth-whitening-cost-ghaziabad`;

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
    setMetaTag("name", "keywords", "teeth whitening cost Ghaziabad, teeth bleaching price Ghaziabad, laser teeth whitening cost, in office bleaching price, yellow teeth cleaning cost Ghaziabad");

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
              "name": "Teeth Whitening",
              "item": `${window.location.origin}/teeth-whitening`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Teeth Whitening Cost in Ghaziabad",
              "item": pageUrl
            }
          ]
        },
        {
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          "name": "Professional Teeth Whitening & Bleaching",
          "serviceType": "Cosmetic Dentistry",
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
          "description": "Safe, clinic-supervised teeth whitening and enamel stain removal delivering noticeable shade lightening with minimal sensitivity."
        }
      ]
    };

    let scriptTag = document.getElementById('teeth-whitening-cost-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'teeth-whitening-cost-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById('teeth-whitening-cost-schema');
      if (el) el.remove();
    };
  }, []);

  const faqs = [
    {
      q: "How much does professional teeth whitening cost in Ghaziabad?",
      a: "Teeth whitening cost depends on the method chosen: single-visit chairside in-office power whitening, dentist-supervised custom home bleaching trays, or preliminary ultrasonic scaling for extrinsic surface stains. At Oracle Dental Clinic, Dr. Prashant Kumar Vats, BDS conducts an initial shade assessment and enamel health check for ₹200 to give an honest, transparent estimate."
    },
    {
      q: "What is the difference between teeth cleaning (scaling) and teeth whitening?",
      a: "Teeth cleaning (scaling) removes bacterial tartar, calculus deposits, and superficial food stains to restore natural tooth enamel and healthy gums. Teeth whitening (bleaching) uses peroxide-based gel to penetrate microscopic enamel tubules and oxidize deep intrinsic yellow stains, lightening the natural shade of the tooth."
    },
    {
      q: "Does teeth whitening damage enamel or cause lasting sensitivity?",
      a: "No. When performed under professional dental supervision using medically approved pH-balanced formulations, whitening does not erode enamel. Some patients experience temporary mild sensitivity for 24 to 48 hours, which is safely managed with desensitizing fluoride pastes."
    },
    {
      q: "How many shades lighter will my teeth become?",
      a: "Most patients achieve 3 to 7 shades of visible lightening depending on their starting enamel shade, age, and whether the discoloration is caused by tea, coffee, smoking, or natural aging. Severe fluorosis or tetracycline stains may require composite bonding or porcelain veneers for optimal results."
    },
    {
      q: "How long do teeth whitening results last?",
      a: "Results typically last 1 to 3 years. Avoiding heavy staining agents (gutkha, paan, black coffee, red wine) and maintaining regular 6-month preventive scaling ensures prolonged brightness."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Teeth Whitening', path: '/teeth-whitening' },
          { label: 'Teeth Whitening Cost in Ghaziabad', path: '/teeth-whitening-cost-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Cosmetic Dentistry Pricing"
      />

      {/* Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Smile Aesthetics • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Teeth Whitening Cost in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Brighten your smile safely and effectively with clinical in-office whitening and dentist-supervised take-home kits. Understand pricing factors, stain types, and shade lightening expectations with consultations for <strong>₹200</strong> at <strong>Oracle Dental Clinic</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton 
              id="whitening-cost-call-btn" 
              onClick={handleCall} 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="whitening-cost-wa-btn" 
              onClick={handleWhatsApp} 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Appointment</span>
            </InteractiveButton>
            {handleDirections && (
              <InteractiveButton 
                id="whitening-cost-dir-btn" 
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
            <span className="block text-[10px] text-slate-500 mt-0.5">Includes Tooth Shade Analysis</span>
          </div>
        </div>

        {/* Whitening Methods Comparison */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Treatment Modalities</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Whitening Options: In-Office vs Take-Home Bleaching
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              Depending on your timeline, aesthetic goals, and tooth sensitivity history, different whitening modalities are available:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md uppercase">Fastest Results</span>
              <h3 className="text-xl font-bold text-slate-900">Chairside In-Office Bleaching</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Performed entirely chairside in a 45–60 minute session. Gingival barrier protects delicate gums while high-grade whitening gel is activated for maximum shade lightening.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Immediate 4–7 shades improvement</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Complete gum barrier protection</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Ideal for weddings, interviews & events</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-blue-100 text-blue-900 px-2.5 py-1 rounded-md uppercase">Gradual & Controlled</span>
              <h3 className="text-xl font-bold text-slate-900">Custom Take-Home Trays</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Custom-molded transparent trays matched to your exact dental impressions, paired with clinical-strength carbamide peroxide gel worn 30–60 minutes daily over 10–14 days.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Gradual shade control at home</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Reduced post-treatment sensitivity</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Reusable custom trays for future touch-ups</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-md uppercase">Foundational Clean</span>
              <h3 className="text-xl font-bold text-slate-900">Ultrasonic Scaling & Polish</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Often recommended prior to bleaching. Removes surface tobacco, coffee, and food stains along with hard calculus deposits to expose natural tooth enamel.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Restores natural baseline shade</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Ensures uniform bleaching gel contact</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Reverses gingivitis and bad breath</li>
              </ul>
            </div>
          </div>

          <div className="pt-2">
            <TreatmentImage 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
              alt="Professional teeth whitening treatment and dental shade guide"
              caption="Professional shade guide evaluation helps track real whitening progress before and after treatment."
            />
          </div>
        </section>

        {/* Pricing Factors Breakdown */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Cost Determinants</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              What Factors Determine Teeth Whitening Cost in Ghaziabad?
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
              Unlike over-the-counter whitening strips that often cause patchy results and gum burning, dental clinic bleaching is medically calibrated:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-amber-400 font-bold text-xs">Factor 1</span>
              <h3 className="text-white font-bold text-sm">Stain Classification</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Extrinsic surface stains (food, tea, tobacco) respond swiftly, while intrinsic discoloration requires deeper bleaching penetration.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-cyan-400 font-bold text-xs">Factor 2</span>
              <h3 className="text-white font-bold text-sm">Existing Fillings & Crowns</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Bleaching gels only whiten natural enamel; composite fillings or ceramic crowns do not change shade and may need shade matching afterward.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-emerald-400 font-bold text-xs">Factor 3</span>
              <h3 className="text-white font-bold text-sm">Pre-Bleaching Scaling</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                If calculus is present on tooth surfaces, ultrasonic scaling is essential first so bleaching agents contact enamel evenly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-rose-400 font-bold text-xs">Factor 4</span>
              <h3 className="text-white font-bold text-sm">Desensitizing Therapy</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Patients with pre-existing sensitive teeth receive specialized desensitizing agents and lower gel concentrations to ensure zero pain.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold border-t border-slate-800 pt-4">
            <a 
              href="/teeth-whitening" 
              onClick={(e) => handleLinkClick(e, '/teeth-whitening')}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
            >
              Teeth Whitening Overview <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/teeth-cleaning-cost-ghaziabad" 
              onClick={(e) => handleLinkClick(e, '/teeth-cleaning-cost-ghaziabad')}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
            >
              Teeth Cleaning Cost Guide <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/dental-treatment-cost-ghaziabad" 
              onClick={(e) => handleLinkClick(e, '/dental-treatment-cost-ghaziabad')}
              className="text-blue-300 hover:text-white flex items-center gap-1.5"
            >
              All Dental Treatment Costs <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Patient Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
              Clear clinical guidance on teeth bleaching costs, safety, sensitivity, and longevity.
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
            <h2 className="text-2xl sm:text-3xl font-extrabold">Ready for a Brighter, Whiter Smile?</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Book your shade assessment with Dr. Prashant Kumar Vats, BDS at Oracle Dental Clinic. Honest guidance, clinical safety, and transparent pricing for ₹200.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <InteractiveButton 
              id="whitening-bottom-call-btn" 
              onClick={handleCall} 
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" /> <span>Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="whitening-bottom-wa-btn" 
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
