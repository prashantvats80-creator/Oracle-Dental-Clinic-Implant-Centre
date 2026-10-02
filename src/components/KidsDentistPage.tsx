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

export default function KidsDentistPage({ handleCall, handleWhatsApp, navigateToHome, navigateToPath }: Props) {
  useEffect(() => {
    document.title = "Gentle Kids Dentist in Ghaziabad | Pediatric Dental Care | Oracle Dental Clinic";
    let canonical = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonical.setAttribute('rel', 'canonical'); 
    canonical.setAttribute('href', `${window.location.origin}/kids-dentist`); 
    document.head.appendChild(canonical);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed">
      <Breadcrumbs
        items={[
          { label: 'Specialized Services', path: '/#services' },
          { label: 'Kids & Pediatric Dentistry', path: '/kids-dentist' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Pediatric Dental Care"
      />

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white pt-12 pb-16 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-4xl font-black">Gentle Kids Dentistry in Ghaziabad</h1>
          <p className="text-slate-300 max-w-2xl">
            Compassionate pediatric dental care, early oral health checkups, fluoride application, pit and fissure sealants, and painless cavity fillings for children at Oracle Dental Clinic in Chipiyana Buzurg.
          </p>
          <div className="flex flex-wrap gap-3">
            <InteractiveButton id="kd-call" onClick={handleCall} className="bg-amber-500 text-slate-950 font-black py-3.5 px-6 rounded-xl shadow-md">
              <PhoneCall className="w-4 h-4 inline mr-2" /> Call 7011961515
            </InteractiveButton>
            <InteractiveButton id="kd-wa" onClick={handleWhatsApp} className="bg-emerald-600 text-white font-bold py-3.5 px-6 rounded-xl shadow-md">
              <MessageCircle className="w-4 h-4 inline mr-2" /> WhatsApp Booking
            </InteractiveButton>
          </div>
        </div>
      </section>

      {/* Educational Content & Visuals */}
      <section className="py-12 px-4 max-w-5xl mx-auto space-y-12">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Pediatric Dental Services</h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Healthy milk teeth (primary teeth) serve as natural placeholders for permanent adult teeth, aiding proper jaw growth, nutrition, and speech development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3 text-sm text-slate-700">
              <span className="font-bold text-slate-900 block">Preventive & Restorative Care for Children:</span>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span><strong>Pit & Fissure Sealants:</strong> Protective coatings filling deep molar grooves to prevent food decay</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span><strong>Topical Fluoride Varnish:</strong> Strengthens developing enamel against acid attacks</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-1 flex-shrink-0" />
                  <span><strong>Tooth-Colored <button onClick={() => navigateToPath('/dental-fillings')} className="text-blue-600 underline font-bold">Fillings</button>:</strong> Gentle treatment for milk tooth cavities</span>
                </div>
              </div>
            </div>

            <TreatmentImage
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
              alt="Friendly child dental examination and preventive oral care"
              caption="Educational illustration: Friendly, stress-free pediatric dental examination and milk tooth evaluation."
              aspectRatio="4/3"
            />
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
          <h2 className="text-2xl font-extrabold text-slate-900">Building Positive Dental Habits</h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            Early dental visits create a positive, fear-free relationship with dental care that lasts a lifetime.
          </p>

          <TreatmentImage
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1000&q=80"
            alt="Educational illustration showing children brushing techniques and cavity prevention"
            caption="Educational diagram: Proper children's brushing techniques and preventive sealant protection."
            aspectRatio="16/9"
          />
        </div>
      </section>
    </div>
  );
}
