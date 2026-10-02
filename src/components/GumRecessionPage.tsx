import React, { useEffect } from 'react';
import { PhoneCall, MessageCircle } from 'lucide-react';
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

export default function GumRecessionPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  useEffect(() => {
    document.title = "Gum Recession Care in Ghaziabad | Oracle Dental Clinic";
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); 
    canonical.setAttribute('href', `${window.location.origin}/gum-recession`); 
    document.head.appendChild(canonical);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Treatments', path: '/#services' },
          { label: 'Gum Recession Treatment', path: '/gum-recession' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Periodontal Therapy"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Gum Recession Care in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Receding gums expose sensitive tooth roots to temperature triggers and root decay. Visit Oracle Dental Clinic in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS for root desensitization and periodontal care.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="gr-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-md">
              <PhoneCall className="w-4 h-4 inline mr-2" /> Call 7011961515
            </InteractiveButton>
            <InteractiveButton id="gr-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md">
              <MessageCircle className="w-4 h-4 inline mr-2" /> WhatsApp Booking
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Educational Content & Visual */}
      <section className="py-12 px-4 max-w-5xl mx-auto space-y-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Understanding Receding Gums</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Gum recession occurs when the margin of gum tissue surrounding teeth wears away or pulls back, exposing more of the tooth or tooth root. Exposed roots lack protective enamel and are susceptible to <button onClick={() => navigateToPath('/tooth-sensitivity')} className="text-blue-600 underline font-bold">Tooth Sensitivity</button> and root caries.
          </p>

          <TreatmentImage
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
            alt="Educational illustration showing receding gumline and exposed tooth root dentin"
            caption="Educational diagram: Gumline recession exposing sensitive root dentin to hot/cold triggers."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
}
