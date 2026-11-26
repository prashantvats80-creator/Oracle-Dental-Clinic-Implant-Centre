import React, { useState, useMemo } from 'react';
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock,
  Search,
  ChevronDown,
  ArrowRight,
  UserCheck,
  ShieldCheck,
  BookOpen,
  AlertTriangle,
  Sparkles,
  X,
  CheckCircle2,
  ExternalLink,
  Layers,
  Filter,
} from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { InteractiveButton } from './InteractiveButton';
import TreatmentAppointmentCTA from './TreatmentAppointmentCTA';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import {
  DENTAL_KNOWLEDGE_FAQS,
  FAQ_CATEGORIES,
  FAQCategoryName,
  FAQSearchIntent,
  ORACLE_PRICE_NOTICE,
} from '../data/dentalKnowledgeHubFaqs';
import { preloadRoute } from '../utils/routePreloader';

interface DentalFaqsPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections: () => void;
  navigateToHome: () => void;
  navigateToPath: (path: string) => void;
}

const INTENT_FILTERS: ('All Intents' | FAQSearchIntent)[] = [
  'All Intents',
  'Informational',
  'Cost Comparison',
  'Treatment Decision',
  'Commercial Investigation',
  'Local Intent',
  'Post-Treatment Support',
  'Emergency Intent',
];

const TOPIC_CLUSTERS = [
  {
    title: 'Dental Implants & Full-Mouth Rehabilitation',
    desc: 'Single-tooth titanium implants, All-on-4 / All-on-6 full-arch restorations, immediate post-extraction placement, and transparent Delhi NCR & Ghaziabad pricing.',
    links: [
      { label: 'Dental Implants in Ghaziabad', path: '/dental-implants' },
      { label: 'Full Mouth Dental Implants', path: '/full-mouth-dental-implants' },
      { label: 'Dental Implant Cost in Ghaziabad', path: '/dental-implant-cost-ghaziabad' },
      { label: 'Implant After Tooth Extraction', path: '/dental-implant-after-tooth-extraction' },
    ],
  },
  {
    title: 'Root Canal (RCT), Crowns & Bridges',
    desc: 'Rotary root canal treatment, Re-RCT, metal-free CAD/CAM Zirconia crowns, E-Max caps, PFM crowns, and fixed multi-unit dental bridges.',
    links: [
      { label: 'Root Canal Treatment (RCT)', path: '/root-canal-treatment' },
      { label: 'Root Canal Cost Guide', path: '/root-canal-cost-ghaziabad' },
      { label: 'Zirconia Crowns', path: '/zirconia-crowns' },
      { label: 'Tooth Cap & Dental Crowns', path: '/tooth-cap' },
      { label: 'Fixed Dental Bridges', path: '/dental-bridges' },
    ],
  },
  {
    title: 'Smile Makeover, Veneers & Orthodontics',
    desc: 'Porcelain & composite veneers, composite gap bonding, clinical teeth whitening, metal/ceramic braces, and removable clear aligners.',
    links: [
      { label: 'Smile Makeover in Ghaziabad', path: '/smile-makeover-ghaziabad' },
      { label: 'Cosmetic Dentistry', path: '/cosmetic-dentistry' },
      { label: 'Dental Veneers', path: '/dental-veneers' },
      { label: 'Teeth Whitening', path: '/teeth-whitening' },
      { label: 'Clear Aligners', path: '/clear-aligners' },
      { label: 'Dental Braces', path: '/dental-braces' },
    ],
  },
  {
    title: 'Oral Surgery, Gum Care, Kids & Urgent Relief',
    desc: 'Impacted wisdom tooth surgery, ultrasonic scaling, periodontal gum therapy, pediatric dentistry, and daily 9 AM–9 PM emergency dental care.',
    links: [
      { label: 'Wisdom Tooth Extraction', path: '/wisdom-tooth-extraction' },
      { label: 'Impacted Wisdom Tooth', path: '/impacted-wisdom-tooth' },
      { label: 'Teeth Cleaning & Scaling', path: '/teeth-cleaning' },
      { label: 'Periodontal & Gum Treatment', path: '/periodontal-gum-treatment-ghaziabad' },
      { label: 'Kids Dentist', path: '/kids-dentist' },
      { label: 'Emergency Dentist in Ghaziabad', path: '/emergency-dentist-ghaziabad' },
    ],
  },
];

