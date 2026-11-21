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
      className="py-12 px-4 sm:px-6 bg-slate-100 border-t border-slate-200"
    >
      <div className="max-w-5xl mx-auto bg-slate-950 text-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-amber-300">
              <Stethoscope className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Book Your Dental Appointment</span>
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold leading-tight">
              Schedule Your {treatmentName} in Chipiyana Buzurg, Ghaziabad
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Consult <strong>{GBP_CONFIG.DOCTOR_TITLE}</strong> at{' '}
              <strong>{GBP_CONFIG.BUSINESS_NAME}</strong> for a thorough oral examination, clear
              treatment options, and transparent cost guidance before any procedure begins.
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300 pt-1">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{GBP_CONFIG.ADDRESS}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <span>{GBP_CONFIG.HOURS}</span>
              </p>
              <p className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                <span>Direct Helpline &amp; WhatsApp: {GBP_CONFIG.PHONE_DISPLAY}</span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Book ${treatmentName} appointment on WhatsApp`}
              onClick={() =>
                trackClinicEvent('appointment_cta_click', {
                  placement: 'treatment_bottom_cta_whatsapp',
                  service_category: categorySlug,
                })
              }
              className="w-full min-h-[48px] bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm sm:text-base py-3.5 px-5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
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
              className="w-full min-h-[48px] bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base py-3.5 px-5 rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
            >
              <PhoneCall className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Call {GBP_CONFIG.PHONE_DISPLAY}</span>
            </a>
            <a
              href={GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Oracle Dental Clinic directions on Google Maps"
              onClick={() =>
                trackClinicEvent('directions_click', {
                  placement: 'treatment_bottom_cta_maps',
                  service_category: categorySlug,
                })
              }
              className="w-full min-h-[44px] bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold text-sm py-3 px-5 rounded-xl transition-colors flex items-center justify-center gap-2 text-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              <MapPin className="w-4 h-4 shrink-0 text-amber-300" aria-hidden="true" />
              <span>Get Google Maps Directions</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentAppointmentCTA;
