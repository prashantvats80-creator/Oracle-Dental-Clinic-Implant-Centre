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

interface WisdomToothCostPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function WisdomToothCostPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: WisdomToothCostPageProps) {
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
    const title = "Wisdom Tooth Extraction Cost in Ghaziabad | Oracle Dental Clinic";
    const description = "Transparent wisdom tooth extraction & surgery cost in Ghaziabad. Learn about simple vs surgical removal, impaction types, OPG imaging & cost factors. Consultation ₹200.";
    const pageUrl = `${window.location.origin}/wisdom-tooth-extraction-cost-ghaziabad`;

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
    setMetaTag("name", "keywords", "wisdom tooth extraction cost Ghaziabad, wisdom tooth removal cost, wisdom tooth surgery cost, wisdom tooth extraction price, wisdom tooth dentist near me, impacted third molar surgery price Ghaziabad, wisdom tooth doctor Ghaziabad");

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

    // Schema: MedicalWebPage, Service, BreadcrumbList
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
          },
          "about": {
            "@type": "MedicalProcedure",
            "name": "Wisdom Tooth Extraction",
            "procedureType": "Surgical and Non-Surgical Dental Extraction",
            "bodyLocation": "Third Molar",
            "followup": "Post-extraction recovery, clot protection, and dry socket prevention"
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
              "name": "Wisdom Tooth Extraction",
              "item": `${window.location.origin}/wisdom-tooth-extraction`
            },
            {
              "@type": "ListItem",
              "position": 3,
              "name": "Wisdom Tooth Extraction Cost in Ghaziabad",
              "item": pageUrl
            }
          ]
        },
        {
          "@type": "Service",
          "@id": `${pageUrl}#service`,
          "name": "Wisdom Tooth Removal & Surgical Extraction",
          "serviceType": "Oral Surgery",
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
          "description": "Evaluation and extraction of erupted, partially erupted, and impacted third molars using local anesthesia and gentle surgical techniques."
        }
      ]
    };

    let scriptTag = document.getElementById('wisdom-tooth-cost-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'wisdom-tooth-cost-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    return () => {
      const el = document.getElementById('wisdom-tooth-cost-schema');
      if (el) el.remove();
    };
  }, []);

  const faqs = [
    {
      q: "Does every wisdom tooth require extraction?",
      a: "No. If a wisdom tooth erupts completely straight, has adequate space in the jaw, does not crowd or decay adjacent molars, and can be easily kept clean with daily brushing and flossing, it does not need removal and can simply be monitored during routine 6-month checkups."
    },
    {
      q: "What causes the price difference between simple and surgical wisdom tooth extraction?",
      a: "A fully erupted upper wisdom tooth with normal straight roots can often be removed with standard dental forceps in a straightforward procedure. In contrast, an impacted lower molar lodged beneath dense jawbone or wrapped near the inferior alveolar nerve requires specialized surgical bone guttering, tooth sectioning, and sutures, reflecting greater clinical complexity."
    },
    {
      q: "What imaging is required before wisdom tooth surgery?",
      a: "An intraoral periapical X-ray (IOPA) or full-mouth panoramic radiograph (OPG) is taken to assess root curvature and jaw depth. In complex impactions where roots sit intimately close to the mandibular nerve canal, a localized 3D CBCT scan may be recommended for precise anatomical mapping."
    },
    {
      q: "Is wisdom tooth removal painful?",
      a: "The extraction procedure itself is performed under profound local anesthesia, ensuring you feel only mild tactile pressure but no sharp pain. Post-procedure soreness and mild swelling peak around 48 hours and are managed with doctor-prescribed medications and cold compresses."
    },
    {
      q: "How can I prevent a dry socket after extraction?",
      a: "Dry socket (alveolar osteitis) occurs if the protective blood clot in the socket is dislodged before healing. Avoid drinking through a straw, smoking, vigorous spitting, or eating crunchy foods for the first 72 hours, and follow all clinic aftercare guidelines."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-blue-100 selection:text-blue-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Care in Ghaziabad', path: '/#services' },
          { label: 'Wisdom Tooth Extraction', path: '/wisdom-tooth-extraction' },
          { label: 'Wisdom Tooth Cost in Ghaziabad', path: '/wisdom-tooth-extraction-cost-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Oral Surgery Pricing"
      />

      {/* Header */}
      <header className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Oral Surgery • Oracle Dental Clinic</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Wisdom Tooth Extraction Cost in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Relieve jaw pain, swelling, and recurrent pericoronitis caused by problematic third molars. Understand the differences between simple forceps extraction and surgical impaction removal, with transparent clinical assessments for <strong>₹200</strong> at <strong>Oracle Dental Clinic</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton 
              id="wisdom-cost-call-btn" 
              onClick={handleCall} 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <PhoneCall className="w-4 h-4" /> <span>Consultation: Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="wisdom-cost-wa-btn" 
              onClick={handleWhatsApp} 
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" /> <span>WhatsApp Appointment</span>
            </InteractiveButton>
            {handleDirections && (
              <InteractiveButton 
                id="wisdom-cost-dir-btn" 
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
            <span className="block text-[10px] text-slate-500 mt-0.5">Includes Clinical Examination & Evaluation</span>
          </div>
        </div>

        {/* Simple vs Surgical Extraction */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Surgical Classification</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Simple Extraction vs. Surgical Impaction Removal
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              Third molars (wisdom teeth) vary widely in their eruption angles and root shapes. The procedure is categorized based on whether the tooth is fully visible in the mouth or trapped under tissue:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-blue-100 text-blue-900 px-2.5 py-1 rounded-md uppercase">Category 1</span>
              <h3 className="text-xl font-bold text-slate-900">Simple Wisdom Tooth Extraction</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Applies when the wisdom tooth has fully erupted into the dental arch and can be comfortably gripped with standard dental elevators and forceps. No incision or bone removal is needed.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Fast procedure (typically 15–25 minutes)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Minimal post-operative swelling</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Most commonly seen in upper third molars</li>
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-1 rounded-md uppercase">Category 2</span>
              <h3 className="text-xl font-bold text-slate-900">Surgical Extraction / Impaction Removal</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Required when the tooth is tilted, horizontal, or trapped beneath the gumline and jawbone. A minor surgical opening is made in the gum, a small window of bone is cleared, and the tooth is sectioned for gentle removal.
              </p>
              <ul className="text-xs text-slate-700 space-y-1.5 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Precise tooth sectioning to protect adjacent second molar</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Soluble or non-resorbable sutures placed for tidy healing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> Comprehensive follow-up assessment included</li>
              </ul>
            </div>
          </div>

          <div className="pt-2">
            <TreatmentImage 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
              alt="Clinical dental examination evaluating wisdom tooth position"
              caption="Clinical evaluation and digital radiography accurately determine wisdom tooth angulation and proximity to nerves."
            />
          </div>
        </section>

        {/* Factors Influencing Wisdom Tooth Extraction Cost */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Cost Determinants</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Key Factors Influencing Wisdom Tooth Cost in Ghaziabad
            </h2>
            <p className="text-slate-600 text-sm max-w-3xl leading-relaxed">
              Third molar removal is tailored to individual anatomy. The fee structure reflects the surgical expertise and time required:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase">Factor 1</span>
              <h3 className="font-bold text-base text-slate-900">Upper vs. Lower Jaw</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Upper wisdom teeth sit in softer maxillary bone and are generally simpler to remove than lower molars embedded in dense mandibular bone.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase">Factor 2</span>
              <h3 className="font-bold text-base text-slate-900">Impaction Depth & Angle</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Vertical impactions are less complex than mesioangular, distoangular, or completely horizontal impactions lodged against the neighboring tooth.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase">Factor 3</span>
              <h3 className="font-bold text-base text-slate-900">Nerve Proximity & CBCT</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                When roots wrap near the inferior alveolar nerve canal, specialized careful sectioning or 3D CBCT scans ensure safe separation without nerve trauma.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold text-blue-700 uppercase">Factor 4</span>
              <h3 className="font-bold text-base text-slate-900">Active Infection Status</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Severe swelling or localized gum infection (pericoronitis) may require initial irrigation and medical stabilization prior to scheduling definitive extraction.
              </p>
            </div>
          </div>
        </section>

        {/* Aftercare & Dry Socket Prevention */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Recovery & Healing</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Safe Recovery & Dry Socket Prevention Protocols
            </h2>
            <p className="text-slate-400 text-sm max-w-3xl leading-relaxed">
              Following proper post-operative guidelines ensures a smooth, rapid recovery and prevents painful complications:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <h3 className="text-amber-400 font-bold text-sm">Protect the Blood Clot</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Do NOT spit forcefully, rinse vigorously, or drink through a straw for the first 24 to 48 hours. Negative oral suction can dislodge the clot.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <h3 className="text-cyan-400 font-bold text-sm">Ice Packs & Swelling</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Apply a cold compress outside the cheek for 15 minutes on, 15 minutes off during the first 24 hours to reduce normal post-surgical puffiness.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <h3 className="text-emerald-400 font-bold text-sm">Soft Diet & Hydration</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Enjoy cool, soft foods such as curd, khichdi, smoothies, and soups on the opposite side. Avoid hot, spicy, or sharp-edged snacks for 3 to 5 days.
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold">
            <a 
              href="/wisdom-tooth-extraction" 
              onClick={(e) => handleLinkClick(e, '/wisdom-tooth-extraction')}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
            >
              Wisdom Tooth Service Guide <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/impacted-wisdom-tooth" 
              onClick={(e) => handleLinkClick(e, '/impacted-wisdom-tooth')}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
            >
              Impacted Wisdom Teeth Details <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/tooth-extraction" 
              onClick={(e) => handleLinkClick(e, '/tooth-extraction')}
              className="text-blue-300 hover:text-white flex items-center gap-1.5"
            >
              General Tooth Extraction <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a 
              href="/dental-abscess-treatment" 
              onClick={(e) => handleLinkClick(e, '/dental-abscess-treatment')}
              className="text-slate-300 hover:text-white flex items-center gap-1.5"
            >
              Dental Abscess Care <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">Patient Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto">
              Clear clinical answers regarding wisdom tooth extraction complexity, pricing factors, and care.
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
            <h2 className="text-2xl sm:text-3xl font-extrabold">Have Your Wisdom Tooth Evaluated</h2>
            <p className="text-blue-100 text-sm leading-relaxed">
              Don't suffer from recurring jaw pain, pericoronitis, or crowding. Visit Dr. Prashant Kumar Vats, BDS at Oracle Dental Clinic for a thorough ₹200 clinical evaluation.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <InteractiveButton 
              id="wisdom-bottom-call-btn" 
              onClick={handleCall} 
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <PhoneCall className="w-4 h-4" /> <span>Call 7011961515</span>
            </InteractiveButton>
            <InteractiveButton 
              id="wisdom-bottom-wa-btn" 
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
