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
    q: 'How many implants are typically needed for full-arch replacement?',
    a: 'Depending on jawbone density, sinus anatomy, and bite forces, full-arch fixed restorations commonly use 4 to 6 titanium implants per arch (All-on-4 or All-on-6 protocols), or 2 to 4 implants for snap-on implant-retained overdentures. A clinical exam and 3D CBCT scan determine the safest plan.'
  },
  {
    q: 'Can full mouth dental implants be done if I have worn dentures for years?',
    a: 'Yes, many long-term denture wearers are suitable candidates. Because prolonged tooth loss can reduce jawbone volume, Dr. Prashant Kumar Vats evaluates bone thickness and height first to determine whether angled implant placement or bone grafting is advisable.'
  },
  {
    q: 'How long does the full mouth implant process take?',
    a: 'Initial implant placement is typically performed in a planned surgical appointment under local anesthesia. Osseointegration (healing of bone around the implants) usually takes 3 to 6 months before the final zirconia or hybrid bridge is secured, though temporary teeth are often provided during healing where clinically appropriate.'
  },
  {
    q: 'Are full mouth dental implants painful?',
    a: 'Implant placement is performed under effective local anesthesia so you feel pressure rather than sharp pain during the procedure. Mild swelling and tenderness for 3 to 7 days afterward are normal and managed with prescribed medication and a soft diet.'
  },
  {
    q: 'How do I care for full mouth implants long-term?',
    a: 'Daily brushing, water flossing under the bridge, avoiding tobacco, controlling blood sugar, and visiting Oracle Dental Clinic every 6 months for professional checkups help protect surrounding gums and bone.'
  }
];

