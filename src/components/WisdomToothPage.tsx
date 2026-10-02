import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Navigation, 
  UserCheck, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Stethoscope, 
  Award, 
  ArrowLeft,
  ArrowRight,
  AlertCircle,
  HelpCircle,
  Activity,
  Layers,
  Sparkles,
  Info,
  Check,
  X,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';

interface WisdomToothPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath: (path: string) => void;
}

export default function WisdomToothPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: WisdomToothPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // 1. Page Title, Meta Description & Canonical
    const title = "Wisdom Tooth Extraction in Ghaziabad | Oracle Dental Clinic";
    const description = "Looking for wisdom tooth extraction near you in Ghaziabad? Oracle Dental Clinic in Chipiyana Buzurg provides evaluation and treatment for painful, impacted and problematic wisdom teeth.";
    const pageUrl = `${window.location.origin}/wisdom-tooth-extraction`;

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
    setMetaTag("name", "keywords", "wisdom tooth extraction, wisdom tooth removal, wisdom tooth extraction in Ghaziabad, wisdom tooth removal in Ghaziabad, wisdom tooth extraction in Chipiyana Buzurg, wisdom tooth removal in Chipiyana Buzurg, wisdom tooth dentist in Ghaziabad, wisdom tooth dentist near me, wisdom tooth extraction near me, wisdom tooth removal near me, wisdom tooth pain treatment, impacted wisdom tooth removal, impacted tooth extraction, impacted wisdom tooth extraction, wisdom tooth surgery, wisdom tooth surgery in Ghaziabad, wisdom tooth specialist in Ghaziabad, dental clinic for wisdom tooth removal, nearby dentist for wisdom tooth, nearby dental clinic for wisdom tooth, dentist near me for wisdom tooth, dental clinic near me for wisdom tooth, Oracle Dental Clinic");

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:type", "website");
    setMetaTag("property", "og:url", pageUrl);

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    // 2. Structured Data (JSON-LD)
    const dentistSchema = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": `${pageUrl}#dentist`,
      "name": "Oracle Dental Clinic",
      "image": [
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        "https://i.postimg.cc/tCd8wLDv/Chat-GPT-Image-Apr-22-2026-08-21-13-PM.png"
      ],
      "url": pageUrl,
      "telephone": "+917011961515",
      "priceRange": "₹200 Consultation",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg",
        "addressLocality": "Ghaziabad",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201009",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6280",
        "longitude": "77.4520"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "10:00",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "17:00",
          "closes": "21:00"
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "Dr. Prashant Kumar Vats",
        "jobTitle": "Dentist & Oral Healthcare Specialist",
        "honorificSuffix": "BDS"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Wisdom Tooth Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wisdom Tooth Extraction & Surgery",
              "description": "Clinical evaluation, simple extraction, and surgical removal for erupted or impacted wisdom teeth."
            }
          }
        ]
      }
    };

    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": window.location.origin
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Dental Treatments",
          "item": `${window.location.origin}/#services`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Wisdom Tooth Extraction",
          "item": pageUrl
        }
      ]
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };

    const scriptDentist = document.createElement('script');
    scriptDentist.type = 'application/ld+json';
    scriptDentist.id = 'wisdom-dentist-schema';
    scriptDentist.innerHTML = JSON.stringify(dentistSchema);
    document.head.appendChild(scriptDentist);

    const scriptBreadcrumb = document.createElement('script');
    scriptBreadcrumb.type = 'application/ld+json';
    scriptBreadcrumb.id = 'wisdom-breadcrumb-schema';
    scriptBreadcrumb.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(scriptBreadcrumb);

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.id = 'wisdom-faq-schema';
    scriptFaq.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(scriptFaq);

    window.scrollTo(0, 0);

    return () => {
      document.getElementById('wisdom-dentist-schema')?.remove();
      document.getElementById('wisdom-breadcrumb-schema')?.remove();
      document.getElementById('wisdom-faq-schema')?.remove();
    };
  }, []);

  const faqs = [
    {
      question: "What is a wisdom tooth?",
      answer: "A wisdom tooth is a third molar located at the very back of your dental arches. Most adults have four wisdom teeth—one in each quadrant—which typically erupt between ages 17 and 25."
    },
    {
      question: "At what age do wisdom teeth usually erupt?",
      answer: "Wisdom teeth usually erupt during late adolescence or early adulthood, generally between 17 and 25 years of age."
    },
    {
      question: "Does every wisdom tooth need to be removed?",
      answer: "No. A healthy, fully erupted, properly positioned wisdom tooth that can be cleaned easily and has opposing biting contact does not automatically require extraction."
    },
    {
      question: "What are the symptoms of a problematic wisdom tooth?",
      answer: "Common symptoms include jaw pain, localized gum swelling (pericoronitis), difficulty opening your mouth, bad breath, trapped food, tooth decay, or pressure against adjacent molars."
    },
    {
      question: "Why does my wisdom tooth hurt?",
      answer: "Wisdom tooth pain often occurs due to inflammation of the surrounding gum flap (pericoronitis), bacterial infection under a partially erupted tooth, deep tooth decay, or mechanical pressure against adjacent teeth."
    },
    {
      question: "What is an impacted wisdom tooth?",
      answer: "An impacted wisdom tooth is one that lacks sufficient space in the jawbone or erupts at an abnormal angle, preventing it from emerging into its normal functional position."
    },
    {
      question: "What is a partially impacted wisdom tooth?",
      answer: "A partially impacted wisdom tooth breaks partially through the gum tissue but remains partially covered, creating a pocket where bacteria and food debris easily collect."
    },
    {
      question: "Can an impacted wisdom tooth cause swelling?",
      answer: "Yes, bacterial accumulation beneath the gum flap of an impacted wisdom tooth frequently triggers localized infection and painful gum swelling (pericoronitis)."
    },
    {
      question: "Can wisdom teeth cause bad breath?",
      answer: "Yes. Partially erupted wisdom teeth create hard-to-reach food traps where bacteria thrive, leading to persistent bad odor or an unpleasant taste."
    },
    {
      question: "Does wisdom tooth extraction hurt?",
      answer: "During extraction, local anesthesia numbs the tooth and surrounding gums so you feel no sharp pain. You may feel mild pressure or movement. Mild post-operative soreness is expected and managed with medication."
    },
    {
      question: "How is wisdom tooth extraction performed?",
      answer: "After administering local anesthesia, the dentist or oral surgeon creates access to the tooth. For impacted teeth, the tooth may be sectioned into smaller pieces for gentle removal, followed by cleaning and suturing."
    },
    {
      question: "What is the difference between simple and surgical extraction?",
      answer: "Simple extraction is performed on fully erupted, accessible teeth using standard dental instruments. Surgical extraction is required for impacted or deeply embedded teeth and involves a small gum incision and tooth sectioning."
    },
    {
      question: "How long does wisdom tooth extraction take?",
      answer: "A simple wisdom tooth extraction may take 15 to 30 minutes, whereas surgical removal of an impacted tooth usually takes 30 to 60 minutes depending on anatomical complexity."
    },
    {
      question: "How long does wisdom tooth extraction recovery take?",
      answer: "Initial soft tissue healing generally takes 7 to 10 days. Swelling and soreness peak within the first 48–72 hours and gradually improve. Complete bone socket remodeling takes several months."
    },
    {
      question: "What can I eat after wisdom tooth removal?",
      answer: "Eat soft, cool foods like yogurt, smoothies, lukewarm soup, mashed potatoes, and scrambled eggs for the first few days. Avoid hot, spicy, hard, or crunchy foods."
    },
    {
      question: "When can I brush after wisdom tooth extraction?",
      answer: "You can brush your other teeth gently starting the night of surgery, but avoid brushing directly over the extraction site or rinsing vigorously for the first 24 hours."
    },
    {
      question: "What is dry socket?",
      answer: "Dry socket (alveolar osteitis) occurs if the protective blood clot inside the extraction socket dislodges or dissolves prematurely, exposing underlying bone and nerves."
    },
    {
      question: "How can dry socket be prevented?",
      answer: "Prevent dry socket by avoiding smoking/tobacco, avoiding drinking through straws, avoiding vigorous spitting or rinsing for 24–48 hours, and following aftercare instructions."
    },
    {
      question: "Why is my pain getting worse after wisdom tooth extraction?",
      answer: "If pain decreases initially but worsens significantly after 3 to 5 days, it may indicate a dry socket or localized infection that requires evaluation by your dentist."
    },
    {
      question: "Can wisdom tooth extraction damage a nerve?",
      answer: "Nerve sensory changes (affecting the lower lip, chin, or tongue) are uncommon potential risks in lower wisdom tooth surgery when roots lie close to the inferior alveolar or lingual nerves. Pre-operative imaging helps evaluate this relationship."
    },
    {
      question: "Is CBCT required for wisdom tooth removal?",
      answer: "A standard panoramic X-ray (OPG) is usually sufficient. A 3D CBCT scan is recommended only in complex cases where roots lie close to major nerve pathways or sinus cavities."
    },
    {
      question: "Can an upper wisdom tooth affect the sinus?",
      answer: "Yes, upper wisdom tooth roots often lie close to the floor of the maxillary sinus. Dental X-rays evaluate this relationship prior to extraction."
    },
    {
      question: "Can I remove a wisdom tooth during pregnancy?",
      answer: "Elective procedures are generally postponed. However, acute wisdom tooth infection or severe pain during pregnancy should be evaluated by a dentist, with treatment timed appropriately in consultation with your obstetrician."
    },
    {
      question: "Can I have wisdom tooth extraction if I have diabetes?",
      answer: "Yes, provided your blood sugar levels are controlled. Patients with diabetes should inform their dentist so appropriate pre- and post-operative care can be planned."
    },
    {
      question: "What if I take blood-thinning medicines?",
      answer: "Inform your dentist about all blood-thinning medications. Do not stop prescribed medications without medical/dental advice; special local hemostatic measures will be taken during surgery."
    },
    {
      question: "Can antibiotics cure wisdom tooth pain?",
      answer: "Antibiotics may temporarily control bacterial infection in surrounding soft tissues, but they do not alter the physical position of an impacted wisdom tooth. Definitive treatment requires clinical evaluation."
    },
    {
      question: "Can a wisdom tooth grow back after extraction?",
      answer: "No, a permanent wisdom tooth does not grow back once completely extracted."
    },
    {
      question: "How much does wisdom tooth extraction cost in Ghaziabad?",
      answer: "The cost depends on whether the tooth requires a simple extraction or surgical removal for an impacted tooth. Consultation fee at Oracle Dental Clinic is ₹200."
    },
    {
      question: "Where can I get wisdom tooth extraction near Chipiyana Buzurg?",
      answer: "Oracle Dental Clinic is located at Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad, offering wisdom tooth evaluation and extraction by Dr. Prashant Kumar Vats, BDS."
    },
    {
      question: "Where is Oracle Dental Clinic located?",
      answer: "Our clinic address is Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad, UP 201009 (near Dolphin Public School and ABES College)."
    },
    {
      question: "How can I book a wisdom tooth consultation?",
      answer: "You can book a consultation by calling 7011961515, messaging on WhatsApp, or visiting Oracle Dental Clinic during working hours (10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM daily)."
    },
    {
      question: "Do I need an X-ray before wisdom tooth extraction?",
      answer: "Yes, a dental X-ray or panoramic scan (OPG) is necessary before extraction to evaluate root shape, bone structure, and proximity to nerves or sinus cavities."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans leading-relaxed">
      {/* Breadcrumb Navigation */}
      <nav className="bg-slate-900 text-slate-300 py-3 px-4 sm:px-8 text-sm border-b border-slate-800" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button 
              onClick={navigateToHome}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium"
            >
              <ArrowLeft className="w-4 h-4" /> Home
            </button>
            <span>/</span>
            <button
              onClick={() => navigateToPath('/#services')}
              className="hover:text-amber-400 transition-colors font-medium hidden sm:inline"
            >
              Dental Treatments
            </button>
            <span className="hidden sm:inline">/</span>
            <span className="text-white font-semibold truncate">Wisdom Tooth Extraction</span>
          </div>
          <span className="text-xs bg-rose-500/20 text-rose-300 px-3 py-1 rounded-full border border-rose-500/30">
            Oral Surgery Care
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-rose-500/10 text-rose-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-500/20">
              <Stethoscope className="w-3.5 h-3.5 text-rose-400" /> Wisdom Tooth Evaluation & Removal
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Wisdom Tooth Extraction in Ghaziabad
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
              Experiencing wisdom tooth pain, jaw swelling, or difficulty chewing? Get your wisdom tooth evaluated at Oracle Dental Clinic, Chipiyana Buzurg, Ghaziabad. We provide careful clinical examination, diagnostic imaging, and gentle extraction procedures under Dr. Prashant Kumar Vats, BDS.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto md:mx-0 text-left text-xs sm:text-sm">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col">
                <span className="text-slate-400 text-xs">Consultation Fee</span>
                <span className="text-amber-300 font-bold text-base sm:text-lg">₹200</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col">
                <span className="text-slate-400 text-xs">Attending Dentist</span>
                <span className="text-white font-bold text-xs sm:text-sm">Dr. Prashant Kumar Vats, BDS</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col col-span-2 sm:col-span-1">
                <span className="text-slate-400 text-xs">Clinic Hours</span>
                <span className="text-cyan-300 font-bold text-xs">10 AM - 2 PM, 5 PM - 9 PM</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center md:justify-start">
              <InteractiveButton
                id="wisdom-hero-whatsapp-btn"
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> BOOK CONSULTATION
              </InteractiveButton>

              <InteractiveButton
                id="wisdom-hero-call-btn"
                onClick={handleCall}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" /> CALL NOW
              </InteractiveButton>

              <InteractiveButton
                id="wisdom-hero-directions-btn"
                onClick={handleDirections}
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5 text-cyan-300" /> GET DIRECTIONS
              </InteractiveButton>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="bg-slate-900/80 border border-slate-800 p-6 rounded-3xl shadow-2xl max-w-sm w-full space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-md border border-white/20">
                  O
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Oracle Dental Clinic</h3>
                  <p className="text-xs text-rose-400 font-medium">Wisdom Tooth & Surgery Care</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <UserCheck className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Dr. Prashant Kumar Vats, BDS</p>
                    <p className="text-xs text-slate-400">Dental Surgeon & Practitioner</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 mt-1 flex-shrink-0" />
                  <p className="text-xs text-slate-300">
                    Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad, UP
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-xs text-slate-300">
                    10:00 AM – 2:00 PM | 5:00 PM – 9:00 PM (Daily)
                  </p>
                </div>
              </div>

              <div className="bg-blue-950/60 rounded-xl p-3 border border-blue-800/50 text-center">
                <p className="text-xs text-blue-200">Consultation Fee: <span className="font-extrabold text-amber-300 text-sm">₹200</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is a Wisdom Tooth? */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Understanding Third Molars
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What Is a Wisdom Tooth?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4 text-slate-700 text-base sm:text-lg">
              <p>
                <strong>Wisdom teeth</strong> are the third set of molars located at the very back of your upper and lower jaws. They are the last permanent teeth to emerge, typically erupting during late adolescence or early adulthood (ages 17 to 25).
              </p>
              <p>
                Some wisdom teeth erupt normally into proper alignment with adequate jaw space, functioning like any other molar without causing problems.
              </p>
              <p>
                However, due to modern jaw size variations, many people lack sufficient space in their jawbone. This causes wisdom teeth to become <strong>partially or completely impacted</strong>, emerging at odd angles or remaining trapped under gum tissue and bone.
              </p>
            </div>

            <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" /> Key Clinical Facts
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></span>
                  <span><strong>Not every wisdom tooth requires extraction:</strong> Healthy, cleanable, fully erupted teeth can often be retained.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                  <span><strong>Extraction indications:</strong> Considered when there is pain, recurrent swelling, decay, or risk to adjacent teeth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                  <span><strong>Pre-operative imaging:</strong> Dental X-rays evaluate root shapes and nerve proximity prior to treatment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When Does a Wisdom Tooth Need Extraction? */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              When Does a Wisdom Tooth Need Extraction?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Extraction is recommended when a wisdom tooth causes clinical disease or threatens oral health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Pericoronitis (Gum Inflammation)",
                desc: "Recurrent bacterial infection and painful gum flap swelling over a partially erupted wisdom tooth."
              },
              {
                title: "Deep Tooth Decay (Caries)",
                desc: "Cavities in hard-to-reach wisdom teeth that cannot be restored predictably with fillings."
              },
              {
                title: "Damage to Second Molars",
                desc: "An angled wisdom tooth pushing against the adjacent molar, causing decay or bone loss."
              },
              {
                title: "Recurrent Pain & Food Trapping",
                desc: "Persistent food impaction between molars causing foul odor, gum pockets, and localized pain."
              },
              {
                title: "Cyst Formation or Pathology",
                desc: "Fluid-filled sacs (cysts) forming around an impacted tooth crown, risking jawbone damage."
              },
              {
                title: "Orthodontic or Prosthetic Planning",
                desc: "Extraction planned to facilitate tooth movement or accommodate prosthetics as indicated."
              }
            ].map((reason, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-6 h-6 text-rose-500 mb-3" />
                <h3 className="font-bold text-slate-900 text-base mb-1">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Does My Wisdom Tooth Hurt? Symptoms */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            Symptoms & Causes
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Does My Wisdom Tooth Hurt?
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Common symptoms associated with problematic wisdom teeth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Localized jaw pain or throbbing pain at the back of the mouth",
            "Swollen, red, or tender gum tissue covering the tooth",
            "Difficulty opening your mouth wide (trismus)",
            "Pain while chewing or biting down",
            "Unpleasant taste or bad breath due to trapped bacteria",
            "Headaches or radiating pain toward the ear/jaw angle",
            "Swollen lymph nodes under the jaw",
            "Tenderness in adjacent molar teeth"
          ].map((symptom, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-2xs">
              <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-800 text-sm font-medium">{symptom}</span>
            </div>
          ))}
        </div>

        <div className="bg-rose-50 border border-rose-200 rounded-2xl p-5 text-sm text-rose-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Urgent Evaluation Notice:</strong> If you experience rapidly spreading facial swelling, fever, difficulty swallowing, or difficulty breathing, seek immediate emergency medical/dental evaluation.
          </p>
        </div>
      </section>

      {/* Impacted Wisdom Tooth Types */}
      <section className="py-12 md:py-16 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Types of Impacted Wisdom Teeth
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Impacted wisdom teeth are classified by their anatomical angle and depth within the jawbone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Mesioangular Impaction",
                desc: "The tooth is angled forward toward the front of the mouth (the most common type)."
              },
              {
                title: "Distoangular Impaction",
                desc: "The tooth is angled backward toward the rear of the jaw."
              },
              {
                title: "Vertical Impaction",
                desc: "The tooth is positioned upright but fails to erupt fully due to bone or tissue coverage."
              },
              {
                title: "Horizontal Impaction",
                desc: "The tooth is lying completely sideways (90 degrees) against the root of the second molar."
              }
            ].map((impaction, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-2xs">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-100 px-2 py-0.5 rounded-md mb-3 inline-block">
                  Angle Classification
                </span>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{impaction.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{impaction.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-slate-100/80 p-6 rounded-2xl border border-slate-200 text-sm text-slate-700 space-y-2">
            <p><strong>Depth Classifications:</strong></p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li><strong>Soft Tissue Impaction:</strong> The tooth crown has passed through bone but remains partially covered by gum tissue.</li>
              <li><strong>Partial Bony Impaction:</strong> The tooth is partially emerged, but part of the crown remains encased in jawbone.</li>
              <li><strong>Complete Bony Impaction:</strong> The tooth is completely encased within jawbone tissue.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Simple vs Surgical Extraction */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">Method 1</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Simple Wisdom Tooth Extraction
          </h2>
          <div className="text-slate-700 text-sm sm:text-base space-y-3">
            <p>
              Performed on wisdom teeth that have fully erupted into the mouth and are accessible above the gumline.
            </p>
            <p>
              The tooth is numbed with local anesthesia, loosened using standard dental instruments, and gently removed.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <span className="inline-block bg-rose-100 text-rose-800 text-xs font-bold px-3 py-1 rounded-full">Method 2</span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Surgical Wisdom Tooth Extraction
          </h2>
          <div className="text-slate-700 text-sm sm:text-base space-y-3">
            <p>
              Required for wisdom teeth that are partially or completely impacted under gum or bone.
            </p>
            <p>
              Involves creating a small incision in the gum tissue, removing overlying bone if necessary, and sometimes sectioning the tooth into smaller pieces for gentle removal.
            </p>
          </div>
        </div>
      </section>

      {/* Step by Step Extraction Process */}
      <section className="py-12 md:py-16 bg-slate-100/70 border-y border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How Is Wisdom Tooth Extraction Performed?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              A structured clinical procedure designed for patient safety and comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation & Imaging", desc: "Clinical checkup and panoramic X-ray (OPG) to evaluate root anatomy and nerve proximity." },
              { step: "02", title: "Local Anesthesia", desc: "Local anesthetic administered to completely numb the wisdom tooth and surrounding gums." },
              { step: "03", title: "Gentle Tooth Removal", desc: "Access created if impacted; tooth removed (sectioned into smaller pieces if needed)." },
              { step: "04", title: "Socket Cleaning & Suturing", desc: "Socket cleaned, disinfected, and dissolvable sutures placed if required to assist healing." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs relative overflow-hidden">
                <span className="text-3xl font-black text-slate-200 absolute top-4 right-4 select-none">{step.step}</span>
                <h3 className="font-bold text-slate-900 text-base mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Does It Hurt, Recovery & Aftercare */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pain & Anesthesia */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Does Wisdom Tooth Extraction Hurt?
            </h2>
            <div className="text-slate-700 text-sm sm:text-base space-y-3">
              <p>
                During the procedure, <strong>local anesthesia</strong> is administered to ensure you feel no sharp procedural pain. You may feel mild pressure or movement as the tooth is loosened.
              </p>
              <p>
                After the anesthesia wears off, mild to moderate soreness, jaw stiffness, and swelling are normal for a few days. These are managed with recommended medications and ice packs.
              </p>
            </div>
          </div>

          {/* Recovery Timeline */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Recovery Timeline After Extraction
            </h2>
            <div className="text-slate-700 text-sm sm:text-base space-y-3">
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>First 24 Hours:</strong> Blood clot forms in the socket. Rest, avoid spitting or using straws.</li>
                <li><strong>Days 2–3:</strong> Swelling and jaw stiffness peak, then begin to subside.</li>
                <li><strong>Days 7–10:</strong> Soft tissue initial healing; sutures dissolve or are removed.</li>
                <li><strong>3–6 Months:</strong> Complete bone remodeling inside the extraction socket.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Dry Socket Explanation */}
        <div className="bg-amber-50/70 p-6 sm:p-8 rounded-3xl border border-amber-200 space-y-4">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
            <AlertCircle className="w-5 h-5 text-amber-600" /> Post-Operative Condition
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            What Is Dry Socket (Alveolar Osteitis)?
          </h2>
          <div className="text-slate-700 text-sm sm:text-base space-y-3 leading-relaxed">
            <p>
              <strong>Dry socket</strong> is a temporary post-operative condition that occurs if the protective blood clot in the extraction socket dislodges or dissolves prematurely, exposing the underlying bone and nerve endings.
            </p>
            <p>
              <strong>Symptoms:</strong> Throbbing pain that worsens 3 to 5 days after surgery, radiating toward the ear, accompanied by bad breath or an unpleasant taste.
            </p>
            <p>
              <strong>Prevention:</strong> Avoid smoking/tobacco, avoid drinking through straws, avoid vigorous spitting or rinsing for 24–48 hours, and follow all aftercare guidelines. If dry socket occurs, your dentist will place a soothing medicated dressing in the socket to relieve pain quickly.
            </p>
          </div>
        </div>
      </section>

      {/* Anatomical Considerations: Nerve & Sinus */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Anatomical Considerations: Upper vs. Lower Wisdom Teeth
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Lower and upper wisdom teeth present distinct anatomical relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
              <h3 className="font-extrabold text-xl text-slate-900">Lower Wisdom Teeth & Nerve Proximity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Roots of lower wisdom teeth lie near the <em>inferior alveolar nerve</em> (which provides sensation to the lower lip and chin) and the <em>lingual nerve</em> (tongue sensation). Pre-operative panoramic X-rays evaluate this relationship to minimize risk.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
              <h3 className="font-extrabold text-xl text-slate-900">Upper Wisdom Teeth & Maxillary Sinus</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Roots of upper wisdom teeth are close to the floor of the <em>maxillary sinus</em> cavity. Dental X-rays evaluate sinus proximity before extraction to prevent sinus complications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wisdom Tooth Extraction Cost in Ghaziabad */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Wisdom Tooth Extraction Cost in Ghaziabad
          </h2>
          <div className="text-slate-700 space-y-3 text-base sm:text-lg leading-relaxed">
            <p>
              The cost of wisdom tooth removal varies based on clinical complexity:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
              <li><strong>Simple Extraction:</strong> Fully erupted, accessible wisdom teeth.</li>
              <li><strong>Surgical Extraction:</strong> Partially or fully impacted teeth requiring gum access or tooth sectioning.</li>
              <li><strong>Diagnostic Imaging Needed:</strong> Digital X-ray or panoramic OPG scan requirements.</li>
            </ul>
            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-200 mt-4">
              <p className="text-blue-900 text-sm font-semibold">
                Consultation Fee: Initial clinical examination and wisdom tooth evaluation fee at Oracle Dental Clinic is <strong>₹200</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO & Areas Served */}
      <section className="py-12 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-block bg-rose-500/10 text-rose-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-rose-500/20">
              Local Clinic Location
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Wisdom Tooth Extraction in Chipiyana Buzurg, Ghaziabad
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Oracle Dental Clinic provides wisdom tooth evaluations and extractions at:
            </p>
            <p className="text-amber-300 font-medium text-sm sm:text-base">
              Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad, Uttar Pradesh.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <h3 className="text-lg font-bold text-white mb-4">Areas Near Chipiyana Buzurg Served:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {[
                "Chipiyana Buzurg",
                "Jaat Chowk",
                "KTS Complex",
                "Crossings Republik",
                "Lal Kuan Ghaziabad",
                "Chappraula",
                "Shahberi",
                "Noida Extension",
                "Panchsheel Greens 2",
                "ABES College area",
                "Ghaziabad"
              ].map((area, idx) => (
                <div key={idx} className="bg-slate-800 border border-slate-700 rounded-xl p-3 text-center text-xs text-slate-300 font-medium flex items-center justify-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <InteractiveButton
              id="wisdom-loc-call-btn"
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm"
            >
              Call 7011961515
            </InteractiveButton>

            <InteractiveButton
              id="wisdom-loc-whatsapp-btn"
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3 px-6 rounded-xl text-sm"
            >
              Book via WhatsApp
            </InteractiveButton>

            <InteractiveButton
              id="wisdom-loc-directions-btn"
              onClick={handleDirections}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 text-sm"
            >
              Get Directions
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Why Choose Oracle Dental Clinic */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Oracle Dental Clinic for Wisdom Tooth Removal
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Factual benefits supported by our local clinic features and patient care focus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Dr. Prashant Kumar Vats, BDS",
              desc: "Clinical evaluation and surgical removal planned directly by an experienced dental practitioner."
            },
            {
              title: "Local Chipiyana Location",
              desc: "Located at Jaat Chowk, KTS Complex, accessible for local residents of Ghaziabad."
            },
            {
              title: "Transparent ₹200 Consultation",
              desc: "Affordable initial examination and discussion of wisdom tooth removal options."
            },
            {
              title: "Diagnostic Imaging Guidance",
              desc: "Pre-operative X-rays taken to map root positions and nerve pathways before surgery."
            },
            {
              title: "Flexible Working Hours",
              desc: "Open all 7 days from 10:00 AM – 2:00 PM and 5:00 PM – 9:00 PM daily."
            },
            {
              title: "Structured Aftercare Support",
              desc: "Clear post-operative guidelines and follow-up care to support comfortable healing."
            }
          ].map((why, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
              <CheckCircle2 className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="font-bold text-slate-900 text-base mb-1">{why.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{why.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comprehensive FAQ Section (32 FAQs) */}
      <section className="py-12 md:py-16 bg-slate-100/70 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Wisdom Tooth Removal
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Medically responsible answers to common wisdom tooth questions.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-4 sm:p-5 font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors text-sm sm:text-base"
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-slate-100 px-4 sm:px-5 py-4 text-slate-600 text-sm leading-relaxed bg-slate-50/50"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-12 bg-white border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-3xl shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Need a Wisdom Tooth Evaluation?</h3>
            <p className="text-slate-300 text-sm">Visit Oracle Dental Clinic at KTS Complex near Jaat Chowk, Chipiyana Buzurg.</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <InteractiveButton
              id="wisdom-bottom-call-btn"
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm"
            >
              Call 7011961515
            </InteractiveButton>

            <button
              onClick={() => navigateToPath('/dental-implants')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 text-sm transition-colors"
            >
              Dental Implants Page
            </button>

            <button
              onClick={() => navigateToPath('/root-canal-treatment')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 text-sm transition-colors"
            >
              Root Canal Treatment Page
            </button>

            <button
              onClick={navigateToHome}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 text-sm transition-colors"
            >
              Back to Main Website
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
