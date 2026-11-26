import React, { useState } from 'react';
import { PhoneCall, MessageCircle, CheckCircle2, AlertTriangle, ChevronDown, ArrowRight } from 'lucide-react';
import { TreatmentImage } from './TreatmentImage';
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
    q: 'Do I always need a tooth cap after a root canal?',
    a: 'Back molars and premolars almost always benefit from a protective crown after root canal treatment because chewing forces can crack a hollowed tooth. Front teeth with minimal decay may sometimes be restored with composite bonding depending on remaining enamel.'
  },
  {
    q: 'Which tooth cap material is best—Zirconia, E-Max, or PFM?',
    a: 'Zirconia crowns are metal-free and durable for molars and implant crowns; E-Max all-ceramic offers high translucency for front teeth; PFM (porcelain-fused-to-metal) is an economical option, though a faint dark edge can become visible near the gumline over time.'
  },
  {
    q: 'How long does getting a tooth cap take?',
    a: 'Typically 2 clinic visits spaced 3 to 5 days apart: shaping and precision impression during visit one (with a temporary cap), followed by fitting and final cementation during visit two.'
  }
];

export default function ToothCapPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Services', path: '/dental-services' },
          { label: 'Tooth Cap & Dental Crown', path: '/tooth-cap' },
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Crowns & Caps"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-10 pb-14 px-4">
        <div className="max-w-5xl mx-auto space-y-5">
          <h1 className="text-3xl sm:text-4xl font-black">Tooth Cap &amp; Dental Crown in Chipiyana Buzurg, Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Custom-fitted Zirconia, E-Max ceramic, and PFM dental crowns (&ldquo;tooth caps&rdquo;) to protect fractured, heavily filled, or root canal-treated teeth at {GBP_CONFIG.BUSINESS_NAME}.
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
        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">What Is a Tooth Cap / Dental Crown?</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A <strong>dental crown</strong> (commonly called a <em>tooth cap</em>) is a custom-fitted restoration that covers the visible portion of a weakened tooth above the gumline. It restores tooth strength, chewing function, and natural shape.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3 text-sm text-slate-700">
              <h3 className="font-bold text-slate-900">Clinical Indications for a Tooth Cap:</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                  <span>Reinforcing teeth following <a href="/root-canal-treatment" onClick={(e) => { e.preventDefault(); navigateToPath('/root-canal-treatment'); }} className="text-blue-700 underline font-bold">Root Canal Treatment (RCT)</a></span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                  <span>Restoring cracked, worn, or fractured teeth</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                  <span>Covering teeth with large cavities where fillings alone lack support</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-1 shrink-0" />
                  <span>Completing a <a href="/dental-implants" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-implants'); }} className="text-blue-700 underline font-bold">Dental Implant</a> restoration</span>
                </div>
              </div>
            </div>

            <TreatmentImage
              src="/assets/images/case-10.webp"
              alt="Illustration of a dental crown covering a weakened tooth"
              caption="Educational illustration: Dental crown (tooth cap) fitting precisely over a prepared tooth."
              aspectRatio="4/3"
            />
          </div>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">Types of Tooth Caps &amp; Clinical Procedure</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We offer metal-free <a href="/zirconia-crowns" onClick={(e) => { e.preventDefault(); navigateToPath('/zirconia-crowns'); }} className="text-blue-700 underline font-semibold">Zirconia crowns</a>, E-Max all-ceramic crowns, and PFM crowns. After checking the tooth root via digital X-ray, the tooth is conservatively shaped, an accurate impression and shade are recorded, and a protective temporary cap is worn until final cementation.
          </p>

          <TreatmentImage
            src="/assets/images/treatments/bright-smile-800.webp"
            alt="Dental crown shade matching and restorative clinical care"
            caption="Clinical restorative workflow: preparation, shade selection, and bite-balanced cementation."
            aspectRatio="16/9"
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900">Benefits &amp; Limitations</h2>
            <p className="text-sm text-slate-600">
              Crowns distribute chewing loads evenly and protect brittle teeth from splitting. Limitations include permanent enamel shaping of the supporting tooth and eventual wear or replacement over years of service.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" /> Risks &amp; Aftercare
            </h2>
            <p className="text-sm text-slate-600">
              Mild sensitivity or a slightly high bite may occur initially and can be adjusted easily. Brush and floss around the gumline daily to prevent secondary decay at the crown margin, and avoid cracking hard shells or ice with crowned teeth.
            </p>
          </div>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900">Related Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-sm">
            {[
              { label: 'Zirconia Crowns Guide', path: '/zirconia-crowns' },
              { label: 'Tooth Cap Cost in Ghaziabad', path: '/tooth-cap-cost-ghaziabad' },
              { label: 'Root Canal Treatment (RCT)', path: '/root-canal-treatment' },
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

      <TreatmentAppointmentCTA treatmentName="Tooth Cap & Crown Consultation" />
    </div>
  );
}
