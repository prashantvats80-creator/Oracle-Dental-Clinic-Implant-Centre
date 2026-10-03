import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Layers,
  HelpCircle,
  Clock,
  MapPin,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface ToothFillingCostPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function ToothFillingCostPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: ToothFillingCostPageProps) {
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
    const title = "Tooth Filling Cost in Ghaziabad | Dental Filling Price | Oracle Dental Clinic";
    const description = "Transparent tooth filling cost in Ghaziabad. Learn about composite tooth-colored fillings, GIC restorations, decay depth & cost factors. Consultation fee ₹200.";
    const pageUrl = `${window.location.origin}/tooth-filling-cost-ghaziabad`;

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
    setMetaTag("name", "keywords", "tooth filling cost Ghaziabad, dental filling cost Ghaziabad, cavity filling cost, tooth filling price, dental filling near me, composite filling cost, tooth coloured filling price, cavity restoration Ghaziabad");

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
              "name": "Dental Fillings",
              "item": `${window.location.origin}/dental-fillings`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Tooth Filling Cost in Ghaziabad",
              "item": pageUrl
            }
          ]
        },
        {
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          "name": "Tooth Filling and Dental Cavity Restoration",
          "serviceType": "Restorative Dentistry",
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
          "description": "Composite and GIC tooth-colored cavity fillings to restore decayed enamel and dentin before pulpal involvement."
        }
      ]
    };

    let scriptTag = document.getElementById('tooth-filling-cost-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'tooth-filling-cost-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById('tooth-filling-cost-schema');
      if (el) el.remove();
    };
  }, []);

  const faqs = [
    {
      q: "How much does a dental filling cost in Ghaziabad?",
      a: "The cost of a tooth filling in Ghaziabad depends on whether the cavity is on a single surface or spans multiple surfaces, the depth of decay, and the material chosen (such as nano-hybrid composite or fluoride-releasing glass ionomer). At Oracle Dental Clinic, a thorough clinical evaluation and IOPA digital X-ray are performed for an initial consultation fee of ₹200 to give you an accurate, transparent cost estimate."
    },
    {
      q: "What is the difference between a cavity and a dental filling?",
      a: "A cavity (dental caries) is structural damage and mineral loss caused by plaque bacteria demineralizing enamel and dentin. A dental filling is the biocompatible restorative material placed after gently cleaning away infected decay, sealing the tooth and preventing further bacterial breakdown."
    },
    {
      q: "Are tooth-colored composite fillings safe and durable?",
      a: "Yes. Modern composite resins are made from ceramic and glass micro-particles suspended in a resin matrix. They bond directly to your natural tooth structure with dental adhesives, providing excellent strength and mimicking the exact natural shade of your enamel without containing mercury."
    },
    {
      q: "Is local anesthesia always needed for a tooth filling?",
      a: "For early, superficial enamel lesions, filling placement is typically painless and often does not require anesthesia. For deeper dentin cavities that sit closer to the dental nerve, local anesthesia is administered to ensure complete comfort during cavity preparation."
    },
    {
      q: "When does a tooth need a Root Canal (RCT) instead of a filling?",
      a: "A filling is only indicated when decay is confined to the outer enamel and middle dentin layers. Once bacteria penetrate the innermost dental pulp chamber causing severe throbbing pain or infection, a simple filling is no longer adequate and a root canal treatment is necessary to save the natural root."
    },
    {
      q: "Is tooth sensitivity normal after getting a filling?",
      a: "Mild, temporary sensitivity to cold or biting pressure can occasionally occur for a few days after restoring a deep cavity as the dental pulp recovers from inflammation. If biting pain or throbbing persists past one to two weeks, Dr. Prashant Kumar Vats will assess the bite height to make a quick micrometric adjustment."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Dental Fillings', path: '/dental-fillings' },
          { label: 'Tooth Filling Cost in Ghaziabad', path: '/tooth-filling-cost-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Dental Filling Pricing"
      />

      {/* Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Restorative Dentistry • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Tooth Filling Cost in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Protect your natural teeth by treating early decay before it reaches the nerve. Learn what determines cavity filling prices, differences between composite and glass ionomer (GIC) materials, and get an honest clinical evaluation for <strong>₹200</strong> at <strong>Oracle Dental Clinic</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton 
              id="filling-cost-call-btn" 
              onClick={handleCall} 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="filling-cost-wa-btn" 
              onClick={handleWhatsApp} 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Appointment</span>
            </InteractiveButton>
            {handleDirections && (
              <InteractiveButton 
                id="filling-cost-dir-btn" 
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
            <span className="block text-[10px] text-slate-500 mt-0.5">Includes Clinical Examination</span>
          </div>
        </div>

        {/* Cavity vs Dental Filling */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Clinical Fundamentals</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Cavity vs. Dental Filling: What You Need to Know
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              Dental decay begins quietly. Acid produced by oral bacteria gradually dissolves the calcium crystals in your outer enamel, forming microscopic pits that turn into visible black or brown cavities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold">
                <AlertCircle className="w-5 h-5 text-amber-700 shrink-0" />
                <h3 className="text-base font-bold">What is a Cavity?</h3>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                A cavity is an active bacterial infection of the tooth structure. Left untreated, it progressively burrows through the enamel into the dentin tubules, eventually invading the vascular pulp and triggering severe pain or dental abscess.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-3">
              <div className="flex items-center gap-2 text-blue-900 font-bold">
                <CheckCircle2 className="w-5 h-5 text-blue-700 shrink-0" />
                <h3 className="text-base font-bold">What is a Dental Filling?</h3>
              </div>
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                A filling is the biocompatible restorative treatment that arrests this process. The decayed, soft tooth structure is gently cleaned away, and the prepared space is chemically sealed with modern composite or glass ionomer material.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <TreatmentImage 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
              alt="Dental filling procedure restoring decayed tooth surface"
              caption="Modern composite restorations blend naturally with adjacent enamel, restoring full chewing function."
            />
          </div>
        </section>

        {/* Filling Materials & Cost Influences */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Restoration Materials</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Composite vs. Glass Ionomer (GIC) Fillings
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              Different tooth locations and decay patterns call for specialized restorative chemistries. We do not use outdated silver amalgam materials containing mercury:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold bg-blue-100 text-blue-900 px-2.5 py-1 rounded-md uppercase">Most Popular Choice</span>
                <span className="text-xs font-semibold text-slate-500">Front & Back Teeth</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Composite Tooth-Colored Fillings</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Formulated from nano-hybrid ceramic particles in an adhesive resin matrix. Composites are cured with a blue curing light, bonding directly to enamel for seamless aesthetics and strong resistance against everyday biting stress.
              </p>
              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Precise shade matching to natural enamel
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Preserves maximum healthy natural tooth structure
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Immediate load-bearing function once cured
                </li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md uppercase">Fluoride Releasing</span>
                <span className="text-xs font-semibold text-slate-500">Root Decay & Children</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Glass Ionomer Cement (GIC)</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                A silicate glass and polyacrylic acid formula that forms a chemical bond with dentin. GIC actively leaches small amounts of fluoride over time, helping remineralize surrounding tooth margins and preventing secondary decay.
              </p>
              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Continuous fluoride release to protect weak roots
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Ideal for gumline cervical erosion and baby teeth
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Excellent thermal compatibility with natural tooth tissue
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Factors Determining Tooth Filling Cost */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Transparent Fee Factors</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Key Factors That Determine Filling Cost in Ghaziabad
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              Because cavity depth and structural involvement vary drastically from one patient to another, prices cannot be uniform. Here is what influences your treatment plan:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase">Factor 1</span>
              <h3 className="font-bold text-base text-slate-900">Number of Tooth Surfaces</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                A single-surface cavity on the chewing surface (Class I) requires less material and chairside shaping than a multi-surface cavity involving the interdental contact (Class II or IV).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase">Factor 2</span>
              <h3 className="font-bold text-base text-slate-900">Depth of Decay & Liners</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Deep cavities close to the pulp require therapeutic calcium hydroxide or glass ionomer insulating bases beneath the composite to calm nerve endings and prevent thermal sensitivity.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase">Factor 3</span>
              <h3 className="font-bold text-base text-slate-900">Diagnostic Digital X-Ray</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                An intraoral periapical radiograph (IOPA) is taken when decay is between teeth or deep, confirming whether the pulpal chamber remains healthy and uninfected.
              </p>
            </div>
          </div>
        </section>

        {/* Filling vs Root Canal vs Crown Comparison Table */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Clinical Decision Guide</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Filling vs. Root Canal (RCT) vs. Dental Crown
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
              Understanding which clinical restoration is appropriate ensures you never undergo unnecessary procedures while preventing under-treatment of deep decay:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-amber-400 font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Condition</th>
                  <th className="py-3 px-3">Dental Filling</th>
                  <th className="py-3 px-3">Root Canal (RCT)</th>
                  <th className="py-3 px-3">Tooth Cap / Crown</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-white">Decay Extent</td>
                  <td className="py-3.5 px-3">Enamel & superficial/medium dentin</td>
                  <td className="py-3.5 px-3">Pulp nerve chamber involved</td>
                  <td className="py-3.5 px-3">&gt;50% tooth structure missing or post-RCT</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-white">Symptoms</td>
                  <td className="py-3.5 px-3">Mild food trapping, brief cold twinges</td>
                  <td className="py-3.5 px-3">Throbbing pain, night ache, chewing pain</td>
                  <td className="py-3.5 px-3">Weakened tooth walls, risk of splitting</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-white">Objective</td>
                  <td className="py-3.5 px-3">Seal cavity & restore anatomy</td>
                  <td className="py-3.5 px-3">Disinfect root canals & relieve pain</td>
                  <td className="py-3.5 px-3">360° armor against chewing fractures</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-white">Visits Required</td>
                  <td className="py-3.5 px-3">Single sitting (20–40 mins)</td>
                  <td className="py-3.5 px-3">Single sitting or 2 appointments</td>
                  <td className="py-3.5 px-3">2 appointments (prep + lab fitting)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold">
            <a 
              href="/dental-fillings" 
              onClick={(e) => handleLinkClick(e, '/dental-fillings')}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
            >
              Learn About Fillings <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/cavity-treatment" 
              onClick={(e) => handleLinkClick(e, '/cavity-treatment')}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
            >
              Cavity Treatment Guide <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/root-canal-treatment" 
              onClick={(e) => handleLinkClick(e, '/root-canal-treatment')}
              className="text-blue-300 hover:text-white flex items-center gap-1.5"
            >
              Root Canal Overview <ArrowRight className="w-3.5 h-3.5" />
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

        {/* Post-Filling Care & Sensitivity */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Patient Care & Recovery</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Sensitivity After Filling & Long-Term Longevity
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              Most patients leave the clinic with immediate relief. However, understanding what to expect during healing avoids unnecessary worry:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-bold text-base text-slate-900">Mild Temperature Sensitivity</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                When a cavity is deep in dentin, dental nerves experience transient inflammation called reversible pulpitis. Mild sensitivity to ice water or hot soup typically subsides within 3 to 10 days as the tooth produces reparative tertiary dentin.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <h3 className="font-bold text-base text-slate-900">Bite Height Check</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                If the filling is just 50 microns too high, biting down can cause sharp discomfort. A quick 2-minute micro-adjustment with articulating paper at Oracle Dental Clinic resolves this immediately without any discomfort.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center gap-3 text-xs text-blue-900">
            <Clock className="w-4 h-4 text-blue-700 shrink-0" />
            <span>Regular professional scaling every 6 months prevents plaque accumulation along filling margins, preventing recurrent decay.</span>
            <a 
              href="/teeth-cleaning" 
              onClick={(e) => handleLinkClick(e, '/teeth-cleaning')}
              className="ml-auto font-bold underline hover:text-blue-700 shrink-0"
            >
              Teeth Cleaning Guide
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Patient Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
              Clear clinical answers regarding cavity fillings, pricing factors, and care.
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
            <h2 className="text-2xl sm:text-3xl font-extrabold">Schedule Your Tooth Cavity Evaluation</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Early tooth decay caught in time saves you from root canal treatments and crowns. Visit Dr. Prashant Kumar Vats, BDS at Oracle Dental Clinic for a thorough ₹200 consultation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <InteractiveButton 
              id="filling-bottom-call-btn" 
              onClick={handleCall} 
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" /> <span>Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="filling-bottom-wa-btn" 
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
