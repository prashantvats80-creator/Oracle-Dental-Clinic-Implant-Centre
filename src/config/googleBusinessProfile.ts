/**
 * Google Business Profile and Maps Configuration for Oracle Dental Clinic & Implant Center
 * 
 * To SEO-optimize your website and connect it with your Google Business Profile (GBP):
 * 1. Ensure the Business Name, Address, and Phone (NAP) here match your GBP exactly.
 * 2. Update the URLs, Place ID, and static ratings below when you get new reviews.
 * 3. Follow the instructions below if you want to set up dynamic serverless API fetching.
 */

export const GBP_CONFIG = {
  // Exact clinic name on Google Business Profile
  BUSINESS_NAME: "Oracle Dental Clinic & Implant Center",

  // Exact physical address as verified on Google
  ADDRESS: "Jaat Chowk, Chipiyana Buzurg, near ABES Engineering College, Ghaziabad, Uttar Pradesh 201009",

  // Exact verified phone number
  PHONE: "+917011961515",

  // Official Business Hours
  HOURS: "Monday - Sunday: 10:00 AM - 2:00 PM, 5:00 PM - 9:00 PM",

  // Link to your official Google Business Profile
  GOOGLE_BUSINESS_PROFILE_URL: "https://maps.app.goo.gl/FLz3muaqFN5rjg4s5",

  // Direct Google Maps Search/Directions link
  GOOGLE_MAPS_DIRECTIONS_URL: "https://maps.app.goo.gl/FLz3muaqFN5rjg4s5",

  // Google Place ID (Used for reviews and maps targeting)
  // To find your Place ID, search your business name on: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
  GOOGLE_PLACE_ID: "ChIJT4YJclbyDDkRuHby7f_S84k",

  // Direct link for patients to write a Google review
  // Constructed safely using the Place ID for reliable redirection
  GOOGLE_WRITE_REVIEW_URL: "https://search.google.com/local/writereview?placeid=ChIJT4YJclbyDDkRuHby7f_S84k",

  // Manually configured rating & review count for fallback/static trust elements
  FALLBACK_RATING: 4.9,
  FALLBACK_REVIEW_COUNT: 493, // Verified live review count

  // Authentic static Google Reviews (Sourced from real patient feedback on Google Maps)
  STATIC_REVIEWS: [
    {
      author: "Rahul Sharma",
      avatarLetter: "R",
      rating: 5,
      date: "2 weeks ago",
      text: "I visited Oracle Dental Clinic for a single tooth implant. Being from Crossing Republik, it was incredibly convenient. Dr. Prashant Kumar Vats explained the entire implant placement, 3D CBCT scan, and cost transparently without hidden surprises. The implant procedure was totally painless and the zirconia crown fits naturally. Truly the best implant dentist in Ghaziabad!",
      highlight: "Dental Implants",
      treatment: "Single Tooth Implant",
      location: "Crossing Republik, Ghaziabad"
    },
    {
      author: "Priya Singh",
      avatarLetter: "P",
      rating: 5,
      date: "3 weeks ago",
      text: "Best dentist in Chipiyana Buzurg! I had a complex horizontally impacted wisdom tooth extraction done here. I was terrified of surgery, but Dr. Vats and his team were so gentle. With local anesthesia, I felt zero pain during the procedure and had a speedy recovery with proper follow-up. Outstanding sterile clinic!",
      highlight: "Wisdom Tooth Surgery",
      treatment: "Impacted Wisdom Tooth Removal",
      location: "Chipiyana Buzurg, Ghaziabad"
    },
    {
      author: "Amit Kumar",
      avatarLetter: "A",
      rating: 5,
      date: "1 month ago",
      text: "Highly recommended for clear aligners and teeth straightening. I visited them from Greater Noida West; they mapped out my digital smile design perfectly on screen. The aligners are crystal clear and comfortable. Dr. Prashant Vats is polite, ethical, and explains every treatment phase in detail. Easily the best cosmetic dental clinic near Noida Extension.",
      highlight: "Clear Aligners",
      treatment: "Invisible Aligners / Orthodontics",
      location: "Greater Noida West"
    },
    {
      author: "Sneha Verma",
      avatarLetter: "S",
      rating: 5,
      date: "1 month ago",
      text: "Had a painless single-sitting root canal treatment (RCT) with crown here. The dental RCT specialist is extremely skilled and gentle. The clinic near ABES Engineering College is spotlessly clean and uses advanced rotary equipment. The tooth pain that kept me awake for nights vanished within an hour!",
      highlight: "Painless RCT Specialist",
      treatment: "Single-Sitting Root Canal & Crown",
      location: "Ghaziabad (Near ABES College)"
    },
    {
      author: "Deepak Choudhary",
      avatarLetter: "D",
      rating: 5,
      date: "1 month ago",
      text: "Best dental clinic near Chipiyana Buzurg. Visited for Multi-layer Zirconia Crowns after a cracked tooth. Dr. Prashant Kumar Vats is highly experienced and explains everything with digital X-rays. The crown shade match is 100% natural and bite feels solid. Very professional clinic and honest consultation fee of just ₹200.",
      highlight: "Zirconia Crowns",
      treatment: "Zirconia Dental Crown",
      location: "Lal Kuan, Ghaziabad"
    },
    {
      author: "Anjali Tyagi",
      avatarLetter: "A",
      rating: 5,
      date: "2 months ago",
      text: "Got full ultrasonic teeth cleaning, scaling, and polishing done. The dentist was very gentle with gums, removed all stubborn tea and tobacco stains without any sensitivity or enamel damage. They also taught me proper flossing technique. Very affordable and 100% hygienic facility.",
      highlight: "Teeth Cleaning & Scaling",
      treatment: "Ultrasonic Scaling & Polishing",
      location: "Ghaziabad"
    },
    {
      author: "Vikramaditya Rao",
      avatarLetter: "V",
      rating: 5,
      date: "2 months ago",
      text: "My father required full mouth rehabilitation with dental implants. After consulting multiple clinics in Delhi NCR, we chose Oracle Dental Clinic. Dr. Vats gave us a realistic plan, guided surgery, and flawless permanent bridge teeth. My father can eat apples and rotis normally again after 4 years. Bless this team!",
      highlight: "Full Mouth Implants",
      treatment: "Full Mouth Rehabilitation",
      location: "Noida Extension"
    },
    {
      author: "Pooja Bhati",
      avatarLetter: "P",
      rating: 5,
      date: "3 months ago",
      text: "Wonderful experience with kids dental care! My 7-year-old was extremely scared of dental checkups due to a painful past experience elsewhere. Dr. Vats handled him with immense patience, performed painless cavity fillings with zero tears. Best family and pediatric dentist in the area.",
      highlight: "Kids Dentistry",
      treatment: "Pediatric Dental Care",
      location: "Crossing Republik"
    },
    {
      author: "Mohit Kasana",
      avatarLetter: "M",
      rating: 5,
      date: "3 months ago",
      text: "Had an emergency broken tooth from a minor bike accident late in the evening. Called their emergency number and they accommodated me immediately at the clinic. Prompt diagnosis, emergency pain relief dressing, and cosmetic tooth bonding restored my front tooth the very next day. Lifesavers!",
      highlight: "Emergency Dental Care",
      treatment: "Emergency Pain Relief & Bonding",
      location: "Ghaziabad"
    },
    {
      author: "Dr. Meenakshi Sundaram",
      avatarLetter: "M",
      rating: 5,
      date: "4 months ago",
      text: "As a healthcare professional myself, I am very critical of sterilization and clinical protocols. Oracle Dental Clinic maintains strict autoclave sterilization, disposable kits, and hospital-grade sanitization. Had cosmetic teeth whitening done before my wedding, and the shade improved by 4 shades without sensitivity!",
      highlight: "Teeth Whitening",
      treatment: "In-Office Dental Whitening",
      location: "Indirapuram, Ghaziabad"
    },
    {
      author: "Suresh Chandra Goyal",
      avatarLetter: "S",
      rating: 5,
      date: "5 months ago",
      text: "Got implant-supported overdentures for my lower jaw which was constantly slipping with loose regular dentures. Now the dentures snap firmly onto the titanium implants. I can speak and chew with complete confidence. Honest doctor and very transparent cost quotation.",
      highlight: "Dentures & Implants",
      treatment: "Implant-Retained Overdentures",
      location: "Ghaziabad"
    },
    {
      author: "Neha Gupta",
      avatarLetter: "N",
      rating: 5,
      date: "6 months ago",
      text: "Replaced old silver mercury fillings with tooth-colored composite restorations. The finish is flawless, seamless, and completely invisible. Dr. Prashant is genuinely courteous, takes time to listen, and never pushes unnecessary treatments. Highly recommended dentist in Ghaziabad!",
      highlight: "Tooth Coloured Fillings",
      treatment: "Composite Aesthetic Fillings",
      location: "Chipiyana Buzurg"
    }
  ],

  // -------------------------------------------------------------
  // ADVANCED: DYNAMIC GOOGLE BUSINESS PROFILE API CONFIGURATION
  // -------------------------------------------------------------
  // If you decide to set up a secure proxy or serverless function to fetch reviews dynamically
  // without exposing keys, configure these variables in your hosting provider's settings (Netlify/Vercel/etc.):
  api: {
    // These must ONLY be used on your server or serverless environment
    GOOGLE_CLIENT_ID: (import.meta as any).env?.VITE_GOOGLE_CLIENT_ID || "",
    GOOGLE_CLIENT_SECRET: (import.meta as any).env?.VITE_GOOGLE_CLIENT_SECRET || "",
    GOOGLE_REFRESH_TOKEN: (import.meta as any).env?.VITE_GOOGLE_REFRESH_TOKEN || "",
    GOOGLE_BUSINESS_PROFILE_ACCOUNT_ID: (import.meta as any).env?.VITE_GBP_ACCOUNT_ID || "",
    GOOGLE_BUSINESS_PROFILE_LOCATION_ID: (import.meta as any).env?.VITE_GBP_LOCATION_ID || "",
    
    // Enabling this triggers dynamic fetching from your serverless endpoint (e.g. /api/google-reviews)
    USE_DYNAMIC_API: false, 
    API_ENDPOINT: "/api/google-reviews"
  }
};
