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
  Layers,
  Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface SmileMakeoverGhaziabadPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function SmileMakeoverGhaziabadPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: SmileMakeoverGhaziabadPageProps) {
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
    const title = "Smile Makeover in Ghaziabad | Cosmetic Dentistry | Oracle Dental Clinic";
    const description = "Comprehensive smile makeover in Ghaziabad. Custom veneers, teeth whitening, composite bonding & zirconia crowns by Dr. Prashant Kumar Vats. Fee ₹200.";
    const pageUrl = `${window.location.origin}/smile-makeover-ghaziabad`;

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
    setMetaTag("name", "keywords", "smile makeover Ghaziabad, cosmetic dentistry Ghaziabad, dental veneers Ghaziabad, composite bonding, aesthetic dentist Chipiyana Buzurg, teeth redesign");

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
              "name": "Cosmetic Dentistry",
              "item": `${window.location.origin}/teeth-whitening`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Smile Makeover in Ghaziabad",
              "item": pageUrl
            }
          ]
        },
        {
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          "name": "Comprehensive Smile Makeover & Aesthetic Dentistry",
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
          "description": "Multi-disciplinary cosmetic smile design combining porcelain veneers, composite bonding, in-office whitening, and gingival contouring."
        }
      ]
    };

    let scriptTag = document.getElementById('smile-makeover-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'smile-makeover-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById('smile-makeover-schema');
      if (el) el.remove();
    };
  }, []);

  const faqs = [
    {
      q: "What does a comprehensive smile makeover involve?",
      a: "A smile makeover is a customized aesthetic transformation plan combining multiple cosmetic and restorative treatments. Depending on your facial symmetry, lip dynamics, and tooth proportions, it may include porcelain veneers, composite edge bonding, in-office laser whitening, metal-free zirconia crowns, or gum recontouring."
    },
    {
      q: "How long does a full smile makeover take?",
      a: "Direct composite bonding and teeth whitening can often be completed in 1 to 2 appointments within a single week. Comprehensive porcelain veneer or crown transformations generally require 2 to 3 appointments over 10 to 14 days to allow custom fabrication by specialized dental laboratories."
    },
    {
      q: "Are smile makeover treatments permanent?",
      a: "Treatments like high-strength porcelain veneers and zirconia crowns are long-lasting restorative solutions with expected clinical lifespans of 10 to 15+ years when cared for with daily flossing, brushing, and regular checkups. Composite bonding may require occasional repolishing every few years."
    },
    {
      q: "How much does a smile makeover cost in Ghaziabad?",
      a: "Because each smile makeover is entirely personalized to the patient's individual dental anatomy and desired changes, costs vary based on the number of teeth treated and chosen materials. At Oracle Dental Clinic, Dr. Prashant Kumar Vats, BDS provides a comprehensive digital smile consultation and treatment plan for ₹200."
    },
    {
      q: "Will my smile makeover look fake or unnaturally white?",
      a: "No. Our aesthetic philosophy focuses on natural lifelike harmony. We consider your facial shape, skin undertone, lip curvature, and eye color to select shades that look radiantly healthy rather than artificial, maintaining natural translucency and micro-texture."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-purple-100 selection:text-purple-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Cosmetic Dentistry', path: '/teeth-whitening' },
          { label: 'Smile Makeover in Ghaziabad', path: '/smile-makeover-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Aesthetic Smile Design"
      />

      {/* Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-200 border border-purple-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Digital Cosmetic Dentistry • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Smile Makeover in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Transform chipped, discolored, gapped, or misaligned teeth into a harmonious, radiant smile. Explore customized porcelain veneers, cosmetic bonding, and laser whitening with <strong>Dr. Prashant Kumar Vats, BDS</strong> for <strong>₹200</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton 
              id="makeover-call-btn" 
              onClick={handleCall} 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="makeover-wa-btn" 
              onClick={handleWhatsApp} 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Appointment</span>
            </InteractiveButton>
            {handleDirections && (
              <InteractiveButton 
                id="makeover-dir-btn" 
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
            <div className="flex items-center gap-2 text-xs font-bold text-purple-700 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-purple-600" />
              <span>Verified Cosmetic Dentistry Practice</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Oracle Dental Clinic & Implant Center</h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Led by <strong>Dr. Prashant Kumar Vats, BDS</strong> • KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad.
            </p>
          </div>
          <div className="bg-purple-50 border border-purple-100 rounded-2xl px-5 py-3.5 text-center shrink-0 w-full md:w-auto">
            <span className="block text-[11px] font-bold text-purple-900 uppercase">Consultation Fee</span>
            <span className="text-2xl font-black text-purple-700">₹200</span>
            <span className="block text-[10px] text-slate-500 mt-0.5">Includes Facial & Smile Analysis</span>
          </div>
        </div>

        {/* Procedures in a Smile Makeover */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-purple-700 text-xs font-bold uppercase tracking-wider">Aesthetic Toolkit</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Cosmetic Solutions Customized for Your Face
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              Every smile is unique. We blend art and dental science to resolve specific aesthetic concerns:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-purple-100 text-purple-900 px-2.5 py-1 rounded-md uppercase">Veneers</span>
              <h3 className="text-lg font-bold text-slate-900">Porcelain & E-Max Veneers</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Ultra-thin, custom ceramic shells bonded to the front of teeth to correct deep stains, uneven lengths, chips, and mild gaps with permanent translucency.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-blue-100 text-blue-900 px-2.5 py-1 rounded-md uppercase">Bonding</span>
              <h3 className="text-lg font-bold text-slate-900">Composite Edge Bonding</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Single-visit artistic sculpting with micro-hybrid resin to repair chipped front teeth, close minor black triangles, and smooth irregular enamel borders.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md uppercase">Whitening</span>
              <h3 className="text-lg font-bold text-slate-900">Laser Teeth Whitening</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Safe clinical bleaching that lightens natural teeth by several shades, serving as a bright foundation before placing matched crowns or veneers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-md uppercase">Crowns</span>
              <h3 className="text-lg font-bold text-slate-900">Metal-Free Zirconia Crowns</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Lifelike monolithic zirconia caps for heavily broken down, root canal treated, or fractured teeth that need both structural strength and high beauty.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <TreatmentImage 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
              alt="Cosmetic smile makeover demonstration and dental aesthetic model"
              caption="Individualized smile designs consider lip line, incisal display, and gingival symmetry for stunning natural results."
            />
          </div>
        </section>

        {/* 4-Step Makeover Journey */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Aesthetic Journey</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The 4-Step Smile Design Process
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
              How Dr. Prashant Kumar Vats, BDS crafts your personalized dream smile:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-amber-400 font-bold text-xs">Step 1</span>
              <h3 className="text-white font-bold text-sm">Consultation & Photography</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                High-resolution clinical photography and intraoral records evaluate facial proportions and tooth shade baselines.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-cyan-400 font-bold text-xs">Step 2</span>
              <h3 className="text-white font-bold text-sm">Diagnostic Wax-Up Mockup</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Preview your future smile directly in your mouth with a temporary mockup before any tooth enamel is contoured.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-emerald-400 font-bold text-xs">Step 3</span>
              <h3 className="text-white font-bold text-sm">Conservative Preparation</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Minimal, microscopic enamel shaping preserves natural tooth vitality while creating space for ceramic restorations.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-rose-400 font-bold text-xs">Step 4</span>
              <h3 className="text-white font-bold text-sm">Permanent Bonding & Reveal</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Veneers or crowns are permanently bonded with resin cements, checked under natural lighting, and finely polished.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold border-t border-slate-800 pt-4">
            <a 
              href="/teeth-whitening-cost-ghaziabad" 
              onClick={(e) => handleLinkClick(e, '/teeth-whitening-cost-ghaziabad')}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
            >
              Teeth Whitening Cost <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/tooth-cap-cost-ghaziabad" 
              onClick={(e) => handleLinkClick(e, '/tooth-cap-cost-ghaziabad')}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
            >
              Tooth Cap & Crown Cost <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/chipped-tooth" 
              onClick={(e) => handleLinkClick(e, '/chipped-tooth')}
              className="text-purple-300 hover:text-white flex items-center gap-1.5"
            >
              Chipped Tooth Repair <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <span className="text-purple-700 text-xs font-bold uppercase tracking-wider">Patient Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
              Everything you need to know about transforming your smile at Oracle Dental Clinic.
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
                  <ChevronDown className={`w-4 h-4 text-purple-600 shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
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
        <section className="bg-gradient-to-r from-purple-900 via-slate-900 to-blue-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Begin Your Smile Transformation</h2>
            <p className="text-purple-100 text-sm leading-relaxed">
              Schedule your smile design evaluation with Dr. Prashant Kumar Vats, BDS. Experience compassionate consultation, transparent pricing, and predictable aesthetics for ₹200.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <InteractiveButton 
              id="makeover-bottom-call-btn" 
              onClick={handleCall} 
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" /> <span>Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="makeover-bottom-wa-btn" 
              onClick={handleWhatsApp} 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Desk</span>
            </InteractiveButton>
          </div>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-xs text-purple-200">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> Mon–Sun: 10 AM–2 PM, 5 PM–9 PM</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> KTS Complex, Jaat Chowk, Chipiyana Buzurg</span>
          </div>
        </section>

      </main>
    </div>
  );
}
