import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Calendar, MessageCircle, MapPin, Clock } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { GBP_CONFIG } from '../config/googleBusinessProfile';

interface ContactProps {
  handleWhatsApp: () => void;
  handleDirections: () => void;
}

const Contact: React.FC<ContactProps> = ({ handleWhatsApp, handleDirections }) => {
  const [showMap, setShowMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <section id="contact" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Form Replacement */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            id="contact-booking-card" 
            className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-center items-center text-center"
          >
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Smile Brighter?</h2>
            <p className="text-slate-600 mb-8 max-w-md text-sm md:text-base leading-relaxed">
              Book your appointment easily through WhatsApp. Our specialist team at <strong>Oracle Dental Clinic & Implant Center</strong> will respond quickly to confirm your preferred date and time.
            </p>
            <InteractiveButton 
              id="contact-whatsapp-btn"
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Book via WhatsApp
            </InteractiveButton>
          </motion.div>

          {/* Map & Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Visit Our Clinic Location</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Clinic Address</h4>
                  <p className="text-slate-600 mt-1 leading-relaxed text-sm">
                    {GBP_CONFIG.ADDRESS}
                  </p>
                  <p className="text-xs text-indigo-600 font-semibold mt-1.5">
                    📍 Located at Chipiyana Buzurg, Ghaziabad near the Ghaziabad-Greater Noida Border.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Clinic Hours</h4>
                  <p className="text-slate-600 mt-1 text-sm leading-relaxed">
                    Monday - Sunday<br />
                    10:00 AM - 2:00 PM<br />
                    5:00 PM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map Integration */}
            <div 
              id="contact-map-container" 
              ref={mapContainerRef}
              onClick={() => setShowMap(true)}
              className="w-full h-64 md:h-80 bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-300 shadow-inner group cursor-pointer flex items-center justify-center"
            >
              {showMap ? (
                <iframe 
                  src="https://maps.google.com/maps?q=Oracle+Dental+Clinic+and+Implant+Center,+Jaat+Chowk,+Chipiyana+Buzurg,+near+ABES+Engineering+College,+Ghaziabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oracle Dental Clinic Location on Google Maps"
                  className="absolute inset-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
                ></iframe>
              ) : (
                <div className="absolute inset-0 bg-slate-50 flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-2 animate-pulse">
                    <MapPin className="w-6 h-6 animate-bounce" />
                  </div>
                  <span className="font-extrabold text-slate-800 text-sm">Interactive Map Location</span>
                  <span className="text-xs text-slate-500 mt-1 font-medium">Click to activate or scroll to load</span>
                </div>
              )}
              
              {/* Overlay to ensure scrolling isn't hijacked */}
              <div className="absolute inset-0 bg-blue-900/5 pointer-events-none"></div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-auto">
                <InteractiveButton 
                  id="contact-directions-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDirections();
                  }} 
                  className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors whitespace-nowrap flex items-center gap-2 border-2 border-white ring-2 ring-blue-600 shadow-blue-900/50"
                >
                  <MapPin className="w-5 h-5" /> Open in Google Maps
                </InteractiveButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
