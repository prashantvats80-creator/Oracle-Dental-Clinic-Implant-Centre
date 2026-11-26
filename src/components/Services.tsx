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
    { title: 'Emergency Dentist in Ghaziabad', path: '/emergency-dentist-ghaziabad' },
    { title: 'Dentist & Dental Clinic in Chipiyana, Ghaziabad', path: '/dentist-chipiyana-buzurg-ghaziabad' },
  ];

  const allSymptomPages = [
    { title: 'Tooth Pain Treatment', path: '/tooth-pain-treatment' },
    { title: 'Tooth Sensitivity Relief', path: '/tooth-sensitivity' },
    { title: 'Bad Breath Treatment', path: '/bad-breath-treatment' },
    { title: 'Loose Tooth Treatment', path: '/loose-tooth-treatment' },
    { title: 'Broken Tooth Repair', path: '/broken-tooth-treatment' },
    { title: 'Chipped Tooth Repair', path: '/chipped-tooth' },
    { title: 'Black / Dark Tooth Care', path: '/black-tooth' },
    { title: 'Missing Teeth Options', path: '/missing-teeth' },
    { title: 'Cavity Treatment', path: '/cavity-treatment' },
    { title: 'Dental Abscess Treatment', path: '/dental-abscess-treatment' },
    { title: 'Gum & Periodontal Treatment (Bleeding, Swollen, Recession)', path: '/periodontal-gum-treatment-ghaziabad' },
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

  const cardAccents = [
    { iconBg: 'bg-gradient-to-br from-[#087B57] to-[#00A99D] text-white', topBar: 'bg-[#087B57]' },
    { iconBg: 'bg-gradient-to-br from-[#FF8A24] to-[#FFB347] text-white', topBar: 'bg-[#FF8A24]' },
    { iconBg: 'bg-gradient-to-br from-[#FF654F] to-[#FF8A24] text-white', topBar: 'bg-[#FF654F]' },
    { iconBg: 'bg-gradient-to-br from-[#00A99D] to-[#087B57] text-white', topBar: 'bg-[#00A99D]' },
  ];

  return (
    <section id="services" className="cv-auto py-14 sm:py-16 bg-white border-t border-[#087B57]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-3">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[#B84D00]">
            Chipiyana Buzurg • Jaat Chowk • Ghaziabad
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#087B57]">
            Dental Treatments in Ghaziabad, Noida Extension &amp; Greater Noida
          </h2>
          <p className="text-[#26352F]/80 max-w-2xl mx-auto text-sm sm:text-base">
            From painless root canal treatment and dental implants to smile makeovers, zirconia crowns,
            and clear aligners—explore our 9-category services hub or{' '}
            <a href="#contact" className="font-bold text-[#087B57] hover:text-[#C63621] underline underline-offset-2">
              get directions &amp; contact our clinic
            </a>.
          </p>
          <div className="pt-2">
            <a
              id="services-open-hub-btn"
              href="/dental-services"
              onClick={(e) => handlePageClick(e, '/dental-services')}
              className="min-h-[48px] inline-flex items-center gap-2 bg-gradient-to-r from-[#C93B25] to-[#B84D00] hover:from-[#A92D1A] hover:to-[#963E00] text-white font-extrabold text-sm px-7 py-3 rounded-full shadow-[0_8px_20px_rgba(201,59,37,0.28)] transition-all"
            >
              <span>Open Interactive 9-Category Dental Services Page</span>
              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Main Services Grid with Vibrant Icon Tiles & Treatment-Specific WhatsApp CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {services.map((service, idx) => {
            const waUrl = getTreatmentWhatsAppUrl(service.whatsappTopic);
            const slug = service.whatsappTopic.replace(/[^a-z0-9]+/g, '_');
            const accent = cardAccents[idx % cardAccents.length];

            return (
              <div
                key={service.path}
                id={`service-card-${idx}`}
                className="relative overflow-hidden bg-[#FFF8EC]/70 rounded-3xl p-6 border border-[#087B57]/12 hover:border-[#00A99D] shadow-xs hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 group flex flex-col justify-between"
              >
                <span aria-hidden="true" className={`absolute top-0 inset-x-0 h-1 ${accent.topBar}`} />
                <div>
                  <div className={`w-12 h-12 ${accent.iconBg} rounded-2xl flex items-center justify-center mb-4 shadow-xs`}>
                    <service.icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-extrabold text-[#26352F] mb-2">
                    <a
                      href={service.path}
                      onClick={(e) => handlePageClick(e, service.path)}
                      className="hover:text-[#087B57] transition-colors"
                    >
                      {service.title}
                    </a>
                  </h3>
                  <p className="text-[#26352F]/80 text-sm mb-5 leading-relaxed">{service.desc}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Book ${service.title} on WhatsApp — Oracle Dental Clinic`}
                    onClick={() =>
                      trackClinicEvent('appointment_cta_click', {
                        placement: 'home_service_card_whatsapp',
                        service_category: slug,
                      })
                    }
                    className="w-full min-h-[44px] bg-[#087B57] hover:bg-[#066647] text-white py-2.5 px-4 rounded-full text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>Book {service.title} on WhatsApp</span>
                  </a>
                  <a
                    href={service.path}
                    onClick={(e) => handlePageClick(e, service.path)}
                    className="w-full min-h-[42px] bg-white text-[#087B57] border border-[#087B57]/20 hover:bg-[#E5F5EC] py-2 px-4 rounded-full text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Read {service.title} Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0 text-[#FF8A24]" aria-hidden="true" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Complete Crawlable Internal Link Directory */}
        <div className="bg-gradient-to-br from-[#087B57] via-[#066647] to-[#008F84] text-white rounded-3xl p-6 sm:p-8 border border-[#066647] space-y-8 shadow-md">
          <div className="text-center space-y-2">
            <p className="text-[#FFD36A] font-bold text-xs tracking-wide uppercase">
              Complete Dental Directory
            </p>
            <h3 className="text-2xl font-extrabold text-white">
              All Dental Treatments, Symptoms &amp; Cost Guides ({totalPagesCount} Pages)
            </h3>
            <p className="text-[#E5F5EC] text-sm max-w-xl mx-auto">
              Select any topic below to view clinical guidance, recovery details, and appointment options.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-2">
            <div className="bg-[#066647]/80 p-5 rounded-2xl border border-white/15 space-y-4">
              <h4 className="text-[#FFD36A] font-bold text-sm flex items-center gap-2 border-b border-white/15 pb-2">
                <ShieldCheck className="w-4 h-4 text-[#FFD36A]" aria-hidden="true" />
                <span>Treatments &amp; Locations ({allTreatmentPages.length})</span>
              </h4>
              <div className="grid grid-cols-1 gap-1.5 text-xs text-white/95">
                {allTreatmentPages.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => handlePageClick(e, item.path)}
                    className="p-2 rounded-lg bg-[#05523A]/70 hover:bg-[#B84D00] hover:text-white font-medium transition-colors flex items-center justify-between group"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 text-[#FFD36A] group-hover:text-white shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-[#066647]/80 p-5 rounded-2xl border border-white/15 space-y-4">
              <h4 className="text-[#FFD36A] font-bold text-sm flex items-center gap-2 border-b border-white/15 pb-2">
                <HeartPulse className="w-4 h-4 text-[#FFD36A]" aria-hidden="true" />
                <span>Symptoms &amp; Concerns ({allSymptomPages.length})</span>
              </h4>
              <div className="grid grid-cols-1 gap-1.5 text-xs text-white/95">
                {allSymptomPages.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => handlePageClick(e, item.path)}
                    className="p-2 rounded-lg bg-[#05523A]/70 hover:bg-[#067067] hover:text-white font-medium transition-colors flex items-center justify-between group"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 text-[#FFD36A] group-hover:text-white shrink-0" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-[#066647]/80 p-5 rounded-2xl border border-white/15 space-y-4">
              <h4 className="text-[#FFD36A] font-bold text-sm flex items-center gap-2 border-b border-white/15 pb-2">
                <Sparkles className="w-4 h-4 text-[#FFD36A]" aria-hidden="true" />
                <span>Ghaziabad Cost Guides ({allCostPages.length})</span>
              </h4>
              <div className="grid grid-cols-1 gap-1.5 text-xs text-white/95">
                {allCostPages.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => handlePageClick(e, item.path)}
                    className="p-2 rounded-lg bg-[#05523A]/70 hover:bg-[#C63621] hover:text-white font-medium transition-colors flex items-center justify-between group"
                  >
                    <span>{item.title}</span>
                    <ArrowRight className="w-3 h-3 text-[#FFD36A] group-hover:text-white shrink-0" aria-hidden="true" />
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
