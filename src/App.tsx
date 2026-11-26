/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, lazy, Suspense } from 'react';
import {
  PhoneCall,
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
import { SoundProvider, useSound } from './components/SoundManager';
import { InteractiveButton } from './components/InteractiveButton';
import Hero from './components/Hero';
import ExploreTreatmentsSection from './components/ExploreTreatmentsSection';
import SEOHead from './components/SEOHead';
import ScrollProgressBar from './components/ScrollProgressBar';
import LanguageSwitcher from './components/LanguageSwitcher';
import FloatingAppointmentButtons from './components/FloatingAppointmentButtons';
import { GBP_CONFIG, getTreatmentWhatsAppUrl } from './config/googleBusinessProfile';
import { ROUTE_SEO_MAP, NOT_FOUND_SEO } from './config/seoData';
import { preloadRoute } from './utils/routePreloader';
import { trackClinicEvent } from './utils/analytics';
import SkeletonHero from './components/SkeletonHero';
import { SkeletonCardGrid } from './components/SkeletonCard';
import DeferredSection from './components/DeferredSection';

const DoctorProfile = lazy(() => import('./components/DoctorProfile'));
const TreatmentAppointmentCTA = lazy(() => import('./components/TreatmentAppointmentCTA'));
const BeforeAfter = lazy(() => import('./components/BeforeAfter'));
const Services = lazy(() => import('./components/Services'));
const WhyUs = lazy(() => import('./components/WhyUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const YouTubeSection = lazy(() => import('./components/YouTubeSection'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const NotFoundPage = lazy(() => import('./components/NotFoundPage'));

const DentalServicesPage = lazy(() => import('./components/DentalServicesPage'));
const DentalFaqsPage = lazy(() => import('./components/DentalFaqsPage'));
const ChipiyanaLandingPage = lazy(() => import('./components/ChipiyanaLandingPage'));
const RootCanalPage = lazy(() => import('./components/RootCanalPage'));
const DentalImplantsPage = lazy(() => import('./components/DentalImplantsPage'));
const FullMouthImplantsPage = lazy(() => import('./components/FullMouthImplantsPage'));
const CosmeticDentistryPage = lazy(() => import('./components/CosmeticDentistryPage'));
const DentalVeneersPage = lazy(() => import('./components/DentalVeneersPage'));
const ZirconiaCrownsPage = lazy(() => import('./components/ZirconiaCrownsPage'));
const DentalBracesPage = lazy(() => import('./components/DentalBracesPage'));
const ClearAlignersPage = lazy(() => import('./components/ClearAlignersPage'));
const WisdomToothPage = lazy(() => import('./components/WisdomToothPage'));
const TeethWhiteningPage = lazy(() => import('./components/TeethWhiteningPage'));
const TeethCleaningPage = lazy(() => import('./components/TeethCleaningPage'));
const ToothPainPage = lazy(() => import('./components/ToothPainPage'));
const ToothSensitivityPage = lazy(() => import('./components/ToothSensitivityPage'));
const BadBreathPage = lazy(() => import('./components/BadBreathPage'));
const LooseToothPage = lazy(() => import('./components/LooseToothPage'));
const BrokenToothPage = lazy(() => import('./components/BrokenToothPage'));
const ChippedToothPage = lazy(() => import('./components/ChippedToothPage'));
const BlackToothPage = lazy(() => import('./components/BlackToothPage'));
const MissingTeethPage = lazy(() => import('./components/MissingTeethPage'));
const CavityTreatmentPage = lazy(() => import('./components/CavityTreatmentPage'));
const ToothCapPage = lazy(() => import('./components/ToothCapPage'));
const ToothExtractionPage = lazy(() => import('./components/ToothExtractionPage'));
const KidsDentistPage = lazy(() => import('./components/KidsDentistPage'));
const DentalFillingsPage = lazy(() => import('./components/DentalFillingsPage'));
const DentalBridgesPage = lazy(() => import('./components/DentalBridgesPage'));
const DenturesPage = lazy(() => import('./components/DenturesPage'));
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
const PrivacyPolicyPage = lazy(() => import('./components/PrivacyPolicyPage'));

// Client-side fallback mirror of Netlify 301 redirects (used during local dev or direct history transitions)
const CONSOLIDATED_REDIRECTS: Record<string, string> = {
  '/dentist-near-me': '/dentist-chipiyana-buzurg-ghaziabad',
  '/dentist-ghaziabad': '/dentist-chipiyana-buzurg-ghaziabad',
  '/dental-clinic-ghaziabad': '/dentist-chipiyana-buzurg-ghaziabad',
  '/gum-disease-treatment': '/periodontal-gum-treatment-ghaziabad',
  '/bleeding-gums': '/periodontal-gum-treatment-ghaziabad',
  '/swollen-gums': '/periodontal-gum-treatment-ghaziabad',
  '/gum-recession': '/periodontal-gum-treatment-ghaziabad',
  '/emergency-dentist': '/emergency-dentist-ghaziabad',
};

const ALL_DENTAL_PAGES = [
  // Key Treatments, Cosmetic, Knowledge Hub & Locations (27)
  { title: 'All Dental Services (9 Categories)', path: '/dental-services', category: 'Treatment', keywords: 'all services treatments greater noida noida extension ghaziabad implants cosmetic emax fluoride sealants' },
  { title: 'Dental FAQs & Patient Education Hub (130+ Q&As)', path: '/dental-faqs', category: 'Treatment', keywords: 'dental faqs questions answers knowledge hub implant cost india delhi ncr ghaziabad noida greater noida rct crowns veneers aligners safety recovery' },
  { title: 'Dental Implants', path: '/dental-implants', category: 'Treatment', keywords: 'teeth replacement fixture tooth implant' },
  { title: 'Full Mouth Dental Implants', path: '/full-mouth-dental-implants', category: 'Treatment', keywords: 'all on 4 all on 6 full arch implant rehabilitation' },
  { title: 'Root Canal Treatment (RCT)', path: '/root-canal-treatment', category: 'Treatment', keywords: 'rct tooth nerve pain infection re-rct endodontics' },
  { title: 'Cosmetic Dentistry', path: '/cosmetic-dentistry', category: 'Cosmetic', keywords: 'aesthetic dentistry smile design gap closure cosmetic dentist' },
  { title: 'Smile Makeover in Ghaziabad', path: '/smile-makeover-ghaziabad', category: 'Cosmetic', keywords: 'smile design veneers composite bonding aesthetic cosmetic dentist' },
  { title: 'Dental Veneers', path: '/dental-veneers', category: 'Cosmetic', keywords: 'porcelain composite veneers front teeth gap smile' },
  { title: 'Zirconia Crowns', path: '/zirconia-crowns', category: 'Treatment', keywords: 'metal free zirconia crown tooth cap cad cam emax' },
  { title: 'Teeth Cleaning & Scaling', path: '/teeth-cleaning', category: 'Treatment', keywords: 'scaling tartar plaque stains hygiene ultrasonic polishing' },
  { title: 'Teeth Whitening', path: '/teeth-whitening', category: 'Cosmetic', keywords: 'bleaching bright white smile cosmetic yellow stains' },
  { title: 'Wisdom Tooth Removal', path: '/wisdom-tooth-extraction', category: 'Treatment', keywords: 'third molar extraction surgical surgery impaction' },
  { title: 'Dental Braces', path: '/dental-braces', category: 'Treatment', keywords: 'metal ceramic self ligating orthodontic braces teeth alignment' },
  { title: 'Clear Aligners', path: '/clear-aligners', category: 'Cosmetic', keywords: 'invisible aligners removable orthodontic trays teeth straightening' },
  { title: 'Tooth Cap & Crowns', path: '/tooth-cap', category: 'Treatment', keywords: 'crown zirconia ceramic pfm cap after rct' },
  { title: 'Dental Fillings', path: '/dental-fillings', category: 'Treatment', keywords: 'composite tooth colored restoration decay cavity' },
  { title: 'Tooth Extraction', path: '/tooth-extraction', category: 'Treatment', keywords: 'pull tooth removal dental surgery' },
  { title: 'Dental Bridges', path: '/dental-bridges', category: 'Treatment', keywords: 'fixed bridge missing teeth ceramic' },
  { title: 'Dentures', path: '/dentures', category: 'Treatment', keywords: 'false teeth complete partial acrylic flexible' },
  { title: 'Kids Dentist', path: '/kids-dentist', category: 'Treatment', keywords: 'pediatric children dental care child tooth fluoride sealants' },
  { title: 'Dental Implant After Tooth Extraction', path: '/dental-implant-after-tooth-extraction', category: 'Treatment', keywords: 'immediate implant same day extraction socket bone graft' },
  { title: 'Dentist & Dental Clinic in Chipiyana, Ghaziabad', path: '/dentist-chipiyana-buzurg-ghaziabad', category: 'Location', keywords: 'dentist near me ghaziabad dental clinic chipiyana buzurg jaat chowk dolphin public school crossings republik noida extension greater noida west shahberi' },
  { title: 'Impacted Wisdom Tooth', path: '/impacted-wisdom-tooth', category: 'Treatment', keywords: 'horizontal wisdom tooth surgery pain swelling pericoronitis' },

  // Symptoms, Conditions & Urgent Care (12)
  { title: 'Tooth Pain Treatment', path: '/tooth-pain-treatment', category: 'Symptom', keywords: 'toothache throbbing sharp pain relief ache' },
  { title: 'Tooth Sensitivity Relief', path: '/tooth-sensitivity', category: 'Symptom', keywords: 'sensitive teeth hot cold sweet tingling enamel' },
  { title: 'Bad Breath Treatment', path: '/bad-breath-treatment', category: 'Symptom', keywords: 'halitosis mouth odor smell tongue bacteria' },
  { title: 'Loose Tooth Care', path: '/loose-tooth-treatment', category: 'Symptom', keywords: 'mobile shaky wobbly tooth bone loss periodontitis' },
  { title: 'Broken Tooth Repair', path: '/broken-tooth-treatment', category: 'Symptom', keywords: 'fractured split cracked trauma crown restoration' },
  { title: 'Chipped Tooth Repair', path: '/chipped-tooth', category: 'Symptom', keywords: 'bonding veneer front tooth cosmetic fix chip' },
  { title: 'Black / Dark Tooth Care', path: '/black-tooth', category: 'Symptom', keywords: 'discolored dark dead tooth stain pulp trauma' },
  { title: 'Missing Teeth Options', path: '/missing-teeth', category: 'Symptom', keywords: 'gap missing tooth replace implant bridge' },
  { title: 'Cavity Treatment', path: '/cavity-treatment', category: 'Symptom', keywords: 'caries hole tooth decay filling restoration' },
  { title: 'Dental Abscess Treatment', path: '/dental-abscess-treatment', category: 'Urgent Care', keywords: 'pus swelling infection dental abscess emergency face' },
  { title: 'Gum & Periodontal Treatment', path: '/periodontal-gum-treatment-ghaziabad', category: 'Specialized', keywords: 'gum disease bleeding gums swollen gums gum recession gingivitis periodontitis deep cleaning scaling root planing bone loss pockets' },
  { title: 'Emergency Dentist in Ghaziabad', path: '/emergency-dentist-ghaziabad', category: 'Urgent Care', keywords: 'emergency dentist urgent toothache emergency clinic daily 9 am 9 pm pain swelling broken tooth trauma relief' },

  // Cost Guides (11)
  { title: 'Dental Treatment Cost', path: '/dental-treatment-cost-ghaziabad', category: 'Cost Guide', keywords: 'cost price charges fee estimates consultation' },
  { title: 'Dental Implant Cost', path: '/dental-implant-cost-ghaziabad', category: 'Cost Guide', keywords: 'implant price cost estimates single full mouth' },
  { title: 'Root Canal Cost', path: '/root-canal-cost-ghaziabad', category: 'Cost Guide', keywords: 'rct price molar front tooth root canal cost' },
  { title: 'Tooth Cap / Crown Cost', path: '/tooth-cap-cost-ghaziabad', category: 'Cost Guide', keywords: 'crown price zirconia ceramic pfm cap cost' },
  { title: 'Tooth Filling Cost', path: '/tooth-filling-cost-ghaziabad', category: 'Cost Guide', keywords: 'filling cost composite gic cavity price' },
  { title: 'Teeth Cleaning Cost', path: '/teeth-cleaning-cost-ghaziabad', category: 'Cost Guide', keywords: 'cleaning scaling polishing tartar calculus price' },
  { title: 'Wisdom Tooth Extraction Cost', path: '/wisdom-tooth-extraction-cost-ghaziabad', category: 'Cost Guide', keywords: 'wisdom tooth surgery impaction surgical extraction price' },
  { title: 'Tooth Extraction Cost', path: '/tooth-extraction-cost-ghaziabad', category: 'Cost Guide', keywords: 'pull tooth simple extraction cost surgical removal price' },
  { title: 'Dental Bridge Cost', path: '/dental-bridge-cost-ghaziabad', category: 'Cost Guide', keywords: 'bridge cost zirconia pfm unit price missing teeth' },
  { title: 'Dentures Cost', path: '/dentures-cost-ghaziabad', category: 'Cost Guide', keywords: 'denture price complete partial flexible valplast bps cost' },
  { title: 'Teeth Whitening Cost', path: '/teeth-whitening-cost-ghaziabad', category: 'Cost Guide', keywords: 'teeth bleaching whitening laser in office price cost' }
];

const KNOWN_ROUTES = [...ALL_DENTAL_PAGES.map((p) => p.path), '/privacy-policy'];

// Routes that already render <TreatmentAppointmentCTA /> internally (or legal pages)
const PAGES_WITH_BUILT_IN_CTA = new Set([
  '/',
  '/dental-services',
  '/dental-faqs',
  '/full-mouth-dental-implants',
  '/cosmetic-dentistry',
  '/dental-veneers',
  '/zirconia-crowns',
  '/dental-braces',
  '/clear-aligners',
  '/tooth-cap',
  '/dental-fillings',
  '/tooth-extraction',
  '/privacy-policy',
]);

const TOTAL_DENTAL_PAGES_COUNT = ALL_DENTAL_PAGES.length;
const treatmentPagesList = ALL_DENTAL_PAGES.filter((p) => ['Treatment', 'Location', 'Cosmetic'].includes(p.category));
const symptomPagesList = ALL_DENTAL_PAGES.filter((p) => ['Symptom', 'Urgent Care', 'Specialized'].includes(p.category));
const costPagesList = ALL_DENTAL_PAGES.filter((p) => p.category === 'Cost Guide');

export default function App() {
  return (
    <SoundProvider>
      <AppContent />
    </SoundProvider>
  );
}

function AppContent() {
  const { isMuted, toggleMute } = useSound();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);
  const [isMobileTreatmentsOpen, setIsMobileTreatmentsOpen] = useState(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState('');
  const [forceMountSections, setForceMountSections] = useState(
    () => typeof window !== 'undefined' && window.location.hash.length > 1
  );

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
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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

  const resolveRoute = (path: string): { route: string; isNotFound: boolean } => {
    if (!path || path === '/' || path === '' || path === '/index.html') {
      return { route: '/', isNotFound: false };
    }
    let clean = path.endsWith('/') && path.length > 1 ? path.slice(0, -1) : path;
    const base = getBasePath();
    if (base && clean.startsWith(base)) {
      clean = clean.slice(base.length) || '/';
    }
    if (clean === '/' || clean === '' || clean === '/index.html') {
      return { route: '/', isNotFound: false };
    }
    if (CONSOLIDATED_REDIRECTS[clean]) {
      return { route: CONSOLIDATED_REDIRECTS[clean], isNotFound: false };
    }
    for (const route of KNOWN_ROUTES) {
      if (clean === route || clean.endsWith(route)) {
        return { route, isNotFound: false };
      }
    }
    return { route: clean, isNotFound: true };
  };

  const { route: activeRoute, isNotFound } = resolveRoute(currentPath);

  useEffect(() => {
    const clean =
      currentPath.endsWith('/') && currentPath.length > 1 ? currentPath.slice(0, -1) : currentPath;
    const redirectTarget = CONSOLIDATED_REDIRECTS[clean];
    if (redirectTarget) {
      const base = getBasePath();
      const fullPath = base ? base + redirectTarget : redirectTarget;
      window.history.replaceState({}, '', fullPath);
      setCurrentPath(redirectTarget);
    }
  }, [currentPath]);

  const navigateToPath = (path: string) => {
    const base = getBasePath();
    const target = path.startsWith('/') ? path : '/' + path;
    const fullPath = base ? (target === '/' ? base + '/' : base + target) : target;

    // Update document.title before pushState so GA4 Enhanced Measurement captures the exact route title once
    const resolved = resolveRoute(target);
    const nextSeo = resolved.isNotFound ? NOT_FOUND_SEO : (ROUTE_SEO_MAP[resolved.route] || ROUTE_SEO_MAP['/']);
    if (nextSeo?.title) {
      document.title = nextSeo.title;
    }

    window.history.pushState({}, '', fullPath);
    setCurrentPath(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (isNotFound || activeRoute === '/') return;
    const pageEntry = ALL_DENTAL_PAGES.find((p) => p.path === activeRoute);
    const pageGroup =
      activeRoute === '/dental-services'
        ? 'services_hub'
        : pageEntry?.category === 'Location'
        ? 'local_page'
        : pageEntry?.category === 'Cost Guide'
        ? 'cost_guide'
        : 'treatment_guide';

    trackClinicEvent('service_page_view', {
      placement: 'route_navigation',
      page_group: pageGroup,
    });
  }, [activeRoute, isNotFound]);


  useEffect(() => {
    let ticking = false;
    let lastShown = false;

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(() => {
          ticking = false;
          const nextShown = window.scrollY > 400;
          if (nextShown !== lastShown) {
            lastShown = nextShown;
            setShowBackToTop(nextShown);
          }
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeRoute !== '/' || typeof IntersectionObserver === 'undefined') {
      setActiveSection('');
      return;
    }

    let observer: IntersectionObserver | null = null;
    const sectionIds = ['doctor-profile', 'transformations', 'services', 'why-us', 'testimonials', 'faq', 'contact'];

    const attachObserver = () => {
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && entry.target.id) {
              setActiveSection(entry.target.id);
            }
          }
        },
        { rootMargin: '-25% 0px -55% 0px', threshold: 0.01 }
      );

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    };

    const timer = window.setTimeout(attachObserver, 900);
    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [activeRoute, forceMountSections]);

  const scrollToTop = () => {
    if (activeRoute !== '/' || isNotFound) {
      navigateToPath('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setForceMountSections(true);
    if (activeRoute !== '/' || isNotFound) {
      const base = getBasePath();
      const targetHash = (base ? base : '') + '/#' + id;
      document.title = ROUTE_SEO_MAP['/'].title;
      window.history.pushState({}, '', targetHash);
      setCurrentPath('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 180);
      return;
    }

    if (isMenuOpen) {
      setIsMenuOpen(false);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 220);
    } else {
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    }
  };

  const phoneNumber = GBP_CONFIG.PHONE;
  const phoneNumberFormatted = GBP_CONFIG.PHONE_DISPLAY;
  const activeRouteServiceName = ROUTE_SEO_MAP[activeRoute]?.serviceName;
  const activeRouteSlug = activeRoute === '/' ? 'homepage' : activeRoute.replace(/^\//, '').replace(/[^a-z0-9]+/g, '_');

  const openExternalLink = (url: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCall = () => {
    trackClinicEvent('call_click', {
      placement: 'page_cta_call',
      service_category: activeRouteSlug,
    });
    window.location.href = GBP_CONFIG.CALL_URL;
  };

  const handleWhatsApp = () => {
    const targetUrl =
      activeRoute !== '/' && activeRouteServiceName
        ? getTreatmentWhatsAppUrl(activeRouteServiceName)
        : GBP_CONFIG.WHATSAPP_BOOKING_URL;
    trackClinicEvent('appointment_cta_click', {
      placement: 'page_cta_whatsapp',
      service_category: activeRouteSlug,
    });
    openExternalLink(targetUrl);
  };

  const handleDirections = () => {
    trackClinicEvent('directions_click', {
      placement: 'page_cta_directions',
      service_category: activeRouteSlug,
    });
    openExternalLink(GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL);
  };

  const sharedPageProps = {
    handleCall,
    handleWhatsApp,
    handleDirections,
    navigateToHome: () => navigateToPath('/'),
    navigateToPath,
  };

  const renderPageContent = () => {
    if (isNotFound) {
      return (
        <Suspense fallback={<SkeletonHero />}>
          <NotFoundPage navigateToPath={navigateToPath} />
        </Suspense>
      );
    }

    switch (activeRoute) {
      case '/dental-services':
        return <DentalServicesPage {...sharedPageProps} />;
      case '/dental-faqs':
        return <DentalFaqsPage {...sharedPageProps} />;
      case '/wisdom-tooth-extraction':
        return <WisdomToothPage {...sharedPageProps} />;
      case '/tooth-pain-treatment':
        return <ToothPainPage {...sharedPageProps} />;
      case '/tooth-sensitivity':
        return <ToothSensitivityPage {...sharedPageProps} />;
      case '/bad-breath-treatment':
        return <BadBreathPage {...sharedPageProps} />;
      case '/loose-tooth-treatment':
        return <LooseToothPage {...sharedPageProps} />;
      case '/broken-tooth-treatment':
        return <BrokenToothPage {...sharedPageProps} />;
      case '/chipped-tooth':
        return <ChippedToothPage {...sharedPageProps} />;
      case '/black-tooth':
        return <BlackToothPage {...sharedPageProps} />;
      case '/missing-teeth':
        return <MissingTeethPage {...sharedPageProps} />;
      case '/cavity-treatment':
        return <CavityTreatmentPage {...sharedPageProps} />;
      case '/tooth-cap':
        return <ToothCapPage {...sharedPageProps} />;
      case '/tooth-extraction':
        return <ToothExtractionPage {...sharedPageProps} />;
      case '/kids-dentist':
        return <KidsDentistPage {...sharedPageProps} />;
      case '/dental-fillings':
        return <DentalFillingsPage {...sharedPageProps} />;
      case '/dental-bridges':
        return <DentalBridgesPage {...sharedPageProps} />;
      case '/dentures':
        return <DenturesPage {...sharedPageProps} />;
      case '/teeth-cleaning':
        return <TeethCleaningPage {...sharedPageProps} />;
      case '/teeth-whitening':
        return <TeethWhiteningPage {...sharedPageProps} />;
      case '/dental-implants':
        return <DentalImplantsPage {...sharedPageProps} />;
      case '/full-mouth-dental-implants':
        return <FullMouthImplantsPage {...sharedPageProps} />;
      case '/cosmetic-dentistry':
        return <CosmeticDentistryPage {...sharedPageProps} />;
      case '/dental-veneers':
        return <DentalVeneersPage {...sharedPageProps} />;
      case '/zirconia-crowns':
        return <ZirconiaCrownsPage {...sharedPageProps} />;
      case '/dental-braces':
        return <DentalBracesPage {...sharedPageProps} />;
      case '/clear-aligners':
        return <ClearAlignersPage {...sharedPageProps} />;
      case '/root-canal-treatment':
        return <RootCanalPage {...sharedPageProps} />;
      case '/dentist-chipiyana-buzurg-ghaziabad':
        return <ChipiyanaLandingPage {...sharedPageProps} />;
      case '/dental-treatment-cost-ghaziabad':
        return <DentalTreatmentCostPage {...sharedPageProps} />;
      case '/dental-implant-cost-ghaziabad':
        return <DentalImplantCostPage {...sharedPageProps} />;
      case '/root-canal-cost-ghaziabad':
        return <RootCanalCostPage {...sharedPageProps} />;
      case '/tooth-cap-cost-ghaziabad':
        return <ToothCapCostPage {...sharedPageProps} />;
      case '/dental-abscess-treatment':
        return <DentalAbscessPage {...sharedPageProps} />;
      case '/impacted-wisdom-tooth':
        return <ImpactedWisdomToothPage {...sharedPageProps} />;
      case '/periodontal-gum-treatment-ghaziabad':
        return <PeriodontalTreatmentPage {...sharedPageProps} />;
      case '/tooth-filling-cost-ghaziabad':
        return <ToothFillingCostPage {...sharedPageProps} />;
      case '/teeth-cleaning-cost-ghaziabad':
        return <TeethCleaningCostPage {...sharedPageProps} />;
      case '/wisdom-tooth-extraction-cost-ghaziabad':
        return <WisdomToothCostPage {...sharedPageProps} />;
      case '/tooth-extraction-cost-ghaziabad':
        return <ToothExtractionCostPage {...sharedPageProps} />;
      case '/dental-bridge-cost-ghaziabad':
        return <DentalBridgeCostPage {...sharedPageProps} />;
      case '/dentures-cost-ghaziabad':
        return <DenturesCostPage {...sharedPageProps} />;
      case '/teeth-whitening-cost-ghaziabad':
        return <TeethWhiteningCostPage {...sharedPageProps} />;
      case '/emergency-dentist-ghaziabad':
        return <EmergencyDentistGhaziabadPage {...sharedPageProps} />;
      case '/dental-implant-after-tooth-extraction':
        return <ImmediateDentalImplantPage {...sharedPageProps} />;
      case '/smile-makeover-ghaziabad':
        return <SmileMakeoverGhaziabadPage {...sharedPageProps} />;
      case '/privacy-policy':
        return (
          <PrivacyPolicyPage
            navigateToHome={() => navigateToPath('/')}
            navigateToPath={navigateToPath}
          />
        );
      default:
        return null;
    }
  };

  const activeSubpage = activeRoute !== '/' ? renderPageContent() : null;
  const shouldShowAutoCTA =
    !isNotFound && activeRoute !== '/' && !PAGES_WITH_BUILT_IN_CTA.has(activeRoute);

  return (
    <div className="min-h-screen bg-[#FFF8EC] font-sans text-[#26352F] scroll-smooth">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[10000] focus:bg-[#087B57] focus:text-white focus:px-4 focus:py-2.5 focus:rounded-xl focus:font-bold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FFD36A]"
      >
        Skip to main content
      </a>
      <ScrollProgressBar />
      <SEOHead routePath={activeRoute} isNotFound={isNotFound} />

      {/* Top Bar (Desktop) */}
      <div className="hidden md:flex bg-[#087B57] text-white text-xs py-2 px-6 justify-between items-center border-b border-[#066647] relative z-50">
        <div className="flex items-center gap-5 font-medium">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#FFD36A]" aria-hidden="true" /> {GBP_CONFIG.HOURS}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#FFD36A]" aria-hidden="true" /> Jaat Chowk, Chipiyana Buzurg, Ghaziabad
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            id="topbar-call-link"
            href={GBP_CONFIG.CALL_URL}
            aria-label={`${phoneNumberFormatted} — Call Oracle Dental Clinic`}
            onClick={() => trackClinicEvent('call_click', { placement: 'desktop_topbar' })}
            className="flex items-center gap-1.5 font-bold hover:text-[#FFD36A] transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-[#FFD36A]" aria-hidden="true" /> {phoneNumberFormatted}
          </a>
          <LanguageSwitcher variant="topbar" />
        </div>
      </div>

      {/* Header (Clean Warm White/Cream surface with Emerald/Teal brand & Orange active states) */}
      <header className="bg-white/95 shadow-xs sticky top-0 z-40 border-b border-[#087B57]/12 overflow-x-clip">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20 gap-2">
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex-shrink min-w-0 flex items-center gap-2 group cursor-pointer"
              aria-label="Oracle Dental Clinic & Implant Center — Home"
            >
              <div
                aria-hidden="true"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-gradient-to-br from-[#087B57] to-[#00A99D] rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-xs shrink-0"
              >
                O
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-base sm:text-lg md:text-xl leading-tight text-[#087B57] truncate">
                  Oracle Dental
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#B84D00] font-bold tracking-wide truncate">
                  Clinic &amp; Implant Center
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-4 items-center" aria-label="Main navigation">
              <a
                href="/dental-services"
                onMouseEnter={() => preloadRoute('/dental-services')}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPath('/dental-services');
                }}
                className={`font-semibold transition-colors py-2 px-3 rounded-xl text-xs whitespace-nowrap shrink-0 border ${
                  activeRoute === '/dental-services'
                    ? 'bg-[#B84D00] text-white border-[#B84D00]'
                    : 'bg-[#E5F5EC] text-[#087B57] hover:bg-[#067067] hover:text-white border-[#087B57]/15'
                }`}
              >
                Dental Services
              </a>

              <a
                href="/dental-faqs"
                onMouseEnter={() => preloadRoute('/dental-faqs')}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPath('/dental-faqs');
                }}
                className={`font-semibold transition-colors py-2 px-3 rounded-xl text-xs whitespace-nowrap shrink-0 border ${
                  activeRoute === '/dental-faqs'
                    ? 'bg-[#B84D00] text-white border-[#B84D00]'
                    : 'bg-[#FFF8EC] text-[#087B57] hover:bg-[#087B57] hover:text-white border-[#087B57]/20'
                }`}
              >
                Dental FAQs Hub
              </a>

              {/* Treatments & Pages Mega Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setIsNavDropdownOpen(true)}
                onMouseLeave={() => setIsNavDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
                  aria-expanded={isNavDropdownOpen}
                  className="font-bold text-xs py-2 px-3 rounded-xl bg-[#FFF8EC] text-[#26352F] border border-[#087B57]/15 hover:bg-[#E5F5EC] hover:text-[#087B57] transition-colors flex items-center gap-1 whitespace-nowrap shrink-0"
                >
                  <span>All Pages ({TOTAL_DENTAL_PAGES_COUNT})</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 text-[#087B57] transition-transform duration-200 ${
                      isNavDropdownOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isNavDropdownOpen && (
                  <div className="absolute top-full left-0 w-[820px] max-w-[95vw] bg-white rounded-2xl shadow-xl border border-[#087B57]/15 p-5 mt-1 grid grid-cols-3 gap-4 z-50 max-h-[80vh] overflow-y-auto">
                    <div>
                      <p className="font-bold text-xs text-amber-700 mb-2 pb-1 border-b border-slate-100">
                        Treatments &amp; Locations ({treatmentPagesList.length})
                      </p>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {treatmentPagesList.map((item) => (
                          <li key={item.path}>
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
                      <p className="font-bold text-xs text-cyan-700 mb-2 pb-1 border-b border-slate-100">
                        Symptoms &amp; Urgent Care ({symptomPagesList.length})
                      </p>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {symptomPagesList.map((item) => (
                          <li key={item.path}>
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
                      <p className="font-bold text-xs text-emerald-700 mb-2 pb-1 border-b border-slate-100">
                        Cost Guides ({costPagesList.length})
                      </p>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {costPagesList.map((item) => (
                          <li key={item.path}>
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
                { id: 'doctor-profile', label: 'Doctor' },
                { id: 'transformations', label: 'Results' },
                { id: 'why-us', label: 'Why Us' },
                { id: 'testimonials', label: 'Reviews' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contact', label: 'Contact' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`text-sm font-semibold transition-colors relative py-2 whitespace-nowrap shrink-0 ${
                    activeSection === item.id
                      ? 'text-[#B84D00]'
                      : 'text-[#26352F]/80 hover:text-[#087B57]'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#B84D00] rounded-full" />
                  )}
                </a>
              ))}

              <a
                id="header-book-whatsapp-btn"
                href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Book Appointment via WhatsApp"
                onClick={() =>
                  trackClinicEvent('appointment_cta_click', {
                    placement: 'desktop_header_book',
                  })
                }
                className="min-h-[42px] px-4.5 py-2 text-xs font-extrabold text-white bg-gradient-to-r from-[#C93B25] to-[#B84D00] hover:from-[#A92D1A] hover:to-[#963E00] rounded-full shadow-xs transition-all whitespace-nowrap shrink-0 inline-flex items-center"
              >
                Book Appointment
              </a>

              <InteractiveButton
                id="mute-toggle-desktop"
                onClick={toggleMute}
                className="text-[#26352F]/70 hover:text-[#087B57] p-2 rounded-full transition-colors"
                aria-label={isMuted ? 'Unmute background audio' : 'Mute background audio'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" aria-hidden="true" /> : <Volume2 className="w-4 h-4" aria-hidden="true" />}
              </InteractiveButton>
            </nav>

            {/* Mobile menu button and volume toggle */}
            <div className="flex items-center md:hidden gap-1 shrink-0">
              <LanguageSwitcher variant="mobile-header" />
              <InteractiveButton
                id="mute-toggle-mobile"
                onClick={toggleMute}
                className="w-9 h-9 sm:w-10 sm:h-10 min-w-[36px] min-h-[36px] flex items-center justify-center text-[#26352F]/75 hover:text-[#087B57] rounded-xl transition-colors shrink-0"
                aria-label={isMuted ? 'Unmute background audio' : 'Mute background audio'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
              </InteractiveButton>
              <InteractiveButton
                id="mobile-menu-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center bg-[#E5F5EC] text-[#087B57] hover:bg-[#087B57] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087B57] rounded-xl transition-colors shrink-0"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </InteractiveButton>
            </div>
          </div>
        </div>

        {/* Mobile menu (Lightweight CSS, zero framer-motion bundle) */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 absolute w-full shadow-xl overflow-y-auto max-h-[82vh] z-50 left-0 top-full">
            <div className="px-4 pt-3 pb-6 space-y-2.5">
              {/* Search Bar */}
              <div className="relative">
                <div className="relative flex items-center">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" aria-hidden="true" />
                  <input
                    id="mobile-treatment-search-input"
                    type="text"
                    value={mobileSearchQuery}
                    onChange={(e) => setMobileSearchQuery(e.target.value)}
                    placeholder={`Search all ${TOTAL_DENTAL_PAGES_COUNT} treatments, symptoms, costs...`}
                    aria-label="Search dental treatments, symptoms, and cost guides"
                    className="w-full min-h-[44px] pl-10 pr-9 py-2.5 bg-slate-100 focus:bg-white text-slate-900 text-sm rounded-xl border border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 focus:outline-none placeholder:text-slate-500"
                  />
                  {mobileSearchQuery && (
                    <button
                      type="button"
                      onClick={() => setMobileSearchQuery('')}
                      className="absolute right-2 min-w-[36px] min-h-[36px] flex items-center justify-center text-slate-500 hover:text-slate-700 rounded-full"
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {mobileSearchQuery.trim() !== '' && (
                  <div className="mt-2 bg-white rounded-xl border border-slate-200 shadow-lg p-2 max-h-64 overflow-y-auto space-y-1">
                    <div className="px-2 py-1 text-xs font-semibold text-slate-500 flex justify-between items-center border-b border-slate-100 pb-1.5 mb-1">
                      <span>Matching Pages ({filteredMobilePages.length})</span>
                    </div>

                    {filteredMobilePages.length > 0 ? (
                      filteredMobilePages.map((page) => (
                        <a
                          key={page.path}
                          href={page.path}
                          onMouseEnter={() => preloadRoute(page.path)}
                          onTouchStart={() => preloadRoute(page.path)}
                          onClick={(e) => {
                            e.preventDefault();
                            setIsMenuOpen(false);
                            setMobileSearchQuery('');
                            navigateToPath(page.path);
                          }}
                          className="min-h-[44px] px-2.5 py-2 rounded-lg hover:bg-blue-50 flex items-center justify-between text-xs font-semibold text-slate-800 transition-colors"
                        >
                          <span className="truncate pr-2">{page.title}</span>
                          <span className="text-[11px] font-medium text-slate-500 shrink-0">
                            {page.category}
                          </span>
                        </a>
                      ))
                    ) : (
                      <div className="py-4 text-center text-xs text-slate-500">
                        <p className="font-semibold text-slate-700">
                          No pages matching &ldquo;{mobileSearchQuery}&rdquo;
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <a
                href="/dental-services"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  navigateToPath('/dental-services');
                }}
                className="min-h-[44px] px-4 py-3 text-sm font-bold text-white bg-[#087B57] rounded-xl flex items-center justify-between"
              >
                <span>Dental Treatments &amp; Services (9 Categories)</span>
                <span className="text-xs font-semibold text-[#FFD36A]">Open</span>
              </a>

              <a
                href="/dental-faqs"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  navigateToPath('/dental-faqs');
                }}
                className="min-h-[44px] px-4 py-3 text-sm font-bold text-[#087B57] bg-[#E5F5EC] border border-[#087B57]/20 rounded-xl flex items-center justify-between"
              >
                <span>Dental FAQs &amp; Patient Knowledge Hub (130+ Q&amp;As)</span>
                <span className="text-xs font-bold text-[#B84D00]">28 Topics</span>
              </a>

              <a
                href="/dentist-chipiyana-buzurg-ghaziabad"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  navigateToPath('/dentist-chipiyana-buzurg-ghaziabad');
                }}
                className="min-h-[44px] px-4 py-3 text-sm font-bold text-[#26352F] bg-[#FFF8EC] border border-[#FF8A24]/30 rounded-xl flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF8A24] shrink-0" aria-hidden="true" /> Dentist in Chipiyana Buzurg
                </span>
                <span className="text-xs font-bold text-[#087B57]">9 AM–9 PM</span>
              </a>

              {/* Mobile Expandable All Treatments Accordion */}
              <div className="border border-[#087B57]/15 rounded-xl overflow-hidden bg-[#FFF8EC]">
                <button
                  onClick={() => setIsMobileTreatmentsOpen(!isMobileTreatmentsOpen)}
                  type="button"
                  aria-expanded={isMobileTreatmentsOpen}
                  className="w-full min-h-[44px] px-4 py-3 text-sm font-bold text-[#26352F] flex justify-between items-center bg-[#E5F5EC]"
                >
                  <span className="truncate pr-2">
                    All Dental Pages ({TOTAL_DENTAL_PAGES_COUNT})
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#087B57] shrink-0 transition-transform duration-200 ${
                      isMobileTreatmentsOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isMobileTreatmentsOpen && (
                  <div className="bg-white p-3 space-y-3 text-xs border-t border-[#087B57]/10">
                    <div>
                      <span className="font-bold text-[#B84D00] block mb-1.5 text-xs">
                        Treatments &amp; Locations ({treatmentPagesList.length})
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {treatmentPagesList.map((item) => (
                          <a
                            key={item.path}
                            href={item.path}
                            onMouseEnter={() => preloadRoute(item.path)}
                            onTouchStart={() => preloadRoute(item.path)}
                            onClick={(e) => {
                              e.preventDefault();
                              setIsMenuOpen(false);
                              navigateToPath(item.path);
                            }}
                            className="p-2.5 rounded-lg bg-[#FFF8EC] hover:bg-[#E5F5EC] font-medium text-[#26352F] border border-[#087B57]/10 truncate block"
                          >
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#087B57]/10">
                      <span className="font-bold text-[#067067] block mb-1.5 text-xs">
                        Symptoms &amp; Urgent Care ({symptomPagesList.length})
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {symptomPagesList.map((item) => (
                          <a
                            key={item.path}
                            href={item.path}
                            onMouseEnter={() => preloadRoute(item.path)}
                            onTouchStart={() => preloadRoute(item.path)}
                            onClick={(e) => {
                              e.preventDefault();
                              setIsMenuOpen(false);
                              navigateToPath(item.path);
                            }}
                            className="p-2.5 rounded-lg bg-[#FFF8EC] hover:bg-[#E5F5EC] font-medium text-[#26352F] border border-[#087B57]/10 truncate block"
                          >
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-[#087B57]/10">
                      <span className="font-bold text-[#087B57] block mb-1.5 text-xs">
                        Ghaziabad Cost Guides ({costPagesList.length})
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {costPagesList.map((item) => (
                          <a
                            key={item.path}
                            href={item.path}
                            onMouseEnter={() => preloadRoute(item.path)}
                            onTouchStart={() => preloadRoute(item.path)}
                            onClick={(e) => {
                              e.preventDefault();
                              setIsMenuOpen(false);
                              navigateToPath(item.path);
                            }}
                            className="p-2.5 rounded-lg bg-[#FFF8EC] hover:bg-[#E5F5EC] font-medium text-[#26352F] border border-[#087B57]/10 truncate block"
                          >
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {[
                { id: 'doctor-profile', label: 'Meet Our Doctor' },
                { id: 'transformations', label: 'Smile Results' },
                { id: 'services', label: 'Services Overview' },
                { id: 'why-us', label: 'Why Choose Us' },
                { id: 'testimonials', label: 'Patient Reviews' },
                { id: 'youtube-videos', label: 'Dental Videos' },
                { id: 'faq', label: 'FAQ' },
                { id: 'contact', label: 'Contact Us' },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`min-h-[44px] flex items-center px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors ${
                    activeSection === item.id
                      ? 'bg-[#E5F5EC] text-[#087B57]'
                      : 'text-[#26352F] hover:bg-[#FFF8EC] hover:text-[#087B57]'
                  }`}
                >
                  {item.label}
                </a>
              ))}

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  id="mobile-menu-whatsapp-btn"
                  href={GBP_CONFIG.WHATSAPP_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackClinicEvent('appointment_cta_click', { placement: 'mobile_menu_whatsapp' })
                  }
                  className="min-h-[44px] bg-[#C63621] hover:bg-[#A82B18] text-white font-bold text-xs rounded-full flex items-center justify-center text-center px-3"
                >
                  Book Appointment
                </a>
                <a
                  id="mobile-menu-call-btn"
                  href={GBP_CONFIG.CALL_URL}
                  onClick={() =>
                    trackClinicEvent('call_click', { placement: 'mobile_menu_call' })
                  }
                  className="min-h-[44px] bg-[#087B57] hover:bg-[#066647] text-white font-bold text-xs rounded-full flex items-center justify-center text-center px-3"
                >
                  Call {phoneNumberFormatted}
                </a>
              </div>

              <div className="flex items-center gap-6 px-4 pt-3 border-t border-[#087B57]/12">
                <a
                  href="https://www.facebook.com/profile.php?id=100083436112014"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oracle Dental Clinic Facebook"
                  className="text-[#26352F]/70 hover:text-[#087B57] transition-colors"
                >
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/oracledentalclinic0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oracle Dental Clinic Instagram"
                  className="text-[#26352F]/70 hover:text-[#C63621] transition-colors"
                >
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
                <a
                  href="https://www.youtube.com/@oracledentalclinic0"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Oracle Dental Clinic YouTube"
                  onClick={() =>
                    trackClinicEvent('youtube_channel_click', {
                      placement: 'mobile_menu_youtube_icon',
                    })
                  }
                  className="text-[#26352F]/70 hover:text-[#FF0000] transition-colors"
                >
                  <Youtube className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <main id="main-content" className="min-h-screen">
        {activeSubpage ? (
          <Suspense fallback={<SkeletonHero />}>
            {activeSubpage}
            {shouldShowAutoCTA && (
              <TreatmentAppointmentCTA
                treatmentName={ROUTE_SEO_MAP[activeRoute]?.serviceName || 'Dental Consultation'}
              />
            )}
          </Suspense>
        ) : (
          <>
            <Hero
              handleCall={handleCall}
              handleWhatsApp={handleWhatsApp}
              navigateToPath={navigateToPath}
            />

            <ExploreTreatmentsSection navigateToPath={navigateToPath} />

            {/* Dedicated Meet Our Doctor Profile Section (Deferred below the fold for instant mobile hydration) */}
            <DeferredSection
              id="doctor-profile"
              minHeight={540}
              rootMargin="320px 0px"
              forceMount={forceMountSections}
              idleDelayMs={5500}
              bgClassName="bg-[#E5F5EC]"
            >
              <Suspense fallback={<div className="min-h-[540px] bg-[#E5F5EC]" />}>
                <DoctorProfile />
              </Suspense>
            </DeferredSection>

            {/* Emergency Banner (Direct native tel: anchor) */}
            <section className="bg-gradient-to-r from-[#C93B25] to-[#B84D00] text-white py-5 px-4 relative z-20">
              <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="bg-white/20 p-2.5 rounded-xl shrink-0">
                    <Activity className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-bold text-lg sm:text-xl tracking-tight">
                      Severe Tooth Pain or Dental Emergency?
                    </h2>
                    <p className="text-[#FFF8EC] text-xs sm:text-sm mt-0.5">
                      Open Daily: 9:00 AM – 9:00 PM at Jaat Chowk, Chipiyana Buzurg, Ghaziabad. Call before visiting for prompt care.
                    </p>
                  </div>
                </div>
                <a
                  id="emergency-call-btn"
                  href={GBP_CONFIG.CALL_URL}
                  aria-label={`Call ${phoneNumberFormatted} — Emergency Dental Helpline`}
                  onClick={() =>
                    trackClinicEvent('call_click', { placement: 'homepage_emergency_banner' })
                  }
                  className="w-full sm:w-auto min-h-[48px] bg-white text-[#087B57] font-bold py-3 px-7 rounded-xl shadow-md hover:bg-[#FFF8EC] transition-colors flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                >
                  <PhoneCall className="w-5 h-5 shrink-0 text-[#C63621]" aria-hidden="true" />
                  <span>Call {phoneNumberFormatted}</span>
                </a>
              </div>
            </section>

            <DeferredSection
              id="transformations"
              minHeight={680}
              rootMargin="360px 0px"
              forceMount={forceMountSections}
              idleDelayMs={6500}
              bgClassName="bg-[#FFF8EC]"
            >
              <Suspense fallback={<SkeletonCardGrid count={6} />}>
                <BeforeAfter />
              </Suspense>
            </DeferredSection>

            <DeferredSection
              id="services"
              minHeight={720}
              rootMargin="380px 0px"
              forceMount={forceMountSections}
              idleDelayMs={6800}
              bgClassName="bg-[#FFF8EC]"
            >
              <Suspense fallback={<SkeletonCardGrid count={6} />}>
                <Services handleWhatsApp={handleWhatsApp} navigateToPath={navigateToPath} />
              </Suspense>
            </DeferredSection>

            <DeferredSection
              id="why-us"
              minHeight={560}
              rootMargin="380px 0px"
              forceMount={forceMountSections}
              idleDelayMs={7100}
              bgClassName="bg-[#E5F5EC]"
            >
              <Suspense fallback={<div className="min-h-[560px] bg-[#E5F5EC]" />}>
                <WhyUs handleWhatsApp={handleWhatsApp} />
              </Suspense>
            </DeferredSection>

            <DeferredSection
              id="testimonials"
              minHeight={540}
              rootMargin="380px 0px"
              forceMount={forceMountSections}
              idleDelayMs={7400}
              bgClassName="bg-[#FFF8EC]"
            >
              <Suspense fallback={<div className="min-h-[540px] bg-[#FFF8EC]" />}>
                <Testimonials />
              </Suspense>
            </DeferredSection>

            <DeferredSection
              id="youtube-videos"
              minHeight={460}
              rootMargin="380px 0px"
              forceMount={forceMountSections}
              idleDelayMs={7700}
              bgClassName="bg-[#FFF8EC]"
            >
              <Suspense fallback={<div className="min-h-[460px] bg-[#FFF8EC]" />}>
                <YouTubeSection />
              </Suspense>
            </DeferredSection>

            <DeferredSection
              id="faq"
              minHeight={520}
              rootMargin="380px 0px"
              forceMount={forceMountSections}
              idleDelayMs={8000}
              bgClassName="bg-[#E5F5EC]"
            >
              <Suspense fallback={<div className="min-h-[520px] bg-[#E5F5EC]" />}>
                <FAQ navigateToPath={navigateToPath} />
              </Suspense>
            </DeferredSection>

            <DeferredSection
              id="contact"
              minHeight={560}
              rootMargin="380px 0px"
              forceMount={forceMountSections}
              idleDelayMs={8300}
              bgClassName="bg-[#FFF8EC]"
            >
              <Suspense fallback={<div className="min-h-[560px] bg-[#FFF8EC]" />}>
                <Contact handleWhatsApp={handleWhatsApp} handleDirections={handleDirections} />
              </Suspense>
            </DeferredSection>
          </>
        )}
      </main>

      <DeferredSection
        minHeight={480}
        rootMargin="150px 0px"
        forceMount={forceMountSections}
        idleDelayMs={8600}
        bgClassName="bg-[#053528]"
      >
        <Suspense fallback={<div className="min-h-[480px] bg-[#053528]" />}>
          <Footer
            phoneNumber={phoneNumber}
            handleWhatsApp={handleWhatsApp}
            scrollToSection={scrollToSection}
            navigateToPath={navigateToPath}
          />
        </Suspense>
      </DeferredSection>

      {/* Global Right-Side Floating Stack (TOP: AI Assistant, MIDDLE: Call, BOTTOM: WhatsApp) */}
      <FloatingAppointmentButtons />

      {/* Back to Top Button (Positioned bottom-left with zero overlap against right-side floating buttons) */}
      {showBackToTop && (
        <InteractiveButton
          id="back-to-top-btn"
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 fab-safe-bottom w-11 h-11 bg-[#087B57] text-white rounded-full shadow-lg hover:bg-[#066647] transition-colors z-[9990] border-2 border-white flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD36A]"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" />
        </InteractiveButton>
      )}
    </div>
  );
}
