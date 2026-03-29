/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
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
  Menu,
  X,
  Bot
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAiPopupOpen, setIsAiPopupOpen] = useState(false);

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
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-600 hover:text-blue-600 font-medium">Services</a>
              <a href="#why-us" className="text-slate-600 hover:text-blue-600 font-medium">Why Us</a>
              <a href="#testimonials" className="text-slate-600 hover:text-blue-600 font-medium">Reviews</a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 font-medium">Contact</a>
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
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-4 space-y-1">
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Services</a>
              <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Why Choose Us</a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Patient Reviews</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-md">Contact Us</a>
            </div>
          </div>
        )}
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
                Tooth Pain? <br className="hidden md:block" />
                <span className="text-amber-400 drop-shadow-md">Get Relief in 30 Minutes</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto md:mx-0 font-light">
                Expert dental care, painless treatments, and advanced implants at affordable prices.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button onClick={handleCall} className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-lg py-4 px-8 rounded-xl shadow-xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2 active:scale-95 hover:-translate-y-1">
                  <PhoneCall className="w-5 h-5" /> Call Now
                </button>
                <a href="#contact" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 active:scale-95 hover:-translate-y-1">
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
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <service.icon className="w-6 h-6" />
                  </div>
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
                  className="bg-white p-6 rounded-2xl text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow hover:border-blue-100"
                >
                  <div className="w-14 h-14 mx-auto bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-7 h-7" />
                  </div>
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
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
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
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex text-amber-400 mb-3">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
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

        {/* Contact & Map Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">Book an Appointment</h2>
                <p className="text-slate-600 mb-6">Fill out the form below and we'll get back to you shortly.</p>
                
                <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you! We will contact you shortly.'); }}>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all shadow-sm" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all shadow-sm" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Dental Problem (Optional)</label>
                    <textarea rows={3} className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all shadow-sm" placeholder="Describe your issue..."></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1 text-lg">
                    Submit Request
                  </button>
                </form>
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
          <div className="flex-1 w-full h-full bg-slate-50 relative">
            <iframe
              src="https://www.jotform.com/agent/019d3782be707a97aab7f8c3f25cd6abb621"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allow="microphone"
              title="Oracle Dental AI Assistant"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
