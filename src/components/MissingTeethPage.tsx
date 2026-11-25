import React, { useState } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Clock, 
  MapPin, 
  CheckCircle2, 
  Navigation, 
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Layers,
  Award
} from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { RelatedGuidesSection } from './RelatedGuidesSection';

interface MissingTeethPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath: (path: string) => void;
}

export default function MissingTeethPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: MissingTeethPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Services', path: '/dental-services' },
          { label: 'Missing Teeth Replacement', path: '/missing-teeth' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Permanent Tooth Replacement"
      />

      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full">
              <Layers className="w-4 h-4 text-blue-400" /> Tooth Replacement Options
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Missing Teeth Replacement in Ghaziabad
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Replacing missing teeth restores chewing ability, preserves facial structure, and prevents adjacent teeth from drifting into empty spaces. Visit <strong className="text-amber-300">Oracle Dental Clinic</strong> in Chipiyana Buzurg for personalized consultation.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-300">
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <span className="text-slate-400 block">Consultation Fee</span>
                <span className="text-amber-300 font-bold text-sm">₹200 Only</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10">
                <span className="text-slate-400 block">Lead Dentist</span>
                <span className="text-white font-bold text-sm">Dr. Prashant Vats, BDS</span>
              </div>
              <div className="bg-white/10 p-2.5 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
                <span className="text-slate-400 block">Location</span>
                <span className="text-white font-bold text-sm">Jaat Chowk, Chipiyana</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <InteractiveButton id="mt-call" onClick={handleCall} className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm">
                <PhoneCall className="w-5 h-5" /> Call +91 7011961515
              </InteractiveButton>
              <InteractiveButton id="mt-wa" onClick={handleWhatsApp} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 text-sm">
                <MessageCircle className="w-5 h-5" /> WhatsApp Booking
              </InteractiveButton>
              <InteractiveButton id="mt-dir" onClick={handleDirections} className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold py-3.5 px-5 rounded-xl flex items-center justify-center gap-2 text-sm">
                <Navigation className="w-4 h-4 text-amber-400" /> Get Directions
              </InteractiveButton>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 p-6 rounded-3xl space-y-4">
            <h2 className="text-white font-bold text-lg">Main Replacement Options</h2>
            <TreatmentImage
              src="/assets/images/case-03.webp"
              alt="Educational illustration comparing missing teeth replacement options including implants bridges and dentures"
              caption="Educational diagram: Missing tooth replacement options comparing implants, fixed bridges, and dentures."
              aspectRatio="4/3"
            />
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" /> <span><strong>Dental Implants:</strong> Titanium post anchored in jawbone to support single crown or bridge (<a href="/dental-implants" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-implants'); }} className="text-blue-400 underline">Dental Implants</a>).</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" /> <span><strong>Fixed Dental Bridge:</strong> Anchored to adjacent natural teeth to span the missing gap (<a href="/dental-bridges" onClick={(e) => { e.preventDefault(); navigateToPath('/dental-bridges'); }} className="text-blue-400 underline">Dental Bridges</a>).</span></li>
              <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" /> <span><strong>Removable Dentures:</strong> Partial or full dentures for multiple or all missing teeth (<a href="/dentures" onClick={(e) => { e.preventDefault(); navigateToPath('/dentures'); }} className="text-blue-400 underline">Dentures</a>).</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqsList.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-2xl bg-white overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="w-full p-4 text-left font-bold text-slate-900 flex justify-between items-center text-sm sm:text-base">
                  <span>Q{index + 1}: {faq.q}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-blue-600" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>
                                  {openFaq === index && (
                    <div className="border-t border-slate-200 p-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 pb-12">
        <RelatedGuidesSection
          title="Compare Tooth Replacement Treatments & Cost Guides"
          navigateToPath={navigateToPath}
          links={[
            { path: '/dental-implants', label: 'Dental Implants in Ghaziabad', description: 'Standalone titanium tooth replacement without grinding adjacent teeth.', tag: 'Treatment' },
            { path: '/dental-implant-cost-ghaziabad', label: 'Dental Implant Cost in Ghaziabad', description: 'Pricing factors for single implants, abutments, and crowns.', tag: 'Cost Guide' },
            { path: '/full-mouth-dental-implants', label: 'Full Mouth Dental Implants', description: 'Fixed All-on-4 and All-on-6 arch rehabilitation options.', tag: 'Treatment' },
            { path: '/dental-bridge-cost-ghaziabad', label: 'Dental Bridge Cost in Ghaziabad', description: 'Compare PFM vs. Zirconia fixed dental bridge pricing factors.', tag: 'Cost Guide' },
            { path: '/dentures-cost-ghaziabad', label: 'Dentures Cost in Ghaziabad', description: 'Cost guide for acrylic, flexible, BPS, and implant-supported dentures.', tag: 'Cost Guide' },
            { path: '/zirconia-crowns', label: 'Zirconia Crowns', description: 'Metal-free ceramic restorations for implants and natural teeth.', tag: 'Treatment' },
          ]}
        />
      </div>

      <section className="bg-slate-950 text-white py-10 px-4 border-t border-slate-800 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-xl font-bold">Schedule Your Tooth Replacement Consultation</h2>
          <p className="text-xs text-slate-400">Jaat Chowk, Chipiyana Buzurg, Ghaziabad. Consultation fee ₹200.</p>
          <div className="flex justify-center gap-3">
            <InteractiveButton id="mt-f-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3 px-6 rounded-xl text-sm">Call +91 7011961515</InteractiveButton>
            <InteractiveButton id="mt-f-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl text-sm">WhatsApp Booking</InteractiveButton>
          </div>
        </div>
      </section>
    </div>
  );
}

const faqsList = [
  { q: "What happens if I don't replace a missing tooth?", a: "Adjacent teeth can tilt or drift into the gap, changing your bite and causing bone loss over time." },
  { q: "Which is better: Dental Implant or Bridge?", a: "Dental implants preserve adjacent natural teeth because they don't require shaving neighboring enamel, whereas bridges rely on adjacent support teeth." },
  { q: "Where is Oracle Dental Clinic located?", a: "Shop No. 47, KTS Complex, near Dolphin Public School, Jaat Chowk, Chipiyana Buzurg, Ghaziabad." },
  { q: "How much is the consultation fee?", a: "The initial clinical consultation fee is ₹200." }
];
