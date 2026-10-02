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
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Stethoscope, 
  Award, 
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { GBP_CONFIG } from '../config/googleBusinessProfile';

interface ChipiyanaLandingPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
}

export default function ChipiyanaLandingPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome
}: ChipiyanaLandingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    // 1. Page Title & Meta Description
    const title = "Dentist in Chipiyana Buzurg, Ghaziabad | Oracle Dental Clinic";
    const description = "Looking for a dentist in Chipiyana Buzurg, Ghaziabad? Oracle Dental Clinic at KTS Complex near Jaat Chowk offers expert dental care by Dr. Prashant Kumar Vats.";
    const pageUrl = `${window.location.origin}/dentist-chipiyana-buzurg-ghaziabad`;

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
    setMetaTag("name", "keywords", "dentist in Chipiyana Buzurg, dentist near me, nearby dentist, nearby dental clinic, dental clinic in Chipiyana Buzurg, dental clinic near me, dentist in Ghaziabad, dental clinic in Ghaziabad, dentist near Jaat Chowk, dental clinic near KTS Complex, Oracle Dental Clinic");

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

    // 2. Structured Data (JSON-LD) for LocalBusiness/Dentist and FAQPage
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
        "jobTitle": "Dentist & Implantologist",
        "honorificSuffix": "BDS"
      },
      "areaServed": [
        "Chipiyana Buzurg",
        "Jaat Chowk",
        "KTS Complex",
        "Dolphin Public School",
        "Crossings Republik",
        "Lal Kuan Ghaziabad",
        "Noida Extension",
        "Shahberi",
        "Chappraula",
        "Panchsheel Greens 2",
        "ABES",
        "Ghaziabad"
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
    scriptDentist.id = 'chipiyana-dentist-schema';
    scriptDentist.innerHTML = JSON.stringify(dentistSchema);
    document.head.appendChild(scriptDentist);

    const scriptFaq = document.createElement('script');
    scriptFaq.type = 'application/ld+json';
    scriptFaq.id = 'chipiyana-faq-schema';
    scriptFaq.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(scriptFaq);

    window.scrollTo(0, 0);

    return () => {
      document.getElementById('chipiyana-dentist-schema')?.remove();
      document.getElementById('chipiyana-faq-schema')?.remove();
    };
  }, []);

  const servicesList = [
    {
      title: "Root Canal Treatment",
      desc: "Painless root canal therapy to relieve toothache and save infected teeth using modern rotary systems."
    },
    {
      title: "Dental Implants",
      desc: "Natural-looking, durable single and multi-tooth replacements restoring permanent bite function."
    },
    {
      title: "Wisdom Tooth Removal",
      desc: "Gentle surgical extraction for impacted or painful wisdom teeth under local anesthesia."
    },
    {
      title: "Impacted Tooth Removal",
      desc: "Specialized oral surgery to safely remove blocked or misaligned teeth causing jaw pressure."
    },
    {
      title: "Tooth Extraction",
      desc: "Quick, hygienic extractions for unsalvageable or severely decayed teeth with fast recovery."
    },
    {
      title: "Teeth Cleaning & Scaling",
      desc: "Professional ultrasonic tartar and plaque removal for healthy gums and fresh breath."
    },
    {
      title: "Dental Fillings",
      desc: "Tooth-colored composite fillings to repair cavities naturally and seamlessly."
    },
    {
      title: "Dental Crowns & Bridges",
      desc: "High-strength Zirconia and ceramic tooth caps to protect weakened or broken teeth."
    },
    {
      title: "Gum Treatment",
      desc: "Comprehensive periodontal care to treat bleeding gums, gingivitis, and oral swelling."
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Aesthetic smile design treatments including composite veneers and tooth whitening."
    },
    {
      title: "Smile Improvement",
      desc: "Customized smile makeovers aligning crooked teeth and enhancing overall smile aesthetics."
    },
    {
      title: "Children's Dental Care",
      desc: "Gentle pediatric consultations, fluoride application, and cavity prevention for kids."
    },
    {
      title: "Emergency Dental Consultation",
      desc: "Immediate relief for severe tooth pain, broken teeth, or dental trauma in Chipiyana."
    }
  ];

  const faqs = [
    {
      question: "Where can I find a dentist in Chipiyana Buzurg?",
      answer: "Oracle Dental Clinic is located at Shop No. 47, KTS Complex, near Jaat Chowk, Chipiyana Buzurg, Ghaziabad. We offer comprehensive dental consultation and treatments by Dr. Prashant Kumar Vats, BDS."
    },
    {
      question: "Is there a nearby dental clinic near Jaat Chowk?",
      answer: "Yes, Oracle Dental Clinic is located directly at KTS Complex near Jaat Chowk in Chipiyana Buzurg, making it a convenient nearby dental clinic for residents of Chipiyana Buzurg, Dolphin Public School area, and surrounding local neighborhoods."
    },
    {
      question: "Where is Oracle Dental Clinic located?",
      answer: "Our exact clinic address is Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad, Uttar Pradesh 201009 (near Dolphin Public School and ABES College)."
    },
    {
      question: "Does Oracle Dental Clinic provide root canal treatment?",
      answer: "Yes, we provide advanced, painless root canal treatment (RCT) using modern endodontic equipment to save infected teeth quickly and comfortably."
    },
    {
      question: "Does the clinic provide dental implants?",
      answer: "Yes, Oracle Dental Clinic specializes in single-tooth dental implants as well as multi-tooth replacements to restore natural eating and smiling confidence."
    },
    {
      question: "Can I get wisdom tooth removal in Chipiyana Buzurg?",
      answer: "Yes, Dr. Prashant Kumar Vats performs gentle wisdom tooth extractions and surgical removal for impacted wisdom teeth right at our Chipiyana Buzurg clinic."
    },
    {
      question: "What is the dental consultation fee?",
      answer: "Our dental consultation fee is ₹200 at Oracle Dental Clinic."
    },
    {
      question: "What are the clinic timings?",
      answer: "The clinic is open all 7 days of the week with morning timings from 10:00 AM to 2:00 PM and evening timings from 5:00 PM to 9:00 PM."
    },
    {
      question: "How can I book an appointment?",
      answer: "You can book an appointment by calling us directly at 7011961515, reaching out on WhatsApp, or visiting the clinic during open hours."
    },
    {
      question: "Does Oracle Dental Clinic provide emergency dental consultation?",
      answer: "Yes, we provide prompt emergency dental consultations for acute toothaches, swollen gums, or dental injuries in Chipiyana Buzurg."
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Locations & Services', path: '/#about' },
          { label: 'Dentist in Chipiyana Buzurg', path: '/dentist-in-chipiyana-buzurg-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        badge="Local Dental Center"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-500/20">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> KTS Complex, Jaat Chowk, Chipiyana Buzurg
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Dentist in Chipiyana Buzurg, Ghaziabad
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
              Oracle Dental Clinic provides dental consultation and treatment in Chipiyana Buzurg, Ghaziabad, conveniently located at KTS Complex near Jaat Chowk. If you are searching for a trusted nearby dentist or nearby dental clinic, our clinic offers personalized, professional dental care under Dr. Prashant Kumar Vats, BDS.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto md:mx-0 text-left text-xs sm:text-sm">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col">
                <span className="text-slate-400 text-xs">Consultation Fee</span>
                <span className="text-amber-300 font-bold text-base sm:text-lg">₹200</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col">
                <span className="text-slate-400 text-xs">Lead Dentist</span>
                <span className="text-white font-bold text-xs sm:text-sm">Dr. Prashant Kumar Vats</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col col-span-2 sm:col-span-1">
                <span className="text-slate-400 text-xs">Clinic Timings</span>
                <span className="text-cyan-300 font-bold text-xs sm:text-xs">10 AM - 2 PM, 5 PM - 9 PM</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center md:justify-start">
              <InteractiveButton
                id="chipiyana-hero-call-btn"
                onClick={handleCall}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" /> CALL NOW
              </InteractiveButton>

              <InteractiveButton
                id="chipiyana-hero-whatsapp-btn"
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" /> BOOK APPOINTMENT
              </InteractiveButton>

              <InteractiveButton
                id="chipiyana-hero-directions-btn"
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
                  <p className="text-xs text-amber-400 font-medium">Chipiyana Buzurg Branch</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <UserCheck className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Dr. Prashant Kumar Vats, BDS</p>
                    <p className="text-xs text-slate-400">Dentist & Oral Healthcare Practitioner</p>
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

      {/* Local Introduction */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80 space-y-6">
          <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            Local Dental Care Center
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Dental Care for Patients in Chipiyana Buzurg & Nearby Areas
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-base sm:text-lg">
            <p>
              If you are searching for a <strong>dentist near me</strong> or a <strong>dental clinic near me</strong> in Chipiyana Buzurg, Oracle Dental Clinic provides consultation and treatment right in your local neighborhood.
            </p>
            <p>
              Located conveniently at <strong>Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad</strong>, our center is easily accessible to patients residing near Jaat Chowk, KTS Complex, and Dolphin Public School, as well as nearby localities in Ghaziabad.
            </p>
            <p>
              Whether you require routine dental checkups, cavity fillings, tooth extraction, or specialized treatments like root canals and dental crowns, Dr. Prashant Kumar Vats, BDS provides clear diagnosis and individualized care.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Oracle Dental Clinic */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200/60 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Choose Oracle Dental Clinic in Chipiyana Buzurg
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Factual, reliable dental care tailored for local patients and families.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Convenient Local Location",
                desc: "Situated at KTS Complex near Jaat Chowk in Chipiyana Buzurg, easily accessible without long travel."
              },
              {
                title: "Dr. Prashant Kumar Vats, BDS",
                desc: "Consultation and procedure planning provided directly by a qualified, experienced dental practitioner."
              },
              {
                title: "Transparent ₹200 Consultation Fee",
                desc: "Affordable initial consultation with clear guidance on proposed dental treatments."
              },
              {
                title: "Comprehensive Dental Treatments",
                desc: "Multiple services under one clinic, from scaling and fillings to root canals and tooth extractions."
              },
              {
                title: "Convenient Morning & Evening Timings",
                desc: "Open all days from 10:00 AM – 2:00 PM and 5:00 PM – 9:00 PM to fit your daily schedule."
              },
              {
                title: "Individualized Treatment Planning",
                desc: "Patient-centered care focusing on comfort, oral hygiene education, and proper follow-ups."
              }
            ].map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex items-start gap-4"
              >
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dental Services Grid */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            Treatment Services
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Dental Treatments Available at Chipiyana Buzurg
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Providing a wide range of essential dental care services for patients in Ghaziabad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{service.desc}</p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600">
                <span>Available at Chipiyana Clinic</span>
                <InteractiveButton 
                  id={`service-book-btn-${idx}`}
                  onClick={handleWhatsApp} 
                  className="hover:underline flex items-center gap-1 text-blue-700"
                >
                  Inquire <ArrowRight className="w-3 h-3" />
                </InteractiveButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nearby Dentist Section */}
      <section className="py-12 bg-white border-y border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Looking for a Nearby Dentist in Chipiyana Buzurg?
          </h2>
          <div className="text-slate-700 space-y-4 text-base leading-relaxed">
            <p>
              When experiencing tooth sensitivity, gum discomfort, or requiring routine oral checkups, having a <strong>nearby dentist in Chipiyana Buzurg</strong> ensures quick access to care without traveling far across Ghaziabad.
            </p>
            <p>
              At Oracle Dental Clinic, Dr. Prashant Kumar Vats, BDS evaluates your dental condition through careful visual and clinical examination, offering structured guidance on treatment steps, oral hygiene maintenance, and preventive care.
            </p>
            <TreatmentImage
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
              alt="Clinical examination and dental consultation at Oracle Dental Clinic in Chipiyana Buzurg"
              caption="Clinical evaluation & consultation at Oracle Dental Clinic, Chipiyana Buzurg, Ghaziabad."
              aspectRatio="16/9"
            />
          </div>
        </div>
      </section>

      {/* Nearby Dental Clinic Section */}
      <section className="py-12 bg-slate-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Nearby Dental Clinic in Chipiyana Buzurg, Ghaziabad
          </h2>
          <div className="text-slate-700 space-y-4 text-base leading-relaxed">
            <p>
              Oracle Dental Clinic operates as a accessible <strong>nearby dental clinic in Chipiyana Buzurg, Ghaziabad</strong>. Located at Shop No. 47 in KTS Complex near Jaat Chowk, our facility accommodates both pre-booked consultations and walk-in inquiries.
            </p>
            <p>
              We maintain hygienic clinical conditions, sterilized instruments, and standard dental equipment for procedures like tooth scaling, composite fillings, root canals, and tooth extractions.
            </p>
          </div>
        </div>
      </section>

      {/* Local Areas We Serve */}
      <section className="py-12 bg-white border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Areas Near Chipiyana Buzurg Served by Oracle Dental Clinic
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Convenient dental care for patients residing in and around the following localities:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {[
              "Chipiyana Buzurg",
              "Jaat Chowk",
              "KTS Complex",
              "Dolphin Public School area",
              "Crossings Republik",
              "Lal Kuan Ghaziabad",
              "Chappraula",
              "Shahberi",
              "Noida Extension",
              "Panchsheel Greens 2",
              "ABES Engineering College area",
              "Ghaziabad"
            ].map((area, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center text-xs sm:text-sm font-semibold text-slate-800 flex items-center justify-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location / Get Directions Section */}
      <section className="py-12 md:py-16 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-6 space-y-6">
            <div className="inline-block bg-amber-500/10 text-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-500/20">
              Clinic Address & Directions
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Oracle Dental Clinic – Chipiyana Buzurg
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base">
              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <span>
                  <strong>Address:</strong><br />
                  Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad, Uttar Pradesh, India
                </span>
              </p>

              <p className="flex items-center gap-3">
                <PhoneCall className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span><strong>Phone:</strong> +91 7011961515</span>
              </p>

              <p className="flex items-center gap-3">
                <Stethoscope className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span><strong>Doctor:</strong> Dr. Prashant Kumar Vats, BDS</span>
              </p>

              <p className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span><strong>Timings:</strong> 10:00 AM – 2:00 PM & 5:00 PM – 9:00 PM (All days)</span>
              </p>

              <p className="flex items-center gap-3">
                <Award className="w-5 h-5 text-amber-300 flex-shrink-0" />
                <span><strong>Consultation Fee:</strong> ₹200</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <InteractiveButton
                id="chipiyana-loc-call-btn"
                onClick={handleCall}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-5 rounded-xl text-sm flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> CALL NOW
              </InteractiveButton>

              <InteractiveButton
                id="chipiyana-loc-whatsapp-btn"
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-3 px-5 rounded-xl text-sm flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> BOOK APPOINTMENT
              </InteractiveButton>

              <InteractiveButton
                id="chipiyana-loc-directions-btn"
                onClick={handleDirections}
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-5 rounded-xl border border-white/20 text-sm flex items-center gap-2"
              >
                <Navigation className="w-4 h-4 text-cyan-300" /> GET DIRECTIONS
              </InteractiveButton>
            </div>
          </div>

          <div className="md:col-span-6 h-80 rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-slate-800">
            <iframe 
              title="Oracle Dental Clinic Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.564724810756!2d77.4520!3d28.6280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee567209864f%3A0x89f2d2fffdfe76b8!2sOracle%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="w-full h-full border-0" 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Dental Treatment Process */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Dental Treatment Process
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            Simple 4-step approach to receiving treatment at Oracle Dental Clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Book a Consultation",
              desc: "Schedule your appointment by phone, WhatsApp, or walk into our clinic during operating hours."
            },
            {
              step: "02",
              title: "Dental Examination",
              desc: "Dr. Prashant Kumar Vats conducts a thorough oral checkup to identify dental issues."
            },
            {
              step: "03",
              title: "Diagnosis & Plan",
              desc: "Clear explanation of findings, recommended treatment options, and cost estimation (₹200 initial consultation)."
            },
            {
              step: "04",
              title: "Treatment & Follow-up",
              desc: "Receiving gentle dental care with personalized guidance for long-term oral hygiene."
            }
          ].map((item, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs relative overflow-hidden"
            >
              <span className="text-4xl font-black text-slate-100 absolute top-4 right-4 select-none">
                {item.step}
              </span>
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-slate-100/70 border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Answers to common questions about our Chipiyana Buzurg dental clinic.
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

      {/* Internal Links & Contextual CTA */}
      <section className="py-12 bg-white border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-3xl shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">Need Dental Consultation in Chipiyana Buzurg?</h3>
            <p className="text-slate-300 text-sm">Visit Oracle Dental Clinic at KTS Complex near Jaat Chowk.</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <InteractiveButton
              id="chipiyana-bottom-call-btn"
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm"
            >
              Call 7011961515
            </InteractiveButton>

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
