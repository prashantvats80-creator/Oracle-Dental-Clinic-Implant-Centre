import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';
import type {Plugin} from 'vite';
import {GBP_CONFIG} from './src/config/googleBusinessProfile';
import {ROUTE_SEO_MAP, getCanonicalUrl} from './src/config/seoData';

function escapeHtmlAttr(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function nonBlockingCssPlugin(): Plugin {
  return {
    name: 'oracle-non-blocking-css',
    apply: 'build',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet"([^>]*?)href="([^"]+\.css)"([^>]*)>/g,
        '<link rel="preload" as="style"$1href="$2"$3 onload="this.onload=null;this.rel=\'stylesheet\'">\n    <noscript><link rel="stylesheet"$1href="$2"$3></noscript>'
      );
    },
  };
}

/**
 * Generates static HTML entry points (dist/<slug>.html) for all 46 non-homepage canonical routes
 * so Netlify serves HTTP 200 with exact self-referencing <link rel="canonical">, unique <title>,
 * <meta name="description">, OpenGraph/Twitter cards, and route JSON-LD before JavaScript executes.
 * Using <slug>.html (not <slug>/index.html) avoids trailing-slash redirect chains on Netlify.
 */
function staticRouteHtmlPlugin(): Plugin {
  return {
    name: 'oracle-static-route-html',
    apply: 'build',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexHtmlPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexHtmlPath)) return;

      const baseHtml = fs.readFileSync(indexHtmlPath, 'utf8');

      for (const [routePath, seo] of Object.entries(ROUTE_SEO_MAP)) {
        if (routePath === '/') continue;

        const slug = routePath.replace(/^\//, '');
        const canonicalUrl = getCanonicalUrl(routePath);
        const safeTitle = escapeHtmlAttr(seo.title);
        const safeDesc = escapeHtmlAttr(seo.description);
        const safeUrl = escapeHtmlAttr(canonicalUrl);

        const graphNodes: Record<string, unknown>[] = [
          {
            '@type': 'WebSite',
            '@id': GBP_CONFIG.WEBSITE_ID,
            url: `${GBP_CONFIG.SITE_URL}/`,
            name: GBP_CONFIG.BUSINESS_NAME,
            inLanguage: 'en-IN',
            publisher: {'@id': GBP_CONFIG.ENTITY_ID},
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
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '09:00',
                closes: '21:00',
              },
            ],
            areaServed: [
              {'@type': 'Place', name: 'Chipiyana Buzurg, Ghaziabad'},
              {'@type': 'Place', name: 'Jaat Chowk, Ghaziabad'},
              {'@type': 'Place', name: 'Crossings Republik, Ghaziabad'},
              {'@type': 'Place', name: 'ABES Engineering College area, Ghaziabad'},
              {'@type': 'Place', name: 'Shahberi'},
              {'@type': 'Place', name: 'Chhapraula, Ghaziabad'},
              {'@type': 'Place', name: 'Noida Extension'},
              {'@type': 'Place', name: 'Greater Noida West'},
              {'@type': 'Place', name: 'Gaur City, Greater Noida West'},
              {'@type': 'Place', name: 'Techzone, Greater Noida West'},
              {'@type': 'Place', name: 'Bisrakh'},
              {'@type': 'Place', name: 'Lal Kuan, Ghaziabad'},
            ],
            founder: {'@id': GBP_CONFIG.PERSON_ID},
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
            worksFor: {'@id': GBP_CONFIG.ENTITY_ID},
          },
          {
            '@type': 'WebPage',
            '@id': `${canonicalUrl}#webpage`,
            url: canonicalUrl,
            name: seo.title,
            description: seo.description,
            isPartOf: {'@id': GBP_CONFIG.WEBSITE_ID},
            about: {'@id': GBP_CONFIG.ENTITY_ID},
            author: {'@id': GBP_CONFIG.PERSON_ID},
            reviewedBy: {'@id': GBP_CONFIG.PERSON_ID},
            dateModified: '2026-11-26',
            inLanguage: 'en-IN',
          },
        ];

        if (seo.serviceName) {
          graphNodes.push({
            '@type': seo.schemaType || 'Service',
            '@id': `${canonicalUrl}#service`,
            name: seo.serviceName,
            serviceType: seo.serviceType || 'Dental Treatment',
            description: seo.description,
            url: canonicalUrl,
            provider: {'@id': GBP_CONFIG.ENTITY_ID},
            areaServed: [
              {'@type': 'Place', name: 'Chipiyana Buzurg, Ghaziabad'},
              {'@type': 'Place', name: 'Crossings Republik, Ghaziabad'},
              {'@type': 'Place', name: 'ABES Engineering College area, Ghaziabad'},
              {'@type': 'Place', name: 'Shahberi'},
              {'@type': 'Place', name: 'Chhapraula, Ghaziabad'},
              {'@type': 'Place', name: 'Noida Extension'},
              {'@type': 'Place', name: 'Greater Noida West'},
              {'@type': 'Place', name: 'Gaur City, Greater Noida West'},
              {'@type': 'Place', name: 'Techzone, Greater Noida West'},
              {'@type': 'Place', name: 'Bisrakh'},
              {'@type': 'Place', name: 'Lal Kuan, Ghaziabad'},
            ],
          });
        }

        const breadcrumbItems = [
          {'@type': 'ListItem', position: 1, name: 'Home', item: `${GBP_CONFIG.SITE_URL}/`},
        ];
        if (routePath === '/dental-services') {
          breadcrumbItems.push({'@type': 'ListItem', position: 2, name: 'Dental Treatments & Services', item: canonicalUrl});
        } else if (routePath === '/privacy-policy') {
          breadcrumbItems.push({'@type': 'ListItem', position: 2, name: 'Privacy Policy', item: canonicalUrl});
        } else {
          breadcrumbItems.push({'@type': 'ListItem', position: 2, name: 'Dental Services', item: `${GBP_CONFIG.SITE_URL}/dental-services`});
          breadcrumbItems.push({'@type': 'ListItem', position: 3, name: seo.serviceName || seo.title, item: canonicalUrl});
        }
        graphNodes.push({
          '@type': 'BreadcrumbList',
          '@id': `${canonicalUrl}#breadcrumb`,
          itemListElement: breadcrumbItems,
        });

        const schemaJson = JSON.stringify({'@context': 'https://schema.org', '@graph': graphNodes});

        const displayH1 = escapeHtmlAttr(seo.title.split('|')[0].trim());
        const serviceName = escapeHtmlAttr(seo.serviceName || displayH1);

        const subpageShell = `<div id="root">
      <header style="padding:1rem;background:#087B57;color:#fff;display:flex;justify-content:space-between;align-items:center;">
        <a href="${GBP_CONFIG.SITE_URL}/" style="color:#fff;font-weight:bold;text-decoration:none;">Oracle Dental Clinic &amp; Implant Center</a>
        <a href="tel:${GBP_CONFIG.PHONE}" style="color:#fff;text-decoration:none;font-weight:bold;">Call ${GBP_CONFIG.PHONE_DISPLAY}</a>
      </header>
      <main style="max-width:860px;margin:2rem auto;padding:0 1rem;font-family:sans-serif;color:#26352F;">
        <nav aria-label="Breadcrumb" style="font-size:0.875rem;margin-bottom:1.25rem;">
          <a href="${GBP_CONFIG.SITE_URL}/" style="color:#087B57;text-decoration:none;">Home</a> &gt; <a href="${GBP_CONFIG.SITE_URL}/dental-services" style="color:#087B57;text-decoration:none;">Dental Services</a> &gt; <span>${serviceName}</span>
        </nav>
        <article>
          <h1 style="font-size:2.25rem;font-weight:800;color:#087B57;line-height:1.2;margin-bottom:1rem;">${displayH1}</h1>
          <p style="font-size:1.125rem;line-height:1.65;margin-bottom:1.5rem;color:#334155;">${safeDesc}</p>
          <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:1rem;padding:1.25rem;margin-bottom:1.5rem;">
            <h2 style="font-size:1.125rem;font-weight:700;margin-top:0;margin-bottom:0.5rem;color:#0f172a;">Attending Dentist &amp; Clinical Lead</h2>
            <p style="margin:0 0 0.25rem 0;color:#1e293b;font-weight:600;">Dr. Prashant Kumar Vats, BDS, MIDA</p>
            <p style="margin:0;color:#64748b;font-size:0.875rem;">Certified Oral Implantologist • PGD in Clinical Endodontics • PGD in Oral Surgery • 6+ Years Experience</p>
          </div>
          <div style="background:#fff8ec;border:1px solid #ffd36a;border-radius:1rem;padding:1.25rem;margin-bottom:1.5rem;">
            <h2 style="font-size:1.125rem;font-weight:700;margin-top:0;margin-bottom:0.5rem;color:#b84d00;">Clinic Location &amp; Visiting Hours</h2>
            <p style="margin:0 0 0.25rem 0;color:#26352f;">${GBP_CONFIG.ADDRESS}</p>
            <p style="margin:0 0 0.75rem 0;color:#087b57;font-weight:700;">Open Daily: ${GBP_CONFIG.HOURS} (Mon–Sun)</p>
            <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
              <a href="tel:${GBP_CONFIG.PHONE}" style="display:inline-block;padding:0.625rem 1.25rem;background:#087B57;color:#fff;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.875rem;">Call ${GBP_CONFIG.PHONE_DISPLAY}</a>
              <a href="${GBP_CONFIG.WHATSAPP_BOOKING_URL}" style="display:inline-block;padding:0.625rem 1.25rem;background:#0F7A40;color:#fff;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.875rem;">Book on WhatsApp</a>
              <a href="${GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}" target="_blank" rel="noopener noreferrer" style="display:inline-block;padding:0.625rem 1.25rem;background:#fff;color:#087B57;border:1px solid #087B57;border-radius:9999px;text-decoration:none;font-weight:700;font-size:0.875rem;">Get Directions</a>
            </div>
          </div>
        </article>
      </main>
    </div>`;

        let routeHtml = baseHtml
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${safeTitle}</title>`)
          .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${safeDesc}" />`)
          .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${safeUrl}" />`)
          .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${safeTitle}" />`)
          .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${safeDesc}" />`)
          .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${safeUrl}" />`)
          .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${safeTitle}" />`)
          .replace(/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${safeDesc}" />`)
          .replace(
            /<script type="application\/ld\+json" id="oracle-dental-schema-graph">[\s\S]*?<\/script>/,
            `<script type="application/ld+json" id="oracle-dental-schema-graph">${schemaJson}</script>`
          )
          // Replace homepage pre-hydration hero shell with clean, semantic subpage fallback content for crawlers
          .replace(/<div id="root">[\s\S]*?<\/div>\s*<script>[\s\S]*?initial-lcp-shell[\s\S]*?<\/script>/, subpageShell);

        fs.writeFileSync(path.join(distDir, `${slug}.html`), routeHtml, 'utf8');
      }
    },
  };
}

export default defineConfig(({mode}) => {
  const isProd = mode === 'production';

  return {
    base: process.env.VITE_BASE_PATH || '/',
    plugins: [react(), tailwindcss(), nonBlockingCssPlugin(), staticRouteHtmlPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
    esbuild: {
      drop: isProd ? ['console', 'debugger'] : [],
      legalComments: 'none',
    },
    build: {
      cssMinify: 'esbuild',
      cssCodeSplit: true,
      minify: 'esbuild',
      target: 'es2018',
      assetsInlineLimit: 4096,
      modulePreload: { polyfill: false },
      reportCompressedSize: true,
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('lucide-react')) {
                return 'vendor-icons';
              }
              if (/[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/.test(id)) {
                return 'vendor-react';
              }
              return 'vendor-misc';
            }
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
        },
      },
    },
  };
});
