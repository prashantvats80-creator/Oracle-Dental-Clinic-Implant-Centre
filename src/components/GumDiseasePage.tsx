import React, { useState, useEffect } from 'react';
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

export default function GumDiseasePage({ handleCall, handleWhatsApp, handleDirections, navigateToHome, navigateToPath }: Props) {
  useEffect(() => {
    const title = "Gum Disease & Periodontitis Treatment in Ghaziabad | Oracle Dental Clinic";
    const description = "Seeking treatment for gingivitis or periodontitis? Visit Oracle Dental Clinic in Chipiyana Buzurg, Ghaziabad for scaling, deep cleaning, and periodontal gum care.";
    const pageUrl = `${window.location.origin}/gum-disease-treatment`;
    document.title = title;
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); 
    canonical.setAttribute('href', pageUrl); 
    document.head.appendChild(canonical);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Treatments', path: '/#services' },
          { label: 'Gum Disease & Periodontal Care', path: '/gum-disease-treatment' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Periodontics"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Gum Disease & Periodontitis Treatment in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            From early gingivitis to advanced periodontitis, Oracle Dental Clinic provides comprehensive clinical gum evaluation, ultrasonic scaling, and deep root planing in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="gd-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-md">
              <PhoneCall className="w-4 h-4 inline mr-2" /> Call 7011961515
            </InteractiveButton>
            <InteractiveButton id="gd-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md">
              <MessageCircle className="w-4 h-4 inline mr-2" /> WhatsApp Booking
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Educational Content & Visuals */}
      <section className="py-12 px-4 max-w-5xl mx-auto space-y-12">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Understanding Gum Disease Progression</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Gingivitis causes red, swollen, bleeding gums due to bacterial plaque buildup. If left uncleaned over time, plaque hardens into calculus, creating deep pockets and leading to periodontitis (supporting bone loss).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3 text-sm text-slate-700">
              <span className="font-bold text-slate-900 block">Periodontal Care Interventions:</span>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span><strong>Professional Ultrasonic Scaling:</strong> Cleans plaque and hard calculus above and below gumline (<button onClick={() => navigateToPath('/teeth-cleaning')} className="text-blue-600 underline font-bold">Teeth Cleaning</button>)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span><strong>Subgingival Root Planing:</strong> Smooths rough root surfaces to encourage gum tissue reattachment</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span><strong>Antimicrobial Gum Irrigation:</strong> Flushes periodontal pockets with specialized therapeutic rinses</span>
                </div>
              </div>
            </div>

            <TreatmentImage
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
              alt="Educational diagram showing progression from gingivitis to periodontitis pocket and bone loss"
              caption="Educational diagram: Gingivitis inflammation progressing to deep periodontal pocketing."
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
