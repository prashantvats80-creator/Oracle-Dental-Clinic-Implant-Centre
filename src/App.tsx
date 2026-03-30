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
  Bot,
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

const MusicToggle = () => {
  const { isPlaying, toggleMusic } = useSound();
  return (
    <button onClick={toggleMusic} className="text-white hover:text-amber-400 transition-colors">
      {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
    </button>
  );
};

export default function App() {
  return (
    <SoundProvider>
      <AppContent />
    </SoundProvider>
  );
}

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAiPopupOpen, setIsAiPopupOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

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
          <MusicToggle />
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
            <nav className="hidden md:flex space-x-8 items-center">
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
                  className={`font-medium transition-colors relative py-2 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div 
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full"
                    />
                  )}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
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
              className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl overflow-hidden"
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
                    onClick={() => setIsMenuOpen(false)} 
                    onTouchStart={() => setIsMenuOpen(false)}
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
                  <MusicToggle />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
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

          <WhyUs />

          <Testimonials />

          <FAQ faqs={faqs} openFaqIndex={openFaqIndex} setOpenFaqIndex={setOpenFaqIndex} />

          <Contact handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} />
        </Suspense>
      </main>

      <Footer phoneNumber={phoneNumber} handleWhatsApp={handleWhatsApp} />

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 p-2 flex gap-2 pb-safe">
        <InteractiveButton 
          onClick={handleWhatsApp}
          className="flex-1 bg-[#25D366] text-white font-bold py-3 rounded-xl flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-wider">Book via WhatsApp</span>
        </InteractiveButton>
        
        <InteractiveButton 
          onClick={handleCall}
          className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <PhoneCall className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-wider">Call Now</span>
        </InteractiveButton>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/7011961515"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 md:bottom-8 left-4 md:left-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20b858] transition-all z-40 flex items-center justify-center hover:scale-110 border-4 border-white"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <InteractiveButton
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-40 md:bottom-24 right-4 md:right-8 bg-slate-800 text-white p-3 rounded-full shadow-2xl hover:bg-slate-700 transition-colors z-40 border-2 border-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </InteractiveButton>
        )}
      </AnimatePresence>

      {/* AI Assistant Floating Button */}
      {!isAiPopupOpen && (
        <InteractiveButton
          onClick={() => setIsAiPopupOpen(true)}
          className="fixed bottom-24 md:bottom-8 right-4 md:right-8 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all z-40 flex items-center justify-center animate-bounce border-4 border-white"
          aria-label="Chat with AI Assistant"
        >
          <Bot className="w-7 h-7" />
        </InteractiveButton>
      )}

      {/* AI Assistant Popup Modal */}
      {isAiPopupOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-8 md:right-8 z-[60] flex flex-col bg-white md:rounded-2xl shadow-2xl overflow-hidden md:w-[400px] md:h-[600px] h-full w-full">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-md z-10">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold leading-tight">Oracle AI Assistant</h3>
                <p className="text-[10px] text-blue-100 uppercase tracking-wider">Online 24/7</p>
              </div>
            </div>
            <InteractiveButton 
              onClick={() => setIsAiPopupOpen(false)} 
              className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </InteractiveButton>
          </div>
          <div className="flex-1 w-full h-full bg-slate-50 relative flex flex-col">
            <iframe
              src="https://www.jotform.com/agent/019d3782be707a97aab7f8c3f25cd6abb621"
              className="w-full h-full border-none"
              title="Oracle Dental AI Assistant"
            />
          </div>
        </div>
      )}
    </div>
  );
}
