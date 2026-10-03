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

interface ImmediateDentalImplantPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function ImmediateDentalImplantPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: ImmediateDentalImplantPageProps) {
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
    const title = "Dental Implant After Tooth Extraction | Immediate Implants Ghaziabad | Oracle Dental";
    const description = "Can you get a dental implant immediately after tooth extraction? Learn about same-day socket implants, bone preservation & healing in Ghaziabad. Fee ₹200.";
    const pageUrl = `${window.location.origin}/dental-implant-after-tooth-extraction`;

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
    setMetaTag("name", "keywords", "dental implant after tooth extraction, immediate dental implant Ghaziabad, same day implant tooth extraction, socket preservation bone graft, implant placement after extraction");

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
              "name": "Dental Implants",
              "item": `${window.location.origin}/dental-implants`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Dental Implant After Tooth Extraction",
              "item": pageUrl
            }
          ]
        },
        {
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          "name": "Immediate Dental Implant Placement",
          "serviceType": "Oral Implantology",
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
          "description": "Immediate implant placement directly into the extraction socket, preserving natural jawbone architecture and minimizing surgical recovery cycles."
        }
      ]
    };

    let scriptTag = document.getElementById('immediate-implant-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'immediate-implant-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById('immediate-implant-schema');
      if (el) el.remove();
    };
  }, []);

  const faqs = [
    {
      q: "Can a dental implant be placed on the exact same day a tooth is extracted?",
      a: "Yes. Known clinically as 'Immediate Implant Placement', the titanium fixture can often be placed directly into the fresh extraction socket during the same surgical session, provided the socket is free from extensive acute infection and there is sufficient dense basal bone beyond the apex to achieve primary mechanical stability."
    },
    {
      q: "What is the primary benefit of immediate implant placement?",
      a: "The biggest clinical advantage is preserving your natural bone ridge and gum contour. Immediately replacing the root halts the rapid jawbone resorption that routinely occurs following tooth removal. Furthermore, it consolidates tooth removal and implant surgery into a single visit, cutting total recovery time in half."
    },
    {
      q: "When is immediate implant placement NOT recommended?",
      a: "Immediate implants are contraindicated if there is an active acute periapical abscess with profuse pus, severe periodontal bone destruction leaving insufficient anchorage, or uncontrolled medical conditions. In such cases, Dr. Prashant Kumar Vats, BDS performs socket preservation bone grafting and allows 2 to 3 months of site healing before implant insertion."
    },
    {
      q: "Is a bone graft necessary during immediate implant placement?",
      a: "Often, yes. Natural extraction sockets are slightly larger and shaped differently than cylindrical implant posts. The small 'jump distance' space between the implant surface and the socket bony walls is routinely filled with bio-compatible particulate bone graft and sealed with a collagen membrane to ensure dense osseointegration."
    },
    {
      q: "How much does a dental implant after extraction cost in Ghaziabad?",
      a: "Pricing depends on whether immediate placement or delayed placement with socket preservation grafting is required, and the implant brand selected. At Oracle Dental Clinic, Dr. Prashant Kumar Vats, BDS evaluates your socket anatomy and 3D bone volume for a transparent consultation fee of ₹200."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Dental Implants', path: '/dental-implants' },
          { label: 'Dental Implant After Tooth Extraction', path: '/dental-implant-after-tooth-extraction' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Advanced Implantology Protocol"
      />

      {/* Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Immediate Socket Placement • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Dental Implant After Tooth Extraction
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Wondering if you can replace a failing tooth with an implant immediately? Explore the clinical criteria, socket preservation bone grafting, single-surgery advantages, and healing timelines with <strong>Dr. Prashant Kumar Vats, BDS</strong> for <strong>₹200</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton 
              id="immediate-implant-call-btn" 
              onClick={handleCall} 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="immediate-implant-wa-btn" 
              onClick={handleWhatsApp} 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Appointment</span>
            </InteractiveButton>
            {handleDirections && (
              <InteractiveButton 
                id="immediate-implant-dir-btn" 
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
              <span>Verified Implantology Protocol</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Oracle Dental Clinic & Implant Center</h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Led by <strong>Dr. Prashant Kumar Vats, BDS</strong> • KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl px-5 py-3.5 text-center shrink-0 w-full md:w-auto">
            <span className="block text-[11px] font-bold text-blue-900 uppercase">Consultation Fee</span>
            <span className="text-2xl font-black text-blue-700">₹200</span>
            <span className="block text-[10px] text-slate-500 mt-0.5">Includes Socket & Bone Evaluation</span>
          </div>
        </div>

        {/* Immediate vs Delayed Implant Comparison */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Timing & Clinical Options</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Immediate vs. Early vs. Delayed Implant Placement
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              When a tooth cannot be saved through root canal treatment, deciding when to place the implant is based on socket health, infection levels, and bone density:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-emerald-100 text-emerald-900 px-2.5 py-1 rounded-md uppercase">Type 1 • Same Day</span>
              <h3 className="text-xl font-bold text-slate-900">Immediate Placement</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Placed into the fresh socket during the tooth extraction appointment. Preserves bone architecture, reduces surgeries from two to one, and speeds overall restoration.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> One single surgical anesthesia visit</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Halts bone collapse and gum recession</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Requires infection-free socket anatomy</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-blue-100 text-blue-900 px-2.5 py-1 rounded-md uppercase">Type 2 • 4–8 Weeks</span>
              <h3 className="text-xl font-bold text-slate-900">Early Placement</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Performed 4 to 8 weeks after extraction once soft gum tissue has completely healed over the socket, ideal when minor infection was cleared at extraction.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Full soft-tissue closure achieved</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Clean site without residual bacteria</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Early bone healing underway</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md uppercase">Type 3 • 3–4 Months</span>
              <h3 className="text-xl font-bold text-slate-900">Delayed (Socket Grafted)</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                When a tooth had a major chronic abscess or extensive bone loss, socket preservation grafting is placed first. The implant is inserted after complete bone regeneration.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Maximum safety for infected sockets</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Rebuilds collapsed bone volume</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Highest long-term predictability</li>
              </ul>
            </div>
          </div>

          <div className="pt-2">
            <TreatmentImage 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
              alt="Titanium dental implant fixture inserted securely into jawbone"
              caption="Precision implant placement immediately after extraction anchors securely into healthy apical bone to stimulate natural jawbone density."
            />
          </div>
        </section>

        {/* Clinical Steps to Immediate Implantation */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Surgical Workflow</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              The Immediate Implant Protocol at Oracle Dental Clinic
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
              Dr. Prashant Kumar Vats, BDS follows meticulous atraumatic protocols to ensure bone walls remain 100% intact:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-amber-400 font-bold text-xs">Step 1</span>
              <h3 className="text-white font-bold text-sm">Atraumatic Extraction</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Specialized periotomes gently dislodge the root without fracturing delicate paper-thin outer buccal bone plates.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-cyan-400 font-bold text-xs">Step 2</span>
              <h3 className="text-white font-bold text-sm">Thorough Socket Debridement</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                The socket is meticulously curetted and rinsed with sterile antibacterial irrigants to eliminate all inflammatory tissue.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-emerald-400 font-bold text-xs">Step 3</span>
              <h3 className="text-white font-bold text-sm">Precision Implant Fixture</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                The titanium implant is placed 3–4 mm into sound apical bone beyond the socket base to secure rock-solid primary stability.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-rose-400 font-bold text-xs">Step 4</span>
              <h3 className="text-white font-bold text-sm">Jump Gap Bone Grafting</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Particulate bone mineral fills the microscopic gap between implant and bone wall, preserving natural gum scallops.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold border-t border-slate-800 pt-4">
            <a 
              href="/dental-implants" 
              onClick={(e) => handleLinkClick(e, '/dental-implants')}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
            >
              Dental Implants Overview <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/dental-implant-cost-ghaziabad" 
              onClick={(e) => handleLinkClick(e, '/dental-implant-cost-ghaziabad')}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
            >
              Dental Implant Cost in Ghaziabad <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/tooth-extraction-cost-ghaziabad" 
              onClick={(e) => handleLinkClick(e, '/tooth-extraction-cost-ghaziabad')}
              className="text-blue-300 hover:text-white flex items-center gap-1.5"
            >
              Tooth Extraction Cost Guide <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Patient Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
              Clear clinical guidance on immediate post-extraction implant procedures and candidacy.
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
            <h2 className="text-2xl sm:text-3xl font-extrabold">Evaluating a Tooth Extraction?</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Don't lose valuable jawbone volume after extraction. Consult Dr. Prashant Kumar Vats, BDS at Oracle Dental Clinic to determine if you are an ideal candidate for immediate same-day implant placement.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <InteractiveButton 
              id="immediate-bottom-call-btn" 
              onClick={handleCall} 
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" /> <span>Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="immediate-bottom-wa-btn" 
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
