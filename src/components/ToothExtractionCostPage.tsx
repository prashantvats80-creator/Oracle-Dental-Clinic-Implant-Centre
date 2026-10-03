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

interface ToothExtractionCostPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function ToothExtractionCostPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: ToothExtractionCostPageProps) {
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
    const title = "Tooth Extraction Cost in Ghaziabad | Tooth Removal Price | Oracle Dental Clinic";
    const description = "Transparent tooth extraction cost in Ghaziabad. Learn about simple vs surgical dental removal, root curvature, aftercare & replacement options. Consultation ₹200.";
    const pageUrl = `${window.location.origin}/tooth-extraction-cost-ghaziabad`;

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
    setMetaTag("name", "keywords", "tooth extraction cost Ghaziabad, tooth removal cost Ghaziabad, dental extraction price, tooth extraction near me, tooth removal dentist Ghaziabad, surgical extraction price Ghaziabad, broken tooth removal cost");

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
              "name": "Tooth Extraction",
              "item": `${window.location.origin}/tooth-extraction`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Tooth Extraction Cost in Ghaziabad",
              "item": pageUrl
            }
          ]
        },
        {
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          "name": "Dental Tooth Extraction and Surgical Removal",
          "serviceType": "Oral Surgery and Exodontia",
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
          "description": "Safe, gentle simple and surgical dental extractions for severely non-restorable, broken, or mobile teeth under local anesthesia."
        }
      ]
    };

    let scriptTag = document.getElementById('tooth-extraction-cost-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'tooth-extraction-cost-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById('tooth-extraction-cost-schema');
      if (el) el.remove();
    };
  }, []);

  const faqs = [
    {
      q: "Is tooth extraction always the first recommendation?",
      a: "No. At Oracle Dental Clinic, our philosophy is always conservative preservation of natural teeth. We explore root canal treatment, dental crowns, or periodontal stabilization whenever a tooth can realistically be saved. Extraction is only recommended when severe structural destruction, vertical root fracture, or incurable periodontal mobility makes the tooth unrestorable."
    },
    {
      q: "What is the difference between a simple extraction and a surgical extraction?",
      a: "A simple extraction involves teeth with visible crowns and standard roots that can be comfortably loosened and removed using dental elevators and forceps under local anesthesia. A surgical extraction is required when a tooth is broken below the gumline, has severely dilacerated (hooked) roots, or is fused to bone (ankylosis), requiring a minor gum flap and gentle bone relief."
    },
    {
      q: "How much does a tooth extraction cost in Ghaziabad?",
      a: "The cost depends on whether the procedure is simple or surgical, the tooth position (single-rooted incisor vs. multi-rooted molar), and the degree of root curvature. At Oracle Dental Clinic, Dr. Prashant Kumar Vats, BDS conducts an initial clinical examination and digital radiograph for an initial consultation fee of ₹200 to give you an exact, transparent quote."
    },
    {
      q: "Why should an extracted tooth be replaced?",
      a: "Leaving a gap can cause neighboring teeth to drift, opposing teeth to over-erupt, bone resorption in the jaw, and chewing imbalance. Modern replacement options include dental implants, fixed dental bridges, or removable dentures."
    },
    {
      q: "How soon can I return to normal activities after an extraction?",
      a: "Most patients resume light desk work within 24 hours. Strenuous exercise, heavy lifting, smoking, and hot foods should be avoided for 48 to 72 hours to allow the blood clot to stabilize and avoid dry socket."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Tooth Extraction', path: '/tooth-extraction' },
          { label: 'Tooth Extraction Cost in Ghaziabad', path: '/tooth-extraction-cost-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Extraction Pricing Guide"
      />

      {/* Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Oral Surgery & Exodontia • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Tooth Extraction Cost in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            When a tooth cannot be saved due to severe decay, trauma, or vertical fracture, safe and gentle extraction relieves pain and prevents bone infection. Learn about simple vs. surgical costs, aftercare, and replacement pathways, with initial consultations for <strong>₹200</strong> at <strong>Oracle Dental Clinic</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton 
              id="ext-cost-call-btn" 
              onClick={handleCall} 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="ext-cost-wa-btn" 
              onClick={handleWhatsApp} 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Appointment</span>
            </InteractiveButton>
            {handleDirections && (
              <InteractiveButton 
                id="ext-cost-dir-btn" 
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
            <span className="block text-[10px] text-slate-500 mt-0.5">Includes Clinical & Radiographic Assessment</span>
          </div>
        </div>

        {/* Reasons for Extraction & Philosophy */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Clinical Philosophy</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              When is Tooth Extraction Truly Necessary?
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              We never rush into extracting teeth that can be conservatively saved. An extraction is deemed the appropriate treatment only when restorative options cannot guarantee long-term stability:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-rose-700 uppercase">Reason 1</span>
              <h3 className="font-bold text-base text-slate-900">Unrestorable Decay</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                When deep dental caries has completely hollowed out the subgingival root structure, preventing a root canal or crown post from bonding securely.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-rose-700 uppercase">Reason 2</span>
              <h3 className="font-bold text-base text-slate-900">Vertical Root Fracture</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Trauma or biting on hard objects causing a vertical crack through the root splitting the tooth down into the jawbone.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-rose-700 uppercase">Reason 3</span>
              <h3 className="font-bold text-base text-slate-900">Severe Periodontitis</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Grade III tooth mobility where advanced chronic periodontitis has resorbed virtually all supporting jawbone around the root.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-rose-700 uppercase">Reason 4</span>
              <h3 className="font-bold text-base text-slate-900">Orthodontic Space</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Planned therapeutic removal of premolars to relieve severe crowding and align remaining teeth symmetrically during orthodontic treatment.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <TreatmentImage 
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
              alt="Dental radiograph showing tooth root structure before extraction"
              caption="Diagnostic dental X-rays identify root curvature, bone levels, and proximity to anatomical landmarks before extraction."
            />
          </div>
        </section>

        {/* Simple vs Surgical Tooth Extraction */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Procedure Types</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Simple Extraction vs. Surgical Tooth Removal
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              The clinical technique required directly influences appointment duration and procedural cost:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-blue-100 text-blue-900 px-2.5 py-1 rounded-md uppercase">Standard Procedure</span>
              <h3 className="text-xl font-bold text-slate-900">Simple Tooth Extraction</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Conducted on teeth that are fully visible above the gumline with solid coronal structure and relatively straight roots. The tooth is gently mobilized using dental elevators and lifted with forceps under local anesthesia.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Fast healing and minimal post-op discomfort</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Ideal for front incisors and mobile teeth</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Quick 15–20 minute chairside visit</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md uppercase">Complex Procedure</span>
              <h3 className="text-xl font-bold text-slate-900">Surgical Tooth Extraction</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Indicated when the crown has snapped at the gumline, roots are severely curved, or bone has fused to the tooth. A small incision is made in the gingiva, bone is relieved with gentle irrigation, and the root is sectioned into fragments for atraumatic removal.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Preserves surrounding jawbone for future implants</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Precision micro-sutures placed to promote rapid clot formation</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Comprehensive follow-up assessment included</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Factors Determining Extraction Cost */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Pricing Transparency</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Key Factors Influencing Extraction Cost in Ghaziabad
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              Every extraction is unique. The price estimate is determined by anatomical and procedural factors:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase">Factor 1</span>
              <h3 className="font-bold text-base text-slate-900">Tooth Position & Root Count</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Single-rooted front incisors and canines are straightforward. Back molars with two or three divergent roots require more instrumentation and technique.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase">Factor 2</span>
              <h3 className="font-bold text-base text-slate-900">Crown Integrity & Breakage</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                If the tooth is broken below the gumline or decayed into root tips, delicate root-tip elevators or sectioning are required to safeguard surrounding bone.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase">Factor 3</span>
              <h3 className="font-bold text-base text-slate-900">Bone Grafting (Socket Preservation)</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                If you plan to place a dental implant later, a bone graft (socket preservation) can be placed at the time of extraction to prevent jawbone collapse.
              </p>
            </div>
          </div>
        </section>

        {/* Tooth Replacement Options After Extraction */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Tooth Replacement Pathways</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Replacing Extracted Teeth: Implants, Bridges & Dentures
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
              Replacing a missing tooth restores normal bite force and stops neighboring teeth from shifting out of alignment:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-amber-400 font-bold text-xs uppercase">Option 1</span>
              <h3 className="text-white font-bold text-base">Dental Implants</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                A titanium screw replacing the natural tooth root topped with a ceramic crown. Does not require trimming adjacent healthy teeth and preserves jawbone density.
              </p>
              <a 
                href="/dental-implants" 
                onClick={(e) => handleLinkClick(e, '/dental-implants')} 
                className="text-amber-400 hover:underline text-xs font-bold inline-flex items-center gap-1 pt-1"
              >
                Dental Implants Guide <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-cyan-400 font-bold text-xs uppercase">Option 2</span>
              <h3 className="text-white font-bold text-base">Dental Bridges</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                A fixed prosthetic suspended between crowns placed on adjacent support teeth. Restores chewing function without surgery in 2 to 3 clinic visits.
              </p>
              <a 
                href="/dental-bridges" 
                onClick={(e) => handleLinkClick(e, '/dental-bridges')} 
                className="text-cyan-400 hover:underline text-xs font-bold inline-flex items-center gap-1 pt-1"
              >
                Dental Bridges Guide <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-emerald-400 font-bold text-xs uppercase">Option 3</span>
              <h3 className="text-white font-bold text-base">Dentures</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Removable acrylic or flexible partials replacing one or multiple missing teeth economically. Ideal when multiple teeth need replacement.
              </p>
              <a 
                href="/dentures" 
                onClick={(e) => handleLinkClick(e, '/dentures')} 
                className="text-emerald-400 hover:underline text-xs font-bold inline-flex items-center gap-1 pt-1"
              >
                Dentures Guide <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold border-t border-slate-800 pt-4">
            <a 
              href="/tooth-extraction" 
              onClick={(e) => handleLinkClick(e, '/tooth-extraction')}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
            >
              Extraction Procedure Overview <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/root-canal-treatment" 
              onClick={(e) => handleLinkClick(e, '/root-canal-treatment')}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
            >
              Can the Tooth be Saved by RCT? <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Patient Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
              Clear clinical answers regarding tooth removal pricing, comfort, and healing.
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
            <h2 className="text-2xl sm:text-3xl font-extrabold">Schedule Your Tooth Evaluation</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Whether your tooth can be saved or requires gentle removal, get an honest medical evaluation from Dr. Prashant Kumar Vats, BDS at Oracle Dental Clinic for a ₹200 consultation fee.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <InteractiveButton 
              id="ext-bottom-call-btn" 
              onClick={handleCall} 
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" /> <span>Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="ext-bottom-wa-btn" 
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