export default function DentalFaqsPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath,
}: DentalFaqsPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All Categories' | FAQCategoryName>(
    'All Categories'
  );
  const [selectedIntent, setSelectedIntent] = useState<'All Intents' | FAQSearchIntent>(
    'All Intents'
  );
  // Collapse state: default to open for crawlers and immediate reading, while allowing user toggle
  const [collapsedMap, setCollapsedMap] = useState<Record<string, boolean>>({});

  const baseUrl = import.meta.env.BASE_URL || '/';
  const imgPrefix = `${baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`}assets/images/`;

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    navigateToPath(path);
  };

  const toggleFaq = (id: string) => {
    setCollapsedMap((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const expandAll = () => setCollapsedMap({});
  const collapseAll = () => {
    const allCollapsed: Record<string, boolean> = {};
    for (const item of DENTAL_KNOWLEDGE_FAQS) {
      allCollapsed[item.id] = true;
    }
    setCollapsedMap(allCollapsed);
  };

  const filteredFaqs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return DENTAL_KNOWLEDGE_FAQS.filter((item) => {
      if (selectedCategory !== 'All Categories' && item.category !== selectedCategory) {
        return false;
      }
      if (selectedIntent !== 'All Intents' && item.searchIntent !== selectedIntent) {
        return false;
      }
      if (!q) return true;
      return (
        item.question.toLowerCase().includes(q) ||
        item.answer.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.relevantTreatment.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, selectedCategory, selectedIntent]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const item of DENTAL_KNOWLEDGE_FAQS) {
      counts[item.category] = (counts[item.category] || 0) + 1;
    }
    return counts;
  }, []);

  const visibleCategories = useMemo(() => {
    return FAQ_CATEGORIES.filter((cat) =>
      filteredFaqs.some((faq) => faq.category === cat.name)
    );
  }, [filteredFaqs]);

  return (
    <div className="bg-[#FFF8EC] text-[#26352F] font-sans leading-relaxed pb-12">
      <Breadcrumbs
        items={[
          { label: 'Dental Services', path: '/dental-services' },
          { label: 'Dental FAQs & Patient Education', path: '/dental-faqs' },
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Dental Knowledge Hub • 28 Categories"
      />

      {/* Hero & Introduction Section */}
      <section className="relative bg-gradient-to-br from-[#053528] via-[#087B57] to-[#065F43] text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#FFD36A]/15 text-[#FFD36A] px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#FFD36A]/30">
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" /> Dental FAQs &amp; Patient Education
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Dental FAQs – Expert Answers to Common Dental Questions
            </h1>

            <p className="text-base sm:text-lg text-[#E5F5EC] leading-relaxed max-w-3xl">
              Welcome to the <strong>Oracle Dental Clinic &amp; Implant Center</strong> Patient Knowledge Hub. This educational resource answers <strong>{DENTAL_KNOWLEDGE_FAQS.length} common patient questions</strong> across <strong>{FAQ_CATEGORIES.length} clinical topics</strong>—covering general dental health, single and full-mouth dental implants, indicative dental implant costs across India, Delhi NCR, Ghaziabad, Noida, Greater Noida, and Noida Extension, root canal treatment (RCT), zirconia and PFM crowns, dental veneers, smile makeovers, cosmetic dentistry, teeth whitening, ultrasonic scaling, braces, clear aligners, wisdom tooth extraction, oral surgery, pediatric care, dental emergencies, medical safety, and post-treatment recovery.
            </p>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-4 text-xs sm:text-sm text-[#FFF8EC] flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#FFD36A] shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <strong className="text-[#FFD36A]">Important Clinical Disclaimer:</strong> All information on this page is provided for general patient education and awareness. It does not substitute for an in-person oral examination, diagnostic radiographs (X-rays / 3D CBCT), or individualized medical advice. Individual treatment suitability, clinical outcomes, and exact written cost estimates always require an in-clinic evaluation.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 pt-1">
              <InteractiveButton
                id="dental-faqs-hero-call-btn"
                onClick={handleCall}
                className="bg-[#FFD36A] hover:bg-[#FFC43D] text-[#053528] font-extrabold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
              >
                <PhoneCall className="w-4 h-4" aria-hidden="true" /> Call {GBP_CONFIG.PHONE_DISPLAY}
              </InteractiveButton>

              <InteractiveButton
                id="dental-faqs-hero-whatsapp-btn"
                onClick={handleWhatsApp}
                className="bg-[#C93B25] hover:bg-[#A92D1A] text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" /> Ask on WhatsApp
              </InteractiveButton>

              <InteractiveButton
                id="dental-faqs-hero-directions-btn"
                onClick={handleDirections}
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 px-6 rounded-xl border border-white/25 transition-all flex items-center justify-center gap-2 text-sm"
              >
                <MapPin className="w-4 h-4 text-[#FFD36A]" aria-hidden="true" /> Get Clinic Directions
              </InteractiveButton>
            </div>
          </div>

          {/* Right Column: Authorship & Clinical Attribution Card */}
          <div className="lg:col-span-4">
            <div className="bg-white text-[#26352F] rounded-3xl p-6 shadow-xl border border-[#087B57]/20 space-y-4">
              <div className="flex items-center gap-3.5">
                <img
                  src={`${imgPrefix}dr-prashant-vats-400.webp`}
                  alt="Dr. Prashant Kumar Vats — BDS, MIDA, Certified Oral Implantologist at Oracle Dental Clinic & Implant Center"
                  width="64"
                  height="64"
                  loading="eager"
                  decoding="async"
                  className="w-16 h-16 rounded-2xl object-cover object-top border-2 border-[#087B57] shrink-0 bg-[#E5F5EC]"
                />
                <div>
                  <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#087B57] bg-[#E5F5EC] px-2.5 py-0.5 rounded-md mb-1">
                    Clinical Authorship
                  </span>
                  <h2 className="text-base font-extrabold text-[#26352F] leading-snug">
                    Dr. Prashant Kumar Vats
                  </h2>
                  <p className="text-xs font-bold text-[#B84D00]">BDS, MIDA</p>
                </div>
              </div>

              <ul className="space-y-1.5 text-xs text-[#26352F]/90 border-t border-b border-[#087B57]/12 py-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#087B57] shrink-0" aria-hidden="true" />
                  <span>Certified Oral Implantologist</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#087B57] shrink-0" aria-hidden="true" />
                  <span>PGD in Endodontics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#087B57] shrink-0" aria-hidden="true" />
                  <span>PGD in Clinical Endo</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#087B57] shrink-0" aria-hidden="true" />
                  <span>PGD in Oral Surgery</span>
                </li>
              </ul>

              <div className="space-y-1.5 text-xs text-[#26352F]/85">
                <p className="font-bold text-[#087B57]">{GBP_CONFIG.BUSINESS_NAME}</p>
                <p>{GBP_CONFIG.ADDRESS}</p>
                <p className="font-bold text-[#B84D00]">{GBP_CONFIG.HOURS}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-1 text-xs font-bold">
                <a
                  href="/dentist-chipiyana-buzurg-ghaziabad"
                  onClick={(e) => handleLinkClick(e, '/dentist-chipiyana-buzurg-ghaziabad')}
                  className="text-[#087B57] hover:text-[#C93B25] underline underline-offset-2"
                >
                  About Local Clinic
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href="/dental-services"
                  onClick={(e) => handleLinkClick(e, '/dental-services')}
                  className="text-[#087B57] hover:text-[#C93B25] underline underline-offset-2"
                >
                  All 9 Specialties
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Triage Notice Banner */}
      <section
        aria-label="Medical Emergency Triage Guidance"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8"
      >
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
            <div className="text-xs sm:text-sm text-red-950">
              <strong className="font-extrabold">When to Seek Immediate Emergency Care:</strong> If facial or neck swelling is accompanied by difficulty breathing, difficulty swallowing, drooling, swelling closing the eye, or high fever, proceed immediately to the nearest hospital emergency department. For severe dental pain, broken teeth, or localized gum abscesses during 9:00 AM – 9:00 PM, call our clinic at{' '}
              <a href={GBP_CONFIG.CALL_URL} className="font-extrabold underline">
                {GBP_CONFIG.PHONE_DISPLAY}
              </a>
              .
            </div>
          </div>
          <a
            href="/emergency-dentist-ghaziabad"
            onClick={(e) => handleLinkClick(e, '/emergency-dentist-ghaziabad')}
            className="shrink-0 bg-red-700 hover:bg-red-800 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors inline-flex items-center gap-1.5"
          >
            <span>Emergency Dental Guide</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Interactive Search, Category Filter & Table of Contents */}
      <section
        aria-labelledby="faq-directory-controls"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8"
      >
        <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-sm border border-[#087B57]/15 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <h2
                id="faq-directory-controls"
                className="text-xl sm:text-2xl font-extrabold text-[#087B57]"
              >
                Search &amp; Filter {DENTAL_KNOWLEDGE_FAQS.length} Patient Questions
              </h2>
              <p className="text-xs sm:text-sm text-[#26352F]/75 mt-0.5">
                Filter by clinical category, patient search intent, or keyword—or jump directly via the 28-category directory below.
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold">
              <button
                type="button"
                onClick={expandAll}
                className="px-3.5 py-2 rounded-xl bg-[#E5F5EC] text-[#087B57] hover:bg-[#087B57] hover:text-white transition-colors cursor-pointer"
              >
                Expand All Answers
              </button>
              <button
                type="button"
                onClick={collapseAll}
                className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
              >
                Collapse All
              </button>
            </div>
          </div>

          {/* Search Input & Dropdown Filters */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-6 relative">
              <label htmlFor="faq-knowledge-search" className="sr-only">
                Search dental FAQs by keyword, symptom, treatment, or city cost
              </label>
              <Search
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                id="faq-knowledge-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search e.g. 'implant cost', 'Ghaziabad', 'Noida Extension', 'zirconia', 'RCT pain', 'diabetes'..."
                className="w-full min-h-[46px] pl-10 pr-10 py-2.5 bg-[#FFF8EC]/60 focus:bg-white text-[#26352F] text-sm rounded-xl border border-[#087B57]/25 focus:border-[#087B57] focus:ring-2 focus:ring-[#087B57]/20 focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search query"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1.5 text-slate-500 hover:text-slate-800 rounded-full"
                >
                  <X className="w-4 h-4" aria-hidden="true" />
                </button>
              )}
            </div>

            <div className="md:col-span-3">
              <label htmlFor="faq-category-select" className="sr-only">
                Filter by Dental Category
              </label>
              <select
                id="faq-category-select"
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(e.target.value as 'All Categories' | FAQCategoryName)
                }
                className="w-full min-h-[46px] px-3.5 py-2.5 bg-[#FFF8EC]/60 text-[#26352F] text-sm font-semibold rounded-xl border border-[#087B57]/25 focus:border-[#087B57] focus:outline-none"
              >
                <option value="All Categories">
                  All 28 Categories ({DENTAL_KNOWLEDGE_FAQS.length})
                </option>
                {FAQ_CATEGORIES.map((cat) => (
                  <option key={cat.slug} value={cat.name}>
                    {cat.name} ({categoryCounts[cat.name] || 0})
                  </option>
                ))}
              </select>
            </div>

            <div className="md:col-span-3">
              <label htmlFor="faq-intent-select" className="sr-only">
                Filter by Patient Search Intent
              </label>
              <select
                id="faq-intent-select"
                value={selectedIntent}
                onChange={(e) =>
                  setSelectedIntent(e.target.value as 'All Intents' | FAQSearchIntent)
                }
                className="w-full min-h-[46px] px-3.5 py-2.5 bg-[#FFF8EC]/60 text-[#26352F] text-sm font-semibold rounded-xl border border-[#087B57]/25 focus:border-[#087B57] focus:outline-none"
              >
                {INTENT_FILTERS.map((intent) => (
                  <option key={intent} value={intent}>
                    {intent === 'All Intents' ? 'All Search Intents' : `Intent: ${intent}`}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filter Status */}
          {(searchQuery ||
            selectedCategory !== 'All Categories' ||
            selectedIntent !== 'All Intents') && (
            <div className="flex flex-wrap items-center justify-between gap-2 bg-[#E5F5EC] px-4 py-2.5 rounded-xl text-xs font-bold text-[#087B57]">
              <span>
                Showing {filteredFaqs.length} matching question
                {filteredFaqs.length === 1 ? '' : 's'}
                {selectedCategory !== 'All Categories' ? ` in "${selectedCategory}"` : ''}
                {selectedIntent !== 'All Intents' ? ` (${selectedIntent})` : ''}
              </span>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Categories');
                  setSelectedIntent('All Intents');
                }}
                className="underline hover:text-[#C93B25] cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          )}

          {/* Table of Contents / 28-Category Jump Navigation */}
          <nav aria-label="Dental FAQ Categories Table of Contents" className="pt-1">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#B84D00] mb-3 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" aria-hidden="true" /> Jump to Category (28 Topics)
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {FAQ_CATEGORIES.map((cat, idx) => {
                const isSelected = selectedCategory === cat.name;
                return (
                  <a
                    key={cat.slug}
                    href={`#cat-${cat.slug}`}
                    onClick={(e) => {
                      if (selectedCategory !== 'All Categories' && selectedCategory !== cat.name) {
                        setSelectedCategory('All Categories');
                      }
                      const targetEl = document.getElementById(`cat-${cat.slug}`);
                      if (targetEl) {
                        e.preventDefault();
                        targetEl.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors border ${
                      isSelected
                        ? 'bg-[#087B57] text-white border-[#087B57]'
                        : 'bg-[#FFF8EC] hover:bg-[#E5F5EC] text-[#26352F] border-[#087B57]/15'
                    }`}
                  >
                    <span>
                      {idx + 1}. {cat.name}
                    </span>{' '}
                    <span className="opacity-75">({categoryCounts[cat.name] || 0})</span>
                  </a>
                );
              })}
            </div>
          </nav>
        </div>
      </section>

      {/* Main 28-Category FAQ Sections (Semantic & Crawlable HTML) */}
      <section
        aria-label="Comprehensive Dental Questions and Answers"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-10"
      >
        {visibleCategories.length === 0 ? (
          <div className="bg-white rounded-3xl p-10 text-center border border-[#087B57]/15 space-y-3">
            <p className="text-lg font-bold text-[#26352F]">
              No questions matched your current filter criteria.
            </p>
            <p className="text-sm text-[#26352F]/75">
              Try clearing your search term or resetting the category and intent filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
                setSelectedIntent('All Intents');
              }}
              className="px-5 py-2.5 rounded-xl bg-[#087B57] text-white text-sm font-bold"
            >
              Show All {DENTAL_KNOWLEDGE_FAQS.length} FAQs
            </button>
          </div>
        ) : (
          visibleCategories.map((cat) => {
            const categoryFaqs = filteredFaqs.filter((f) => f.category === cat.name);
            const catIndex = FAQ_CATEGORIES.findIndex((c) => c.slug === cat.slug) + 1;

            return (
              <div
                key={cat.slug}
                id={`cat-${cat.slug}`}
                className="bg-white rounded-3xl p-5 sm:p-8 shadow-xs border border-[#087B57]/15 scroll-mt-24 space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#087B57]/12 pb-4">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#B84D00]">
                      Category {catIndex} of {FAQ_CATEGORIES.length} • {cat.group}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-[#087B57] mt-0.5">
                      {cat.name}
                    </h2>
                  </div>
                  <span className="self-start sm:self-auto px-3 py-1 rounded-full bg-[#E5F5EC] text-[#087B57] text-xs font-bold">
                    {categoryFaqs.length} {categoryFaqs.length === 1 ? 'Question' : 'Questions'}
                  </span>
                </div>

                <div className="space-y-4">
                  {categoryFaqs.map((faq) => {
                    const isOpen = !collapsedMap[faq.id];
                    return (
                      <article
                        key={faq.id}
                        id={faq.id}
                        className={`rounded-2xl border transition-colors ${
                          isOpen
                            ? 'border-[#087B57]/30 bg-[#FFF8EC]/35'
                            : 'border-slate-200 bg-white hover:border-[#087B57]/30'
                        }`}
                      >
                        <h3 className="m-0">
                          <button
                            type="button"
                            onClick={() => toggleFaq(faq.id)}
                            aria-expanded={isOpen}
                            aria-controls={`answer-${faq.id}`}
                            className="w-full text-left px-5 py-4 flex items-start justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087B57] rounded-2xl cursor-pointer"
                          >
                            <span className="font-bold text-base sm:text-lg text-[#26352F] leading-snug">
                              {faq.question}
                            </span>
                            <span
                              className={`shrink-0 mt-0.5 p-1.5 rounded-full transition-colors ${
                                isOpen
                                  ? 'bg-[#087B57] text-white'
                                  : 'bg-[#E5F5EC] text-[#087B57]'
                              }`}
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                                aria-hidden="true"
                              />
                            </span>
                          </button>
                        </h3>

                        <div
                          id={`answer-${faq.id}`}
                          className={
                            isOpen
                              ? 'px-5 pb-5 pt-2 border-t border-[#087B57]/10 space-y-3'
                              : 'sr-only'
                          }
                        >
                          <p className="text-sm sm:text-base text-[#26352F]/90 leading-relaxed">
                            {faq.answer}
                          </p>

                          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-[#26352F]/75">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="px-2.5 py-0.5 rounded-md bg-white border border-[#087B57]/20 font-semibold text-[#087B57]">
                                Topic: {faq.relevantTreatment}
                              </span>
                              <span className="px-2.5 py-0.5 rounded-md bg-slate-100 font-medium text-slate-700">
                                Intent: {faq.searchIntent}
                              </span>
                              {faq.pricingDate && (
                                <span className="px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200 font-semibold text-amber-900">
                                  Public Fee Survey: {faq.pricingDate} (Indicative)
                                </span>
                              )}
                              {faq.researchSource && (
                                <span className="text-[11px] text-slate-600">
                                  Ref: {faq.researchSource}
                                </span>
                              )}
                            </div>

                            <a
                              href={faq.relatedPageUrl}
                              onMouseEnter={() => preloadRoute(faq.relatedPageUrl)}
                              onTouchStart={() => preloadRoute(faq.relatedPageUrl)}
                              onClick={(e) => handleLinkClick(e, faq.relatedPageUrl)}
                              className="inline-flex items-center gap-1 font-extrabold text-[#087B57] hover:text-[#C93B25] underline underline-offset-4"
                            >
                              <span>Explore: {faq.relatedPageLabel}</span>
                              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })
        )}
      </section>

      {/* Pricing Transparency & Regional Cost Methodology Box */}
      <section
        aria-labelledby="pricing-methodology-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10"
      >
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#087B57]/20 shadow-xs space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#FFF8EC] text-[#B84D00] border border-[#FFD36A] px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" /> Dental Implant &amp; Treatment Pricing Transparency
          </div>
          <h2
            id="pricing-methodology-heading"
            className="text-xl sm:text-2xl font-extrabold text-[#087B57]"
          >
            How to Interpret Indicative City-Wise Dental Implant Costs (India &amp; Delhi NCR)
          </h2>
          <p className="text-sm sm:text-base text-[#26352F]/85 leading-relaxed">
            In India, neither the Dental Council of India (DCI) nor state authorities mandate fixed private clinic tariffs. The city-wise figures discussed in our FAQ library for <strong>India, Delhi, New Delhi, Noida, Ghaziabad, Greater Noida, Noida Extension (Greater Noida West), and Crossings Republik</strong> reflect publicly published clinic fee schedules reviewed in <strong>November 2026</strong> and are labeled strictly as <strong>indicative ranges</strong> rather than statutory averages.
          </p>
          <div className="bg-[#E5F5EC] border border-[#087B57]/20 rounded-2xl p-4 text-sm text-[#26352F] font-medium">
            {ORACLE_PRICE_NOTICE}
          </div>
        </div>
      </section>

      {/* Topic Clusters & Related Treatment Pages Hub */}
      <section
        aria-labelledby="topic-clusters-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10"
      >
        <div className="space-y-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#B84D00]">
              Internal Topic Clusters
            </span>
            <h2
              id="topic-clusters-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#087B57] mt-1"
            >
              Explore Detailed Clinical Guides by Specialty
            </h2>
            <p className="text-sm text-[#26352F]/80 mt-1">
              Every FAQ category connects directly to our dedicated treatment and cost guides at Oracle Dental Clinic &amp; Implant Center.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TOPIC_CLUSTERS.map((cluster) => (
              <div
                key={cluster.title}
                className="bg-white rounded-3xl p-6 border border-[#087B57]/15 shadow-xs space-y-4"
              >
                <h3 className="text-lg font-extrabold text-[#087B57]">{cluster.title}</h3>
                <p className="text-xs sm:text-sm text-[#26352F]/80 leading-relaxed">
                  {cluster.desc}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs font-bold">
                  {cluster.links.map((link) => (
                    <li key={link.path}>
                      <a
                        href={link.path}
                        onMouseEnter={() => preloadRoute(link.path)}
                        onTouchStart={() => preloadRoute(link.path)}
                        onClick={(e) => handleLinkClick(e, link.path)}
                        className="p-2.5 rounded-xl bg-[#FFF8EC] hover:bg-[#E5F5EC] text-[#087B57] border border-[#087B57]/15 flex items-center justify-between transition-colors"
                      >
                        <span className="truncate pr-1">{link.label}</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Authority, E-E-A-T & Editorial Governance Section */}
      <section
        aria-labelledby="doctor-eeat-heading"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10"
      >
        <div className="bg-white rounded-3xl p-6 sm:p-9 border border-[#087B57]/20 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <img
              src={`${imgPrefix}dr-prashant-vats-400.webp`}
              alt="Dr. Prashant Kumar Vats — BDS, MIDA, Certified Oral Implantologist, PGD in Endodontics, PGD in Clinical Endo, PGD in Oral Surgery"
              width="240"
              height="320"
              loading="lazy"
              decoding="async"
              className="w-48 h-60 rounded-3xl object-cover object-top border-4 border-[#E5F5EC] shadow-md"
            />
            <h3 className="text-lg font-extrabold text-[#087B57] mt-3">
              Dr. Prashant Kumar Vats
            </h3>
            <p className="text-xs font-bold text-[#B84D00]">
              BDS, MIDA · Certified Oral Implantologist
            </p>
            <p className="text-xs text-[#26352F]/75 mt-0.5">
              PGD in Endodontics · PGD in Clinical Endo · PGD in Oral Surgery
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-[#087B57] bg-[#E5F5EC] px-3 py-1 rounded-full">
              Author &amp; Clinical Governance
            </span>
            <h2
              id="doctor-eeat-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#26352F]"
            >
              About the Author &amp; Clinical Content Standards
            </h2>
            <p className="text-sm sm:text-base text-[#26352F]/85 leading-relaxed">
              This Dental Knowledge Hub is compiled for patients of <strong>Oracle Dental Clinic &amp; Implant Center</strong> under the clinical leadership of <strong>Dr. Prashant Kumar Vats (BDS, MIDA · Certified Oral Implantologist · PGD in Endodontics · PGD in Clinical Endo · PGD in Oral Surgery)</strong>. Clinical areas of focus include single and full-arch oral implantology, rotary endodontics (root canal treatment and Re-RCT), surgical wisdom tooth removal, CAD/CAM zirconia prosthodontics, and preventive family dentistry.
            </p>
            <p className="text-xs sm:text-sm text-[#26352F]/80 leading-relaxed">
              <strong>Editorial &amp; Review Policy:</strong> Educational answers synthesize guidance from recognized dental bodies (including the World Health Organization, American Dental Association, FDI World Dental Federation, NHS, and Indian Dental Association). We do not publish auto-generated medical review timestamps; formal clinical sign-off status is tracked per entry in our content inventory as the dentist reviews updates.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3.5 rounded-2xl bg-[#FFF8EC] border border-[#087B57]/15">
                <span className="font-extrabold text-[#087B57] block mb-0.5">
                  Verified Physical Clinic Address
                </span>
                <span>{GBP_CONFIG.ADDRESS}</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-[#FFF8EC] border border-[#087B57]/15">
                <span className="font-extrabold text-[#087B57] block mb-0.5">
                  Clinic Hours &amp; Direct Contact
                </span>
                <span>
                  {GBP_CONFIG.HOURS} (Every Day) • Phone/WhatsApp:{' '}
                  <a href={GBP_CONFIG.CALL_URL} className="font-bold underline">
                    {GBP_CONFIG.PHONE_DISPLAY}
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="pt-8">
        <TreatmentAppointmentCTA treatmentName="Dental Consultation & Knowledge Hub Enquiry" />
      </div>
    </div>
  );
}
