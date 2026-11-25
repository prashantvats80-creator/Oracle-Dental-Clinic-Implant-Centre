import React from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { RelatedGuidesSection } from './RelatedGuidesSection';

interface Props { handleCall: () => void; handleWhatsApp: () => void; handleDirections: () => void; navigateToHome: () => void; navigateToPath: (p: string) => void; }

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
          <h1 className="text-3xl sm:text-4xl font-black">Broken & Fractured Tooth Repair in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">Restorative treatments for fractured, cracked, or broken teeth using dental bonding, crowns, or root canal therapy at Oracle Dental Clinic in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS.</p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="bt-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl">Call +91 7011961515</InteractiveButton>
            <InteractiveButton id="bt-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl">WhatsApp Booking</InteractiveButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto space-y-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Restoration Options for Broken Teeth</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Depending on fracture depth, broken teeth can be saved with composite bonding, protective{' '}
            <a href="/tooth-cap" onClick={(e) => { e.preventDefault(); navigateToPath('/tooth-cap'); }} className="text-blue-600 underline font-bold">Tooth Caps</a>, or{' '}
            <a href="/root-canal-treatment" onClick={(e) => { e.preventDefault(); navigateToPath('/root-canal-treatment'); }} className="text-blue-600 underline font-bold">Root Canal Treatment</a> if nerve pulp is exposed. If an injured tooth has turned dark or grey following trauma, see our{' '}
            <a href="/black-tooth" onClick={(e) => { e.preventDefault(); navigateToPath('/black-tooth'); }} className="text-blue-600 underline font-bold">Black Tooth Care Guide</a>.
          </p>

          <TreatmentImage
            src="/assets/images/case-11.webp"
            alt="Educational diagram showing tooth fracture classification and crown restoration options"
            caption="Educational diagram: Cracked enamel restoration using protective dental crown or bonding."
            aspectRatio="16/9"
          />
        </div>

        <RelatedGuidesSection
          title="Related Tooth Fracture & Restorative Guides"
          navigateToPath={navigateToPath}
          links={[
            { path: '/black-tooth', label: 'Black / Dark Tooth Care', description: 'Evaluate dark discoloration from dental trauma or internal nerve damage.', tag: 'Symptom' },
            { path: '/chipped-tooth', label: 'Chipped Tooth Repair', description: 'Single-visit composite edge bonding for minor enamel chips.', tag: 'Symptom' },
            { path: '/root-canal-treatment', label: 'Root Canal Treatment (RCT)', description: 'Save fractured teeth with exposed pulp nerves painlessly.', tag: 'Treatment' },
            { path: '/zirconia-crowns', label: 'Zirconia Crowns', description: 'High-strength metal-free caps to protect broken teeth.', tag: 'Treatment' },
            { path: '/tooth-cap-cost-ghaziabad', label: 'Tooth Cap Cost in Ghaziabad', description: 'Compare PFM, ceramic, and zirconia dental crown options.', tag: 'Cost Guide' },
            { path: '/emergency-dentist-ghaziabad', label: 'Emergency Dentist in Ghaziabad', description: 'Prompt urgent care daily 9:00 AM – 9:00 PM for dental trauma.', tag: 'Urgent Care' },
          ]}
        />
      </section>
    </div>
  );
}
