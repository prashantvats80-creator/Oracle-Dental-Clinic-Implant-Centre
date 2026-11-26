import React from 'react';
import { PhoneCall, MessageCircle, CheckCircle2 } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { RelatedGuidesSection } from './RelatedGuidesSection';

interface Props { handleCall: () => void; handleWhatsApp: () => void; handleDirections: () => void; navigateToHome: () => void; navigateToPath: (p: string) => void; }

const LOOSE_TOOTH_FAQS = [
  {
    q: 'Can a loose adult tooth tighten up on its own?',
    a: 'Adult tooth mobility rarely resolves on its own without treating the underlying cause. Early gum inflammation or bite overload can often stabilize after deep cleaning and bite adjustment, whereas advanced bone loss requires periodontal care.',
  },
  {
    q: 'What is dental splinting for a shaky tooth?',
    a: 'Splinting bonds a slightly mobile tooth to stronger neighboring teeth using a discreet fiber-reinforced composite strip, reducing movement while surrounding gum tissues heal.',
  },
  {
    q: 'When does a loose tooth need extraction instead of saving?',
    a: 'If X-rays show severe supporting bone loss, persistent infection, or a vertical root fracture, removing the hopeless tooth prevents damage to neighboring bone and allows planned replacement with a dental implant or bridge.',
  },
  {
    q: 'What should I avoid doing before seeing the dentist?',
    a: 'Do not wiggle the tooth with your fingers or tongue, avoid chewing hard or sticky foods on that side, brush gently along the gumline, and call +91 7011961515 to schedule an exam promptly.',
  },
];

export default function LooseToothPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Services', path: '/dental-services' },
          { label: 'Loose Tooth Care', path: '/loose-tooth-treatment' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Periodontal Stabilization"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Loose Tooth Treatment in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Clinical diagnosis, deep periodontal therapy, tooth splinting, and predictable replacement planning for loose or shaky adult teeth at Oracle Dental Clinic &amp; Implant Center in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS, MIDA.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="lt-call" onClick={handleCall} className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 px-6 rounded-xl inline-flex items-center gap-2">
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>Call +91 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="lt-wa" onClick={handleWhatsApp} className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp Booking</span>
            </InteractiveButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto space-y-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Why Adult Teeth Become Loose</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Unlike children losing milk teeth, mobility in a permanent tooth is a warning sign that the supporting gum ligament or jawbone has weakened. Prompt assessment improves the chance of saving your natural tooth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">Periodontal Gum Disease</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Chronic tartar buildup causes deep gum pockets and bone resorption around roots. Targeted{' '}
                <a href="/periodontal-gum-treatment-ghaziabad" onClick={(e) => { e.preventDefault(); navigateToPath('/periodontal-gum-treatment-ghaziabad'); }} className="text-blue-700 underline font-semibold">scaling and root planing</a> halts infection progression.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">Injury, Bite Trauma &amp; Grinding</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Accidental impact or excessive clenching can stretch periodontal fibers. Early{' '}
                <a href="/emergency-dentist-ghaziabad" onClick={(e) => { e.preventDefault(); navigateToPath('/emergency-dentist-ghaziabad'); }} className="text-blue-700 underline font-semibold">urgent dental evaluation</a> and stabilization help tissues recover.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">Root Infection or Abscess</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Fluid pressure from a{' '}
                <a href="/dental-abscess-treatment" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-abscess-treatment'); }} className="text-blue-700 underline font-semibold">dental abscess</a> can make a tooth feel elevated or loose until the infection is drained and treated.
              </p>
            </div>
          </div>

          <TreatmentImage
            src="/assets/images/case-05.webp"
            alt="Clinical dental restoration showing tooth stabilization and prosthetic replacement care"
            caption="X-ray bone-level evaluation determines whether a mobile tooth can be stabilized or safely replaced."
            aspectRatio="16/9"
          />
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">Stabilization vs. Replacement Options</h2>
          <ul className="space-y-2.5 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Deep Periodontal Cleaning &amp; Bite Relief:</strong> Removes calculus beneath the gums and balances excessive chewing pressure on mobile teeth.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Tooth Splinting:</strong> Connects mildly mobile teeth to adjacent stable teeth for support when sufficient jawbone remains.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Planned Replacement When Non-Restorable:</strong> If severe bone loss makes saving the tooth unpredictable, fixed{' '}
                <a href="/dental-implants" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-implants'); }} className="text-blue-700 underline font-semibold">dental implants</a>,{' '}
                <a href="/dental-bridges" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-bridges'); }} className="text-blue-700 underline font-semibold">bridges</a>, or{' '}
                <a href="/dentures" onClick={(e) => { e.preventDefault(); navigateToPath('/dentures'); }} className="text-blue-700 underline font-semibold">dentures</a> restore comfortable chewing.</span>
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <strong>Clinic access:</strong> Open daily 9:00 AM – 9:00 PM at Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad—serving patients within 6 km including Crossings Republik, Shahberi, Chappraula, Noida Extension, and Lal Kuan.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {LOOSE_TOOTH_FAQS.map((faq, idx) => (
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
          title="Related Gum Care & Tooth Replacement Guides"
          navigateToPath={navigateToPath}
          links={[
            { path: '/periodontal-gum-treatment-ghaziabad', label: 'Periodontal & Gum Treatment', description: 'Treat gum pockets, bleeding gums, and periodontal bone loss.', tag: 'Treatment' },
            { path: '/teeth-cleaning', label: 'Teeth Cleaning & Scaling', description: 'Ultrasonic tartar removal to halt gum inflammation early.', tag: 'Treatment' },
            { path: '/bad-breath-treatment', label: 'Bad Breath Treatment', description: 'Address chronic oral odor commonly linked to gum disease.', tag: 'Symptom' },
            { path: '/missing-teeth', label: 'Missing Teeth Replacement Options', description: 'Compare implants, bridges, and dentures if a tooth cannot be saved.', tag: 'Symptom' },
            { path: '/dental-implants', label: 'Dental Implants in Ghaziabad', description: 'Stable titanium replacements for non-restorable loose teeth.', tag: 'Treatment' },
            { path: '/emergency-dentist-ghaziabad', label: 'Emergency Dentist in Ghaziabad', description: 'Same-day dental evaluation for trauma-related tooth mobility.', tag: 'Urgent Care' },
          ]}
        />
      </section>
    </div>
  );
}
