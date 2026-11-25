import React from 'react';
import { PhoneCall, CalendarCheck2, MapPin, Clock, CheckCircle2, Stethoscope } from 'lucide-react';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { trackClinicEvent } from '../utils/analytics';

/**
 * Meet Our Doctor / Doctor Profile Section
 * - Reuses the exact existing verified photograph of Dr. Prashant Kumar Vats (GBP_CONFIG.DOCTOR_IMAGE)
 *   without replacing, altering, or distorting it.
 * - Uses only verified qualifications and clinic details.
 */
const DoctorProfile: React.FC = () => {
  return (
    <section
      id="doctor-profile"
      aria-labelledby="doctor-profile-heading"
      className="py-12 sm:py-16 bg-[#E5F5EC] border-b border-[#087B57]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#087B57]/15 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Column: Existing Verified Doctor Photograph (Preserved Original) */}
            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-[#087B57] via-[#00A99D] to-[#087B57] flex items-center justify-center relative overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-[#FFD36A]/30 pointer-events-none"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-[#FF8A24]/30 pointer-events-none"
              />
              <div className="relative w-full max-w-xs sm:max-w-sm rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-[#FFF8EC]">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/assets/images/dr-prashant-vats-400.webp 400w, /assets/images/dr-prashant-vats-768.webp 768w"
                    sizes="(max-width: 640px) 85vw, 384px"
                  />
                  <img
                    src="/assets/images/dr-prashant-vats.jpg"
                    alt="Dr. Prashant Kumar Vats, BDS, MIDA – Dental Surgeon & Implantologist at Oracle Dental Clinic & Implant Center"
                    width="384"
                    height="420"
                    className="w-full h-72 sm:h-96 object-cover object-top block"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div className="bg-white px-5 py-3.5 text-center border-t-2 border-[#FFD36A]">
                  <p className="font-extrabold text-base text-[#087B57] leading-tight">
                    {GBP_CONFIG.DOCTOR_NAME}
                  </p>
                  <p className="text-xs font-bold text-[#FF654F] mt-0.5">
                    {GBP_CONFIG.DOCTOR_ROLE} | {GBP_CONFIG.DOCTOR_QUALIFICATION}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Doctor Credentials & Clinic Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider uppercase text-[#FF8A24]">
                <Stethoscope className="w-4 h-4 text-[#00A99D]" aria-hidden="true" />
                <span>Meet Our Doctor</span>
              </div>

              <div>
                <h2
                  id="doctor-profile-heading"
                  className="text-2xl sm:text-4xl font-extrabold text-[#26352F] tracking-tight leading-tight"
                >
                  {GBP_CONFIG.DOCTOR_NAME}
                </h2>
                <p className="text-base sm:text-lg font-extrabold text-[#087B57] mt-1">
                  {GBP_CONFIG.DOCTOR_ROLE} | {GBP_CONFIG.DOCTOR_QUALIFICATION}
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#26352F]/85 leading-relaxed">
                At <strong>{GBP_CONFIG.BUSINESS_NAME}</strong> in Chipiyana Buzurg, Ghaziabad,{' '}
                {GBP_CONFIG.DOCTOR_TITLE} provides patient-first diagnosis, honest treatment
                explanations, and comfortable dental care for children, adults, and seniors. Every
                consultation focuses on transparent options, strict sterilization hygiene, and
                long-term oral health.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5 bg-[#FFF8EC] rounded-2xl p-3.5 border border-[#FF8A24]/25">
                  <CheckCircle2 className="w-4 h-4 text-[#FF8A24] mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-semibold text-[#26352F]">
                    Dental Implants, Root Canal (RCT), Zirconia Crowns &amp; Wisdom Tooth Surgery
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#E5F5EC]/75 rounded-2xl p-3.5 border border-[#00A99D]/25">
                  <CheckCircle2 className="w-4 h-4 text-[#087B57] mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-semibold text-[#26352F]">
                    Braces, Clear Aligners, Veneers, Smile Makeovers &amp; Kids Dentistry
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#26352F]/85 pt-1 border-t border-[#E5F5EC]">
                <p className="flex items-start gap-2 pt-3">
                  <MapPin className="w-4 h-4 text-[#FF654F] mt-0.5 shrink-0" aria-hidden="true" />
                  <span>{GBP_CONFIG.ADDRESS}</span>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#00A99D] shrink-0" aria-hidden="true" />
                  <span className="font-semibold text-[#087B57]">{GBP_CONFIG.HOURS}</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  id="doctor-profile-whatsapp-btn"
                  href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book Consultation with Dr. Prashant Kumar Vats on WhatsApp"
                  onClick={() =>
                    trackClinicEvent('appointment_cta_click', {
                      placement: 'doctor_profile_whatsapp',
                      interaction_label: 'book_doctor_consultation',
                    })
                  }
                  className="min-h-[48px] bg-gradient-to-r from-[#FF654F] to-[#FF8A24] hover:from-[#e8533d] hover:to-[#e67617] text-white font-extrabold text-sm sm:text-base px-7 py-3 rounded-full shadow-[0_8px_20px_rgba(255,101,79,0.28)] transition-all inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD36A]"
                >
                  <CalendarCheck2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Book Appointment</span>
                </a>
                <a
                  id="doctor-profile-call-btn"
                  href={GBP_CONFIG.CALL_URL}
                  aria-label={`Call Dr. Prashant Kumar Vats clinic at ${GBP_CONFIG.PHONE_DISPLAY}`}
                  onClick={() =>
                    trackClinicEvent('call_click', {
                      placement: 'doctor_profile_call',
                    })
                  }
                  className="min-h-[48px] bg-[#087B57] hover:bg-[#066647] text-white font-extrabold text-sm sm:text-base px-7 py-3 rounded-full shadow-sm transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00A99D]/40"
                >
                  <PhoneCall className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Call {GBP_CONFIG.PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;
