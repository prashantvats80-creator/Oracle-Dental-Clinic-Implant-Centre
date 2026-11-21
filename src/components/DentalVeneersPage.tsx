import React, { useState } from 'react';
import { PhoneCall, MessageCircle, CheckCircle2, AlertTriangle, ChevronDown, ArrowRight, MapPin } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { TreatmentAppointmentCTA } from './TreatmentAppointmentCTA';
import { GBP_CONFIG } from '../config/googleBusinessProfile';

interface Props {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath: (p: string) => void;
}

const FAQS = [
  {
    q: 'Are dental veneers reversible?',
    a: 'Traditional porcelain veneers usually involve removing a thin layer of front tooth enamel (around 0.3–0.7 mm) so the veneer sits flush without looking bulky. Because enamel does not grow back, porcelain veneers are considered an irreversible treatment requiring long-term care.'
  },
  {
    q: 'Should I choose porcelain veneers or composite veneers?',
    a: 'Porcelain (ceramic) veneers resist coffee and tea staining better and generally last longer, while composite veneers are sculpted directly in fewer visits at a lower cost and can be repaired easily if chipped. Dr. Prashant Kumar Vats will advise based on your enamel thickness and bite.'
  },
  {
    q: 'Can veneers close a gap between my front teeth?',
    a: 'Yes, veneers or conservative composite bonding can close mild-to-moderate front teeth gaps (diastema). For larger gaps or significant crowding, orthodontic clear aligners or braces are often recommended first.'
  },
  {
    q: 'What if I grind my teeth at night?',
    a: 'Habitual teeth grinding (bruxism) puts high stress on thin ceramic shells. If you clench or grind, a custom protective nightguard is strongly advised after veneer placement.'
  }
];

export default function DentalVeneersPage({
  handleCall,
  handleWhatsApp,
  navigateToHome,
  navigateToPath,
}: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Cosmetic Dentistry', path: '/cosmetic-dentistry' },
          { label: 'Dental Veneers', path: '/dental-veneers' },
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Porcelain & Composite Veneers"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-10 pb-14 px-4">
        <div className="max-w-5xl mx-auto space-y-5">
          <p className="inline-block text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full">
            Oracle Dental Clinic • Chipiyana Buzurg, Ghaziabad
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Dental Veneers in Chipiyana Buzurg, Ghaziabad
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
            Custom porcelain and composite dental veneers to refine chipped edges, front-tooth gaps,
            and intrinsic stains with conservative clinical planning by{' '}
            <strong>{GBP_CONFIG.DOCTOR_TITLE}</strong>.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                handleWhatsApp();
              }}
              className="inline-flex items-center gap-2 bg-[#16A34A] hover:bg-[#15803D] text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition-colors text-sm sm:text-base"
            >
              <MessageCircle className="w-5 h-5" /> Book Veneers Assessment on WhatsApp
            </a>
            <a
              href={`tel:${GBP_CONFIG.PHONE}`}
              onClick={(e) => {
                e.preventDefault();
                handleCall();
              }}
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl shadow-lg transition-colors text-sm sm:text-base"
            >
              <PhoneCall className="w-5 h-5" /> Call {GBP_CONFIG.PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <article className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">What Are Dental Veneers?</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Dental veneers are ultra-thin, custom-crafted facings made of dental porcelain (lithium
            disilicate / ceramic) or composite resin that are adhesively bonded to the visible front
            surface of teeth. Unlike full-coverage crowns that encase the entire tooth, veneers preserve
            more of the natural back tooth structure when the tooth itself is structurally sound.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">Clinical Indications for Veneers</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            {[
              'Intrinsic stains or dental fluorosis that do not respond to teeth whitening',
              'Chipped, fractured, or unevenly worn front tooth edges',
              'Small-to-moderate gaps between front teeth (diastema)',
              'Peg-shaped or disproportionately narrow lateral incisors',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Treatment Procedure</h2>
          <ol className="space-y-3 text-sm sm:text-base text-slate-700">
            <li><strong>1. Consultation &amp; Shade Selection:</strong> Evaluate gum health, enamel quality, bite alignment, and natural tooth shade.</li>
            <li><strong>2. Minimal Preparation &amp; Impressions:</strong> Conservative surface preparation (when indicated) and precision impressions for laboratory ceramic fabrication, or direct layering for composite veneers.</li>
            <li><strong>3. Try-In &amp; Adhesive Bonding:</strong> Checking fit, translucency, and speech before bonding securely with dental adhesive cement and polishing margins.</li>
          </ol>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900">Benefits &amp; Limitations</h2>
            <p className="text-sm text-slate-600">
              Veneers offer natural translucency and conservative front-tooth enhancement. However,
              teeth with large fillings, heavy root-canal wear, or severe bite misalignment may be better
              served by <button type="button" onClick={() => navigateToPath('/zirconia-crowns')} className="text-blue-700 underline font-semibold">zirconia crowns</button> or{' '}
              <button type="button" onClick={() => navigateToPath('/clear-aligners')} className="text-blue-700 underline font-semibold">clear aligners</button>.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" /> Risks &amp; Aftercare
            </h2>
            <p className="text-sm text-slate-600">
              Temporary mild sensitivity to hot or cold foods can occur after enamel preparation.
              Avoid biting pens, ice, or hard shells with veneered front teeth, brush with a non-abrasive
              toothpaste, floss daily, and attend regular clinic checkups.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" /> Related Cosmetic &amp; Restorative Pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-sm">
            {[
              { label: 'Smile Makeover in Ghaziabad', path: '/smile-makeover-ghaziabad' },
              { label: 'Cosmetic Dentistry Overview', path: '/cosmetic-dentistry' },
              { label: 'Professional Teeth Whitening', path: '/teeth-whitening' },
              { label: 'Zirconia Dental Crowns', path: '/zirconia-crowns' },
              { label: 'Clear Aligners', path: '/clear-aligners' },
              { label: 'Chipped Tooth Repair', path: '/chipped-tooth' },
            ].map((link) => (
              <a
                key={link.path}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPath(link.path);
                }}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-blue-50 text-blue-800 font-semibold border border-slate-200 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:bg-slate-50"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 shrink-0 text-blue-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-sm text-slate-600 border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </article>

      <TreatmentAppointmentCTA treatmentName="Dental Veneers Consultation" />
    </div>
  );
}
