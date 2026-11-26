import React from 'react';
import { PhoneCall, MessageCircle, CheckCircle2 } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { RelatedGuidesSection } from './RelatedGuidesSection';

interface Props { handleCall: () => void; handleWhatsApp: () => void; handleDirections: () => void; navigateToHome: () => void; navigateToPath: (p: string) => void; }

const CHIPPED_TOOTH_FAQS = [
  {
    q: 'Can a small chipped front tooth be repaired in a single visit?',
    a: 'Yes. Minor enamel chips without nerve involvement are commonly restored in one appointment using shade-matched composite resin bonding, contoured and polished to blend with surrounding enamel.',
  },
  {
    q: 'Does chipped tooth bonding require numbing injections or tooth drilling?',
    a: 'Small surface chips typically require minimal or no enamel reduction and often need no anesthesia. Deeper chips reaching sensitive dentin are gently numbed for complete patient comfort.',
  },
  {
    q: 'When is a dental veneer or crown better than composite bonding?',
    a: 'If a large corner of the tooth is missing, you have heavy biting forces, or multiple front teeth show wear, porcelain veneers or zirconia crowns provide stronger long-term durability than direct resin bonding.',
  },
  {
    q: 'How do I care for a bonded tooth after repair?',
    a: 'Avoid biting hard objects such as ice, pens, fingernails, or hard nut shells with repaired front edges. Routine brushing, flossing, and 6-month dental checkups keep the restoration smooth and stain-resistant.',
  },
];

export default function ChippedToothPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Services', path: '/dental-services' },
          { label: 'Chipped Tooth Repair', path: '/chipped-tooth' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Cosmetic Bonding"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Chipped Tooth Repair in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Conservative composite edge bonding, aesthetic veneers, and protective crown options to restore chipped front or back teeth comfortably at Oracle Dental Clinic &amp; Implant Center in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS, MIDA.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="ct-call" onClick={handleCall} className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 px-6 rounded-xl inline-flex items-center gap-2">
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>Call +91 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="ct-wa" onClick={handleWhatsApp} className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp Booking</span>
            </InteractiveButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto space-y-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Repair Options Based on Chip Depth</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Chipped teeth commonly happen from biting hard food, sports bumps, accidental falls, or nighttime teeth grinding. Even when painless, sharp chipped edges can irritate your tongue, trap plaque, or fracture further if left untreated.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-slate-700">
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">1. Composite Resin Bonding</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Best for small to moderate front-tooth chips. Shade-matched{' '}
                <a href="/dental-fillings" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-fillings'); }} className="text-blue-700 underline font-semibold">composite resin</a> is sculpted and light-cured in one sitting.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">2. Porcelain / Ceramic Veneers</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Custom thin shells for wider aesthetic chips or worn edges. Explore{' '}
                <a href="/dental-veneers" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-veneers'); }} className="text-blue-700 underline font-semibold">dental veneers</a> for long-term stain resistance.
              </p>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5">
              <h3 className="font-bold text-slate-900">3. Crowns for Deeper Fractures</h3>
              <p className="text-xs sm:text-sm text-slate-600">
                When a deeper{' '}
                <a href="/broken-tooth-treatment" onClick={(e) => { e.preventDefault(); navigateToPath('/broken-tooth-treatment'); }} className="text-blue-700 underline font-semibold">tooth fracture</a> weakens chewing strength, a protective{' '}
                <a href="/zirconia-crowns" onClick={(e) => { e.preventDefault(); navigateToPath('/zirconia-crowns'); }} className="text-blue-700 underline font-semibold">zirconia crown</a> shields the remaining structure.
              </p>
            </div>
          </div>

          <TreatmentImage
            src="/assets/images/case-07.webp"
            alt="Clinical dental restoration showing repaired front tooth aesthetics"
            caption="Seamless shade-matched restoration restores natural front-tooth contour and bite balance."
            aspectRatio="16/9"
          />
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">What Happens During Your Visit</h2>
          <ul className="space-y-2.5 text-sm text-slate-700">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Vitality &amp; Bite Check:</strong> We check whether the fracture is confined to enamel or involves deeper dentin/nerve tissue (with a digital X-ray if trauma occurred).</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Precise Shade Selection:</strong> Composite resin or ceramic shade is matched under natural lighting so the repaired edge blends naturally.</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
              <span><strong>Finishing &amp; Bite Adjustment:</strong> Careful polishing ensures smooth flossing and prevents high bite pressure on the restored edge.</span>
            </li>
          </ul>
          <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <strong>Serving nearby Ghaziabad families:</strong> Visit our clinic at Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg (open daily 9:00 AM – 9:00 PM), convenient for patients from Crossings Republik, Shahberi, Chappraula, Noida Extension, and Lal Kuan.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {CHIPPED_TOOTH_FAQS.map((faq, idx) => (
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
          title="Related Aesthetic & Restorative Guides"
          navigateToPath={navigateToPath}
          links={[
            { path: '/dental-veneers', label: 'Dental Veneers', description: 'Porcelain and composite veneers for worn or chipped front teeth.', tag: 'Cosmetic' },
            { path: '/cosmetic-dentistry', label: 'Cosmetic Dentistry', description: 'Conservative edge bonding, gap closure, and smile design.', tag: 'Cosmetic' },
            { path: '/smile-makeover-ghaziabad', label: 'Smile Makeover in Ghaziabad', description: 'Comprehensive smile enhancement tailored to facial harmony.', tag: 'Cosmetic' },
            { path: '/broken-tooth-treatment', label: 'Broken Tooth Repair', description: 'Crown and root canal options for deeper tooth fractures.', tag: 'Symptom' },
            { path: '/dental-fillings', label: 'Dental Fillings', description: 'Tooth-colored composite resin repairs for enamel defects.', tag: 'Treatment' },
            { path: '/tooth-filling-cost-ghaziabad', label: 'Tooth Filling Cost in Ghaziabad', description: 'Pricing factors for composite bonding and fillings.', tag: 'Cost Guide' },
          ]}
        />
      </section>
    </div>
  );
}
