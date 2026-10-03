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

interface DenturesCostPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function DenturesCostPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: DenturesCostPageProps) {
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
    const title = "Dentures Cost in Ghaziabad | Complete & Partial Denture Price | Oracle Dental Clinic";
    const description = "Transparent dentures cost in Ghaziabad. Learn about complete dentures, flexible partials, BPS systems & implant overdentures. Consultation fee ₹200.";
    const pageUrl = `${window.location.origin}/dentures-cost-ghaziabad`;

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
    setMetaTag("name", "keywords", "dentures cost Ghaziabad, denture price Ghaziabad, complete dentures cost, partial denture price, false teeth cost, flexible dentures price Ghaziabad, BPS denture cost Ghaziabad");

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
              "name": "Dentures",
              "item": `${window.location.origin}/dentures`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Dentures Cost in Ghaziabad",
              "item": pageUrl
            }
          ]
        },
        {
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          "name": "Complete & Partial Denture Prosthetics",
          "serviceType": "Removable Prosthodontics",
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
          "description": "Customized removable complete dentures, flexible Valplast partials, cast metal framework prosthetics, and implant-retained overdentures."
        }
      ]
    };

    let scriptTag = document.getElementById('dentures-cost-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'dentures-cost-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById('dentures-cost-schema');
      if (el) el.remove();
    };
  }, []);

  const faqs = [
    {
      q: "How much do complete or partial dentures cost in Ghaziabad?",
      a: "Denture pricing depends on whether you require a single arch (upper or lower) or a full mouth set, and the material technology selected (standard acrylic, flexible thermoplastic, cast metal framework, or high-precision BPS). At Oracle Dental Clinic, Dr. Prashant Kumar Vats, BDS evaluates your jawbone ridge anatomy during an initial consultation for ₹200 to provide a transparent recommendation."
    },
    {
      q: "Why does a lower denture feel looser than an upper denture?",
      a: "The upper denture gains strong natural suction across the wide, firm surface of the roof of the mouth (hard palate). The lower denture rests on a much narrower horseshoe-shaped ridge surrounded by dynamic tongue and cheek muscles. For patients with severely flat lower ridges, implant-supported locator overdentures offer locked-in stability."
    },
    {
      q: "What is the difference between conventional acrylic and flexible dentures?",
      a: "Conventional acrylic dentures use a rigid pink base, making them easy to adjust and reline. Flexible partial dentures (such as Valplast) use a nylon thermoplastic resin that bends comfortably with mouth movements, uses gum-colored invisible clasps, and does not fracture if accidentally dropped."
    },
    {
      q: "How long does it take to adapt to new dentures?",
      a: "Adapting to new dentures typically takes 2 to 4 weeks. Initially, your mouth may produce extra saliva, speech may feel slightly awkward, and soft foods should be chewed slowly on both sides simultaneously. Minor pressure spots are routinely relieved during complimentary follow-up adjustments."
    },
    {
      q: "How should I clean and care for my dentures overnight?",
      a: "Always take dentures out before sleeping to let gum tissues breathe and rest. Brush dentures gently with a soft denture brush and mild non-abrasive liquid soap (never standard harsh toothpaste, which scratches acrylic). Soak them overnight in plain water or a mild effervescent denture cleanser tablet."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Dentures', path: '/dentures' },
          { label: 'Dentures Cost in Ghaziabad', path: '/dentures-cost-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Denture Prosthetics Pricing"
      />

      {/* Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Removable Prosthodontics • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Dentures Cost in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Reclaim your chewing comfort, clear speech, and facial fullness with customized complete and partial dentures. Explore conventional acrylic, flexible Valplast, cast metal frameworks, and implant overdentures, with transparent evaluations for <strong>₹200</strong> at <strong>Oracle Dental Clinic</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton 
              id="denture-cost-call-btn" 
              onClick={handleCall} 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="denture-cost-wa-btn" 
              onClick={handleWhatsApp} 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Appointment</span>
            </InteractiveButton>
            {handleDirections && (
              <InteractiveButton 
                id="denture-cost-dir-btn" 
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
            <span className="block text-[10px] text-slate-500 mt-0.5">Includes Ridge & Bite Evaluation</span>
          </div>
        </div>

        {/* Complete vs Partial Dentures */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Prosthetic Options</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Complete Dentures vs. Removable Partial Dentures
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              Depending on the number of natural teeth remaining, dentures are categorized into two primary clinical categories:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-blue-100 text-blue-900 px-2.5 py-1 rounded-md uppercase">Full Mouth Replacement</span>
              <h3 className="text-xl font-bold text-slate-900">Complete Dentures</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Fabricated when all natural teeth are missing in either the upper, lower, or both jaws. They rest directly on the alveolar gum ridges and oral mucosa, providing lip support, restoring facial height, and facilitating eating.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Restores vertical dimension and lip profile</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Upper denture utilizes natural palatal suction</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Available in standard acrylic or precision BPS grades</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md uppercase">Selective Tooth Replacement</span>
              <h3 className="text-xl font-bold text-slate-900">Removable Partial Dentures (RPD)</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Recommended when several natural healthy teeth remain in the arch. The partial denture fills the spaces, anchoring gently around remaining teeth with precision clasps to prevent unwanted movement.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Prevents remaining teeth from tilting or drifting</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Economical alternative to multi-tooth fixed bridges</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Available in flexible, acrylic, or cast metal types</li>
              </ul>
            </div>
          </div>

          <div className="pt-2">
            <TreatmentImage 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
              alt="Custom complete and partial dentures resting on dental model"
              caption="Customized dentures restore facial height, chewing ability, and lip fullness for edentulous patients."
            />
          </div>
        </section>

        {/* Denture Materials & Technology */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Material Types</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Denture Materials: Choosing the Right Option
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              Denture pricing and daily comfort vary significantly based on the materials and fabrication process used:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase">Option 1</span>
              <h3 className="font-bold text-base text-slate-900">Conventional Acrylic</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                The most economical time-tested choice. Made of hard pink acrylic resin with cross-linked teeth. Easy to repair, reline, or add future teeth to.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-amber-700 uppercase">Option 2</span>
              <h3 className="font-bold text-base text-slate-900">Flexible Dentures (Valplast)</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Made from medical-grade thermoplastic nylon. Ultra-light, unbreakable, and features translucent gum-colored clasps that blend invisibly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-emerald-700 uppercase">Option 3</span>
              <h3 className="font-bold text-base text-slate-900">Cast Partial Dentures (CPD)</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Constructed with a thin, rigid cobalt-chromium metal framework. Provides supreme chewing stability and minimal palate coverage for better taste.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-indigo-700 uppercase">Option 4</span>
              <h3 className="font-bold text-base text-slate-900">Implant Overdentures</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Snap firmly onto 2 to 4 titanium dental implants via locator attachments. Solves loose lower denture issues completely without sticky adhesives.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
              <thead className="bg-slate-100 text-slate-800 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="p-3.5 border-b border-slate-200">Denture System</th>
                  <th className="p-3.5 border-b border-slate-200">Base Material</th>
                  <th className="p-3.5 border-b border-slate-200">Clasp Visibility</th>
                  <th className="p-3.5 border-b border-slate-200">Chewing Power</th>
                  <th className="p-3.5 border-b border-slate-200">Bone Ridge Support</th>
                  <th className="p-3.5 border-b border-slate-200">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">Conventional Acrylic</td>
                  <td className="p-3.5">Heat-cure PMMA resin</td>
                  <td className="p-3.5">Wire clasps visible in partials</td>
                  <td className="p-3.5">Moderate (30–40%)</td>
                  <td className="p-3.5">Mucosa-borne (requires relining)</td>
                  <td className="p-3.5 font-medium text-blue-700">Budget-conscious complete or partial replacement</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-slate-50/50">
                  <td className="p-3.5 font-bold text-slate-900">Flexible (Valplast)</td>
                  <td className="p-3.5">Thermoplastic nylon</td>
                  <td className="p-3.5">Gum-shaded invisible clasps</td>
                  <td className="p-3.5">Moderate (35–45%)</td>
                  <td className="p-3.5">Mucosa-borne, lightweight</td>
                  <td className="p-3.5 font-medium text-amber-700">Partial dentures where aesthetics & comfort matter</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3.5 font-bold text-slate-900">Cast Metal Partial (CPD)</td>
                  <td className="p-3.5">Cobalt-Chromium + acrylic</td>
                  <td className="p-3.5">Precision lingual/palatal rests</td>
                  <td className="p-3.5">High (55–65%)</td>
                  <td className="p-3.5">Tooth-and-ridge supported</td>
                  <td className="p-3.5 font-medium text-emerald-700">Long-term partials with strong remaining natural teeth</td>
                </tr>
                <tr className="hover:bg-slate-50 bg-blue-50/40">
                  <td className="p-3.5 font-bold text-slate-900">Implant Overdenture</td>
                  <td className="p-3.5">Acrylic + titanium locators</td>
                  <td className="p-3.5">Zero clasps (snaps underneath)</td>
                  <td className="p-3.5">Very High (75–85%)</td>
                  <td className="p-3.5">Implants stimulate & preserve bone</td>
                  <td className="p-3.5 font-medium text-indigo-700">Flat ridges or unstable lower jaws wanting maximum retention</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Lower Ridge Dilemma & Stability Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Clinical Insight</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              The Lower Denture Challenge: Ridge Anatomy & Solutions
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              Why do lower dentures tend to feel looser than upper dentures? Understanding the physiological mechanics helps set realistic expectations and find the best treatment plan:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase">Palatal Suction vs Muscle Border</span>
              <h3 className="font-bold text-base text-slate-900">Upper Jaw Advantage</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                The upper denture covers the broad, immovable hard palate, creating a natural peripheral seal like a suction cup. It rarely shifts during speaking or eating.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-amber-700 uppercase">Dynamic Muscle Interference</span>
              <h3 className="font-bold text-base text-slate-900">Lower Ridge Movements</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                The lower denture must navigate a mobile tongue, floor of the mouth, and active lip musculature on a narrow ridge, making muscular coordination essential during chewing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-emerald-700 uppercase">Long-Term Solutions</span>
              <h3 className="font-bold text-base text-slate-900">Relines & Implant Snaps</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Regular soft chairside relining accommodates gradual ridge shrinking. When natural retention is compromised, 2 locator implants provide total locked-in stability.
              </p>
            </div>
          </div>
        </section>

        {/* Clinical Steps to Making Quality Dentures */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Clinical Workflow</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Step-by-Step Custom Fabrication Process
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
              Properly fitting dentures require meticulous chairside craftsmanship and precision laboratory steps:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-amber-400 font-bold text-xs">Step 1</span>
              <h3 className="text-white font-bold text-sm">Preliminary & Final Impressions</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Custom special trays record the dynamic borders of your cheeks and lips without distorting delicate ridge mucosa.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-cyan-400 font-bold text-xs">Step 2</span>
              <h3 className="text-white font-bold text-sm">Jaw Relation & Bite Registration</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Wax bite rims record your natural smile line, lip fullness, and exact relationship between the upper and lower jaws.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-emerald-400 font-bold text-xs">Step 3</span>
              <h3 className="text-white font-bold text-sm">Wax Try-In Verification</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                You look in the mirror with the teeth set in wax to approve tooth shape, shade, smile aesthetics, and speech sounds before curing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-rose-400 font-bold text-xs">Step 4</span>
              <h3 className="text-white font-bold text-sm">Final Delivery & Adjustments</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                The finished denture is inserted, occlusion is refined, and post-delivery checkups ensure sore spots are quickly relieved.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold border-t border-slate-800 pt-4">
            <a 
              href="/dentures" 
              onClick={(e) => handleLinkClick(e, '/dentures')}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
            >
              Dentures Service Overview <ArrowRight className="w-3.5 h-3.5" />
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
              Implant-Supported Overdentures <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/dental-bridges" 
              onClick={(e) => handleLinkClick(e, '/dental-bridges')}
              className="text-slate-300 hover:text-white flex items-center gap-1.5"
            >
              Fixed Dental Bridges Alternative <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Patient Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
              Clear clinical answers regarding denture types, costs, stability, and adaptation.
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
            <h2 className="text-2xl sm:text-3xl font-extrabold">Schedule Your Denture Consultation</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Rediscover the joy of eating your favorite meals and speaking with confidence. Consult Dr. Prashant Kumar Vats, BDS at Oracle Dental Clinic for a thorough ₹200 evaluation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <InteractiveButton 
              id="denture-bottom-call-btn" 
              onClick={handleCall} 
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" /> <span>Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="denture-bottom-wa-btn" 
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
