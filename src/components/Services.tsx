import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, MessageCircle, ShieldCheck, HeartPulse, Star, Activity, CheckCircle2, Stethoscope } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

interface ServicesProps {
  handleWhatsApp: () => void;
}

const Services: React.FC<ServicesProps> = ({ handleWhatsApp }) => {
  const services = [
    { title: 'Dental Implants', desc: 'Permanent solution for missing teeth. Look and feel natural.', icon: ShieldCheck },
    { title: 'Full Mouth Implants', desc: 'Complete restoration for a full set of teeth.', icon: ShieldCheck },
    { title: 'Zirconia Caps', desc: 'Strong, aesthetic, and metal-free dental crowns.', icon: ShieldCheck },
    { title: 'Tooth Caps', desc: 'Durable crowns to protect and restore damaged teeth.', icon: ShieldCheck },
    { title: 'Root Canal (RCT)', desc: 'Painless single-sitting RCT to save your natural tooth.', icon: HeartPulse },
    { title: 'Teeth Cleaning & Polishing', desc: 'Professional cleaning for a healthy, plaque-free smile.', icon: Star },
    { title: 'Teeth Whitening', desc: 'Get a brighter, confident smile in just one session.', icon: Star },
    { title: 'Veneers', desc: 'Custom shells to improve the appearance of your teeth.', icon: Star },
    { title: 'Braces', desc: 'Straighten teeth and design your perfect smile.', icon: Activity },
    { title: 'Aligners', desc: 'Invisible, removable aligners for a discreet smile correction.', icon: Activity },
    { title: 'Dentures', desc: 'Custom-made removable appliances to replace missing teeth.', icon: CheckCircle2 },
    { title: 'Tooth Filling', desc: 'Restore decayed teeth with high-quality, tooth-colored fillings.', icon: CheckCircle2 },
    { title: 'Tooth Extraction', desc: 'Safe and painless removal of damaged or decayed teeth.', icon: Stethoscope },
    { title: 'Wisdom Tooth Extraction', desc: 'Safe and painless removal of impacted wisdom teeth.', icon: Stethoscope },
    { title: 'Kids Dentistry', desc: 'Gentle and friendly dental care for your little ones.', icon: HeartPulse },
    { title: 'General Dentistry', desc: 'Routine checkups, cleaning, and fillings for oral health.', icon: CheckCircle2 },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Premium Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive dental care tailored to your needs using the latest technology.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(idx * 0.05, 0.3) }}
              key={idx} 
              className="bg-white rounded-3xl p-6 border border-indigo-50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:-translate-y-2 hover:scale-[1.03] transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Subtle hover gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
              
              <div className="relative z-10 w-14 h-14 bg-indigo-50 text-blue-600 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-sm">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="relative z-10 text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">{service.title}</h3>
              <p className="relative z-10 text-slate-600 mb-6 font-medium leading-relaxed">{service.desc}</p>
              <div className="relative z-10 flex gap-3">
                <a 
                  href="tel:7011961515" 
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-1 active:scale-95 shadow-sm hover:shadow-md"
                >
                  <PhoneCall className="w-4 h-4" /> Call
                </a>
                <InteractiveButton 
                  onClick={handleWhatsApp} 
                  className="flex-1 bg-gradient-to-r from-[#25D366] to-[#20b858] text-white py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300 flex items-center justify-center gap-1 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" /> Get Quote
                </InteractiveButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
