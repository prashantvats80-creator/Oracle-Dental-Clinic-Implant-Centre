import React from 'react';
import { PhoneCall, MessageCircle, CheckCircle2 } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { RelatedGuidesSection } from './RelatedGuidesSection';

interface Props {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath: (p: string) => void;
}

const DENTURES_FAQS = [
  {
    q: 'How long does it take to get custom dentures made?',
    a: 'Complete or partial dentures generally require 3 to 5 short visits over 1 to 2 weeks for primary and final jaw impressions, bite height registration, wax trial fitting, and final delivery with comfort adjustments.',
  },
  {
    q: 'How long does it take to adjust to eating and speaking with new dentures?',
    a: 'Most patients adapt over 2 to 4 weeks by starting with soft foods chewed evenly on both sides and practicing reading aloud. Minor sore spots are normal early on and are relieved quickly with a quick clinic adjustment.',
  },
  {
    q: 'Should dentures be removed while sleeping at night?',
    a: 'Yes. Removing dentures overnight allows your gums to rest and improves blood circulation. Clean them daily with a soft denture brush and store them in clean water or a soaking solution.',
  },
  {
    q: 'What if my lower denture feels loose when eating?',
    a: 'Lower jaw ridges shrink over time, making conventional lower dentures less stable. Relining can improve fit, or placing 2–4 dental implants for a snap-on overdenture significantly improves chewing stability.',
  },
];

export default function DenturesPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Services', path: '/dental-services' },
          { label: 'Complete & Partial Dentures', path: '/dentures' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Removable Prosthodontics"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Complete &amp; Partial Dentures in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Custom-fitted complete, partial, flexible, and implant-supported dentures crafted for comfortable chewing, natural speech, and balanced facial support at Oracle Dental Clinic &amp; Implant Center in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS, MIDA.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="den-call" onClick={handleCall} className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-md inline-flex items-center gap-2">
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>Call +91 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="den-wa" onClick={handleWhatsApp} className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp Booking</span>
            </InteractiveButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto space-y-10">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Custom Denture Solutions for Every Need</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Whether replacing a few missing teeth with a partial denture or restoring a full arch with complete dentures, modern prosthetics use accurate jaw impressions and trial fittings to balance retention, speech clarity, and natural lip support.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3 text-sm text-slate-700">
              <h3 className="font-bold text-slate-900 text-base">Available Denture Types:</h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
                  <span><strong>Complete / Full Dentures:</strong> Restores a full upper or lower arch when all natural teeth are missing.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
                  <span><strong>Acrylic &amp; Cast-Metal Partial Dentures:</strong> Replaces multiple scattered missing teeth while clasping gently onto remaining healthy teeth.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
                  <span><strong>Flexible Dentures:</strong> Lightweight, metal-free thermoplastic partials offering smooth gum-colored comfort and aesthetics.</span>
                </li>
              </ul>
            </div>

            <TreatmentImage
              src="/assets/images/case-05.webp"
              alt="Custom prosthetic denture fitting for comfortable daily chewing"
              caption="Accurate jaw impressions and wax trial fittings help achieve balanced denture comfort."
              aspectRatio="4/3"
            />
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Implant-Supported Overdentures &amp; Pricing Guidance</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            For senior patients or anyone struggling with a loose lower denture,{' '}
            <a href="/dental-implants" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-implants'); }} className="text-blue-700 underline font-semibold">implant-retained overdentures</a> snap securely onto 2–4 titanium implants—reducing slippage while remaining easy to remove for cleaning. For completely fixed non-removable teeth, explore{' '}
            <a href="/full-mouth-dental-implants" onClick={(e) => { e.preventDefault(); navigateToPath('/full-mouth-dental-implants'); }} className="text-blue-700 underline font-semibold">full mouth dental implants</a>.
          </p>

          <TreatmentImage
            src="/assets/images/case-04.webp"
            alt="Clinical prosthetic rehabilitation showing secure arch restoration"
            caption="Implant-retained overdentures provide added grip and confidence compared to conventional lower dentures."
            aspectRatio="16/9"
          />

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mt-4 space-y-3">
            <h3 className="text-base font-bold text-blue-950">Denture Pricing &amp; Material Guide in Ghaziabad</h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Explore transparent complete and partial denture pricing factors, flexible Valplast options, cast-metal frameworks, and implant overdentures with clear consultation fees (₹200) under Dr. Prashant Kumar Vats, BDS, MIDA. Serving patients within 6 km of Chipiyana Buzurg including Crossings Republik, Shahberi, Chappraula, Noida Extension, and Lal Kuan.
            </p>
            <a
              href="/dentures-cost-ghaziabad"
              onClick={(e) => { e.preventDefault(); navigateToPath('/dentures-cost-ghaziabad'); }}
              className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition-all shadow-xs"
            >
              View Detailed Dentures Cost Guide →
            </a>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {DENTURES_FAQS.map((faq, idx) => (
              <details key={idx} className="group border border-slate-200 rounded-2xl bg-slate-50/70 open:bg-white">
                <summary className="cursor-pointer list-none px-5 py-4 font-bold text-slate-900 text-sm sm:text-base flex items-center justify-between gap-4">
                  <span>{faq.q}</span>
                  <span className="text-blue-700 font-extrabold text-lg leading-none group-open:rotate-45 transition-transform" aria-hidden="true">+</span>
                </summary>
                <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>

        <RelatedGuidesSection
          title="Related Denture Cost & Fixed Replacement Guides"
          navigateToPath={navigateToPath}
          links={[
            { path: '/dentures-cost-ghaziabad', label: 'Dentures Cost in Ghaziabad', description: 'Compare acrylic, flexible Valplast, BPS, and overdenture pricing.', tag: 'Cost Guide' },
            { path: '/missing-teeth', label: 'Missing Teeth Replacement Options', description: 'Compare removable dentures against fixed bridges and implants.', tag: 'Symptom' },
            { path: '/full-mouth-dental-implants', label: 'Full Mouth Dental Implants', description: 'Fixed All-on-4 and All-on-6 full-arch teeth replacement.', tag: 'Treatment' },
            { path: '/dental-implants', label: 'Dental Implants in Ghaziabad', description: 'Permanent titanium implant solutions for enhanced chewing stability.', tag: 'Treatment' },
            { path: '/dental-bridges', label: 'Fixed Dental Bridges', description: 'Fixed ceramic replacements for localized missing teeth gaps.', tag: 'Treatment' },
            { path: '/dental-bridge-cost-ghaziabad', label: 'Dental Bridge Cost in Ghaziabad', description: 'Unit-based pricing factors for PFM and Zirconia dental bridges.', tag: 'Cost Guide' },
          ]}
        />
      </section>
    </div>
  );
}
