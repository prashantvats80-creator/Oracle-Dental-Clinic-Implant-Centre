import React from 'react';
import { HeartPulse, Stethoscope, Activity, ShieldCheck, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { GBP_CONFIG } from '../config/googleBusinessProfile';

interface WhyUsProps {
  handleWhatsApp?: () => void;
}

const WhyUs: React.FC<WhyUsProps> = () => {
  const features = [
    {
      title: 'Comfort-Focused Care',
      desc: 'Effective local anesthesia and gentle clinical techniques designed to minimize discomfort.',
      icon: HeartPulse,
    },
    {
      title: 'Dr. Prashant Kumar Vats, BDS',
      desc: 'Direct, transparent diagnosis and individualized treatment planning for every patient.',
      icon: Stethoscope,
    },
    {
      title: 'Strict Autoclave Sterilization',
      desc: 'Instrument autoclaving, single-use disposables, and surface disinfection between patients.',
      icon: ShieldCheck,
    },
    {
      title: 'Open 24 Hours, 7 Days',
      desc: 'Available day and night for scheduled dental visits and urgent toothache emergencies.',
      icon: Clock,
    },
    {
      title: 'Transparent Cost Guidance',
      desc: 'Clear treatment options and cost estimates discussed upfront before starting procedures.',
      icon: CheckCircle2,
    },
    {
      title: 'Modern Diagnostic Tools',
      desc: 'Digital radiography, rotary endodontics, and precision prosthetics for reliable care.',
      icon: Activity,
    },
    {
      title: 'Convenient Jaat Chowk Location',
      desc: 'Shop No. 47, KTS Complex, Near Dolphin Public School, Chipiyana Buzurg, Ghaziabad.',
      icon: MapPin,
    },
    {
      title: 'Comprehensive Under One Roof',
      desc: 'Implants, RCT, wisdom tooth surgery, crowns, braces, aligners, and kids dentistry.',
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="why-us" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Why Patients in Chipiyana Buzurg Choose Oracle Dental Clinic
          </h2>
          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            Led by <strong>{GBP_CONFIG.DOCTOR_TITLE}</strong>, {GBP_CONFIG.BUSINESS_NAME} combines
            clinical sterilization standards, clear patient communication, and 24-hour accessibility
            right at Jaat Chowk, Chipiyana Buzurg, Ghaziabad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, idx) => (
            <div
              key={idx}
              id={`why-us-card-${idx}`}
              className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80 hover:shadow-md hover:border-blue-200 transition-all duration-200"
            >
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-slate-900 mb-1.5">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Sterilization & 5 km Nearby Neighbourhoods Served */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-3">
            <h3 className="text-xl font-extrabold text-blue-950 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Sterilization &amp; Clinical Hygiene Protocol
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every diagnostic and surgical instrument undergoes ultrasonic cleaning, sealed pouching,
              and high-pressure steam autoclave sterilization. Fresh disposable gloves, suction tips,
              needles, and chair barriers are used for each appointment to maintain a safe clinical
              environment.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-3">
            <h3 className="text-xl font-extrabold text-blue-950 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              Easily Accessible Within 5 km of Chipiyana Buzurg
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Located at <strong>{GBP_CONFIG.SHORT_ADDRESS}</strong>, our clinic serves families and
              working professionals from <strong>Chipiyana Buzurg</strong>, <strong>Jaat Chowk</strong>,{' '}
              <strong>Shahberi</strong>, <strong>Crossings Republik</strong>,{' '}
              <strong>Noida Extension</strong>, nearby <strong>Greater Noida West</strong> residential
              societies, and <strong>Lal Kuan</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
