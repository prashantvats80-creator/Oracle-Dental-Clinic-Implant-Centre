import React, { useState } from 'react';
import { PhoneCall, MessageCircle, CheckCircle2, AlertTriangle, ChevronDown, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { TreatmentAppointmentCTA } from './TreatmentAppointmentCTA';
import { GBP_CONFIG } from '../config/googleBusinessProfile';

interface Props {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath: (p: string) => void;
}

const FAQS = [
  {
    q: 'What dental concerns can cosmetic dentistry address?',
    a: 'Cosmetic dentistry addresses stained or yellowed enamel, chipped or worn edges, small gaps between front teeth (diastema), uneven tooth proportions, and mild alignment irregularities using conservative, tooth-preserving techniques.'
  },
  {
    q: 'Do I need healthy gums before starting cosmetic treatments?',
    a: 'Yes. Healthy gums and cavity-free teeth are essential before veneers, bonding, crowns, or whitening. We always perform a full oral evaluation and any needed scaling or decay treatment first.'
  },
  {
    q: 'What is the difference between composite bonding and porcelain veneers?',
    a: 'Composite bonding adds tooth-colored resin directly in a single visit with minimal or no enamel reduction, making it conservative and repairable. Porcelain veneers are lab-crafted ceramic shells offering higher stain resistance and longevity, though they usually require minimal enamel preparation.'
  },
  {
    q: 'How long do cosmetic dental treatments last?',
    a: 'Longevity depends on the procedure, bite habits, and oral hygiene. Whitening results gradually fade over months to years depending on tea/coffee habits, composite bonding often lasts 4–7 years with maintenance, and porcelain veneers or zirconia crowns can last 10+ years with proper care.'
  }
];

export default function CosmeticDentistryPage({
  handleCall,
  handleWhatsApp,
  navigateToHome,
  navigateToPath,
}: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Treatments', path: '/#services' },
          { label: 'Cosmetic Dentistry', path: '/cosmetic-dentistry' },
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Aesthetic Dentistry"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-10 pb-14 px-4">
        <div className="max-w-5xl mx-auto space-y-5">
          <p className="inline-block text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full">
            Oracle Dental Clinic • Chipiyana Buzurg, Ghaziabad
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Cosmetic Dentistry in Chipiyana Buzurg, Ghaziabad
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
            Conservative, natural-looking aesthetic dental care—including teeth whitening, composite
            gap closure, porcelain veneers, zirconia crowns, and clear aligners—guided by{' '}
            <strong>{GBP_CONFIG.DOCTOR_TITLE}</strong>.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                handleWhatsApp();
              }}
              className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-colors text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5" /> Book Smile Consultation on WhatsApp
            </a>
            <a
              href={`tel:${GBP_CONFIG.PHONE}`}
              onClick={(e) => {
                e.preventDefault();
                handleCall();
              }}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-colors text-sm sm:text-base"
            >
              <PhoneCall className="w-5 h-5" /> Call {GBP_CONFIG.PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">
            What Is Modern Cosmetic Dentistry?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Cosmetic dentistry focuses on improving the colour, shape, alignment, and harmony of your
            teeth while preserving healthy enamel and supporting comfortable bite function. Every
            aesthetic plan at Oracle Dental Clinic starts with a clinical diagnosis so improvements look
            balanced and natural rather than artificial.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Core Cosmetic Treatments Offered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: 'Dental Veneers (Porcelain & Composite)',
                desc: 'Thin custom shells bonded to the front surface of teeth to mask deep discolouration, chips, or front-tooth gaps.',
                path: '/dental-veneers',
              },
              {
                title: 'Professional Teeth Whitening',
                desc: 'Clinically controlled bleaching protocols to lighten extrinsic and age-related tooth stains safely.',
                path: '/teeth-whitening',
              },
              {
                title: 'Front Teeth Gap Closure & Composite Bonding',
                desc: 'Conservative, sculpted tooth-colored resin to close mild diastema gaps or restore chipped edges.',
                path: '/chipped-tooth',
              },
              {
                title: 'Metal-Free Zirconia Crowns',
                desc: 'Tooth-colored crowns for heavily restored or structurally weakened teeth needing both strength and aesthetics.',
                path: '/zirconia-crowns',
              },
              {
                title: 'Clear Aligners & Orthodontic Alignment',
                desc: 'Gradual straightening of crooked or spaced teeth without altering natural enamel.',
                path: '/clear-aligners',
              },
              {
                title: 'Comprehensive Smile Makeover',
                desc: 'Staged combination of whitening, alignment, and restorations tailored to facial proportions.',
                path: '/smile-makeover-ghaziabad',
              },
            ].map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPath(item.path);
                }}
                className="group block p-5 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-200 transition-colors"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-extrabold text-slate-900 group-hover:text-blue-700">{item.title}</h3>
                  <ArrowRight className="w-4 h-4 text-blue-600 shrink-0" />
                </div>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Clinical Process: From Assessment to Final Smile
          </h2>
          <ol className="space-y-3 text-sm sm:text-base text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Smile &amp; Oral Health Evaluation:</strong> Check enamel thickness, gum symmetry, cavities, and bite contacts.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Conservative Treatment Planning:</strong> Discuss least-invasive options first (for example, aligners + whitening before considering veneers).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <span><strong>Shade Matching &amp; Delivery:</strong> Select natural shades under daylight-balanced lighting and verify bite comfort.</span>
            </li>
          </ol>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" /> Benefits &amp; Limitations
            </h2>
            <p className="text-sm text-slate-600">
              Cosmetic care can enhance smile symmetry, repair worn edges, and boost confidence.
              However, existing fillings or crowns do not lighten with whitening gels, and veneers or
              crowns require ongoing maintenance and eventual replacement over time.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" /> Risks &amp; Aftercare
            </h2>
            <p className="text-sm text-slate-600">
              Possible effects include temporary tooth sensitivity after whitening or bonding, chipping
              if biting hard objects (ice, fingernails, nutshells), or stain accumulation on composite
              margins. Wearing a nightguard if you grind your teeth and maintaining 6-month cleanings
              protects your results.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-3">
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" /> Convenient Cosmetic Dentist Near Jaat Chowk
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Visit Oracle Dental Clinic at <strong>{GBP_CONFIG.ADDRESS}</strong>. We serve patients from
            Chipiyana Buzurg, Shahberi, Crossings Republik, Noida Extension, Greater Noida West, and Lal Kuan.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-blue-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-sm text-slate-600 border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </article>

      <TreatmentAppointmentCTA treatmentName="Cosmetic Dentistry Consultation" />
    </div>
  );
}
