import React from 'react';
import { PhoneCall, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

interface FooterProps {
  phoneNumber: string;
  handleWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ phoneNumber, handleWhatsApp }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 pb-32 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                O
              </div>
              <span className="font-bold text-xl text-white">Oracle Dental</span>
            </div>
            <p className="text-sm text-slate-400 mb-4">
              Premium dental care and implant center in Ghaziabad. We bring smiles to life with advanced technology and expert care.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Patient Reviews</a></li>
              <li><InteractiveButton onClick={handleWhatsApp} className="hover:text-white transition-colors">Book via WhatsApp</InteractiveButton></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-amber-500" />
                <span>Jaat Chowk, Chipiyana Buzurg, near ABES Engineering College, Ghaziabad</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-amber-500" />
                <a href={`tel:${phoneNumber}`} className="hover:text-white transition-colors">+91 {phoneNumber}</a>
              </li>
              <li className="flex items-center gap-4 pt-2">
                <a href="https://www.facebook.com/profile.php?id=100083436112014" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/oracledentalclinic0/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.youtube.com/@OracleDentalClinic0" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-red-500 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Oracle Dental Clinic and Implant Center. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
