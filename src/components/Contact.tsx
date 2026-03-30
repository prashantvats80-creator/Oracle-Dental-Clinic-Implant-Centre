import React from 'react';
import { Calendar, MessageCircle, MapPin, Clock } from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';

interface ContactProps {
  handleWhatsApp: () => void;
  handleDirections: () => void;
}

const Contact: React.FC<ContactProps> = ({ handleWhatsApp, handleDirections }) => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Replacement */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-center items-center text-center">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Ready to Smile Brighter?</h2>
            <p className="text-slate-600 mb-8 max-w-md">
              Book your appointment easily through WhatsApp. Our team will respond quickly to confirm your preferred date and time.
            </p>
            <InteractiveButton 
              onClick={handleWhatsApp}
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20b858] text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-1 text-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Book via WhatsApp
            </InteractiveButton>
          </div>

          {/* Map & Info */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Visit Our Clinic</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Location</h4>
                  <p className="text-slate-600 mt-1">Jaat Chowk, Chipiyana Buzurg,<br />near ABES Engineering College,<br />Ghaziabad, Uttar Pradesh</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Clinic Hours</h4>
                  <p className="text-slate-600 mt-1">Monday - Sunday<br />10:00 AM - 2:00 PM<br />5:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Integration */}
            <div className="w-full h-64 md:h-80 bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-300 shadow-inner">
              <iframe 
                src="https://maps.google.com/maps?q=Oracle+Dental+Clinic+and+Implant+Center,+Jaat+Chowk,+Chipiyana+Buzurg,+near+ABES+Engineering+College,+Ghaziabad&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Oracle Dental Clinic Location"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <InteractiveButton onClick={handleDirections} className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors whitespace-nowrap flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Open in Maps
                </InteractiveButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
