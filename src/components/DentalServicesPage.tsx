import React, { useState } from 'react';
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  HelpCircle,
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import TreatmentAppointmentCTA from './TreatmentAppointmentCTA';
import { GBP_CONFIG, getTreatmentWhatsAppUrl } from '../config/googleBusinessProfile';
import { DENTAL_SERVICE_CATEGORIES, DentalServiceItem } from '../data/dentalServicesCatalog';
import { trackClinicEvent } from '../utils/analytics';
import { preloadRoute } from '../utils/routePreloader';

const SERVICES_HUB_DIRECTORY = [
  {
    heading: 'Dental Implants & Tooth Replacement',
    links: [
      { label: 'Dental Implants in Ghaziabad', path: '/dental-implants' },
      { label: 'Dental Implant Cost in Ghaziabad', path: '/dental-implant-cost-ghaziabad' },
      { label: 'Full Mouth Dental Implants', path: '/full-mouth-dental-implants' },
      { label: 'Dental Implant After Tooth Extraction', path: '/dental-implant-after-tooth-extraction' },
      { label: 'Missing Teeth Replacement Options', path: '/missing-teeth' },
      { label: 'Fixed Dental Bridges', path: '/dental-bridges' },
      { label: 'Dental Bridge Cost in Ghaziabad', path: '/dental-bridge-cost-ghaziabad' },
      { label: 'Complete & Partial Dentures', path: '/dentures' },
      { label: 'Dentures Cost in Ghaziabad', path: '/dentures-cost-ghaziabad' },
    ],
  },
  {
    heading: 'Root Canal, Cavities & Tooth Restoration',
    links: [
      { label: 'Root Canal Treatment (RCT)', path: '/root-canal-treatment' },
      { label: 'Root Canal Cost in Ghaziabad', path: '/root-canal-cost-ghaziabad' },
      { label: 'Tooth Pain Treatment', path: '/tooth-pain-treatment' },
      { label: 'Dental Cavity Treatment', path: '/cavity-treatment' },
      { label: 'Black / Dark Tooth Care', path: '/black-tooth' },
      { label: 'Tooth-Colored Dental Fillings', path: '/dental-fillings' },
      { label: 'Tooth Filling Cost in Ghaziabad', path: '/tooth-filling-cost-ghaziabad' },
      { label: 'Broken Tooth Repair', path: '/broken-tooth-treatment' },
      { label: 'Chipped Tooth Repair', path: '/chipped-tooth' },
      { label: 'Tooth Sensitivity Relief', path: '/tooth-sensitivity' },
    ],
  },
  {
    heading: 'Cosmetic Dentistry, Crowns & Orthodontics',
    links: [
      { label: 'Cosmetic Dentistry', path: '/cosmetic-dentistry' },
      { label: 'Smile Makeover in Ghaziabad', path: '/smile-makeover-ghaziabad' },
      { label: 'Dental Veneers', path: '/dental-veneers' },
      { label: 'Teeth Whitening', path: '/teeth-whitening' },
      { label: 'Teeth Whitening Cost in Ghaziabad', path: '/teeth-whitening-cost-ghaziabad' },
      { label: 'Zirconia Crowns', path: '/zirconia-crowns' },
      { label: 'Tooth Cap / Dental Crown', path: '/tooth-cap' },
      { label: 'Tooth Cap Cost in Ghaziabad', path: '/tooth-cap-cost-ghaziabad' },
      { label: 'Clear Aligners', path: '/clear-aligners' },
      { label: 'Dental Braces', path: '/dental-braces' },
    ],
  },
  {
    heading: 'Cleaning, Gum Care & Pediatric Dentistry',
    links: [
      { label: 'Teeth Cleaning & Scaling', path: '/teeth-cleaning' },
      { label: 'Teeth Cleaning Cost in Ghaziabad', path: '/teeth-cleaning-cost-ghaziabad' },
      { label: 'Periodontal & Gum Treatment', path: '/periodontal-gum-treatment-ghaziabad' },
      { label: 'Bad Breath Treatment', path: '/bad-breath-treatment' },
      { label: 'Loose Tooth Treatment', path: '/loose-tooth-treatment' },
      { label: 'Kids Dentist & Pediatric Care', path: '/kids-dentist' },
    ],
  },
  {
    heading: 'Oral Surgery, Extractions & Urgent Care',
    links: [
      { label: 'Wisdom Tooth Extraction', path: '/wisdom-tooth-extraction' },
      { label: 'Wisdom Tooth Extraction Cost', path: '/wisdom-tooth-extraction-cost-ghaziabad' },
      { label: 'Impacted Wisdom Tooth Care', path: '/impacted-wisdom-tooth' },
      { label: 'Tooth Extraction', path: '/tooth-extraction' },
      { label: 'Tooth Extraction Cost in Ghaziabad', path: '/tooth-extraction-cost-ghaziabad' },
      { label: 'Dental Abscess Treatment', path: '/dental-abscess-treatment' },
      { label: 'Emergency Dentist in Ghaziabad', path: '/emergency-dentist-ghaziabad' },
    ],
  },
  {
    heading: 'Local Clinic, Knowledge Hub & Fee Guide',
    links: [
      { label: 'Dental FAQs & Patient Education Hub (130+ Q&As)', path: '/dental-faqs' },
      { label: 'Dentist in Chipiyana Buzurg, Ghaziabad', path: '/dentist-chipiyana-buzurg-ghaziabad' },
      { label: 'Complete Dental Treatment Cost Guide', path: '/dental-treatment-cost-ghaziabad' },
      { label: 'Privacy Policy', path: '/privacy-policy' },
    ],
  },
];

