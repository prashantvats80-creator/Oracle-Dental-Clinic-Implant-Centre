/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import {
  PhoneCall,
  MessageCircle,
  Clock,
  MapPin,
  Activity,
  Menu,
  X,
  ArrowUp,
  Facebook,
  Instagram,
  Youtube,
  Volume2,
  VolumeX
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SoundProvider, useSound } from './components/SoundManager';
import { InteractiveButton } from './components/InteractiveButton';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import SEOHead from './components/SEOHead';
import { GBP_CONFIG } from './config/googleBusinessProfile';

const Services = lazy(() => import('./components/Services'));
const WhyUs = lazy(() => import('./components/WhyUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <SoundProvider>
      <AppContent />
    </SoundProvider>
  );
}

function AppContent() {
  const { isMuted, toggleMute, startMusic } = useSound();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const faqs = [
    {
      question: "Where can I get dental implants near Chipiyana Buzurg?",
      answer: "Oracle Dental Clinic & Implant Center is located in Chipiyana Buzurg, Ghaziabad, near the Ghaziabad–Greater Noida border, making it easily accessible from Crossing Republik, Noida Extension, and Greater Noida West. Our clinic features advanced diagnostic equipment and a certified implantologist to ensure safe, comfortable, and long-lasting dental implant treatments right in your neighborhood."
    },
    {
      question: "How much does a dental implant cost in Ghaziabad?",
      answer: "The cost of dental implants in Ghaziabad varies depending on factors like the implant brand (e.g., Osstem, Nobel Biocare, Straumann), the type of crown (Zirconia or ceramic), and the bone structure of the patient. Single tooth implant procedures start from highly affordable ranges. During a comprehensive consultation at Oracle Dental Clinic, our implant specialist will assess your 3D scans and provide an accurate, transparent cost estimate tailored to your treatment plan."
    },
    {
      question: "Is root canal treatment (RCT) painful?",
      answer: "A root canal is designed to relieve the pain caused by deep decay or tooth infection, not cause it. At Oracle Dental Clinic, our experienced RCT specialist uses advanced local anesthetics, rotary endodontic systems, and microscopic technology to perform painless root canal treatments, often completed in a single comfortable sitting."
    },
    {
      question: "How do I choose a dental implant specialist in Ghaziabad?",
      answer: "When choosing a dental implant specialist, look for experienced implantologists with specialized postgraduate training in oral implantology, verified patient success rates, and a clinic equipped with modern tools like digital radiography. At Oracle Dental Clinic and Implant Center, our lead doctor is a highly qualified dentist and implant expert who handles both single tooth restorations and full mouth rehabilitations."
    },
    {
      question: "Is wisdom tooth extraction painful and when is it required?",
      answer: "An extraction is performed under complete local anesthesia, making the wisdom tooth surgery itself virtually painless. Extraction is typically required when you have an impacted wisdom tooth, severe swelling, recurring gum infections (pericoronitis), or damage to adjacent teeth. Our oral surgeon in Ghaziabad ensures a gentle surgical extraction process with a smooth, painless recovery."
    },
    {
      question: "What is the difference between braces and clear aligners?",
      answer: "Dental braces use metal or ceramic brackets and wires to align teeth, making them highly effective for severe crowding or complex orthodontic alignments. Clear aligners are invisible, removable plastic trays that straighten teeth discreetly. Clear aligners are highly popular with adults and working professionals in Greater Noida and Ghaziabad for teeth straightening because they are virtually invisible and offer easier oral hygiene."
    },
    {
      question: "Are clear aligners suitable for adults in Noida & Greater Noida?",
      answer: "Absolutely! Clear aligners are highly popular among adults and teens alike who prefer a subtle, wire-free method of teeth straightening. They are comfortable, removable, and do not interfere with your diet or daily lifestyle. Our clear aligner specialist in Chipiyana Buzurg will map out your digital smile design and customize clear aligners for predictable, high-quality results."
    },
    {
      question: "How long does a root canal treatment take?",
      answer: "With modern rotary technology and microscopic treatment methods, a root canal treatment at Oracle Dental Clinic is frequently completed in a single sitting of 30 to 45 minutes. However, in cases of severe infection, our RCT dentist may recommend two sittings to ensure the root canal is completely sanitized and sealed before placing a permanent tooth cap or Zirconia crown."
    },
    {
      question: "Does the clinic provide full mouth dental implants in Ghaziabad?",
      answer: "Yes, Oracle Dental Clinic & Implant Center is a specialized multi-specialty center for full mouth rehabilitation. We offer state-of-the-art All-on-4 and All-on-6 full mouth dental implants that replace entire arches of missing teeth with permanent, natural-feeling teeth. This procedure is done after detailed diagnostic analysis to ensure proper support and bone preservation."
    }
  ];

  useEffect(() => {
    // Initiate music playback on first interaction
    const handleFirstInteraction = () => {
      startMusic();
      const events = ['click', 'touchstart', 'mousedown', 'pointerdown'];
      events.forEach(e => window.removeEventListener(e, handleFirstInteraction));
    };
    const events = ['click', 'touchstart', 'mousedown', 'pointerdown'];
    events.forEach(e => window.addEventListener(e, handleFirstInteraction));
    return () => {
      events.forEach(e => window.removeEventListener(e, handleFirstInteraction));
    };
  }, [startMusic]);

  useEffect(() => {
    // Delay and lazily load Google tag (gtag.js) to maximize initial speed on slow networks
    const loadGtag = () => {
      const win = window as any;
      if (win.gtag) return;

      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16678614351';
      document.head.appendChild(script);

      script.onload = () => {
        win.dataLayer = win.dataLayer || [];
        win.gtag = function() {
          win.dataLayer.push(arguments);
        };
        win.gtag('js', new Date());
        win.gtag('config', 'AW-16678614351');
      };
    };

    // Load after a 3.5s delay or immediately on first real user interaction
    const timer = setTimeout(loadGtag, 3500);

    const events = ['click', 'touchstart', 'scroll'];
    const handleInteraction = () => {
      loadGtag();
      clearTimeout(timer);
      events.forEach(e => window.removeEventListener(e, handleInteraction));
    };

    events.forEach(e => window.addEventListener(e, handleInteraction, { passive: true }));

    return () => {
      clearTimeout(timer);
      events.forEach(e => window.removeEventListener(e, handleInteraction));
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 400) {
            setShowBackToTop(true);
          } else {
            setShowBackToTop(false);
          }

          const sections = ['transformations', 'services', 'why-us', 'testimonials', 'faq', 'contact'];
          let current = '';
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= window.innerHeight / 3 && rect.bottom >= 100) {
                current = section;
              }
            }
          }
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    
    // Close menu first on mobile to prevent layout shift during scroll
    if (isMenuOpen) {
      setIsMenuOpen(false);
      
      // Allow menu to close before initiating scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const phoneNumber = "+917011961515";
  const phoneNumberFormatted = "+91 70119 61515";
  const whatsappNumber = "917011961515"; // Assuming India country code
  const whatsappMessage = "I want to book an appointment.";

  const handleCall = () => window.open(`tel:${phoneNumber}`, '_self');
  const handleWhatsApp = () => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  const handleDirections = () => window.open(GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL, '_blank');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/50 font-sans text-slate-950 pb-20 md:pb-0 scroll-smooth">
      <SEOHead />
      {/* Top Bar (Desktop) */}
      <div className="hidden md:flex bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-900 animate-gradient-xy text-white text-sm py-2.5 px-6 justify-between items-center shadow-md relative z-50">
        <div className="flex items-center gap-4 font-medium tracking-wide">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400 animate-pulse" /> Mon-Sun: 10 AM - 2 PM, 5 PM - 9 PM</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> Chipiyana Buzurg, Ghaziabad</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${phoneNumber}`} className="flex items-center gap-1.5 font-bold hover:text-amber-400 transition-colors">
            <PhoneCall className="w-4 h-4 animate-bounce" style={{ animationDuration: '3s' }} /> {phoneNumberFormatted}
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgb(0,0,0,0.05)] sticky top-0 z-40 border-b border-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer" onClick={scrollToTop}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-extrabold text-2xl shadow-lg ring-4 ring-indigo-50 group-hover:scale-105 transition-transform duration-300">
                O
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-700">Oracle Dental</span>
                <span className="text-xs text-amber-600 font-bold tracking-wider uppercase">Clinic & Implants</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 items-center">
              {[
                { id: 'transformations', label: 'Results' },
                { id: 'services', label: 'Services' },
                { id: 'why-us', label: 'Why Us' },
                { id: 'testimonials', label: 'Reviews' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`font-medium transition-colors relative py-2 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </a>
              ))}
              <InteractiveButton 
                id="mute-toggle-desktop"
                onClick={toggleMute}
                className="text-slate-500 hover:text-blue-600 p-2 rounded-full transition-colors"
                aria-label={isMuted ? "Unmute music" : "Mute music"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </InteractiveButton>
            </nav>

            {/* Mobile menu button and volume toggle */}
            <div className="flex items-center md:hidden gap-2">
              <InteractiveButton 
                id="mute-toggle-mobile"
                onClick={toggleMute}
                className="text-slate-500 hover:text-blue-600 p-2 rounded-full transition-colors"
                aria-label={isMuted ? "Unmute music" : "Mute music"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </InteractiveButton>
              <InteractiveButton
                id="mobile-menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-blue-600 focus:outline-none p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </InteractiveButton>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl overflow-hidden z-50 left-0 top-full"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {[
                  { id: 'transformations', label: 'Smile Results' },
                  { id: 'services', label: 'Services' },
                  { id: 'why-us', label: 'Why Choose Us' },
                  { id: 'testimonials', label: 'Patient Reviews' },
                  { id: 'faq', label: 'FAQ' },
                  { id: 'contact', label: 'Contact Us' }
                ].map((item) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`} 
                    onClick={(e) => scrollToSection(e, item.id)} 
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-all ${
                      activeSection === item.id 
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' 
                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600 border-l-4 border-transparent'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center gap-6 px-4 pt-4 border-t border-slate-100">
                  <a href="https://www.facebook.com/profile.php?id=100083436112014" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/oracledentalclinic0/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-pink-600 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.youtube.com/@OracleDentalClinic0" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-red-600 transition-colors">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <Hero handleCall={handleCall} handleWhatsApp={handleWhatsApp} />
        
        {/* Emergency Banner */}
        <motion.section 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white py-5 px-4 shadow-[0_10px_40px_rgba(225,29,72,0.3)] relative z-30 overflow-hidden"
        >
          {/* Animated background sheen */}
          <div className="absolute inset-0 bg-white/10 skew-x-[-20deg] w-1/4 -translate-x-[200%] animate-sheen"></div>
          
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-2xl animate-pulse shadow-inner">
                <Activity className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl tracking-tight">Severe Tooth Pain or Emergency?</h3>
                <p className="text-red-100 font-medium text-sm mt-0.5">Don't wait. We provide immediate relief, 24/7 support.</p>
              </div>
            </div>
            <InteractiveButton id="emergency-call-btn" onClick={handleCall} className="w-full sm:w-auto bg-white text-red-600 font-black tracking-wide py-3 px-8 rounded-xl shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 active:scale-95 hover:scale-105 hover:shadow-2xl border border-white/50">
              <PhoneCall className="w-5 h-5 animate-ring" /> Call Emergency Now
            </InteractiveButton>
          </div>
        </motion.section>

        <BeforeAfter />

        <Suspense fallback={
          <div className="flex justify-center items-center h-32 my-12">
            <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <Services handleWhatsApp={handleWhatsApp} />

          <WhyUs handleWhatsApp={handleWhatsApp} />

          <Testimonials />
          
          <FAQ faqs={faqs} />

          <Contact handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} />
        </Suspense>
      </main>

      <Footer phoneNumber={phoneNumber} handleWhatsApp={handleWhatsApp} scrollToSection={scrollToSection} />

      {/* Floating Action Buttons (Sticky Bottom) */}
      <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 z-50 flex justify-between md:justify-end md:gap-6 items-center pointer-events-none">
        {/* WhatsApp Button */}
        <div className="relative pointer-events-auto group">
          <div className="absolute inset-0 bg-[#25D366] rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          <InteractiveButton 
            id="floating-whatsapp-btn"
            onClick={handleWhatsApp}
            className="relative bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.6)] hover:bg-[#20b858] transition-transform flex items-center justify-center border-2 border-white hover:scale-110 active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-8 h-8 md:w-9 md:h-9" />
          </InteractiveButton>
        </div>

        {/* Call Button */}
        <div className="relative pointer-events-auto group">
          <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <InteractiveButton
            id="floating-call-btn"
            onClick={handleCall}
            className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 md:p-5 rounded-full shadow-[0_8px_30px_rgb(37,99,235,0.6)] hover:from-blue-700 hover:to-indigo-700 transition-transform flex items-center justify-center border-2 border-white hover:scale-110 active:scale-95"
            aria-label="Call Clinic"
          >
            <PhoneCall className="w-8 h-8 md:w-9 md:h-9" />
          </InteractiveButton>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <InteractiveButton
            id="back-to-top-btn"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-28 right-4 md:bottom-32 md:right-8 bg-slate-800 text-white p-3 rounded-full shadow-2xl hover:bg-slate-700 transition-colors z-40 border-2 border-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </InteractiveButton>
        )}
      </AnimatePresence>
    </div>
  );
}
