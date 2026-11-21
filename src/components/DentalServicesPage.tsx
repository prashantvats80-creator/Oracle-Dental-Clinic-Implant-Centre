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
    <div className="bg-slate-50 min-h-screen text-slate-900 leading-relaxed">
      <Breadcrumbs
        items={[{ label: 'Dental Treatments & Services', path: '/dental-services' }]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-blue-200">
            <span className="font-semibold text-amber-300">{GBP_CONFIG.BUSINESS_NAME}</span>
            <span aria-hidden="true">·</span>
            <span>{GBP_CONFIG.DOCTOR_TITLE}</span>
            <span aria-hidden="true">·</span>
            <span>Chipiyana Buzurg, Ghaziabad</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.15] max-w-4xl">
            Dental Treatments &amp; Services in Greater Noida, Noida Extension and Ghaziabad
          </h1>

          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed">
            Complete Dental Care, Advanced Dental Implants, Cosmetic Dentistry and Smile Makeovers at{' '}
            <strong>Oracle Dental Clinic</strong>, conveniently located in Chipiyana Buzurg near the
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
              className="min-h-[48px] bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm sm:text-base py-3 px-6 rounded-xl shadow-md transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
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
              className="min-h-[48px] bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm sm:text-base py-3 px-6 rounded-xl shadow-md transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-300"
            >
              <PhoneCall className="w-5 h-5 shrink-0" aria-hidden="true" />
              <span>Call {GBP_CONFIG.PHONE_DISPLAY}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300 pt-2 border-t border-white/10">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <span>{GBP_CONFIG.SHORT_ADDRESS}, UP 201009</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <span>{GBP_CONFIG.HOURS}</span>
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Category Filter Bar (Accessible Segmented Buttons) */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-30">
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
              className={`min-h-[40px] px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                activeCategoryId === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
                className={`min-h-[40px] px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 ${
                  activeCategoryId === category.id
                    ? 'bg-blue-700 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
            <div className="border-b border-slate-200 pb-4 space-y-1.5">
              <h2
                id={`heading-${category.id}`}
                className="text-2xl sm:text-3xl font-bold text-slate-950"
              >
                {category.number}. {category.name}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base max-w-3xl">{category.summary}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              {category.items.map((service) => {
                const isOpen = !!expandedIds[service.id];
                const whatsappHref = getTreatmentWhatsAppUrl(service.whatsappTopic);
                const imgFailed = !!failedImages[service.id];

                return (
                  <article
                    key={service.id}
                    className={`bg-white rounded-2xl border transition-colors overflow-hidden ${
                      isOpen
                        ? 'border-blue-300 shadow-md lg:col-span-2'
                        : 'border-slate-200 hover:border-slate-300'
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
                      <summary className="cursor-pointer focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40 rounded-t-2xl block">
                        <div className={isOpen ? 'grid grid-cols-1 md:grid-cols-12' : ''}>
                          <div
                            className={`relative bg-slate-100 overflow-hidden ${
                              isOpen ? 'md:col-span-5 h-56 md:h-full' : 'aspect-[16/9] w-full'
                            }`}
                          >
                            {imgFailed ? (
                              <div className="w-full h-full min-h-[180px] flex flex-col items-center justify-center p-4 text-center bg-slate-100 text-slate-600">
                                <span className="font-semibold text-sm text-slate-800">
                                  {service.title}
                                </span>
                                <span className="text-xs text-slate-500 mt-1">
                                  Oracle Dental Clinic &amp; Implant Center
                                </span>
                              </div>
                            ) : (
                              <img
                                src={service.image}
                                alt={service.imageAlt}
                                width="640"
                                height="360"
                                loading="lazy"
                                decoding="async"
                                referrerPolicy="no-referrer"
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
                              <p className="text-xs font-medium text-slate-500">
                                {category.name} · Oracle Dental Clinic
                              </p>
                              <h3 className="text-lg sm:text-xl font-bold text-slate-950 leading-snug">
                                {service.title}
                              </h3>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {service.shortDescription}
                              </p>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                              <span className="text-xs sm:text-sm font-bold text-blue-700 inline-flex items-center gap-1.5">
                                {isOpen ? 'Hide Treatment Details' : 'Read Full Treatment Details'}
                              </span>
                              <span
                                aria-hidden="true"
                                className={`w-9 h-9 rounded-full bg-slate-100 text-slate-700 inline-flex items-center justify-center transition-transform duration-200 ${
                                  isOpen ? 'rotate-180 bg-blue-50 text-blue-700' : ''
                                }`}
                              >
                                <ChevronDown className="w-4 h-4" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </summary>

                      {/* Expanded Clinical Details Panel (Same Page, Zero Redirects) */}
                      <div className="px-5 sm:px-7 pb-6 pt-4 border-t border-slate-200 bg-slate-50/70 space-y-6">
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
                        <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
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
                            className="min-h-[44px] bg-[#16A34A] hover:bg-[#15803D] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
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
                            className="min-h-[44px] bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
                          >
                            <PhoneCall className="w-4 h-4 shrink-0" aria-hidden="true" />
                            <span>Call {GBP_CONFIG.PHONE_DISPLAY}</span>
                          </a>

                          {service.deepGuidePath && (
                            <a
                              href={service.deepGuidePath}
                              onClick={(e) => handleLinkClick(e, service.deepGuidePath!)}
                              className="min-h-[44px] bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 font-semibold text-sm px-4 py-2.5 rounded-xl transition-colors inline-flex items-center justify-center gap-1.5"
                            >
                              <span>Dedicated Treatment Guide</span>
                              <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                            </a>
                          )}
                        </div>
                      </div>
                    </details>
                  </article>
                );
              })}
            </div>
          </section>
        ))}

        {/* Honest Location & Service Area Transparency Note */}
        <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-950">
            Conveniently Located in Chipiyana Buzurg for Ghaziabad, Noida Extension &amp; Greater Noida Patients
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            <strong>{GBP_CONFIG.BUSINESS_NAME}</strong> operates from our single physical clinic at{' '}
            <strong>{GBP_CONFIG.ADDRESS}</strong>, led by <strong>{GBP_CONFIG.DOCTOR_TITLE}</strong>.
            Because Chipiyana Buzurg sits right along the Ghaziabad–Greater Noida West border near Jaat
            Chowk and Crossings Republik, patients from <strong>Noida Extension</strong>,{' '}
            <strong>Greater Noida</strong>, <strong>Shahberi</strong>, <strong>Lal Kuan</strong>, and
            central <strong>Ghaziabad</strong> visit us conveniently for consultations and staged dental
            care.
          </p>
        </section>
      </div>

      <TreatmentAppointmentCTA treatmentName="Dental Treatments & Services" />
    </div>
  );
}
