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
    q: 'What is the ideal age to start dental braces?',
    a: 'An initial orthodontic screening around age 7–9 helps spot jaw-growth issues early, while comprehensive braces commonly start between ages 11 and 15. However, healthy adults of any age can also undergo orthodontic treatment.'
  },
  {
    q: 'How long does braces treatment usually take?',
    a: 'Most orthodontic cases take between 12 and 24 months depending on crowding severity, bite correction needs, and regular attendance at monthly adjustment visits.'
  },
  {
    q: 'What is the difference between metal, ceramic, and self-ligating braces?',
    a: 'Metal braces are durable and cost-effective for all complexities. Ceramic braces use tooth-colored brackets for a subtler appearance. Self-ligating braces use a built-in clip mechanism instead of elastic ties, which can simplify cleaning and adjustments.'
  },
  {
    q: 'Are retainers required after braces are removed?',
    a: 'Yes. Teeth naturally tend to shift back over time. Wearing custom removable or fixed retainers as directed after braces removal is essential to preserve your alignment.'
  }
];

export default function DentalBracesPage({
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
          { label: 'Dental Braces', path: '/dental-braces' },
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Orthodontic Braces"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-10 pb-14 px-4">
        <div className="max-w-5xl mx-auto space-y-5">
          <p className="inline-block text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full">
            Oracle Dental Clinic • Chipiyana Buzurg, Ghaziabad
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Dental Braces in Chipiyana Buzurg, Ghaziabad
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
            Metal, ceramic, and self-ligating orthodontic braces for teenagers and adults to correct
            crooked teeth, spacing, overbite, and crossbite near Jaat Chowk, Crossings Republik, and
            Shahberi.
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
              <MessageCircle className="w-5 h-5" /> Book Braces Assessment on WhatsApp
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
          <h2 className="text-2xl font-extrabold text-slate-900">How Dental Braces Work</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Fixed orthodontic braces apply gentle, controlled forces through bonded brackets and
            archwires to guide misaligned teeth and jaws into healthier positions. Properly aligned
            teeth are easier to brush and floss, lowering long-term risks of decay, gum inflammation,
            and uneven enamel wear.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">Who May Need Dental Braces?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            {[
              'Crowded, overlapping, or rotated front and back teeth',
              'Noticeable gaps or spacing between teeth',
              'Overbite, underbite, open bite, or crossbite misalignment',
              'Protruding front teeth prone to accidental chipping',
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
              Fixed braces handle both simple and complex bite corrections reliably because they work
              continuously without depending on remembering to wear trays. Limitations include visible
              brackets, food restrictions (avoiding hard/sticky snacks), and extra brushing care around wires.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" /> Risks &amp; Aftercare
            </h2>
            <p className="text-sm text-slate-600">
              Mild soreness for 2–4 days after wire tightening and occasional cheek irritation are
              common. Poor brushing around brackets can cause white-spot enamel decalcification or
              swollen gums—use an interdental brush and attend scheduled cleanings.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" /> Explore Related Orthodontic &amp; Preventive Care
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-sm">
            {[
              { label: 'Clear Aligners (Invisible Braces)', path: '/clear-aligners' },
              { label: 'Teeth Cleaning & Scaling', path: '/teeth-cleaning' },
              { label: 'Kids Dentistry', path: '/kids-dentist' },
              { label: 'Cosmetic Dentistry', path: '/cosmetic-dentistry' },
              { label: 'Smile Makeover Ghaziabad', path: '/smile-makeover-ghaziabad' },
              { label: 'Dentist in Chipiyana Buzurg', path: '/dentist-chipiyana-buzurg-ghaziabad' },
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

      <TreatmentAppointmentCTA treatmentName="Dental Braces Consultation" />
    </div>
  );
}
