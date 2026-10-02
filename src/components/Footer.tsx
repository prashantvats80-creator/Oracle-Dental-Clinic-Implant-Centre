import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, MapPin, Facebook, Instagram, Youtube, ArrowRight } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

interface FooterProps {
  phoneNumber: string;
  handleWhatsApp: () => void;
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, id: string) => void;
  navigateToPath?: (path: string) => void;
}

const Footer: React.FC<FooterProps> = ({ phoneNumber, handleWhatsApp, scrollToSection, navigateToPath }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (navigateToPath) {
      e.preventDefault();
      navigateToPath(path);
    }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 pb-32 md:pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Clinic Overview */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                O
              </div>
              <span className="font-bold text-xl text-white">Oracle Dental</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Premium dental care and implant center in Ghaziabad. We bring smiles to life with advanced technology, painless care, and experienced specialists.
            </p>
            <div className="pt-2">
              <h5 className="text-white font-semibold text-xs uppercase mb-2">Connect With Us</h5>
              <div className="flex items-center gap-3">
                <a href="https://www.facebook.com/profile.php?id=100083436112014" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg text-slate-300 hover:text-blue-500 hover:bg-slate-700 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="https://www.instagram.com/oracledentalclinic0/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg text-slate-300 hover:text-pink-500 hover:bg-slate-700 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="https://www.youtube.com/@OracleDentalClinic0" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-2 rounded-lg text-slate-300 hover:text-red-500 hover:bg-slate-700 transition-colors">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Column 2: Key Dental Treatments */}
          <div>
            <h4 className="text-amber-400 font-bold mb-3 uppercase tracking-wider text-xs border-b border-slate-800 pb-2">Dental Treatments</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a id="footer-l-implants" href="/dental-implants" onClick={(e) => handleLinkClick(e, '/dental-implants')} className="hover:text-amber-300 transition-colors">Dental Implants</a></li>
              <li><a id="footer-l-rct" href="/root-canal-treatment" onClick={(e) => handleLinkClick(e, '/root-canal-treatment')} className="hover:text-cyan-300 transition-colors">Root Canal Treatment</a></li>
              <li><a id="footer-l-cleaning" href="/teeth-cleaning" onClick={(e) => handleLinkClick(e, '/teeth-cleaning')} className="hover:text-emerald-300 transition-colors">Teeth Cleaning & Scaling</a></li>
              <li><a id="footer-l-whitening" href="/teeth-whitening" onClick={(e) => handleLinkClick(e, '/teeth-whitening')} className="hover:text-teal-300 transition-colors">Teeth Whitening</a></li>
              <li><a id="footer-l-wisdom" href="/wisdom-tooth-extraction" onClick={(e) => handleLinkClick(e, '/wisdom-tooth-extraction')} className="hover:text-rose-300 transition-colors">Wisdom Tooth Removal</a></li>
              <li><a id="footer-l-crown" href="/tooth-cap" onClick={(e) => handleLinkClick(e, '/tooth-cap')} className="hover:text-amber-300 transition-colors">Tooth Cap & Dental Crowns</a></li>
              <li><a id="footer-l-fillings" href="/dental-fillings" onClick={(e) => handleLinkClick(e, '/dental-fillings')} className="hover:text-blue-300 transition-colors">Dental Fillings</a></li>
              <li><a id="footer-l-extraction" href="/tooth-extraction" onClick={(e) => handleLinkClick(e, '/tooth-extraction')} className="hover:text-rose-300 transition-colors">Tooth Extraction</a></li>
              <li><a id="footer-l-bridges" href="/dental-bridges" onClick={(e) => handleLinkClick(e, '/dental-bridges')} className="hover:text-indigo-300 transition-colors">Dental Bridges</a></li>
              <li><a id="footer-l-dentures" href="/dentures" onClick={(e) => handleLinkClick(e, '/dentures')} className="hover:text-purple-300 transition-colors">Dentures</a></li>
              <li><a id="footer-l-kids" href="/kids-dentist" onClick={(e) => handleLinkClick(e, '/kids-dentist')} className="hover:text-amber-300 transition-colors">Kids Dentist Care</a></li>
              <li><a id="footer-l-emergency" href="/emergency-dentist" onClick={(e) => handleLinkClick(e, '/emergency-dentist')} className="hover:text-red-400 font-semibold transition-colors">Emergency Dentist</a></li>
            </ul>
          </div>

          {/* Column 3: Symptoms & Conditions */}
          <div>
            <h4 className="text-amber-400 font-bold mb-3 uppercase tracking-wider text-xs border-b border-slate-800 pb-2">Symptoms & Conditions</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a id="footer-l-pain" href="/tooth-pain-treatment" onClick={(e) => handleLinkClick(e, '/tooth-pain-treatment')} className="hover:text-rose-300 transition-colors">Tooth Pain Treatment</a></li>
              <li><a id="footer-l-bleeding" href="/bleeding-gums" onClick={(e) => handleLinkClick(e, '/bleeding-gums')} className="hover:text-rose-300 transition-colors">Bleeding Gums Care</a></li>
              <li><a id="footer-l-sensitivity" href="/tooth-sensitivity" onClick={(e) => handleLinkClick(e, '/tooth-sensitivity')} className="hover:text-cyan-300 transition-colors">Sensitive Teeth Treatment</a></li>
              <li><a id="footer-l-breath" href="/bad-breath-treatment" onClick={(e) => handleLinkClick(e, '/bad-breath-treatment')} className="hover:text-teal-300 transition-colors">Bad Breath Treatment</a></li>
              <li><a id="footer-l-loose" href="/loose-tooth-treatment" onClick={(e) => handleLinkClick(e, '/loose-tooth-treatment')} className="hover:text-indigo-300 transition-colors">Loose Tooth Care</a></li>
              <li><a id="footer-l-broken" href="/broken-tooth-treatment" onClick={(e) => handleLinkClick(e, '/broken-tooth-treatment')} className="hover:text-rose-300 transition-colors">Broken Tooth Repair</a></li>
              <li><a id="footer-l-chipped" href="/chipped-tooth" onClick={(e) => handleLinkClick(e, '/chipped-tooth')} className="hover:text-amber-300 transition-colors">Chipped Tooth Repair</a></li>
              <li><a id="footer-l-black" href="/black-tooth" onClick={(e) => handleLinkClick(e, '/black-tooth')} className="hover:text-amber-300 transition-colors">Black / Dark Tooth Care</a></li>
              <li><a id="footer-l-missing" href="/missing-teeth" onClick={(e) => handleLinkClick(e, '/missing-teeth')} className="hover:text-blue-300 transition-colors">Missing Teeth Options</a></li>
              <li><a id="footer-l-cavity" href="/cavity-treatment" onClick={(e) => handleLinkClick(e, '/cavity-treatment')} className="hover:text-blue-300 transition-colors">Cavity Treatment</a></li>
              <li><a id="footer-l-gumdis" href="/gum-disease-treatment" onClick={(e) => handleLinkClick(e, '/gum-disease-treatment')} className="hover:text-emerald-300 transition-colors">Gum Disease Care</a></li>
              <li><a id="footer-l-swollen" href="/swollen-gums" onClick={(e) => handleLinkClick(e, '/swollen-gums')} className="hover:text-rose-300 transition-colors">Swollen Gums Care</a></li>
              <li><a id="footer-l-recession" href="/gum-recession" onClick={(e) => handleLinkClick(e, '/gum-recession')} className="hover:text-indigo-300 transition-colors">Gum Recession Care</a></li>
              <li><a id="footer-l-chipiyana" href="/dentist-chipiyana-buzurg-ghaziabad" onClick={(e) => handleLinkClick(e, '/dentist-chipiyana-buzurg-ghaziabad')} className="hover:text-amber-300 font-bold transition-colors">Dentist in Chipiyana Buzurg</a></li>
            </ul>
          </div>
          
          {/* Column 4: Contact & Appointments */}
          <div className="space-y-3">
            <h4 className="text-amber-400 font-bold mb-3 uppercase tracking-wider text-xs border-b border-slate-800 pb-2">Clinic Information</h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-amber-500" />
                <span>Shop No. 47, KTS Complex, near Dolphin Public School, Jaat Chowk, Chipiyana Buzurg, Ghaziabad</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <a href={`tel:${phoneNumber}`} className="hover:text-white transition-colors font-bold">+91 70119 61515</a>
              </li>
            </ul>
            <div className="pt-2">
              <InteractiveButton 
                id="footer-whatsapp-btn" 
                onClick={handleWhatsApp} 
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md"
              >
                Book Visit via WhatsApp
              </InteractiveButton>
            </div>
          </div>

        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500">
          <p className="mb-4">&copy; {new Date().getFullYear()} Oracle Dental Clinic and Implant Center. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
