import React from 'react';
import { PhoneCall, MessageCircle, MapPin, Clock, Stethoscope } from 'lucide-react';
import { GBP_CONFIG, getTreatmentWhatsAppUrl } from '../config/googleBusinessProfile';
import { trackClinicEvent } from '../utils/analytics';

interface TreatmentAppointmentCTAProps {
  treatmentName?: string;
}

export const TreatmentAppointmentCTA: React.FC<TreatmentAppointmentCTAProps> = ({
  treatmentName = 'Dental Consultation',
}) => {
  const whatsappHref = getTreatmentWhatsAppUrl(treatmentName);
  const categorySlug = treatmentName.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');

  return (
    <section
      aria-label={`Book ${treatmentName} appointment`}
      className="py-12 px-4 sm:px-6 bg-[#FFF8EC] border-t border-[#087B57]/10"
    >
      <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#087B57] via-[#066647] to-[#00A99D] text-white rounded-3xl p-6 sm:p-10 shadow-lg">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-[#FFD36A]">
              <Stethoscope className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Book Your Dental Appointment</span>
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold leading-tight">
              Schedule Your {treatmentName} in Chipiyana Buzurg, Ghaziabad
            </h2>
            <p className="text-[#E5F5EC] text-sm sm:text-base leading-relaxed">
              Consult <strong>{GBP_CONFIG.DOCTOR_TITLE}</strong> at{' '}
              <strong>{GBP_CONFIG.BUSINESS_NAME}</strong> for a thorough oral examination, clear
              treatment options, and transparent cost guidance before any procedure begins.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-white/95 pt-1">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FFD36A] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{GBP_CONFIG.ADDRESS}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FFD36A] shrink-0" aria-hidden="true" />
                <span>{GBP_CONFIG.HOURS}</span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#FFD36A] shrink-0" aria-hidden="true" />
                <span>Direct Helpline &amp; WhatsApp: {GBP_CONFIG.PHONE_DISPLAY}</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Book ${treatmentName} on WhatsApp — Oracle Dental Clinic`}
              onClick={() =>
                trackClinicEvent('appointment_cta_click', {
                  placement: 'treatment_bottom_cta_whatsapp',
                  service_category: categorySlug,
                })
              }
              className="w-full min-h-[48px] bg-[#C63621] hover:bg-[#A82B18] text-white font-bold text-sm sm:text-base py-3.5 px-5 rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2 text-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD36A]"
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Book {treatmentName} on WhatsApp</span>
            </a>
            <a
              href={GBP_CONFIG.CALL_URL}
              aria-label={`Call ${GBP_CONFIG.PHONE_DISPLAY} to book ${treatmentName}`}
              onClick={() =>
                trackClinicEvent('call_click', {
                  placement: 'treatment_bottom_cta_call',
                  service_category: categorySlug,
                })
              }
              className="w-full min-h-[48px] bg-white hover:bg-[#FFF8EC] text-[#087B57] font-bold text-sm sm:text-base py-3.5 px-5 rounded-2xl shadow-md transition-colors flex items-center justify-center gap-2 text-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD36A]"
            >
              <PhoneCall className="w-5 h-5 shrink-0 text-[#B84D00]" aria-hidden="true" />
              <span>Call {GBP_CONFIG.PHONE_DISPLAY}</span>
            </a>
            <a
              href={GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Google Maps Directions to Oracle Dental Clinic"
              onClick={() =>
                trackClinicEvent('directions_click', {
                  placement: 'treatment_bottom_cta_maps',
                  service_category: categorySlug,
                })
              }
              className="w-full min-h-[44px] bg-white/15 hover:bg-white/25 text-white border border-white/25 font-semibold text-sm py-3 px-5 rounded-2xl transition-colors flex items-center justify-center gap-2 text-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              <MapPin className="w-4 h-4 shrink-0 text-[#FFD36A]" aria-hidden="true" />
              <span>Get Google Maps Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentAppointmentCTA;
