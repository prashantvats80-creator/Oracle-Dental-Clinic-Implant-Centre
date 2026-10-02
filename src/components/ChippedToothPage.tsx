import React, { useEffect } from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface Props { handleCall: () => void; handleWhatsApp: () => void; handleDirections: () => void; navigateToHome: () => void; navigateToPath: (p: string) => void; }

export default function ChippedToothPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  useEffect(() => {
    document.title = "Chipped Tooth Repair in Ghaziabad | Oracle Dental Clinic";
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); 
    canonical.setAttribute('href', `${window.location.origin}/chipped-tooth`); 
    document.head.appendChild(canonical);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Symptoms', path: '/#symptoms' },
          { label: 'Chipped Tooth Repair', path: '/chipped-tooth' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Cosmetic Bonding"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Chipped Tooth Repair in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">Aesthetic composite bonding and dental porcelain veneers to restore chipped front teeth edges seamlessly at Oracle Dental Clinic in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS.</p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="ct-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl">Call 7011961515</InteractiveButton>
            <InteractiveButton id="ct-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl">WhatsApp Booking</InteractiveButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto space-y-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Composite Bonding for Chipped Teeth</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Chipped front enamel edges can be rebuilt in a single visit using shade-matched <button onClick={() => navigateToPath('/dental-fillings')} className="text-blue-600 underline font-bold">Composite Resin Bonding</button> to restore smooth aesthetics.
          </p>

          <TreatmentImage
            src="https://i.postimg.cc/2S3dHyCP/Chat-GPT-Image-Jun-23-2026-08-09-59-PM.png"
            alt="Educational illustration showing chipped tooth enamel and composite bonding restoration"
            caption="Educational illustration: Seamless front tooth composite bonding restoration."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
}
