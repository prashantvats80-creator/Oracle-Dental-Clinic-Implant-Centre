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

export default function DentalFillingsPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  useEffect(() => {
    document.title = "Tooth Colored Composite Dental Fillings in Ghaziabad | Oracle Dental Clinic";
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); 
    canonical.setAttribute('href', `${window.location.origin}/dental-fillings`); 
    document.head.appendChild(canonical);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Treatments', path: '/#services' },
          { label: 'Composite Dental Fillings', path: '/dental-fillings' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Restorative Care"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Dental Fillings & Composite Bonding in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Invisible, tooth-colored composite resin fillings to repair cavities, minor chips, and tooth decay at Oracle Dental Clinic in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="df-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-md">
              <PhoneCall className="w-4 h-4 inline mr-2" /> Call 7011961515
            </InteractiveButton>
            <InteractiveButton id="df-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md">
              <MessageCircle className="w-4 h-4 inline mr-2" /> WhatsApp Booking
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Educational Content & Visuals */}
      <section className="py-12 px-4 max-w-5xl mx-auto space-y-12">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">How Composite Dental Fillings Work</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Composite fillings use a durable, tooth-colored resin material that bonds directly to natural enamel and dentin. Unlike silver amalgam, composite fillings match the exact shade of your tooth for an invisible, natural finish.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3 text-sm text-slate-700">
              <span className="font-bold text-slate-900 block">Procedure Steps:</span>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span>Removal of localized decayed enamel or old leaking filling material</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span>Cleansing and conditioning the tooth cavity with biocompatible bonding agent</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span>Layered placement of shade-matched composite resin cured with special light</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span>Shaping, bite adjustment, and smooth high-gloss polishing</span>
                </div>
              </div>
            </div>

            <TreatmentImage
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
              alt="Educational diagram showing cavity preparation and composite filling placement"
              caption="Educational diagram: Gentle removal of decayed tissue followed by tooth-colored composite resin placement."
              aspectRatio="4/3"
            />
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Preventing Cavity Recurrence</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Maintaining daily brushing, flossing, and attending semi-annual professional <button onClick={() => navigateToPath('/teeth-cleaning')} className="text-blue-600 underline font-bold">Teeth Cleaning</button> ensures your dental fillings remain tight, leak-free, and long-lasting. For transparent fee details, material differences, and surface pricing factors, explore our <button onClick={() => navigateToPath('/tooth-filling-cost-ghaziabad')} className="text-blue-600 underline font-bold">Tooth Filling Cost in Ghaziabad Guide</button>.
          </p>

          <TreatmentImage
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
            alt="Educational illustration showing composite restoration of a cavity"
            caption="Educational illustration: Seamless composite bonding restoration blending with natural tooth enamel."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
}
