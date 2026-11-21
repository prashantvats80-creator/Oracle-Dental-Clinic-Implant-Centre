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
        '@type': ['Dentist', 'LocalBusiness', 'MedicalBusiness'],
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
            opens: '00:00',
            closes: '23:59',
          },
        ],
        areaServed: [
          { '@type': 'Place', name: 'Chipiyana Buzurg, Ghaziabad' },
          { '@type': 'Place', name: 'Jaat Chowk, Ghaziabad' },
          { '@type': 'Place', name: 'Shahberi' },
          { '@type': 'Place', name: 'Crossings Republik, Ghaziabad' },
          { '@type': 'Place', name: 'Noida Extension' },
          { '@type': 'Place', name: 'Greater Noida West' },
          { '@type': 'Place', name: 'Lal Kuan, Ghaziabad' },
        ],
        founder: { '@id': GBP_CONFIG.PERSON_ID },
        sameAs: GBP_CONFIG.SOCIAL_URLS,
      },
      {
        '@type': 'Person',
        '@id': GBP_CONFIG.PERSON_ID,
        name: GBP_CONFIG.DOCTOR_NAME,
        honorificPrefix: 'Dr.',
        honorificSuffix: GBP_CONFIG.DOCTOR_QUALIFICATION,
        jobTitle: 'Dental Surgeon',
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
        inLanguage: 'en-IN',
      },
    ];

    // Add Service / MedicalProcedure & BreadcrumbList Schema for every valid treatment or landing page
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
          { '@type': 'Place', name: 'Noida Extension' },
          { '@type': 'Place', name: 'Greater Noida' },
        ],
      });
    }

    if (!isNotFound && seo.path !== '/') {
      const breadcrumbItems = [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${GBP_CONFIG.SITE_URL}/`,
        },
      ];
      if (seo.path !== '/dental-services') {
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
      } else {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 2,
          name: 'Dental Treatments & Services',
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
