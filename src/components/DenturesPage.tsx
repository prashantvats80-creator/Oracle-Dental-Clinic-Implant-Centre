import React, { useEffect } from 'react';
import { PhoneCall, MessageCircle, CheckCircle2 } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface Props { 
  handleCall: () => void; 
  handleWhatsApp: () => void; 
  handleDirections: () => void; 
  navigateToHome: () => void; 
  navigateToPath: (p: string) => void; 
}

export default function DenturesPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  useEffect(() => {
    document.title = "Complete & Partial Dentures in Ghaziabad | Oracle Dental Clinic";
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); 
    canonical.setAttribute('href', `${window.location.origin}/dentures`); 
    document.head.appendChild(canonical);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Treatments', path: '/#services' },
          { label: 'Complete & Partial Dentures', path: '/dentures' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Removable Prosthodontics"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Complete & Partial Dentures in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Custom-crafted complete and partial removable dentures designed for comfortable chewing, clear speech, and natural facial contour support at Oracle Dental Clinic in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="den-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-md">
              <PhoneCall className="w-4 h-4 inline mr-2" /> Call 7011961515
            </InteractiveButton>
            <InteractiveButton id="den-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md">
              <MessageCircle className="w-4 h-4 inline mr-2" /> WhatsApp Booking
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Educational Content & Visuals */}
      <section className="py-12 px-4 max-w-5xl mx-auto space-y-12">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Custom Denture Solutions</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Whether replacing a few missing teeth with a partial denture or restoring a full arch with complete dentures, modern prosthetics provide acrylic and flexible options tailored to your jaw anatomy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3 text-sm text-slate-700">
              <span className="font-bold text-slate-900 block">Available Types:</span>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span><strong>Full / Complete Dentures:</strong> Restores full upper or lower arch when all natural teeth are missing.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span><strong>Partial Dentures:</strong> Replaces multiple scattered missing teeth while anchoring onto existing natural teeth.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                  <span><strong>Flexible Dentures:</strong> Lightweight, metal-free thermoplastic partials offering high comfort and aesthetics.</span>
                </div>
              </div>
            </div>

            <TreatmentImage
              src="https://i.postimg.cc/GhqXp6MY/Chat-GPT-Image-Jun-23-2026-07-55-08-PM.png"
              alt="Educational illustration showing complete and partial removable dentures"
              caption="Educational diagram: Precision complete denture fitting over gum ridge tissue."
              aspectRatio="4/3"
            />
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Implant-Supported Overdentures</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            For patients struggling with loose lower dentures, <button onClick={() => navigateToPath('/dental-implants')} className="text-blue-600 underline font-bold">Implant Overdentures</button> snap firmly onto 2–4 locator implant posts, eliminating slipping and sore spots.
          </p>

          <TreatmentImage
            src="https://i.postimg.cc/QMR4356D/Chat-GPT-Image-Jun-23-2026-07-50-45-PM.png"
            alt="Educational illustration showing implant-retained overdenture attachment"
            caption="Educational illustration: Implant-retained overdenture snapping securely onto locator implants."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
}
