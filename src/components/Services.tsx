import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, MessageCircle, ShieldCheck, HeartPulse, Star, Activity, CheckCircle2, Stethoscope, ArrowRight, Sparkles } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

interface ServicesProps {
  handleWhatsApp: () => void;
  navigateToPath?: (path: string) => void;
}

const Services: React.FC<ServicesProps> = ({ handleWhatsApp, navigateToPath }) => {
  const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (navigateToPath) {
      e.preventDefault();
      navigateToPath(path);
    }
  };

  const services = [
    { title: 'Dental Implants', desc: 'Restore your smile with premium dental implants in Ghaziabad and Chipiyana Buzurg. Performed by certified specialists for natural function.', icon: ShieldCheck, path: '/dental-implants' },
    { title: 'Full Mouth Rehabilitation', desc: 'Advanced full mouth dental implants in Ghaziabad. We specialize in All-on-4 and All-on-6 implant systems for secure permanent replacement.', icon: ShieldCheck, path: '/dental-implants' },
    { title: 'Zirconia Crowns & Tooth Caps', desc: 'Get premium, metal-free Zirconia crowns in Ghaziabad. Known for extreme durability, lifelike translucency, and perfect enamel protection.', icon: ShieldCheck, path: '/tooth-cap' },
    { title: 'Painless Root Canal (RCT)', desc: 'Experience comfortable, single-sitting root canal treatment in Ghaziabad handled by RCT specialists using microscopic equipment.', icon: HeartPulse, path: '/root-canal-treatment' },
    { title: 'Teeth Cleaning & Dental Scaling', desc: 'Professional ultrasonic scaling and polishing in Chipiyana Buzurg to remove tartar, plaque biofilm, and surface stains for healthy gums.', icon: Sparkles, path: '/teeth-cleaning' },
    { title: 'Professional Teeth Whitening', desc: 'Safely and effectively brighten discolored teeth. Get a radiant Hollywood smile with in-office professional whitening sessions.', icon: Star, path: '/teeth-whitening' },
    { title: 'Wisdom Tooth Extraction', desc: 'Safe, precise, and painless wisdom tooth extraction in Ghaziabad. Specialised surgical removal of impacted wisdom teeth by oral surgeons.', icon: Stethoscope, path: '/wisdom-tooth-extraction' },
    { title: 'Tooth Pain Treatment', desc: 'Comprehensive diagnosis and rapid relief for acute toothaches, nighttime throbbing pain, and nerve sensitivity.', icon: HeartPulse, path: '/tooth-pain-treatment' },
    { title: 'Bleeding Gums & Gum Care', desc: 'Specialized periodontal scaling, pocket cleaning, and gingivitis care to stop bleeding gums and strengthen tooth support.', icon: Activity, path: '/bleeding-gums' },
    { title: 'Tooth Sensitivity Relief', desc: 'Targeted in-clinic desensitization and fluoride treatments for sharp cold/hot sensitivity and exposed tooth root dentin.', icon: Activity, path: '/tooth-sensitivity' },
    { title: 'Dental Fillings & Bonding', desc: 'Restore cavities or chipped teeth with invisible, premium tooth-colored composite fillings that blend seamlessly with natural enamel.', icon: CheckCircle2, path: '/dental-fillings' },
    { title: 'Advanced Kid\'s Dentistry', desc: 'Gentle, patient, and friendly pediatric dental care in Chipiyana Buzurg focusing on positive early experiences and preventive care.', icon: HeartPulse, path: '/kids-dentist' },
  ];

  const allTreatmentPages = [
    { title: "Dental Implants", path: "/dental-implants" },
    { title: "Root Canal Treatment", path: "/root-canal-treatment" },
    { title: "Teeth Cleaning & Scaling", path: "/teeth-cleaning" },
    { title: "Teeth Whitening", path: "/teeth-whitening" },
    { title: "Wisdom Tooth Removal", path: "/wisdom-tooth-extraction" },
    { title: "Tooth Cap / Dental Crown", path: "/tooth-cap" },
    { title: "Dental Fillings", path: "/dental-fillings" },
    { title: "Tooth Extraction", path: "/tooth-extraction" },
    { title: "Dental Bridges", path: "/dental-bridges" },
    { title: "Dentures", path: "/dentures" },
    { title: "Kids Dentist", path: "/kids-dentist" },
    { title: "Emergency Dentist", path: "/emergency-dentist" },
    { title: "Dentist in Chipiyana Buzurg", path: "/dentist-chipiyana-buzurg-ghaziabad" },
  ];

  const allSymptomPages = [
    { title: "Tooth Pain Treatment", path: "/tooth-pain-treatment" },
    { title: "Bleeding Gums Care", path: "/bleeding-gums" },
    { title: "Tooth Sensitivity Relief", path: "/tooth-sensitivity" },
    { title: "Bad Breath Treatment", path: "/bad-breath-treatment" },
    { title: "Loose Tooth Treatment", path: "/loose-tooth-treatment" },
    { title: "Broken Tooth Repair", path: "/broken-tooth-treatment" },
    { title: "Chipped Tooth Repair", path: "/chipped-tooth" },
    { title: "Black / Dark Tooth Care", path: "/black-tooth" },
    { title: "Missing Teeth Options", path: "/missing-teeth" },
    { title: "Cavity Treatment", path: "/cavity-treatment" },
    { title: "Gum Disease Treatment", path: "/gum-disease-treatment" },
    { title: "Swollen Gums Care", path: "/swollen-gums" },
    { title: "Gum Recession Care", path: "/gum-recession" },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Premium Dental Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive dental care tailored to your needs using advanced technology and expert specialists.</p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: Math.min(idx * 0.05, 0.3) }}
              key={idx} 
              id={`service-card-${idx}`}
              className="bg-white rounded-3xl p-6 border border-indigo-50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 bg-indigo-50 text-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <a 
                  href={service.path} 
                  onClick={(e) => handlePageClick(e, service.path)}
                  className="block text-xl font-extrabold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors"
                >
                  {service.title}
                </a>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.desc}</p>
              </div>

              <div className="space-y-2">
                <a 
                  href={service.path} 
                  onClick={(e) => handlePageClick(e, service.path)}
                  className="w-full bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 shadow-2xs"
                >
                  View Full Page & Details <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* COMPREHENSIVE DIRECTORY OF ALL PAGES */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl border border-slate-800 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-amber-400 font-bold text-xs uppercase tracking-wider">Complete Dental Directory</span>
            <h3 className="text-2xl font-black text-white">Explore All Dental Treatments & Symptoms Pages</h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">Click any link below to visit the dedicated, comprehensive guide for your specific dental concern.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* Dental Treatments Column */}
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-4">
              <h4 className="text-amber-400 font-extrabold text-sm uppercase tracking-wide flex items-center gap-2 border-b border-slate-700 pb-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" /> Key Dental Treatments (13 Pages)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                {allTreatmentPages.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.path} 
                    onClick={(e) => handlePageClick(e, item.path)}
                    className="p-2 rounded-lg bg-slate-900/60 hover:bg-amber-500 hover:text-slate-950 font-medium transition-all flex items-center justify-between group"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-slate-950" />
                  </a>
                ))}
              </div>
            </div>

            {/* Symptoms & Conditions Column */}
            <div className="bg-slate-800/80 p-6 rounded-2xl border border-slate-700 space-y-4">
              <h4 className="text-cyan-400 font-extrabold text-sm uppercase tracking-wide flex items-center gap-2 border-b border-slate-700 pb-2">
                <HeartPulse className="w-4 h-4 text-cyan-400" /> Symptoms & Dental Care (13 Pages)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-200">
                {allSymptomPages.map((item, i) => (
                  <a 
                    key={i} 
                    href={item.path} 
                    onClick={(e) => handlePageClick(e, item.path)}
                    className="p-2 rounded-lg bg-slate-900/60 hover:bg-cyan-400 hover:text-slate-950 font-medium transition-all flex items-center justify-between group"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 text-slate-500 group-hover:text-slate-950" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
