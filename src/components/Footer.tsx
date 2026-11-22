import React from 'react';
import { PhoneCall, MapPin, Clock, Facebook, Instagram } from 'lucide-react';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { trackClinicEvent } from '../utils/analytics';

interface FooterProps {
  phoneNumber: string;
  handleWhatsApp?: () => void;
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  navigateToPath?: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ navigateToPath }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (navigateToPath) {
      e.preventDefault();
      navigateToPath(path);
    }
  };

  return (
    <footer className="bg-[#054D37] text-[#E5F5EC] py-12 border-t border-[#087B57] pb-24 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Clinic Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-[#00A99D] to-[#FF8A24] rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0">
                O
              </div>
              <span className="font-bold text-base text-white leading-tight">
                {GBP_CONFIG.BUSINESS_NAME}
              </span>
            </div>
            <p className="text-xs text-[#E5F5EC]/80 leading-relaxed">
              Led by {GBP_CONFIG.DOCTOR_TITLE}. Physically located in Chipiyana Buzurg, Ghaziabad—
              serving patients from Jaat Chowk, Crossings Republik, ABES Engineering College area,
              Shahberi, Noida Extension, Greater Noida West, and Lal Kuan.
            </p>
            <div className="pt-1">
              <h4 className="text-[#FFD36A] font-semibold text-xs mb-2">Connect With Us</h4>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.facebook.com/profile.php?id=100083436112014"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oracle Dental Clinic Facebook"
                  className="min-w-[40px] min-h-[40px] inline-flex items-center justify-center bg-[#087B57] rounded-xl text-white hover:bg-[#00A99D] transition-colors"
                >
                  <Facebook className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/oracledentalclinic0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oracle Dental Clinic Instagram"
                  className="min-w-[40px] min-h-[40px] inline-flex items-center justify-center bg-[#087B57] rounded-xl text-white hover:bg-[#FF8A24] transition-colors"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  id="footer-youtube-link"
                  href="https://www.youtube.com/@oracledentalclinic0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Oracle Dental Clinic YouTube Channel"
                  title="Oracle Dental Clinic YouTube Channel"
                  onClick={() =>
                    trackClinicEvent('youtube_channel_click', {
                      placement: 'footer_youtube_icon',
                    })
                  }
                  className="min-w-[40px] min-h-[40px] inline-flex items-center justify-center bg-white rounded-xl hover:bg-[#FFF8EC] transition-colors"
                >
                  <svg
                    viewBox="0 0 28 20"
                    className="w-5 h-3.5"
                    fill="none"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path
                      d="M27.42 3.12a3.51 3.51 0 0 0-2.47-2.48C22.77 0 14 0 14 0S5.23 0 3.05.64A3.51 3.51 0 0 0 .58 3.12C0 5.32 0 10 0 10s0 4.68.58 6.88a3.51 3.51 0 0 0 2.47 2.48C5.23 20 14 20 14 20s8.77 0 10.95-.64a3.51 3.51 0 0 0 2.47-2.48C28 14.68 28 10 28 10s0-4.68-.58-6.88Z"
                      fill="#FF0000"
                    />
                    <path d="M11.2 14.29 18.47 10 11.2 5.71v8.58Z" fill="#FFFFFF" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Priority Dental Treatments */}
          <div>
            <h4 className="text-[#FFD36A] font-bold mb-3 text-xs tracking-wide border-b border-white/15 pb-2">
              Priority Treatments
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="/dental-services"
                  onClick={(e) => handleLinkClick(e, '/dental-services')}
                  className="text-[#FFD36A] font-semibold hover:text-white transition-colors"
                >
                  All Dental Treatments &amp; Services Hub
                </a>
              </li>
              <li><a href="/dental-implants" onClick={(e) => handleLinkClick(e, '/dental-implants')} className="hover:text-[#FFD36A] transition-colors">Dental Implants</a></li>
              <li><a href="/full-mouth-dental-implants" onClick={(e) => handleLinkClick(e, '/full-mouth-dental-implants')} className="hover:text-[#FFD36A] transition-colors">Full Mouth Dental Implants</a></li>
              <li><a href="/smile-makeover-ghaziabad" onClick={(e) => handleLinkClick(e, '/smile-makeover-ghaziabad')} className="hover:text-[#FFD36A] transition-colors">Smile Makeover</a></li>
              <li><a href="/cosmetic-dentistry" onClick={(e) => handleLinkClick(e, '/cosmetic-dentistry')} className="hover:text-[#FFD36A] transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="/dental-veneers" onClick={(e) => handleLinkClick(e, '/dental-veneers')} className="hover:text-[#FFD36A] transition-colors">Dental Veneers</a></li>
              <li><a href="/zirconia-crowns" onClick={(e) => handleLinkClick(e, '/zirconia-crowns')} className="hover:text-[#FFD36A] transition-colors">Zirconia Crowns</a></li>
              <li><a href="/root-canal-treatment" onClick={(e) => handleLinkClick(e, '/root-canal-treatment')} className="hover:text-[#FFD36A] transition-colors">Root Canal Treatment (RCT)</a></li>
              <li><a href="/wisdom-tooth-extraction" onClick={(e) => handleLinkClick(e, '/wisdom-tooth-extraction')} className="hover:text-[#FFD36A] transition-colors">Wisdom Tooth Extraction</a></li>
              <li><a href="/teeth-whitening" onClick={(e) => handleLinkClick(e, '/teeth-whitening')} className="hover:text-[#FFD36A] transition-colors">Teeth Whitening</a></li>
              <li><a href="/teeth-cleaning" onClick={(e) => handleLinkClick(e, '/teeth-cleaning')} className="hover:text-[#FFD36A] transition-colors">Teeth Cleaning &amp; Scaling</a></li>
              <li><a href="/dental-braces" onClick={(e) => handleLinkClick(e, '/dental-braces')} className="hover:text-[#FFD36A] transition-colors">Dental Braces</a></li>
              <li><a href="/clear-aligners" onClick={(e) => handleLinkClick(e, '/clear-aligners')} className="hover:text-[#FFD36A] transition-colors">Clear Aligners</a></li>
              <li><a href="/dental-fillings" onClick={(e) => handleLinkClick(e, '/dental-fillings')} className="hover:text-[#FFD36A] transition-colors">Dental Fillings</a></li>
              <li><a href="/tooth-extraction" onClick={(e) => handleLinkClick(e, '/tooth-extraction')} className="hover:text-[#FFD36A] transition-colors">Tooth Extraction</a></li>
            </ul>
          </div>

          {/* Column 3: Local & Condition Guides */}
          <div>
            <h4 className="text-[#FFD36A] font-bold mb-3 text-xs tracking-wide border-b border-white/15 pb-2">
              Symptoms, Costs &amp; Local Care
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="/dentist-chipiyana-buzurg-ghaziabad" onClick={(e) => handleLinkClick(e, '/dentist-chipiyana-buzurg-ghaziabad')} className="hover:text-[#FFD36A] font-semibold transition-colors">Dentist in Chipiyana Buzurg</a></li>
              <li><a href="/dentist-ghaziabad" onClick={(e) => handleLinkClick(e, '/dentist-ghaziabad')} className="hover:text-[#FFD36A] transition-colors">Dentist in Ghaziabad</a></li>
              <li><a href="/dental-clinic-ghaziabad" onClick={(e) => handleLinkClick(e, '/dental-clinic-ghaziabad')} className="hover:text-[#FFD36A] transition-colors">Dental Clinic in Ghaziabad</a></li>
              <li><a href="/dentist-near-me" onClick={(e) => handleLinkClick(e, '/dentist-near-me')} className="hover:text-[#FFD36A] transition-colors">Dentist Near Me</a></li>
              <li><a href="/emergency-dentist" onClick={(e) => handleLinkClick(e, '/emergency-dentist')} className="text-[#FFD36A] hover:text-white font-semibold transition-colors">24 Hour Emergency Dentist</a></li>
              <li><a href="/tooth-cap" onClick={(e) => handleLinkClick(e, '/tooth-cap')} className="hover:text-[#FFD36A] transition-colors">Tooth Cap &amp; Crowns</a></li>
              <li><a href="/dental-bridges" onClick={(e) => handleLinkClick(e, '/dental-bridges')} className="hover:text-[#FFD36A] transition-colors">Fixed Dental Bridges</a></li>
              <li><a href="/dentures" onClick={(e) => handleLinkClick(e, '/dentures')} className="hover:text-[#FFD36A] transition-colors">Complete &amp; Partial Dentures</a></li>
              <li><a href="/kids-dentist" onClick={(e) => handleLinkClick(e, '/kids-dentist')} className="hover:text-[#FFD36A] transition-colors">Kids Dentist</a></li>
              <li><a href="/missing-teeth" onClick={(e) => handleLinkClick(e, '/missing-teeth')} className="hover:text-[#FFD36A] transition-colors">Missing Teeth Replacement</a></li>
              <li><a href="/tooth-pain-treatment" onClick={(e) => handleLinkClick(e, '/tooth-pain-treatment')} className="hover:text-[#FFD36A] transition-colors">Tooth Pain Treatment</a></li>
              <li><a href="/dental-abscess-treatment" onClick={(e) => handleLinkClick(e, '/dental-abscess-treatment')} className="hover:text-[#FFD36A] transition-colors">Dental Abscess Treatment</a></li>
              <li><a href="/dental-implant-cost-ghaziabad" onClick={(e) => handleLinkClick(e, '/dental-implant-cost-ghaziabad')} className="hover:text-[#FFD36A] transition-colors">Dental Implant Cost</a></li>
              <li><a href="/dental-treatment-cost-ghaziabad" onClick={(e) => handleLinkClick(e, '/dental-treatment-cost-ghaziabad')} className="hover:text-[#FFD36A] transition-colors">Dental Treatment Cost Guide</a></li>
            </ul>
          </div>

          {/* Column 4: Verified NAP & Contact */}
          <div className="space-y-3">
            <h4 className="text-[#FFD36A] font-bold mb-3 text-xs tracking-wide border-b border-white/15 pb-2">
              Verified Clinic Details
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#FFD36A]" aria-hidden="true" />
                <span>{GBP_CONFIG.ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#FFD36A] shrink-0" aria-hidden="true" />
                <a
                  id="footer-call-link"
                  href={GBP_CONFIG.CALL_URL}
                  aria-label={`Call Oracle Dental Clinic at ${GBP_CONFIG.PHONE_DISPLAY}`}
                  onClick={() =>
                    trackClinicEvent('call_click', {
                      placement: 'footer_phone_link',
                    })
                  }
                  className="hover:text-[#FFD36A] transition-colors font-bold text-white"
                >
                  {GBP_CONFIG.PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[#FFD36A]" aria-hidden="true" />
                <span>{GBP_CONFIG.HOURS}</span>
              </li>
            </ul>
            <div className="pt-2 space-y-2">
              <a
                id="footer-whatsapp-btn"
                href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book dental visit via WhatsApp"
                onClick={() =>
                  trackClinicEvent('appointment_cta_click', {
                    placement: 'footer_whatsapp',
                    interaction_label: 'footer_book_whatsapp',
                  })
                }
                className="w-full min-h-[44px] bg-[#FF654F] hover:bg-[#E8523D] text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                Book Visit via WhatsApp
              </a>
              <a
                id="footer-call-btn"
                href={GBP_CONFIG.CALL_URL}
                aria-label={`Call ${GBP_CONFIG.PHONE_DISPLAY} to book an appointment`}
                onClick={() =>
                  trackClinicEvent('call_click', {
                    placement: 'footer_call_cta',
                  })
                }
                className="w-full min-h-[44px] bg-[#00A99D] hover:bg-[#087B57] text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                Call {GBP_CONFIG.PHONE_DISPLAY}
              </a>
              <a
                id="footer-directions-btn"
                href={GBP_CONFIG.GOOGLE_BUSINESS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Oracle Dental Clinic on Google Business Profile"
                onClick={() =>
                  trackClinicEvent('directions_click', {
                    placement: 'footer_gbp_link',
                  })
                }
                className="w-full min-h-[44px] bg-[#087B57] hover:bg-[#066647] text-[#FFD36A] font-semibold py-2 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-white/15"
              >
                View Google Business Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15 mt-8 pt-6 text-center text-xs text-[#E5F5EC]/75">
          <p>
            &copy; {new Date().getFullYear()} {GBP_CONFIG.BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