export default function FullMouthImplantsPage({
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
          { label: 'Dental Implants', path: '/dental-implants' },
          { label: 'Full Mouth Dental Implants', path: '/full-mouth-dental-implants' },
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Full Arch Implant Rehabilitation"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-10 pb-14 px-4">
        <div className="max-w-5xl mx-auto space-y-5">
          <p className="inline-block text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full">
            Oracle Dental Clinic • Chipiyana Buzurg, Ghaziabad
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            Full Mouth Dental Implants in Chipiyana Buzurg, Ghaziabad
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl">
            Restore stable chewing comfort, natural speech, and facial support with staged full-arch
            implant rehabilitation planned by <strong>{GBP_CONFIG.DOCTOR_TITLE}</strong> at{' '}
            {GBP_CONFIG.SHORT_ADDRESS}.
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
              <MessageCircle className="w-5 h-5" /> Book Implant Evaluation on WhatsApp
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
        {/* Explanation */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">
            What Are Full Mouth Dental Implants?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Full mouth dental implants replace most or all missing teeth in the upper arch, lower arch,
            or both arches using biocompatible titanium implants anchored into the jawbone. Rather than
            placing an individual implant for every missing tooth, a strategic set of implants (often 4
            to 6 per jaw) supports a full-arch fixed bridge or a secure snap-on overdenture.
          </p>
          <p className="text-slate-600 text-sm sm:text-base">
            Unlike conventional removable dentures that rest solely on the gums and may slip while
            speaking or eating, implant-supported restorations transfer chewing forces into the jawbone,
            helping improve bite stability and reduce ongoing bone resorption.
          </p>
        </section>

        {/* Indications & Who May Need It */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Who May Need Full Mouth Implants? (Clinical Indications)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-700">
            {[
              'Patients missing all or most teeth in one or both jaws',
              'Long-term denture wearers experiencing loose fit, sore spots, or difficulty chewing fibrous foods',
              'Individuals with multiple failing, severely decayed, or periodontally hopeless teeth',
              'Patients seeking a fixed alternative to removable full acrylic dentures',
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-slate-50 p-4 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Note: Medical conditions such as uncontrolled diabetes, heavy smoking, active gum infection,
            or severe jawbone loss must be evaluated and stabilized before implant surgery.
          </p>
        </section>

        {/* Step-by-Step Procedure */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900">
            Step-by-Step Full Mouth Implant Procedure
          </h2>
          <ol className="space-y-4 text-sm sm:text-base text-slate-700">
            <li className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
              <strong className="text-slate-900 block mb-1">1. Comprehensive Evaluation &amp; Imaging</strong>
              Oral examination, bite analysis, medical history review, and 3D CBCT bone assessment to
              map nerve pathways, sinus cavities, and available jawbone volume.
            </li>
            <li className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
              <strong className="text-slate-900 block mb-1">2. Preparatory Dental Care</strong>
              Removal of unsalvageable teeth, control of gum inflammation, and bone grafting when clinically required.
            </li>
            <li className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
              <strong className="text-slate-900 block mb-1">3. Implant Placement Under Local Anesthesia</strong>
              Precision placement of 4 to 6 implants per arch following strict autoclave sterilization protocols.
            </li>
            <li className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
              <strong className="text-slate-900 block mb-1">4. Healing (Osseointegration) &amp; Provisional Teeth</strong>
              Allowing 3 to 6 months for stable bone-to-implant integration while using temporary teeth where suitable.
            </li>
            <li className="p-4 rounded-xl bg-blue-50/60 border border-blue-100">
              <strong className="text-slate-900 block mb-1">5. Final Full-Arch Prosthesis</strong>
              Digital impressions, bite verification, and delivery of your custom full-arch zirconia or hybrid bridge.
            </li>
          </ol>
        </section>

        {/* Benefits, Limitations & Risks */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" /> Benefits &amp; Clinical Limitations
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li><strong>Improved Stability:</strong> Fixed bridges do not shift like loose removable dentures.</li>
              <li><strong>Better Chewing Efficiency:</strong> Helps restore comfortable eating of a wider balanced diet.</li>
              <li><strong>Bone Preservation:</strong> Implants stimulate surrounding jawbone compared with toothless ridges.</li>
              <li><strong>Limitations:</strong> Requires sufficient bone or grafting, longer multi-month healing than dentures, higher upfront investment, and lifelong hygiene discipline.</li>
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-600" /> Risks &amp; Possible Complications
            </h2>
            <p className="text-sm text-slate-600">
              As with any oral surgery, dental implants carry potential risks that Dr. Prashant Kumar Vats
              reviews transparently before consent:
            </p>
            <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
              <li>Post-operative swelling, bruising, or temporary tenderness</li>
              <li>Infection around the surgical site or late peri-implantitis if plaque accumulates</li>
              <li>Failure of an implant to integrate with bone (higher risk in smokers or uncontrolled diabetes)</li>
              <li>Prosthetic screw loosening or veneer chipping over years of heavy chewing</li>
            </ul>
          </div>
        </section>

        {/* Recovery & Aftercare */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Recovery &amp; Aftercare Guidelines</h2>
          <p className="text-sm sm:text-base text-slate-600">
            Most patients resume light daily routines within 2 to 3 days after implant placement. Stick to
            cool, soft nutritious foods during initial healing, avoid smoking and alcohol, use prescribed
            antimicrobial rinses gently, and attend every scheduled follow-up visit so tissue healing is
            closely monitored.
          </p>
        </section>

        {/* Local Accessibility & Internal Links */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-5">
          <h2 className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-600" /> Serving Chipiyana Buzurg &amp; Nearby 5 km Areas
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Located at <strong>{GBP_CONFIG.ADDRESS}</strong>, our clinic is easily accessible for multi-visit
            implant follow-ups for patients residing in <strong>Chipiyana Buzurg</strong>,{' '}
            <strong>Jaat Chowk</strong>, <strong>Shahberi</strong>, <strong>Crossings Republik</strong>,{' '}
            <strong>Noida Extension</strong>, nearby <strong>Greater Noida West</strong> societies, and{' '}
            <strong>Lal Kuan</strong>.
          </p>
          <div className="pt-2">
            <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500 mb-3">
              Related Treatments &amp; Cost Guides
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-sm">
              {[
                { label: 'Single & Multi-Tooth Dental Implants', path: '/dental-implants' },
                { label: 'Missing Teeth Replacement Options', path: '/missing-teeth' },
                { label: 'Metal-Free Zirconia Crowns', path: '/zirconia-crowns' },
                { label: 'Dental Implant Cost in Ghaziabad', path: '/dental-implant-cost-ghaziabad' },
                { label: 'Complete & Implant Overdentures', path: '/dentures' },
                { label: 'Immediate Implant After Extraction', path: '/dental-implant-after-tooth-extraction' },
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
          </div>
        </section>

        {/* Patient FAQs */}
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

      <TreatmentAppointmentCTA treatmentName="Full Mouth Dental Implants Consultation" />
    </div>
  );
}