interface DentalServicesPageProps {
  handleCall?: () => void;
  handleWhatsApp?: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath: (path: string) => void;
}

export default function DentalServicesPage({
  navigateToHome,
  navigateToPath,
}: DentalServicesPageProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({});
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const visibleCategories =
    activeCategoryId === 'all'
      ? DENTAL_SERVICE_CATEGORIES
      : DENTAL_SERVICE_CATEGORIES.filter((cat) => cat.id === activeCategoryId);

  const toggleService = (service: DentalServiceItem, categoryId: string, nextOpen: boolean) => {
    setExpandedIds((prev) => ({ ...prev, [service.id]: nextOpen }));
    if (nextOpen) {
      trackClinicEvent('service_expand', {
        placement: 'dental_services_hub',
        service_category: categoryId,
        interaction_label: service.id,
      });
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    navigateToPath(path);
  };

  return (
    <div className="bg-[#FFF8EC] min-h-screen text-[#26352F] leading-relaxed">
      <Breadcrumbs
        items={[{ label: 'Dental Treatments & Services', path: '/dental-services' }]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#087B57] via-[#066647] to-[#00A99D] text-white py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#E5F5EC]">
            <span className="font-bold text-[#FFD36A]">{GBP_CONFIG.BUSINESS_NAME}</span>
            <span aria-hidden="true">·</span>
            <span>{GBP_CONFIG.DOCTOR_TITLE}</span>
            <span aria-hidden="true">·</span>
            <span>Chipiyana Buzurg, Ghaziabad</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.15] max-w-4xl">
            Dental Treatments &amp; Services in Greater Noida, Noida Extension and Ghaziabad
          </h1>

          <p className="text-[#E5F5EC] text-base sm:text-lg max-w-3xl leading-relaxed">
            Complete Dental Care, Advanced Dental Implants, Cosmetic Dentistry and Smile Makeovers at{' '}
            <strong className="text-white">Oracle Dental Clinic</strong>, conveniently located in Chipiyana Buzurg near the
            Ghaziabad–Noida Extension–Greater Noida region.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            <a
              id="services-hero-whatsapp-btn"
              href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book dental consultation on WhatsApp"
              onClick={() =>
                trackClinicEvent('appointment_cta_click', {
                  placement: 'services_hero_whatsapp',
                  service_category: 'all_services',
                })
              }
              className="min-h-[48px] bg-[#C63621] hover:bg-[#A82B18] text-white font-bold text-sm sm:text-base py-3 px-6 rounded-full shadow-md transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD36A]"
            >
              <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Book Consultation on WhatsApp</span>
            </a>
            <a
              id="services-hero-call-btn"
              href={GBP_CONFIG.CALL_URL}
              aria-label={`Call Oracle Dental Clinic at ${GBP_CONFIG.PHONE_DISPLAY}`}
              onClick={() =>
                trackClinicEvent('call_click', {
                  placement: 'services_hero_call',
                  service_category: 'all_services',
                })
              }
              className="min-h-[48px] bg-white hover:bg-[#FFF8EC] text-[#087B57] font-bold text-sm sm:text-base py-3 px-6 rounded-full shadow-md transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD36A]"
            >
              <PhoneCall className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Call {GBP_CONFIG.PHONE_DISPLAY}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#E5F5EC] pt-2 border-t border-white/15">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#FFD36A] shrink-0" aria-hidden="true" />
              <span>{GBP_CONFIG.SHORT_ADDRESS}, UP 201009</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#FFD36A] shrink-0" aria-hidden="true" />
              <span>{GBP_CONFIG.HOURS}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter Bar (Accessible Segmented Buttons) */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-[#087B57]/12 sticky top-20 z-30">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div
            className="flex items-center gap-2 overflow-x-auto pb-1"
            role="tablist"
            aria-label="Filter dental service categories"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeCategoryId === 'all'}
              onClick={() => setActiveCategoryId('all')}
              className={`min-h-[40px] px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087B57] ${
                activeCategoryId === 'all'
                  ? 'bg-[#087B57] text-white shadow-xs'
                  : 'bg-[#E5F5EC] text-[#26352F] hover:bg-[#00A99D]/15'
              }`}
            >
              All 9 Categories
            </button>
            {DENTAL_SERVICE_CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={activeCategoryId === category.id}
                onClick={() => setActiveCategoryId(category.id)}
                className={`min-h-[40px] px-4 py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087B57] ${
                  activeCategoryId === category.id
                    ? 'bg-[#C63621] text-white shadow-xs'
                    : 'bg-[#FFF8EC] text-[#26352F] border border-[#087B57]/12 hover:bg-[#E5F5EC]'
                }`}
              >
                {category.number}. {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main 9-Category Services Directory (Crawlable Semantic <details> + Same-Page Expansion) */}
      <div className="max-w-6xl mx-auto px-4 py-10 sm:py-14 space-y-14">
        {visibleCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            aria-labelledby={`heading-${category.id}`}
            className="space-y-6"
          >
            <div className="border-b border-[#087B57]/15 pb-4 space-y-1.5">
              <h2
                id={`heading-${category.id}`}
                className="text-2xl sm:text-3xl font-extrabold text-[#087B57]"
              >
                {category.number}. {category.name}
              </h2>
              <p className="text-[#26352F]/75 text-sm sm:text-base max-w-3xl">{category.summary}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {category.items.map((service) => {
                const isOpen = !!expandedIds[service.id];
                const whatsappHref = getTreatmentWhatsAppUrl(service.whatsappTopic);
                const imgFailed = !!failedImages[service.id];

                return (
                  <article
                    key={service.id}
                    className={`bg-white rounded-3xl border transition-colors overflow-hidden shadow-xs ${
                      isOpen
                        ? 'border-[#00A99D] shadow-md lg:col-span-2'
                        : 'border-[#087B57]/12 hover:border-[#00A99D]/50'
                    }`}
                  >
                    {/* Semantic native <details> keeps all clinical SEO copy crawlable & works even without JS */}
                    <details
                      open={isOpen}
                      onToggle={(e) => {
                        const target = e.currentTarget;
                        toggleService(service, category.id, target.open);
                      }}
                    >
                      <summary className="cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00A99D]/40 rounded-t-3xl block">
                        <div className={isOpen ? 'grid grid-cols-1 md:grid-cols-12' : ''}>
                          <div
                            className={`relative bg-[#E5F5EC] overflow-hidden ${
                              isOpen ? 'md:col-span-5 h-56 md:h-full' : 'aspect-[16/9] w-full'
                            }`}
                          >
                            {imgFailed ? (
                              <div className="w-full h-full min-h-[180px] flex flex-col items-center justify-center p-4 text-center bg-[#E5F5EC] text-[#26352F]">
                                <span className="font-bold text-sm text-[#087B57]">
                                  {service.title}
                                </span>
                                <span className="text-xs text-[#26352F]/70 mt-1">
                                  Oracle Dental Clinic &amp; Implant Center
                                </span>
                              </div>
                            ) : (
                              <img
                                src={service.image}
                                srcSet={
                                  service.image.endsWith('-800.webp')
                                    ? `${service.image.replace('-800.webp', '-400.webp')} 400w, ${service.image} 800w`
                                    : undefined
                                }
                                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 48vw, 560px"
                                alt={service.imageAlt}
                                width="640"
                                height="360"
                                loading="lazy"
                                decoding="async"
                                onError={() =>
                                  setFailedImages((prev) => ({ ...prev, [service.id]: true }))
                                }
                                className="w-full h-full object-cover"
                              />
                            )}
                          </div>

                          <div
                            className={`p-5 sm:p-6 flex flex-col justify-between gap-4 ${
                              isOpen ? 'md:col-span-7' : ''
                            }`}
                          >
                            <div className="space-y-2">
                              <p className="text-xs font-bold uppercase tracking-wider text-[#B84D00]">
                                {category.name} · Oracle Dental Clinic
                              </p>
                              <h3 className="text-lg sm:text-xl font-extrabold text-[#26352F] leading-snug">
                                {service.title}
                              </h3>
                              <p className="text-sm text-[#26352F]/75 leading-relaxed">
                                {service.shortDescription}
                              </p>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-[#087B57]/10">
                              <span className="text-xs sm:text-sm font-bold text-[#087B57] inline-flex items-center gap-1.5">
                                {isOpen ? 'Hide Treatment Details' : 'Read Full Treatment Details'}
                              </span>
                              <span
                                aria-hidden="true"
                                className={`w-9 h-9 rounded-full bg-[#E5F5EC] text-[#087B57] inline-flex items-center justify-center transition-transform duration-200 ${
                                  isOpen ? 'rotate-180 bg-[#087B57] text-white' : ''
                                }`}
                              >
                                <ChevronDown className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </summary>

                      {/* Expanded Clinical Details Panel (Same Page, Zero Redirects) */}
                      <div className="px-5 sm:px-7 pb-6 pt-4 border-t border-[#087B57]/12 bg-[#E5F5EC]/55 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                          <div className="space-y-1.5">
                            <h4 className="text-sm font-bold text-slate-950">What the Treatment Is</h4>
                            <p className="text-sm text-slate-700 leading-relaxed">{service.whatItIs}</p>
                          </div>
                          <div className="space-y-1.5">
                            <h4 className="text-sm font-bold text-slate-950">Who May Need It</h4>
                            <p className="text-sm text-slate-700 leading-relaxed">{service.whoMayNeedIt}</p>
                          </div>
                          <div className="space-y-1.5">
                            <h4 className="text-sm font-bold text-slate-950">Common Patient Concerns</h4>
                            <p className="text-sm text-slate-700 leading-relaxed">{service.commonConcerns}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200/80">
                          <div className="space-y-2.5">
                            <h4 className="text-sm font-bold text-slate-950">Treatment Process</h4>
                            <ol className="space-y-2 text-sm text-slate-700 list-decimal pl-5">
                              {service.process.map((step, idx) => (
                                <li key={idx}>{step}</li>
                              ))}
                            </ol>
                          </div>

                          <div className="space-y-4">
                            <div className="space-y-2">
                              <h4 className="text-sm font-bold text-slate-950 flex items-center gap-1.5">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                                <span>Potential Benefits</span>
                              </h4>
                              <ul className="space-y-1.5 text-sm text-slate-700 list-disc pl-5">
                                {service.benefits.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>

                            <div className="space-y-2">
                              <h4 className="text-sm font-bold text-slate-950 flex items-center gap-1.5">
                                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                                <span>Limitations &amp; Considerations</span>
                              </h4>
                              <ul className="space-y-1.5 text-sm text-slate-700 list-disc pl-5">
                                {service.limitations.map((item, idx) => (
                                  <li key={idx}>{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200/80">
                          <div className="space-y-2">
                            <h4 className="text-sm font-bold text-slate-950 flex items-center gap-1.5">
                              <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
                              <span>Aftercare &amp; Maintenance</span>
                            </h4>
                            <ul className="space-y-1.5 text-sm text-slate-700 list-disc pl-5">
                              {service.aftercare.map((tip, idx) => (
                                <li key={idx}>{tip}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-2.5">
                            <h4 className="text-sm font-bold text-slate-950 flex items-center gap-1.5">
                              <HelpCircle className="w-4 h-4 text-blue-700 shrink-0" aria-hidden="true" />
                              <span>Frequently Asked Questions</span>
                            </h4>
                            <div className="space-y-3">
                              {service.faqs.map((faq, idx) => (
                                <div key={idx} className="text-sm">
                                  <p className="font-semibold text-slate-900">{faq.q}</p>
                                  <p className="text-slate-600 mt-0.5">{faq.a}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Treatment-Specific Appointment CTAs */}
                        <div className="pt-4 border-t border-[#087B57]/12 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
                          <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ask about ${service.title} on WhatsApp`}
                            onClick={() =>
                              trackClinicEvent('appointment_cta_click', {
                                placement: 'services_card_whatsapp',
                                service_category: category.id,
                                interaction_label: service.id,
                              })
                            }
                            className="min-h-[44px] bg-[#C63621] hover:bg-[#A82B18] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#C63621]/40"
                          >
                            <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                            <span>WhatsApp About {service.title.split('(')[0].trim()}</span>
                          </a>

                          <a
                            href={GBP_CONFIG.CALL_URL}
                            aria-label={`Call ${GBP_CONFIG.PHONE_DISPLAY} to book ${service.title}`}
                            onClick={() =>
                              trackClinicEvent('call_click', {
                                placement: 'services_card_call',
                                service_category: category.id,
                                interaction_label: service.id,
                              })
                            }
                            className="min-h-[44px] bg-[#087B57] hover:bg-[#066647] text-white font-bold text-sm px-5 py-2.5 rounded-full transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#00A99D]/40"
                          >
                            <PhoneCall className="w-4 h-4 shrink-0" aria-hidden="true" />
                            <span>Call {GBP_CONFIG.PHONE_DISPLAY}</span>
                          </a>

                          {service.deepGuidePath && (
                            <a
                              href={service.deepGuidePath}
                              onClick={(e) => handleLinkClick(e, service.deepGuidePath!)}
                              className="min-h-[44px] bg-white hover:bg-[#FFF8EC] text-[#26352F] border border-[#087B57]/20 font-semibold text-sm px-4 py-2.5 rounded-full transition-colors inline-flex items-center justify-center gap-1.5"
                            >
                              <span>Dedicated Treatment Guide</span>
                              <ArrowRight className="w-4 h-4 shrink-0 text-[#087B57]" aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </div>
                    </details>
                    {service.deepGuidePath && (
                      <div className="px-5 sm:px-6 py-3 bg-[#FFF8EC]/70 border-t border-[#087B57]/10 flex items-center justify-between gap-2">
                        <span className="text-xs text-[#26352F]/75">Dedicated clinical page</span>
                        <a
                          href={service.deepGuidePath}
                          onMouseEnter={() => preloadRoute(service.deepGuidePath!)}
                          onTouchStart={() => preloadRoute(service.deepGuidePath!)}
                          onClick={(e) => handleLinkClick(e, service.deepGuidePath!)}
                          className="text-xs sm:text-sm font-bold text-[#087B57] hover:text-[#FF654F] inline-flex items-center gap-1 transition-colors"
                        >
                          <span>Read {service.title.split('(')[0].trim()} Guide</span>
                          <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        </a>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </section>
        ))}

        {/* Categorized Complete Treatment, Symptom & Cost Directory */}
        <section
          id="all-clinical-guides"
          aria-labelledby="all-clinical-guides-heading"
          className="cv-auto bg-white rounded-3xl border border-[#087B57]/12 shadow-xs p-6 sm:p-8 space-y-6"
        >
          <div className="space-y-1.5">
            <h2
              id="all-clinical-guides-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#087B57]"
            >
              Complete Treatment, Symptom &amp; Cost Guide Directory
            </h2>
            <p className="text-sm text-[#26352F]/80 max-w-3xl">
              Jump directly to any treatment guide, dental symptom overview, or Ghaziabad pricing page
              at Oracle Dental Clinic &amp; Implant Center.
            </p>
          </div>

          <nav aria-label="Categorized dental services, symptoms, and cost guides">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES_HUB_DIRECTORY.map((group) => (
                <div
                  key={group.heading}
                  className="bg-[#FFF8EC]/70 rounded-2xl border border-[#087B57]/12 p-5 space-y-3"
                >
                  <h3 className="text-base font-extrabold text-[#087B57] border-b border-[#087B57]/12 pb-2">
                    {group.heading}
                  </h3>
                  <ul className="space-y-1.5 text-sm">
                    {group.links.map((item) => (
                      <li key={item.path}>
                        <a
                          href={item.path}
                          onMouseEnter={() => preloadRoute(item.path)}
                          onTouchStart={() => preloadRoute(item.path)}
                          onClick={(e) => handleLinkClick(e, item.path)}
                          className="text-[#26352F] hover:text-[#087B57] hover:underline underline-offset-2 font-medium inline-flex items-center gap-1.5 transition-colors"
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-[#FF8A24] shrink-0" aria-hidden="true" />
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </section>

        {/* Honest Location & Service Area Transparency Note */}
        <section className="bg-white rounded-3xl border border-[#087B57]/12 shadow-xs p-6 sm:p-8 space-y-3">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#087B57]">
            Conveniently Located in Chipiyana Buzurg for Ghaziabad, Noida Extension &amp; Greater Noida Patients
          </h2>
          <p className="text-sm sm:text-base text-[#26352F]/80 leading-relaxed">
            <strong>{GBP_CONFIG.BUSINESS_NAME}</strong> operates from our single physical clinic at{' '}
            <strong>{GBP_CONFIG.ADDRESS}</strong>, led by <strong>{GBP_CONFIG.DOCTOR_TITLE}</strong>.
            Because Chipiyana Buzurg sits right along the Ghaziabad–Greater Noida West border near Jaat
            Chowk, <strong>ABES Engineering College</strong>, and <strong>Crossings Republik</strong>,
            patients from <strong>Noida Extension</strong>, <strong>Greater Noida</strong>,{' '}
            <strong>Shahberi</strong>, <strong>Lal Kuan</strong>, and central{' '}
            <strong>Ghaziabad</strong> visit us conveniently for consultations and staged dental care.
          </p>
        </section>
      </div>

      <TreatmentAppointmentCTA treatmentName="Dental Treatments & Services" />
    </div>
  );
}
