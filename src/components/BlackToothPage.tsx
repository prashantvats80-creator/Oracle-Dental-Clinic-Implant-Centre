import React from 'react';
import { PhoneCall, MessageCircle, CheckCircle2 } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { RelatedGuidesSection } from './RelatedGuidesSection';

interface Props { handleCall: () => void; handleWhatsApp: () => void; handleDirections: () => void; navigateToHome: () => void; navigateToPath: (p: string) => void; }

const BLACK_TOOTH_FAQS = [
  {
    q: 'Does a black spot on a tooth always mean a cavity?',
    a: 'Not always. Dark lines or spots can be surface stains from tea, coffee, tobacco, or iron supplements, or they can indicate active dental decay. A clinical exam and digital X-ray confirm whether enamel breakdown is present.',
  },
  {
    q: 'Why does a single front tooth turn grey or dark years after an injury?',
    a: 'Past impact trauma can damage the tooth’s internal blood supply, leading to pulp necrosis where internal tissue darkens over time. Even without pain, an X-ray should be taken to rule out silent root-tip infection.',
  },
  {
    q: 'Can routine teeth whitening fix a single dark non-vital tooth?',
    a: 'Surface whitening works best on external stains and generally cannot mask deep intrinsic darkening of a single non-vital tooth. Depending on tooth strength, internal care, composite masking, dental veneers, or a zirconia crown provides a uniform shade.',
  },
  {
    q: 'When should I visit a dentist for a dark or black tooth?',
    a: 'Schedule a checkup promptly if a dark spot grows larger, traps food, causes sensitivity to sweets or cold drinks, or if a single tooth gradually turns grey or brown.',
  },
];

export default function BlackToothPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Services', path: '/dental-services' },
          { label: 'Dark / Black Tooth Care', path: '/black-tooth' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Aesthetic & Restorative"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Dark or Black Tooth Treatment in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Accurate clinical diagnosis and natural-looking restoration for dark spots, deep tooth decay, and discolored non-vital teeth at Oracle Dental Clinic &amp; Implant Center in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS, MIDA.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="blt-call" onClick={handleCall} className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 px-6 rounded-xl inline-flex items-center gap-2">
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>Call +91 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="blt-wa" onClick={handleWhatsApp} className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp Booking</span>
            </InteractiveButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto space-y-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Distinguishing Surface Stains vs. Internal Tooth Damage</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Treating a black or darkened tooth starts with identifying whether the discoloration sits on the outer enamel surface or originates inside the tooth structure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">1. Extrinsic Stains &amp; Tartar</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Dark deposits along the gumline from tea, coffee, or tobacco often clear cleanly with{' '}
                <a href="/teeth-cleaning" onClick={(e) => { e.preventDefault(); navigateToPath('/teeth-cleaning'); }} className="text-blue-700 underline font-semibold">ultrasonic scaling and polishing</a>.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">2. Dental Caries (Cavities)</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Active{' '}
                <a href="/cavity-treatment" onClick={(e) => { e.preventDefault(); navigateToPath('/cavity-treatment'); }} className="text-blue-700 underline font-semibold">tooth decay</a> softens enamel and dentin into dark brown or black pits that require conservative{' '}
                <a href="/dental-fillings" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-fillings'); }} className="text-blue-700 underline font-semibold">composite fillings</a>.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">3. Non-Vital Pulp / Trauma</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                When past trauma or deep infection damages the nerve,{' '}
                <a href="/root-canal-treatment" onClick={(e) => { e.preventDefault(); navigateToPath('/root-canal-treatment'); }} className="text-blue-700 underline font-semibold">root canal treatment</a> followed by a{' '}
                <a href="/zirconia-crowns" onClick={(e) => { e.preventDefault(); navigateToPath('/zirconia-crowns'); }} className="text-blue-700 underline font-semibold">zirconia crown</a> or veneer restores health and shade.
              </p>
            </div>
          </div>

          <TreatmentImage
            src="/assets/images/treatments/dental-tools-800.webp"
            alt="Clinical dental examination tools used to diagnose tooth decay and discoloration"
            caption="Visual examination and digital X-rays distinguish surface tartar stains from internal decay or pulp darkening."
            aspectRatio="16/9"
          />
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">How We Diagnose &amp; Restore Dark Teeth</h2>
          <ul className="space-y-2.5 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Digital X-Ray &amp; Vitality Check:</strong> Confirms decay depth and checks the root tip for hidden infection before recommending treatment.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Conservative First Approach:</strong> Whenever the nerve is healthy, only the decayed section is cleaned and sealed with shade-matched composite.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Aesthetic Shade Masking:</strong> For visibly darkened front teeth, metal-free zirconia crowns or custom{' '}
                <a href="/dental-veneers" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-veneers'); }} className="text-blue-700 underline font-semibold">dental veneers</a> restore natural translucency.</span>
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <strong>Convenient local care:</strong> Visit Oracle Dental Clinic at Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad (open daily 9:00 AM – 9:00 PM), easily accessible from Crossings Republik, Shahberi, Chappraula, Noida Extension, and Lal Kuan.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {BLACK_TOOTH_FAQS.map((faq, idx) => (
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
          title="Related Decay, Root Canal & Restoration Guides"
          navigateToPath={navigateToPath}
          links={[
            { path: '/cavity-treatment', label: 'Cavity Treatment', description: 'Address dark enamel decay early before it reaches the pulp.', tag: 'Symptom' },
            { path: '/root-canal-treatment', label: 'Root Canal Treatment (RCT)', description: 'Clear internal nerve infection in darkened or non-vital teeth.', tag: 'Treatment' },
            { path: '/root-canal-cost-ghaziabad', label: 'Root Canal Cost in Ghaziabad', description: 'Transparent RCT pricing factors and post-treatment cap options.', tag: 'Cost Guide' },
            { path: '/tooth-pain-treatment', label: 'Tooth Pain Treatment', description: 'Clinical evaluation if a dark tooth becomes tender or painful.', tag: 'Symptom' },
            { path: '/broken-tooth-treatment', label: 'Broken Tooth Repair', description: 'Restore fractured teeth that darkened following dental trauma.', tag: 'Symptom' },
            { path: '/zirconia-crowns', label: 'Zirconia Crowns', description: 'Natural-looking metal-free crowns to mask intrinsic discoloration.', tag: 'Treatment' },
          ]}
        />
      </section>
    </div>
  );
}
