/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import {
  PhoneCall,
  MessageCircle,
  Calendar,
  Clock,
  MapPin,
  Star,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
  HeartPulse,
  Activity,
  ChevronRight,
  ChevronDown,
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

const Hero = lazy(() => import('./components/Hero'));
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
      question: "Is a root canal treatment (RCT) painful?",
      answer: "A root canal is designed to relieve pain, not cause it. Thanks to advanced local anesthetics and modern techniques, the procedure itself is virtually painless, similar to getting a routine filling. You might experience slight tenderness for a few days afterward as the area heals."
    },
    {
      question: "Is tooth extraction painful?",
      answer: "With modern anesthesia, tooth extraction is typically painless during the procedure. You may feel some pressure, but no sharp pain. Mild discomfort during recovery is normal and can be easily managed with prescribed or over-the-counter pain relievers."
    },
    {
      question: "Is the dental implant procedure painful?",
      answer: "Your comfort is our top priority. Dental implant surgery is performed under local anesthesia, ensuring you feel no pain during the procedure. Most patients report that the post-operative discomfort is less than that of a tooth extraction and subsides quickly."
    },
    {
      question: "How often should I get a dental check-up?",
      answer: "We recommend visiting us for a routine check-up and professional cleaning every six months. However, depending on your specific oral health needs, we might suggest more frequent visits to maintain optimal dental hygiene."
    },
    {
      question: "How can I safely whiten my teeth?",
      answer: "Professional teeth whitening is the safest and most effective method. We offer both in-office treatments for immediate results and custom take-home kits. Over-the-counter products can sometimes cause sensitivity or damage enamel if used incorrectly."
    },
    {
      question: "Are dental X-rays safe?",
      answer: "Yes, dental X-rays are highly safe. Modern digital X-rays emit extremely low levels of radiation—much less than traditional film X-rays and even less than the natural background radiation you are exposed to daily. We also use lead aprons for added protection."
    },
    {
      question: "At what age should my child first visit the dentist?",
      answer: "The American Dental Association recommends that a child's first dental visit should occur within six months after their first tooth appears, but no later than their first birthday. Early visits help establish a dental home and prevent early childhood cavities."
    },
    {
      question: "Do you offer emergency dental services?",
      answer: "Yes, we provide emergency dental care. If you are experiencing severe pain, a knocked-out tooth, or swelling, please call our clinic immediately. We will do our best to accommodate you on the same day."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we accept most major dental insurance plans. Please contact our front desk with your insurance details before your appointment, and we will be happy to verify your coverage and explain your benefits."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We kindly request at least 24 hours' notice if you need to cancel or reschedule your appointment. This allows us to offer the time slot to another patient in need of care."
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
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 400) {
            setShowBackToTop(true);
          } else {
            setShowBackToTop(false);
          }

          const sections = ['services', 'why-us', 'testimonials', 'faq', 'contact'];
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

  const phoneNumber = "7011961515";
  const whatsappNumber = "917011961515"; // Assuming India country code
  const whatsappMessage = "I want to book an appointment.";

  const handleCall = () => window.open(`tel:${phoneNumber}`, '_self');
  const handleWhatsApp = () => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  const handleDirections = () => window.open('https://maps.app.goo.gl/FLz3muaqFN5rjg4s5', '_blank');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20 md:pb-0">
      {/* Top Bar (Desktop) */}
      <div className="hidden md:flex bg-blue-900 text-white text-sm py-2 px-6 justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-amber-400" /> Mon-Sun: 10 AM - 2 PM, 5 PM - 9 PM</span>
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-amber-400" /> Chipiyana Buzurg, Ghaziabad</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${phoneNumber}`} className="flex items-center gap-1 hover:text-amber-400 transition-colors">
            <PhoneCall className="w-4 h-4" /> +91 {phoneNumber}
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-40 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-md">
                O
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight text-blue-900">Oracle Dental</span>
                <span className="text-xs text-amber-600 font-medium">Clinic & Implant Center</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 items-center">
              {[
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
                onClick={toggleMute}
                className="text-slate-500 hover:text-blue-600 p-2 rounded-full transition-colors"
                aria-label={isMuted ? "Unmute music" : "Mute music"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </InteractiveButton>
              <InteractiveButton
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
        <Suspense fallback={null}>
          <Hero handleCall={handleCall} handleWhatsApp={handleWhatsApp} />

          {/* Emergency Banner */}
          <motion.section 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-red-600 text-white py-4 px-4 shadow-inner relative z-30"
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full animate-pulse">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Severe Tooth Pain or Emergency?</h3>
                  <p className="text-red-100 text-sm">Don't wait. We provide immediate relief.</p>
                </div>
              </div>
              <InteractiveButton onClick={handleCall} className="w-full sm:w-auto bg-white text-red-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-red-50 transition-colors flex items-center justify-center gap-2 active:scale-95">
                <PhoneCall className="w-5 h-5" /> Call Emergency
              </InteractiveButton>
            </div>
          </motion.section>

          <Services handleWhatsApp={handleWhatsApp} />

          <WhyUs handleWhatsApp={handleWhatsApp} />

          <Testimonials />
          
          <FAQ faqs={faqs} />

          <Contact handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} />
        </Suspense>
      </main>

      <Footer phoneNumber={phoneNumber} handleWhatsApp={handleWhatsApp} scrollToSection={scrollToSection} />

      {/* Floating Action Buttons (Sticky Bottom) */}
      <div className="fixed bottom-6 left-4 right-4 z-50 flex justify-between items-center pointer-events-none">
        {/* WhatsApp Button */}
        <InteractiveButton 
          onClick={handleWhatsApp}
          className="pointer-events-auto bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20b858] transition-all flex items-center justify-center border-4 border-white"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
        </InteractiveButton>

        {/* Call Button */}
        <InteractiveButton
          onClick={handleCall}
          className="pointer-events-auto bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all flex items-center justify-center border-4 border-white"
          aria-label="Call Clinic"
        >
          <PhoneCall className="w-7 h-7" />
        </InteractiveButton>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <InteractiveButton
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-4 md:bottom-24 md:right-8 bg-slate-800 text-white p-3 rounded-full shadow-2xl hover:bg-slate-700 transition-colors z-40 border-2 border-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </InteractiveButton>
        )}
      </AnimatePresence>
    </div>
  );
}
