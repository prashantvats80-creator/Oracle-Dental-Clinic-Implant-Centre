import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PhoneCall, MessageCircle, Clock } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

interface HeroProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
}

const Hero: React.FC<HeroProps> = ({ handleCall, handleWhatsApp }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [0.2, 0.05]);

  return (
    <section ref={ref} className="relative bg-blue-900 text-white overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY, opacity: opacityBg }}
      >
        <img 
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80" 
          alt="Happy Patient" 
          className="w-full h-full object-cover"
          style={{ aspectRatio: '16/9' }}
          referrerPolicy="no-referrer"
          loading="lazy"
          decoding="async"
          fetchPriority="high"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/80 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 lg:py-32 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 z-10 text-center md:text-left"
        >
          <div className="inline-block bg-gradient-to-r from-amber-400 to-amber-500 text-blue-950 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-[0_0_20px_rgba(245,158,11,0.4)] border border-amber-300">
            ⭐ 5000+ Happy Smiles Transformed
          </div>
          <p className="text-cyan-300 font-bold mb-3 tracking-widest uppercase text-sm md:text-base drop-shadow-md">
            Premium & Trusted Smile Makeovers and Dental Implants in Ghaziabad
          </p>
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, scale: [1, 1.01, 1] }}
            transition={{ opacity: { duration: 0.6, delay: 0.2 }, y: { duration: 0.6, delay: 0.2 }, scale: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
          >
            Where Beautiful Smiles <br className="hidden md:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Meet Advanced Dentistry</span>
          </motion.h1>
          <motion.p 
            className="text-lg md:text-2xl text-blue-50 mb-10 max-w-2xl mx-auto md:mx-0 font-medium leading-relaxed drop-shadow-lg"
            initial={{ opacity: 0.7, y: 20 }}
            animate={{ opacity: [0.7, 1, 0.7], y: 0 }}
            transition={{ opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }, y: { duration: 0.6, delay: 0.3 } }}
          >
            Experience premium smile makeovers, natural-looking veneers, and long-lasting dental implants designed to enhance your confidence and transform your smile with advanced technology and personalized care.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <InteractiveButton onClick={handleCall} className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-lg py-4 px-8 rounded-xl shadow-xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2 active:scale-95 hover:scale-105 hover:-translate-y-1">
              <PhoneCall className="w-5 h-5" /> Book Consultation
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
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.2 }, 
            scale: { duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" } 
          }}
          className="w-full md:w-1/2 mt-16 md:mt-0 z-10 flex justify-center md:justify-end relative"
        >
          {/* Animated decorative ring behind the image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-96 md:w-96 md:h-[28rem] rounded-[50%] bg-gradient-to-tr from-cyan-500/30 to-amber-500/30 blur-2xl animate-pulse"></div>
          
          <div className="relative w-64 h-80 md:w-[22rem] md:h-[28rem] rounded-[40px] border-[6px] border-white/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] ring-4 ring-cyan-400/50 transform hover:rotate-2 transition-transform duration-500">
            <img 
              src="https://i.postimg.cc/tCd8wLDv/Chat-GPT-Image-Apr-22-2026-08-21-13-PM.png" 
              alt="Dr. Prashant Kumar Vats" 
              className="w-full h-full object-cover"
              style={{ aspectRatio: '3/4' }}
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
