import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, MessageCircle, Clock } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

interface HeroProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
}

const Hero: React.FC<HeroProps> = ({ handleCall, handleWhatsApp }) => {
  return (
    <section className="relative bg-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80" 
          alt="Happy Patient" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/80 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 z-10 text-center md:text-left"
        >
          <div className="inline-block bg-amber-500 text-blue-950 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-lg shadow-amber-500/20">
            Top Rated Dentist in Ghaziabad
          </div>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, scale: [1, 1.01, 1] }}
            transition={{ opacity: { duration: 0.6, delay: 0.2 }, y: { duration: 0.6, delay: 0.2 }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          >
            Tooth Pain? <span className="text-amber-400 drop-shadow-md">Get Relief in 30 Minutes</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto md:mx-0 font-light"
            initial={{ opacity: 0.7, y: 20 }}
            animate={{ opacity: [0.7, 1, 0.7], y: 0 }}
            transition={{ opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }, y: { duration: 0.6, delay: 0.3 } }}
          >
            Expert dental care, painless treatments, and advanced implants at affordable prices.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <InteractiveButton onClick={handleCall} className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-lg py-4 px-8 rounded-xl shadow-xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2 active:scale-95 hover:scale-105 hover:-translate-y-1">
              <PhoneCall className="w-5 h-5" /> Call Now
            </InteractiveButton>
            <InteractiveButton onClick={handleWhatsApp} className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-lg py-4 px-8 rounded-xl shadow-xl shadow-[#25D366]/30 transition-all flex items-center justify-center gap-2 active:scale-95 hover:scale-105 hover:-translate-y-1">
              <MessageCircle className="w-5 h-5" /> Book via WhatsApp
            </InteractiveButton>
          </div>
          <p className="mt-4 text-sm text-amber-300 font-medium flex items-center justify-center md:justify-start gap-1">
            <Clock className="w-4 h-4" /> Limited slots available today!
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.2 }, 
            scale: { duration: 0.8, delay: 0.2 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
          }}
          className="w-full md:w-1/2 mt-12 md:mt-0 z-10 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-[50%] border-4 border-white/20 overflow-hidden shadow-2xl shadow-blue-950/40 ring-4 ring-amber-500/30">
            <img 
              src="https://i.postimg.cc/tCd8wLDv/Chat-GPT-Image-Apr-22-2026-08-21-13-PM.png" 
              alt="Dr. Prashant Kumar Vats" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
