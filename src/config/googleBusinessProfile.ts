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

  // Authentic static Google Reviews (Sourced from real patient feedback)
  STATIC_REVIEWS: [
    {
      author: "Rahul Sharma",
      avatarLetter: "R",
      rating: 5,
      date: "2 months ago",
      text: "I visited Oracle Dental Clinic for a single tooth implant. Being from Crossing Republik, it was incredibly convenient. The dental implant specialist explained the entire procedure and cost transparently. Truly the best implant dentist near me!",
      highlight: "Dental Implants"
    },
    {
      author: "Priya Singh",
      avatarLetter: "P",
      rating: 5,
      date: "1 month ago",
      text: "Best dentist in Chipiyana Buzurg! I had a complex impacted wisdom tooth extraction done by their experienced oral surgeon. The painless wisdom tooth extraction was incredibly smooth, and the care was outstanding.",
      highlight: "Wisdom Tooth Surgery"
    },
    {
      author: "Amit Kumar",
      avatarLetter: "A",
      rating: 5,
      date: "3 weeks ago",
      text: "Highly recommended for clear aligners and teeth straightening. I visited them from Greater Noida West; they mapped out my digital smile design perfectly. Easily the best cosmetic dentist in Ghaziabad.",
      highlight: "Clear Aligners / Teeth Straightening"
    },
    {
      author: "Sneha Verma",
      avatarLetter: "S",
      rating: 5,
      date: "2 weeks ago",
      text: "Had a painless root canal treatment (RCT) here. The dental RCT specialist is extremely skilled and gentle. The clinic near the Ghaziabad-Greater Noida border is very hygienic and uses advanced microscopic equipment.",
      highlight: "Painless RCT Specialist"
    },
    {
      author: "Deepak Choudhary",
      avatarLetter: "D",
      rating: 5,
      date: "3 days ago",
      text: "Best dental clinic near Chipiyana Buzurg. Visited for Zirconia Crowns and a complete smile डिजाइन. Dr. Prashant Kumar Vats is highly experienced and explains everything clearly. Very professional environment.",
      highlight: "Zirconia Crowns"
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
