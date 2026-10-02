import React, { useEffect } from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface Props { handleCall: () => void; handleWhatsApp: () => void; handleDirections: () => void; navigateToHome: () => void; navigateToPath: (p: string) => void; }

export default function BrokenToothPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  useEffect(() => {
    document.title = "Broken Tooth Treatment in Ghaziabad | Oracle Dental Clinic";
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); 
    canonical.setAttribute('href', `${window.location.origin}/broken-tooth-treatment`); 
    document.head.appendChild(canonical);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Symptoms', path: '/#symptoms' },
          { label: 'Broken Tooth Repair', path: '/broken-tooth-treatment' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Urgent Restorative Care"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Broken & Fractured Tooth Repair in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">Restorative treatments for fractured, cracked, or broken teeth using dental bonding, crowns, or root canal therapy at Oracle Dental Clinic in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS.</p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="bt-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl">Call 7011961515</InteractiveButton>
            <InteractiveButton id="bt-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl">WhatsApp Booking</InteractiveButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto space-y-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Restoration Options for Broken Teeth</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Depending on fracture depth, broken teeth can be saved with composite bonding, protective <button onClick={() => navigateToPath('/tooth-cap')} className="text-blue-600 underline font-bold">Tooth Caps</button>, or <button onClick={() => navigateToPath('/root-canal-treatment')} className="text-blue-600 underline font-bold">Root Canal Treatment</button> if nerve pulp is exposed.
          </p>

          <TreatmentImage
            src="https://i.postimg.cc/VkyshHw1/Chat-GPT-Image-Jun-23-2026-08-42-13-PM.png"
            alt="Educational diagram showing tooth fracture classification and crown restoration options"
            caption="Educational diagram: Cracked enamel restoration using protective dental crown or bonding."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
}
