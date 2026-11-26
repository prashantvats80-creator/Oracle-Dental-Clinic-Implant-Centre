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

const KIDS_DENTIST_FAQS = [
  {
    q: 'At what age should a child have their first dental checkup?',
    a: 'Dental checkups are recommended around the child’s first birthday or within six months of the first milk tooth appearing, followed by routine visits every 6 months to monitor tooth eruption and enamel health.',
  },
  {
    q: 'Why treat cavities in milk teeth if they are going to fall out anyway?',
    a: 'Primary (milk) teeth hold space for developing permanent teeth, support proper chewing and speech, and prevent painful infections that can affect the underlying permanent tooth bud.',
  },
  {
    q: 'Are fluoride varnish and pit-and-fissure sealants safe for children?',
    a: 'Yes. Clinically applied fluoride varnish and BPA-free molar sealants are quick, non-invasive preventive measures that protect deep grooves on newly erupted back teeth from decay.',
  },
  {
    q: 'How do you help anxious children feel comfortable during a dental visit?',
    a: 'We use a calm "tell-show-do" approach—explaining instruments in child-friendly language, taking unhurried breaks, and welcoming parents beside the chair so children build lifelong dental confidence.',
  },
];

export default function KidsDentistPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Services', path: '/dental-services' },
          { label: 'Kids & Pediatric Dentistry', path: '/kids-dentist' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Pediatric Dental Care"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Gentle Kids Dentistry in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Calm, family-friendly pediatric dental checkups, fluoride varnish, pit-and-fissure sealants, and gentle cavity fillings for children at Oracle Dental Clinic &amp; Implant Center in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS, MIDA.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="kd-call" onClick={handleCall} className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-md inline-flex items-center gap-2">
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              <span>Call +91 7011961515</span>
            </InteractiveButton>
            <InteractiveButton id="kd-wa" onClick={handleWhatsApp} className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3.5 px-6 rounded-xl shadow-md inline-flex items-center gap-2">
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>WhatsApp Booking</span>
            </InteractiveButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto space-y-10">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Preventive &amp; Restorative Dental Care for Children</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Healthy milk teeth (primary teeth) act as natural guides for permanent teeth while supporting balanced nutrition, clear speech development, and proper jaw growth. Early preventive visits catch small enamel issues before they cause toothache.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3 text-sm text-slate-700">
              <h3 className="font-bold text-slate-900 text-base">Core Pediatric Treatments:</h3>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
                  <span><strong>Pit &amp; Fissure Sealants:</strong> Protective thin coatings placed over deep back-molar grooves to block food and bacteria.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
                  <span><strong>Topical Fluoride Varnish:</strong> Quick remineralizing application that strengthens young enamel against dietary acids.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
                  <span><strong>Gentle Tooth-Colored <a href="/dental-fillings" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-fillings'); }} className="text-blue-700 underline font-semibold">Fillings</a>:</strong> Conservative treatment for early milk-tooth and permanent-tooth <a href="/cavity-treatment" onClick={(e) => { e.preventDefault(); navigateToPath('/cavity-treatment'); }} className="text-blue-700 underline font-semibold">cavities</a>.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-1 shrink-0" aria-hidden="true" />
                  <span><strong>Growth &amp; Bite Monitoring:</strong> Early screening for crowding, thumb-sucking habits, or future <a href="/dental-braces" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-braces'); }} className="text-blue-700 underline font-semibold">orthodontic braces</a> needs.</span>
                </li>
              </ul>
            </div>

            <TreatmentImage
              src="/assets/images/treatments/dental-exam-800.webp"
              alt="Gentle child dental checkup and preventive oral health examination"
              caption="Unhurried pediatric checkups help children feel relaxed and confident in the dental chair."
              aspectRatio="4/3"
            />
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Building Positive Oral Habits at Home</h2>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            Supervising brushing twice daily with a smear or pea-sized amount of age-appropriate fluoride toothpaste, limiting sticky sugary snacks between meals, and avoiding bedtime milk bottles without rinsing protect young smiles effectively.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 bg-slate-50 border border-slate-200 rounded-2xl p-4">
            <strong>Convenient for local families:</strong> Located at Shop No. 47, KTS Complex, Jaat Chowk, Near Dolphin Public School, Chipiyana Buzurg, Ghaziabad—open daily 9:00 AM – 9:00 PM (including after-school evenings and weekends) for families from Crossings Republik, Shahberi, Chappraula, Noida Extension, and Lal Kuan.
          </p>

          <TreatmentImage
            src="/assets/images/treatments/bright-smile-800.webp"
            alt="Healthy bright smile resulting from regular brushing and preventive pediatric dental checkups"
            caption="Consistent home brushing combined with 6-month preventive checkups keeps growing smiles healthy."
            aspectRatio="16/9"
          />
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions for Parents</h2>
          <div className="space-y-3">
            {KIDS_DENTIST_FAQS.map((faq, idx) => (
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
          title="Related Pediatric, Preventive & Orthodontic Guides"
          navigateToPath={navigateToPath}
          links={[
            { path: '/cavity-treatment', label: 'Cavity Treatment', description: 'Early painless decay care to protect developing teeth.', tag: 'Symptom' },
            { path: '/dental-fillings', label: 'Dental Fillings', description: 'Tooth-colored fillings for milk tooth and permanent tooth cavities.', tag: 'Treatment' },
            { path: '/teeth-cleaning', label: 'Teeth Cleaning & Scaling', description: 'Preventive hygiene checkups and gentle plaque removal.', tag: 'Treatment' },
            { path: '/dental-braces', label: 'Dental Braces', description: 'Orthodontic evaluation for growing teens and misaligned bites.', tag: 'Orthodontics' },
            { path: '/tooth-pain-treatment', label: 'Tooth Pain Treatment', description: 'Prompt examination if your child develops toothache or swelling.', tag: 'Symptom' },
            { path: '/dental-services', label: 'All Dental Services', description: 'Explore full family dentistry services in Chipiyana Buzurg.', tag: 'Services Hub' },
          ]}
        />
      </section>
    </div>
  );
}
