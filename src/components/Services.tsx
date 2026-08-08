import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, MessageCircle, ShieldCheck, HeartPulse, Star, Activity, CheckCircle2, Stethoscope } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

interface ServicesProps {
  handleWhatsApp: () => void;
}

const Services: React.FC<ServicesProps> = ({ handleWhatsApp }) => {
  const services = [
    { title: 'Dental Implants', desc: 'Restore your smile with premium dental implants in Ghaziabad and Chipiyana Buzurg. Our high-quality single-tooth and multi-tooth dental implants look, feel, and function like natural teeth, performed by a certified implantologist.', icon: ShieldCheck },
    { title: 'Full Mouth Rehabilitation', desc: 'Restore full function and aesthetics with advanced full mouth dental implants in Ghaziabad. We specialize in All-on-4 and All-on-6 implant systems for secure, long-lasting permanent teeth replacement.', icon: ShieldCheck },
    { title: 'Zirconia Crowns & Caps', desc: 'Get premium, metal-free Zirconia crowns in Ghaziabad, Noida, and Greater Noida. Known for extreme durability, lifelike translucency, and perfect biocompatibility to protect your teeth.', icon: ShieldCheck },
    { title: 'Painless Root Canal (RCT)', desc: 'Experience comfortable, single-sitting root canal treatment in Ghaziabad and Greater Noida. Handled by a dental RCT specialist using microscopic and rotary endodontic equipment for precision.', icon: HeartPulse },
    { title: 'Clear Aligners', desc: 'Straighten your teeth discreetly with clear aligners in Ghaziabad and Chipiyana Buzurg. Comfortable, removable, and invisible teeth braces custom-designed for modern, metal-free teeth straightening.', icon: Activity },
    { title: 'Dental Braces', desc: 'Get a perfect smile with advanced braces treatment in Ghaziabad and Greater Noida. We offer orthodontic braces, ceramic braces, and traditional metal brackets supervised by an experienced orthodontist.', icon: Activity },
    { title: 'Wisdom Tooth Extraction', desc: 'Safe, precise, and painless wisdom tooth extraction in Ghaziabad and Chipiyana Buzurg. Specialised surgical removal of impacted wisdom teeth by an experienced oral surgeon for quick relief.', icon: Stethoscope },
    { title: 'Smile Makeovers & Veneers', desc: 'Transform your look with customized porcelain or composite veneers in Ghaziabad. Our smile design and complete cosmetic smile corrections are designed to enhance your confidence and aesthetics.', icon: Star },
    { title: 'Teeth Whitening', desc: 'Safely and effectively brighten discolored teeth. Get a radiant Hollywood smile with our in-office professional teeth whitening sessions or specialized take-home whitening kits.', icon: Star },
    { title: 'Complete Dentures', desc: 'Custom-made, comfortable, and natural-looking full or partial dentures to restore missing teeth and support facial structures for healthy eating and speaking.', icon: CheckCircle2 },
    { title: 'Cosmetic Fillings', desc: 'Restore cavities or chipped teeth with invisible, premium tooth-colored composite fillings that blend seamlessly with your natural tooth enamel.', icon: CheckCircle2 },
    { title: 'Advanced Kid\'s Dentistry', desc: 'Gentle, patient, and friendly pediatric dental care in Chipiyana Buzurg for your children. We focus on positive early dental experiences, preventive care, and habit management.', icon: HeartPulse },
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
              id={`service-card-${idx}`}
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
                  href="tel:+917011961515" 
                  id={`service-call-btn-${idx}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-2.5 rounded-xl text-sm font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-1 active:scale-95 shadow-sm hover:shadow-md"
                >
                  <PhoneCall className="w-4 h-4" /> Call
                </a>
                <InteractiveButton 
                  id={`service-whatsapp-btn-${idx}`}
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
