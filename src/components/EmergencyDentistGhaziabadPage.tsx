import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  CheckCircle2, 
  ChevronDown, 
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Clock,
  MapPin,
  AlertCircle,
  HelpCircle,
  Activity,
  HeartPulse
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface EmergencyDentistGhaziabadPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function EmergencyDentistGhaziabadPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: EmergencyDentistGhaziabadPageProps) {
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
    const title = "Emergency Dentist in Ghaziabad | Urgent Dental Pain Relief | Oracle Dental Clinic";
    const description = "Immediate emergency dental care in Ghaziabad. Fast relief for severe toothache, dental abscess, broken tooth, or facial swelling. Consultation fee ₹200.";
    const pageUrl = `${window.location.origin}/emergency-dentist-ghaziabad`;

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
    setMetaTag("name", "keywords", "emergency dentist Ghaziabad, urgent dental care Ghaziabad, toothache emergency Ghaziabad, 24/7 dentist Ghaziabad, dental clinic emergency chipiyana buzurg");

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

    // Schema: EmergencyService, MedicalWebPage, BreadcrumbList
    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalWebPage",
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
              "name": "Emergency Dental Care",
              "item": `${window.location.origin}/emergency-dentist`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Emergency Dentist in Ghaziabad",
              "item": pageUrl
            }
          ]
        },
        {
          "@type": "EmergencyService",
          "@id": `${pageUrl}#service`,
          "name": "Urgent Dental Pain Relief & Trauma Care",
          "serviceType": "Emergency Dentistry",
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
          "description": "Urgent triage and clinical intervention for acute pulpitis, facial swellings, dental abscess drainage, knocked-out teeth, and severe dental fractures."
        }
      ]
    };

    let scriptTag = document.getElementById('emergency-dentist-ghaziabad-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'emergency-dentist-ghaziabad-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById('emergency-dentist-ghaziabad-schema');
      if (el) el.remove();
    };
  }, []);

  const faqs = [
    {
      q: "What constitutes a genuine dental emergency?",
      a: "Genuine dental emergencies include severe throbbing toothaches keeping you awake at night, spreading facial swelling or pus discharge (abscess), a completely knocked-out (avulsed) permanent tooth, uncontrolled bleeding from the gums or socket, or extensive dental fractures exposing the red pulp nerve."
    },
    {
      q: "What should I do immediately if a tooth is knocked out in an accident?",
      a: "Locate the tooth, handle it ONLY by the white crown (never touch the delicate root), gently rinse off dirt under cold running water without scrubbing, and attempt to gently slip it back into the socket. If that is not possible, place the tooth in a cup of cold milk or saliva and reach Oracle Dental Clinic within 30 to 60 minutes for highest reimplantation success."
    },
    {
      q: "How does Oracle Dental Clinic handle emergency tooth pain?",
      a: "Our priority is immediate pain relief. Dr. Prashant Kumar Vats, BDS performs an instant diagnostic assessment, applies local anesthesia to numb the throbbing nerve within minutes, opens the infected pulp chamber (pulpotomy) if needed to relieve pressure, and prescribes targeted medications."
    },
    {
      q: "How much does an emergency dental visit cost in Ghaziabad?",
      a: "At Oracle Dental Clinic, our consultation fee is transparent at ₹200. Any necessary immediate interventions (such as temporary sedative dressing, abscess drainage, or emergency RCT initiation) are clearly explained with upfront fee estimates before proceeding."
    },
    {
      q: "Can facial swelling from a tooth infection become dangerous?",
      a: "Yes. An untreated dental abscess can spread rapidly through deep facial fascial spaces toward the neck or eye (Ludwig's Angina). If you experience difficulty breathing, trouble swallowing, or high fever alongside jaw swelling, seek immediate emergency dental or hospital evaluation."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-red-100 selection:text-red-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Emergency Care', path: '/emergency-dentist' },
          { label: 'Emergency Dentist in Ghaziabad', path: '/emergency-dentist-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Urgent Dental Intervention"
      />

      {/* Header */}
      <header className="relative bg-gradient-to-br from-red-950 via-slate-950 to-red-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-200 border border-red-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Immediate Pain Relief • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Emergency Dentist in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Severe toothache, sudden facial swelling, or dental trauma? Don't suffer through the pain. Get immediate, gentle clinical relief from <strong>Dr. Prashant Kumar Vats, BDS</strong> at <strong>Oracle Dental Clinic</strong> in Chipiyana Buzurg. Consultation fee <strong>₹200</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton 
              id="emergency-ghaziabad-call-btn" 
              onClick={handleCall} 
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-7 py-4 rounded-xl flex items-center gap-2 transition-all shadow-xl active:scale-95 text-base"
            >
              <PhoneCall className="w-5 h-5 text-slate-950" /> <span>Call Now: 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="emergency-ghaziabad-wa-btn" 
              onClick={handleWhatsApp} 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-4 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-5 h-5" /> <span>WhatsApp Emergency</span>
            </InteractiveButton>
            {handleDirections && (
              <InteractiveButton 
                id="emergency-ghaziabad-dir-btn" 
                onClick={handleDirections} 
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-4 py-4 rounded-xl flex items-center gap-2 text-xs transition-all"
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
        <div className="bg-white border border-red-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-red-600" />
              <span>Verified Clinical Emergency Support</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">Oracle Dental Clinic & Implant Center</h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Led by <strong>Dr. Prashant Kumar Vats, BDS</strong> • KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad.
            </p>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-2xl px-5 py-3.5 text-center shrink-0 w-full md:w-auto">
            <span className="block text-[11px] font-bold text-red-900 uppercase">Emergency Consultation</span>
            <span className="text-2xl font-black text-red-700">₹200</span>
            <span className="block text-[10px] text-slate-500 mt-0.5">Rapid Clinical Triage</span>
          </div>
        </div>

        {/* Common Dental Emergencies Grid */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-red-600 text-xs font-bold uppercase tracking-wider">Urgent Conditions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Conditions We Treat Immediately
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              If you are facing any of the following acute symptoms, seek immediate dental care rather than relying on pain medications alone:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 space-y-2">
              <span className="text-[11px] font-bold text-red-700 uppercase">Acute Pulpitis</span>
              <h3 className="font-bold text-base text-slate-900">Severe Throbbing Pain</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Persistent, throbbing tooth pain that worsens when lying flat or drinking hot fluids. We perform rapid pulpal decompression to stop pain instantly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 space-y-2">
              <span className="text-[11px] font-bold text-red-700 uppercase">Infection & Pus</span>
              <h3 className="font-bold text-base text-slate-900">Facial Swelling / Abscess</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Puffy gums with a painful pus pimple or swollen cheek. Requires sterile clinical drainage, irrigation, and targeted antibiotics.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 space-y-2">
              <span className="text-[11px] font-bold text-red-700 uppercase">Trauma & Accidents</span>
              <h3 className="font-bold text-base text-slate-900">Broken or Chipped Tooth</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Sharp fractured tooth edges cutting the tongue, or exposed nerve tissue. We smooth edges and apply a protective sedative filling.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 space-y-2">
              <span className="text-[11px] font-bold text-red-700 uppercase">Tooth Avulsion</span>
              <h3 className="font-bold text-base text-slate-900">Knocked-Out Tooth</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                A permanent tooth knocked out completely from the socket. Reached within 60 minutes in milk, it can often be successfully replanted and splinted.
              </p>
            </div>
          </div>

          <div className="pt-2">
            <TreatmentImage 
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
              alt="Emergency dental treatment and compassionate clinical examination"
              caption="Immediate diagnostic examination and localized numbing provide instant relief for severe dental pain."
            />
          </div>
        </section>

        {/* First Aid Instructions */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Before You Arrive</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Immediate First-Aid Steps While Traveling to Clinic
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
              Crucial actions to safeguard your tooth and comfort before stepping into our clinic:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-amber-400 font-bold text-xs">Step 1</span>
              <h3 className="text-white font-bold text-sm">Rinse Gently with Warm Water</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Swish lukewarm salt water to clear trapped food debris around the painful tooth. Never place an aspirin tablet directly on the gum (causes chemical burns).
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-cyan-400 font-bold text-xs">Step 2</span>
              <h3 className="text-white font-bold text-sm">Cold Compress for Swelling</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Apply an ice pack wrapped in a clean cloth to the outside of your cheek for 15 minutes at a time to reduce inflammation and blunt throbbing pain.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-emerald-400 font-bold text-xs">Step 3</span>
              <h3 className="text-white font-bold text-sm">Preserve Any Broken Fragments</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Collect broken tooth pieces or crowns and place them in a small clean container with milk or saline to bring to your appointment.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-rose-400 font-bold text-xs">Step 4</span>
              <h3 className="text-white font-bold text-sm">Call Us Immediately</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Dial 7011961515 so Dr. Prashant Kumar Vats, BDS can prepare the operatory room and pain relief instruments ahead of your arrival.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold border-t border-slate-800 pt-4">
            <a 
              href="/emergency-dentist" 
              onClick={(e) => handleLinkClick(e, '/emergency-dentist')}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
            >
              Emergency Care Overview <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/dental-abscess-treatment" 
              onClick={(e) => handleLinkClick(e, '/dental-abscess-treatment')}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
            >
              Abscess & Infection Protocol <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/tooth-pain-treatment" 
              onClick={(e) => handleLinkClick(e, '/tooth-pain-treatment')}
              className="text-rose-400 hover:text-rose-300 flex items-center gap-1.5"
            >
              Severe Tooth Pain Treatment <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <span className="text-red-700 text-xs font-bold uppercase tracking-wider">Patient Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
              Fast, clear guidance during an urgent dental situation.
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
                  <ChevronDown className={`w-4 h-4 text-red-600 shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`} />
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
        <section className="bg-gradient-to-r from-red-900 via-slate-900 to-red-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Need Urgent Relief Right Now?</h2>
            <p className="text-red-100 text-sm leading-relaxed">
              Don't endure excruciating dental pain or risk spreading infections. Call Oracle Dental Clinic immediately to secure priority attention.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <InteractiveButton 
              id="emergency-bottom-call-btn" 
              onClick={handleCall} 
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all text-base"
            >
              <PhoneCall className="w-5 h-5 text-slate-950" /> <span>Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="emergency-bottom-wa-btn" 
              onClick={handleWhatsApp} 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" /> <span>WhatsApp SOS</span>
            </InteractiveButton>
          </div>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-xs text-red-200">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> Mon–Sun: 10 AM–2 PM, 5 PM–9 PM (Emergency triage available)</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> KTS Complex, Jaat Chowk, Chipiyana Buzurg</span>
          </div>
        </section>

      </main>
    </div>
  );
}
