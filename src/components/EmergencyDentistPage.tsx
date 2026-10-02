import React, { useEffect } from 'react';
import { PhoneCall, MessageCircle, AlertTriangle } from 'lucide-react';
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

export default function EmergencyDentistPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  useEffect(() => {
    document.title = "Emergency Dental Care in Ghaziabad | Immediate Pain Relief | Oracle Dental Clinic";
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); 
    canonical.setAttribute('href', `${window.location.origin}/emergency-dentist`); 
    document.head.appendChild(canonical);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Emergency Services', path: '/#services' },
          { label: 'Emergency Dental Care', path: '/emergency-dentist' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="24/7 Urgent Care"
      />

      <section className="bg-gradient-to-br from-slate-950 via-rose-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Urgent Emergency Dentist in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Immediate clinical evaluation and rapid relief for acute toothaches, dental abscesses, facial swelling, broken teeth, or dental trauma at Oracle Dental Clinic in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="ed-call" onClick={handleCall} className="bg-rose-600 hover:bg-rose-500 text-white font-black py-3.5 px-6 rounded-xl shadow-lg">
              <PhoneCall className="w-4 h-4 inline mr-2 animate-bounce" /> Call Emergency Now
            </InteractiveButton>
            <InteractiveButton id="ed-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md">
              <MessageCircle className="w-4 h-4 inline mr-2" /> WhatsApp Priority
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Educational Content & Visuals */}
      <section className="py-12 px-4 max-w-5xl mx-auto space-y-12">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">What Constitutes a Dental Emergency?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3 text-sm text-slate-700">
              <span className="font-bold text-slate-900 block">Common Urgent Conditions:</span>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 mt-1 flex-shrink-0" />
                  <span><strong>Severe Unbearable Toothache:</strong> Throbbing pain that prevents sleep or eating</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 mt-1 flex-shrink-0" />
                  <span><strong>Facial Swelling / Abscess:</strong> Infection spreading to cheek or jawline requiring immediate drainage and antibiotics</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 mt-1 flex-shrink-0" />
                  <span><strong>Knocked-Out Permanent Tooth:</strong> Preserve tooth in milk or saline and visit clinic within 60 minutes</span>
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 mt-1 flex-shrink-0" />
                  <span><strong>Fractured or Broken Tooth:</strong> Jagged sharp edges causing soft tissue bleeding or nerve exposure</span>
                </div>
              </div>
            </div>

            <TreatmentImage
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
              alt="Educational illustration showing emergency dental consultation and infection triage"
              caption="Educational illustration: Immediate clinical triage and radiography for acute dental pain and swelling."
              aspectRatio="4/3"
            />
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Immediate Pain Relief Protocols</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Emergency interventions focus on rapid pain elimination—whether through emergency access <button onClick={() => navigateToPath('/root-canal-treatment')} className="text-blue-600 underline font-bold">Root Canal Treatment</button>, drainage, or protective composite splinting.
          </p>

          <TreatmentImage
            src="https://i.postimg.cc/fL7Y30vY/Chat-GPT-Image-Jun-23-2026-08-31-58-PM.png"
            alt="Educational illustration showing emergency root canal access and pain relief"
            caption="Educational diagram: Emergency endodontic access relieving pressure inside an infected pulp chamber."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
}
