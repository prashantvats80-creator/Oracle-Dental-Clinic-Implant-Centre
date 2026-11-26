import React, { useState } from 'react';
import { Calendar, MessageCircle, MapPin, Clock, PhoneCall } from 'lucide-react';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { trackClinicEvent } from '../utils/analytics';

interface ContactProps {
  handleWhatsApp?: () => void;
  handleDirections?: () => void;
}

const Contact: React.FC<ContactProps> = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <section id="contact" className="cv-auto py-14 sm:py-16 bg-white scroll-mt-20 border-t border-[#087B57]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          {/* Vibrant Booking Card */}
          <div
            id="contact-booking-card"
            className="relative overflow-hidden bg-gradient-to-br from-[#E5F5EC] via-[#FFF8EC] to-[#E5F5EC] p-6 md:p-10 rounded-3xl border border-[#087B57]/15 shadow-sm flex flex-col justify-center items-center text-center"
          >
            <div aria-hidden="true" className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#FFD36A]/35 pointer-events-none" />
            <div aria-hidden="true" className="absolute -bottom-10 -left-10 w-28 h-28 rounded-full bg-[#00A99D]/15 pointer-events-none" />

            <div className="relative w-14 h-14 bg-gradient-to-br from-[#FF654F] to-[#FF8A24] text-white rounded-2xl flex items-center justify-center mb-5 shadow-md">
              <Calendar className="w-7 h-7" aria-hidden="true" />
            </div>
            <p className="relative text-xs font-extrabold uppercase tracking-wider text-[#B84D00] mb-1">
              Open Daily: 9:00 AM – 9:00 PM • Quick Confirmation
            </p>
            <h2 className="relative text-2xl sm:text-3xl font-extrabold text-[#087B57] mb-3">
              Book Your Dental Appointment
            </h2>
            <p className="relative text-[#26352F]/85 mb-6 max-w-md text-sm md:text-base leading-relaxed">
              Message us directly on WhatsApp or call{' '}
              <strong>{GBP_CONFIG.BUSINESS_NAME}</strong> to schedule your consultation with{' '}
              <strong>{GBP_CONFIG.DOCTOR_TITLE}</strong> at our Jaat Chowk, Chipiyana Buzurg clinic.
            </p>
            <div className="relative flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                id="contact-whatsapp-btn"
                href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book on WhatsApp — Oracle Dental Clinic"
                onClick={() =>
                  trackClinicEvent('appointment_cta_click', {
                    placement: 'contact_section_whatsapp',
                    interaction_label: 'book_whatsapp',
                  })
                }
                className="min-h-[48px] bg-gradient-to-r from-[#C93B25] to-[#B84D00] hover:from-[#A92D1A] hover:to-[#963E00] text-white font-extrabold py-3.5 px-7 rounded-full shadow-[0_8px_20px_rgba(201,59,37,0.28)] transition-all text-base flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD36A]"
              >
                <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Book on WhatsApp</span>
              </a>
              <a
                id="contact-call-btn"
                href={GBP_CONFIG.CALL_URL}
                aria-label={`Call ${GBP_CONFIG.PHONE_DISPLAY} — Oracle Dental Clinic`}
                onClick={() =>
                  trackClinicEvent('call_click', {
                    placement: 'contact_section_call',
                    interaction_label: 'call_clinic',
                  })
                }
                className="min-h-[48px] bg-[#087B57] hover:bg-[#066647] text-white font-extrabold py-3.5 px-7 rounded-full shadow-sm transition-colors text-base flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00A99D]/40"
              >
                <PhoneCall className="w-5 h-5 shrink-0" aria-hidden="true" />
                <span>Call {GBP_CONFIG.PHONE_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Verified NAP & 2G-Friendly Directions Map */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#B84D00] mb-1">
              Chipiyana Buzurg, Ghaziabad
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#087B57] mb-5">
              Visit Oracle Dental Clinic
            </h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#E5F5EC] text-[#087B57] rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-[#26352F]">Verified Clinic Address</h3>
                  <a
                    href={GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClinicEvent('directions_click', {
                        placement: 'contact_nap_address_link',
                      })
                    }
                    className="block text-[#26352F]/85 hover:text-[#087B57] hover:underline mt-0.5 leading-relaxed text-sm transition-colors"
                  >
                    {GBP_CONFIG.ADDRESS}
                  </a>
                  <p className="text-xs text-[#087B57] font-medium mt-1">
                    Conveniently reachable within 6 km for patients from Chipiyana Buzurg, Jaat Chowk, Crossings Republik, ABES Engineering College area, Shahberi, Chappraula, Noida Extension, Greater Noida West &amp; Lal Kuan.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#FFF8EC] text-[#FF8A24] rounded-2xl flex items-center justify-center shrink-0 border border-[#FF8A24]/20">
                  <Clock className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-[#26352F]">Opening Hours</h3>
                  <p className="text-[#26352F]/80 mt-0.5 text-sm leading-relaxed">{GBP_CONFIG.HOURS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-[#E5F5EC] text-[#00A99D] rounded-2xl flex items-center justify-center shrink-0">
                  <PhoneCall className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-[#26352F]">Phone &amp; WhatsApp</h3>
                  <p className="text-[#26352F]/80 mt-0.5 text-sm">
                    <a
                      href={GBP_CONFIG.CALL_URL}
                      onClick={() =>
                        trackClinicEvent('call_click', {
                          placement: 'contact_nap_phone_link',
                        })
                      }
                      className="font-extrabold text-[#087B57] hover:text-[#FF654F] hover:underline"
                    >
                      {GBP_CONFIG.PHONE_DISPLAY}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Click-to-Load Google Map Embed (Zero Third-Party Map JS Until Requested) */}
            <div
              id="contact-map-container"
              className="w-full h-64 md:h-72 bg-[#FFF8EC] rounded-3xl overflow-hidden relative border border-[#087B57]/15 flex items-center justify-center"
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
                  className="w-full h-full bg-gradient-to-br from-[#FFF8EC] to-[#E5F5EC] flex flex-col items-center justify-center p-4 pb-16 text-center cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-full bg-white text-[#087B57] shadow-xs flex items-center justify-center mb-2">
                    <MapPin className="w-6 h-6 text-[#FF654F]" aria-hidden="true" />
                  </div>
                  <span className="font-extrabold text-[#26352F] text-sm">Tap to Load Interactive Map</span>
                  <span className="text-xs text-[#26352F]/65 mt-1">Lightweight mode — saves mobile data until tapped</span>
                </button>
              )}

              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
                <a
                  id="contact-directions-btn"
                  href={GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open in Google Maps — Oracle Dental Clinic Directions"
                  onClick={(e) => {
                    e.stopPropagation();
                    trackClinicEvent('directions_click', {
                      placement: 'contact_map_directions',
                    });
                  }}
                  className="min-h-[44px] bg-[#087B57] text-white font-bold py-2.5 px-5 rounded-full shadow-md hover:bg-[#066647] transition-colors whitespace-nowrap inline-flex items-center gap-2 border-2 border-white text-sm focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD36A]"
                >
                  <MapPin className="w-4 h-4 shrink-0 text-[#FFD36A]" aria-hidden="true" />
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
