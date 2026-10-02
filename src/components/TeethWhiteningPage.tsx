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
  Sun
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';

interface TeethWhiteningPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath: (path: string) => void;
}

export default function TeethWhiteningPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: TeethWhiteningPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // 1. Page Title, Meta Description & Canonical
    const title = "Teeth Whitening in Ghaziabad | Professional Teeth Whitening | Oracle Dental Clinic";
    const description = "Looking for professional teeth whitening in Ghaziabad? Oracle Dental Clinic in Chipiyana Buzurg provides dental evaluation and professional teeth whitening options for stained or discoloured teeth.";
    const pageUrl = `${window.location.origin}/teeth-whitening`;

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
    setMetaTag("name", "keywords", "teeth whitening, teeth whitening treatment, professional teeth whitening, teeth whitening dentist, teeth whitening in Ghaziabad, professional teeth whitening in Ghaziabad, teeth whitening in Chipiyana Buzurg, teeth whitening near me, professional teeth whitening near me, teeth whitening dentist near me, teeth whitening clinic near me, dental teeth whitening, tooth whitening, teeth bleaching, dental bleaching, yellow teeth treatment, yellow teeth whitening, stained teeth treatment, teeth stain removal, teeth whitening treatment in Ghaziabad, teeth whitening dentist in Ghaziabad, cosmetic dentist in Ghaziabad, cosmetic dental treatment in Ghaziabad, Oracle Dental Clinic");

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
        "name": "Cosmetic Dentistry & Whitening Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Professional Teeth Whitening",
              "description": "Dental evaluation and professional teeth whitening for stained or discoloured natural teeth."
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
          "name": "Teeth Whitening",
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
    scriptDentist.id = 'whitening-dentist-schema';
    scriptDentist.innerHTML = JSON.stringify(dentistSchema);
    document.head.appendChild(scriptDentist);

    const scriptBreadcrumb = document.createElement('script');
    scriptBreadcrumb.type = 'application/ld+json';
    scriptBreadcrumb.id = 'whitening-breadcrumb-schema';
    scriptBreadcrumb.innerHTML = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(scriptBreadcrumb);

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.id = 'whitening-faq-schema';
    scriptFaq.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(scriptFaq);

    window.scrollTo(0, 0);

    return () => {
      document.getElementById('whitening-dentist-schema')?.remove();
      document.getElementById('whitening-breadcrumb-schema')?.remove();
      document.getElementById('whitening-faq-schema')?.remove();
    };
  }, []);

  const faqs = [
    {
      question: "What is teeth whitening?",
      answer: "Teeth whitening is a cosmetic dental procedure designed to lighten the natural shade of discoloured or stained natural teeth using dental-grade bleaching agents."
    },
    {
      question: "How does professional teeth whitening work?",
      answer: "Professional teeth whitening uses safe, hydrogen peroxide or carbamide peroxide formulations that penetrate porous tooth enamel to oxidize and chemically break down deep stain molecules."
    },
    {
      question: "Why are my teeth yellow?",
      answer: "Teeth yellow due to a combination of extrinsic factors (tea, coffee, tobacco, dark foods) and intrinsic factors (natural thinning of translucent enamel exposing yellowish dentin underneath with age)."
    },
    {
      question: "What causes stained teeth?",
      answer: "Stains are caused by dietary dark pigments (tannins in tea, coffee, red wine), tobacco tar and nicotine, poor oral hygiene, fluorosis, certain childhood medications, or tooth trauma."
    },
    {
      question: "Does teeth whitening work on yellow teeth?",
      answer: "Yes, teeth whitening generally responds very well to yellowish natural enamel discoloration caused by aging, coffee, tea, or food stains."
    },
    {
      question: "Is professional teeth whitening safe?",
      answer: "Yes, when evaluated and performed under professional dental supervision, whitening is a safe procedure that does not permanently damage healthy enamel."
    },
    {
      question: "Does teeth whitening hurt?",
      answer: "During treatment, most patients experience no discomfort. Some individuals may experience mild, temporary tooth sensitivity or minor gum irritation during or shortly after the procedure."
    },
    {
      question: "Can teeth whitening cause sensitivity?",
      answer: "Yes, temporary sensitivity can occur as oxygen molecules open microscopic enamel tubules. This sensitivity usually subsides within 24 to 48 hours and can be managed with desensitizing toothpaste."
    },
    {
      question: "How long does teeth whitening take?",
      answer: "In-office clinical whitening sessions typically take 45 to 60 minutes. Dentist-supervised take-home trays are worn over 1 to 2 weeks."
    },
    {
      question: "How long do teeth whitening results last?",
      answer: "Results typically last from 6 months up to 2 years, depending on your dietary habits, oral hygiene, smoking status, and routine dental care."
    },
    {
      question: "Can everyone get their teeth whitened?",
      answer: "Not everyone is an ideal candidate. Dental evaluation is necessary to ensure you have healthy gums and no untreated cavities or severe tooth sensitivity."
    },
    {
      question: "Can whitening remove all stains?",
      answer: "Whitening effectively lightens extrinsic surface stains and mild organic yellowing. Severe intrinsic staining (e.g., deep tetracycline staining or fluorosis) may respond only partially."
    },
    {
      question: "Does whitening work on intrinsic stains?",
      answer: "Deep intrinsic stains inside the dentin respond more slowly to conventional bleaching and may require extended treatment or alternative cosmetic options like veneers."
    },
    {
      question: "Does whitening work on crowns?",
      answer: "No. Dental bleaching agents only lighten natural tooth structure. They do not alter the shade of porcelain crowns, ceramic bridges, or composite fillings."
    },
    {
      question: "Does whitening work on veneers?",
      answer: "No, porcelain veneers or composite veneers maintain their original manufactured shade and do not lighten with whitening gels."
    },
    {
      question: "Does whitening work on fillings?",
      answer: "No, tooth-colored composite fillings do not change color during teeth whitening. Existing fillings in front teeth may need replacement after whitening to match your lighter natural teeth."
    },
    {
      question: "Can I whiten one dark tooth?",
      answer: "A single dark tooth often indicates internal trauma or nerve death. It requires clinical diagnosis and may be treated with internal bleaching or a custom crown."
    },
    {
      question: "Can a root canal-treated tooth be whitened?",
      answer: "Yes, a darkened root canal-treated tooth can often be lightened using a procedure called 'internal bleaching' (walking bleach technique) performed inside the pulp chamber."
    },
    {
      question: "What is the difference between scaling and teeth whitening?",
      answer: "Dental scaling (cleaning) physically removes tartar (calculus) and surface plaque. Teeth whitening chemically lightens the intrinsic color of the natural tooth enamel itself."
    },
    {
      question: "What is the difference between whitening and veneers?",
      answer: "Teeth whitening lightens your existing natural teeth without altering their shape. Dental veneers are thin porcelain covers bonded onto teeth to change both color and shape."
    },
    {
      question: "Are whitening toothpastes effective?",
      answer: "Whitening toothpastes contain mild abrasives that help remove fresh surface stains, but they cannot alter the intrinsic natural shade of your enamel like professional bleaching."
    },
    {
      question: "Is baking soda safe for whitening teeth?",
      answer: "Brushing frequently with raw baking soda can be abrasive and cause gradual enamel wear over time. Professional dental whitening is much safer for enamel."
    },
    {
      question: "Is lemon safe for whitening teeth?",
      answer: "No. Lemon juice is highly acidic and erodes protective tooth enamel, leading to increased sensitivity, enamel thinning, and accelerated tooth decay."
    },
    {
      question: "Is charcoal good for teeth whitening?",
      answer: "Activated charcoal powders are abrasive. While they may scrub away surface plaque, overuse can wear down enamel and expose yellowish dentin underneath."
    },
    {
      question: "Can smokers get teeth whitening?",
      answer: "Yes, professional whitening can lighten stubborn tobacco stains. However, continued smoking will cause new stains to accumulate over time."
    },
    {
      question: "Can I whiten sensitive teeth?",
      answer: "Patients with sensitive teeth can undergo whitening after clinical evaluation. Your dentist may use lower concentration gels, shorter application times, or pre-treatment desensitizing agents."
    },
    {
      question: "Can teeth whitening be done during pregnancy?",
      answer: "Elective cosmetic teeth whitening is generally postponed during pregnancy and breastfeeding as a precautionary measure."
    },
    {
      question: "What should I avoid after teeth whitening?",
      answer: "Follow the 'white diet' for 48 hours post-whitening: avoid coffee, tea, red wine, soy sauce, turmeric, cola, berries, and tobacco while enamel pores settle."
    },
    {
      question: "How can I maintain white teeth?",
      answer: "Maintain results by brushing twice daily, flossing, drinking dark beverages through a straw, rinsing with water after meals, avoiding tobacco, and attending 6-month dental cleanings."
    },
    {
      question: "How much does teeth whitening cost in Ghaziabad?",
      answer: "Cost depends on whether you choose in-office clinical whitening or dentist-supervised take-home trays. Consultation fee at Oracle Dental Clinic is ₹200."
    },
    {
      question: "Where can I get teeth whitening near Chipiyana Buzurg?",
      answer: "Oracle Dental Clinic is located at Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad, offering professional whitening consultations by Dr. Prashant Kumar Vats, BDS."
    },
    {
      question: "Is teeth whitening available near Jaat Chowk?",
      answer: "Yes, Oracle Dental Clinic is conveniently situated right at KTS Complex near Jaat Chowk in Chipiyana Buzurg."
    },
    {
      question: "Do I need a dental check-up before whitening?",
      answer: "Yes. A dental checkup is essential to ensure you have no untreated cavities, leaky fillings, or gum inflammation that could cause severe irritation during whitening."
    },
    {
      question: "Can whitening replace dental cleaning?",
      answer: "No. Teeth whitening is a cosmetic procedure. It does not remove hardened tartar (calculus) or cure gum disease. Dental scaling is recommended before whitening."
    },
    {
      question: "Can teeth whitening damage enamel?",
      answer: "When performed using professionally formulated, dentist-supervised protocols, whitening agents do not etch, erode, or permanently weaken healthy tooth enamel."
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
            <span className="text-white font-semibold truncate">Teeth Whitening</span>
          </div>
          <span className="text-xs bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-500/30">
            Cosmetic Dentistry
          </span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Professional Cosmetic Care
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Teeth Whitening in Ghaziabad
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
              Brighten your smile with professional teeth whitening at Oracle Dental Clinic, Chipiyana Buzurg, Ghaziabad. Get your teeth evaluated by Dr. Prashant Kumar Vats, BDS to determine whether whitening is suitable for your type of tooth discoloration.
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
                id="whitening-hero-whatsapp-btn"
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> BOOK CONSULTATION
              </InteractiveButton>

              <InteractiveButton
                id="whitening-hero-call-btn"
                onClick={handleCall}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" /> CALL NOW
              </InteractiveButton>

              <InteractiveButton
                id="whitening-hero-directions-btn"
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
                  <p className="text-xs text-amber-400 font-medium">Cosmetic & General Dentistry</p>
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

      {/* What Is Teeth Whitening? */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Understanding Teeth Whitening
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What Is Teeth Whitening?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4 text-slate-700 text-base sm:text-lg">
              <p>
                <strong>Teeth whitening</strong> (also known as <em>tooth whitening</em> or <em>dental bleaching</em>) is a non-invasive cosmetic dental procedure intended to lighten the natural shade of discoloured or stained natural teeth.
              </p>
              <p>
                Professional whitening works primarily by applying dental-grade bleaching agents (such as hydrogen peroxide or carbamide peroxide) that penetrate the porous enamel layer to break down dark pigment molecules inside the tooth.
              </p>
              <p>
                Natural tooth shades vary between individuals based on genetics, age, and enamel thickness. A clinical evaluation helps assess whether your specific type of discoloration will respond well to bleaching.
              </p>
            </div>

            <div className="md:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Info className="w-5 h-5 text-blue-600" /> Important Realistic Facts
              </h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 flex-shrink-0"></span>
                  <span><strong>Whitening works on natural teeth:</strong> Bleaching gels do not change the color of existing crowns, veneers, or fillings.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0"></span>
                  <span><strong>Response varies:</strong> Yellowish organic stains respond better than dark greyish intrinsic stains.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                  <span><strong>Pre-whitening examination:</strong> Ensures teeth are free of untreated cavities and active gum disease before bleaching.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Do Teeth Become Yellow or Stained? */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Do Teeth Become Yellow or Stained?
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Tooth discoloration falls into two main clinical categories: Extrinsic Stains and Intrinsic Discoloration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                Category 1
              </div>
              <h3 className="font-extrabold text-xl text-slate-900">Extrinsic Stains (Surface Staining)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Occurs on the outer surface of the tooth enamel due to pigment accumulation from dark foods and beverages.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                  <span>Frequent consumption of tea, coffee, dark colas, or red wine.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                  <span>Smoking or chewing tobacco products (tar and nicotine deposits).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                  <span>Pigmented spices, soy sauce, berries, and food colorings.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">
                Category 2
              </div>
              <h3 className="font-extrabold text-xl text-slate-900">Intrinsic Discoloration (Internal Staining)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Occurs within the inner dentin layer beneath the enamel, often developing during tooth development or aging.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Natural aging (gradual enamel thinning revealing yellow dentin underneath).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Tooth trauma, nerve necrosis, or past root canal treatment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>Excessive fluoride intake (fluorosis) or childhood medication exposure.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Candidate Eligibility */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Who May Benefit & Who Should Exercise Caution?
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Clinical evaluation ensures whitening is appropriate for your oral health status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-extrabold text-xl text-slate-900 flex items-center gap-2">
              <Check className="w-5 h-5 text-emerald-600" /> Suitable Candidates
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                <span>Adults with healthy teeth and healthy gums.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                <span>Individuals with yellow or brown extrinsic surface stains.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                <span>Patients seeking cosmetic smile enhancement with realistic expectations.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h3 className="font-extrabold text-xl text-slate-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-500" /> Considerations Requiring Pre-Treatment Care
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                <span>Untreated cavities or leaking fillings (must be treated prior to whitening).</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                <span>Active gum disease or severe pre-existing tooth sensitivity.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                <span>Extensive visible front teeth crowns or composite fillings (do not whiten).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison: In-Office vs Take-Home vs OTC */}
      <section className="py-12 md:py-16 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              In-Office vs. Dentist-Supervised Take-Home vs. OTC Whitening
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Comparing professional clinical whitening with alternative methods.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-slate-200 text-xs sm:text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-4 border border-slate-800 font-bold">Feature</th>
                  <th className="p-4 border border-slate-800 font-bold">In-Office Clinical Whitening</th>
                  <th className="p-4 border border-slate-800 font-bold">Dentist-Supervised Home Trays</th>
                  <th className="p-4 border border-slate-800 font-bold">Over-the-Counter Products</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold border border-slate-200">Dental Supervision</td>
                  <td className="p-4 border border-slate-200 text-emerald-700 font-semibold">Direct clinical application by dentist</td>
                  <td className="p-4 border border-slate-200 text-emerald-700 font-semibold">Supervised with custom-fit trays</td>
                  <td className="p-4 border border-slate-200 text-rose-700 font-semibold">None (Self-applied)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold border border-slate-200">Gingival Gum Protection</td>
                  <td className="p-4 border border-slate-200">Professional barrier isolators protect gums</td>
                  <td className="p-4 border border-slate-200">Custom trays molded to avoid gum contact</td>
                  <td className="p-4 border border-slate-200">Ill-fitting strips/trays may irritate gums</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold border border-slate-200">Treatment Timeline</td>
                  <td className="p-4 border border-slate-200">Single 45–60 minute session</td>
                  <td className="p-4 border border-slate-200">Worn over 1–2 weeks</td>
                  <td className="p-4 border border-slate-200">Multiple weeks of daily use</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 font-bold border border-slate-200">Safety & Efficacy</td>
                  <td className="p-4 border border-slate-200">High efficacy with enamel evaluation</td>
                  <td className="p-4 border border-slate-200">Controlled gradual shade improvement</td>
                  <td className="p-4 border border-slate-200">Variable results; abrasive risks</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comparisons: Whitening vs Scaling & Whitening vs Veneers */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Whitening vs Scaling */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Teeth Whitening vs. Dental Scaling & Polishing
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                <span><strong>Dental Scaling (Cleaning):</strong> Hygienic procedure removing hardened calculus (tartar) and surface plaque. Does not alter intrinsic tooth color.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                <span><strong>Teeth Whitening:</strong> Cosmetic procedure using bleaching agents to lighten the natural intrinsic shade of enamel itself.</span>
              </li>
            </ul>
          </div>

          {/* Whitening vs Veneers */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Teeth Whitening vs. Dental Veneers
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                <span><strong>Teeth Whitening:</strong> Lightens existing natural teeth without altering tooth shape or removing enamel structure.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                <span><strong>Dental Veneers:</strong> Thin custom ceramic coverings bonded to the front of teeth to mask severe discoloration, gaps, or chips.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Single Dark Tooth & Root Canal Whitening */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Whitening a Single Dark Tooth or Root Canal-Treated Tooth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-slate-700 text-sm sm:text-base leading-relaxed">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">Single Dark Tooth Evaluation</h3>
              <p className="text-slate-600 text-sm">
                If a single tooth turns dark grey or brown, it usually indicates past physical trauma or internal nerve death. External bleaching gels are ineffective; the tooth requires clinical diagnosis and X-ray evaluation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-2">
              <h3 className="font-bold text-slate-900 text-lg">Internal Bleaching (Walking Bleach)</h3>
              <p className="text-slate-600 text-sm">
                For non-vital teeth that have undergone root canal treatment, a specialized procedure called <em>internal bleaching</em> can place whitening agents directly inside the pulp chamber to restore a natural shade.
              </p>
              <button 
                onClick={() => navigateToPath('/root-canal-treatment')}
                className="text-xs font-bold text-blue-600 hover:underline pt-2 block"
              >
                Learn more about Root Canal Treatment →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Caution: Home Remedies & Abrasives */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
            <AlertCircle className="w-5 h-5 text-amber-600" /> Patient Safety Advisory
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Caution Regarding DIY Home Remedies for Yellow Teeth
          </h2>
          <div className="text-slate-700 text-sm sm:text-base space-y-3 leading-relaxed">
            <p>
              Popular internet remedies like brushing with <strong>raw baking soda</strong>, <strong>lemon juice</strong>, or <strong>activated charcoal powders</strong> can be harmful to oral health:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
              <li><strong>Acidic Lemon Juice:</strong> Erases protective enamel, causing increased tooth sensitivity and accelerated decay.</li>
              <li><strong>Abrasive Charcoal & Baking Soda:</strong> Scratches enamel surface, exposing yellowish dentin beneath over time.</li>
            </ul>
            <p className="text-xs text-amber-900 font-semibold pt-1">
              Always seek professional dental evaluation for safe, enamel-friendly stain removal options.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance & Results Duration */}
      <section className="py-12 bg-white border-y border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Maintaining Your Whitened Smile
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Practical tips to keep your teeth bright after whitening treatment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "The 48-Hour 'White Diet'", desc: "Avoid dark fluids (coffee, tea, red wine, soy sauce) for 48 hours after treatment while enamel settles." },
              { title: "Use a Straw", desc: "Drink dark beverages through a straw to minimize direct contact with front teeth." },
              { title: "Avoid Tobacco Products", desc: "Refrain from smoking or tobacco chewing to prevent rapid re-staining." },
              { title: "Routine 6-Month Scaling", desc: "Attend regular professional dental cleanings to remove new surface plaque buildup." }
            ].map((tip, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-2xs">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mb-3" />
                <h3 className="font-bold text-slate-900 text-base mb-1">{tip.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teeth Whitening Cost in Ghaziabad */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Teeth Whitening Cost in Ghaziabad
          </h2>
          <div className="text-slate-700 space-y-3 text-base sm:text-lg leading-relaxed">
            <p>
              The cost of teeth whitening depends on individual clinical factors:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700">
              <li><strong>Whitening Method:</strong> In-office clinical session vs. dentist-supervised custom take-home trays.</li>
              <li><strong>Pre-Treatment Cleaning:</strong> Whether professional scaling and polishing is needed first to remove tartar.</li>
              <li><strong>Stain Severity:</strong> Extent and depth of enamel discoloration.</li>
            </ul>
            <div className="bg-blue-50 p-5 rounded-2xl border border-blue-200 mt-4">
              <p className="text-blue-900 text-sm font-semibold">
                Consultation Fee: Initial dental examination, shade assessment, and treatment discussion at Oracle Dental Clinic is <strong>₹200</strong>.
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
              Professional Teeth Whitening in Chipiyana Buzurg, Ghaziabad
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Oracle Dental Clinic provides professional teeth whitening consultations at:
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
              id="whitening-loc-call-btn"
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm"
            >
              Call 7011961515
            </InteractiveButton>

            <InteractiveButton
              id="whitening-loc-whatsapp-btn"
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3 px-6 rounded-xl text-sm"
            >
              Book via WhatsApp
            </InteractiveButton>

            <InteractiveButton
              id="whitening-loc-directions-btn"
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
            Why Choose Oracle Dental Clinic for Teeth Whitening
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Factual benefits supported by our local clinic features and patient care focus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Dr. Prashant Kumar Vats, BDS",
              desc: "Dental consultation and shade assessment conducted directly by a qualified dental surgeon."
            },
            {
              title: "Local Chipiyana Location",
              desc: "Located at Jaat Chowk, KTS Complex, making visits easy for local residents of Ghaziabad."
            },
            {
              title: "Transparent ₹200 Consultation",
              desc: "Affordable initial examination to assess whether teeth whitening is suitable for your enamel."
            },
            {
              title: "Enamel-Safe Protocols",
              desc: "Professional whitening gels and gum isolation procedures designed for patient safety."
            },
            {
              title: "Flexible Working Hours",
              desc: "Open all 7 days from 10:00 AM – 2:00 PM and 5:00 PM – 9:00 PM daily."
            },
            {
              title: "Comprehensive Dental Care",
              desc: "Complete dental evaluation covering scaling, fillings, root canals, and cosmetic treatments."
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
              Frequently Asked Questions About Teeth Whitening
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Medically responsible, factual answers to common teeth whitening questions.
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
            <h3 className="text-xl sm:text-2xl font-bold">Ready to Brighten Your Smile?</h3>
            <p className="text-slate-300 text-sm">Schedule a teeth whitening consultation at Oracle Dental Clinic with Dr. Prashant Kumar Vats, BDS.</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <InteractiveButton
              id="whitening-bottom-call-btn"
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm"
            >
              Call 7011961515
            </InteractiveButton>

            <button
              onClick={() => navigateToPath('/wisdom-tooth-extraction')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 text-sm transition-colors"
            >
              Wisdom Tooth Page
            </button>

            <button
              onClick={() => navigateToPath('/dental-implants')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 text-sm transition-colors"
            >
              Dental Implants Page
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
