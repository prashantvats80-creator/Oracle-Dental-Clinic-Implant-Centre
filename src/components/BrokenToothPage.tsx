import React from 'react';
import { PhoneCall, MessageCircle, CheckCircle2 } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { RelatedGuidesSection } from './RelatedGuidesSection';

interface Props { handleCall: () => void; handleWhatsApp: () => void; handleDirections: () => void; navigateToHome: () => void; navigateToPath: (p: string) => void; }

const BROKEN_TOOTH_FAQS = [
  {
    q: 'What should I do immediately after breaking a tooth?',
    a: 'Rinse your mouth gently with lukewarm water, apply a cold compress externally if there is lip or cheek swelling, avoid chewing on the broken side, and keep any large broken fragment moist in milk or saline while contacting the clinic.',
  },
  {
    q: 'Can a half-broken tooth be saved without extraction?',
    a: 'Often yes. If the root structure below the gumline is intact, the tooth can frequently be restored using a buildup and protective crown—or root canal therapy plus post-and-core crown if the nerve is exposed.',
  },
  {
    q: 'When is a broken tooth not saveable?',
    a: 'Deep vertical fractures splitting the root below the bone level generally cannot be sealed predictably. In such cases, gentle extraction and planned replacement with a dental implant or bridge protects surrounding bone.',
  },
  {
    q: 'Do you accept same-day consultations for broken teeth in Chipiyana Buzurg?',
    a: 'Yes. Oracle Dental Clinic & Implant Center is open daily from 9:00 AM to 9:00 PM. Call +91 7011961515 before visiting so we can prioritize your examination.',
  },
];

export default function BrokenToothPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Services', path: '/dental-services' },
          { label: 'Broken Tooth Repair', path: '/broken-tooth-treatment' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Urgent Restorative Care"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Broken &amp; Fractured Tooth Repair in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Timely clinical evaluation and restorative care for cracked, fractured, or broken teeth—including bonding, protective crowns, and root canal therapy—at Oracle Dental Clinic &amp; Implant Center in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS, MIDA.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="bt-call" onClick={handleCall} className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 px-6 rounded-xl inline-flex items-center gap-2">
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>Call +91 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="bt-wa" onClick={handleWhatsApp} className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp Booking</span>
            </InteractiveButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto space-y-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Restoration Options by Fracture Severity</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            A broken tooth requires X-ray assessment to measure how close the fracture line runs to the inner nerve pulp and gumline. If an injured tooth has turned dark or grey following trauma, also see our{' '}
            <a href="/black-tooth" onClick={(e) => { e.preventDefault(); navigateToPath('/black-tooth'); }} className="text-blue-700 underline font-semibold">Dark / Black Tooth Care Guide</a>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">1. Enamel &amp; Cusp Fractures</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Minor chips are rebuilt with{' '}
                <a href="/chipped-tooth" onClick={(e) => { e.preventDefault(); navigateToPath('/chipped-tooth'); }} className="text-blue-700 underline font-semibold">composite bonding</a>, while larger broken molar cusps are protected with a custom{' '}
                <a href="/tooth-cap" onClick={(e) => { e.preventDefault(); navigateToPath('/tooth-cap'); }} className="text-blue-700 underline font-semibold">dental crown</a>.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">2. Nerve-Exposed Fractures</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                When bleeding, sharp cold sensitivity, or throbbing pain indicates pulp exposure,{' '}
                <a href="/root-canal-treatment" onClick={(e) => { e.preventDefault(); navigateToPath('/root-canal-treatment'); }} className="text-blue-700 underline font-semibold">root canal treatment (RCT)</a> followed by a{' '}
                <a href="/zirconia-crowns" onClick={(e) => { e.preventDefault(); navigateToPath('/zirconia-crowns'); }} className="text-blue-700 underline font-semibold">zirconia crown</a> saves the tooth.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">3. Deep Root Splits</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                If a split extends far below the bone, careful{' '}
                <a href="/tooth-extraction" onClick={(e) => { e.preventDefault(); navigateToPath('/tooth-extraction'); }} className="text-blue-700 underline font-semibold">tooth extraction</a> and{' '}
                <a href="/dental-implant-after-tooth-extraction" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-implant-after-tooth-extraction'); }} className="text-blue-700 underline font-semibold">implant evaluation</a> prevent recurring infection.
              </p>
            </div>
          </div>

          <TreatmentImage
            src="/assets/images/case-11.webp"
            alt="Clinical dental crown restoration protecting a fractured tooth"
            caption="Protective full-coverage crowns reinforce fractured teeth and restore balanced chewing."
            aspectRatio="16/9"
          />
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">Immediate Precautions Before Your Appointment</h2>
          <ul className="space-y-2.5 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Protect Soft Tissues:</strong> If a broken edge is sharp against your cheek or tongue, avoid biting on it and seek smoothing or temporary coverage promptly.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Avoid Extreme Temperatures:</strong> Exposed dentin reacts strongly to iced drinks, hot tea, or sweet foods until sealed.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Same-Day Clinic Access:</strong> Open daily 9:00 AM – 9:00 PM at Jaat Chowk, Chipiyana Buzurg, Ghaziabad—within 6 km of Crossings Republik, Shahberi, Chappraula, Noida Extension, and Lal Kuan.</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {BROKEN_TOOTH_FAQS.map((faq, idx) => (
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
          title="Related Tooth Fracture & Restorative Guides"
          navigateToPath={navigateToPath}
          links={[
            { path: '/black-tooth', label: 'Black / Dark Tooth Care', description: 'Evaluate dark discoloration from dental trauma or internal nerve damage.', tag: 'Symptom' },
            { path: '/chipped-tooth', label: 'Chipped Tooth Repair', description: 'Single-visit composite edge bonding for minor enamel chips.', tag: 'Symptom' },
            { path: '/root-canal-treatment', label: 'Root Canal Treatment (RCT)', description: 'Save fractured teeth with exposed pulp nerves comfortably.', tag: 'Treatment' },
            { path: '/zirconia-crowns', label: 'Zirconia Crowns', description: 'High-strength metal-free caps to protect broken teeth.', tag: 'Treatment' },
            { path: '/tooth-cap-cost-ghaziabad', label: 'Tooth Cap Cost in Ghaziabad', description: 'Compare PFM, ceramic, and zirconia dental crown options.', tag: 'Cost Guide' },
            { path: '/emergency-dentist-ghaziabad', label: 'Emergency Dentist in Ghaziabad', description: 'Prompt urgent care daily 9:00 AM – 9:00 PM for dental trauma.', tag: 'Urgent Care' },
          ]}
        />
      </section>
    </div>
  );
}
