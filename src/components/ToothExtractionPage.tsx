import React, { useState } from 'react';
import { PhoneCall, MessageCircle, CheckCircle2, AlertTriangle, ChevronDown, ArrowRight } from 'lucide-react';
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
    q: 'When is tooth extraction necessary instead of saving the tooth?',
    a: 'We always evaluate whether a tooth can be preserved with a filling or root canal first. Extraction is recommended when vertical root fracture, severe bone loss, extensive un-restorable decay, or painful impaction makes saving the tooth clinically unfeasible.'
  },
  {
    q: 'How long does the socket take to heal after a tooth extraction?',
    a: 'Initial gum closure usually takes 1 to 2 weeks, while deeper jawbone remodeling continues over 2 to 3 months. Most patients feel significantly more comfortable after the first 48–72 hours.'
  },
  {
    q: 'How do I prevent dry socket after extraction?',
    a: 'Avoid spitting forcefully, drinking through straws, smoking, vaping, or rinsing vigorously for the first 24 hours so the protective blood clot stays undisturbed in the socket.'
  }
];

export default function ToothExtractionPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Treatments', path: '/#services' },
          { label: 'Tooth Extraction', path: '/tooth-extraction' },
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Oral Surgery"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-10 pb-14 px-4">
        <div className="max-w-5xl mx-auto space-y-5">
          <h1 className="text-3xl sm:text-4xl font-black">Tooth Extraction in Chipiyana Buzurg, Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Careful simple and surgical tooth extractions performed under effective local anesthesia by {GBP_CONFIG.DOCTOR_TITLE}, with structured healing instructions and tooth-replacement planning.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${GBP_CONFIG.PHONE}`}
              onClick={(e) => {
                e.preventDefault();
                handleCall();
              }}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-md"
            >
              <PhoneCall className="w-4 h-4" /> Call {GBP_CONFIG.PHONE_DISPLAY}
            </a>
            <a
              href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                handleWhatsApp();
              }}
              className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold py-3.5 px-6 rounded-xl shadow-md"
            >
              <MessageCircle className="w-4 h-4" /> Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <article className="py-12 px-4 max-w-5xl mx-auto space-y-10">
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">Clinical Indications &amp; Procedure</h2>
          <p className="text-sm sm:text-base text-slate-600">
            Before recommending removal, Dr. Prashant Kumar Vats takes a digital X-ray to assess root shape, nearby nerves, and whether the tooth can be saved. If extraction is necessary, the area is thoroughly numbed with local anesthesia, the tooth is gently loosened and removed, and gauze compression (or sutures for surgical cases) protects clot formation.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            {[
              'Severely decayed teeth beyond restoration with fillings or crowns',
              'Advanced gum disease causing un-stabilizable tooth mobility',
              'Vertical root fractures or persistent infection after repeat RCT',
              'Impacted wisdom teeth or orthodontic space creation',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900">Post-Extraction Aftercare</h2>
            <ul className="text-sm text-slate-600 space-y-1.5 list-disc pl-5">
              <li>Bite gently on sterile gauze for 30–45 minutes to establish a firm clot</li>
              <li>Apply an external cold compress in 15-minute intervals on day one to limit swelling</li>
              <li>Eat soft, lukewarm or cool foods for 24–48 hours and avoid chewing on the surgical side</li>
              <li>Starting after 24 hours, rinse gently with warm salt water after meals</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" /> Possible Risks &amp; Tooth Replacement
            </h2>
            <p className="text-sm text-slate-600">
              Temporary swelling, mild oozing, jaw stiffness, or dry socket (especially in smokers) can occur. Leaving a non-wisdom tooth space unreplaced can allow neighboring teeth to drift—ask about <a href="/dental-implants" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-implants'); }} className="text-blue-700 underline font-semibold">dental implants</a> or <a href="/dental-bridges" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-bridges'); }} className="text-blue-700 underline font-semibold">fixed bridges</a>.
            </p>
          </div>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900">Related Surgical &amp; Replacement Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-sm">
            {[
              { label: 'Wisdom Tooth Extraction', path: '/wisdom-tooth-extraction' },
              { label: 'Implant After Extraction', path: '/dental-implant-after-tooth-extraction' },
              { label: 'Tooth Extraction Cost', path: '/tooth-extraction-cost-ghaziabad' },
              { label: 'Missing Teeth Options', path: '/missing-teeth' },
            ].map((l) => (
              <a
                key={l.path}
                href={l.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPath(l.path);
                }}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-blue-800 font-semibold border border-slate-200"
              >
                <span>{l.label}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            ))}
          </div>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-blue-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-sm text-slate-600 border-t border-slate-100 pt-3">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>
      </article>

      <TreatmentAppointmentCTA treatmentName="Tooth Extraction Consultation" />
    </div>
  );
}
