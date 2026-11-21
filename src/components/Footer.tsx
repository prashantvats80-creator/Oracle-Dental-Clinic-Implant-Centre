import React from 'react';
import { PhoneCall, MapPin, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
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
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 pb-24 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Clinic Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg shrink-0">
                O
              </div>
              <span className="font-bold text-base text-white leading-tight">
                {GBP_CONFIG.BUSINESS_NAME}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Led by {GBP_CONFIG.DOCTOR_TITLE}. Physically located in Chipiyana Buzurg, Ghaziabad—
              serving patients from Jaat Chowk, Shahberi, Crossings Republik, Noida Extension,
              Greater Noida West, and Lal Kuan.
            </p>
            <div className="pt-1">
              <h4 className="text-white font-semibold text-xs mb-2">Connect With Us</h4>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.facebook.com/profile.php?id=100083436112014"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oracle Dental Clinic Facebook"
                  className="min-w-[40px] min-h-[40px] inline-flex items-center justify-center bg-slate-800 rounded-lg text-slate-300 hover:text-blue-400 hover:bg-slate-700 transition-colors"
                >
                  <Facebook className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/oracledentalclinic0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oracle Dental Clinic Instagram"
                  className="min-w-[40px] min-h-[40px] inline-flex items-center justify-center bg-slate-800 rounded-lg text-slate-300 hover:text-pink-400 hover:bg-slate-700 transition-colors"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href="https://www.youtube.com/@OracleDentalClinic0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oracle Dental Clinic YouTube"
                  className="min-w-[40px] min-h-[40px] inline-flex items-center justify-center bg-slate-800 rounded-lg text-slate-300 hover:text-red-400 hover:bg-slate-700 transition-colors"
                >
                  <Youtube className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Priority Dental Treatments */}
          <div>
            <h4 className="text-amber-400 font-bold mb-3 text-xs tracking-wide border-b border-slate-800 pb-2">
              Priority Treatments
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a
                  href="/dental-services"
                  onClick={(e) => handleLinkClick(e, '/dental-services')}
                  className="text-amber-300 font-semibold hover:text-amber-200 transition-colors"
                >
                  All Dental Treatments &amp; Services Hub
                </a>
              </li>
              <li><a href="/dental-implants" onClick={(e) => handleLinkClick(e, '/dental-implants')} className="hover:text-amber-300 transition-colors">Dental Implants</a></li>
              <li><a href="/full-mouth-dental-implants" onClick={(e) => handleLinkClick(e, '/full-mouth-dental-implants')} className="hover:text-amber-300 transition-colors">Full Mouth Dental Implants</a></li>
              <li><a href="/smile-makeover-ghaziabad" onClick={(e) => handleLinkClick(e, '/smile-makeover-ghaziabad')} className="hover:text-amber-300 transition-colors">Smile Makeover</a></li>
              <li><a href="/cosmetic-dentistry" onClick={(e) => handleLinkClick(e, '/cosmetic-dentistry')} className="hover:text-amber-300 transition-colors">Cosmetic Dentistry</a></li>
              <li><a href="/dental-veneers" onClick={(e) => handleLinkClick(e, '/dental-veneers')} className="hover:text-amber-300 transition-colors">Dental Veneers</a></li>
              <li><a href="/zirconia-crowns" onClick={(e) => handleLinkClick(e, '/zirconia-crowns')} className="hover:text-amber-300 transition-colors">Zirconia Crowns</a></li>
              <li><a href="/root-canal-treatment" onClick={(e) => handleLinkClick(e, '/root-canal-treatment')} className="hover:text-cyan-300 transition-colors">Root Canal Treatment (RCT)</a></li>
              <li><a href="/wisdom-tooth-extraction" onClick={(e) => handleLinkClick(e, '/wisdom-tooth-extraction')} className="hover:text-rose-300 transition-colors">Wisdom Tooth Extraction</a></li>
              <li><a href="/teeth-whitening" onClick={(e) => handleLinkClick(e, '/teeth-whitening')} className="hover:text-teal-300 transition-colors">Teeth Whitening</a></li>
              <li><a href="/teeth-cleaning" onClick={(e) => handleLinkClick(e, '/teeth-cleaning')} className="hover:text-emerald-300 transition-colors">Teeth Cleaning &amp; Scaling</a></li>
              <li><a href="/dental-braces" onClick={(e) => handleLinkClick(e, '/dental-braces')} className="hover:text-blue-300 transition-colors">Dental Braces</a></li>
              <li><a href="/clear-aligners" onClick={(e) => handleLinkClick(e, '/clear-aligners')} className="hover:text-blue-300 transition-colors">Clear Aligners</a></li>
              <li><a href="/dental-fillings" onClick={(e) => handleLinkClick(e, '/dental-fillings')} className="hover:text-blue-300 transition-colors">Dental Fillings</a></li>
              <li><a href="/tooth-extraction" onClick={(e) => handleLinkClick(e, '/tooth-extraction')} className="hover:text-rose-300 transition-colors">Tooth Extraction</a></li>
            </ul>
          </div>

          {/* Column 3: Local & Condition Guides */}
          <div>
            <h4 className="text-amber-400 font-bold mb-3 text-xs tracking-wide border-b border-slate-800 pb-2">
              Symptoms, Costs &amp; Local Care
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="/dentist-chipiyana-buzurg-ghaziabad" onClick={(e) => handleLinkClick(e, '/dentist-chipiyana-buzurg-ghaziabad')} className="hover:text-amber-300 font-semibold transition-colors">Dentist in Chipiyana Buzurg</a></li>
              <li><a href="/dentist-ghaziabad" onClick={(e) => handleLinkClick(e, '/dentist-ghaziabad')} className="hover:text-amber-300 transition-colors">Dentist in Ghaziabad</a></li>
              <li><a href="/dental-clinic-ghaziabad" onClick={(e) => handleLinkClick(e, '/dental-clinic-ghaziabad')} className="hover:text-blue-300 transition-colors">Dental Clinic in Ghaziabad</a></li>
              <li><a href="/dentist-near-me" onClick={(e) => handleLinkClick(e, '/dentist-near-me')} className="hover:text-emerald-300 transition-colors">Dentist Near Me</a></li>
              <li><a href="/emergency-dentist" onClick={(e) => handleLinkClick(e, '/emergency-dentist')} className="hover:text-red-400 font-semibold transition-colors">24 Hour Emergency Dentist</a></li>
              <li><a href="/tooth-cap" onClick={(e) => handleLinkClick(e, '/tooth-cap')} className="hover:text-amber-300 transition-colors">Tooth Cap &amp; Crowns</a></li>
              <li><a href="/dental-bridges" onClick={(e) => handleLinkClick(e, '/dental-bridges')} className="hover:text-indigo-300 transition-colors">Fixed Dental Bridges</a></li>
              <li><a href="/dentures" onClick={(e) => handleLinkClick(e, '/dentures')} className="hover:text-purple-300 transition-colors">Complete &amp; Partial Dentures</a></li>
              <li><a href="/kids-dentist" onClick={(e) => handleLinkClick(e, '/kids-dentist')} className="hover:text-amber-300 transition-colors">Kids Dentist</a></li>
              <li><a href="/missing-teeth" onClick={(e) => handleLinkClick(e, '/missing-teeth')} className="hover:text-blue-300 transition-colors">Missing Teeth Replacement</a></li>
              <li><a href="/tooth-pain-treatment" onClick={(e) => handleLinkClick(e, '/tooth-pain-treatment')} className="hover:text-rose-300 transition-colors">Tooth Pain Treatment</a></li>
              <li><a href="/dental-abscess-treatment" onClick={(e) => handleLinkClick(e, '/dental-abscess-treatment')} className="hover:text-rose-300 transition-colors">Dental Abscess Treatment</a></li>
              <li><a href="/dental-implant-cost-ghaziabad" onClick={(e) => handleLinkClick(e, '/dental-implant-cost-ghaziabad')} className="hover:text-amber-300 transition-colors">Dental Implant Cost</a></li>
              <li><a href="/dental-treatment-cost-ghaziabad" onClick={(e) => handleLinkClick(e, '/dental-treatment-cost-ghaziabad')} className="hover:text-amber-300 transition-colors">Dental Treatment Cost Guide</a></li>
            </ul>
          </div>

          {/* Column 4: Verified NAP & Contact */}
          <div className="space-y-3">
            <h4 className="text-amber-400 font-bold mb-3 text-xs tracking-wide border-b border-slate-800 pb-2">
              Verified Clinic Details
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-amber-500" aria-hidden="true" />
                <span>{GBP_CONFIG.ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-500 shrink-0" aria-hidden="true" />
                <a
                  id="footer-call-link"
                  href={GBP_CONFIG.CALL_URL}
                  aria-label={`Call Oracle Dental Clinic at ${GBP_CONFIG.PHONE_DISPLAY}`}
                  onClick={() =>
                    trackClinicEvent('call_click', {
                      placement: 'footer_phone_link',
                    })
                  }
                  className="hover:text-white transition-colors font-bold"
                >
                  {GBP_CONFIG.PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0 text-amber-500" aria-hidden="true" />
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
                className="w-full min-h-[44px] bg-[#16A34A] hover:bg-[#15803D] text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
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
                className="w-full min-h-[44px] bg-blue-700 hover:bg-blue-800 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
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
                className="w-full min-h-[44px] bg-slate-800 hover:bg-slate-700 text-amber-300 font-semibold py-2 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-slate-700"
              >
                View Google Business Profile
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-6 text-center text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {GBP_CONFIG.BUSINESS_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
