import React, { useEffect } from 'react';
import { PhoneCall, MessageCircle, ArrowLeft, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { TreatmentImage } from './TreatmentImage';
import { Breadcrumbs } from './Breadcrumbs';
import { preloadImages } from '../utils/imagePreloader';

interface Props { 
  handleCall: () => void; 
  handleWhatsApp: () => void; 
  handleDirections: () => void; 
  navigateToHome: () => void; 
  navigateToPath: (p: string) => void; 
}

export default function ToothExtractionPage({ handleCall, handleWhatsApp, handleDirections, navigateToHome, navigateToPath }: Props) {
  useEffect(() => {
    document.title = "Tooth Extraction in Ghaziabad | Gentle Dental Removal | Oracle Dental Clinic";
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); 
    canonical.setAttribute('href', `${window.location.origin}/tooth-extraction`); 
    document.head.appendChild(canonical);

    // Preload critical treatment images for immediate rendering
    preloadImages([
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
    ]);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Dental Treatments', path: '/#services' },
          { label: 'Tooth Extraction', path: '/tooth-extraction' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Tooth Extraction Care"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Painless Tooth Extraction in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Gentle removal of non-restorable, severely fractured, or deeply infected teeth under local anesthesia at Oracle Dental Clinic in Chipiyana Buzurg under Dr. Prashant Kumar Vats, BDS.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="te-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-md">
              <PhoneCall className="w-4 h-4 inline mr-2" /> Call 7011961515
            </InteractiveButton>
            <InteractiveButton id="te-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md">
              <MessageCircle className="w-4 h-4 inline mr-2" /> WhatsApp Booking
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Main Educational Sections & Images */}
      <section className="py-12 px-4 max-w-5xl mx-auto space-y-12">
        {/* Indications Section */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Clinical Indications for Tooth Extraction</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Preserving natural teeth is always our first clinical priority. However, tooth extraction becomes necessary when a tooth is damaged beyond functional repair or poses a risk to surrounding oral health.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              {[
                "Severe decay extending deep into root structure",
                "Advanced periodontal disease with severe bone loss",
                "Non-restorable tooth fracture or vertical root split",
                "Orthodontic overcrowding requiring extra space",
                "Impacted or symptomatic wisdom teeth"
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm font-medium text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <TreatmentImage
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80"
              alt="Educational diagram showing clinical indications for tooth extraction"
              caption="Educational diagram: Clinical evaluation determining necessity of tooth extraction vs tooth preservation."
              aspectRatio="4/3"
              priority={true}
            />
          </div>
        </div>

        {/* Simple vs Surgical Extraction */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Simple vs. Surgical Extraction Techniques</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-extrabold text-slate-900 text-base">1. Simple Tooth Extraction</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Performed on visible teeth above the gumline. The tooth is loosened with elevators and gently extracted using forceps under local anesthesia.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-extrabold text-slate-900 text-base">2. Surgical Tooth Extraction</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Required for teeth broken at the gumline or impacted beneath bone. Involves a minor gum incision to safely section and remove the root.
              </p>
            </div>
          </div>

          <TreatmentImage
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
            alt="Educational diagram comparing simple tooth extraction and surgical extraction techniques"
            caption="Educational comparison: Simple dental forceps extraction vs minor surgical root extraction under local anesthesia."
            aspectRatio="16/9"
          />
        </div>

        {/* Post-Extraction Care & Replacement Options */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Post-Extraction Socket Healing & Replacement</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Following tooth removal, protecting the initial blood clot in the socket is vital for smooth bone and soft tissue recovery. Following healing, replacing missing teeth with <button onClick={() => navigateToPath('/dental-implants')} className="text-blue-600 underline font-bold">Dental Implants</button> or <button onClick={() => navigateToPath('/dental-bridges')} className="text-blue-600 underline font-bold">Dental Bridges</button> prevents adjacent teeth from shifting.
          </p>

          <TreatmentImage
            src="https://i.postimg.cc/2S3dHyCP/Chat-GPT-Image-Jun-23-2026-08-09-59-PM.png"
            alt="Illustration showing socket blood clot protection and tissue recovery following tooth extraction"
            caption="Educational illustration: Protective blood clot formation in the extraction socket and post-removal aftercare."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
}
