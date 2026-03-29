/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
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
  Send,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAiPopupOpen, setIsAiPopupOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Booking Form State
  const [bookingData, setBookingData] = useState({
    name: 'Prashant Vats',
    email: 'prashantvats80@gmail.com',
    phone: '7011961515',
    date: '',
    time: '',
    problem: ''
  });
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // AI Chat State
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Hello! I am the Oracle AI Assistant. How can I help you with your dental needs today?' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      chatRef.current = ai.chats.create({
        model: "gemini-3-flash-preview",
        config: {
          systemInstruction: "You are a helpful, professional, and friendly AI assistant for Oracle Dental Clinic. You can answer general dental questions, explain procedures like RCT, implants, and extractions, and help users understand the importance of oral hygiene. Do not provide medical diagnoses. Encourage users to book an appointment for specific issues. Keep your answers concise and easy to read.",
        },
      });
    } catch (e) {
      console.error("Failed to initialize AI:", e);
    }
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatMessages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim() || isChatLoading || !chatRef.current) return;

    const userMessage = chatInput.trim();
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsChatLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMessage });
      setChatMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setChatMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I encountered an error. Please try again later or call the clinic directly." }]);
    } finally {
      setIsChatLoading(false);
    }
  };

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

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsBookingConfirmed(true);
    }, 1500);
  };

  useEffect(() => {
    const handleScroll = () => {
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
  const whatsappMessage = "Hi, I would like to book an appointment.";

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
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-blue-600 focus:outline-none p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
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
                    className={`block px-4 py-3 text-base font-medium rounded-xl transition-all ${
                      activeSection === item.id 
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' 
                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600 border-l-4 border-transparent'
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* Hero Section (Above the Fold) */}
        <section className="relative bg-blue-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80" 
              alt="Happy Indian Patient" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
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
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight flex flex-wrap justify-center md:justify-start"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                  hidden: {}
                }}
              >
                {["Tooth", "Pain?"].map((word, i) => (
                  <motion.span key={i} className="mr-3 inline-block" variants={{ hidden: { opacity: 0, y: 20, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: "spring", damping: 12, stiffness: 100 } } }}>{word}</motion.span>
                ))}
                <div className="w-full hidden md:block"></div>
                {["Get", "Relief", "in", "30", "Minutes"].map((word, i) => (
                  <motion.span key={i + 10} className="text-amber-400 drop-shadow-md mr-3 inline-block" variants={{ hidden: { opacity: 0, y: 20, filter: 'blur(8px)' }, visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { type: "spring", damping: 12, stiffness: 100 } } }}>{word}</motion.span>
                ))}
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto md:mx-0 font-light flex flex-wrap justify-center md:justify-start"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.4 } },
                  hidden: {}
                }}
              >
                {"Expert dental care, painless treatments, and advanced implants at affordable prices.".split(" ").map((word, i) => (
                  <motion.span key={i} className="mr-2 inline-block" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>{word}</motion.span>
                ))}
              </motion.p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button onClick={handleCall} className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-lg py-4 px-8 rounded-xl shadow-xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2 active:scale-95 hover:scale-105 hover:-translate-y-1">
                  <PhoneCall className="w-5 h-5" /> Call Now
                </button>
                <a href="#contact" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 hover:scale-105 hover:-translate-y-1">
                  <Calendar className="w-5 h-5" /> Book Appointment
                </a>
              </div>
              <p className="mt-4 text-sm text-amber-300 font-medium flex items-center justify-center md:justify-start gap-1">
                <Clock className="w-4 h-4" /> Limited slots available today!
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2 mt-12 md:mt-0 z-10 flex justify-center md:justify-end"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/20 overflow-hidden shadow-2xl ring-4 ring-amber-500/30">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" 
                  alt="Expert Indian Dentist" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

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
            <button onClick={handleCall} className="w-full sm:w-auto bg-white text-red-600 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-red-50 transition-colors flex items-center justify-center gap-2 active:scale-95">
              <PhoneCall className="w-5 h-5" /> Call Emergency
            </button>
          </div>
        </motion.section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Premium Services</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive dental care tailored to your needs using the latest technology.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Dental Implants', desc: 'Permanent solution for missing teeth. Look and feel natural.', icon: ShieldCheck },
                { title: 'Root Canal (RCT)', desc: 'Painless single-sitting RCT to save your natural tooth.', icon: HeartPulse },
                { title: 'Teeth Whitening', desc: 'Get a brighter, confident smile in just one session.', icon: Star },
                { title: 'Braces / Smile Design', desc: 'Straighten teeth and design your perfect smile.', icon: Activity },
                { title: 'Tooth Extraction', desc: 'Safe and painless removal of damaged or wisdom teeth.', icon: Stethoscope },
                { title: 'General Dentistry', desc: 'Routine checkups, cleaning, and fillings for oral health.', icon: CheckCircle2 },
              ].map((service, idx) => (
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
                  <p className="text-slate-600 mb-4">{service.desc}</p>
                  <a href="#contact" className="text-blue-600 font-semibold flex items-center gap-1 group-hover:text-blue-800">
                    Know More <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Oracle Dental?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">We combine expertise with compassion to deliver the best dental experience.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { title: 'Painless Treatment', icon: HeartPulse },
                { title: 'Experienced Dentist', icon: Stethoscope },
                { title: 'Advanced Technology', icon: Activity },
                { title: 'Affordable Pricing', icon: ShieldCheck },
                { title: 'Fully Sanitized', icon: ShieldCheck },
                { title: 'Emergency Care', icon: Activity },
                { title: 'Free Parking', icon: MapPin },
                { title: 'Modern Equipment', icon: Activity },
              ].map((feature, idx) => (
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

        {/* Testimonials */}
        <section id="testimonials" className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Patient Reviews</h2>
              <div className="flex justify-center items-center gap-2 mb-2">
                <span className="text-2xl font-bold text-slate-800">4.9</span>
                <div className="flex text-amber-500">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: "spring", stiffness: 200, damping: 10 }}
                    >
                      <Star className="w-5 h-5 fill-current" />
                    </motion.div>
                  ))}
                </div>
              </div>
              <p className="text-slate-600">Based on Google Reviews</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: 'Rahul Sharma', text: 'Best dental clinic in Ghaziabad. Got my RCT done painlessly. Highly recommend!' },
                { name: 'Priya Singh', text: 'Very clean clinic and professional doctor. The implant procedure was smooth and affordable.' },
                { name: 'Amit Kumar', text: 'Visited for severe toothache. The doctor was very patient and provided immediate relief. Excellent service.' }
              ].map((review, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
                >
                  <div className="flex text-amber-400 mb-3">
                    {[1, 2, 3, 4, 5].map((star, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -45 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 + i * 0.05 + 0.2, type: "spring", stiffness: 200, damping: 10 }}
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-slate-700 mb-4 italic">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{review.name}</h4>
                      <span className="text-xs text-slate-500">Verified Patient</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-slate-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-slate-600">Find answers to common questions about our services, policies, and more.</p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    aria-expanded={openFaqIndex === index}
                  >
                    <span className="font-semibold text-slate-900 text-lg pr-8">{faq.question}</span>
                    <motion.div
                      animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="flex-shrink-0 text-blue-600 bg-blue-50 p-2 rounded-full"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Map Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
                <AnimatePresence mode="wait">
                  {!isBookingConfirmed ? (
                    <motion.div
                      key="booking-form"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h2 className="text-2xl font-bold text-blue-900 mb-2">Book an Appointment</h2>
                      <p className="text-slate-600 mb-6">Select your preferred date and time, and we'll confirm your visit.</p>
                      
                      <form className="space-y-4" onSubmit={handleBookingSubmit}>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                          <input 
                            type="text" 
                            required 
                            value={bookingData.name}
                            onChange={(e) => setBookingData({...bookingData, name: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all shadow-sm" 
                            placeholder="John Doe" 
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                            <input 
                              type="tel" 
                              required 
                              value={bookingData.phone}
                              onChange={(e) => setBookingData({...bookingData, phone: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all shadow-sm" 
                              placeholder="+91 XXXXX XXXXX" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address *</label>
                            <input 
                              type="email" 
                              required 
                              value={bookingData.email}
                              onChange={(e) => setBookingData({...bookingData, email: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all shadow-sm" 
                              placeholder="you@example.com" 
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Date *</label>
                            <input 
                              type="date" 
                              required 
                              min={new Date().toISOString().split('T')[0]}
                              value={bookingData.date}
                              onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all shadow-sm" 
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-1">Preferred Time *</label>
                            <select 
                              required
                              value={bookingData.time}
                              onChange={(e) => setBookingData({...bookingData, time: e.target.value})}
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all shadow-sm"
                            >
                              <option value="" disabled>Select a time slot</option>
                              <optgroup label="Morning (10 AM - 2 PM)">
                                <option value="10:00 AM">10:00 AM</option>
                                <option value="11:00 AM">11:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="01:00 PM">01:00 PM</option>
                              </optgroup>
                              <optgroup label="Evening (5 PM - 9 PM)">
                                <option value="05:00 PM">05:00 PM</option>
                                <option value="06:00 PM">06:00 PM</option>
                                <option value="07:00 PM">07:00 PM</option>
                                <option value="08:00 PM">08:00 PM</option>
                              </optgroup>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Dental Problem (Optional)</label>
                          <textarea 
                            rows={3} 
                            value={bookingData.problem}
                            onChange={(e) => setBookingData({...bookingData, problem: e.target.value})}
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all shadow-sm" 
                            placeholder="Describe your issue..."
                          ></textarea>
                        </div>
                        <button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Processing...
                            </>
                          ) : (
                            'Confirm Appointment'
                          )}
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="booking-success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, type: "spring" }}
                      className="h-full flex flex-col items-center justify-center text-center py-12"
                    >
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-3xl font-bold text-slate-900 mb-2">Booking Confirmed!</h3>
                      <p className="text-slate-600 mb-6 max-w-sm mx-auto">
                        Thank you, <span className="font-semibold text-slate-900">{bookingData.name}</span>. Your appointment is scheduled for:
                      </p>
                      <div className="bg-white border border-slate-200 rounded-2xl p-6 w-full max-w-sm mb-8 shadow-sm">
                        <div className="flex items-center gap-3 mb-3 text-slate-700">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <span className="font-medium">{new Date(bookingData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-3 text-slate-700">
                          <Clock className="w-5 h-5 text-blue-600" />
                          <span className="font-medium">{bookingData.time}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => {
                          setIsBookingConfirmed(false);
                          setBookingData({ name: 'Prashant Vats', email: 'prashantvats80@gmail.com', phone: '7011961515', date: '', time: '', problem: '' });
                        }}
                        className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                      >
                        Book another appointment
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Map & Info */}
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Visit Our Clinic</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Location</h4>
                      <p className="text-slate-600 mt-1">Jaat Chowk, Chipiyana Buzurg,<br />near ABES Engineering College,<br />Ghaziabad, Uttar Pradesh</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Clinic Hours</h4>
                      <p className="text-slate-600 mt-1">Monday - Sunday<br />10:00 AM - 2:00 PM<br />5:00 PM - 9:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map Integration */}
                <div className="w-full h-64 md:h-80 bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-300 shadow-inner">
                  <iframe 
                    src="https://maps.google.com/maps?q=Oracle+Dental+Clinic+and+Implant+Center,+Jaat+Chowk,+Chipiyana+Buzurg,+near+ABES+Engineering+College,+Ghaziabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Oracle Dental Clinic Location"
                    className="absolute inset-0"
                  ></iframe>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                    <button onClick={handleDirections} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors whitespace-nowrap flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Open in Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 pb-32 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                  O
                </div>
                <span className="font-bold text-xl text-white">Oracle Dental</span>
              </div>
              <p className="text-sm text-slate-400 mb-4">
                Premium dental care and implant center in Ghaziabad. We bring smiles to life with advanced technology and expert care.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Patient Reviews</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Book Appointment</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-amber-500" />
                  <span>Jaat Chowk, Chipiyana Buzurg, near ABES Engineering College, Ghaziabad</span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-amber-500" />
                  <a href={`tel:${phoneNumber}`} className="hover:text-white transition-colors">+91 {phoneNumber}</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Oracle Dental Clinic and Implant Center. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 p-2 flex gap-2 pb-safe">
        <button 
          onClick={handleWhatsApp}
          className="flex-1 bg-[#25D366] text-white font-bold py-3 rounded-xl flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-wider">WhatsApp</span>
        </button>
        
        <button 
          onClick={handleCall}
          className="flex-1 bg-blue-600 text-white font-bold py-3 rounded-xl flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <PhoneCall className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-wider">Call Now</span>
        </button>
        
        <a 
          href="#contact"
          className="flex-1 bg-amber-500 text-blue-950 font-bold py-3 rounded-xl flex flex-col items-center justify-center gap-1 active:scale-95 transition-transform"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] uppercase tracking-wider">Book</span>
        </a>
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
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-40 md:bottom-24 right-4 md:right-8 bg-slate-800 text-white p-3 rounded-full shadow-2xl hover:bg-slate-700 transition-colors z-40 border-2 border-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* AI Assistant Floating Button */}
      {!isAiPopupOpen && (
        <button
          onClick={() => setIsAiPopupOpen(true)}
          className="fixed bottom-24 md:bottom-8 right-4 md:right-8 bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-all z-40 flex items-center justify-center animate-bounce border-4 border-white"
          aria-label="Chat with AI Assistant"
        >
          <Bot className="w-7 h-7" />
        </button>
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
            <button 
              onClick={() => setIsAiPopupOpen(false)} 
              className="text-white hover:bg-white/20 p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex-1 w-full h-full bg-slate-50 relative flex flex-col">
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-sm'}`}>
                    {msg.role === 'model' ? (
                      <div className="markdown-body text-sm prose prose-sm max-w-none">
                        <Markdown>{msg.text}</Markdown>
                      </div>
                    ) : (
                      <p className="text-sm">{msg.text}</p>
                    )}
                  </div>
                </div>
              ))}
              {isChatLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 text-slate-800 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                    <span className="text-sm text-slate-500">Thinking...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="p-4 bg-white border-t border-slate-200">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask a dental question..."
                  className="flex-1 px-4 py-2 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm"
                  disabled={isChatLoading}
                />
                <button
                  type="submit"
                  disabled={!chatInput.trim() || isChatLoading}
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center flex-shrink-0 w-10 h-10"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
