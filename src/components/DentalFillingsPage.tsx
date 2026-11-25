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
    q: 'Are tooth-colored composite fillings durable for back molars?',
    a: 'Modern nano-hybrid composite resins are strong enough for both front teeth and back chewing surfaces when cavities are small to moderate. Very large cavities that weaken most of a molar may need an onlay or dental crown instead.'
  },
  {
    q: 'Does getting a dental filling hurt?',
    a: 'Shallow enamel cavities often require little or no numbing. For deeper cavities close to the tooth nerve, local anesthesia is used so decayed tissue can be cleaned comfortably.'
  },
  {
    q: 'When can I eat after a composite filling?',
    a: 'Light-cured composite resin hardens immediately during your visit. If local anesthesia was used, wait until numbness wears off (about 2 hours) so you do not accidentally bite your cheek or lip.'
  }
];

export default function DentalFillingsPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Treatments', path: '/#services' },
          { label: 'Dental Fillings', path: '/dental-fillings' },
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Restorative Dentistry"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-10 pb-14 px-4">
        <div className="max-w-5xl mx-auto space-y-5">
          <h1 className="text-3xl sm:text-4xl font-black">Tooth-Colored Dental Fillings in Chipiyana Buzurg, Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Conservative, mercury-free composite and GIC dental fillings to stop tooth decay early, seal cavities, and restore natural enamel contours at {GBP_CONFIG.BUSINESS_NAME}.
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
          <h2 className="text-2xl font-extrabold text-slate-900">What Are Dental Fillings &amp; Who Needs Them?</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            A dental filling repairs a tooth damaged by decay (caries), minor chipping, or worn enamel notches near the gumline. Cleaning and sealing a cavity early prevents bacteria from reaching the inner nerve pulp—helping avoid more complex <a href="/root-canal-treatment" onClick={(e) => { e.preventDefault(); navigateToPath('/root-canal-treatment'); }} className="text-blue-700 underline font-semibold">root canal treatment</a> later.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3 text-sm text-slate-700">
              <h3 className="font-bold text-slate-900">Step-by-Step Procedure:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 shrink-0" /><span>Clinical examination and X-ray to assess cavity depth</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 shrink-0" /><span>Gentle removal of softened decayed tooth structure under local anesthesia if deep</span></li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 shrink-0" /><span>Shade-matched composite resin layered, light-cured, and bite-polished</span></li>
              </ul>
            </div>

            <TreatmentImage
              src="/assets/images/case-11.webp"
              alt="Tooth-colored composite dental restoration"
              caption="Composite resin fillings blend naturally with surrounding tooth enamel."
              aspectRatio="4/3"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900">Benefits &amp; Limitations</h2>
            <p className="text-sm text-slate-600">
              Composite fillings bond directly to enamel, require less drilling than older metal fillings, and match natural tooth colour. Limitations: fillings can wear or stain over years, and very deep cavities close to the pulp may still eventually require root canal therapy.
            </p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" /> Risks &amp; Aftercare
            </h2>
            <p className="text-sm text-slate-600">
              Mild sensitivity to cold or pressure for a few days after a deep filling is common and usually settles. If pain worsens or biting feels uneven, visit for a simple bite check. Maintain fluoride brushing and daily flossing to prevent new decay around margins.
            </p>
          </div>
        </section>

        <section className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900">Related Dental Pages</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-sm">
            {[
              { label: 'Cavity Treatment Guide', path: '/cavity-treatment' },
              { label: 'Tooth Filling Cost Ghaziabad', path: '/tooth-filling-cost-ghaziabad' },
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

      <TreatmentAppointmentCTA treatmentName="Dental Filling Appointment" />
    </div>
  );
}
