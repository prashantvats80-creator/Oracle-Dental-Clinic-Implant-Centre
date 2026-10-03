/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import {
  PhoneCall,
  MessageCircle,
  Clock,
  MapPin,
  Activity,
  Menu,
  X,
  ArrowUp,
  Facebook,
  Instagram,
  Youtube,
  Volume2,
  VolumeX,
  ChevronDown,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SoundProvider, useSound } from './components/SoundManager';
import { InteractiveButton } from './components/InteractiveButton';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import SEOHead from './components/SEOHead';
import ScrollProgressBar from './components/ScrollProgressBar';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useLanguage } from './context/LanguageContext';
import { GBP_CONFIG } from './config/googleBusinessProfile';
import { preloadAllTopRoutes, preloadRoute } from './utils/routePreloader';
import SkeletonHero from './components/SkeletonHero';
import { SkeletonCardGrid } from './components/SkeletonCard';

const Services = lazy(() => import('./components/Services'));
const WhyUs = lazy(() => import('./components/WhyUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ChipiyanaLandingPage = lazy(() => import('./components/ChipiyanaLandingPage'));
const RootCanalPage = lazy(() => import('./components/RootCanalPage'));
const DentalImplantsPage = lazy(() => import('./components/DentalImplantsPage'));
const WisdomToothPage = lazy(() => import('./components/WisdomToothPage'));
const TeethWhiteningPage = lazy(() => import('./components/TeethWhiteningPage'));
const TeethCleaningPage = lazy(() => import('./components/TeethCleaningPage'));
const ToothPainPage = lazy(() => import('./components/ToothPainPage'));
const BleedingGumsPage = lazy(() => import('./components/BleedingGumsPage'));
const ToothSensitivityPage = lazy(() => import('./components/ToothSensitivityPage'));
const BadBreathPage = lazy(() => import('./components/BadBreathPage'));
const LooseToothPage = lazy(() => import('./components/LooseToothPage'));
const BrokenToothPage = lazy(() => import('./components/BrokenToothPage'));
const ChippedToothPage = lazy(() => import('./components/ChippedToothPage'));
const BlackToothPage = lazy(() => import('./components/BlackToothPage'));
const MissingTeethPage = lazy(() => import('./components/MissingTeethPage'));
const CavityTreatmentPage = lazy(() => import('./components/CavityTreatmentPage'));
const GumDiseasePage = lazy(() => import('./components/GumDiseasePage'));
const SwollenGumsPage = lazy(() => import('./components/SwollenGumsPage'));
const GumRecessionPage = lazy(() => import('./components/GumRecessionPage'));
const ToothCapPage = lazy(() => import('./components/ToothCapPage'));
const ToothExtractionPage = lazy(() => import('./components/ToothExtractionPage'));
const EmergencyDentistPage = lazy(() => import('./components/EmergencyDentistPage'));
const KidsDentistPage = lazy(() => import('./components/KidsDentistPage'));
const DentalFillingsPage = lazy(() => import('./components/DentalFillingsPage'));
const DentalBridgesPage = lazy(() => import('./components/DentalBridgesPage'));
const DenturesPage = lazy(() => import('./components/DenturesPage'));
const DentistGhaziabadPage = lazy(() => import('./components/DentistGhaziabadPage'));
const DentalClinicGhaziabadPage = lazy(() => import('./components/DentalClinicGhaziabadPage'));
const DentistNearMePage = lazy(() => import('./components/DentistNearMePage'));
const DentalTreatmentCostPage = lazy(() => import('./components/DentalTreatmentCostPage'));
const DentalImplantCostPage = lazy(() => import('./components/DentalImplantCostPage'));
const RootCanalCostPage = lazy(() => import('./components/RootCanalCostPage'));
const ToothCapCostPage = lazy(() => import('./components/ToothCapCostPage'));
const DentalAbscessPage = lazy(() => import('./components/DentalAbscessPage'));
const ImpactedWisdomToothPage = lazy(() => import('./components/ImpactedWisdomToothPage'));
const PeriodontalTreatmentPage = lazy(() => import('./components/PeriodontalTreatmentPage'));
const ToothFillingCostPage = lazy(() => import('./components/ToothFillingCostPage'));
const TeethCleaningCostPage = lazy(() => import('./components/TeethCleaningCostPage'));
const WisdomToothCostPage = lazy(() => import('./components/WisdomToothCostPage'));
const ToothExtractionCostPage = lazy(() => import('./components/ToothExtractionCostPage'));
const DentalBridgeCostPage = lazy(() => import('./components/DentalBridgeCostPage'));
const DenturesCostPage = lazy(() => import('./components/DenturesCostPage'));
const TeethWhiteningCostPage = lazy(() => import('./components/TeethWhiteningCostPage'));
const EmergencyDentistGhaziabadPage = lazy(() => import('./components/EmergencyDentistGhaziabadPage'));
const ImmediateDentalImplantPage = lazy(() => import('./components/ImmediateDentalImplantPage'));
const SmileMakeoverGhaziabadPage = lazy(() => import('./components/SmileMakeoverGhaziabadPage'));

const ALL_DENTAL_PAGES = [
  // Key Treatments & Locations (17)
  { title: 'Dental Implants', path: '/dental-implants', category: 'Treatment', keywords: 'teeth replacement fixture tooth implant' },
  { title: 'Root Canal Treatment', path: '/root-canal-treatment', category: 'Treatment', keywords: 'rct tooth nerve pain infection single sitting' },
  { title: 'Teeth Cleaning & Scaling', path: '/teeth-cleaning', category: 'Treatment', keywords: 'scaling tartar plaque stains hygiene ultrasonic' },
  { title: 'Teeth Whitening', path: '/teeth-whitening', category: 'Treatment', keywords: 'bleaching bright white smile cosmetic yellow' },
  { title: 'Wisdom Tooth Removal', path: '/wisdom-tooth-extraction', category: 'Treatment', keywords: 'third molar extraction surgical surgery impaction' },
  { title: 'Tooth Cap & Crowns', path: '/tooth-cap', category: 'Treatment', keywords: 'crown zirconia ceramic pfm cap after rct' },
  { title: 'Dental Fillings', path: '/dental-fillings', category: 'Treatment', keywords: 'composite tooth colored restoration decay cavity' },
  { title: 'Tooth Extraction', path: '/tooth-extraction', category: 'Treatment', keywords: 'pull tooth removal dental surgery' },
  { title: 'Dental Bridges', path: '/dental-bridges', category: 'Treatment', keywords: 'fixed bridge missing teeth ceramic' },
  { title: 'Dentures', path: '/dentures', category: 'Treatment', keywords: 'false teeth complete partial acrylic flexible' },
  { title: 'Kids Dentist', path: '/kids-dentist', category: 'Treatment', keywords: 'pediatric children dental care child tooth' },
  { title: 'Emergency Dentist', path: '/emergency-dentist', category: 'Treatment', keywords: 'urgent toothache trauma swelling 24/7' },
  { title: 'Dentist in Chipiyana Buzurg', path: '/dentist-chipiyana-buzurg-ghaziabad', category: 'Location', keywords: 'chipiyana clinic local branch jaat chowk' },
  { title: 'Dentist in Ghaziabad', path: '/dentist-ghaziabad', category: 'Location', keywords: 'ghaziabad dental clinic dr prashant vats' },
  { title: 'Dental Clinic in Ghaziabad', path: '/dental-clinic-ghaziabad', category: 'Location', keywords: 'ghaziabad center facility kts complex' },
  { title: 'Dentist Near Me', path: '/dentist-near-me', category: 'Location', keywords: 'nearby dentist clinic close to me directions crossings republik' },
  { title: 'Impacted Wisdom Tooth', path: '/impacted-wisdom-tooth', category: 'Treatment', keywords: 'horizontal wisdom tooth surgery pain swelling pericoronitis' },

  // Symptoms, Conditions & Cost Guides (30)
  { title: 'Tooth Pain Treatment', path: '/tooth-pain-treatment', category: 'Symptom', keywords: 'toothache throbbing sharp pain relief ache' },
  { title: 'Bleeding Gums Care', path: '/bleeding-gums', category: 'Symptom', keywords: 'gingivitis blood brushing red gums tender' },
  { title: 'Tooth Sensitivity Relief', path: '/tooth-sensitivity', category: 'Symptom', keywords: 'sensitive teeth hot cold sweet tingling enamel' },
  { title: 'Bad Breath Treatment', path: '/bad-breath-treatment', category: 'Symptom', keywords: 'halitosis mouth odor smell tongue bacteria' },
  { title: 'Loose Tooth Care', path: '/loose-tooth-treatment', category: 'Symptom', keywords: 'mobile shaky wobbly tooth bone loss periodontitis' },
  { title: 'Broken Tooth Repair', path: '/broken-tooth-treatment', category: 'Symptom', keywords: 'fractured split cracked trauma crown restoration' },
  { title: 'Chipped Tooth Repair', path: '/chipped-tooth', category: 'Symptom', keywords: 'bonding veneer front tooth cosmetic fix chip' },
  { title: 'Black / Dark Tooth Care', path: '/black-tooth', category: 'Symptom', keywords: 'discolored dark dead tooth stain pulp trauma' },
  { title: 'Missing Teeth Options', path: '/missing-teeth', category: 'Symptom', keywords: 'gap missing tooth replace implant bridge' },
  { title: 'Cavity Treatment', path: '/cavity-treatment', category: 'Symptom', keywords: 'caries hole tooth decay filling restoration' },
  { title: 'Gum Disease Care', path: '/gum-disease-treatment', category: 'Symptom', keywords: 'periodontitis pockets bone loss scaling root planing' },
  { title: 'Swollen Gums Care', path: '/swollen-gums', category: 'Symptom', keywords: 'puffy inflamed gums abscess infection tenderness' },
  { title: 'Gum Recession Care', path: '/gum-recession', category: 'Symptom', keywords: 'receding gums exposed roots sensitivity grafting' },
  { title: 'Dental Abscess Treatment', path: '/dental-abscess-treatment', category: 'Urgent Care', keywords: 'pus swelling infection dental abscess emergency face' },
  { title: 'Periodontal Gum Treatment', path: '/periodontal-gum-treatment-ghaziabad', category: 'Specialized', keywords: 'deep cleaning scaling root planing bone loss pockets' },
  { title: 'Dental Treatment Cost', path: '/dental-treatment-cost-ghaziabad', category: 'Cost Guide', keywords: 'cost price charges fee estimates 200 consultation' },
  { title: 'Dental Implant Cost', path: '/dental-implant-cost-ghaziabad', category: 'Cost Guide', keywords: 'implant price cost estimates single full mouth' },
  { title: 'Root Canal Cost', path: '/root-canal-cost-ghaziabad', category: 'Cost Guide', keywords: 'rct price molar front tooth root canal cost' },
  { title: 'Tooth Cap / Crown Cost', path: '/tooth-cap-cost-ghaziabad', category: 'Cost Guide', keywords: 'crown price zirconia ceramic pfm cap cost' },
  { title: 'Tooth Filling Cost', path: '/tooth-filling-cost-ghaziabad', category: 'Cost Guide', keywords: 'filling cost composite gic silver cavity price' },
  { title: 'Teeth Cleaning Cost', path: '/teeth-cleaning-cost-ghaziabad', category: 'Cost Guide', keywords: 'cleaning scaling polishing tartar calculus price' },
  { title: 'Wisdom Tooth Extraction Cost', path: '/wisdom-tooth-extraction-cost-ghaziabad', category: 'Cost Guide', keywords: 'wisdom tooth surgery impaction surgical extraction price' },
  { title: 'Tooth Extraction Cost', path: '/tooth-extraction-cost-ghaziabad', category: 'Cost Guide', keywords: 'pull tooth simple extraction cost surgical removal price' },
  { title: 'Dental Bridge Cost', path: '/dental-bridge-cost-ghaziabad', category: 'Cost Guide', keywords: 'bridge cost zirconia pfm unit price missing teeth' },
  { title: 'Dentures Cost', path: '/dentures-cost-ghaziabad', category: 'Cost Guide', keywords: 'denture price complete partial flexible valplast bps cost' },
  { title: 'Teeth Whitening Cost', path: '/teeth-whitening-cost-ghaziabad', category: 'Cost Guide', keywords: 'teeth bleaching whitening laser in office price cost' },
  { title: 'Emergency Dentist in Ghaziabad', path: '/emergency-dentist-ghaziabad', category: 'Urgent Care', keywords: 'urgent toothache emergency clinic 24/7 pain swelling relief' },
  { title: 'Dental Implant After Tooth Extraction', path: '/dental-implant-after-tooth-extraction', category: 'Treatment', keywords: 'immediate implant same day extraction socket bone graft' },
  { title: 'Smile Makeover in Ghaziabad', path: '/smile-makeover-ghaziabad', category: 'Cosmetic', keywords: 'smile design veneers composite bonding aesthetic cosmetic dentist' }
];

const TOTAL_DENTAL_PAGES_COUNT = ALL_DENTAL_PAGES.length;
const treatmentPagesList = ALL_DENTAL_PAGES.filter(p => ['Treatment', 'Location', 'Cosmetic'].includes(p.category));
const symptomPagesList = ALL_DENTAL_PAGES.filter(p => ['Symptom', 'Urgent Care', 'Specialized'].includes(p.category));
const costPagesList = ALL_DENTAL_PAGES.filter(p => p.category === 'Cost Guide');

export default function App() {
  return (
    <SoundProvider>
      <AppContent />
    </SoundProvider>
  );
}

function AppContent() {
  const { isMuted, toggleMute, startMusic } = useSound();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');

  useEffect(() => {
    if (!isMenuOpen) {
      setMobileSearchQuery('');
    }
  }, [isMenuOpen]);

  const filteredMobilePages = mobileSearchQuery.trim() === ''
    ? []
    : ALL_DENTAL_PAGES.filter((page) => {
        const q = mobileSearchQuery.toLowerCase().trim();
        return (
          page.title.toLowerCase().includes(q) ||
          page.path.toLowerCase().includes(q) ||
          page.category.toLowerCase().includes(q) ||
          (page.keywords && page.keywords.toLowerCase().includes(q))
        );
      });

  useEffect(() => {
    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    preloadAllTopRoutes();
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Ensure JSON-LD 'WebSite' and 'LocalBusiness' schema markup is consistently active across all pages
  useEffect(() => {
    const origin = window.location.origin;

    // 1. WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      "url": origin,
      "name": GBP_CONFIG.BUSINESS_NAME,
      "alternateName": [
        "Oracle Dental Clinic",
        "Oracle Dental",
        "Oracle Dental Clinic & Implant Center"
      ],
      "description": "Official website of Oracle Dental Clinic & Implant Center in Ghaziabad and Chipiyana Buzurg. Providing advanced dental implants, painless root canal treatment, clear aligners, and comprehensive family dentistry.",
      "inLanguage": "en-US",
      "publisher": {
        "@id": `${origin}/#localbusiness`
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${origin}/?s={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    };

    // 2. LocalBusiness / Dentist Schema
    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": ["Dentist", "LocalBusiness", "MedicalBusiness"],
      "@id": `${origin}/#localbusiness`,
      "name": GBP_CONFIG.BUSINESS_NAME,
      "legalName": "Oracle Dental Clinic & Implant Center",
      "alternateName": [
        "Oracle Dental Clinic",
        "Oracle Dental Clinic Chipiyana",
        "Best Dentist in Ghaziabad"
      ],
      "url": origin,
      "logo": "https://i.postimg.cc/tCd8wLDv/Chat-GPT-Image-Apr-22-2026-08-21-13-PM.png",
      "image": [
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        "https://i.postimg.cc/tCd8wLDv/Chat-GPT-Image-Apr-22-2026-08-21-13-PM.png"
      ],
      "telephone": GBP_CONFIG.PHONE,
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Google Pay, PhonePe, Paytm, Net Banking",
      "medicalSpecialty": [
        "Dentistry",
        "Endodontics",
        "Implantology",
        "Orthodontics",
        "Periodontics",
        "PediatricDentistry",
        "CosmeticDentistry"
      ],
      "founder": {
        "@type": "Person",
        "name": "Dr. Prashant Kumar Vats",
        "jobTitle": "Dental Surgeon & Implantologist",
        "honorificSuffix": "BDS"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "KTS Complex, Jaat Chowk, Chipiyana Buzurg, near ABES Engineering College",
        "addressLocality": "Ghaziabad",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201009",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 28.6280,
        "longitude": 77.4520
      },
      "hasMap": GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL,
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "10:00",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "17:00",
          "closes": "21:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": GBP_CONFIG.FALLBACK_RATING.toString(),
        "reviewCount": GBP_CONFIG.FALLBACK_REVIEW_COUNT.toString(),
        "bestRating": "5",
        "worstRating": "1"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=100083436112014",
        "https://www.instagram.com/oracledentalclinic0/",
        "https://www.youtube.com/@OracleDentalClinic0",
        GBP_CONFIG.GOOGLE_BUSINESS_PROFILE_URL
      ],
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Chipiyana Buzurg" },
        { "@type": "AdministrativeArea", "name": "Ghaziabad" },
        { "@type": "AdministrativeArea", "name": "Greater Noida" },
        { "@type": "AdministrativeArea", "name": "Greater Noida West" },
        { "@type": "AdministrativeArea", "name": "Noida Extension" },
        { "@type": "AdministrativeArea", "name": "Crossing Republik" },
        { "@type": "AdministrativeArea", "name": "Lal Kuan" },
        { "@type": "AdministrativeArea", "name": "Shahberi" },
        { "@type": "AdministrativeArea", "name": "ABES Engineering College Area" }
      ]
    };

    const updateOrCreateJsonLd = (id: string, schemaObj: object) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schemaObj);
    };

    updateOrCreateJsonLd('app-jsonld-website', websiteSchema);
    updateOrCreateJsonLd('app-jsonld-localbusiness', localBusinessSchema);
  }, [currentPath]);

  const KNOWN_ROUTES = [
    '/wisdom-tooth-extraction', '/tooth-pain-treatment', '/bleeding-gums',
    '/tooth-sensitivity', '/bad-breath-treatment', '/loose-tooth-treatment',
    '/broken-tooth-treatment', '/chipped-tooth', '/black-tooth',
    '/missing-teeth', '/cavity-treatment', '/gum-disease-treatment',
    '/swollen-gums', '/gum-recession', '/tooth-cap', '/tooth-extraction',
    '/emergency-dentist', '/kids-dentist', '/dental-fillings',
    '/dental-bridges', '/dentures', '/teeth-cleaning', '/teeth-whitening',
    '/dental-implants', '/root-canal-treatment', '/dentist-chipiyana-buzurg-ghaziabad',
    '/dentist-ghaziabad', '/dental-clinic-ghaziabad', '/dentist-near-me',
    '/dental-treatment-cost-ghaziabad', '/dental-implant-cost-ghaziabad',
    '/root-canal-cost-ghaziabad', '/tooth-cap-cost-ghaziabad',
    '/dental-abscess-treatment', '/impacted-wisdom-tooth',
    '/periodontal-gum-treatment-ghaziabad', '/tooth-filling-cost-ghaziabad',
    '/teeth-cleaning-cost-ghaziabad', '/wisdom-tooth-extraction-cost-ghaziabad',
    '/tooth-extraction-cost-ghaziabad', '/dental-bridge-cost-ghaziabad',
    '/dentures-cost-ghaziabad', '/teeth-whitening-cost-ghaziabad',
    '/emergency-dentist-ghaziabad', '/dental-implant-after-tooth-extraction',
    '/smile-makeover-ghaziabad'
  ];

  const getBasePath = (): string => {
    const metaEnv = (import.meta as unknown as { env?: { BASE_URL?: string } }).env;
    const baseUrl = metaEnv?.BASE_URL;
    if (baseUrl && baseUrl !== '/' && baseUrl !== './') {
      return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
    }
    if (typeof window !== 'undefined') {
      const segments = window.location.pathname.split('/').filter(Boolean);
      if (window.location.hostname.endsWith('github.io') && segments.length > 0) {
        const first = '/' + segments[0];
        if (!KNOWN_ROUTES.includes(first)) {
          return first;
        }
      }
    }
    return '';
  };

  const normalizePath = (path: string) => {
    if (!path || path === '/' || path === '') return '/';
    let clean = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
    const base = getBasePath();
    if (base && clean.startsWith(base)) {
      clean = clean.slice(base.length) || '/';
    }
    for (const route of KNOWN_ROUTES) {
      if (clean === route || clean.endsWith(route)) {
        return route;
      }
    }
    return '/';
  };

  const activeRoute = normalizePath(currentPath);

  const navigateToPath = (path: string) => {
    const base = getBasePath();
    const target = path.startsWith('/') ? path : '/' + path;
    const fullPath = base ? (target === '/' ? base + '/' : base + target) : target;
    window.history.pushState({}, '', fullPath);
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const faqs = [
    {
      question: "Where can I get dental implants near Chipiyana Buzurg?",
      answer: "Oracle Dental Clinic & Implant Center is located in Chipiyana Buzurg, Ghaziabad, near the Ghaziabad–Greater Noida border, making it easily accessible from Crossing Republik, Noida Extension, and Greater Noida West. Our clinic features advanced diagnostic equipment and a certified implantologist to ensure safe, comfortable, and long-lasting dental implant treatments right in your neighborhood."
    },
    {
      question: "How much does a dental implant cost in Ghaziabad?",
      answer: "The cost of dental implants in Ghaziabad varies depending on factors like the implant brand (e.g., Osstem, Nobel Biocare, Straumann), the type of crown (Zirconia or ceramic), and the bone structure of the patient. Single tooth implant procedures start from highly affordable ranges. During a comprehensive consultation at Oracle Dental Clinic, our implant specialist will assess your 3D scans and provide an accurate, transparent cost estimate tailored to your treatment plan."
    },
    {
      question: "Is root canal treatment (RCT) painful?",
      answer: "A root canal is designed to relieve the pain caused by deep decay or tooth infection, not cause it. At Oracle Dental Clinic, our experienced RCT specialist uses advanced local anesthetics, rotary endodontic systems, and microscopic technology to perform painless root canal treatments, often completed in a single comfortable sitting."
    },
    {
      question: "How do I choose a dental implant specialist in Ghaziabad?",
      answer: "When choosing a dental implant specialist, look for experienced implantologists with specialized postgraduate training in oral implantology, verified patient success rates, and a clinic equipped with modern tools like digital radiography. At Oracle Dental Clinic and Implant Center, our lead doctor is a highly qualified dentist and implant expert who handles both single tooth restorations and full mouth rehabilitations."
    },
    {
      question: "Is wisdom tooth extraction painful and when is it required?",
      answer: "An extraction is performed under complete local anesthesia, making the wisdom tooth surgery itself virtually painless. Extraction is typically required when you have an impacted wisdom tooth, severe swelling, recurring gum infections (pericoronitis), or damage to adjacent teeth. Our oral surgeon in Ghaziabad ensures a gentle surgical extraction process with a smooth, painless recovery."
    },
    {
      question: "What is the difference between braces and clear aligners?",
      answer: "Dental braces use metal or ceramic brackets and wires to align teeth, making them highly effective for severe crowding or complex orthodontic alignments. Clear aligners are invisible, removable plastic trays that straighten teeth discreetly. Clear aligners are highly popular with adults and working professionals in Greater Noida and Ghaziabad for teeth straightening because they are virtually invisible and offer easier oral hygiene."
    },
    {
      question: "Are clear aligners suitable for adults in Noida & Greater Noida?",
      answer: "Absolutely! Clear aligners are highly popular among adults and teens alike who prefer a subtle, wire-free method of teeth straightening. They are comfortable, removable, and do not interfere with your diet or daily lifestyle. Our clear aligner specialist in Chipiyana Buzurg will map out your digital smile design and customize clear aligners for predictable, high-quality results."
    },
    {
      question: "How long does a root canal treatment take?",
      answer: "With modern rotary technology and microscopic treatment methods, a root canal treatment at Oracle Dental Clinic is frequently completed in a single sitting of 30 to 45 minutes. However, in cases of severe infection, our RCT dentist may recommend two sittings to ensure the root canal is completely sanitized and sealed before placing a permanent tooth cap or Zirconia crown."
    },
    {
      question: "Does the clinic provide full mouth dental implants in Ghaziabad?",
      answer: "Yes, Oracle Dental Clinic & Implant Center is a specialized multi-specialty center for full mouth rehabilitation. We offer state-of-the-art All-on-4 and All-on-6 full mouth dental implants that replace entire arches of missing teeth with permanent, natural-feeling teeth. This procedure is done after detailed diagnostic analysis to ensure proper support and bone preservation."
    }
  ];

  useEffect(() => {
    // Initiate music playback on first interaction
    const handleFirstInteraction = () => {
      startMusic();
      const events = ['click', 'touchstart', 'mousedown', 'pointerdown'];
      events.forEach(e => window.removeEventListener(e, handleFirstInteraction));
    };
    const events = ['click', 'touchstart', 'mousedown', 'pointerdown'];
    events.forEach(e => window.addEventListener(e, handleFirstInteraction));
    return () => {
      events.forEach(e => window.removeEventListener(e, handleFirstInteraction));
    };
  }, [startMusic]);

  useEffect(() => {
    // Delay and lazily load Google tag (gtag.js) to maximize initial speed on slow networks
    const loadGtag = () => {
      const win = window as any;
      if (win.gtag) return;

      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16678614351';
      document.head.appendChild(script);

      script.onload = () => {
        win.dataLayer = win.dataLayer || [];
        win.gtag = function() {
          win.dataLayer.push(arguments);
        };
        win.gtag('js', new Date());
        win.gtag('config', 'AW-16678614351');
      };
    };

    // Load after a 3.5s delay or immediately on first real user interaction
    const timer = setTimeout(loadGtag, 3500);

    const events = ['click', 'touchstart', 'scroll'];
    const handleInteraction = () => {
      loadGtag();
      clearTimeout(timer);
      events.forEach(e => window.removeEventListener(e, handleInteraction));
    };

    events.forEach(e => window.addEventListener(e, handleInteraction, { passive: true }));

    return () => {
      clearTimeout(timer);
      events.forEach(e => window.removeEventListener(e, handleInteraction));
    };
  }, []);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 400) {
            setShowBackToTop(true);
          } else {
            setShowBackToTop(false);
          }

          const sections = ['transformations', 'services', 'why-us', 'testimonials', 'faq', 'contact'];
          let current = '';
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= window.innerHeight / 3 && rect.bottom >= 100) {
                current = section;
              }
            }
          }
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (activeRoute !== '/') {
      navigateToPath('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (activeRoute !== '/') {
      const base = getBasePath();
      const targetHash = (base ? base : '') + '/#' + id;
      window.history.pushState({}, '', targetHash);
      setCurrentPath('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    
    // Close menu first on mobile to prevent layout shift during scroll
    if (isMenuOpen) {
      setIsMenuOpen(false);
      
      // Allow menu to close before initiating scroll
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    } else {
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const phoneNumber = "+917011961515";
  const phoneNumberFormatted = "+91 70119 61515";
  const whatsappNumber = "917011961515"; // Assuming India country code
  const whatsappMessage = "I want to book an appointment.";

  const handleCall = () => window.open(`tel:${phoneNumber}`, '_self');
  const handleWhatsApp = () => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  const handleDirections = () => window.open(GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL, '_blank');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/50 font-sans text-slate-950 pb-20 md:pb-0 scroll-smooth">
      <ScrollProgressBar />
      <SEOHead />
      {/* Top Bar (Desktop) */}
      <div className="hidden md:flex bg-gradient-to-r from-blue-950 via-indigo-950 to-blue-900 animate-gradient-xy text-white text-sm py-2.5 px-6 justify-between items-center shadow-md relative z-50">
        <div className="flex items-center gap-4 font-medium tracking-wide">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400 animate-pulse" /> Mon-Sun: 10 AM - 2 PM, 5 PM - 9 PM</span>
          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-amber-400" /> Chipiyana Buzurg, Ghaziabad</span>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${phoneNumber}`} className="flex items-center gap-1.5 font-bold hover:text-amber-400 transition-colors">
            <PhoneCall className="w-4 h-4 animate-bounce" style={{ animationDuration: '3s' }} /> {phoneNumberFormatted}
          </a>
          <LanguageSwitcher variant="topbar" />
        </div>
      </div>

      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgb(0,0,0,0.05)] sticky top-0 z-40 border-b border-indigo-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer" onClick={scrollToTop}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center text-white font-extrabold text-2xl shadow-lg ring-4 ring-indigo-50 group-hover:scale-105 transition-transform duration-300">
                O
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-indigo-700">Oracle Dental</span>
                <span className="text-xs text-amber-600 font-bold tracking-wider uppercase">Clinic & Implants</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 items-center">
              <a
                href="/dentist-chipiyana-buzurg-ghaziabad"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPath('/dentist-chipiyana-buzurg-ghaziabad');
                }}
                className={`font-bold transition-all py-1.5 px-3 rounded-lg text-xs bg-amber-500/10 text-amber-800 hover:bg-amber-500/20 border border-amber-400/50 flex items-center gap-1 shadow-2xs ${
                  currentPath === '/dentist-chipiyana-buzurg-ghaziabad' ? 'ring-2 ring-amber-500 bg-amber-500/20' : ''
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-amber-600" /> Chipiyana Branch
              </a>

              {/* Treatments & Pages Mega Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsNavDropdownOpen(true)}
                onMouseLeave={() => setIsNavDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
                  className="font-bold text-xs py-2 px-3 rounded-lg bg-blue-50 text-blue-800 hover:bg-blue-100 transition-colors flex items-center gap-1 border border-blue-200 shadow-2xs"
                >
                  <span>All Dental Pages ({TOTAL_DENTAL_PAGES_COUNT})</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isNavDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isNavDropdownOpen && (
                  <div className="absolute top-full left-0 w-[780px] max-w-[95vw] bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 mt-1 grid grid-cols-3 gap-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200 max-h-[80vh] overflow-y-auto">
                    <div>
                      <h4 className="font-extrabold text-xs text-amber-700 uppercase tracking-wider mb-2 pb-1 border-b border-slate-100 flex items-center justify-between">
                        <span>Treatments ({treatmentPagesList.length})</span>
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {treatmentPagesList.map((item, idx) => (
                          <li key={idx}>
                            <a 
                              href={item.path}
                              onMouseEnter={() => preloadRoute(item.path)}
                              onTouchStart={() => preloadRoute(item.path)}
                              onClick={(e) => {
                                e.preventDefault();
                                setIsNavDropdownOpen(false);
                                navigateToPath(item.path);
                              }}
                              className="block p-1.5 rounded-md hover:bg-amber-50 hover:text-amber-900 transition-colors font-medium truncate"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-xs text-cyan-700 uppercase tracking-wider mb-2 pb-1 border-b border-slate-100 flex items-center justify-between">
                        <span>Symptoms ({symptomPagesList.length})</span>
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {symptomPagesList.map((item, idx) => (
                          <li key={idx}>
                            <a 
                              href={item.path}
                              onMouseEnter={() => preloadRoute(item.path)}
                              onTouchStart={() => preloadRoute(item.path)}
                              onClick={(e) => {
                                e.preventDefault();
                                setIsNavDropdownOpen(false);
                                navigateToPath(item.path);
                              }}
                              className="block p-1.5 rounded-md hover:bg-cyan-50 hover:text-cyan-900 transition-colors font-medium truncate"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-extrabold text-xs text-emerald-700 uppercase tracking-wider mb-2 pb-1 border-b border-slate-100 flex items-center justify-between">
                        <span>Cost Guides ({costPagesList.length})</span>
                      </h4>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {costPagesList.map((item, idx) => (
                          <li key={idx}>
                            <a 
                              href={item.path}
                              onMouseEnter={() => preloadRoute(item.path)}
                              onTouchStart={() => preloadRoute(item.path)}
                              onClick={(e) => {
                                e.preventDefault();
                                setIsNavDropdownOpen(false);
                                navigateToPath(item.path);
                              }}
                              className="block p-1.5 rounded-md hover:bg-emerald-50 hover:text-emerald-900 transition-colors font-medium truncate"
                            >
                              {item.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {[
                { id: 'transformations', label: 'Results' },
                { id: 'services', label: 'Services' },
                { id: 'why-us', label: 'Why Us' },
                { id: 'testimonials', label: 'Reviews' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <a 
                  key={item.id}
                  href={`#${item.id}`} 
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`font-medium transition-colors relative py-2 ${
                    activeSection === item.id ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                  )}
                </a>
              ))}
              <LanguageSwitcher variant="header" />
              <InteractiveButton 
                id="mute-toggle-desktop"
                onClick={toggleMute}
                className="text-slate-500 hover:text-blue-600 p-2 rounded-full transition-colors"
                aria-label={isMuted ? "Unmute music" : "Mute music"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </InteractiveButton>
            </nav>

            {/* Mobile menu button and volume toggle */}
            <div className="flex items-center md:hidden gap-2">
              <LanguageSwitcher variant="topbar" />
              <InteractiveButton 
                id="mute-toggle-mobile"
                onClick={toggleMute}
                className="text-slate-500 hover:text-blue-600 p-2 rounded-full transition-colors"
                aria-label={isMuted ? "Unmute music" : "Mute music"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </InteractiveButton>
              <InteractiveButton
                id="mobile-menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-600 hover:text-blue-600 focus:outline-none p-2"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </InteractiveButton>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl overflow-y-auto max-h-[85vh] z-50 left-0 top-full transform-gpu will-change-transform"
            >
              <div className="px-4 pt-3 pb-6 space-y-2.5">
                {/* Search Bar at Top of Expanded Mobile Menu to Filter All Pages */}
                <div className="relative">
                  <div className="relative flex items-center">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                    <input
                      id="mobile-treatment-search-input"
                      type="text"
                      value={mobileSearchQuery}
                      onChange={(e) => setMobileSearchQuery(e.target.value)}
                      placeholder={`Search all ${TOTAL_DENTAL_PAGES_COUNT} treatments, symptoms, costs...`}
                      className="w-full pl-10 pr-9 py-2.5 bg-slate-100/90 hover:bg-slate-50 focus:bg-white text-slate-900 text-xs sm:text-sm rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none transition-all placeholder:text-slate-400"
                    />
                    {mobileSearchQuery && (
                      <button
                        type="button"
                        onClick={() => setMobileSearchQuery('')}
                        className="absolute right-3 p-1 text-slate-400 hover:text-slate-600 rounded-full focus:outline-none"
                        aria-label="Clear search"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>

                  {/* Real-time Filtered Results Panel */}
                  {mobileSearchQuery.trim() !== '' && (
                    <div className="mt-2 bg-white rounded-xl border border-slate-200 shadow-xl p-2 max-h-64 overflow-y-auto space-y-1">
                      <div className="px-2 py-1 text-[11px] font-bold text-slate-500 flex justify-between items-center border-b border-slate-100 pb-1.5 mb-1">
                        <span>Matching Pages ({filteredMobilePages.length})</span>
                        <span className="text-[10px] text-blue-600 font-semibold">Tap to view</span>
                      </div>

                      {filteredMobilePages.length > 0 ? (
                        filteredMobilePages.map((page, idx) => (
                          <a
                            key={idx}
                            href={page.path}
                            onMouseEnter={() => preloadRoute(page.path)}
                            onTouchStart={() => preloadRoute(page.path)}
                            onClick={(e) => {
                              e.preventDefault();
                              setIsMenuOpen(false);
                              setMobileSearchQuery('');
                              navigateToPath(page.path);
                            }}
                            className="p-2.5 rounded-lg hover:bg-blue-50 active:bg-blue-100 flex items-center justify-between text-xs font-semibold text-slate-800 transition-colors group"
                          >
                            <span className="truncate pr-2">{page.title}</span>
                            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-800 shrink-0">
                              {page.category}
                            </span>
                          </a>
                        ))
                      ) : (
                        <div className="py-4 text-center text-xs text-slate-500">
                          <p className="font-semibold text-slate-700">No pages matching "{mobileSearchQuery}"</p>
                          <p className="text-[11px] text-slate-400 mt-1">Try "implants", "rct", "pain", "cleaning", or "cost"</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <a 
                  href="/dentist-chipiyana-buzurg-ghaziabad" 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    navigateToPath('/dentist-chipiyana-buzurg-ghaziabad');
                  }} 
                  className="block px-4 py-3 text-sm font-extrabold text-amber-900 bg-amber-50/90 rounded-xl border-l-4 border-amber-500 my-1 flex items-center justify-between active:scale-[0.99] transition-transform"
                >
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0" /> Dentist in Chipiyana
                  </span>
                  <span className="text-xs font-bold uppercase bg-amber-200/80 text-amber-900 px-2 py-0.5 rounded-md shrink-0">Branch</span>
                </a>

                {/* Mobile Expandable All Treatments Accordion with Framer Motion Layout Animation */}
                <motion.div 
                  layout
                  transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.8 }}
                  className="border border-slate-200/80 rounded-xl overflow-hidden bg-slate-50/80 transition-colors"
                >
                  <button 
                    onClick={() => setIsMobileTreatmentsOpen(!isMobileTreatmentsOpen)}
                    type="button"
                    aria-expanded={isMobileTreatmentsOpen}
                    className="w-full px-4 py-3 text-sm font-bold text-slate-900 flex justify-between items-center bg-blue-50/80 active:bg-blue-100/80 transition-colors"
                  >
                    <span className="truncate pr-2">All Dental Care & Treatments ({TOTAL_DENTAL_PAGES_COUNT} Pages)</span>
                    <ChevronDown className={`w-4 h-4 text-blue-600 shrink-0 transition-transform duration-300 ease-out transform-gpu ${isMobileTreatmentsOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isMobileTreatmentsOpen && (
                      <motion.div
                        key="treatments-accordion-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 320, damping: 32, mass: 0.8 }}
                        className="overflow-hidden bg-white transform-gpu will-change-[height,opacity]"
                      >
                        <div className="p-3 space-y-3 text-xs border-t border-slate-100">
                          <div>
                            <span className="font-extrabold text-amber-700 block uppercase mb-1.5 text-[11px] tracking-wider">Treatments & Clinics ({treatmentPagesList.length})</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {treatmentPagesList.map((item, idx) => (
                                <motion.a 
                                  key={idx}
                                  layout="position"
                                  href={item.path}
                                  onMouseEnter={() => preloadRoute(item.path)}
                                  onTouchStart={() => preloadRoute(item.path)}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setIsMenuOpen(false);
                                    navigateToPath(item.path);
                                  }}
                                  className="p-2 rounded-lg bg-slate-50 hover:bg-amber-50 active:bg-amber-100 font-medium text-slate-800 transition-colors border border-slate-100/80 truncate block"
                                >
                                  {item.title}
                                </motion.a>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2 border-t border-slate-100">
                            <span className="font-extrabold text-cyan-700 block uppercase mb-1.5 text-[11px] tracking-wider">Symptoms & Conditions ({symptomPagesList.length})</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {symptomPagesList.map((item, idx) => (
                                <motion.a 
                                  key={idx}
                                  layout="position"
                                  href={item.path}
                                  onMouseEnter={() => preloadRoute(item.path)}
                                  onTouchStart={() => preloadRoute(item.path)}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setIsMenuOpen(false);
                                    navigateToPath(item.path);
                                  }}
                                  className="p-2 rounded-lg bg-slate-50 hover:bg-cyan-50 active:bg-cyan-100 font-medium text-slate-800 transition-colors border border-slate-100/80 truncate block"
                                >
                                  {item.title}
                                </motion.a>
                              ))}
                            </div>
                          </div>

                          <div className="pt-2 border-t border-slate-100">
                            <span className="font-extrabold text-emerald-700 block uppercase mb-1.5 text-[11px] tracking-wider">Ghaziabad Cost Guides ({costPagesList.length})</span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                              {costPagesList.map((item, idx) => (
                                <motion.a 
                                  key={idx}
                                  layout="position"
                                  href={item.path}
                                  onMouseEnter={() => preloadRoute(item.path)}
                                  onTouchStart={() => preloadRoute(item.path)}
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setIsMenuOpen(false);
                                    navigateToPath(item.path);
                                  }}
                                  className="p-2 rounded-lg bg-slate-50 hover:bg-emerald-50 active:bg-emerald-100 font-medium text-slate-800 transition-colors border border-slate-100/80 truncate block"
                                >
                                  {item.title}
                                </motion.a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {[
                  { id: 'transformations', label: 'Smile Results' },
                  { id: 'services', label: 'Services' },
                  { id: 'why-us', label: 'Why Choose Us' },
                  { id: 'testimonials', label: 'Patient Reviews' },
                  { id: 'faq', label: 'FAQ' },
                  { id: 'contact', label: 'Contact Us' }
                ].map((item) => (
                  <motion.a 
                    key={item.id}
                    layout="position"
                    href={`#${item.id}`} 
                    onClick={(e) => scrollToSection(e, item.id)} 
                    className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                      activeSection === item.id 
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600' 
                        : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600 border-l-4 border-transparent'
                    }`}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="flex items-center gap-6 px-4 pt-4 border-t border-slate-100">
                  <a href="https://www.facebook.com/profile.php?id=100083436112014" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/oracledentalclinic0/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-pink-600 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="https://www.youtube.com/@OracleDentalClinic0" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-red-600 transition-colors">
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {activeRoute === '/wisdom-tooth-extraction' ? (
          <Suspense fallback={<SkeletonHero />}>
            <WisdomToothPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/tooth-pain-treatment' ? (
          <Suspense fallback={<SkeletonHero />}>
            <ToothPainPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/bleeding-gums' ? (
          <Suspense fallback={<SkeletonHero />}>
            <BleedingGumsPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/tooth-sensitivity' ? (
          <Suspense fallback={<SkeletonHero />}>
            <ToothSensitivityPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/bad-breath-treatment' ? (
          <Suspense fallback={<SkeletonHero />}>
            <BadBreathPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/loose-tooth-treatment' ? (
          <Suspense fallback={<SkeletonHero />}>
            <LooseToothPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/broken-tooth-treatment' ? (
          <Suspense fallback={<SkeletonHero />}>
            <BrokenToothPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/chipped-tooth' ? (
          <Suspense fallback={<SkeletonHero />}>
            <ChippedToothPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/black-tooth' ? (
          <Suspense fallback={<SkeletonHero />}>
            <BlackToothPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/missing-teeth' ? (
          <Suspense fallback={<SkeletonHero />}>
            <MissingTeethPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/cavity-treatment' ? (
          <Suspense fallback={<SkeletonHero />}>
            <CavityTreatmentPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/gum-disease-treatment' ? (
          <Suspense fallback={<SkeletonHero />}>
            <GumDiseasePage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/swollen-gums' ? (
          <Suspense fallback={<SkeletonHero />}>
            <SwollenGumsPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/gum-recession' ? (
          <Suspense fallback={<SkeletonHero />}>
            <GumRecessionPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/tooth-cap' ? (
          <Suspense fallback={<SkeletonHero />}>
            <ToothCapPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/tooth-extraction' ? (
          <Suspense fallback={<SkeletonHero />}>
            <ToothExtractionPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/emergency-dentist' ? (
          <Suspense fallback={<SkeletonHero />}>
            <EmergencyDentistPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/kids-dentist' ? (
          <Suspense fallback={<SkeletonHero />}>
            <KidsDentistPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/dental-fillings' ? (
          <Suspense fallback={<SkeletonHero />}>
            <DentalFillingsPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/dental-bridges' ? (
          <Suspense fallback={<SkeletonHero />}>
            <DentalBridgesPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/dentures' ? (
          <Suspense fallback={<SkeletonHero />}>
            <DenturesPage handleCall={handleCall} handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} navigateToHome={() => navigateToPath('/')} navigateToPath={navigateToPath} />
          </Suspense>
        ) : activeRoute === '/teeth-cleaning' ? (
          <Suspense fallback={<SkeletonHero />}>
            <TeethCleaningPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/teeth-whitening' ? (
          <Suspense fallback={<SkeletonHero />}>
            <TeethWhiteningPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/dental-implants' ? (
          <Suspense fallback={<SkeletonHero />}>
            <DentalImplantsPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/root-canal-treatment' ? (
          <Suspense fallback={<SkeletonHero />}>
            <RootCanalPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/dentist-chipiyana-buzurg-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <ChipiyanaLandingPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
            />
          </Suspense>
        ) : activeRoute === '/dentist-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <DentistGhaziabadPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/dental-clinic-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <DentalClinicGhaziabadPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/dentist-near-me' ? (
          <Suspense fallback={<SkeletonHero />}>
            <DentistNearMePage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/dental-treatment-cost-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <DentalTreatmentCostPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/dental-implant-cost-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <DentalImplantCostPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/root-canal-cost-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <RootCanalCostPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/tooth-cap-cost-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <ToothCapCostPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/dental-abscess-treatment' ? (
          <Suspense fallback={<SkeletonHero />}>
            <DentalAbscessPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/impacted-wisdom-tooth' ? (
          <Suspense fallback={<SkeletonHero />}>
            <ImpactedWisdomToothPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/periodontal-gum-treatment-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <PeriodontalTreatmentPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/tooth-filling-cost-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <ToothFillingCostPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/teeth-cleaning-cost-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <TeethCleaningCostPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/wisdom-tooth-extraction-cost-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <WisdomToothCostPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/tooth-extraction-cost-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <ToothExtractionCostPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/dental-bridge-cost-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <DentalBridgeCostPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/dentures-cost-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <DenturesCostPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/teeth-whitening-cost-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <TeethWhiteningCostPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/emergency-dentist-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <EmergencyDentistGhaziabadPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/dental-implant-after-tooth-extraction' ? (
          <Suspense fallback={<SkeletonHero />}>
            <ImmediateDentalImplantPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : activeRoute === '/smile-makeover-ghaziabad' ? (
          <Suspense fallback={<SkeletonHero />}>
            <SmileMakeoverGhaziabadPage 
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              handleDirections={handleDirections}
              navigateToHome={() => navigateToPath('/')}
              navigateToPath={navigateToPath}
            />
          </Suspense>
        ) : (
          <>
            <Hero handleCall={handleCall} handleWhatsApp={handleWhatsApp} navigateToPath={navigateToPath} />
            
            {/* Emergency Banner */}
            <motion.section 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white py-5 px-4 shadow-[0_10px_40px_rgba(225,29,72,0.3)] relative z-30 overflow-hidden"
            >
              {/* Animated background sheen */}
              <div className="absolute inset-0 bg-white/10 skew-x-[-20deg] w-1/4 -translate-x-[200%] animate-sheen"></div>
              
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-2xl animate-pulse shadow-inner">
                    <Activity className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-xl tracking-tight">Severe Tooth Pain or Emergency?</h3>
                    <p className="text-red-100 font-medium text-sm mt-0.5">Don't wait. We provide immediate relief, 24/7 support.</p>
                  </div>
                </div>
                <InteractiveButton id="emergency-call-btn" onClick={handleCall} className="w-full sm:w-auto bg-white text-red-600 font-black tracking-wide py-3 px-8 rounded-xl shadow-xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2 active:scale-95 hover:scale-105 hover:shadow-2xl border border-white/50">
                  <PhoneCall className="w-5 h-5 animate-ring" /> Call Emergency Now
                </InteractiveButton>
              </div>
            </motion.section>

            <BeforeAfter />

            <Suspense fallback={<SkeletonCardGrid count={6} />}>
              <Services handleWhatsApp={handleWhatsApp} navigateToPath={navigateToPath} />

              <WhyUs handleWhatsApp={handleWhatsApp} />

              <Testimonials />
              
              <FAQ faqs={faqs} />

              <Contact handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} />
            </Suspense>
          </>
        )}
      </main>

      <Footer phoneNumber={phoneNumber} handleWhatsApp={handleWhatsApp} scrollToSection={scrollToSection} navigateToPath={navigateToPath} />

      {/* Floating Action Buttons (Sticky Bottom) */}
      <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-8 z-50 flex justify-between md:justify-end md:gap-6 items-center pointer-events-none">
        {/* WhatsApp Button */}
        <div className="relative pointer-events-auto group">
          <div className="absolute inset-0 bg-[#25D366] rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity animate-pulse"></div>
          <InteractiveButton 
            id="floating-whatsapp-btn"
            onClick={handleWhatsApp}
            className="relative bg-[#25D366] text-white p-4 md:p-5 rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.6)] hover:bg-[#20b858] transition-transform flex items-center justify-center border-2 border-white hover:scale-110 active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-8 h-8 md:w-9 md:h-9" />
          </InteractiveButton>
        </div>

        {/* Call Button */}
        <div className="relative pointer-events-auto group">
          <div className="absolute inset-0 bg-blue-600 rounded-full blur-md opacity-60 group-hover:opacity-100 transition-opacity animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <InteractiveButton
            id="floating-call-btn"
            onClick={handleCall}
            className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 md:p-5 rounded-full shadow-[0_8px_30px_rgb(37,99,235,0.6)] hover:from-blue-700 hover:to-indigo-700 transition-transform flex items-center justify-center border-2 border-white hover:scale-110 active:scale-95"
            aria-label="Call Clinic"
          >
            <PhoneCall className="w-8 h-8 md:w-9 md:h-9" />
          </InteractiveButton>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <InteractiveButton
            id="back-to-top-btn"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-28 right-4 md:bottom-32 md:right-8 bg-slate-800 text-white p-3 rounded-full shadow-2xl hover:bg-slate-700 transition-colors z-40 border-2 border-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Back to top"
          >
            <ArrowUp className="w-6 h-6" />
          </InteractiveButton>
        )}
      </AnimatePresence>
    </div>
  );
}
