import React, { useEffect } from "react";
import { GBP_CONFIG } from "../config/googleBusinessProfile";

const SchemaMarkup: React.FC = () => {
  useEffect(() => {
    const origin = window.location.origin;

    // Comprehensive Dentist & MedicalBusiness Schema
    const dentistSchema = {
      "@context": "https://schema.org",
      "@type": ["Dentist", "MedicalBusiness", "LocalBusiness"],
      "@id": `${origin}/#dentist`,
      "name": GBP_CONFIG.BUSINESS_NAME,
      "legalName": "Oracle Dental Clinic & Implant Center",
      "alternateName": "Oracle Dental Clinic Chipiyana",
      "url": origin,
      "logo": "https://i.postimg.cc/tCd8wLDv/Chat-GPT-Image-Apr-22-2026-08-21-13-PM.png",
      "image": [
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        "https://i.postimg.cc/tCd8wLDv/Chat-GPT-Image-Apr-22-2026-08-21-13-PM.png"
      ],
      "telephone": GBP_CONFIG.PHONE,
      "email": "contact@oracledentalclinic.com",
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
        "honorificSuffix": "BDS",
        "alumniOf": "BDS Dental College"
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
        GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL
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
        { "@type": "AdministrativeArea", "name": "ABES College Area" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dental Care & Treatment Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalTherapy",
              "name": "Dental Implants",
              "url": `${origin}/dental-implants`,
              "description": "Permanent single and multi-tooth dental implants in Ghaziabad and Chipiyana Buzurg."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Root Canal Treatment (RCT)",
              "url": `${origin}/root-canal-treatment`,
              "description": "Painless single-sitting rotary root canal therapy to save infected teeth."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Wisdom Tooth Extraction",
              "url": `${origin}/wisdom-tooth-extraction`,
              "description": "Surgical removal of impacted wisdom teeth by experienced oral surgeons."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Teeth Cleaning & Scaling",
              "url": `${origin}/teeth-cleaning`,
              "description": "Ultrasonic tartar plaque removal for healthy gums and fresh breath."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Laser Teeth Whitening",
              "url": `${origin}/teeth-whitening`,
              "description": "In-clinic professional teeth whitening to remove stubborn stains and brighten smiles."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Zirconia Tooth Caps & Crowns",
              "url": `${origin}/tooth-cap`,
              "description": "Biocompatible, metal-free zirconia crowns and tooth caps with warranty."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Composite Dental Fillings",
              "url": `${origin}/dental-fillings`,
              "description": "Tooth-colored composite resin cavity fillings matching natural enamel."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Fixed Dental Bridges",
              "url": `${origin}/dental-bridges`,
              "description": "Fixed prosthetic dental bridges to restore missing tooth gaps durably."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalTherapy",
              "name": "Complete & Partial Dentures",
              "url": `${origin}/dentures`,
              "description": "Custom flexible and acrylic full and partial dentures for comfortable eating."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalTherapy",
              "name": "Pediatric & Kids Dentistry",
              "url": `${origin}/kids-dentist`,
              "description": "Gentle, child-friendly dental care including fluoride treatments and cavity prevention."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "MedicalProcedure",
              "name": "Emergency Dental Care",
              "url": `${origin}/emergency-dentist`,
              "description": "Immediate urgent treatment for severe toothaches, trauma, and dental emergencies."
            }
          }
        ]
      }
    };

    // WebSite Structured Data
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${origin}/#website`,
      "url": origin,
      "name": "Oracle Dental Clinic & Implant Center",
      "description": "Top-rated dental clinic in Ghaziabad, Noida, and Greater Noida specializing in painless root canals, dental implants, teeth whitening, and cosmetic dentistry.",
      "publisher": {
        "@id": `${origin}/#dentist`
      },
      "inLanguage": "en-US"
    };

    // Script 1: Local Business & Dentist
    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.id = "local-business-schema";
    script1.innerHTML = JSON.stringify(dentistSchema);
    document.head.appendChild(script1);

    // Script 2: WebSite Schema
    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.id = "website-schema";
    script2.innerHTML = JSON.stringify(websiteSchema);
    document.head.appendChild(script2);

    // Cleanup on unmount
    return () => {
      const s1 = document.getElementById("local-business-schema");
      if (s1) s1.remove();
      const s2 = document.getElementById("website-schema");
      if (s2) s2.remove();
    };
  }, []);

  return null;
};

export default SchemaMarkup;
