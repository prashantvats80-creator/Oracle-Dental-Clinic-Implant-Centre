import React, { useEffect } from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface Props { handleCall: () => void; handleWhatsApp: () => void; handleDirections: () => void; navigateToHome: () => void; navigateToPath: (p: string) => void; }

export default function BlackToothPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  useEffect(() => {
    document.title = "Dark / Black Tooth Treatment in Ghaziabad | Oracle Dental Clinic";
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); 
    canonical.setAttribute('href', `${window.location.origin}/black-tooth`); 
    document.head.appendChild(canonical);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Symptoms', path: '/#symptoms' },
          { label: 'Dark / Black Tooth Care', path: '/black-tooth' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Aesthetic & Restorative"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Dark or Black Tooth Treatment in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">Clinical diagnosis and aesthetic restoration for darkened, discolored, or non-vital teeth at Oracle Dental Clinic in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS.</p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="blt-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl">Call 7011961515</InteractiveButton>
            <InteractiveButton id="blt-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl">WhatsApp Booking</InteractiveButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto space-y-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Causes & Treatment for Tooth Discoloration</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Dark tooth discoloration can stem from deep decay, past dental trauma, or internal pulp necrosis. Treatment ranges from <button onClick={() => navigateToPath('/dental-fillings')} className="text-blue-600 underline font-bold">Composite Fillings</button> to <button onClick={() => navigateToPath('/root-canal-treatment')} className="text-blue-600 underline font-bold">Root Canal Treatment</button> and aesthetic <button onClick={() => navigateToPath('/tooth-cap')} className="text-blue-600 underline font-bold">Tooth Caps</button>.
          </p>

          <TreatmentImage
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80"
            alt="Educational diagram illustrating dark tooth discoloration, dental decay and pulp vitality evaluation"
            caption="Educational diagram: Internal pulp necrosis vs deep tooth decay causing dark discoloration."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
}
