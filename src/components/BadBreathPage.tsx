import React, { useEffect } from 'react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';

interface Props { handleCall: () => void; handleWhatsApp: () => void; handleDirections: () => void; navigateToHome: () => void; navigateToPath: (p: string) => void; }

export default function BadBreathPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  useEffect(() => {
    document.title = "Bad Breath (Halitosis) Treatment in Ghaziabad | Oracle Dental Clinic";
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); 
    canonical.setAttribute('href', `${window.location.origin}/bad-breath-treatment`); 
    document.head.appendChild(canonical);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Symptoms', path: '/#symptoms' },
          { label: 'Bad Breath Treatment', path: '/bad-breath-treatment' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Halitosis Care"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Bad Breath (Halitosis) Treatment in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">Clinical oral hygiene evaluation, plaque biofilm removal, and periodontal treatment for chronic bad breath at Oracle Dental Clinic in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS.</p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="bb-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl">Call 7011961515</InteractiveButton>
            <InteractiveButton id="bb-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl">WhatsApp Booking</InteractiveButton>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-5xl mx-auto space-y-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Oral Causes of Chronic Halitosis</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Over 85% of bad breath originates from volatile sulfur compounds (VSCs) produced by anaerobic oral bacteria hiding in calculus, deep gum pockets, or tongue coatings. Professional <button onClick={() => navigateToPath('/teeth-cleaning')} className="text-blue-600 underline font-bold">Dental Scaling</button> eliminates deep plaque reservoirs.
          </p>

          <TreatmentImage
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1000&q=80"
            alt="Educational diagram showing plaque biofilm, calculus accumulation, and halitosis bacterial causes"
            caption="Educational diagram: Plaque biofilm and anaerobic bacterial reservoirs causing oral halitosis."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
}
