import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, Clock, MapPin, Navigation, ArrowLeft } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

interface Props { handleCall: () => void; handleWhatsApp: () => void; handleDirections: () => void; navigateToHome: () => void; navigateToPath: (p: string) => void; }

export default function SwollenGumsPage({ handleCall, handleWhatsApp, handleDirections, navigateToHome, navigateToPath }: Props) {
  useEffect(() => {
    document.title = "Swollen Gums Treatment in Ghaziabad | Oracle Dental Clinic";
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); canonical.setAttribute('href', `${window.location.origin}/swollen-gums`); document.head.appendChild(canonical);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <div className="bg-slate-900 text-white py-3 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <button onClick={navigateToHome} className="hover:text-amber-400 flex items-center gap-1"><ArrowLeft className="w-3.5 h-3.5" /> Home</button>
          <span className="text-amber-400 font-medium">Swollen Gums Treatment</span>
        </div>
      </div>
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Swollen Gums Treatment in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">Swollen or puffy gums around one or multiple teeth require examination to check for food impaction, abscess, or gingivitis. Visit Oracle Dental Clinic in Chipiyana Buzurg.</p>
          <div className="flex gap-3">
            <InteractiveButton id="sg-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3 px-6 rounded-xl">Call 7011961515</InteractiveButton>
            <InteractiveButton id="sg-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl">WhatsApp Booking</InteractiveButton>
          </div>
        </div>
      </section>
    </div>
  );
}
