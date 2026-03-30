import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, MessageCircle, ShieldCheck, HeartPulse, Star, Activity, CheckCircle2, Stethoscope } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

interface ServicesProps {
  handleWhatsApp: () => void;
}

export const Services: React.FC<ServicesProps> = ({ handleWhatsApp }) => {
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              key={idx} 
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
            >
              <motion.div 
                initial={{ scale: 0, rotate: -45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.2, type: "spring", stiffness: 200, damping: 10 }}
                className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 shadow-sm"
              >
                <service.icon className="w-6 h-6" />
              </motion.div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.desc}</p>
              <div className="flex gap-2">
                <a 
                  href="tel:7011961515" 
                  className="flex-1 bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-1"
                >
                  <PhoneCall className="w-4 h-4" /> Call
                </a>
                <InteractiveButton 
                  onClick={handleWhatsApp} 
                  className="flex-1 bg-[#25D366] text-white py-2 rounded-lg text-sm font-semibold hover:bg-[#20b858] transition-colors flex items-center justify-center gap-1"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </InteractiveButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
