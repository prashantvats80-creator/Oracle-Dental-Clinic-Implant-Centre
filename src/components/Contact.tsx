import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MessageCircle, MapPin, Clock, PhoneCall } from 'lucide-react';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { trackClinicEvent } from '../utils/analytics';

interface ContactProps {
  handleWhatsApp?: () => void;
  handleDirections?: () => void;
}

const Contact: React.FC<ContactProps> = () => {
  const [showMap, setShowMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '150px' }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-16 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Booking Card */}
          <div
            id="contact-booking-card"
            className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 flex flex-col justify-center items-center text-center"
          >
            <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-5">
              <Calendar className="w-7 h-7" aria-hidden="true" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-950 mb-3">
              Book Your Dental Appointment
            </h2>
            <p className="text-slate-600 mb-6 max-w-md text-sm md:text-base leading-relaxed">
              Message us directly on WhatsApp or call{' '}
              <strong>{GBP_CONFIG.BUSINESS_NAME}</strong> to schedule your consultation with{' '}
              <strong>{GBP_CONFIG.DOCTOR_TITLE}</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                id="contact-whatsapp-btn"
                href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book dental appointment on WhatsApp"
                onClick={() =>
                  trackClinicEvent('appointment_cta_click', {
                    placement: 'contact_section_whatsapp',
                    interaction_label: 'book_whatsapp',
                  })
                }
                className="min-h-[48px] bg-[#16A34A] hover:bg-[#15803D] text-white font-bold py-3.5 px-7 rounded-xl shadow-sm transition-colors text-base flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Book on WhatsApp</span>
              </a>
              <a
                id="contact-call-btn"
                href={GBP_CONFIG.CALL_URL}
                aria-label={`Call Oracle Dental Clinic at ${GBP_CONFIG.PHONE_DISPLAY}`}
                onClick={() =>
                  trackClinicEvent('call_click', {
                    placement: 'contact_section_call',
                    interaction_label: 'call_clinic',
                  })
                }
                className="min-h-[48px] bg-blue-700 hover:bg-blue-800 text-white font-bold py-3.5 px-7 rounded-xl shadow-sm transition-colors text-base flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
              >
                <PhoneCall className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Call {GBP_CONFIG.PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Verified NAP & Lazy Directions Map */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-blue-950 mb-6">Visit Oracle Dental Clinic</h2>

            <div className="space-y-5 mb-7">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Verified Clinic Address</h3>
                  <p className="text-slate-600 mt-1 leading-relaxed text-sm">{GBP_CONFIG.ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Opening Hours</h3>
                  <p className="text-slate-600 mt-1 text-sm leading-relaxed">{GBP_CONFIG.HOURS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Phone &amp; WhatsApp</h3>
                  <p className="text-slate-600 mt-1 text-sm">
                    <a
                      href={GBP_CONFIG.CALL_URL}
                      onClick={() =>
                        trackClinicEvent('call_click', {
                          placement: 'contact_nap_phone_link',
                        })
                      }
                      className="font-bold text-blue-800 hover:underline"
                    >
                      {GBP_CONFIG.PHONE_DISPLAY}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Lazy-Loaded Google Map Embed */}
            <div
              id="contact-map-container"
              ref={mapContainerRef}
              onClick={() => setShowMap(true)}
              className="w-full h-64 md:h-72 bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200 flex items-center justify-center"
            >
              {showMap ? (
                <iframe
                  src="https://maps.google.com/maps?q=Oracle+Dental+Clinic+and+Implant+Center,+Shop+No+47,+KTS+Complex,+Jaat+Chowk,+Near+Dolphin+Public+School,+Chipiyana+Buzurg,+Ghaziabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oracle Dental Clinic & Implant Center Location Map"
                  className="absolute inset-0"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setShowMap(true)}
                  className="w-full h-full bg-slate-50 flex flex-col items-center justify-center p-4 text-center cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mb-2">
                    <MapPin className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <span className="font-bold text-slate-800 text-sm">Load Interactive Clinic Map</span>
                  <span className="text-xs text-slate-500 mt-1">Saves mobile data until needed</span>
                </button>
              )}

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
                <a
                  id="contact-directions-btn"
                  href={GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Google Maps directions to Oracle Dental Clinic"
                  onClick={(e) => {
                    e.stopPropagation();
                    trackClinicEvent('directions_click', {
                      placement: 'contact_map_directions',
                    });
                  }}
                  className="min-h-[44px] bg-blue-700 text-white font-bold py-2.5 px-5 rounded-full shadow-md hover:bg-blue-800 transition-colors whitespace-nowrap inline-flex items-center gap-2 border-2 border-white text-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
                >
                  <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
