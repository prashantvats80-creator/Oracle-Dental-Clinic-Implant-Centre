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

const BRIDGES_FAQS = [
  {
    q: 'How many visits does a fixed dental bridge usually take?',
    a: 'A conventional fixed bridge generally takes two to three appointments over roughly 5–7 days: first for supporting tooth preparation and precision impressions, followed by fit/bite verification and final cementation.',
  },
  {
    q: 'What is the difference between a PFM bridge and a Zirconia dental bridge?',
    a: 'Porcelain-Fused-to-Metal (PFM) bridges have an inner metal alloy base covered with ceramic, while metal-free Zirconia bridges are CAD/CAM milled for superior translucency, gum-margin aesthetics, and high chewing strength.',
  },
  {
    q: 'How should I clean underneath a fixed dental bridge?',
    a: 'Because bridge units are joined together, regular floss cannot pass between them vertically. Using a floss threader, superfloss, or an interdental water flosser daily keeps the gum tissue beneath the artificial tooth clean and healthy.',
  },
  {
    q: 'Should I choose a dental bridge or a dental implant?',
    a: 'If neighboring teeth are completely intact and jawbone density is suitable, a standalone dental implant avoids reshaping healthy adjacent teeth. If neighboring teeth already have large fillings or crowns, a fixed bridge can restore all three teeth simultaneously.',
  },
];

export default function DentalBridgesPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Services', path: '/dental-services' },
          { label: 'Fixed Dental Bridges', path: '/dental-bridges' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Fixed Prosthodontics"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Fixed Dental Bridges in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Custom PFM and metal-free Zirconia dental bridges designed to restore missing teeth gaps comfortably without surgery at Oracle Dental Clinic &amp; Implant Center in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS, MIDA.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="dbr-call" onClick={handleCall} className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-md inline-flex items-center gap-2">
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>Call +91 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="dbr-wa" onClick={handleWhatsApp} className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp Booking</span>
            </InteractiveButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto space-y-10">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">How a Conventional Dental Bridge Works</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            A conventional <strong>dental bridge</strong> consists of two or more crowns (abutments) fitted over natural teeth on either side of a gap, securely holding a lifelike replacement tooth (pontic) in between. Because it is permanently cemented, it does not need to be removed at night.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3 text-sm text-slate-700">
              <h3 className="font-bold text-slate-900 text-base">Benefits of Replacing Missing Teeth:</h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
                  <span>Restores balanced chewing comfort and clear speech articulation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
                  <span>Prevents adjacent natural teeth from tilting or drifting into open spaces.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
                  <span>Non-surgical fixed option completed in a shorter timeframe than surgical implants.</span>
                </li>
              </ul>
            </div>

            <TreatmentImage
              src="/assets/images/case-04.webp"
              alt="Clinical fixed dental bridge restoration filling a missing tooth gap"
              caption="Fixed ceramic dental bridges restore chewing alignment and natural smile symmetry."
              aspectRatio="4/3"
            />
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Dental Bridge vs. Dental Implant &amp; Materials</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            While conventional bridges rely on adjacent natural teeth for support,{' '}
            <a href="/dental-implants" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-implants'); }} className="text-blue-700 underline font-semibold">dental implants</a> replace the missing root independently without altering neighboring healthy enamel. We evaluate X-rays of the supporting teeth and jawbone before recommending the best option.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            Available bridge materials include durable <strong>PFM (Porcelain-Fused-to-Metal)</strong> and metal-free{' '}
            <a href="/zirconia-crowns" onClick={(e) => { e.preventDefault(); navigateToPath('/zirconia-crowns'); }} className="text-blue-700 underline font-semibold">CAD/CAM Zirconia</a>. For unit-based pricing factors and comparisons, visit our{' '}
            <a href="/dental-bridge-cost-ghaziabad" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-bridge-cost-ghaziabad'); }} className="text-blue-700 underline font-semibold">Dental Bridge Cost in Ghaziabad Guide</a>.
          </p>

          <TreatmentImage
            src="/assets/images/case-03.webp"
            alt="Clinical dental restoration comparing tooth-supported bridges and fixed prosthetic options"
            caption="Careful clinical diagnosis helps you choose between a fixed bridge and a standalone implant."
            aspectRatio="16/9"
          />

          <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <strong>Clinic access:</strong> Visit Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad (open daily 9:00 AM – 9:00 PM)—convenient for patients from Crossings Republik, Shahberi, Chappraula, Noida Extension, and Lal Kuan.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {BRIDGES_FAQS.map((faq, idx) => (
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
          title="Related Tooth Replacement & Bridge Cost Guides"
          navigateToPath={navigateToPath}
          links={[
            { path: '/dental-bridge-cost-ghaziabad', label: 'Dental Bridge Cost in Ghaziabad', description: 'Compare PFM vs. Zirconia bridge units and pricing factors.', tag: 'Cost Guide' },
            { path: '/missing-teeth', label: 'Missing Teeth Replacement Options', description: 'Compare implants, bridges, and dentures for single or multiple gaps.', tag: 'Symptom' },
            { path: '/dental-implants', label: 'Dental Implants in Ghaziabad', description: 'Standalone titanium root replacement without grinding healthy teeth.', tag: 'Treatment' },
            { path: '/dental-implant-cost-ghaziabad', label: 'Dental Implant Cost in Ghaziabad', description: 'Understand single and multi-tooth implant pricing.', tag: 'Cost Guide' },
            { path: '/zirconia-crowns', label: 'Zirconia Crowns', description: 'High-strength metal-free ceramic crowns and bridge frameworks.', tag: 'Treatment' },
            { path: '/dentures', label: 'Complete & Partial Dentures', description: 'Removable prosthetic solutions for multiple missing teeth.', tag: 'Treatment' },
          ]}
        />
      </section>
    </div>
  );
}
