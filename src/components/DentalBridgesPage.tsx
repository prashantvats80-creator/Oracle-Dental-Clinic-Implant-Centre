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

export default function DentalBridgesPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  useEffect(() => {
    document.title = "Fixed Dental Bridges in Ghaziabad | Oracle Dental Clinic";
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); 
    canonical.setAttribute('href', `${window.location.origin}/dental-bridges`); 
    document.head.appendChild(canonical);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Treatments', path: '/#services' },
          { label: 'Fixed Dental Bridges', path: '/dental-bridges' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Fixed Prosthodontics"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Fixed Dental Bridges in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Custom porcelain and Zirconia dental bridges to bridge the gap created by one or more missing teeth at Oracle Dental Clinic in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="dbr-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-md">
              <PhoneCall className="w-4 h-4 inline mr-2" /> Call 7011961515
            </InteractiveButton>
            <InteractiveButton id="dbr-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md">
              <MessageCircle className="w-4 h-4 inline mr-2" /> WhatsApp Booking
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Educational Content & Visuals */}
      <section className="py-12 px-4 max-w-5xl mx-auto space-y-12">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">How a Conventional Dental Bridge Works</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A conventional <strong>dental bridge</strong> consists of two or more crowns (abutments) fitted over natural teeth on either side of the gap, anchoring a artificial replacement tooth (pontic) in between.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3 text-sm text-slate-700">
              <span className="font-bold text-slate-900 block">Benefits of Replacing Missing Teeth:</span>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                  <span>Restores natural chewing power and clear speech articulation</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                  <span>Prevents adjacent natural teeth from drifting or tilting into empty gaps</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-1 flex-shrink-0" />
                  <span>Maintains proper facial support and balanced jaw bite alignment</span>
                </div>
              </div>
            </div>

            <TreatmentImage
              src="https://i.postimg.cc/QMR4356D/Chat-GPT-Image-Jun-23-2026-07-50-45-PM.png"
              alt="Educational illustration showing conventional dental bridge anchored on supporting teeth"
              caption="Educational diagram: Fixed dental bridge anchoring artificial replacement tooth over missing space."
              aspectRatio="4/3"
            />
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Dental Bridge vs. Dental Implant</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            While conventional bridges rely on adjacent natural teeth for support, <button onClick={() => navigateToPath('/dental-implants')} className="text-blue-600 underline font-bold">Dental Implants</button> replace the root independently without needing to alter neighboring healthy enamel. For transparent unit calculations, material choices (Zirconia vs. PFM), and pricing factors, view our dedicated <button onClick={() => navigateToPath('/dental-bridge-cost-ghaziabad')} className="text-blue-600 underline font-bold">Dental Bridge Cost in Ghaziabad Guide</button>.
          </p>

          <TreatmentImage
            src="https://i.postimg.cc/K88srmK7/Chat-GPT-Image-Jun-23-2026-07-48-17-PM.png"
            alt="Educational illustration comparing conventional bridge with implant supported replacement"
            caption="Educational comparison: Conventional tooth-supported bridge vs standalone dental implant replacement."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
}
