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
  HelpCircle,
  AlertCircle,
  Activity
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface TeethCleaningCostPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function TeethCleaningCostPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: TeethCleaningCostPageProps) {
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
    const title = "Teeth Cleaning Cost in Ghaziabad | Scaling Price | Oracle Dental Clinic";
    const description = "Transparent teeth cleaning and scaling cost in Ghaziabad. Learn about tartar removal, ultrasonic scaling, polishing & gum disease prevention. Consultation ₹200.";
    const pageUrl = `${window.location.origin}/teeth-cleaning-cost-ghaziabad`;

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
    setMetaTag("name", "keywords", "teeth cleaning cost Ghaziabad, scaling cost Ghaziabad, dental cleaning cost, teeth scaling price, scaling dentist near me, tartar removal price Ghaziabad, ultrasonic scaling cost, dental prophylaxis price");

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
              "name": "Teeth Cleaning & Scaling",
              "item": `${window.location.origin}/teeth-cleaning`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Teeth Cleaning Cost in Ghaziabad",
              "item": pageUrl
            }
          ]
        },
        {
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          "name": "Teeth Cleaning, Ultrasonic Scaling and Dental Polishing",
          "serviceType": "Preventive Dentistry",
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
          "description": "Professional ultrasonic scaling and polishing to remove stubborn calculus, stain deposits, and prevent gingivitis and bone loss."
        }
      ]
    };

    let scriptTag = document.getElementById('teeth-cleaning-cost-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'teeth-cleaning-cost-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById('teeth-cleaning-cost-schema');
      if (el) el.remove();
    };
  }, []);

  const faqs = [
    {
      q: "Does teeth scaling damage natural enamel or make teeth loose?",
      a: "No. This is a common myth. Modern ultrasonic dental scalers use high-frequency microscopic vibrations combined with a cooling water spray. The tip vibrates against hardened calculus (tartar) to crumble it off without cutting or scratching healthy enamel. When heavy tartar that was falsely cementing loose, diseased teeth is cleaned away, gums heal and tighten around natural roots."
    },
    {
      q: "How much does professional teeth cleaning cost in Ghaziabad?",
      a: "Teeth cleaning costs vary depending on whether you need routine supra-gingival scaling for mild plaque and stains, or deeper sub-gingival scaling and root planing for advanced tartar and periodontal pockets. At Oracle Dental Clinic, Dr. Prashant Kumar Vats, BDS provides a transparent oral evaluation for an initial consultation fee of ₹200 to assess your gum health and determine exact requirements."
    },
    {
      q: "What is the clinical difference between teeth scaling and teeth whitening?",
      a: "Scaling is a preventive health treatment that removes bacterial plaque, hard calculus, and external surface stains from tea or coffee, restoring natural clean tooth color. Teeth whitening (bleaching) is a cosmetic procedure that penetrates deeper enamel layers using safe peroxide gels to lighten the inherent genetic baseline shade of your teeth."
    },
    {
      q: "Why do teeth sometimes feel slightly sensitive after scaling?",
      a: "When thick layers of tartar are removed from the gumline, previously covered root dentin is briefly exposed to mouth air and cold temperatures. This mild sensation is temporary, and as the gums recover and you use a gentle desensitizing paste for a few days, the sensitivity resolves completely."
    },
    {
      q: "How often should I get my teeth cleaned professionally?",
      a: "For most healthy individuals, a routine scaling and polishing every 6 months is recommended to prevent gingivitis and bad breath. Patients with a history of gum disease, braces, or diabetes benefit from a recall visit every 3 to 4 months."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Teeth Cleaning & Scaling', path: '/teeth-cleaning' },
          { label: 'Teeth Cleaning Cost in Ghaziabad', path: '/teeth-cleaning-cost-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Preventive Care Pricing"
      />

      {/* Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Preventive Gum Care • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Teeth Cleaning and Scaling Cost in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Eliminate stubborn calculus, stop bleeding gums, and restore oral freshness with advanced ultrasonic scaling and polishing. Understand the clinical factors behind dental cleaning costs, with transparent evaluations for <strong>₹200</strong> at <strong>Oracle Dental Clinic</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton 
              id="cleaning-cost-call-btn" 
              onClick={handleCall} 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="cleaning-cost-wa-btn" 
              onClick={handleWhatsApp} 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Appointment</span>
            </InteractiveButton>
            {handleDirections && (
              <InteractiveButton 
                id="cleaning-cost-dir-btn" 
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
            <span className="block text-[10px] text-slate-500 mt-0.5">Includes Gum & Calculus Examination</span>
          </div>
        </div>

        {/* Why Scaling is Crucial */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Oral Hygiene Science</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Regular Teeth Cleaning & Scaling is Essential
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              Every day, saliva minerals and food debris combine to form a soft sticky film called dental plaque. When plaque is not fully removed by daily brushing, it mineralizes within 24 to 72 hours into rock-hard <strong>calculus (tartar)</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-md uppercase">Cannot Be Brushed Away</span>
              <h3 className="font-bold text-base text-slate-900">Tartar (Calculus)</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Once plaque calcifies into tartar, no toothbrush, toothpaste, or home remedy can dislodge it. Only precision ultrasonic scaling instruments can safely shatter and flush it away.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-rose-100 text-rose-900 px-2 py-0.5 rounded-md uppercase">Early Warning Sign</span>
              <h3 className="font-bold text-base text-slate-900">Gingivitis Prevention</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Bacterial toxins in tartar irritate the delicate gingiva, causing swollen, puffy, and bleeding gums when brushing or spitting. Scaling completely reverses early gingivitis.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-md uppercase">Fresh Breath</span>
              <h3 className="font-bold text-base text-slate-900">Eliminating Bad Breath</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Deep bacterial pockets beneath the gumline release volatile sulfur compounds responsible for chronic halitosis. Scaling and polishing thoroughly sanitize these hiding spots.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <TreatmentImage 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
              alt="Professional ultrasonic scaling treatment cleaning teeth"
              caption="Ultrasonic scaling uses gentle vibrations and cooling irrigation to safely remove hardened tartar without scratching enamel."
            />
          </div>
        </section>

        {/* Factors Influencing Cleaning Cost */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Price Transparency</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Teeth Cleaning Costs Vary in Ghaziabad
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              Professional dental prophylaxis is tailored to the exact state of your gum tissues. Key clinical variables include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold bg-blue-100 text-blue-900 px-2.5 py-1 rounded-md uppercase">Level 1</span>
                <span className="text-xs font-semibold text-slate-500">Routine Prophylaxis</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Routine Supra-Gingival Scaling & Polishing</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Designed for patients who maintain regular dental hygiene with minimal to moderate tartar above the gumline. Includes ultrasonic cleaning followed by rotary prophylactic paste polishing to smooth enamel surfaces.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Removes external coffee, tea, and tobacco stains</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Smooths enamel to retard future plaque accumulation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Completed comfortably in a single 25–35 minute session</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md uppercase">Level 2</span>
                <span className="text-xs font-semibold text-slate-500">Deep Periodontal Care</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Deep Sub-Gingival Scaling & Root Planing</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Necessary when tartar has extended deep below the gumline into periodontal pockets, causing early bone loss or periodontitis. Specialized micro-curettes gently plane diseased root cementum to allow gum tissues to reattach.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Flushes deep subgingival bacterial bio-films</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Halts progressive jawbone loss around mobile teeth</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> May be staged by quadrant when deposits are heavy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scaling vs Teeth Whitening Comparison */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Patient Education</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Teeth Cleaning vs. Teeth Whitening: Understanding the Difference
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
              Patients frequently confuse scaling with cosmetic teeth whitening. While both enhance your smile, their medical purposes are completely distinct:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-700 text-amber-400 font-bold uppercase text-[11px]">
                  <th className="py-3 px-3">Criteria</th>
                  <th className="py-3 px-3">Teeth Cleaning & Scaling</th>
                  <th className="py-3 px-3">Professional Teeth Whitening</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-white">Primary Goal</td>
                  <td className="py-3.5 px-3">Therapeutic: Cleans tartar, bacteria, and external stains</td>
                  <td className="py-3.5 px-3">Cosmetic: Lightens inherent enamel baseline shade</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-white">Mechanism</td>
                  <td className="py-3.5 px-3">Ultrasonic micro-vibrations & water spray</td>
                  <td className="py-3.5 px-3">Oxidizing dental bleaching gels (e.g. hydrogen peroxide)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-white">Gum Health Impact</td>
                  <td className="py-3.5 px-3">Crucial: Resolves bleeding gums, stops periodontitis</td>
                  <td className="py-3.5 px-3">Requires healthy, infection-free gums before starting</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-3 font-semibold text-white">Frequency</td>
                  <td className="py-3.5 px-3">Every 6 months as part of preventive health</td>
                  <td className="py-3.5 px-3">Periodic touch-up every 12 to 24 months as desired</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold">
            <a 
              href="/teeth-cleaning" 
              onClick={(e) => handleLinkClick(e, '/teeth-cleaning')}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
            >
              Full Teeth Cleaning Guide <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/gum-disease-treatment" 
              onClick={(e) => handleLinkClick(e, '/gum-disease-treatment')}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
            >
              Gum Disease & Periodontitis <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/bleeding-gums" 
              onClick={(e) => handleLinkClick(e, '/bleeding-gums')}
              className="text-blue-300 hover:text-white flex items-center gap-1.5"
            >
              Bleeding Gums Care <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/tooth-sensitivity" 
              onClick={(e) => handleLinkClick(e, '/tooth-sensitivity')}
              className="text-slate-300 hover:text-white flex items-center gap-1.5"
            >
              Tooth Sensitivity Relief <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Patient Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
              Clear clinical answers regarding teeth scaling safety, pricing factors, and recovery.
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
            <h2 className="text-2xl sm:text-3xl font-extrabold">Book Your Professional Teeth Cleaning</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Keep your gums healthy, prevent bone loss, and eliminate bad breath. Visit Dr. Prashant Kumar Vats, BDS at Oracle Dental Clinic for a thorough ₹200 consultation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <InteractiveButton 
              id="cleaning-bottom-call-btn" 
              onClick={handleCall} 
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" /> <span>Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="cleaning-bottom-wa-btn" 
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
