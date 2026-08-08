import React, { useEffect } from "react";
import { GBP_CONFIG } from "../config/googleBusinessProfile";

const SchemaMarkup: React.FC = () => {
  useEffect(() => {
    // Define the Dentist structured data based on the Google Business Profile Config
    const dentistSchema = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "@id": `${window.location.origin}/#dentist`,
      "name": GBP_CONFIG.BUSINESS_NAME,
      "image": [
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
        "https://i.postimg.cc/tCd8wLDv/Chat-GPT-Image-Apr-22-2026-08-21-13-PM.png"
      ],
      "url": window.location.origin,
      "telephone": GBP_CONFIG.PHONE,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jaat Chowk, Chipiyana Buzurg, near ABES Engineering College",
        "addressLocality": "Ghaziabad",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "201009",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6280",
        "longitude": "77.4520"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "10:00",
          "closes": "14:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
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
      "areaServed": [
        {
          "@type": "AdministrativeArea",
          "name": "Chipiyana Buzurg"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Ghaziabad"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Greater Noida"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Greater Noida West"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Noida Extension"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Crossing Republik"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Dental Care & Treatment Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dental Implants",
              "description": "Premium single-tooth and multi-tooth dental implants in Ghaziabad and Chipiyana Buzurg, using top global brands."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Full Mouth Rehabilitation",
              "description": "Full mouth dental implants using All-on-4 and All-on-6 techniques for complete smile restoration."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Painless Root Canal Treatment (RCT)",
              "description": "Single-sitting microscopic RCT performed by a specialized root canal dentist in Ghaziabad."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Clear Aligners & Teeth Straightening",
              "description": "Invisible, removable clear aligners to correct teeth alignment discreetly without metal wires."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Wisdom Tooth Surgical Extraction",
              "description": "Safe, painless surgical extraction of impacted wisdom teeth by an experienced oral surgeon."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Smile Makeover & Porcelain Veneers",
              "description": "Complete cosmetic smile design correction with composite and porcelain dental veneers."
            }
          }
        ]
      }
    };

    // Create the script element
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "local-business-schema";
    script.innerHTML = JSON.stringify(dentistSchema);

    // Append to head
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const existingScript = document.getElementById("local-business-schema");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null;
};

export default SchemaMarkup;
