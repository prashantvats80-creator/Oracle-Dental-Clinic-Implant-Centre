import React, { useState } from 'react';
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
  ArrowRight,
  Building2,
  Car,
  Compass,
  HeartPulse,
  Activity,
  AlertTriangle
} from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { Breadcrumbs } from './Breadcrumbs';
import { GBP_CONFIG } from '../config/googleBusinessProfile';

interface ChipiyanaLandingPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function ChipiyanaLandingPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: ChipiyanaLandingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showMap, setShowMap] = useState(false);

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (navigateToPath) {
      navigateToPath(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const treatmentCategories = [
    {
      category: 'Restorative & Root Canal Care',
      desc: 'Rotary root canal therapy for nerve pain, tooth-colored composite fillings, and high-strength zirconia or ceramic crowns.',
      links: [
        { label: 'Root Canal Treatment (RCT)', path: '/root-canal-treatment' },
        { label: 'Zirconia Crowns', path: '/zirconia-crowns' },
        { label: 'Tooth Cap & Crowns', path: '/tooth-cap' },
        { label: 'Tooth-Colored Dental Fillings', path: '/dental-fillings' }
      ]
    },
    {
      category: 'Dental Implants & Tooth Replacement',
      desc: 'Single, multiple, and full-arch titanium dental implants alongside fixed bridges and comfortable custom dentures.',
      links: [
        { label: 'Dental Implants in Ghaziabad', path: '/dental-implants' },
        { label: 'Full Mouth Dental Implants', path: '/full-mouth-dental-implants' },
        { label: 'Fixed Dental Bridges', path: '/dental-bridges' },
        { label: 'Complete & Partial Dentures', path: '/dentures' }
      ]
    },
    {
      category: 'Preventive, Gum & Cosmetic Care',
      desc: 'Ultrasonic scaling, periodontal gum therapy, professional teeth whitening, smile makeovers, veneers, braces, and clear aligners.',
      links: [
        { label: 'Teeth Cleaning & Scaling', path: '/teeth-cleaning' },
        { label: 'Gum & Periodontal Treatment', path: '/periodontal-gum-treatment-ghaziabad' },
        { label: 'Smile Makeover & Whitening', path: '/smile-makeover-ghaziabad' },
        { label: 'Clear Aligners & Braces', path: '/clear-aligners' }
      ]
    },
    {
      category: 'Oral Surgery, Kids & Urgent Care',
      desc: 'Gentle surgical removal of impacted wisdom teeth, routine extractions, pediatric dental checkups, and same-day emergency triage.',
      links: [
        { label: 'Wisdom Tooth Extraction', path: '/wisdom-tooth-extraction' },
        { label: 'Tooth Extraction', path: '/tooth-extraction' },
        { label: 'Kids Dentist & Preventive Care', path: '/kids-dentist' },
        { label: 'Emergency Dentist in Ghaziabad', path: '/emergency-dentist-ghaziabad' }
      ]
    }
  ];

  const costQuickLinks = [
    { label: 'Overall Dental Treatment Cost', path: '/dental-treatment-cost-ghaziabad' },
    { label: 'Dental Implant Cost', path: '/dental-implant-cost-ghaziabad' },
    { label: 'Root Canal Cost', path: '/root-canal-cost-ghaziabad' },
    { label: 'Wisdom Tooth Extraction Cost', path: '/wisdom-tooth-extraction-cost-ghaziabad' },
    { label: 'Teeth Cleaning Cost', path: '/teeth-cleaning-cost-ghaziabad' }
  ];

  const serviceAreas = [
    'Chipiyana Buzurg',
    'Jaat Chowk',
    'KTS Complex',
    'Dolphin Public School Area',
    'Crossings Republik',
    'Noida Extension',
    'Greater Noida West',
    'Shahberi',
    'ABES Engineering College Area',
    'Lal Kuan, Ghaziabad',
    'Chappraula',
    'Panchsheel Greens 2'
  ];

  const faqs = [
    {
      question: 'Where is Oracle Dental Clinic located in Chipiyana Buzurg, Ghaziabad?',
      answer:
        'Oracle Dental Clinic & Implant Center is located at Shop No. 47, KTS Complex, Jaat Chowk, near Dolphin Public School, Chipiyana Buzurg, Ghaziabad, Uttar Pradesh 201009. It is a ground-floor clinic with visible signboards and convenient two-wheeler and car parking nearby.'
    },
    {
      question: 'Who is the attending dentist at Oracle Dental Clinic?',
      answer:
        'Consultations and dental procedures are led by Dr. Prashant Kumar Vats, BDS, MIDA (Dental Surgeon & Implantologist). Patients receive individualized oral examinations, clear explanations of clinical findings, and written treatment plans.'
    },
    {
      question: 'What are the clinic timings?',
      answer:
        'Oracle Dental Clinic & Implant Center is Open Daily: 9:00 AM – 9:00 PM (Monday to Sunday). Evening hours up to 9:00 PM make it practical for working professionals and families to visit after office or school.'
    },
    {
      question: 'What is the consultation fee?',
      answer:
        'The standard dental consultation fee is ₹200. It covers an in-person clinical examination of your teeth and gums, symptom review, and transparent guidance on recommended treatment options and fees.'
    },
    {
      question: 'Do I need an appointment, or are walk-in patients accepted?',
      answer:
        'Both scheduled appointments and walk-in visits are welcome during daily clinic hours (9:00 AM – 9:00 PM). Calling +91 7011961515 or messaging on WhatsApp before visiting helps minimize waiting time, especially for urgent pain.'
    },
    {
      question: 'Which nearby localities can easily reach the clinic?',
      answer:
        'The clinic is conveniently situated for patients searching for a dentist near Chipiyana Buzurg, Jaat Chowk, Crossings Republik, ABES Engineering College area, Lal Kuan, Shahberi, Noida Extension, Greater Noida West, Panchsheel Greens 2, and Chappraula.'
    },
    {
      question: 'What dental treatments are provided under one roof?',
      answer:
        'We provide general and family dentistry, rotary root canal treatment (RCT), single and full-mouth dental implants, wisdom tooth surgical extraction, zirconia and ceramic crowns, ultrasonic scaling, periodontal gum care, tooth-colored fillings, teeth whitening, smile makeovers, braces, clear aligners, pediatric care, and urgent emergency dental relief.'
    },
    {
      question: 'Can I visit for sudden tooth pain or a dental emergency?',
      answer:
        'Yes. For severe throbbing pain, swelling, abscesses, or a broken tooth, call +91 7011961515 so our team can coordinate prompt triage during daily clinic hours (9:00 AM – 9:00 PM).'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-900 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Services', path: '/dental-services' },
          { label: 'Dentist in Chipiyana Buzurg, Ghaziabad', path: '/dentist-chipiyana-buzurg-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Local Dental Clinic • Ghaziabad"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-indigo-950 to-slate-900 text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-500/20">
              <MapPin className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" /> KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Best Dentist &amp; Dental Clinic in Chipiyana Buzurg, Ghaziabad
            </h1>

            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl">
              Searching for the <strong>best dentist near me</strong> or a trusted <strong>dental clinic near me</strong>?{' '}
              <strong>Oracle Dental Clinic &amp; Implant Center</strong> is your dedicated <strong>dental clinic in Chipiyana Buzurg</strong> and top-rated <strong>dental clinic in Ghaziabad</strong>. Led by{' '}
              <strong>Dr. Prashant Kumar Vats, BDS, MIDA</strong>, we are the preferred <strong>dentist near Crossings Republik</strong> and <strong>dentist near Noida Extension</strong>, providing ethical family dentistry, modern dental implants, rotary root canals, and gentle pain relief.
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
                <span className="text-cyan-300 font-bold text-xs">{GBP_CONFIG.HOURS}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center md:justify-start">
              <InteractiveButton
                id="chipiyana-hero-call-btn"
                onClick={handleCall}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-5 h-5" aria-hidden="true" /> Call {GBP_CONFIG.PHONE_DISPLAY}
              </InteractiveButton>

              <InteractiveButton
                id="chipiyana-hero-whatsapp-btn"
                onClick={handleWhatsApp}
                className="bg-[#0F7A40] hover:bg-[#0B5E31] text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" /> Book on WhatsApp
              </InteractiveButton>

              <InteractiveButton
                id="chipiyana-hero-directions-btn"
                onClick={handleDirections}
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-xl border border-white/20 transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5 text-cyan-300" aria-hidden="true" /> Get Directions
              </InteractiveButton>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="bg-slate-900/85 border border-slate-800 p-6 rounded-3xl shadow-2xl max-w-sm w-full space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-2xl shadow-md border border-white/20 shrink-0">
                  O
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white leading-snug">
                    Oracle Dental Clinic &amp; Implant Center
                  </h2>
                  <p className="text-xs text-amber-400 font-medium">Chipiyana Buzurg, Ghaziabad</p>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4 space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <UserCheck className="w-4 h-4 text-cyan-400 mt-1 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-white font-semibold">Dr. Prashant Kumar Vats, BDS, MIDA</p>
                    <p className="text-xs text-slate-400">Dental Surgeon &amp; Implantologist</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-xs text-slate-300">{GBP_CONFIG.ADDRESS}</p>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 mt-1 shrink-0" aria-hidden="true" />
                  <p className="text-xs text-slate-300">{GBP_CONFIG.HOURS}</p>
                </div>
              </div>

              <div className="bg-blue-950/60 rounded-xl p-3 border border-blue-800/50 text-center">
                <p className="text-xs text-blue-200">
                  Initial Consultation Fee: <span className="font-extrabold text-amber-300 text-sm">₹200</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Introduction & Clinical Philosophy */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Stethoscope className="w-3.5 h-3.5" aria-hidden="true" /> Attending Doctor &amp; Clinic Standards
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Meet Dr. Prashant Kumar Vats, BDS, MIDA — Your Neighborhood Dentist in Ghaziabad
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                At <strong>Oracle Dental Clinic &amp; Implant Center</strong>, consultations and treatments are provided directly by{' '}
                <strong>Dr. Prashant Kumar Vats, BDS, MIDA (Dental Surgeon &amp; Implantologist)</strong>. Our practice focuses on conservative, evidence-based dentistry—preserving natural teeth whenever clinically sound, and offering proven options such as dental implants, zirconia crowns, and fixed bridges when replacement is needed.
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Whether you visit us for a routine checkup near Jaat Chowk, urgent toothache relief, or planned restorative work from anywhere in Ghaziabad or Greater Noida West, every step and fee is discussed clearly before treatment begins.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>Clear Consultations (₹200):</strong> Thorough oral exam with straightforward diagnosis and upfront cost discussion.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>Daily Evening Access:</strong> {GBP_CONFIG.HOURS} so families and working patients can visit without rushing.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>Multi-Stage Sterilization:</strong> Autoclaved instruments, sanitized operatory surfaces, and disposable barriers.
                  </span>
                </div>
                <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong>Digital Diagnostic Support:</strong> Targeted dental X-rays and clinical assessment for root canals, extractions, and implants.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/assets/images/dr-prashant-vats-400.webp 400w, /assets/images/dr-prashant-vats-768.webp 456w"
                    sizes="(max-width: 768px) 90vw, 384px"
                  />
                  <img
                    src="/assets/images/dr-prashant-vats.jpg"
                    alt="Dr. Prashant Kumar Vats, BDS, MIDA — Dental Surgeon and Implantologist at Oracle Dental Clinic, Chipiyana Buzurg, Ghaziabad"
                    width="400"
                    height="702"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-96 sm:h-[440px] object-cover object-top block"
                  />
                </picture>
                <div className="p-4 text-center bg-white border-t border-slate-100">
                  <p className="font-bold text-slate-900 text-sm">Dr. Prashant Kumar Vats, BDS, MIDA</p>
                  <p className="text-xs text-slate-600">Dental Surgeon &amp; Implantologist • Chipiyana Buzurg, Ghaziabad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Facilities & Sterilization */}
      <section className="py-12 bg-slate-100/70 border-y border-slate-200/70 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-white text-blue-700 border border-slate-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <Building2 className="w-3.5 h-3.5" aria-hidden="true" /> Clinic Infrastructure
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Patient Facilities &amp; Hygiene at Our Ghaziabad Dental Clinic
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Clean clinical workflows designed for safe procedures, accurate diagnosis, and comfortable family visits.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                title: 'Instrument Sterilization',
                desc: 'Multi-stage cleaning and autoclave sterilization protocols alongside single-use consumables for infection control.'
              },
              {
                title: 'Modern Operatory Setup',
                desc: 'Ergonomic dental chair, rotary endodontic equipment, and ultrasonic scalers suited for routine and surgical care.'
              },
              {
                title: 'Ground-Level Access',
                desc: 'Shop No. 47 at KTS Complex offers straightforward entry for seniors, children, and patients visiting in pain.'
              },
              {
                title: 'Nearby Vehicle Parking',
                desc: 'Convenient two-wheeler and car parking space available directly outside KTS Complex near Jaat Chowk.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-2">
                <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Symptoms Quick Triage */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            When Should You Visit a Dentist Near You?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Early assessment often resolves dental issues with simpler, more conservative treatment. Match your symptom to the right clinical guide:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <HeartPulse className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Tooth Pain &amp; Sensitivity</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Throbbing pain at night, pain while chewing, or lingering cold/hot sensitivity can indicate deep cavities or pulp infection that may need a filling or root canal.
            </p>
            <div className="flex flex-wrap gap-3 pt-1 text-xs font-bold text-blue-700">
              <a href="/tooth-pain-treatment" onClick={(e) => handleLinkClick(e, '/tooth-pain-treatment')} className="hover:underline inline-flex items-center gap-1">
                Tooth Pain Guide <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a href="/root-canal-treatment" onClick={(e) => handleLinkClick(e, '/root-canal-treatment')} className="hover:underline inline-flex items-center gap-1">
                Root Canal Care <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
              <Activity className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Bleeding, Swollen or Receding Gums</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Bleeding on brushing, puffy gums, or exposed sensitive roots signal tartar buildup or periodontal inflammation. Timely scaling helps prevent bone loss.
            </p>
            <div className="flex flex-wrap gap-3 pt-1 text-xs font-bold text-blue-700">
              <a href="/periodontal-gum-treatment-ghaziabad" onClick={(e) => handleLinkClick(e, '/periodontal-gum-treatment-ghaziabad')} className="hover:underline inline-flex items-center gap-1">
                Gum &amp; Periodontal Care <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a href="/teeth-cleaning" onClick={(e) => handleLinkClick(e, '/teeth-cleaning')} className="hover:underline inline-flex items-center gap-1">
                Teeth Scaling <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" aria-hidden="true" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">Missing, Broken or Impacted Teeth</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Gaps from missing teeth gradually shift neighboring teeth and reduce bite efficiency, while impacted wisdom molars can trigger recurring jaw swelling.
            </p>
            <div className="flex flex-wrap gap-3 pt-1 text-xs font-bold text-blue-700">
              <a href="/dental-implants" onClick={(e) => handleLinkClick(e, '/dental-implants')} className="hover:underline inline-flex items-center gap-1">
                Dental Implants <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
              <a href="/wisdom-tooth-extraction" onClick={(e) => handleLinkClick(e, '/wisdom-tooth-extraction')} className="hover:underline inline-flex items-center gap-1">
                Wisdom Tooth Care <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="bg-rose-50 border border-rose-200 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-800 bg-rose-100 px-3 py-1 rounded-full uppercase">
              <AlertTriangle className="w-3.5 h-3.5" aria-hidden="true" /> Urgent Care (9 AM – 9 PM Daily)
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-rose-950">
              Experiencing Severe Tooth Pain or Swelling Nearby?
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm max-w-xl">
              For dental trauma, broken teeth, abscesses, or sudden acute toothache, call <strong>{GBP_CONFIG.PHONE_DISPLAY}</strong> or view our{' '}
              <a
                href="/emergency-dentist-ghaziabad"
                onClick={(e) => handleLinkClick(e, '/emergency-dentist-ghaziabad')}
                className="text-rose-800 font-bold underline"
              >
                Emergency Dentist in Ghaziabad
              </a>{' '}
              guide before heading to the clinic.
            </p>
          </div>
          <InteractiveButton
            id="chipiyana-emerg-call"
            onClick={handleCall}
            className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-3 rounded-xl text-sm shrink-0"
          >
            Call Helpline: 7011961515
          </InteractiveButton>
        </div>
      </section>

      {/* Dental Treatments Directory */}
      <section className="py-12 bg-white border-y border-slate-200/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              Comprehensive Care Under One Roof
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Dental Treatments Available at Our Chipiyana Buzurg Clinic
            </h2>
            <p className="text-slate-600 mt-2 text-sm sm:text-base">
              Explore dedicated clinical guides for every specialty, or browse our{' '}
              <a
                href="/dental-services"
                onClick={(e) => handleLinkClick(e, '/dental-services')}
                className="text-blue-700 font-bold underline"
              >
                complete 9-category Dental Services Hub
              </a>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {treatmentCategories.map((group, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">{group.category}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{group.desc}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-200/80">
                  {group.links.map((item) => (
                    <a
                      key={item.path}
                      href={item.path}
                      onClick={(e) => handleLinkClick(e, item.path)}
                      className="bg-white hover:bg-blue-50 text-blue-800 border border-slate-200 hover:border-blue-300 rounded-xl px-3.5 py-2.5 text-xs font-bold flex items-center justify-between transition-colors"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">Transparent Cost &amp; Fee Guides</h3>
              <p className="text-xs text-slate-600">Review clinical factors that determine dental fees before your consultation:</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {costQuickLinks.map((c) => (
                <a
                  key={c.path}
                  href={c.path}
                  onClick={(e) => handleLinkClick(e, c.path)}
                  className="bg-white hover:bg-blue-600 hover:text-white text-blue-800 border border-blue-200 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Consultation Process */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            What to Expect During Your ₹200 Dental Consultation
          </h2>
          <p className="text-slate-600 mt-2 text-sm sm:text-base">
            A clear 4-step process built around patient comfort and informed decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Book or Walk In',
              desc: 'Call +91 7011961515, book via WhatsApp, or walk into KTS Complex during daily clinic hours (9:00 AM – 9:00 PM).'
            },
            {
              step: '02',
              title: 'Symptom & Medical Review',
              desc: 'We listen to your concerns, pain triggers, dental history, and relevant medical conditions such as diabetes or medications.'
            },
            {
              step: '03',
              title: 'Clinical Exam & X-Ray',
              desc: 'Dr. Prashant Kumar Vats examines your teeth, gums, and bite, reviewing digital imaging when clinically indicated.'
            },
            {
              step: '04',
              title: 'Transparent Plan & Care',
              desc: 'You receive clear options, timelines, and upfront fee estimates before proceeding with treatment and follow-up guidance.'
            }
          ].map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs relative overflow-hidden"
            >
              <span className="text-4xl font-black text-slate-100 absolute top-4 right-4 select-none" aria-hidden="true">
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

      {/* Directions, Parking & Nearby Service Areas */}
      <section className="py-12 md:py-16 bg-slate-900 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block bg-amber-500/10 text-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-amber-500/20">
                Clinic Address, Routes &amp; Directions
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                How to Reach Oracle Dental Clinic in Chipiyana Buzurg
              </h2>

              <div className="space-y-3.5 text-slate-300 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="text-white">Address:</strong>{' '}
                    <a
                      href={GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-amber-300 underline decoration-amber-400/40 underline-offset-2 transition-colors"
                    >
                      {GBP_CONFIG.ADDRESS}
                    </a>
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <PhoneCall className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="text-white">Phone / WhatsApp:</strong>{' '}
                    <a href={GBP_CONFIG.CALL_URL} className="hover:text-amber-300 font-semibold transition-colors">
                      {GBP_CONFIG.PHONE_DISPLAY}
                    </a>
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="text-white">Clinic Hours:</strong> {GBP_CONFIG.HOURS}
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-cyan-400 shrink-0" aria-hidden="true" />
                  <span>
                    <strong className="text-white">Consultation Fee:</strong> ₹200
                  </span>
                </p>
              </div>

              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2.5 text-xs sm:text-sm text-slate-200">
                <h3 className="font-bold text-amber-300 flex items-center gap-2 text-sm">
                  <Car className="w-4 h-4" aria-hidden="true" /> Quick Route Landmarks
                </h3>
                <p>
                  <strong>From Crossings Republik:</strong> Direct approach along the connecting road toward Jaat Chowk, Chipiyana Buzurg.
                </p>
                <p>
                  <strong>From Noida Extension / Greater Noida West / Shahberi:</strong> Straight road connectivity toward Jaat Chowk near Dolphin Public School.
                </p>
                <p>
                  <strong>From Lal Kuan &amp; NH-9:</strong> Turn toward Chipiyana Buzurg via the ABES Engineering College road to KTS Complex.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-1">
                <InteractiveButton
                  id="chipiyana-loc-call-btn"
                  onClick={handleCall}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-5 rounded-xl text-sm flex items-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" aria-hidden="true" /> Call Now
                </InteractiveButton>

                <InteractiveButton
                  id="chipiyana-loc-whatsapp-btn"
                  onClick={handleWhatsApp}
                  className="bg-[#0F7A40] hover:bg-[#0B5E31] text-white font-bold py-3 px-5 rounded-xl text-sm flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" /> Book Appointment
                </InteractiveButton>

                <InteractiveButton
                  id="chipiyana-loc-directions-btn"
                  onClick={handleDirections}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-5 rounded-xl border border-white/20 text-sm flex items-center gap-2"
                >
                  <Compass className="w-4 h-4 text-cyan-300" aria-hidden="true" /> Open Google Maps
                </InteractiveButton>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="h-80 rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-slate-800 relative flex items-center justify-center">
                {showMap ? (
                  <iframe
                    title="Oracle Dental Clinic & Implant Center Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.564724810756!2d77.4520!3d28.6280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee567209864f%3A0x89f2d2fffdfe76b8!2sOracle%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowMap(true)}
                    className="w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-950 flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:from-slate-800 hover:to-emerald-900 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-400 flex items-center justify-center mb-3">
                      <MapPin className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <span className="font-bold text-white text-sm sm:text-base">
                      Tap to Load Interactive Clinic Map
                    </span>
                    <span className="text-xs text-slate-300 mt-1 max-w-xs">
                      Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad
                    </span>
                    <span className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500 text-slate-950 font-bold text-xs">
                      <Compass className="w-3.5 h-3.5" aria-hidden="true" /> Load Interactive Map
                    </span>
                  </button>
                )}
              </div>

              <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-5 space-y-3">
                <h3 className="text-sm font-bold text-white">Nearby Areas Served by Our Clinic</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="bg-slate-900/80 border border-slate-700 rounded-lg px-2.5 py-2 text-xs font-medium text-slate-200 flex items-center gap-1.5"
                    >
                      <MapPin className="w-3 h-3 text-amber-400 shrink-0" aria-hidden="true" />
                      <span>{area}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
              Practical answers about visiting Oracle Dental Clinic in Chipiyana Buzurg, Ghaziabad.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className="w-full text-left p-4 sm:p-5 font-bold text-slate-900 flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors text-sm sm:text-base"
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" aria-hidden="true" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="border-t border-slate-100 px-4 sm:px-5 py-4 text-slate-600 text-sm leading-relaxed bg-slate-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-slate-200 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-blue-900 to-indigo-900 text-white p-8 rounded-3xl shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-bold">Schedule Your Dental Consultation Today</h2>
            <p className="text-slate-200 text-sm">
              Visit Oracle Dental Clinic &amp; Implant Center at Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad ({GBP_CONFIG.HOURS}).
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <InteractiveButton
              id="chipiyana-bottom-call-btn"
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 px-6 rounded-xl text-sm"
            >
              Call {GBP_CONFIG.PHONE_DISPLAY}
            </InteractiveButton>

            <InteractiveButton
              id="chipiyana-bottom-wa-btn"
              onClick={handleWhatsApp}
              className="bg-[#0F7A40] hover:bg-[#0B5E31] text-white font-bold py-3 px-6 rounded-xl text-sm"
            >
              WhatsApp Booking
            </InteractiveButton>

            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                navigateToHome();
              }}
              className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 text-sm transition-colors"
            >
              Back to Homepage
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
