import React, { useState } from 'react';
import { PhoneCall, MessageCircle, CheckCircle2, AlertTriangle, ChevronDown, ArrowRight, MapPin } from 'lucide-react';
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
    q: 'How many hours a day must clear aligners be worn?',
    a: 'For predictable tooth movement, clear aligner trays should be worn 20 to 22 hours every day, removed only for eating, drinking hot or staining beverages, brushing, and flossing.'
  },
  {
    q: 'Are clear aligners suitable for every orthodontic case?',
    a: 'Clear aligners work well for mild-to-moderate crowding, spacing, and many bite adjustments. Severe skeletal discrepancies or complex root rotations may achieve more predictable control with fixed dental braces.'
  },
  {
    q: 'Will aligners affect my speech?',
    a: 'Some patients notice a slight lisp during the first 2 to 3 days while the tongue adapts to the thin plastic trays. Speech normally settles quickly with consistent wear.'
  },
  {
    q: 'Do I still need retainers after finishing aligners?',
    a: 'Yes. Just like braces, retainers are essential after clear aligner therapy to hold teeth in their corrected positions and prevent orthodontic relapse.'
  }
];

export default function ClearAlignersPage({
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
          { label: 'Dental Braces & Orthodontics', path: '/dental-braces' },
          { label: 'Clear Aligners', path: '/clear-aligners' },
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Invisible Teeth Straightening"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-10 pb-14 px-4">
        <div className="max-w-5xl mx-auto space-y-5">
          <p className="inline-block text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full">
            Oracle Dental Clinic • Chipiyana Buzurg, Ghaziabad
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Clear Aligners in Chipiyana Buzurg, Ghaziabad
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
            Discreet, removable clear orthodontic trays planned by{' '}
            <strong>{GBP_CONFIG.DOCTOR_TITLE}</strong> for working professionals, students, and
            adults across Chipiyana Buzurg, Crossings Republik, Noida Extension, and Greater Noida West.
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
              <MessageCircle className="w-5 h-5" /> Book Aligner Scan on WhatsApp
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
          <h2 className="text-2xl font-extrabold text-slate-900">What Are Clear Aligners?</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Clear aligners are a customized series of transparent, medical-grade thermoplastic trays
            designed to move teeth incrementally. Each tray set is typically worn for 1 to 2 weeks
            before advancing to the next stage, gradually guiding your teeth toward improved alignment
            without fixed metal brackets or wires.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">Clinical Indications &amp; Treatment Flow</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            {[
              'Mild-to-moderate crowding or overlapping front teeth',
              'Spacing and gaps between teeth (diastema)',
              'Relapse shifting after previous teenage braces',
              'Patients preferring removable trays for easy brushing and eating',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900">Benefits &amp; Limitations</h2>
            <p className="text-sm text-slate-600">
              Nearly invisible appearance, removable for normal meals and oral hygiene, and fewer
              wire-irritation emergencies. Limitations: results depend strictly on wearing aligners
              20–22 hours daily, and some cases require small tooth-colored composite attachments or
              refinement trays.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" /> Risks &amp; Daily Care
            </h2>
            <p className="text-sm text-slate-600">
              Mild pressure sensation when switching to a new tray is expected for 1–2 days. Always
              brush after meals before reinserting aligners to avoid trapping sugars against enamel,
              clean trays with cool water (never hot water), and store them in their protective case.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" /> Related Treatments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-sm">
            {[
              { label: 'Metal & Ceramic Dental Braces', path: '/dental-braces' },
              { label: 'Smile Makeover in Ghaziabad', path: '/smile-makeover-ghaziabad' },
              { label: 'Cosmetic Dentistry', path: '/cosmetic-dentistry' },
              { label: 'Professional Teeth Whitening', path: '/teeth-whitening' },
              { label: 'Dental Veneers', path: '/dental-veneers' },
              { label: 'Teeth Cleaning & Scaling', path: '/teeth-cleaning' },
            ].map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPath(link.path);
                }}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-blue-800 font-semibold border border-slate-200 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            ))}
          </div>
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

      <TreatmentAppointmentCTA treatmentName="Clear Aligners Consultation" />
    </div>
  );
}
