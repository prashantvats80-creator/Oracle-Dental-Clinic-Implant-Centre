import React, { useState } from 'react';
import { PhoneCall, MessageCircle, CheckCircle2, AlertTriangle, ChevronDown, ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
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
    q: 'Why is a zirconia crown often recommended after root canal treatment?',
    a: 'Teeth that undergo root canal treatment lose internal moisture and often have extensive prior decay, making them more prone to vertical fracture under chewing pressure. A custom zirconia crown encases and reinforces the remaining tooth structure.'
  },
  {
    q: 'What is the difference between zirconia crowns and PFM (metal-ceramic) crowns?',
    a: 'Zirconia crowns are completely metal-free, avoiding the dark grey line that can appear near the gumline with PFM crowns. Monolithic zirconia also offers high fracture strength for back molars while multilayer translucent zirconia works well for front teeth.'
  },
  {
    q: 'How many clinic visits are needed for a zirconia crown?',
    a: 'Typically two visits: the first for tooth preparation, digital or precision impression, shade matching, and placing a temporary crown; and the second (usually 3–5 days later) for fitting, bite checking, and final cementation.'
  },
  {
    q: 'Can a zirconia crown still get a cavity underneath?',
    a: 'The zirconia ceramic itself cannot decay, but the natural tooth margin at the gumline still can if plaque collects. Twice-daily brushing, flossing around the crown margin, and 6-month checkups keep the underlying tooth healthy.'
  }
];

export default function ZirconiaCrownsPage({
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
          { label: 'Tooth Cap & Crowns', path: '/tooth-cap' },
          { label: 'Zirconia Crowns', path: '/zirconia-crowns' },
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Metal-Free CAD/CAM Crowns"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-10 pb-14 px-4">
        <div className="max-w-5xl mx-auto space-y-5">
          <p className="inline-block text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full">
            Oracle Dental Clinic • Chipiyana Buzurg, Ghaziabad
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Zirconia Crowns in Chipiyana Buzurg, Ghaziabad
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
            Strong, biocompatible, metal-free zirconia tooth caps precision-milled to protect root
            canal-treated teeth, cracked molars, and dental implants at{' '}
            <strong>{GBP_CONFIG.BUSINESS_NAME}</strong>.
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
              <MessageCircle className="w-5 h-5" /> Book Crown Consultation on WhatsApp
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
          <h2 className="text-2xl font-extrabold text-slate-900">What Is a Zirconia Dental Crown?</h2>
          <p className="text-slate-600 text-sm sm:text-base">
            A zirconia crown is a full-coverage dental restoration fabricated from zirconium dioxide—a
            high-strength, tooth-colored ceramic engineered using CAD/CAM technology. Because it contains
            no dark metal substructure, it combines high biting strength with gum-friendly aesthetics.
          </p>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">When Is a Zirconia Crown Recommended?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
            {[
              'Protecting molars and premolars after Root Canal Treatment (RCT)',
              'Restoring cracked, severely worn, or fractured teeth',
              'Final custom tooth crown secured over a titanium dental implant',
              'Replacing older metal-fused (PFM) caps showing dark gumline shadows',
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 p-4 rounded-xl bg-slate-50 border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Crown Placement Procedure</h2>
          <ol className="space-y-3 text-sm sm:text-base text-slate-700">
            <li><strong>1. Tooth Assessment &amp; X-Ray:</strong> Confirm root health and adequate tooth core structure.</li>
            <li><strong>2. Tooth Shaping &amp; Shade Match:</strong> Conservative shaping under local anesthesia (if vital), precision impression, shade matching, and placement of a protective temporary cap.</li>
            <li><strong>3. CAD/CAM Milling &amp; Cementation:</strong> Checking margin seal, bite balance, and natural appearance before bonding the finished zirconia crown.</li>
          </ol>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" /> Benefits &amp; Limitations
            </h2>
            <p className="text-sm text-slate-600">
              High resistance to chipping, metal-free biocompatibility, and natural colour matching.
              Limitations include higher upfront cost than basic PFM crowns, and if poorly adjusted,
              very hard zirconia can wear opposing teeth—making accurate bite polishing essential.
            </p>
          </div>
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-3">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" /> Risks &amp; Aftercare
            </h2>
            <p className="text-sm text-slate-600">
              Mild bite sensitivity may occur for a few days after cementation; contact the clinic for
              a quick adjustment if the bite feels high. Avoid chewing ice or opening packages with
              crowned teeth, and brush/floss daily along the gum margin.
            </p>
          </div>
        </section>

        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" /> Related Treatments &amp; Cost Guide
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-sm">
            {[
              { label: 'Root Canal Treatment (RCT)', path: '/root-canal-treatment' },
              { label: 'Tooth Cap / Crown Cost in Ghaziabad', path: '/tooth-cap-cost-ghaziabad' },
              { label: 'Dental Implants', path: '/dental-implants' },
              { label: 'Fixed Dental Bridges', path: '/dental-bridges' },
              { label: 'Tooth Cap Overview', path: '/tooth-cap' },
              { label: 'Smile Makeover Ghaziabad', path: '/smile-makeover-ghaziabad' },
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

      <TreatmentAppointmentCTA treatmentName="Zirconia Crown Consultation" />
    </div>
  );
}
