import React from 'react';
import { PhoneCall, MessageCircle, CheckCircle2 } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { RelatedGuidesSection } from './RelatedGuidesSection';

interface Props { handleCall: () => void; handleWhatsApp: () => void; handleDirections: () => void; navigateToHome: () => void; navigateToPath: (p: string) => void; }

const BAD_BREATH_FAQS = [
  {
    q: 'Why does bad breath return quickly even after brushing and mouthwash?',
    a: 'Mouthwash temporarily masks odor without removing hardened tartar (calculus), deep gum pocket bacteria, or hidden tooth decay. Identifying and treating the underlying oral reservoir is necessary for lasting freshness.',
  },
  {
    q: 'Can gum disease or cavities cause persistent halitosis?',
    a: 'Yes. Bleeding gums, periodontal pockets, untreated dental cavities, and trapped food around partially erupted wisdom teeth harbor anaerobic bacteria that release volatile sulfur compounds.',
  },
  {
    q: 'How is chronic bad breath evaluated at Oracle Dental Clinic?',
    a: 'Dr. Prashant Kumar Vats (BDS, MIDA) checks gums for bleeding or pockets, inspects teeth for hidden cavities or leaky old fillings, evaluates tongue coating, and reviews dry-mouth factors before recommending targeted care.',
  },
  {
    q: 'Where is the clinic located for patients near Chipiyana Buzurg?',
    a: 'Oracle Dental Clinic & Implant Center is located at Shop No. 47, KTS Complex, Jaat Chowk, Near Dolphin Public School, Chipiyana Buzurg, Ghaziabad—easily reachable within 6 km from Crossings Republik, Shahberi, Chappraula, Noida Extension, and Lal Kuan.',
  },
];

export default function BadBreathPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Services', path: '/dental-services' },
          { label: 'Bad Breath Treatment', path: '/bad-breath-treatment' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Halitosis Care"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Bad Breath (Halitosis) Treatment in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Clinical oral hygiene evaluation, ultrasonic plaque and tartar removal, and gum infection care for persistent bad breath at Oracle Dental Clinic &amp; Implant Center in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS, MIDA.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="bb-call" onClick={handleCall} className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 px-6 rounded-xl inline-flex items-center gap-2">
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>Call +91 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="bb-wa" onClick={handleWhatsApp} className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp Booking</span>
            </InteractiveButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto space-y-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Common Oral Causes of Chronic Bad Breath</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Most cases of persistent bad breath (halitosis) originate inside the mouth when anaerobic bacteria break down trapped food particles and release volatile sulfur compounds (VSCs). Relying only on mints or alcohol-based rinses masks odor briefly without clearing the root cause.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">Plaque, Hardened Tartar &amp; Gum Pockets</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Mineralized calculus along the gumline traps odor-producing bacteria that normal brushing cannot dislodge. Professional{' '}
                <a href="/teeth-cleaning" onClick={(e) => { e.preventDefault(); navigateToPath('/teeth-cleaning'); }} className="text-blue-700 underline font-semibold">ultrasonic teeth cleaning</a> and{' '}
                <a href="/periodontal-gum-treatment-ghaziabad" onClick={(e) => { e.preventDefault(); navigateToPath('/periodontal-gum-treatment-ghaziabad'); }} className="text-blue-700 underline font-semibold">periodontal gum therapy</a> address these deposits directly.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">Untreated Cavities &amp; Impacted Wisdom Teeth</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Deep{' '}
                <a href="/cavity-treatment" onClick={(e) => { e.preventDefault(); navigateToPath('/cavity-treatment'); }} className="text-blue-700 underline font-semibold">dental cavities</a>, leaking crowns, or food-trapping{' '}
                <a href="/impacted-wisdom-tooth" onClick={(e) => { e.preventDefault(); navigateToPath('/impacted-wisdom-tooth'); }} className="text-blue-700 underline font-semibold">impacted wisdom teeth</a> harbor persistent bacterial debris.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">Tongue Coating &amp; Dry Mouth (Xerostomia)</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Reduced saliva flow from dehydration, mouth breathing, or certain medications allows biofilm to accumulate on the back of the tongue.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">Non-Oral Contributors</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                If gums and teeth are completely healthy, chronic odor can occasionally relate to sinusitis, tonsil stones, or gastric reflux—which your dentist will discuss honestly so you can seek medical follow-up if needed.
              </p>
            </div>
          </div>

          <TreatmentImage
            src="/assets/images/treatments/dental-tools-800.webp"
            alt="Clinical dental examination instruments used for oral hygiene evaluation and plaque removal"
            caption="Clinical evaluation identifies tartar deposits, gum pockets, and hidden decay behind chronic halitosis."
            aspectRatio="16/9"
          />
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">Step-by-Step Clinical Evaluation &amp; Prevention</h2>
          <ul className="space-y-2.5 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Comprehensive Oral Checkup:</strong> Inspection of gums, teeth, tongue surface, and existing fillings or dentures to pinpoint odor sources accurately.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Ultrasonic Scaling &amp; Polishing:</strong> Gentle removal of subgingival tartar and surface stains that fuel anaerobic bacterial growth.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Targeted Restorative Care:</strong> Treating active cavities, loose teeth, or gum inflammation before setting a sustainable daily hygiene routine (brushing twice daily, interdental cleaning, and gentle tongue cleaning).</span>
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <strong>When to consult promptly:</strong> Book an examination if bad breath persists for more than two weeks despite good brushing, or if accompanied by bleeding gums, swollen tissues, a bad taste, or{' '}
            <a href="/loose-tooth-treatment" onClick={(e) => { e.preventDefault(); navigateToPath('/loose-tooth-treatment'); }} className="text-blue-700 underline font-semibold">loose teeth</a>. Open daily 9:00 AM – 9:00 PM at Jaat Chowk, Chipiyana Buzurg, Ghaziabad.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {BAD_BREATH_FAQS.map((faq, idx) => (
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
          title="Related Cleaning, Gum Health & Oral Hygiene Guides"
          navigateToPath={navigateToPath}
          links={[
            { path: '/teeth-cleaning', label: 'Teeth Cleaning & Ultrasonic Scaling', description: 'Clear hardened tartar and bacterial deposits causing oral odor.', tag: 'Treatment' },
            { path: '/teeth-cleaning-cost-ghaziabad', label: 'Teeth Cleaning Cost in Ghaziabad', description: 'Transparent scaling and polishing pricing factors.', tag: 'Cost Guide' },
            { path: '/periodontal-gum-treatment-ghaziabad', label: 'Periodontal & Gum Treatment', description: 'Deep gum pocket therapy for bleeding gums and periodontitis.', tag: 'Treatment' },
            { path: '/loose-tooth-treatment', label: 'Loose Tooth Care', description: 'Evaluate shaky teeth linked to advanced gum disease.', tag: 'Symptom' },
            { path: '/cavity-treatment', label: 'Cavity Treatment', description: 'Treat trapped food decay contributing to chronic bad breath.', tag: 'Symptom' },
            { path: '/dental-services', label: 'All Dental Services', description: 'Browse preventive, restorative, and cosmetic dental treatments.', tag: 'Services Hub' },
          ]}
        />
      </section>
    </div>
  );
}
