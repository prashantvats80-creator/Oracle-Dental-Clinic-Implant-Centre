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
                    type="image/avif"
                    srcSet={`${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}/assets/images/dr-prashant-vats-400.avif 400w, ${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}/assets/images/dr-prashant-vats-768.avif 456w`}
                    sizes="(max-width: 640px) 85vw, 384px"
                  />
                  <source
                    type="image/webp"
                    srcSet={`${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}/assets/images/dr-prashant-vats-400.webp 400w, ${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}/assets/images/dr-prashant-vats-768.webp 456w`}
                    sizes="(max-width: 640px) 85vw, 384px"
                  />
                  <img
                    src={`${(import.meta.env.BASE_URL || '/').replace(/\/$/, '')}/assets/images/dr-prashant-vats.jpg`}
                    alt="Dr. Prashant Kumar Vats, BDS, MIDA – Dental Surgeon & Implantologist at Oracle Dental Clinic & Implant Center"
                    width="400"
                    height="702"
                    className="w-full h-72 sm:h-96 object-cover object-top block"
                    loading="lazy"
                    decoding="async"
                  />
                </picture>
                <div className="bg-white px-5 py-3.5 text-center border-t-2 border-[#FFD36A]">
                  <p className="font-extrabold text-base text-[#087B57] leading-tight">
                    {GBP_CONFIG.DOCTOR_NAME}
                  </p>
                  <p className="text-xs font-bold text-[#C63621] mt-0.5">
                    {GBP_CONFIG.DOCTOR_ROLE} | {GBP_CONFIG.DOCTOR_QUALIFICATION}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Doctor Credentials & Clinic Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-wider uppercase text-[#B84D00]">
                <Stethoscope className="w-4 h-4 text-[#067067]" aria-hidden="true" />
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
                <p className="text-xs sm:text-sm font-bold text-[#B84D00] mt-1">
                  PGD in Clinical Endodontics · PGD in Oral Surgery · 6+ Years Clinical Experience
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#26352F]/85 leading-relaxed">
                At <strong>{GBP_CONFIG.BUSINESS_NAME}</strong> in Chipiyana Buzurg, Ghaziabad,{' '}
                {GBP_CONFIG.DOCTOR_TITLE} brings over <strong>6+ years of clinical experience</strong>{' '}
                with dedicated training as a <strong>Certified Oral Implantologist</strong>,{' '}
                <strong>PGD in Clinical Endodontics</strong>, and{' '}
                <strong>PGD in Oral Surgery</strong>. Consultations focus on accurate diagnosis,
                transparent treatment options, strict sterilization protocols, and gentle care for
                families across Chipiyana Buzurg, Jaat Chowk, Crossings Republik, Shahberi,
                Chappraula, Lal Kuan, and the ABES Engineering College vicinity.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-start gap-2.5 bg-[#FFF8EC] rounded-2xl p-3.5 border border-[#FF8A24]/25">
                  <CheckCircle2 className="w-4 h-4 text-[#B84D00] mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-semibold text-[#26352F]">
                    <a href="/dental-implants" className="text-[#087B57] underline decoration-[#087B57]/40 hover:decoration-[#087B57]">Dental Implants</a>,{' '}
                    <a href="/root-canal-treatment" className="text-[#087B57] underline decoration-[#087B57]/40 hover:decoration-[#087B57]">Root Canal (RCT)</a>,{' '}
                    <a href="/zirconia-crowns" className="text-[#087B57] underline decoration-[#087B57]/40 hover:decoration-[#087B57]">Zirconia Crowns</a> &amp;{' '}
                    <a href="/wisdom-tooth-extraction" className="text-[#087B57] underline decoration-[#087B57]/40 hover:decoration-[#087B57]">Wisdom Tooth Surgery</a>
                  </span>
                </div>
                <div className="flex items-start gap-2.5 bg-[#E5F5EC]/75 rounded-2xl p-3.5 border border-[#00A99D]/25">
                  <CheckCircle2 className="w-4 h-4 text-[#087B57] mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-xs sm:text-sm font-semibold text-[#26352F]">
                    <a href="/impacted-wisdom-tooth" className="text-[#087B57] underline decoration-[#087B57]/40 hover:decoration-[#087B57]">Impacted Tooth Removal</a>,{' '}
                    <a href="/teeth-cleaning" className="text-[#087B57] underline decoration-[#087B57]/40 hover:decoration-[#087B57]">Teeth Cleaning &amp; Scaling</a>,{' '}
                    <a href="/dental-bridges" className="text-[#087B57] underline decoration-[#087B57]/40 hover:decoration-[#087B57]">Crowns &amp; Bridges</a> &amp;{' '}
                    <a href="/dental-services" className="text-[#087B57] underline decoration-[#087B57]/40 hover:decoration-[#087B57]">General Dentistry</a>
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-[#26352F]/85 pt-1 border-t border-[#E5F5EC]">
                <p className="flex items-start gap-2 pt-3">
                  <MapPin className="w-4 h-4 text-[#C63621] mt-0.5 shrink-0" aria-hidden="true" />
                  <a
                    href={GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackClinicEvent('directions_click', {
                        placement: 'doctor_profile_address_link',
                      })
                    }
                    className="hover:text-[#087B57] hover:underline transition-colors"
                  >
                    {GBP_CONFIG.ADDRESS}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#067067] shrink-0" aria-hidden="true" />
                  <span className="font-semibold text-[#087B57]">{GBP_CONFIG.HOURS}</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  id="doctor-profile-whatsapp-btn"
                  href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book Appointment with Dr. Prashant Kumar Vats on WhatsApp"
                  onClick={() =>
                    trackClinicEvent('appointment_cta_click', {
                      placement: 'doctor_profile_whatsapp',
                      interaction_label: 'book_doctor_consultation',
                    })
                  }
                  className="min-h-[48px] bg-gradient-to-r from-[#C93B25] to-[#B84D00] hover:from-[#B2321E] hover:to-[#9F4200] text-white font-extrabold text-sm sm:text-base px-7 py-3 rounded-full shadow-[0_8px_20px_rgba(201,59,37,0.28)] transition-all inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD36A]"
                >
                  <CalendarCheck2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Book Appointment</span>
                </a>
                <a
                  id="doctor-profile-call-btn"
                  href={GBP_CONFIG.CALL_URL}
                  aria-label={`Call ${GBP_CONFIG.PHONE_DISPLAY} — Oracle Dental Clinic`}
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
