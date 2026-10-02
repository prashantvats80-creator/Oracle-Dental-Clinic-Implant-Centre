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

export default function ToothCapPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  useEffect(() => {
    document.title = "Tooth Cap & Dental Crown in Ghaziabad | Zirconia Crowns | Oracle Dental Clinic";
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); 
    canonical.setAttribute('href', `${window.location.origin}/tooth-cap`); 
    document.head.appendChild(canonical);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Treatments', path: '/#services' },
          { label: 'Tooth Cap & Dental Crown', path: '/tooth-cap' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Crowns & Caps"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Tooth Cap & Dental Crown in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            High-strength Zirconia and ceramic dental crowns (patient-friendly term: "tooth caps") to protect fractured, heavily filled, or root canal-treated teeth at Oracle Dental Clinic in Chipiyana Buzurg.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="tc-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-md">
              <PhoneCall className="w-4 h-4 inline mr-2" /> Call 7011961515
            </InteractiveButton>
            <InteractiveButton id="tc-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md">
              <MessageCircle className="w-4 h-4 inline mr-2" /> WhatsApp Booking
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Educational Content & Visuals */}
      <section className="py-12 px-4 max-w-5xl mx-auto space-y-12">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">What Is a Tooth Cap / Dental Crown?</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            A <strong>dental crown</strong> (commonly called a <em>tooth cap</em>) is a custom-fitted restoration that covers the entire visible portion of a compromised tooth above the gumline. It restores the natural shape, size, strength, and aesthetic appearance of a damaged tooth.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3 text-sm text-slate-700">
              <span className="font-bold text-slate-900 block">Indications for a Tooth Cap:</span>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                  <span>Protecting brittle teeth following <button onClick={() => navigateToPath('/root-canal-treatment')} className="text-blue-600 underline font-bold">Root Canal Treatment</button></span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                  <span>Restoring severely worn, cracked, or deeply broken teeth</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                  <span>Covering large cavities where insufficient tooth structure remains for fillings</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                  <span>Serving as the final prosthetic crown attached over a <button onClick={() => navigateToPath('/dental-implants')} className="text-blue-600 underline font-bold">Dental Implant</button></span>
                </div>
              </div>
            </div>

            <TreatmentImage
              src="https://i.postimg.cc/gcT2V2Bw/Chat-GPT-Image-Jun-23-2026-08-38-15-PM.png"
              alt="Illustration of a dental crown covering a weakened tooth"
              caption="Educational illustration: Dental crown (tooth cap) fitting precisely over a prepared natural tooth."
              aspectRatio="4/3"
            />
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Types of Tooth Caps Available</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            We offer premium metal-free Zirconia crowns, E-max all-ceramic crowns, and Porcelain-Fused-to-Metal (PFM) crowns customized to match your adjacent natural teeth.
          </p>

          <TreatmentImage
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
            alt="Educational illustration showing dental crown placement over a prepared tooth"
            caption="Educational illustration: Step-by-step tooth preparation, digital shade matching, and final crown placement."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
}
