import React, { useEffect } from 'react';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { ROUTE_SEO_MAP, NOT_FOUND_SEO, getCanonicalUrl } from '../config/seoData';

interface SEOHeadProps {
  routePath: string;
  isNotFound?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({ routePath, isNotFound = false }) => {
  useEffect(() => {
    const seo = isNotFound
      ? NOT_FOUND_SEO
      : ROUTE_SEO_MAP[routePath] || ROUTE_SEO_MAP['/'];

    const canonicalUrl = isNotFound
      ? getCanonicalUrl('/404')
      : getCanonicalUrl(seo.path);

    const robotsDirective =
      seo.robots ||
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

    // 1. Document Title
    document.title = seo.title;

    // Helper for meta tag upsert
    const setMetaTag = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 2. Core Meta Tags
    setMetaTag('name', 'description', seo.description);
    setMetaTag('name', 'robots', robotsDirective);

    // Remove legacy stuffed meta keywords tag if present
    const legacyKeywords = document.querySelector('meta[name="keywords"]');
    if (legacyKeywords) {
      legacyKeywords.remove();
    }

    // 3. Open Graph Tags
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:locale', 'en_IN');
    setMetaTag('property', 'og:site_name', GBP_CONFIG.BUSINESS_NAME);
    setMetaTag('property', 'og:title', seo.title);
    setMetaTag('property', 'og:description', seo.description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:image', GBP_CONFIG.CLINIC_HERO_IMAGE);

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', seo.title);
    setMetaTag('name', 'twitter:description', seo.description);
    setMetaTag('name', 'twitter:image', GBP_CONFIG.CLINIC_HERO_IMAGE);

    // 5. Canonical Tag (ensure only one exists)
    const canonicals = document.querySelectorAll('link[rel="canonical"]');
    let canonicalLink = canonicals[0] as HTMLLinkElement | undefined;
    canonicals.forEach((node, idx) => {
      if (idx > 0) node.remove();
    });
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. Clean up any legacy duplicate JSON-LD scripts injected by older page versions
    const legacyScriptIds = [
      'static-jsonld-website',
      'static-jsonld-localbusiness',
      'app-jsonld-website',
      'app-jsonld-localbusiness',
      'local-business-schema',
      'website-schema',
    ];
    legacyScriptIds.forEach((id) => {
      const node = document.getElementById(id);
      if (node) node.remove();
    });

    // 7. Build Unified @graph JSON-LD with ONE consistent business entity identifier
    const graphNodes: Record<string, unknown>[] = [
      {
        '@type': 'WebSite',
        '@id': GBP_CONFIG.WEBSITE_ID,
        url: `${GBP_CONFIG.SITE_URL}/`,
        name: GBP_CONFIG.BUSINESS_NAME,
        inLanguage: 'en-IN',
        publisher: { '@id': GBP_CONFIG.ENTITY_ID },
      },
      {
        '@type': ['Dentist', 'LocalBusiness', 'MedicalBusiness', 'Organization'],
        '@id': GBP_CONFIG.ENTITY_ID,
        name: GBP_CONFIG.BUSINESS_NAME,
        url: `${GBP_CONFIG.SITE_URL}/`,
        telephone: GBP_CONFIG.PHONE,
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        image: [GBP_CONFIG.CLINIC_HERO_IMAGE, GBP_CONFIG.DOCTOR_IMAGE],
        address: {
          '@type': 'PostalAddress',
          streetAddress: GBP_CONFIG.STREET_ADDRESS,
          addressLocality: GBP_CONFIG.LOCALITY,
          addressRegion: GBP_CONFIG.REGION,
          postalCode: GBP_CONFIG.POSTAL_CODE,
          addressCountry: GBP_CONFIG.COUNTRY,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: GBP_CONFIG.GEO.latitude,
          longitude: GBP_CONFIG.GEO.longitude,
        },
        hasMap: GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
              'Sunday',
            ],
            opens: '09:00',
            closes: '21:00',
          },
        ],
        areaServed: [
          { '@type': 'Place', name: 'Chipiyana Buzurg, Ghaziabad' },
          { '@type': 'Place', name: 'Jaat Chowk, Ghaziabad' },
          { '@type': 'Place', name: 'Crossings Republik, Ghaziabad' },
          { '@type': 'Place', name: 'ABES Engineering College area, Ghaziabad' },
          { '@type': 'Place', name: 'Shahberi' },
          { '@type': 'Place', name: 'Chhapraula, Ghaziabad' },
          { '@type': 'Place', name: 'Noida Extension' },
          { '@type': 'Place', name: 'Greater Noida West' },
          { '@type': 'Place', name: 'Gaur City, Greater Noida West' },
          { '@type': 'Place', name: 'Techzone, Greater Noida West' },
          { '@type': 'Place', name: 'Bisrakh' },
          { '@type': 'Place', name: 'Lal Kuan, Ghaziabad' },
        ],
        ...(seo.path === '/'
          ? {
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Dental Treatments & Services',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dental Implants & Full Mouth Implants' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Root Canal Treatment (RCT)' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Smile Makeover, Veneers & Cosmetic Dentistry' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Zirconia Crowns & Dental Bridges' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wisdom Tooth Extraction & Oral Surgery' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dental Braces & Clear Aligners' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Teeth Cleaning, Whitening & Preventive Care' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Dental Care (Daily 9 AM–9 PM)' } },
                ],
              },
            }
          : {}),
        founder: { '@id': GBP_CONFIG.PERSON_ID },
        sameAs: GBP_CONFIG.SOCIAL_URLS,
      },
      {
        '@type': 'Person',
        '@id': GBP_CONFIG.PERSON_ID,
        name: GBP_CONFIG.DOCTOR_NAME,
        honorificPrefix: 'Dr.',
        honorificSuffix: GBP_CONFIG.DOCTOR_QUALIFICATION,
        jobTitle: GBP_CONFIG.DOCTOR_ROLE,
        description: `${GBP_CONFIG.DOCTOR_NAME} (${GBP_CONFIG.DOCTOR_CREDENTIALS_SUMMARY}) with ${GBP_CONFIG.DOCTOR_EXPERIENCE} in Chipiyana Buzurg, Ghaziabad.`,
        hasCredential: GBP_CONFIG.DOCTOR_CREDENTIALS.map((cred) => ({
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: cred === 'BDS' ? 'degree' : 'certificate',
          name: cred,
        })),
        knowsAbout: [
          'Dental Implants',
          'Clinical Endodontics',
          'Root Canal Treatment',
          'Oral Surgery',
          'Wisdom Tooth Extraction',
          'General & Restorative Dentistry',
        ],
        image: GBP_CONFIG.DOCTOR_IMAGE,
        worksFor: { '@id': GBP_CONFIG.ENTITY_ID },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: seo.title,
        description: seo.description,
        isPartOf: { '@id': GBP_CONFIG.WEBSITE_ID },
        about: { '@id': GBP_CONFIG.ENTITY_ID },
        author: { '@id': GBP_CONFIG.PERSON_ID },
        reviewedBy: { '@id': GBP_CONFIG.PERSON_ID },
        dateModified: '2026-11-26',
        inLanguage: 'en-IN',
      },
    ];

    // Add Service / MedicalProcedure & Article Schema for every valid treatment or landing page
    if (!isNotFound && seo.serviceName) {
      graphNodes.push({
        '@type': seo.schemaType || 'Service',
        '@id': `${canonicalUrl}#service`,
        name: seo.serviceName,
        serviceType: seo.serviceType || 'Dental Treatment',
        description: seo.description,
        url: canonicalUrl,
        provider: { '@id': GBP_CONFIG.ENTITY_ID },
        areaServed: [
          { '@type': 'Place', name: 'Chipiyana Buzurg, Ghaziabad' },
          { '@type': 'Place', name: 'Crossings Republik, Ghaziabad' },
          { '@type': 'Place', name: 'ABES Engineering College area, Ghaziabad' },
          { '@type': 'Place', name: 'Shahberi' },
          { '@type': 'Place', name: 'Chhapraula, Ghaziabad' },
          { '@type': 'Place', name: 'Noida Extension' },
          { '@type': 'Place', name: 'Greater Noida West' },
          { '@type': 'Place', name: 'Gaur City, Greater Noida West' },
          { '@type': 'Place', name: 'Techzone, Greater Noida West' },
          { '@type': 'Place', name: 'Bisrakh' },
          { '@type': 'Place', name: 'Lal Kuan, Ghaziabad' },
        ],
      });

      if (seo.path !== '/' && seo.path !== '/dental-services' && seo.path !== '/privacy-policy') {
        graphNodes.push({
          '@type': 'Article',
          '@id': `${canonicalUrl}#article`,
          headline: seo.title.split('|')[0].trim(),
          description: seo.description,
          url: canonicalUrl,
          mainEntityOfPage: { '@id': `${canonicalUrl}#webpage` },
          author: { '@id': GBP_CONFIG.PERSON_ID },
          reviewedBy: { '@id': GBP_CONFIG.PERSON_ID },
          publisher: { '@id': GBP_CONFIG.ENTITY_ID },
          about: { '@id': `${canonicalUrl}#service` },
          datePublished: '2026-11-26',
          dateModified: '2026-11-26',
          inLanguage: 'en-IN',
        });
      }
    }

    // Visible patient FAQs remain on-page for user utility without FAQ rich-result markup per SEO policy.

    if (!isNotFound && seo.path !== '/') {
      const breadcrumbItems = [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${GBP_CONFIG.SITE_URL}/`,
        },
      ];
      if (seo.path === '/dental-services') {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: 'Dental Treatments & Services',
          item: canonicalUrl,
        });
      } else if (seo.path === '/privacy-policy') {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: 'Privacy Policy',
          item: canonicalUrl,
        });
      } else {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: 'Dental Services',
          item: `${GBP_CONFIG.SITE_URL}/dental-services`,
        });
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 3,
          name: seo.serviceName || seo.title,
          item: canonicalUrl,
        });
      }
      graphNodes.push({
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: breadcrumbItems,
      });
    }

    const schemaPayload = {
      '@context': 'https://schema.org',
      '@graph': graphNodes,
    };

    const scriptId = 'oracle-dental-schema-graph';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schemaPayload);
  }, [routePath, isNotFound]);

  return null;
};

export default SEOHead;
