import { GBP_CONFIG } from './googleBusinessProfile';

export interface RouteSEOConfig {
  path: string;
  title: string;
  description: string;
  serviceName?: string;
  serviceType?: string;
  schemaType?: 'MedicalProcedure' | 'MedicalTherapy' | 'Service';
  robots?: string;
}

const SITE = GBP_CONFIG.SITE_URL;

export const ROUTE_SEO_MAP: Record<string, RouteSEOConfig> = {
  '/': {
    path: '/',
    title: 'Best Dentist Near Me in Ghaziabad | Oracle Dental Clinic',
    description:
      'Searching for the best dentist near me or dental clinic in Ghaziabad? Dr. Prashant Kumar Vats offers dental implants, RCT & family care in Chipiyana Buzurg.',
    serviceName: 'Comprehensive Dental Care & Implant Dentistry',
    serviceType: 'General, Implant, Cosmetic & Emergency Dentistry',
    schemaType: 'Service',
  },
  '/dental-services': {
    path: '/dental-services',
    title: 'Dental Treatments in Ghaziabad | Oracle Dental Clinic',
    description:
      'Explore 9 dental specialties in Chipiyana Buzurg, Ghaziabad & Noida Extension: implants, RCT, crowns, veneers, braces, aligners & kids dental care.',
    serviceName: 'Dental Treatments & Services',
    serviceType: 'Multi-Specialty Dental Care',
    schemaType: 'Service',
  },
  '/dental-faqs': {
    path: '/dental-faqs',
    title: 'Dental FAQs – Expert Answers to Common Dental Questions | Oracle Dental Clinic',
    description:
      '130+ expert answers on dental implants, India & Delhi NCR implant costs, RCT, zirconia crowns, veneers, aligners, wisdom teeth & recovery by Dr. Prashant Kumar Vats.',
    serviceName: 'Dental FAQs & Patient Education Knowledge Hub',
    serviceType: 'Patient Education & Dental Knowledge Hub',
    schemaType: 'Service',
  },
  '/dentist-chipiyana-buzurg-ghaziabad': {
    path: '/dentist-chipiyana-buzurg-ghaziabad',
    title: 'Best Dentist & Dental Clinic in Chipiyana Buzurg, Ghaziabad',
    description:
      'Looking for the best dentist near me in Chipiyana Buzurg, Ghaziabad? Visit Dr. Prashant Kumar Vats near Jaat Chowk, Crossings Republik & Noida Extension.',
    serviceName: 'Dentist & Dental Clinic in Chipiyana Buzurg, Ghaziabad',
    serviceType: 'Dental Clinic',
    schemaType: 'Service',
  },
  '/dental-implants': {
    path: '/dental-implants',
    title: 'Dental Implant Specialist in Ghaziabad | Oracle Dental Clinic',
    description:
      'Looking for a dental implant specialist near me in Ghaziabad? Dr. Prashant Kumar Vats provides single tooth, multiple & full mouth dental implants at ₹200 fee.',
    serviceName: 'Dental Implants',
    serviceType: 'Implantology',
    schemaType: 'MedicalProcedure',
  },
  '/full-mouth-dental-implants': {
    path: '/full-mouth-dental-implants',
    title: 'Full Mouth Dental Implants Ghaziabad | Oracle Dental',
    description:
      'All-on-4, All-on-6 & full-arch implant restorations in Chipiyana Buzurg, Ghaziabad by Dr. Prashant Kumar Vats (BDS, MIDA). Book a clinical consultation.',
    serviceName: 'Full Mouth Dental Implants',
    serviceType: 'Full Arch Implant Rehabilitation',
    schemaType: 'MedicalProcedure',
  },
  '/smile-makeover-ghaziabad': {
    path: '/smile-makeover-ghaziabad',
    title: 'Smile Makeover in Ghaziabad | Oracle Dental Clinic',
    description:
      'Personalized smile makeover & smile design in Chipiyana Buzurg, Ghaziabad using veneers, whitening, zirconia crowns & aligners. Book your consultation.',
    serviceName: 'Smile Makeover & Digital Smile Design',
    serviceType: 'Cosmetic Dentistry',
    schemaType: 'Service',
  },
  '/cosmetic-dentistry': {
    path: '/cosmetic-dentistry',
    title: 'Cosmetic Dentist in Ghaziabad | Oracle Dental Clinic',
    description:
      'Natural cosmetic dentistry in Chipiyana Buzurg, Ghaziabad: composite bonding, gap closure, dental veneers, teeth whitening & aesthetic ceramic crowns.',
    serviceName: 'Cosmetic Dentistry',
    serviceType: 'Aesthetic & Restorative Dentistry',
    schemaType: 'Service',
  },
  '/dental-veneers': {
    path: '/dental-veneers',
    title: 'Dental Veneers in Ghaziabad | Oracle Dental Clinic',
    description:
      'Custom porcelain & composite dental veneers in Chipiyana Buzurg, Ghaziabad for chipped, stained or gapped front teeth with Dr. Prashant Kumar Vats.',
    serviceName: 'Dental Veneers',
    serviceType: 'Cosmetic Dentistry',
    schemaType: 'MedicalProcedure',
  },
  '/zirconia-crowns': {
    path: '/zirconia-crowns',
    title: 'Zirconia Crowns in Ghaziabad | Oracle Dental Clinic',
    description:
      'Metal-free monolithic & multilayer zirconia crowns in Chipiyana Buzurg, Ghaziabad for root canal-treated teeth, fractures & implants. Book a visit today.',
    serviceName: 'Zirconia Dental Crowns',
    serviceType: 'Prosthodontics & Restorative Dentistry',
    schemaType: 'MedicalProcedure',
  },
  '/root-canal-treatment': {
    path: '/root-canal-treatment',
    title: 'Root Canal Treatment (RCT) Ghaziabad | Oracle Dental',
    description:
      'Modern rotary root canal treatment (RCT) & Re-RCT in Chipiyana Buzurg, Ghaziabad under local anesthesia to clear nerve infection and save natural teeth.',
    serviceName: 'Root Canal Treatment (RCT)',
    serviceType: 'Endodontics',
    schemaType: 'MedicalProcedure',
  },
  '/wisdom-tooth-extraction': {
    path: '/wisdom-tooth-extraction',
    title: 'Wisdom Tooth Extraction Ghaziabad | Oracle Dental',
    description:
      'Gentle simple & surgical wisdom tooth removal in Chipiyana Buzurg, Ghaziabad by Dr. Prashant Kumar Vats (BDS, MIDA). Open daily 9 AM–9 PM for care.',
    serviceName: 'Wisdom Tooth Extraction',
    serviceType: 'Oral Surgery',
    schemaType: 'MedicalProcedure',
  },
  '/teeth-whitening': {
    path: '/teeth-whitening',
    title: 'Teeth Whitening in Ghaziabad | Oracle Dental Clinic',
    description:
      'Clinically supervised in-office teeth whitening in Chipiyana Buzurg, Ghaziabad to safely lift stains while protecting gums and enamel. Call to book.',
    serviceName: 'Professional Teeth Whitening',
    serviceType: 'Cosmetic Dentistry',
    schemaType: 'MedicalProcedure',
  },
  '/teeth-cleaning': {
    path: '/teeth-cleaning',
    title: 'Teeth Cleaning & Scaling Ghaziabad | Oracle Dental',
    description:
      'Ultrasonic teeth cleaning, scaling & polishing in Chipiyana Buzurg, Ghaziabad to remove tartar, plaque & stains and keep gums healthy. Open 9 AM–9 PM.',
    serviceName: 'Teeth Cleaning, Scaling & Polishing',
    serviceType: 'Preventive Dentistry',
    schemaType: 'MedicalProcedure',
  },
  '/periodontal-gum-treatment-ghaziabad': {
    path: '/periodontal-gum-treatment-ghaziabad',
    title: 'Gum Disease & Periodontal Treatment in Ghaziabad',
    description:
      'Complete gum care in Chipiyana Buzurg, Ghaziabad for bleeding gums, swollen gums, gum recession & periodontitis—ultrasonic scaling & root planing.',
    serviceName: 'Gum Disease & Periodontal Treatment',
    serviceType: 'Periodontics',
    schemaType: 'MedicalTherapy',
  },
  '/emergency-dentist-ghaziabad': {
    path: '/emergency-dentist-ghaziabad',
    title: 'Emergency Dentist in Ghaziabad | Oracle Dental Clinic',
    description:
      'Urgent dental care daily 9 AM–9 PM in Chipiyana Buzurg, Ghaziabad for severe toothache, swelling, abscesses & broken teeth. Call +91 7011961515 now.',
    serviceName: 'Emergency Dental Care in Ghaziabad',
    serviceType: 'Emergency Dentistry',
    schemaType: 'Service',
  },
  '/dental-braces': {
    path: '/dental-braces',
    title: 'Dental Braces in Ghaziabad | Oracle Dental Clinic',
    description:
      'Metal, ceramic & self-ligating dental braces for teens and adults in Chipiyana Buzurg, Ghaziabad to correct crowding, gaps & bite alignment safely.',
    serviceName: 'Dental Braces (Orthodontic Treatment)',
    serviceType: 'Orthodontics',
    schemaType: 'MedicalTherapy',
  },
  '/clear-aligners': {
    path: '/clear-aligners',
    title: 'Clear Aligners in Ghaziabad | Oracle Dental Clinic',
    description:
      'Removable transparent clear aligners in Chipiyana Buzurg, Ghaziabad for discreet teeth straightening near Crossings Republik & Noida Extension.',
    serviceName: 'Clear Aligners',
    serviceType: 'Orthodontics',
    schemaType: 'MedicalTherapy',
  },
  '/dental-fillings': {
    path: '/dental-fillings',
    title: 'Dental Fillings in Ghaziabad | Oracle Dental Clinic',
    description:
      'Tooth-colored composite & GIC dental fillings in Chipiyana Buzurg, Ghaziabad to treat cavities, stop tooth decay & restore natural enamel seamlessly.',
    serviceName: 'Composite & Tooth-Colored Dental Fillings',
    serviceType: 'Restorative Dentistry',
    schemaType: 'MedicalProcedure',
  },
  '/tooth-extraction': {
    path: '/tooth-extraction',
    title: 'Tooth Extraction in Ghaziabad | Oracle Dental Clinic',
    description:
      'Gentle simple & surgical tooth extraction under local anesthesia at Oracle Dental Clinic, Jaat Chowk, Chipiyana Buzurg, Ghaziabad with recovery care.',
    serviceName: 'Tooth Extraction',
    serviceType: 'Oral Surgery',
    schemaType: 'MedicalProcedure',
  },
  '/tooth-cap': {
    path: '/tooth-cap',
    title: 'Tooth Cap & Dental Crowns Ghaziabad | Oracle Dental',
    description:
      'Custom PFM, E-Max ceramic & zirconia tooth caps in Chipiyana Buzurg, Ghaziabad to strengthen root canal-treated, fractured or worn teeth comfortably.',
    serviceName: 'Dental Crown / Tooth Cap',
    serviceType: 'Restorative Dentistry',
    schemaType: 'MedicalProcedure',
  },
  '/dental-bridges': {
    path: '/dental-bridges',
    title: 'Dental Bridges in Ghaziabad | Oracle Dental Clinic',
    description:
      'Custom ceramic & zirconia fixed dental bridges in Chipiyana Buzurg, Ghaziabad to close missing-tooth gaps and restore balanced, comfortable chewing.',
    serviceName: 'Fixed Dental Bridges',
    serviceType: 'Prosthodontics',
    schemaType: 'MedicalProcedure',
  },
  '/dentures': {
    path: '/dentures',
    title: 'Complete & Partial Dentures Ghaziabad | Oracle Dental',
    description:
      'Comfortable complete, partial, flexible & implant-supported dentures in Chipiyana Buzurg, Ghaziabad tailored for reliable chewing fit and clear speech.',
    serviceName: 'Complete & Partial Dentures',
    serviceType: 'Prosthodontics',
    schemaType: 'MedicalTherapy',
  },
  '/kids-dentist': {
    path: '/kids-dentist',
    title: 'Kids Dentist in Ghaziabad | Oracle Dental Clinic',
    description:
      'Gentle pediatric dental checkups, cavity fillings, fluoride & molar sealants at Oracle Dental Clinic near Dolphin Public School, Chipiyana Buzurg.',
    serviceName: 'Pediatric & Kids Dentistry',
    serviceType: 'Pediatric Dentistry',
    schemaType: 'Service',
  },
  '/dental-implant-after-tooth-extraction': {
    path: '/dental-implant-after-tooth-extraction',
    title: 'Dental Implant After Extraction | Oracle Dental',
    description:
      'Understand when immediate vs delayed dental implant placement after tooth extraction is clinically safe at Oracle Dental Clinic, Chipiyana Buzurg.',
    serviceName: 'Immediate & Post-Extraction Dental Implants',
    serviceType: 'Implantology',
    schemaType: 'MedicalProcedure',
  },
  '/impacted-wisdom-tooth': {
    path: '/impacted-wisdom-tooth',
    title: 'Impacted Wisdom Tooth Care Ghaziabad | Oracle Dental',
    description:
      'Diagnosis & surgical care for horizontally or partially impacted wisdom teeth, pericoronitis & jaw swelling in Chipiyana Buzurg, Ghaziabad.',
    serviceName: 'Impacted Wisdom Tooth Surgery',
    serviceType: 'Oral Surgery',
    schemaType: 'MedicalProcedure',
  },
  '/tooth-pain-treatment': {
    path: '/tooth-pain-treatment',
    title: 'Tooth Pain Treatment Ghaziabad | Oracle Dental Clinic',
    description:
      'Prompt diagnosis & relief for throbbing toothaches, cavities, nerve pain & gum infections in Chipiyana Buzurg, Ghaziabad. Open daily 9 AM–9 PM.',
    serviceName: 'Tooth Pain Diagnosis & Treatment',
    serviceType: 'Emergency & Restorative Dentistry',
    schemaType: 'MedicalTherapy',
  },
  '/tooth-sensitivity': {
    path: '/tooth-sensitivity',
    title: 'Tooth Sensitivity Treatment Ghaziabad | Oracle Dental',
    description:
      'Targeted care for hot, cold & sweet tooth sensitivity caused by enamel wear, cavities or gum recession at Oracle Dental Clinic, Chipiyana Buzurg.',
    serviceName: 'Tooth Sensitivity Treatment',
    serviceType: 'Preventive & Restorative Dentistry',
    schemaType: 'MedicalTherapy',
  },
  '/bad-breath-treatment': {
    path: '/bad-breath-treatment',
    title: 'Bad Breath Treatment Ghaziabad | Oracle Dental Clinic',
    description:
      'Treat underlying dental causes of persistent bad breath (halitosis)—tartar, gum pockets & hidden decay—at Oracle Dental Clinic, Chipiyana Buzurg.',
    serviceName: 'Halitosis & Bad Breath Treatment',
    serviceType: 'Preventive Dentistry',
    schemaType: 'MedicalTherapy',
  },
  '/loose-tooth-treatment': {
    path: '/loose-tooth-treatment',
    title: 'Loose Tooth Treatment Ghaziabad | Oracle Dental Clinic',
    description:
      'Clinical evaluation, periodontal care & splinting options for loose adult teeth caused by gum disease or trauma in Chipiyana Buzurg, Ghaziabad.',
    serviceName: 'Loose Tooth Stabilization & Periodontal Care',
    serviceType: 'Periodontics',
    schemaType: 'MedicalTherapy',
  },
  '/broken-tooth-treatment': {
    path: '/broken-tooth-treatment',
    title: 'Broken Tooth Repair Ghaziabad | Oracle Dental Clinic',
    description:
      'Prompt repair for cracked, split or broken teeth using composite bonding, zirconia crowns or root canal care in Chipiyana Buzurg, Ghaziabad.',
    serviceName: 'Broken & Fractured Tooth Restoration',
    serviceType: 'Restorative & Emergency Dentistry',
    schemaType: 'MedicalProcedure',
  },
  '/chipped-tooth': {
    path: '/chipped-tooth',
    title: 'Chipped Tooth Repair Ghaziabad | Oracle Dental Clinic',
    description:
      'Restore chipped front or back teeth smoothly with tooth-colored composite bonding, porcelain veneers or enamel polishing in Chipiyana Buzurg.',
    serviceName: 'Chipped Tooth Repair',
    serviceType: 'Cosmetic & Restorative Dentistry',
    schemaType: 'MedicalProcedure',
  },
  '/black-tooth': {
    path: '/black-tooth',
    title: 'Black Tooth Treatment Ghaziabad | Oracle Dental Clinic',
    description:
      'Accurate diagnosis & restoration for darkened, decayed or non-vital black teeth at Oracle Dental Clinic, Chipiyana Buzurg, Ghaziabad. Call to book.',
    serviceName: 'Discolored & Dark Tooth Treatment',
    serviceType: 'Restorative & Cosmetic Dentistry',
    schemaType: 'MedicalTherapy',
  },
  '/missing-teeth': {
    path: '/missing-teeth',
    title: 'Missing Teeth Replacement Ghaziabad | Oracle Dental',
    description:
      'Compare dental implants, fixed bridges & custom dentures to replace one or multiple missing teeth at Oracle Dental Clinic, Chipiyana Buzurg, Ghaziabad.',
    serviceName: 'Missing Teeth Replacement',
    serviceType: 'Implantology & Prosthodontics',
    schemaType: 'MedicalTherapy',
  },
  '/cavity-treatment': {
    path: '/cavity-treatment',
    title: 'Cavity Treatment in Ghaziabad | Oracle Dental Clinic',
    description:
      'Early tooth decay diagnosis, tooth-colored fillings & deep cavity treatment in Chipiyana Buzurg, Ghaziabad to save teeth before nerve infection starts.',
    serviceName: 'Dental Cavity Treatment',
    serviceType: 'Restorative Dentistry',
    schemaType: 'MedicalProcedure',
  },
  '/dental-abscess-treatment': {
    path: '/dental-abscess-treatment',
    title: 'Dental Abscess Treatment Ghaziabad | Oracle Dental',
    description:
      'Urgent dental abscess drainage, infection control & root canal or extraction care daily 9 AM–9 PM at Oracle Dental Clinic, Chipiyana Buzurg, Ghaziabad.',
    serviceName: 'Dental Abscess & Infection Treatment',
    serviceType: 'Emergency Dentistry',
    schemaType: 'MedicalProcedure',
  },
  '/dental-treatment-cost-ghaziabad': {
    path: '/dental-treatment-cost-ghaziabad',
    title: 'Dental Treatment Cost Ghaziabad | Oracle Dental Clinic',
    description:
      'Transparent guide to dental consultation (₹200), fillings, scaling, RCT, crowns, wisdom tooth removal & implant fees in Chipiyana Buzurg, Ghaziabad.',
    serviceName: 'Dental Consultation & Treatment Fee Guide',
    serviceType: 'Dental Care',
    schemaType: 'Service',
  },
  '/dental-implant-cost-ghaziabad': {
    path: '/dental-implant-cost-ghaziabad',
    title: 'Dental Implant Cost in Ghaziabad | Oracle Dental',
    description:
      'See what affects single & full-mouth dental implant cost in Ghaziabad: fixture type, bone grafting & zirconia crown choice. Book a ₹200 consultation.',
    serviceName: 'Dental Implant Cost & Consultation',
    serviceType: 'Implantology',
    schemaType: 'Service',
  },
  '/root-canal-cost-ghaziabad': {
    path: '/root-canal-cost-ghaziabad',
    title: 'Root Canal Cost in Ghaziabad | Oracle Dental Clinic',
    description:
      'Clear guide to front tooth, molar & Re-RCT root canal costs plus crown options at Oracle Dental Clinic in Chipiyana Buzurg, Ghaziabad. Call today.',
    serviceName: 'Root Canal Cost Consultation',
    serviceType: 'Endodontics',
    schemaType: 'Service',
  },
  '/tooth-cap-cost-ghaziabad': {
    path: '/tooth-cap-cost-ghaziabad',
    title: 'Tooth Cap & Crown Cost Ghaziabad | Oracle Dental',
    description:
      'Compare PFM, E-Max ceramic & zirconia dental crown cost factors in Chipiyana Buzurg, Ghaziabad with upfront written guidance before treatment.',
    serviceName: 'Dental Crown Cost Guide',
    serviceType: 'Restorative Dentistry',
    schemaType: 'Service',
  },
  '/tooth-filling-cost-ghaziabad': {
    path: '/tooth-filling-cost-ghaziabad',
    title: 'Tooth Filling Cost in Ghaziabad | Oracle Dental',
    description:
      'Understand tooth filling costs in Chipiyana Buzurg, Ghaziabad by cavity depth and restorative material (composite vs GIC) before your consultation.',
    serviceName: 'Dental Filling Cost Guide',
    serviceType: 'Restorative Dentistry',
    schemaType: 'Service',
  },
  '/teeth-cleaning-cost-ghaziabad': {
    path: '/teeth-cleaning-cost-ghaziabad',
    title: 'Teeth Cleaning Cost in Ghaziabad | Oracle Dental',
    description:
      'Transparent ultrasonic scaling & polishing cost factors in Chipiyana Buzurg, Ghaziabad for routine plaque removal and deep periodontal cleaning.',
    serviceName: 'Teeth Cleaning Cost Guide',
    serviceType: 'Preventive Dentistry',
    schemaType: 'Service',
  },
  '/wisdom-tooth-extraction-cost-ghaziabad': {
    path: '/wisdom-tooth-extraction-cost-ghaziabad',
    title: 'Wisdom Tooth Removal Cost Ghaziabad | Oracle Dental',
    description:
      'Clear pricing factors for simple and impacted wisdom tooth surgical extraction in Chipiyana Buzurg, Ghaziabad with Dr. Prashant Kumar Vats (BDS, MIDA).',
    serviceName: 'Wisdom Tooth Surgery Cost Guide',
    serviceType: 'Oral Surgery',
    schemaType: 'Service',
  },
  '/tooth-extraction-cost-ghaziabad': {
    path: '/tooth-extraction-cost-ghaziabad',
    title: 'Tooth Extraction Cost Ghaziabad | Oracle Dental',
    description:
      'Compare simple vs surgical tooth extraction pricing factors and tooth replacement options at Oracle Dental Clinic in Chipiyana Buzurg, Ghaziabad.',
    serviceName: 'Tooth Extraction Cost Guide',
    serviceType: 'Oral Surgery',
    schemaType: 'Service',
  },
  '/dental-bridge-cost-ghaziabad': {
    path: '/dental-bridge-cost-ghaziabad',
    title: 'Dental Bridge Cost in Ghaziabad | Oracle Dental',
    description:
      'See key pricing factors for 3-unit & multi-unit PFM or zirconia dental bridges in Chipiyana Buzurg, Ghaziabad. Schedule a ₹200 clinical evaluation.',
    serviceName: 'Dental Bridge Cost Guide',
    serviceType: 'Prosthodontics',
    schemaType: 'Service',
  },
  '/dentures-cost-ghaziabad': {
    path: '/dentures-cost-ghaziabad',
    title: 'Dentures Cost in Ghaziabad | Oracle Dental Clinic',
    description:
      'Compare acrylic, flexible, cast partial & implant-supported denture cost factors at Oracle Dental Clinic in Chipiyana Buzurg, Ghaziabad.',
    serviceName: 'Dentures Cost Guide',
    serviceType: 'Prosthodontics',
    schemaType: 'Service',
  },
  '/teeth-whitening-cost-ghaziabad': {
    path: '/teeth-whitening-cost-ghaziabad',
    title: 'Teeth Whitening Cost Ghaziabad | Oracle Dental Clinic',
    description:
      'Transparent guide to in-office teeth whitening costs, pre-whitening scaling and shade care at Oracle Dental Clinic in Chipiyana Buzurg, Ghaziabad.',
    serviceName: 'Teeth Whitening Cost Guide',
    serviceType: 'Cosmetic Dentistry',
    schemaType: 'Service',
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy | Oracle Dental Clinic, Ghaziabad',
    description:
      'Learn how Oracle Dental Clinic & Implant Center handles website analytics, WhatsApp enquiries, AI Dental Assistant chats & patient privacy safely.',
  },
};

export const NOT_FOUND_SEO: RouteSEOConfig = {
  path: '/404',
  title: 'Page Not Found | Oracle Dental Clinic, Ghaziabad',
  description:
    'The requested page could not be found. Explore dental treatments or book an appointment at Oracle Dental Clinic in Chipiyana Buzurg, Ghaziabad.',
  robots: 'noindex, follow',
};

export function getCanonicalUrl(routePath: string): string {
  if (!routePath || routePath === '/') {
    return `${SITE}/`;
  }
  const clean = routePath.startsWith('/') ? routePath : `/${routePath}`;
  return `${SITE}${clean}`;
}
