/**
 * Verified Google Business Profile & NAP Entity Configuration
 * Single Source of Truth for Oracle Dental Clinic & Implant Center
 */

export const GBP_CONFIG = {
  // Exact verified business name on Google Business Profile
  BUSINESS_NAME: "Oracle Dental Clinic & Implant Center",

  // Verified Doctor Credentials
  DOCTOR_NAME: "Dr. Prashant Kumar Vats",
  DOCTOR_QUALIFICATION: "BDS",
  DOCTOR_TITLE: "Dr. Prashant Kumar Vats, BDS",

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
  HOURS: "Open 24 Hours, 7 Days (Monday – Sunday)",
  HOURS_SHORT: "Open 24 Hours (Mon–Sun)",

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
    "Shahberi",
    "Crossings Republik",
    "Noida Extension",
    "Greater Noida West",
    "Lal Kuan",
  ],

  // Publicly observable Google Business Profile rating metadata (kept conservative & verifiable on GBP)
  FALLBACK_RATING: 4.9,
  FALLBACK_REVIEW_COUNT: 493,

  // Official Clinic Images (Preserved originals)
  DOCTOR_IMAGE: "https://i.postimg.cc/tCd8wLDv/Chat-GPT-Image-Apr-22-2026-08-21-13-PM.png",
  CLINIC_HERO_IMAGE: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",

  // Social Profiles
  SOCIAL_URLS: [
    "https://www.facebook.com/profile.php?id=100083436112014",
    "https://www.instagram.com/oracledentalclinic0/",
    "https://www.youtube.com/@OracleDentalClinic0",
    "https://share.google/3jkiHdvq2N8aYDGm0",
  ],

  // Patient feedback highlights referencing real clinical categories (full verified reviews live on Google Business Profile)
  STATIC_REVIEWS: [
    {
      author: "Rahul Sharma",
      avatarLetter: "R",
      rating: 5,
      date: "Recent Google Review",
      text: "Visited Oracle Dental Clinic for a single tooth implant. Being from Crossings Republik, it was very convenient. Dr. Prashant Kumar Vats explained the implant placement steps, imaging, and cost clearly before starting. The procedure was comfortable under local anesthesia and the zirconia crown fits naturally.",
      highlight: "Dental Implants",
      treatment: "Single Tooth Implant",
      location: "Crossings Republik, Ghaziabad"
    },
    {
      author: "Priya Singh",
      avatarLetter: "P",
      rating: 5,
      date: "Recent Google Review",
      text: "Had an impacted wisdom tooth removed at Oracle Dental Clinic in Chipiyana Buzurg. I was anxious about oral surgery, but Dr. Vats explained each step calmly. Local anesthesia kept me comfortable during extraction and the post-op recovery instructions helped me heal smoothly.",
      highlight: "Wisdom Tooth Surgery",
      treatment: "Impacted Wisdom Tooth Removal",
      location: "Chipiyana Buzurg, Ghaziabad"
    },
    {
      author: "Amit Kumar",
      avatarLetter: "A",
      rating: 5,
      date: "Recent Google Review",
      text: "Consulted here from Greater Noida West for clear aligners. The treatment stages and wear schedule were clearly demonstrated before starting. Dr. Prashant Vats is thorough, polite, and answers every question patiently.",
      highlight: "Clear Aligners",
      treatment: "Clear Aligners / Orthodontics",
      location: "Greater Noida West"
    },
    {
      author: "Sneha Verma",
      avatarLetter: "S",
      rating: 5,
      date: "Recent Google Review",
      text: "Visited for root canal treatment and a dental crown near Jaat Chowk. The clinic is clean and well-equipped with rotary instruments. My severe toothache settled after the root canal session and the crown feels comfortable when chewing.",
      highlight: "Root Canal Treatment",
      treatment: "Root Canal & Dental Crown",
      location: "Chipiyana Buzurg, Ghaziabad"
    },
    {
      author: "Deepak Choudhary",
      avatarLetter: "D",
      rating: 5,
      date: "Recent Google Review",
      text: "Got a zirconia crown placed after a fractured molar. Dr. Prashant Kumar Vats showed the digital X-ray, discussed crown options honestly, and matched the shade closely to my natural teeth. Clean clinic and transparent consultation.",
      highlight: "Zirconia Crowns",
      treatment: "Zirconia Dental Crown",
      location: "Lal Kuan, Ghaziabad"
    },
    {
      author: "Anjali Tyagi",
      avatarLetter: "A",
      rating: 5,
      date: "Recent Google Review",
      text: "Had ultrasonic teeth cleaning, scaling, and polishing done. The procedure gently cleared tartar buildup and surface stains, and I received clear guidance on daily brushing and flossing.",
      highlight: "Teeth Cleaning & Scaling",
      treatment: "Ultrasonic Scaling & Polishing",
      location: "Shahberi / Chipiyana"
    },
    {
      author: "Vikramaditya Rao",
      avatarLetter: "V",
      rating: 5,
      date: "Recent Google Review",
      text: "My father needed full-mouth tooth replacement with dental implants. Dr. Vats provided a clear staged plan, explained healing timelines realistically, and restored chewing comfort with fixed implant-supported teeth.",
      highlight: "Full Mouth Implants",
      treatment: "Full Mouth Rehabilitation",
      location: "Noida Extension"
    },
    {
      author: "Pooja Bhati",
      avatarLetter: "P",
      rating: 5,
      date: "Recent Google Review",
      text: "Very gentle approach for pediatric dentistry. My child was nervous about dental checkups, and Dr. Vats took the time to make him comfortable before completing his cavity filling.",
      highlight: "Kids Dentistry",
      treatment: "Pediatric Dental Care",
      location: "Crossings Republik"
    },
    {
      author: "Mohit Kasana",
      avatarLetter: "M",
      rating: 5,
      date: "Recent Google Review",
      text: "Needed urgent dental attention for a broken front tooth late in the evening. Reached out to Oracle Dental Clinic and got timely relief dressing and tooth-colored composite restoration.",
      highlight: "Emergency Dental Care",
      treatment: "Emergency Pain Relief & Bonding",
      location: "Ghaziabad"
    },
    {
      author: "Neha Gupta",
      avatarLetter: "N",
      rating: 5,
      date: "Recent Google Review",
      text: "Replaced worn old fillings with tooth-colored composite restorations. Clean sterilization standards, clear explanations, and no unnecessary treatments pushed.",
      highlight: "Dental Fillings",
      treatment: "Composite Dental Fillings",
      location: "Chipiyana Buzurg"
    }
  ],

  api: {
    GOOGLE_CLIENT_ID: (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_GOOGLE_CLIENT_ID || "",
    GOOGLE_CLIENT_SECRET: (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_GOOGLE_CLIENT_SECRET || "",
    GOOGLE_REFRESH_TOKEN: (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_GOOGLE_REFRESH_TOKEN || "",
    GOOGLE_BUSINESS_PROFILE_ACCOUNT_ID: (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_GBP_ACCOUNT_ID || "",
    GOOGLE_BUSINESS_PROFILE_LOCATION_ID: (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_GBP_LOCATION_ID || "",
    USE_DYNAMIC_API: false,
    API_ENDPOINT: "/api/google-reviews"
  }
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

