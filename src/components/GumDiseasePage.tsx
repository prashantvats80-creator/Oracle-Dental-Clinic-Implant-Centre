import React, { useState, useEffect } from 'react';
import { PhoneCall, MessageCircle, Clock, MapPin, CheckCircle2, Navigation, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveButton } from './InteractiveButton';

interface Props { handleCall: () => void; handleWhatsApp: () => void; handleDirections: () => void; navigateToHome: () => void; navigateToPath: (p: string) => void; }

export default function GumDiseasePage({ handleCall, handleWhatsApp, handleDirections, navigateToHome, navigateToPath }: Props) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const title = "Gum Disease Treatment in Ghaziabad | Oracle Dental Clinic";
    const description = "Seeking treatment for gingivitis or periodontitis? Visit Oracle Dental Clinic in Chipiyana Buzurg, Ghaziabad for scaling, deep cleaning, and gum care.";
    const pageUrl = `${window.location.origin}/gum-disease-treatment`;
    document.title = title;
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); canonical.setAttribute('href', pageUrl); document.head.appendChild(canonical);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <div className="bg-slate-900 text-white py-3 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <button onClick={navigateToHome} className="hover:text-amber-400 flex items-center gap-1"><ArrowLeft className="w-3.5 h-3.5" /> Home</button>
          <span className="text-amber-400 font-medium">Gum Disease Treatment</span>
        </div>
      </div>
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Gum Disease Treatment in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">From early gingivitis to periodontitis, Oracle Dental Clinic provides clinical gum evaluation, scaling, and deep cleaning in Chipiyana Buzurg, Ghaziabad.</p>
          <div className="flex gap-3">
            <InteractiveButton id="gd-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3 px-6 rounded-xl">Call 7011961515</InteractiveButton>
            <InteractiveButton id="gd-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl">WhatsApp Booking</InteractiveButton>
          </div>
        </div>
      </section>
      <section className="py-14 px-4 bg-white border-b border-slate-200 max-w-5xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold">Comprehensive Periodontal Care</h2>
        <p className="text-slate-600 text-sm">Gingivitis causes red, swollen, bleeding gums. If untreated, it progresses to periodontitis, affecting underlying bone. Learn more on our <button onClick={() => navigateToPath('/teeth-cleaning')} className="text-blue-600 underline">Teeth Cleaning</button> page.</p>
      </section>
    </div>
  );
}
