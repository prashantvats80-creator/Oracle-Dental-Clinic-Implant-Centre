import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Navigation, 
  Calendar, 
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
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { preloadImages } from '../utils/imagePreloader';
import { GBP_CONFIG } from '../config/googleBusinessProfile';

interface RootCanalPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath: (path: string) => void;
}

export default function RootCanalPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: RootCanalPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // 1. Page Title, Meta Description & Canonical
    const title = "Root Canal Treatment in Ghaziabad | Oracle Dental Clinic";
    const description = "Comprehensive, gentle root canal treatment in Ghaziabad by Dr. Prashant Kumar Vats, BDS at Oracle Dental Clinic. Pain relief, tooth preservation & ₹200 consultation.";
    const pageUrl = `${window.location.origin}/root-canal-treatment`;

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
    setMetaTag("name", "keywords", "root canal treatment, root canal treatment in Ghaziabad, root canal treatment near me, RCT treatment, RCT treatment in Ghaziabad, root canal dentist in Ghaziabad, root canal specialist in Ghaziabad, root canal clinic in Ghaziabad, dental root canal treatment, tooth root canal treatment, root canal treatment in Chipiyana Buzurg, root canal treatment near Chipiyana Buzurg, RCT dentist near me, root canal dentist near me, nearby root canal dentist, nearby dental clinic for root canal, root canal clinic near me, root canal treatment near Jaat Chowk, root canal treatment near Crossings Republik, root canal treatment near Noida Extension, Oracle Dental Clinic");

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

    // 2. Structured Data (JSON-LD): MedicalBusiness/Dentist, BreadcrumbList & FAQPage
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
        "name": "Root Canal Treatment Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Root Canal Treatment (RCT)",
              "description": "Therapeutic endodontic procedure to relieve toothache and save infected natural teeth."
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
          "name": "Root Canal Treatment",
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
    scriptDentist.id = 'rct-dentist-schema';
    scriptDentist.innerHTML = JSON.stringify(dentistSchema);
    document.head.appendChild(scriptDentist);

    const scriptBreadcrumb = document.createElement('script');
    scriptBreadcrumb.type = 'application/ld+json';
    scriptBreadcrumb.id = 'rct-breadcrumb-schema';
    scriptBreadcrumb.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(scriptBreadcrumb);

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.id = 'rct-faq-schema';
    scriptFaq.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(scriptFaq);

    // Preload critical treatment images
    preloadImages([
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
    ]);

    window.scrollTo(0, 0);

    return () => {
      document.getElementById('rct-dentist-schema')?.remove();
      document.getElementById('rct-breadcrumb-schema')?.remove();
      document.getElementById('rct-faq-schema')?.remove();
    };
  }, []);

  const faqs = [
    {
      question: "What is root canal treatment?",
      answer: "Root canal treatment (endodontic therapy) is a dental procedure designed to remove infected or inflamed pulp tissue from inside a tooth, clean and seal the root canal space, and restore the tooth so it can function normally."
    },
    {
      question: "Why is root canal treatment needed?",
      answer: "A root canal is needed when the dental pulp—the soft tissue inside the tooth containing nerves and blood vessels—becomes inflamed or infected due to deep decay, repeated dental work, cracks, or dental trauma."
    },
    {
      question: "Is root canal treatment painful?",
      answer: "During the procedure, local anesthesia is administered to numb the tooth and surrounding tissues, minimizing discomfort. Mild tenderness or sensitivity may occur for a few days after treatment, which can usually be managed with recommended medications."
    },
    {
      question: "How long does a root canal treatment take?",
      answer: "The duration depends on the tooth's location, canal complexity, and level of infection. Most appointments take between 45 to 90 minutes per session."
    },
    {
      question: "How many visits are required for RCT?",
      answer: "Many root canals can be completed in 1 to 2 visits, depending on the severity of infection, anatomical complexity, and individual clinical response."
    },
    {
      question: "What are the symptoms of a tooth needing a root canal?",
      answer: "Common symptoms include persistent toothache, prolonged sensitivity to hot or cold foods, pain when biting or chewing, swollen gums, tooth discoloration, or a pimple-like bump on the gums."
    },
    {
      question: "Can a root canal save a badly infected tooth?",
      answer: "Yes, if the tooth structure is intact and supported by healthy bone, a root canal removes the internal infection and allows the natural tooth to be saved."
    },
    {
      question: "Do I need a crown after root canal treatment?",
      answer: "In many cases, especially for back teeth (premolars and molars) subjected to high chewing forces, a dental crown is recommended to protect the treated tooth from fracture and restore full bite function."
    },
    {
      question: "What happens if I do not get a root canal?",
      answer: "If left untreated, an infected tooth pulp can cause spreading infection, bone loss around the root tip, severe pain, dental abscesses, and eventually necessitate tooth extraction."
    },
    {
      question: "Can I get a root canal instead of tooth extraction?",
      answer: "Root canal treatment is generally preferred when the tooth can be predictably restored, as preserving your natural tooth maintains proper chewing alignment and jawbone health."
    },
    {
      question: "Is root canal treatment safe?",
      answer: "Yes, root canal treatment is a standard, highly routine endodontic procedure performed under strict hygienic and clinical safety protocols."
    },
    {
      question: "How long does a root canal-treated tooth last?",
      answer: "With proper oral hygiene, routine dental checkups, and a timely final restoration (such as a crown), a root canal-treated tooth can last for many years or even a lifetime."
    },
    {
      question: "Can a root canal treatment fail?",
      answer: "While root canal treatment has high clinical success rates, failure can occasionally occur due to complex uncleaned canal branches, new dental decay, coronal seal leakage, or tooth fracture. Retreatment or surgical evaluation may be considered in such cases."
    },
    {
      question: "What is root canal retreatment?",
      answer: "Root canal retreatment involves reopening the previously treated root canals, removing old filling materials, thoroughly re-cleaning and re-disinfecting the canals, and resealing them."
    },
    {
      question: "Why does my tooth hurt after root canal treatment?",
      answer: "Mild tenderness after treatment is common due to localized tissue inflammation around the root tip. If pain is severe, persistent, or accompanied by swelling, you should contact your dentist for evaluation."
    },
    {
      question: "How much does root canal treatment cost in Ghaziabad?",
      answer: "The cost of root canal treatment varies based on the tooth type (front tooth vs. molar), canal complexity, imaging needed, and choice of restoration or crown. An initial consultation fee at Oracle Dental Clinic is ₹200."
    },
    {
      question: "Can I eat normally after root canal treatment?",
      answer: "You should avoid chewing on the treated tooth until the numbness wears off and until the final permanent restoration or crown is placed to prevent biting your cheek or fracturing a temporary filling."
    },
    {
      question: "Where can I get root canal treatment near Chipiyana Buzurg?",
      answer: "Oracle Dental Clinic is located at Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad, offering root canal consultation and care by Dr. Prashant Kumar Vats, BDS."
    },
    {
      question: "Is there a root canal dentist near Jaat Chowk?",
      answer: "Yes, Oracle Dental Clinic is conveniently situated right at KTS Complex near Jaat Chowk in Chipiyana Buzurg."
    },
    {
      question: "How can I book a root canal consultation at Oracle Dental Clinic?",
      answer: "You can book a consultation by calling 7011961515, messaging via WhatsApp, or visiting the clinic during working hours (10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM)."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans leading-relaxed">
      {/* Semantic Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Dental Treatments', path: '/#services' },
          { label: 'Root Canal Treatment', path: '/root-canal-treatment' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Endodontic Care"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-cyan-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-cyan-500/20">
              <Stethoscope className="w-3.5 h-3.5 text-cyan-400" /> Professional Endodontic Consultation
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Root Canal Treatment in Ghaziabad
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
              Root canal treatment is a clinical dental procedure used to treat infection or inflammation inside a tooth, helping relieve toothache and preserve your natural tooth structure when appropriate. Consult with Dr. Prashant Kumar Vats, BDS at Oracle Dental Clinic.
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
                id="rct-hero-whatsapp-btn"
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> BOOK RCT CONSULTATION
              </InteractiveButton>

              <InteractiveButton
                id="rct-hero-call-btn"
                onClick={handleCall}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" /> CALL NOW
              </InteractiveButton>

              <InteractiveButton
                id="rct-hero-directions-btn"
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
                  <p className="text-xs text-cyan-400 font-medium">Root Canal & General Dentistry</p>
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
                    10:00 AM – 2:00 PM | 5:00 PM – 9:00 PM (All Days)
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

      {/* What Is Root Canal Treatment? */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Understanding Endodontics
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What Is Root Canal Treatment?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4 text-slate-700 text-base sm:text-lg">
              <p>
                To understand a <strong>root canal treatment</strong>, it helps to know the basic anatomy of a tooth. A tooth consists of outer hard layers called <strong>enamel</strong> and <strong>dentin</strong>, surrounding an inner soft tissue called the <strong>dental pulp</strong>.
              </p>
              <p>
                The pulp contains blood vessels, nerves, and connective tissue that help the tooth develop during growth. When deep decay, trauma, or cracks allow bacteria to reach the pulp, the tissue becomes inflamed (<em>pulpitis</em>) or infected (<em>pulp necrosis</em>).
              </p>
              <p>
                <strong>Root canal treatment</strong> (endodontic therapy) is a dental procedure where the infected or inflamed pulp tissue is carefully removed from inside the pulp chamber and root canals. The internal space is then thoroughly cleaned, disinfected, shaped, and filled with a biocompatible material (such as gutta-percha) to prevent re-infection.
              </p>
            </div>

            <div className="md:col-span-5 space-y-4">
              <TreatmentImage
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80"
                alt="Educational diagram illustrating dental pulp infection and deep decay requiring root canal treatment"
                caption="Educational diagram showing healthy tooth structure vs deep decay penetrating the pulp chamber."
                aspectRatio="4/3"
                priority={true}
              />
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" /> Key Anatomical Layers
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-1 flex-shrink-0"></span>
                    <span><strong>Enamel:</strong> Hard, protective outer layer of the tooth.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-1 flex-shrink-0"></span>
                    <span><strong>Dentin:</strong> Dense tissue beneath enamel surrounding the pulp.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 mt-1 flex-shrink-0"></span>
                    <span><strong>Dental Pulp:</strong> Center soft tissue containing nerves and blood vessels.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1 flex-shrink-0"></span>
                    <span><strong>Root Canals:</strong> Pathways extending from pulp chamber to root tip.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Is Root Canal Treatment Needed? */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              When Do You Need a Root Canal?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              A clinical dental examination and X-ray evaluation determine whether root canal therapy is required.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Deep Dental Decay",
                desc: "Untreated cavities that penetrate through enamel and dentin into the dental pulp tissue."
              },
              {
                title: "Irreversible Pulpitis",
                desc: "Severe, ongoing pulp inflammation that cannot heal naturally."
              },
              {
                title: "Pulp Necrosis",
                desc: "Death of the nerve and vascular tissue inside the tooth, often leading to chronic infection."
              },
              {
                title: "Periapical Abscess",
                desc: "Pus accumulation at the root tip caused by bacterial infection spreading beyond the canal."
              },
              {
                title: "Cracked or Fractured Tooth",
                desc: "Trauma or deep fractures that expose the inner pulp chamber to oral bacteria."
              },
              {
                title: "Repeated Dental Procedures",
                desc: "Teeth subjected to extensive or repeated deep restorative work that irritates the pulp."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm mb-3">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Symptoms */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-block bg-amber-50 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            Clinical Indicators
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Symptoms That May Indicate the Need for a Root Canal
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Symptoms can vary depending on the stage of infection. Some teeth may exhibit severe discomfort, while others remain symptom-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Persistent or throbbing toothache",
            "Lingering sensitivity to hot or cold foods",
            "Pain while chewing or applying pressure",
            "Spontaneous tooth pain or night pain",
            "Swelling or tenderness in adjacent gums",
            "Pimple-like bump (sinus tract) on gums",
            "Darkening or discoloration of the tooth",
            "Deep cavity or visible crack in tooth"
          ].map((symptom, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-3 shadow-2xs">
              <AlertCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <span className="text-slate-800 text-sm font-medium">{symptom}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-5 text-sm text-blue-900 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Clinical Note:</strong> Symptoms alone do not confirm a diagnosis. Certain infected or non-vital teeth may produce little to no pain. A professional clinical examination and dental radiography are required for proper evaluation.
          </p>
        </div>
      </section>

      {/* Root Canal Treatment Procedure: Step by Step */}
      <section className="py-12 md:py-16 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Root Canal Treatment Procedure: Step by Step
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Endodontic therapy follows a structured sequence aimed at eliminating infection and preserving the tooth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Clinical Examination & Imaging",
                desc: "Visual inspection and dental X-rays are taken to assess root canal anatomy, bone condition, and extent of infection."
              },
              {
                step: "02",
                title: "Local Anesthesia",
                desc: "Local anesthetic is administered to numb the tooth and surrounding tissue, ensuring patient comfort during treatment."
              },
              {
                step: "03",
                title: "Tooth Isolation",
                desc: "The tooth is isolated (often using a protective barrier) to keep it dry and clean from saliva during the procedure."
              },
              {
                step: "04",
                title: "Access Opening",
                desc: "A small opening is created through the crown of the tooth to access the inner pulp chamber and root canals."
              },
              {
                step: "05",
                title: "Pulp Removal & Cleaning",
                desc: "Infected or necrotic pulp tissue is gently removed using fine endodontic instruments."
              },
              {
                step: "06",
                title: "Canal Shaping & Disinfection",
                desc: "The canals are shaped and thoroughly flushed with antimicrobial irrigating solutions to eliminate bacteria."
              },
              {
                step: "07",
                title: "Root Canal Filling & Sealing",
                desc: "The cleaned canals are filled with a biocompatible material (gutta-percha) and sealed with adhesive cement."
              },
              {
                step: "08",
                title: "Temporary or Core Restoration",
                desc: "A temporary filling or permanent core buildup is placed to protect the access opening against contamination."
              },
              {
                step: "09",
                title: "Final Restoration / Crown Placement",
                desc: "When indicated, a permanent restoration or dental crown is fitted to restore strength, aesthetics, and bite function."
              }
            ].map((stepItem, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 relative overflow-hidden">
                <span className="text-3xl font-black text-slate-200 absolute top-4 right-4 select-none">
                  {stepItem.step}
                </span>
                <div className="relative z-10">
                  <h3 className="font-bold text-slate-900 text-base mb-2">{stepItem.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{stepItem.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <TreatmentImage
              src="https://i.postimg.cc/fL7Y30vY/Chat-GPT-Image-Jun-23-2026-08-31-58-PM.png"
              alt="Step-by-step root canal treatment procedure illustration showing cleaning, shaping, and sealing"
              caption="Educational illustration: Step-by-step root canal cleaning, anti-bacterial shaping, and gutta-percha canal sealing."
              aspectRatio="4/3"
            />
            <TreatmentImage
              src="https://i.postimg.cc/gcT2V2Bw/Chat-GPT-Image-Jun-23-2026-08-38-15-PM.png"
              alt="Educational diagram showing dental crown placement over a root canal treated tooth for structural strength"
              caption="Educational diagram: Dental crown placed over a root-canal treated tooth to restore structural durability."
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>

      {/* Pain, Duration & Visit Requirements */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Is RCT Painful? */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Is Root Canal Treatment Painful?
            </h2>
            <div className="text-slate-700 text-sm sm:text-base space-y-3">
              <p>
                A common misconception is that root canal treatment is painful. In reality, modern endodontic procedures are performed under <strong>local anesthesia</strong>, which numbs the tooth and surrounding tissues.
              </p>
              <p>
                The primary purpose of a root canal is to <em>relieve</em> the severe pain caused by internal tooth infection.
              </p>
              <p>
                After the anesthesia wears off, mild post-treatment tenderness or sensitivity when chewing is normal for a few days due to tissue healing around the root tip. This can generally be managed with recommended medications.
              </p>
            </div>
          </div>

          {/* Duration & Visits */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              How Long Does RCT Take & How Many Visits?
            </h2>
            <div className="text-slate-700 text-sm sm:text-base space-y-3">
              <p>
                The duration and number of appointments vary based on several clinical factors:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li><strong>Tooth Type:</strong> Front teeth generally have 1 canal, while molars may have 3 to 4 complex canals.</li>
                <li><strong>Infection Severity:</strong> Severe infections may require intra-canal medicament placement for a few days before final sealing.</li>
                <li><strong>Anatomical Complexity:</strong> Calcified canals or curved roots require additional meticulous care.</li>
              </ul>
              <p className="text-sm font-medium text-slate-900">
                Many routine root canals can be completed in 1 to 2 visits of 45 to 90 minutes each.
              </p>
            </div>
          </div>
        </div>

        {/* RCT for Different Teeth */}
        <div className="bg-slate-100/70 p-6 sm:p-8 rounded-3xl border border-slate-200/80">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-4">
            Root Canal Treatment for Different Teeth
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm text-slate-700">
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">Front Teeth (Incisors & Canines)</h3>
              <p className="leading-relaxed">Typically contain 1 root canal. Procedures are generally straightforward and require less time to clean and seal.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">Premolars</h3>
              <p className="leading-relaxed">Usually contain 1 or 2 root canals. Require careful anatomical mapping before placing core restoration.</p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 text-base mb-2">Molars (Back Teeth)</h3>
              <p className="leading-relaxed">Contain 3 to 4 narrow, curved canals. Subjected to high chewing pressure, often requiring a protective crown.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Root Canal + Crown & Comparison with Extraction */}
      <section className="py-12 md:py-16 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Do You Need a Crown? */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Do You Need a Crown After Root Canal Treatment?
            </h2>
            <div className="prose prose-slate max-w-none text-slate-700 space-y-3 text-base sm:text-lg">
              <p>
                A tooth that has undergone a root canal no longer has living pulp tissue inside, which can make it more brittle over time. Additionally, significant tooth structure is often lost due to prior decay or access preparation.
              </p>
              <p>
                For <strong>posterior teeth (premolars and molars)</strong> subjected to heavy grinding forces, placing a full-coverage <strong>dental crown</strong> is frequently recommended to protect the remaining structure from fracture and ensure long-term durability.
              </p>
              <p>
                For front teeth with minimal structural loss, a composite dental filling may sometimes suffice, depending on clinical assessment.
              </p>
            </div>
          </div>

          {/* Root Canal vs Extraction */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Root Canal Treatment vs Tooth Extraction
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-xs space-y-3">
                <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">Option 1</span>
                <h3 className="font-extrabold text-xl text-slate-900">Root Canal Treatment</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>Preserves your natural tooth structure and root support.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>Maintains natural chewing alignment and jawbone density.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>Avoids the need for adjacent tooth preparation for bridges.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                <span className="inline-block bg-slate-100 text-slate-800 text-xs font-bold px-3 py-1 rounded-full">Option 2</span>
                <h3 className="font-extrabold text-xl text-slate-900">Tooth Extraction</h3>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span>Removes the entire tooth, creating a gap in the dental arch.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span>May allow adjacent teeth to shift over time if unreplaced.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                    <span>May require future replacement like dental implants or bridges.</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-xs text-slate-500 italic">
              Note: Extraction may be necessary if a tooth has severe vertical root fractures, non-restorable decay below the gumline, or insufficient bone support. Your dentist will evaluate restorability before recommending treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Failure, Retreatment & Complications */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Can RCT Fail? */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Can a Root Canal Fail & What Is Retreatment?
            </h2>
            <div className="text-slate-700 text-sm sm:text-base space-y-3">
              <p>
                Root canal treatment has high clinical success rates. However, persistent or recurrent infection can occasionally develop due to uncleaned narrow canal branches, delayed final restoration, coronal leakage, or new dental decay.
              </p>
              <p>
                <strong>Root Canal Retreatment:</strong> In cases of failure, retreatment involves removing previous filling material, thoroughly re-cleaning and re-disinfecting the canals, and resealing them.
              </p>
            </div>
          </div>

          {/* Complications */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Possible Complications & Safety
            </h2>
            <div className="text-slate-700 text-sm sm:text-base space-y-3">
              <p>
                Endodontic procedures are safe and routinely performed. Potential clinical complexities may include:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li>Temporary post-operative tenderness or localized inflammation</li>
                <li>Instrument separation in narrow or severely curved canals</li>
                <li>Root perforation or persistent anatomical infection</li>
                <li>Inability to restore a severely fractured tooth root</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Aftercare & What to Expect */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Root Canal Aftercare & Recovery
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Guidelines to support smooth recovery after your endodontic procedure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Avoid Chewing on Temporary Restoration",
                desc: "Do not chew hard foods on the treated side until your final crown or permanent restoration is placed."
              },
              {
                title: "Maintain Oral Hygiene",
                desc: "Continue gentle brushing and flossing around the treated area to keep gums clean and healthy."
              },
              {
                title: "Follow Medication Guidance",
                desc: "Take prescribed or recommended pain management and antimicrobial medications as directed."
              },
              {
                title: "Schedule Final Restoration",
                desc: "Return to the clinic promptly for your permanent restoration or crown to seal the tooth against bacteria."
              },
              {
                title: "Monitor Symptoms",
                desc: "Mild tenderness is normal. Contact the clinic if severe pain or facial swelling occurs."
              },
              {
                title: "Routine Dental Follow-ups",
                desc: "Attend scheduled periodic dental checkups to monitor the health of the treated tooth and bone."
              }
            ].map((care, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">{care.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{care.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Root Canal Treatment Cost & Emergency Symptoms */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Cost Section */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Root Canal Treatment Cost in Ghaziabad
          </h2>
          <div className="text-slate-700 text-sm sm:text-base space-y-3">
            <p>
              The cost of root canal treatment depends on individual clinical factors, including:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li><strong>Tooth Type & Canal Count:</strong> Front single-canal teeth vs. complex multi-canal molars.</li>
              <li><strong>Infection Complexity:</strong> Primary root canal vs. retreatment of previously filled teeth.</li>
              <li><strong>Diagnostic Imaging Needed:</strong> Digital X-rays or specialized diagnostic scans.</li>
              <li><strong>Restoration Choice:</strong> Core buildup filling and type of dental crown (e.g., Zirconia, ceramic, or metal-ceramic).</li>
            </ul>
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 mt-4">
              <p className="text-blue-900 text-sm">
                <strong>Consultation Fee:</strong> Initial clinical examination and consultation fee at Oracle Dental Clinic is <strong>₹200</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Symptoms */}
        <div className="bg-red-50 p-6 sm:p-8 rounded-3xl border border-red-200 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full">
            <AlertCircle className="w-4 h-4 text-red-600" /> Urgent Dental Care
          </div>
          <h2 className="text-2xl font-extrabold text-red-950">
            Emergency Symptoms Requiring Urgent Care
          </h2>
          <div className="text-red-900 text-sm sm:text-base space-y-3">
            <p>
              Please seek prompt medical or dental evaluation if you experience:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm">
              <li>Rapidly spreading facial or jaw swelling</li>
              <li>Severe, uncontrolled dental pain unresponsive to medications</li>
              <li>Fever accompanying dental swelling</li>
              <li>Difficulty swallowing or breathing</li>
            </ul>
            <p className="text-xs text-red-800 font-semibold pt-2">
              ⚠️ Note: If you experience difficulty breathing or swallowing due to spreading facial swelling, seek immediate hospital emergency care.
            </p>
          </div>
        </div>
      </section>

      {/* Local SEO Section & Areas Served */}
      <section className="py-12 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-block bg-amber-500/10 text-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-500/20">
              Local Clinic Location
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Root Canal Treatment in Chipiyana Buzurg, Ghaziabad
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Oracle Dental Clinic provides accessible endodontic consultation and root canal treatments at:
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
                "Panchsheel Greens",
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
              id="rct-loc-call-btn"
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm"
            >
              Call 7011961515
            </InteractiveButton>

            <InteractiveButton
              id="rct-loc-whatsapp-btn"
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3 px-6 rounded-xl text-sm"
            >
              Book via WhatsApp
            </InteractiveButton>

            <InteractiveButton
              id="rct-loc-directions-btn"
              onClick={handleDirections}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 text-sm"
            >
              Get Directions
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Why Choose Oracle Dental Clinic for RCT */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Oracle Dental Clinic for Root Canal Care
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Factual benefits supported by our local clinic features and patient care focus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Dr. Prashant Kumar Vats, BDS",
              desc: "Careful clinical evaluation and treatment planning conducted directly by a qualified dental surgeon."
            },
            {
              title: "Local Chipiyana Location",
              desc: "Located at Jaat Chowk, KTS Complex, making dental visits convenient for local residents."
            },
            {
              title: "Transparent ₹200 Consultation",
              desc: "Affordable initial examination and discussion of required dental procedures."
            },
            {
              title: "Structured Infection Control",
              desc: "Adherence to hygienic clinical protocols and instrument sterilization standard practices."
            },
            {
              title: "Flexible Working Hours",
              desc: "Open all 7 days from 10:00 AM – 2:00 PM and 5:00 PM – 9:00 PM for morning and evening appointments."
            },
            {
              title: "Tooth Preservation Focus",
              desc: "Emphasizing conservative dental care to preserve healthy natural tooth structure whenever feasible."
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

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-slate-100/70 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Root Canal Treatment
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Clear, patient-friendly answers to common endodontic questions.
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

      {/* Contextual Internal Link Footer CTA */}
      <section className="py-12 bg-white border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-3xl shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Have Toothache or Need Dental Advice?</h3>
            <p className="text-slate-300 text-sm">Schedule a consultation at Oracle Dental Clinic with Dr. Prashant Kumar Vats, BDS.</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <InteractiveButton
              id="rct-bottom-call-btn"
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm"
            >
              Call 7011961515
            </InteractiveButton>

            <button
              onClick={() => navigateToPath('/dentist-chipiyana-buzurg-ghaziabad')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 text-sm transition-colors"
            >
              Visit Chipiyana Local Page
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
