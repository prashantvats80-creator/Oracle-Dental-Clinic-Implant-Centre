/**
 * Verified Google Business Profile & NAP Entity Configuration
 * Single Source of Truth for Oracle Dental Clinic & Implant Center
 */

export const GBP_CONFIG = {
  // Exact verified business name on Google Business Profile
  BUSINESS_NAME: "Oracle Dental Clinic & Implant Center",

  // Verified Doctor Credentials
  DOCTOR_NAME: "Dr. Prashant Kumar Vats",
  DOCTOR_QUALIFICATION: "BDS, MIDA",
  DOCTOR_ROLE: "Dental Surgeon & Implantologist",
  DOCTOR_TITLE: "Dr. Prashant Kumar Vats, BDS, MIDA",

  // Canonical Production Website URL
  SITE_URL: "https://oracledentals.netlify.app",

  // Consistent Business Entity Identifiers for Schema.org JSON-LD
  ENTITY_ID: "https://oracledentals.netlify.app/#dentist",
  WEBSITE_ID: "https://oracledentals.netlify.app/#website",
  PERSON_ID: "https://oracledentals.netlify.app/#dr-prashant-kumar-vats",

  // Exact verified physical address
  STREET_ADDRESS: "Shop No. 47, KTS Complex, Jaat Chowk, Near Dolphin Public School, Chipiyana Buzurg",
  LOCALITY: "Ghaziabad",
  REGION: "Uttar Pradesh",
  POSTAL_CODE: "201009",
  COUNTRY: "IN",
  ADDRESS: "Shop No. 47, KTS Complex, Jaat Chowk, Near Dolphin Public School, Chipiyana Buzurg, Ghaziabad, Uttar Pradesh 201009, India",
  SHORT_ADDRESS: "Shop No. 47, KTS Complex, Jaat Chowk, Near Dolphin Public School, Chipiyana Buzurg, Ghaziabad",

  // Single consistent telephone & WhatsApp format
  PHONE: "+917011961515",
  PHONE_DISPLAY: "+91 7011961515",
  CALL_URL: "tel:+917011961515",
  WHATSAPP_NUMBER: "917011961515",
  WHATSAPP_DIRECT_URL: "https://wa.me/917011961515",
  WHATSAPP_BOOKING_URL: "https://wa.me/917011961515?text=Hello%20Oracle%20Dental%20Clinic%2C%20I%20want%20to%20book%20a%20dental%20appointment.",

  // Exact verified Google Business Profile Opening Hours
  HOURS: "Open Daily: 9:00 AM – 9:00 PM",
  HOURS_SHORT: "Open Daily: 9:00 AM – 9:00 PM",

  // Official Google Business Profile & Directions Links
  GOOGLE_BUSINESS_PROFILE_URL: "https://share.google/3jkiHdvq2N8aYDGm0",
  GOOGLE_MAPS_DIRECTIONS_URL: "https://share.google/3jkiHdvq2N8aYDGm0",
  GOOGLE_PLACE_ID: "ChIJT4YJclbyDDkRuHby7f_S84k",
  GOOGLE_WRITE_REVIEW_URL: "https://search.google.com/local/writereview?placeid=ChIJT4YJclbyDDkRuHby7f_S84k",

  // Clinic Coordinates (Chipiyana Buzurg, Jaat Chowk, Ghaziabad)
  GEO: {
    latitude: 28.6280,
    longitude: 77.4520,
  },

  // Primary & Geographically Relevant 5 km Secondary Areas
  PRIMARY_AREA: "Chipiyana Buzurg, Ghaziabad",
  SECONDARY_AREAS: [
    "Jaat Chowk",
    "Crossings Republik",
    "ABES Engineering College area",
    "Shahberi",
    "Noida Extension",
    "Greater Noida West",
    "Lal Kuan",
  ],

  // Publicly observable Google Business Profile rating metadata (kept conservative & verifiable on GBP)
  FALLBACK_RATING: 4.9,
  FALLBACK_REVIEW_COUNT: 493,

  // Official Clinic Images (Self-hosted compressed WebP/JPEG versions of original photographs)
  DOCTOR_IMAGE: "https://oracledentals.netlify.app/assets/images/dr-prashant-vats.jpg",
  CLINIC_HERO_IMAGE: "https://oracledentals.netlify.app/assets/images/hero-patient.jpg",

  // Social Profiles
  SOCIAL_URLS: [
    "https://www.facebook.com/profile.php?id=100083436112014",
    "https://www.instagram.com/oracledentalclinic0/",
    "https://www.youtube.com/@oracledentalclinic0",
    "https://share.google/3jkiHdvq2N8aYDGm0",
  ],
};

/**
 * Generates a treatment-specific WhatsApp URL with an accurate prefilled message.
 * Example: https://wa.me/917011961515?text=Hello%2C%20I%20would%20like%20to%20know%20about%20dental%20implants.
 */
export function getTreatmentWhatsAppUrl(treatmentName?: string): string {
  const clean = treatmentName?.trim();
  if (!clean || /^dental consultation$/i.test(clean)) {
    return GBP_CONFIG.WHATSAPP_BOOKING_URL;
  }
  const message = `Hello, I would like to know about ${clean.toLowerCase()}.`;
  return `https://wa.me/${GBP_CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

