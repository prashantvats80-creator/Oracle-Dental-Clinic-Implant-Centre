import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { PhoneCall, MessageCircle, Clock, MapPin, Sparkles, HeartPulse, ShieldCheck, ArrowRight } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  navigateToPath?: (path: string) => void;
}

const Hero: React.FC<HeroProps> = ({ handleCall, handleWhatsApp, navigateToPath }) => {
  const { language } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 1], [0.25, 0.05]);

  const handleChipClick = (path: string) => {
    if (navigateToPath) {
      navigateToPath(path);
    }
  };

  return (
    <section id="hero" ref={ref} className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: backgroundY, opacity: opacityBg }}
      >
        <img 
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80" 
          alt="Happy Patient" 
          className="w-full h-full object-cover"
          style={{ aspectRatio: '16/9' }}
          referrerPolicy="no-referrer"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </motion.div>

      {/* Subtle animated background sheen */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-blue-950/90 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20 lg:py-28 flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Column: Conversational Greeting & Call to Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-7/12 z-10 text-center md:text-left space-y-5"
        >
          {/* Conversational Welcome Banner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 text-blue-200 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-md shadow-md"
          >
            <span className="animate-bounce">👋</span>
            <span>
              {language === 'hi'
                ? 'ऑरैकल डेंटल क्लीनिक में आपका स्वागत है। डॉ. प्रशांत वत्स आज आपकी कैसे मदद कर सकते हैं?'
                : 'Welcome to Oracle Dental Clinic. How can Dr. Prashant Vats help you today?'}
            </span>
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-2xl">
            {language === 'hi' ? (
              <>
                सुरक्षित एवं आरामदायक दंत चिकित्सा <br className="hidden sm:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                  चिपियाना बुजुर्ग, गाज़ियाबाद में
                </span>
              </>
            ) : (
              <>
                Gentle, Expert Dental Care <br className="hidden sm:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-200 to-amber-400">
                  In Chipiyana Buzurg, Ghaziabad
                </span>
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto md:mx-0 font-normal leading-relaxed drop-shadow-md">
            {language === 'hi'
              ? 'दांत दर्द, डेंटल इम्प्लांट, दांतों की सफाई या संपूर्ण मुस्कान परामर्श—हम आधुनिक तकनीक और व्यक्तिगत देखभाल के साथ आपकी मदद करते हैं।'
              : 'Whether you need emergency toothache relief, dental implants, teeth cleaning, or a complete smile consultation—we are here to guide you with personal care and modern technology.'}
          </p>

          {/* Interactive Conversational Prompt Chips */}
          <div className="pt-1">
            <span className="text-xs text-amber-400 font-bold uppercase tracking-wider block mb-2">
              ✨ What brings you to us today? Click an option:
            </span>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
              <button 
                onClick={() => handleChipClick('/tooth-pain-treatment')}
                className="bg-white/10 hover:bg-rose-600/80 text-white border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <HeartPulse className="w-3.5 h-3.5 text-rose-400" /> I have a toothache
              </button>

              <button 
                onClick={() => handleChipClick('/dental-implants')}
                className="bg-white/10 hover:bg-amber-500/80 text-white border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" /> I need dental implants
              </button>

              <button 
                onClick={() => handleChipClick('/teeth-cleaning')}
                className="bg-white/10 hover:bg-emerald-600/80 text-white border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" /> I need teeth cleaning
              </button>

              <button 
                onClick={() => handleChipClick('/dentist-chipiyana-buzurg-ghaziabad')}
                className="bg-white/10 hover:bg-blue-600/80 text-white border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
              >
                <MapPin className="w-3.5 h-3.5 text-blue-400" /> Clinic address & timing
              </button>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
            <InteractiveButton 
              id="hero-call-btn" 
              onClick={handleCall} 
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-base py-3.5 px-7 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 hover:scale-105"
            >
              <PhoneCall className="w-5 h-5" /> Call 7011961515
            </InteractiveButton>

            <InteractiveButton 
              id="hero-whatsapp-btn" 
              onClick={handleWhatsApp} 
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base py-3.5 px-7 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" /> Book via WhatsApp
            </InteractiveButton>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4 text-xs text-slate-300 pt-1">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-amber-400" /> Open Daily: 10 AM–2 PM | 5 PM–9 PM
            </span>
            <span>•</span>
            <span className="font-semibold text-amber-300">Consultation Fee ₹200</span>
          </div>
        </motion.div>
        
        {/* Right Column: Doctor Card & Local Credibility */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-5/12 z-10 flex justify-center md:justify-end relative"
        >
          <div className="relative w-72 sm:w-80 bg-slate-900/90 border border-slate-800 p-5 rounded-3xl shadow-2xl backdrop-blur-md space-y-4">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-slate-700 shadow-lg">
              <img 
                src="https://i.postimg.cc/tCd8wLDv/Chat-GPT-Image-Apr-22-2026-08-21-13-PM.png" 
                alt="Dr. Prashant Kumar Vats, BDS" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-extrabold text-base leading-tight text-amber-300">Dr. Prashant Kumar Vats, BDS</h3>
                <p className="text-xs text-slate-300">Lead Dentist & Implant Specialist</p>
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-300 bg-slate-950/80 p-3 rounded-xl border border-slate-800">
              <div className="flex items-center justify-between font-semibold">
                <span className="text-slate-400">Clinic Name:</span>
                <span className="text-amber-300">Oracle Dental Clinic</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Address:</span>
                <span className="text-slate-200">Jaat Chowk, Chipiyana Buzurg</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
