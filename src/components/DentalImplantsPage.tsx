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
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { GBP_CONFIG } from '../config/googleBusinessProfile';

interface DentalImplantsPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath: (path: string) => void;
}

export default function DentalImplantsPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: DentalImplantsPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // 1. Page Title, Meta Description & Canonical
    const title = "Dental Implants in Ghaziabad | Single & Full Mouth Implants | Oracle Dental Clinic";
    const description = "Comprehensive dental implant treatments in Ghaziabad by Dr. Prashant Kumar Vats, BDS at Oracle Dental Clinic. Single tooth, bridges & full-mouth implants.";
    const pageUrl = `${window.location.origin}/dental-implants`;

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
    setMetaTag("name", "keywords", "dental implants, dental implants in Ghaziabad, dental implant in Ghaziabad, dental implant treatment, dental implant treatment in Ghaziabad, dental implants near me, dental implant near me, implant dentist near me, dental implant dentist in Ghaziabad, dental implant clinic in Ghaziabad, dental implant specialist in Ghaziabad, tooth implant, teeth implants, artificial tooth implant, missing tooth replacement, dental implants in Chipiyana Buzurg, dental implants near Chipiyana Buzurg, nearby implant dentist, nearby dental clinic for implants, dental implants near Jaat Chowk, dental implants near Crossings Republik, dental implants near Noida Extension, Oracle Dental Clinic");

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
        "name": "Dental Implant Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Single Tooth Dental Implant",
              "description": "Fixed replacement of missing single teeth with titanium implants and crowns."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Implant-Supported Dental Bridge",
              "description": "Multi-tooth replacement anchored by strategic dental implants."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Mouth Dental Implants",
              "description": "Full-arch fixed tooth restoration using advanced implant placement concepts."
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
          "name": "Dental Implants",
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
    scriptDentist.id = 'implants-dentist-schema';
    scriptDentist.innerHTML = JSON.stringify(dentistSchema);
    document.head.appendChild(scriptDentist);

    const scriptBreadcrumb = document.createElement('script');
    scriptBreadcrumb.type = 'application/ld+json';
    scriptBreadcrumb.id = 'implants-breadcrumb-schema';
    scriptBreadcrumb.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(scriptBreadcrumb);

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.id = 'implants-faq-schema';
    scriptFaq.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(scriptFaq);

    window.scrollTo(0, 0);

    return () => {
      document.getElementById('implants-dentist-schema')?.remove();
      document.getElementById('implants-breadcrumb-schema')?.remove();
      document.getElementById('implants-faq-schema')?.remove();
    };
  }, []);

  const faqs = [
    {
      question: "What is a dental implant?",
      answer: "A dental implant is a surgically placed medical post (typically made of biocompatible titanium) that acts as an artificial root for a missing tooth, supporting a permanent crown, bridge, or denture."
    },
    {
      question: "How does a dental implant work?",
      answer: "The implant post is anchored into the jawbone. Over time, a natural biological process called osseointegration occurs, where the surrounding bone fuses with the implant surface, creating a solid foundation for a custom-made crown."
    },
    {
      question: "Is a dental implant procedure painful?",
      answer: "Implant placement is performed under local anesthesia to keep the area completely numbed during surgery. Most patients experience minimal discomfort during placement, and post-operative tenderness is generally manageable with recommended pain relievers."
    },
    {
      question: "Are dental implants painful after surgery?",
      answer: "Mild swelling or soreness around the gum site is common for a few days after surgery. This is a normal part of soft tissue healing and usually subsides within a week."
    },
    {
      question: "How long does dental implant surgery take?",
      answer: "Placing a single dental implant usually takes between 30 to 60 minutes. Complex cases involving multiple implants or bone grafting may require additional surgical time."
    },
    {
      question: "How long does the complete implant treatment take?",
      answer: "The overall timeline ranges from 3 to 6 months in conventional cases to allow adequate bone fusion (osseointegration) before attaching the final crown. Some selected cases may qualify for immediate provisional restorations."
    },
    {
      question: "How long do dental implants last?",
      answer: "With good oral hygiene, proper bite balance, and regular dental checkups, the implant fixture itself can last for many years or decades. The crown attached above the implant may undergo normal wear and require maintenance over time."
    },
    {
      question: "Are dental implants permanent?",
      answer: "Dental implants offer long-term fixed tooth replacement. While the titanium fixture becomes integrated into the bone, long-term stability requires ongoing gum health, daily cleaning, and periodic clinical monitoring."
    },
    {
      question: "What is a single-tooth implant?",
      answer: "A single-tooth implant replaces one missing tooth without needing to trim or alter neighboring natural teeth (unlike conventional dental bridges)."
    },
    {
      question: "What is an implant-supported bridge?",
      answer: "An implant-supported bridge replaces several adjacent missing teeth by anchoring a multi-unit bridge onto two or more strategic implants instead of natural teeth."
    },
    {
      question: "What are full-mouth dental implants?",
      answer: "Full-mouth implant rehabilitation restores an entire arch of missing or severely compromised teeth using a set of strategically placed implants to support a complete fixed bridge or overdenture."
    },
    {
      question: "What are All-on-4 dental implants?",
      answer: "All-on-4 is a full-arch rehabilitation concept where a fixed full bridge is supported by 4 strategically positioned dental implants (often tilting posterior implants to maximize bone contact)."
    },
    {
      question: "What are All-on-6 dental implants?",
      answer: "All-on-6 uses 6 implants per arch to distribute bite forces over a greater number of support points, often recommended when jawbone volume and chewing load warrant additional support."
    },
    {
      question: "What is an immediate dental implant?",
      answer: "An immediate implant is placed directly into the extraction socket during the same clinical visit as tooth extraction, provided the socket is free from severe active infection and sufficient primary stability is achieved."
    },
    {
      question: "Can an implant be placed immediately after tooth extraction?",
      answer: "Yes, in suitable cases where the extraction socket anatomy is favorable, healthy bone is present, and primary stability can be secured."
    },
    {
      question: "What is immediate loading?",
      answer: "Immediate loading refers to attaching a provisional crown or bridge onto an implant shortly after surgical placement, provided the implant achieves high initial insertion stability."
    },
    {
      question: "Are immediate implants and same-day teeth the same thing?",
      answer: "Not necessarily. 'Immediate implant placement' refers to placing the implant into the socket right after extraction. 'Same-day teeth' (immediate loading) refers to attaching a provisional tooth or bridge onto the implant on the same day."
    },
    {
      question: "Who is suitable for dental implants?",
      answer: "Candidates should have completed jaw growth, possess adequate jawbone density (or be suitable for bone grafting), have healthy gums, and maintain good oral hygiene."
    },
    {
      question: "Can smokers get dental implants?",
      answer: "Smoking increases the risk of delayed bone healing and implant failure. While smokers can receive implants, clinicians advise cessation or reduction to improve outcomes."
    },
    {
      question: "Can diabetic patients get dental implants?",
      answer: "Patients with well-controlled diabetes can successfully undergo implant treatment. Uncontrolled blood sugar levels may impair healing and require medical management prior to surgery."
    },
    {
      question: "Is bone grafting required for dental implants?",
      answer: "Bone grafting is only required if the natural jawbone height or width has resorbed significantly due to long-standing missing teeth or past infection."
    },
    {
      question: "What is a sinus lift?",
      answer: "A sinus lift (sinus augmentation) is a surgical procedure that adds bone volume to the upper molar region when the maxillary sinus floor is too close to the jaw ridge."
    },
    {
      question: "What is the difference between conventional and basal/corticobasal implants?",
      answer: "Conventional endosseous implants are placed in spongy alveolar bone and rely on osseointegration over 3–6 months. Basal/corticobasal implants engage dense cortical bone regions and follow different mechanical fixation protocols."
    },
    {
      question: "Are corticobasal implants suitable for everyone?",
      answer: "Not every clinical scenario requires or benefits from corticobasal approaches. Case selection depends on anatomical evaluation, bone distribution, and practitioner expertise."
    },
    {
      question: "What happens if a dental implant fails?",
      answer: "If an implant fails to integrate or develops severe bone loss, it may need to be removed. After the tissue heals and bone evaluates, a replacement implant or alternative restoration can be planned."
    },
    {
      question: "What is peri-implantitis?",
      answer: "Peri-implantitis is an inflammatory condition affecting the gum and bone tissue around a dental implant, caused by bacterial plaque accumulation. Early detection and hygiene care are crucial."
    },
    {
      question: "How do you clean dental implants?",
      answer: "Clean implants just like natural teeth: brush twice daily with a soft toothbrush, use interdental brushes or water flossers around abutments, and attend regular professional dental scaling."
    },
    {
      question: "Can you eat normally with dental implants?",
      answer: "Once fully integrated and restored with a permanent crown, implants restore natural chewing power, allowing you to enjoy a normal, healthy diet."
    },
    {
      question: "Are dental implants better than bridges?",
      answer: "Implants replace the root without altering adjacent healthy teeth. Conventional bridges require grinding down adjacent teeth. The best choice depends on neighboring tooth health, bone availability, and personal preference."
    },
    {
      question: "Are dental implants better than dentures?",
      answer: "Fixed implants eliminate denture slipping, uncomfortable adhesives, and sore spots, offering a permanent feel similar to natural teeth."
    },
    {
      question: "How much do dental implants cost in Ghaziabad?",
      answer: "Cost depends on the number of implants, choice of crown material (e.g., Zirconia or PFM), need for bone grafting, and case complexity. Oracle Dental Clinic charges a ₹200 consultation fee for clinical examination and plan discussion."
    },
    {
      question: "Does the implant price include the crown?",
      answer: "Treatment estimates vary depending on whether they cover only the surgical implant fixture or the complete restoration (implant + abutment + crown). Always clarify your breakdown during consultation."
    },
    {
      question: "Can a dental implant replace a failed root canal tooth?",
      answer: "Yes. If a root canal-treated tooth cannot be saved due to vertical fracture or recurrent root infection, it can be extracted and evaluated for dental implant replacement."
    },
    {
      question: "Can older adults get dental implants?",
      answer: "Yes, overall general health and local bone density matter far more than age. Many seniors successfully receive dental implants to restore comfortable eating."
    },
    {
      question: "How do I book a dental implant consultation at Oracle Dental Clinic?",
      answer: "You can book a consultation by calling 7011961515, messaging via WhatsApp, or visiting our clinic at Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad."
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
            <span className="text-white font-semibold truncate">Dental Implants</span>
          </div>
          <span className="text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30">
            Implant Care Pillar
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Fixed Tooth Replacement Solutions
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Dental Implants in Ghaziabad
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
              Single Tooth Implants, Implant Bridges & Full-Mouth Implant Solutions. Dental implants are fixed tooth-replacement options that replace missing roots and support permanent crowns, bridges, or full-arch restorations at Oracle Dental Clinic under Dr. Prashant Kumar Vats, BDS.
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
                id="implants-hero-whatsapp-btn"
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> BOOK IMPLANT CONSULTATION
              </InteractiveButton>

              <InteractiveButton
                id="implants-hero-call-btn"
                onClick={handleCall}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" /> CALL NOW
              </InteractiveButton>

              <InteractiveButton
                id="implants-hero-directions-btn"
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
                  <p className="text-xs text-amber-400 font-medium">Dental Implant Center</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <UserCheck className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Dr. Prashant Kumar Vats, BDS</p>
                    <p className="text-xs text-slate-400">Dental Surgeon & Implantology Practitioner</p>
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

      {/* What Are Dental Implants? & Anatomy */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Understanding Implantology
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What Are Dental Implants?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4 text-slate-700 text-base sm:text-lg">
              <p>
                A <strong>dental implant</strong> is a biocompatible medical device surgically anchored into the jawbone to replace the root portion of a missing natural tooth.
              </p>
              <p>
                Once in place, the implant serves as a stable foundation for attaching a custom artificial tooth (crown), a dental bridge, or a full-arch denture.
              </p>
              <p>
                <strong>The Process of Osseointegration:</strong> Over a period of weeks to months, the living bone tissue fuses directly with the microscopic surface of the titanium implant post. This biological bonding process, called <em>osseointegration</em>, gives implants their remarkable strength and stability.
              </p>
            </div>

            <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Layers className="w-5 h-5 text-blue-600" /> The 3 Main Components
              </h3>
              <div className="space-y-3 text-sm text-slate-600">
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-900">1. Implant Fixture</p>
                  <p className="text-xs">The titanium screw placed into the jawbone acting as the artificial root.</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-900">2. Abutment</p>
                  <p className="text-xs">The connector piece fitted atop the implant to hold the crown securely.</p>
                </div>
                <div className="bg-white p-3 rounded-xl border border-slate-200">
                  <p className="font-bold text-slate-900">3. Prosthetic Crown</p>
                  <p className="text-xs">The visible, ceramic/zirconia artificial tooth shaped and colored like a natural tooth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Are Implants Used? */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Are Dental Implants Used?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Implants provide versatile solutions for various degrees of tooth loss.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Single Missing Tooth",
                desc: "Replaces one missing tooth without grinding down adjacent healthy teeth."
              },
              {
                title: "Multiple Adjacent Teeth",
                desc: "Supports an implant bridge across multiple missing teeth using fewer implants."
              },
              {
                title: "Complete Tooth Loss",
                desc: "Restores full upper or lower arches with fixed implant-supported bridges."
              },
              {
                title: "Loose Denture Stabilization",
                desc: "Anchors removable dentures firmly to prevent slipping while eating or talking."
              }
            ].map((reason, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-6 h-6 text-amber-500 mb-3" />
                <h3 className="font-bold text-slate-900 text-base mb-1">{reason.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Implant Treatment Concepts */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Different Types & Placement Concepts of Dental Implants
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Dental implant care involves distinct clinical treatment planning concepts tailored to patient anatomy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Single Tooth Implant",
              category: "Restoration Type",
              desc: "Individual implant fixture topped with an abutment and custom porcelain/zirconia crown."
            },
            {
              title: "Implant-Supported Bridge",
              category: "Restoration Type",
              desc: "Replaces 3–4 missing teeth in a row using 2 supporting implants, saving cost and surgery."
            },
            {
              title: "Full-Mouth Dental Implants",
              category: "Full Arch Restoration",
              desc: "Complete arch restoration using 4, 6, or 8 strategically angled implants per jaw."
            },
            {
              title: "All-on-4 / All-on-6 Concepts",
              category: "Full Arch Concept",
              desc: "Full-arch fixed bridge supported by 4 or 6 implants positioned to maximize available bone contact."
            },
            {
              title: "Conventional Endosseous Implants",
              category: "Placement Concept",
              desc: "Standard root-form implants placed in alveolar bone, integrating over a 3–6 month healing period."
            },
            {
              title: "Immediate Placement Implants",
              category: "Placement Timing",
              desc: "Implant fixture inserted into the fresh socket during the same visit as tooth extraction."
            },
            {
              title: "Immediate Loading ('Same-Day')",
              category: "Loading Concept",
              desc: "Attaching a provisional crown shortly after surgery when high initial stability is achieved."
            },
            {
              title: "Basal / Corticobasal Implants",
              category: "Surgical Concept",
              desc: "Implant designs engineered to engage dense cortical bone regions in specific anatomical cases."
            },
            {
              title: "Implant-Retained Overdentures",
              category: "Prosthetic Option",
              desc: "Removable full dentures that snap securely onto 2–4 locator implants for enhanced retention."
            }
          ].map((type, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md mb-3 inline-block">
                  {type.category}
                </span>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{type.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{type.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Clinical evaluation required</span>
                <InteractiveButton id={`inquire-type-${idx}`} onClick={handleWhatsApp} className="text-blue-600 font-bold hover:underline">
                  Inquire
                </InteractiveButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Immediate Placement vs Immediate Loading (Crucial Distinction) */}
      <section className="py-12 bg-amber-50/60 border-y border-amber-200/70 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <Info className="w-6 h-6 text-amber-600 flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Important Distinction: Immediate Placement vs. Immediate Loading
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-800 text-sm sm:text-base leading-relaxed">
            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-xs space-y-2">
              <h3 className="font-extrabold text-lg text-slate-900">1. Immediate Implant Placement</h3>
              <p className="text-slate-600 text-sm">
                Refers to placing the <strong>titanium implant fixture into the extraction socket</strong> at the same appointment the tooth is removed. This reduces total surgeries from two to one.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-amber-200 shadow-xs space-y-2">
              <h3 className="font-extrabold text-lg text-slate-900">2. Immediate Loading ("Same-Day Teeth")</h3>
              <p className="text-slate-600 text-sm">
                Refers to attaching a <strong>provisional tooth crown or bridge onto the implant</strong> on the same day or within 48 hours of surgery. This requires exceptional initial primary stability in dense bone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conventional vs Corticobasal Neutral Comparison */}
      <section className="py-12 md:py-16 bg-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Conventional Implants vs. Basal / Corticobasal Approaches
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Neutral clinical comparison between endosseous conventional implants and corticobasal concepts.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-4 border border-slate-800 font-bold">Feature</th>
                <th className="p-4 border border-slate-800 font-bold">Conventional Endosseous Implant</th>
                <th className="p-4 border border-slate-800 font-bold">Basal / Corticobasal Concept</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold border border-slate-200">Bone Placement Site</td>
                <td className="p-4 border border-slate-200">Placed in spongy alveolar bone (spongiosa).</td>
                <td className="p-4 border border-slate-200">Engages dense cortical bone layers (basal bone).</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold border border-slate-200">Primary Integration Mechanism</td>
                <td className="p-4 border border-slate-200">Relies on biological osseointegration over 3–6 months.</td>
                <td className="p-4 border border-slate-200">Relies on mechanical cortical engagement and bicortical stability.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold border border-slate-200">Bone Graft Requirement</td>
                <td className="p-4 border border-slate-200">May require bone grafting if alveolar ridge is deficient.</td>
                <td className="p-4 border border-slate-200">Often planned to utilize existing basal cortical bone.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold border border-slate-200">Standard Loading Timeline</td>
                <td className="p-4 border border-slate-200">Conventional delayed loading after 3–6 months healing.</td>
                <td className="p-4 border border-slate-200">Often associated with immediate loading protocols.</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="p-4 font-bold border border-slate-200">Clinical Indication & Suitability</td>
                <td className="p-4 border border-slate-200">Globally established standard for most single & multi-tooth cases.</td>
                <td className="p-4 border border-slate-200">Selected full-arch cases evaluated by specialized practitioners.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-500 mt-3 text-center">
          Note: Neither approach is universally superior for every patient. Treatment planning depends on 3D CBCT bone evaluation, medical health, and practitioner expertise.
        </p>
      </section>

      {/* Candidate Suitability & Planning */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Who Is a Good Candidate for Dental Implants?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Clinical evaluation considers multiple oral and general health factors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-extrabold text-xl text-slate-900 flex items-center gap-2">
                <Check className="w-5 h-5 text-emerald-600" /> Favorable Indications
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span>Fully completed jaw growth (generally age 18–20+).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span>Adequate jawbone height and width for implant anchoring.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span>Healthy gums free from active periodontal infection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span>Good daily oral hygiene and commitment to dental visits.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="font-extrabold text-xl text-slate-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-500" /> Considerations Requiring Additional Care
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                  <span>Uncontrolled diabetes or systemic immune conditions (requires medical management).</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                  <span>Heavy smoking or tobacco use (increases failure risk).</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                  <span>Severe teeth grinding (bruxism) requiring nightguard protection.</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                  <span>Severe bone resorption requiring bone grafting or sinus lift.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bone Grafting & Sinus Lift */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            What Is Bone Grafting for Dental Implants?
          </h2>
          <div className="text-slate-700 text-sm sm:text-base space-y-3">
            <p>
              When a natural tooth has been missing for a long time, the surrounding jawbone naturally shrinks (resorbs).
            </p>
            <p>
              <strong>Bone Grafting:</strong> A procedure that adds biocompatible bone material to deficient areas of the jaw ridge to build adequate bone volume before or during implant placement.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            What Is a Sinus Lift?
          </h2>
          <div className="text-slate-700 text-sm sm:text-base space-y-3">
            <p>
              In the upper back jaw, the maxillary sinus cavity lies right above the molar teeth roots.
            </p>
            <p>
              <strong>Sinus Lift (Sinus Augmentation):</strong> Gently elevates the sinus membrane and places bone graft material beneath it, creating sufficient vertical bone height to securely place upper molar implants.
            </p>
          </div>
        </div>
      </section>

      {/* Step by Step Timeline */}
      <section className="py-12 md:py-16 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Your Dental Implant Treatment Journey: Step by Step
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              A structured clinical process ensures predictable, long-lasting outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Consultation & 3D Imaging", desc: "Clinical checkup, medical review, and 3D CBCT scan to evaluate bone dimensions." },
              { step: "02", title: "Treatment Planning", desc: "Customized treatment plan determining implant position, crown design, and timeline." },
              { step: "03", title: "Surgical Placement", desc: "Titanium implant post surgically anchored into jawbone under local anesthesia." },
              { step: "04", title: "Healing & Integration", desc: "Osseointegration period (3–6 months) allowing bone to bond firmly with implant." },
              { step: "05", title: "Crown Fitting & Care", desc: "Abutment and custom permanent crown attached; follow-up care instructions provided." }
            ].map((step, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200 relative overflow-hidden">
                <span className="text-2xl font-black text-slate-200 absolute top-3 right-3 select-none">{step.step}</span>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons: Implant vs Bridge & Implant vs Denture */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Implant vs Bridge */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Dental Implant vs. Conventional Tooth Bridge
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                <span><strong>Implants:</strong> Replaces missing root; preserves neighboring teeth without trimming enamel.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                <span><strong>Bridges:</strong> Requires grinding down healthy adjacent teeth to serve as support crowns.</span>
              </li>
            </ul>
          </div>

          {/* Implant vs Denture */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Dental Implant vs. Removable Denture
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                <span><strong>Implants:</strong> Fixed in place, feels like natural teeth, prevents bone loss.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                <span><strong>Dentures:</strong> Removable, can slip during eating or speaking, does not stop jawbone resorption.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Longevity, Maintenance & Complications */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Longevity, Maintenance & Peri-Implant Health
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Proper home maintenance and periodic checkups support long-term implant survival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <h3 className="font-bold text-slate-900 text-lg">Implant Longevity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Implants are designed for long-term tooth replacement. While the titanium post can last for decades, longevity depends on oral hygiene, systemic health, and bite load balance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <h3 className="font-bold text-slate-900 text-lg">Peri-Implantitis Awareness</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Peri-implantitis is an inflammatory condition affecting gum and bone around an implant caused by bacterial plaque. Early detection via regular checkups prevents bone loss.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-3">
              <h3 className="font-bold text-slate-900 text-lg">Daily Cleaning Routine</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Brush twice daily, clean around abutments using interdental brushes or water flossers, avoid tobacco, and schedule routine scaling every 6 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dental Implant Cost Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Dental Implant Cost in Ghaziabad
          </h2>
          <div className="text-slate-700 space-y-3 text-base sm:text-lg leading-relaxed">
            <p>
              The total cost of dental implant treatment varies depending on key clinical variables:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
              <li><strong>Implant System & Fixture Type:</strong> Global titanium implant brands and specialized designs.</li>
              <li><strong>Prosthetic Crown Material:</strong> Choice of Zirconia crowns, Metal-Free All-Ceramic, or PFM crowns.</li>
              <li><strong>Surgical Requirements:</strong> Need for socket preservation, bone grafting, or sinus lift.</li>
              <li><strong>Treatment Scope:</strong> Single tooth implant vs. multi-unit implant bridge vs. full-arch All-on-4/6.</li>
            </ul>
            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-200 mt-4">
              <p className="text-blue-900 text-sm font-semibold">
                Consultation Fee: Initial clinical evaluation, 3D assessment discussion, and personalized cost estimation at Oracle Dental Clinic is <strong>₹200</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO & Areas Served */}
      <section className="py-12 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl space-y-3">
            <div className="inline-block bg-amber-500/10 text-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-500/20">
              Local Clinic Location
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Dental Implants in Chipiyana Buzurg, Ghaziabad
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Oracle Dental Clinic provides accessible dental implant consultations and care at:
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
              id="implants-loc-call-btn"
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm"
            >
              Call 7011961515
            </InteractiveButton>

            <InteractiveButton
              id="implants-loc-whatsapp-btn"
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3 px-6 rounded-xl text-sm"
            >
              Book via WhatsApp
            </InteractiveButton>

            <InteractiveButton
              id="implants-loc-directions-btn"
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
            Why Choose Oracle Dental Clinic for Dental Implants
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Factual benefits supported by our local clinic features and patient care focus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Dr. Prashant Kumar Vats, BDS",
              desc: "Careful clinical evaluation and implant planning conducted directly by a qualified dental surgeon."
            },
            {
              title: "Convenient Chipiyana Location",
              desc: "Located at Jaat Chowk, KTS Complex, making implant checkups easy for local patients."
            },
            {
              title: "Transparent ₹200 Consultation",
              desc: "Affordable initial examination and discussion of required implant options."
            },
            {
              title: "Comprehensive Dental Services",
              desc: "Complete dental care including extractions, bone evaluation, crowns, and oral hygiene maintenance under one roof."
            },
            {
              title: "Flexible Working Hours",
              desc: "Open all 7 days from 10:00 AM – 2:00 PM and 5:00 PM – 9:00 PM for morning and evening visits."
            },
            {
              title: "Patient-Centered Planning",
              desc: "Customized treatment plans tailored to individual bone structure, bite, and medical health."
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

      {/* Comprehensive FAQ Section (35 FAQs) */}
      <section className="py-12 md:py-16 bg-slate-100/70 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Dental Implants
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Clear, factual answers to common questions about implant treatment.
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

      {/* Internal Links & CTA Footer */}
      <section className="py-12 bg-white border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-3xl shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Considering Dental Implants in Ghaziabad?</h3>
            <p className="text-slate-300 text-sm">Schedule an examination at Oracle Dental Clinic with Dr. Prashant Kumar Vats, BDS.</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <InteractiveButton
              id="implants-bottom-call-btn"
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm"
            >
              Call 7011961515
            </InteractiveButton>

            <button
              onClick={() => navigateToPath('/root-canal-treatment')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 text-sm transition-colors"
            >
              Root Canal Treatment Page
            </button>

            <button
              onClick={() => navigateToPath('/dentist-chipiyana-buzurg-ghaziabad')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 text-sm transition-colors"
            >
              Chipiyana Branch Page
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
