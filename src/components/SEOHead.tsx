import React, { useEffect } from "react";
import SchemaMarkup from "./SchemaMarkup";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogUrl?: string;
}

const SEOHead: React.FC<SEOProps> = ({
  title = "Oracle Dental Clinic & Implant Center | Best Dentist in Ghaziabad, Noida, Greater Noida",
  description = "Experience premium smile makeovers, natural-looking veneers, and long-lasting dental implants in Ghaziabad. Offering advanced technology, microscopic root canals, and single sitting wisdom tooth removals.",
  keywords = [
    "Dental Implants Ghaziabad",
    "Best Dental Implants Ghaziabad",
    "Dental Implant Specialist Ghaziabad",
    "Dental Implant Clinic Ghaziabad",
    "Best Implant Dentist Ghaziabad",
    "Full Mouth Dental Implants Ghaziabad",
    "Single Tooth Implant Ghaziabad",
    "All-on-4 Dental Implants Ghaziabad",
    "All-on-6 Dental Implants Ghaziabad",
    "Immediate Dental Implants Ghaziabad",
    "Dental Implants Near Me",
    "Dental Implants Greater Noida",
    "Best Dental Implants Greater Noida",
    "Dental Implant Specialist Greater Noida",
    "Dental Implants Noida",
    "Best Dental Implants Noida",
    "Full Mouth Rehabilitation Ghaziabad",
    "Missing Teeth Replacement Ghaziabad",
    "Permanent Teeth Replacement Ghaziabad",
    "Smile Makeover Ghaziabad",
    "Best Smile Makeover Dentist Ghaziabad",
    "Smile Design Ghaziabad",
    "Digital Smile Design Ghaziabad",
    "Cosmetic Dentist Ghaziabad",
    "Best Cosmetic Dentist Ghaziabad",
    "Smile Transformation Ghaziabad",
    "Hollywood Smile Ghaziabad",
    "Dental Veneers Ghaziabad",
    "Porcelain Veneers Ghaziabad",
    "Composite Veneers Ghaziabad",
    "Teeth Whitening Ghaziabad",
    "Smile Correction Ghaziabad",
    "Aesthetic Dentistry Ghaziabad",
    "Smile Makeover Greater Noida",
    "Best Cosmetic Dentist Greater Noida",
    "Smile Design Greater Noida",
    "Smile Makeover Noida",
    "Cosmetic Dentist Noida",
    "Zirconia Crowns Ghaziabad",
    "Best Zirconia Crown Ghaziabad",
    "Dental Crown Specialist Ghaziabad",
    "Tooth Cap Ghaziabad",
    "Ceramic Crowns Ghaziabad",
    "Metal Free Crowns Ghaziabad",
    "Zirconia Crowns Greater Noida",
    "Zirconia Crowns Noida",
    "Best Dental Crowns Ghaziabad",
    "Best Dentist Ghaziabad",
    "Top Dentist Ghaziabad",
    "Experienced Dentist Ghaziabad",
    "Family Dentist Ghaziabad",
    "Dental Clinic Ghaziabad",
    "Best Dental Clinic Ghaziabad",
    "Dentist Near Me",
    "Top Rated Dentist Ghaziabad",
    "Best Dentist Greater Noida",
    "Best Dental Clinic Greater Noida",
    "Best Dentist Noida",
    "Root Canal Treatment Ghaziabad",
    "RCT Specialist Ghaziabad",
    "Best Root Canal Dentist Ghaziabad",
    "Microscopic Root Canal Ghaziabad",
    "Painless Root Canal Ghaziabad",
    "Root Canal Specialist Greater Noida",
    "Root Canal Treatment Noida",
    "Wisdom Tooth Removal Ghaziabad",
    "Wisdom Tooth Extraction Ghaziabad",
    "Oral Surgeon Ghaziabad",
    "Best Oral Surgeon Ghaziabad",
    "Impacted Wisdom Tooth Ghaziabad",
    "Surgical Tooth Extraction Ghaziabad",
    "Wisdom Tooth Removal Greater Noida",
    "Oral Surgeon Greater Noida",
    "Wisdom Tooth Removal Noida",
    "Best Cosmetic Dentist Near Me",
    "Best Implant Dentist Near Me",
    "Best Smile Makeover Dentist Near Me",
    "Best Dental Implant Clinic Near Me",
    "Best Veneers Dentist Near Me",
    "Best Zirconia Crown Dentist Near Me",
    "Best Oral Surgeon Near Me",
    "Best Root Canal Specialist Near Me",
    "Best Dentist for Smile Makeover",
    "Best Dentist for Dental Implants"
  ],
  ogImage = "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
  ogUrl = "https://oracle-dental.com"
}) => {
  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // Helper to set or create meta tags
    const setMetaTag = (attributeName: string, attributeValue: string, contentValue: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", contentValue);
    };

    // 2. Set description
    setMetaTag("name", "description", description);

    // 3. Set keywords
    setMetaTag("name", "keywords", keywords.join(", "));

    // 4. Set OpenGraph tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:url", ogUrl);
    setMetaTag("property", "og:type", "website");

    // 5. Set Twitter tags
    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    // 6. Set Canonical link tag
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", ogUrl);

  }, [title, description, keywords, ogImage, ogUrl]);

  return <SchemaMarkup />;
};

export default SEOHead;
