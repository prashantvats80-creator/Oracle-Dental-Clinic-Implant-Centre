import React from 'react';
import {
  ShieldCheck,
  HeartPulse,
  Star,
  Activity,
  CheckCircle2,
  Stethoscope,
  ArrowRight,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import { getTreatmentWhatsAppUrl } from '../config/googleBusinessProfile';
import { trackClinicEvent } from '../utils/analytics';

interface ServicesProps {
  handleWhatsApp?: () => void;
  navigateToPath?: (path: string) => void;
}

const Services: React.FC<ServicesProps> = ({ navigateToPath }) => {
  const handlePageClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (navigateToPath) {
      e.preventDefault();
      navigateToPath(path);
    }
  };

  const services = [
    {
      title: 'Dental Implants',
      whatsappTopic: 'dental implants',
      desc: 'Single and multiple titanium dental implants in Chipiyana Buzurg, Ghaziabad to replace missing teeth with stable, natural-looking restorations.',
      icon: ShieldCheck,
      path: '/dental-implants',
    },
    {
      title: 'Full Mouth Dental Implants',
      whatsappTopic: 'full-mouth dental implants',
      desc: 'All-on-4, All-on-6, and implant-supported full-arch rehabilitation to restore comfortable chewing and smile stability.',
      icon: ShieldCheck,
      path: '/full-mouth-dental-implants',
    },
    {
      title: 'Root Canal Treatment (RCT)',
      whatsappTopic: 'root canal treatment',
      desc: 'Modern rotary root canal therapy and Re-RCT performed under effective local anesthesia to clear nerve infection and save natural teeth.',
      icon: HeartPulse,
      path: '/root-canal-treatment',
    },
    {
      title: 'Wisdom Tooth Extraction',
      whatsappTopic: 'wisdom tooth extraction',
      desc: 'Careful simple and surgical removal of impacted or painful wisdom teeth with clear recovery and aftercare guidance.',
      icon: Stethoscope,
      path: '/wisdom-tooth-extraction',
    },
    {
      title: 'Zirconia Crowns',
      whatsappTopic: 'zirconia crowns',
      desc: 'Metal-free, CAD/CAM milled monolithic and multilayer zirconia tooth caps to strengthen root canal-treated or fractured teeth.',
      icon: ShieldCheck,
      path: '/zirconia-crowns',
    },
    {
      title: 'Smile Makeover & Design',
      whatsappTopic: 'smile makeover',
      desc: 'Personalized smile transformation combining alignment, whitening, veneers, and aesthetic restorations tailored to facial balance.',
      icon: Sparkles,
      path: '/smile-makeover-ghaziabad',
    },
    {
      title: 'Cosmetic Dentistry',
      whatsappTopic: 'cosmetic dentistry',
      desc: 'Conservative aesthetic dental care including front teeth gap closure, composite bonding, shade matching, and E-max crowns.',
      icon: Star,
      path: '/cosmetic-dentistry',
    },
    {
      title: 'Dental Veneers',
      whatsappTopic: 'dental veneers',
      desc: 'Custom porcelain and composite veneers to improve chipped edges, intrinsic stains, and front-tooth spacing.',
      icon: Sparkles,
      path: '/dental-veneers',
    },
    {
      title: 'Clear Aligners',
      whatsappTopic: 'clear aligners',
      desc: 'Removable, nearly invisible orthodontic trays for discreet teeth straightening tailored for adults and teens.',
      icon: CheckCircle2,
      path: '/clear-aligners',
    },
    {
      title: 'Dental Braces',
      whatsappTopic: 'dental braces',
      desc: 'Metal, ceramic, and self-ligating braces to correct crowding, gaps, overbite, and jaw alignment safely.',
      icon: Activity,
      path: '/dental-braces',
    },
    {
      title: 'Teeth Cleaning & Scaling',
      whatsappTopic: 'teeth cleaning and scaling',
      desc: 'Ultrasonic scaling and polishing to gently clear plaque, hardened tartar, and stains for healthier gums and fresher breath.',
      icon: Sparkles,
      path: '/teeth-cleaning',
    },
    {
      title: 'Teeth Whitening',
      whatsappTopic: 'teeth whitening',
      desc: 'Clinically supervised in-office teeth whitening designed to brighten stained enamel safely with gum protection.',
      icon: Star,
      path: '/teeth-whitening',
    },
    {
      title: 'Dental Fillings',
      whatsappTopic: 'tooth-coloured dental fillings',
      desc: 'Tooth-colored composite resin and GIC fillings to treat dental cavities and restore natural tooth contours.',
      icon: CheckCircle2,
      path: '/dental-fillings',
    },
    {
      title: 'Tooth Extraction',
      whatsappTopic: 'tooth extraction',
      desc: 'Gentle simple and surgical extractions under local anesthesia when severely decayed or fractured teeth cannot be saved.',
      icon: Stethoscope,
      path: '/tooth-extraction',
    },
  ];

  const allTreatmentPages = [
    { title: 'All 9 Dental Service Categories (Interactive Hub)', path: '/dental-services' },
    { title: 'Dental Implants', path: '/dental-implants' },
    { title: 'Full Mouth Dental Implants', path: '/full-mouth-dental-implants' },
    { title: 'Immediate Implant After Extraction', path: '/dental-implant-after-tooth-extraction' },
    { title: 'Smile Makeover Ghaziabad', path: '/smile-makeover-ghaziabad' },
    { title: 'Cosmetic Dentistry', path: '/cosmetic-dentistry' },
    { title: 'Dental Veneers', path: '/dental-veneers' },
    { title: 'Zirconia Crowns', path: '/zirconia-crowns' },
    { title: 'Tooth Cap / Dental Crown', path: '/tooth-cap' },
    { title: 'Root Canal Treatment (RCT)', path: '/root-canal-treatment' },
    { title: 'Wisdom Tooth Removal', path: '/wisdom-tooth-extraction' },
    { title: 'Impacted Wisdom Tooth', path: '/impacted-wisdom-tooth' },
    { title: 'Teeth Whitening', path: '/teeth-whitening' },
    { title: 'Teeth Cleaning & Scaling', path: '/teeth-cleaning' },
    { title: 'Dental Braces', path: '/dental-braces' },
    { title: 'Clear Aligners', path: '/clear-aligners' },
    { title: 'Dental Fillings', path: '/dental-fillings' },
    { title: 'Tooth Extraction', path: '/tooth-extraction' },
    { title: 'Dental Bridges', path: '/dental-bridges' },
    { title: 'Dentures', path: '/dentures' },
    { title: 'Kids Dentist', path: '/kids-dentist' },
    { title: '24 Hour Emergency Dentist', path: '/emergency-dentist' },
    { title: 'Emergency Dentist Ghaziabad', path: '/emergency-dentist-ghaziabad' },
    { title: 'Dentist in Chipiyana Buzurg', path: '/dentist-chipiyana-buzurg-ghaziabad' },
    { title: 'Dentist in Ghaziabad', path: '/dentist-ghaziabad' },
    { title: 'Dental Clinic in Ghaziabad', path: '/dental-clinic-ghaziabad' },
    { title: 'Dentist Near Me', path: '/dentist-near-me' },
  ];

  const allSymptomPages = [
    { title: 'Tooth Pain Treatment', path: '/tooth-pain-treatment' },
    { title: 'Bleeding Gums Care', path: '/bleeding-gums' },
    { title: 'Tooth Sensitivity Relief', path: '/tooth-sensitivity' },
    { title: 'Bad Breath Treatment', path: '/bad-breath-treatment' },
    { title: 'Loose Tooth Treatment', path: '/loose-tooth-treatment' },
    { title: 'Broken Tooth Repair', path: '/broken-tooth-treatment' },
    { title: 'Chipped Tooth Repair', path: '/chipped-tooth' },
    { title: 'Black / Dark Tooth Care', path: '/black-tooth' },
    { title: 'Missing Teeth Options', path: '/missing-teeth' },
    { title: 'Cavity Treatment', path: '/cavity-treatment' },
    { title: 'Gum Disease Treatment', path: '/gum-disease-treatment' },
    { title: 'Swollen Gums Care', path: '/swollen-gums' },
    { title: 'Gum Recession Care', path: '/gum-recession' },
    { title: 'Dental Abscess Treatment', path: '/dental-abscess-treatment' },
    { title: 'Periodontal Gum Treatment', path: '/periodontal-gum-treatment-ghaziabad' },
  ];

  const allCostPages = [
    { title: 'Dental Treatment Cost', path: '/dental-treatment-cost-ghaziabad' },
    { title: 'Dental Implant Cost', path: '/dental-implant-cost-ghaziabad' },
    { title: 'Root Canal Cost', path: '/root-canal-cost-ghaziabad' },
    { title: 'Tooth Cap / Crown Cost', path: '/tooth-cap-cost-ghaziabad' },
    { title: 'Tooth Filling Cost', path: '/tooth-filling-cost-ghaziabad' },
    { title: 'Teeth Cleaning Cost', path: '/teeth-cleaning-cost-ghaziabad' },
    { title: 'Wisdom Tooth Removal Cost', path: '/wisdom-tooth-extraction-cost-ghaziabad' },
    { title: 'Tooth Extraction Cost', path: '/tooth-extraction-cost-ghaziabad' },
    { title: 'Dental Bridge Cost', path: '/dental-bridge-cost-ghaziabad' },
    { title: 'Dentures Cost in Ghaziabad', path: '/dentures-cost-ghaziabad' },
    { title: 'Teeth Whitening Cost', path: '/teeth-whitening-cost-ghaziabad' },
  ];

  const totalPagesCount = allTreatmentPages.length + allSymptomPages.length + allCostPages.length;

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl font-bold text-blue-950">
            Dental Treatments in Ghaziabad, Noida Extension &amp; Greater Noida
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Explore our complete 9-category interactive services hub or jump straight into detailed
            treatment guides at Oracle Dental Clinic &amp; Implant Center.
          </p>
          <div className="pt-2">
            <a
              id="services-open-hub-btn"
              href="/dental-services"
              onClick={(e) => handlePageClick(e, '/dental-services')}
              className="min-h-[44px] inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-sm transition-colors"
            >
              <span>Open Interactive 9-Category Dental Services Page</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Main Services Grid with Treatment-Specific WhatsApp CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, idx) => {
            const waUrl = getTreatmentWhatsAppUrl(service.whatsappTopic);
            const slug = service.whatsappTopic.replace(/[^a-z0-9]+/g, '_');

            return (
              <div
                key={service.path}
                id={`service-card-${idx}`}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-blue-300 shadow-xs transition-colors group flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 bg-blue-50 text-blue-700 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    <a
                      href={service.path}
                      onClick={(e) => handlePageClick(e, service.path)}
                      className="hover:text-blue-700 transition-colors"
                    >
                      {service.title}
                    </a>
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed">{service.desc}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Inquire about ${service.title} on WhatsApp`}
                    onClick={() =>
                      trackClinicEvent('appointment_cta_click', {
                        placement: 'home_service_card_whatsapp',
                        service_category: slug,
                      })
                    }
                    className="w-full min-h-[44px] bg-[#16A34A] hover:bg-[#15803D] text-white py-2.5 px-4 rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Book {service.title} on WhatsApp</span>
                  </a>
                  <a
                    href={service.path}
                    onClick={(e) => handlePageClick(e, service.path)}
                    className="w-full min-h-[40px] bg-slate-100 text-slate-800 hover:bg-blue-50 hover:text-blue-700 py-2 px-4 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Read {service.title} Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Complete Crawlable Internal Link Directory */}
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-8">
          <div className="text-center space-y-2">
            <p className="text-amber-400 font-semibold text-xs tracking-wide">
              Complete Dental Directory
            </p>
            <h3 className="text-2xl font-bold text-white">
              All Dental Treatments, Symptoms &amp; Cost Guides ({totalPagesCount} Pages)
            </h3>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              Select any topic below to view clinical guidance, recovery details, and appointment options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-4">
              <h4 className="text-amber-400 font-bold text-sm flex items-center gap-2 border-b border-slate-700 pb-2">
                <ShieldCheck className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>Treatments &amp; Locations ({allTreatmentPages.length})</span>
              </h4>
              <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-200">
                {allTreatmentPages.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => handlePageClick(e, item.path)}
                    className="p-2 rounded-lg bg-slate-900/60 hover:bg-amber-500 hover:text-slate-950 font-medium transition-colors flex items-center justify-between group"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-slate-950 shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-4">
              <h4 className="text-cyan-400 font-bold text-sm flex items-center gap-2 border-b border-slate-700 pb-2">
                <HeartPulse className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                <span>Symptoms &amp; Concerns ({allSymptomPages.length})</span>
              </h4>
              <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-200">
                {allSymptomPages.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => handlePageClick(e, item.path)}
                    className="p-2 rounded-lg bg-slate-900/60 hover:bg-cyan-400 hover:text-slate-950 font-medium transition-colors flex items-center justify-between group"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-slate-950 shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700 space-y-4">
              <h4 className="text-emerald-400 font-bold text-sm flex items-center gap-2 border-b border-slate-700 pb-2">
                <Sparkles className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                <span>Ghaziabad Cost Guides ({allCostPages.length})</span>
              </h4>
              <div className="grid grid-cols-1 gap-1.5 text-xs text-slate-200">
                {allCostPages.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => handlePageClick(e, item.path)}
                    className="p-2 rounded-lg bg-slate-900/60 hover:bg-emerald-400 hover:text-slate-950 font-medium transition-colors flex items-center justify-between group"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-slate-950 shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
