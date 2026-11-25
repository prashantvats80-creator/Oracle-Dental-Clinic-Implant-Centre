import React, { useState } from 'react';
import {
  PhoneCall,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  Clock,
  MapPin,
  CheckCircle2
} from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { GBP_CONFIG } from '../config/googleBusinessProfile';

interface EmergencyDentistGhaziabadPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function EmergencyDentistGhaziabadPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: EmergencyDentistGhaziabadPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (navigateToPath) {
      navigateToPath(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const faqs = [
    {
      q: 'What counts as a genuine dental emergency?',
      a: 'Dental emergencies include severe throbbing toothaches disrupting sleep or eating, facial or gum swelling with pus discharge (abscess), a knocked-out (avulsed) permanent tooth, uncontrolled bleeding from gums or an extraction socket, or a broken tooth with sharp edges or exposed nerve tissue.'
    },
    {
      q: 'What should I do right away if a permanent tooth is knocked out?',
      a: 'Pick up the tooth ONLY by the white crown (never touch the root), gently rinse off visible dirt under cool water without scrubbing, and if comfortable, gently re-seat it in the socket. Otherwise, keep it submerged in cold milk or saliva and visit Oracle Dental Clinic within 30 to 60 minutes for the best chance of reimplantation.'
    },
    {
      q: 'How does Oracle Dental Clinic relieve severe emergency tooth pain?',
      a: 'Dr. Prashant Kumar Vats, BDS, MIDA performs a prompt diagnostic assessment and digital X-ray when indicated, administers local anesthesia to numb acute nerve pain, and performs immediate stabilizing care—such as pulpal access decompression, abscess drainage, or protective sedative dressing—along with targeted medications.'
    },
    {
      q: 'What are your emergency dental hours and consultation fee?',
      a: 'Oracle Dental Clinic & Implant Center is Open Daily: 9:00 AM – 9:00 PM (Monday to Sunday). The standard consultation fee is ₹200, and any urgent stabilization procedures are explained with upfront estimates before proceeding.'
    },
    {
      q: 'When should dental swelling be treated at a hospital emergency room instead?',
      a: 'If tooth or jaw swelling spreads rapidly toward the eye or neck, causes difficulty swallowing or breathing, prevents opening your mouth, or is accompanied by a high fever, seek immediate hospital emergency medical attention right away.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-red-100 selection:text-red-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Services', path: '/dental-services' },
          { label: 'Emergency Dentist in Ghaziabad', path: '/emergency-dentist-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Urgent Dental Care (9 AM – 9 PM)"
      />

      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-red-950 via-slate-950 to-red-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-red-500/20 text-red-200 border border-red-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
            <span>Urgent Dental Triage • {GBP_CONFIG.HOURS}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Emergency Dentist in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Experiencing sudden severe toothache, dental swelling, an abscess, or a broken tooth? Get prompt clinical assessment and urgent pain relief from{' '}
            <strong>Dr. Prashant Kumar Vats, BDS, MIDA</strong> at{' '}
            <strong>Oracle Dental Clinic &amp; Implant Center</strong> in Chipiyana Buzurg, Ghaziabad. Open daily 9:00 AM – 9:00 PM with a transparent <strong>₹200</strong> consultation fee.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton
              id="emergency-ghaziabad-call-btn"
              onClick={handleCall}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-7 py-4 rounded-xl flex items-center gap-2 transition-all shadow-xl text-base"
            >
              <PhoneCall className="w-5 h-5 text-slate-950" aria-hidden="true" /> <span>Call Now: 7011961515</span>
            </InteractiveButton>
            <InteractiveButton
              id="emergency-ghaziabad-wa-btn"
              onClick={handleWhatsApp}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-4 rounded-xl flex items-center gap-2 transition-all shadow-md"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" /> <span>WhatsApp Urgent Desk</span>
            </InteractiveButton>
            {handleDirections && (
              <InteractiveButton
                id="emergency-ghaziabad-dir-btn"
                onClick={handleDirections}
                className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-medium px-5 py-4 rounded-xl flex items-center gap-2 text-sm transition-all"
              >
                <MapPin className="w-4 h-4 text-amber-400" aria-hidden="true" /> <span>Directions to Clinic</span>
              </InteractiveButton>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Verified Clinic Transparency Banner */}
        <div className="bg-white border border-red-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-red-700 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-red-600" aria-hidden="true" />
              <span>Same-Day Urgent Dental Care</span>
            </div>
            <h2 className="text-xl font-bold text-slate-900">{GBP_CONFIG.BUSINESS_NAME}</h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Led by <strong>Dr. Prashant Kumar Vats, BDS, MIDA</strong> • {GBP_CONFIG.ADDRESS} • {GBP_CONFIG.HOURS}
            </p>
          </div>
          <div className="bg-red-50 border border-red-100 rounded-2xl px-5 py-3.5 text-center shrink-0 w-full md:w-auto">
            <span className="block text-[11px] font-bold text-red-900 uppercase">Emergency Consultation</span>
            <span className="text-2xl font-black text-red-700">₹200</span>
            <span className="block text-[11px] text-slate-600 mt-0.5">Call 7011961515 Before Visiting</span>
          </div>
        </div>

        {/* Section 1: Dental Emergencies We Treat */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-red-700 text-xs font-bold uppercase tracking-wider">Urgent Conditions</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Dental Emergencies Requiring Prompt Care
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
              Temporary painkillers cannot resolve nerve inflammation, trapped pus, or exposed tooth fractures. Seek timely in-clinic care if you experience any of the following:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 space-y-2">
              <span className="text-[11px] font-bold text-red-700 uppercase">Acute Pulpitis</span>
              <h3 className="font-bold text-base text-slate-900">Severe Throbbing Tooth Pain</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Unrelenting pain that disrupts sleep, worsens on lying down, or flares with hot liquids—often caused by deep decay reaching the pulp nerve.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 space-y-2">
              <span className="text-[11px] font-bold text-red-700 uppercase">Infection &amp; Pus</span>
              <h3 className="font-bold text-base text-slate-900">Dental Swelling &amp; Abscess</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Swollen cheek, puffy gum boil, pus taste, or throbbing pressure around an infected tooth or wisdom molar needing clinical drainage and infection control.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 space-y-2">
              <span className="text-[11px] font-bold text-red-700 uppercase">Dental Trauma</span>
              <h3 className="font-bold text-base text-slate-900">Broken or Fractured Tooth</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Cracked or broken teeth with sharp jagged edges cutting the tongue or exposed sensitive pulp requiring prompt smoothing, protective dressing, or restoration.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-red-50/60 border border-red-200 space-y-2">
              <span className="text-[11px] font-bold text-red-700 uppercase">Time-Sensitive</span>
              <h3 className="font-bold text-base text-slate-900">Knocked-Out Tooth or Bleeding</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                An avulsed permanent tooth stored in cold milk/saline has the highest chance of stabilization when evaluated within 30–60 minutes; persistent socket bleeding also requires urgent control.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Immediate In-Clinic Pain Relief Protocols (Merged from /emergency-dentist) */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-blue-700 text-xs font-bold uppercase tracking-wider">In-Clinic Stabilization</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Immediate Pain Relief &amp; Emergency Dental Protocols
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Our first priority during an emergency visit is safe, rapid stabilization of pain and infection before scheduling definitive restoration:
              </p>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Focused Triage &amp; Local Anesthesia:</strong> Targeted exam and diagnostic X-ray to pinpoint the source of pain, followed by local numbing for immediate comfort.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Emergency Root Canal Access:</strong> Opening an inflamed pulp chamber relieves intense internal pressure quickly. Learn more on our{' '}
                    <a href="/root-canal-treatment" onClick={(e) => handleLinkClick(e, '/root-canal-treatment')} className="text-blue-700 font-bold underline">
                      Root Canal Treatment
                    </a>{' '}
                    page.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Abscess Drainage &amp; Medication:</strong> Sterile drainage, pocket irrigation, and appropriate prescriptions for dental infections.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Protective Bonding or Splinting:</strong> Smoothing sharp fracture edges, sealing exposed dentin, or stabilizing loose traumatized teeth.
                  </span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5">
              <TreatmentImage
                src="/assets/images/case-09.webp"
                alt="Restorative dental care and emergency stabilization at Oracle Dental Clinic, Chipiyana Buzurg, Ghaziabad"
                caption="Clinical restorative and emergency dental care at Oracle Dental Clinic, Ghaziabad."
                aspectRatio="4/3"
              />
            </div>
          </div>
        </section>

        {/* Section 3: First-Aid Steps & When to Seek Hospital Emergency Care */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Before You Arrive</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Safe First-Aid Steps While Traveling to the Clinic
            </h2>
            <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
              Practical steps to protect injured tissues and reduce discomfort until your dental examination:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-2">
            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-amber-400 font-bold text-xs">Step 1</span>
              <h3 className="text-white font-bold text-sm">Gentle Saltwater Rinse</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Swish lukewarm saltwater gently to clear trapped debris. Never place aspirin or clove oil directly onto gum tissue, which can cause chemical burns.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-cyan-400 font-bold text-xs">Step 2</span>
              <h3 className="text-white font-bold text-sm">External Cold Compress</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Apply an ice pack wrapped in a cloth to the outside of the cheek for 15-minute intervals. Avoid hot compresses on swollen cheeks.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-emerald-400 font-bold text-xs">Step 3</span>
              <h3 className="text-white font-bold text-sm">Keep Broken Pieces Moist</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Place any knocked-out tooth or broken fragment in cold milk or saline inside a clean container and bring it immediately.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-2">
              <span className="text-rose-400 font-bold text-xs">Step 4</span>
              <h3 className="text-white font-bold text-sm">Call Ahead: 7011961515</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Calling before leaving lets Dr. Prashant Kumar Vats and our clinic team prepare for prompt triage when you arrive at Jaat Chowk.
              </p>
            </div>
          </div>

          {/* Hospital Red Flags */}
          <div className="bg-rose-950/80 border border-rose-500/40 rounded-2xl p-5 space-y-2">
            <h3 className="text-rose-200 font-bold text-sm sm:text-base flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" aria-hidden="true" />
              When to Seek Immediate Hospital Emergency Care
            </h3>
            <p className="text-rose-100/90 text-xs sm:text-sm leading-relaxed">
              Proceed directly to a hospital emergency department if you have <strong>difficulty breathing or swallowing</strong>, swelling spreading rapidly toward the eye or neck, severe jaw trauma/suspected jaw fracture, uncontrolled heavy bleeding, or high fever with chills.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap gap-4 text-xs font-bold border-t border-slate-800">
            <a
              href="/dental-abscess-treatment"
              onClick={(e) => handleLinkClick(e, '/dental-abscess-treatment')}
              className="text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
            >
              Dental Abscess Treatment <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href="/tooth-pain-treatment"
              onClick={(e) => handleLinkClick(e, '/tooth-pain-treatment')}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
            >
              Tooth Pain Treatment <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href="/broken-tooth-treatment"
              onClick={(e) => handleLinkClick(e, '/broken-tooth-treatment')}
              className="text-rose-300 hover:text-rose-200 flex items-center gap-1.5"
            >
              Broken Tooth Repair <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href="/root-canal-treatment"
              onClick={(e) => handleLinkClick(e, '/root-canal-treatment')}
              className="text-emerald-300 hover:text-emerald-200 flex items-center gap-1.5"
            >
              Root Canal Treatment <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <a
              href="/dentist-chipiyana-buzurg-ghaziabad"
              onClick={(e) => handleLinkClick(e, '/dentist-chipiyana-buzurg-ghaziabad')}
              className="text-slate-200 hover:text-white flex items-center gap-1.5"
            >
              Chipiyana Buzurg Clinic Directions <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <span className="text-red-700 text-xs font-bold uppercase tracking-wider">Patient Inquiries</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
              Clear, practical guidance during an urgent dental problem in Ghaziabad.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3 pt-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xs">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 bg-white hover:bg-slate-50 transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-red-600 shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="bg-slate-50/70 border-t border-slate-100 p-6 text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="bg-gradient-to-r from-red-900 via-slate-900 to-red-950 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Need Urgent Dental Care Today?</h2>
            <p className="text-red-100 text-sm leading-relaxed">
              Call Oracle Dental Clinic &amp; Implant Center right away to coordinate urgent evaluation in Chipiyana Buzurg, Ghaziabad.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-2">
            <InteractiveButton
              id="emergency-bottom-call-btn"
              onClick={handleCall}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all text-base"
            >
              <PhoneCall className="w-5 h-5 text-slate-950" aria-hidden="true" /> <span>Call {GBP_CONFIG.PHONE_DISPLAY}</span>
            </InteractiveButton>
            <InteractiveButton
              id="emergency-bottom-wa-btn"
              onClick={handleWhatsApp}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" /> <span>WhatsApp Urgent Care</span>
            </InteractiveButton>
          </div>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-6 text-xs text-red-200">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400" aria-hidden="true" /> {GBP_CONFIG.HOURS}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" aria-hidden="true" /> Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
