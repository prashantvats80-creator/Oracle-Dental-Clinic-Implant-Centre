import React from 'react';
import { motion } from 'motion/react';
import { HeartPulse, Stethoscope, Activity, ShieldCheck, MapPin } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const features = [
    { title: 'Painless Treatment', icon: HeartPulse },
    { title: 'Experienced Dentist', icon: Stethoscope },
    { title: 'Advanced Technology', icon: Activity },
    { title: 'Affordable Pricing', icon: ShieldCheck },
    { title: 'Fully Sanitized', icon: ShieldCheck },
    { title: 'Emergency Care', icon: Activity },
    { title: 'Free Parking', icon: MapPin },
    { title: 'Modern Equipment', icon: Activity },
  ];

  return (
    <section id="why-us" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Oracle Dental?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">We combine expertise with compassion to deliver the best dental experience.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              key={idx} 
              className="bg-white p-6 rounded-2xl text-center shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 group cursor-pointer"
            >
              <motion.div 
                initial={{ scale: 0, rotate: 45 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 + 0.2, type: "spring", stiffness: 200, damping: 10 }}
                className="w-14 h-14 mx-auto bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-sm"
              >
                <feature.icon className="w-7 h-7" />
              </motion.div>
              <h3 className="font-bold text-slate-800">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
