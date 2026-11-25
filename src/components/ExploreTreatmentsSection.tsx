import React from 'react';
import { preloadRoute } from '../utils/routePreloader';

interface ExploreTreatmentsSectionProps {
  navigateToPath?: (path: string) => void;
}

const FEATURED_TREATMENTS = [
  {
    path: '/dentist-chipiyana-buzurg-ghaziabad',
    label: 'Dentist in Chipiyana Buzurg, Ghaziabad',
    summary: 'Local clinic near Jaat Chowk & Dolphin Public School, open daily 9 AM–9 PM.',
    category: 'Local Clinic',
  },
  {
    path: '/dental-services',
    label: 'All Dental Treatments & Services',
    summary: 'Complete 9-category directory of restorative, surgical, and preventive care.',
    category: 'Services Hub',
  },
  {
    path: '/dental-implants',
    label: 'Dental Implants in Ghaziabad',
    summary: 'Permanent titanium tooth replacement for single or multiple missing teeth.',
    category: 'Implantology',
  },
  {
    path: '/dental-implant-cost-ghaziabad',
    label: 'Dental Implant Cost in Ghaziabad',
    summary: 'Transparent pricing factors for single implants, abutments, and crowns.',
    category: 'Cost Guide',
  },
  {
    path: '/root-canal-treatment',
    label: 'Painless Root Canal Treatment (RCT)',
    summary: 'Modern rotary endodontics to relieve toothache and save infected teeth.',
    category: 'Endodontics',
  },
  {
    path: '/wisdom-tooth-extraction',
    label: 'Wisdom Tooth Extraction',
    summary: 'Safe simple and surgical removal of impacted or painful third molars.',
    category: 'Oral Surgery',
  },
  {
    path: '/teeth-cleaning',
    label: 'Teeth Cleaning & Ultrasonic Scaling',
    summary: 'Gentle plaque, tartar, and stain removal for healthy gums and fresh breath.',
    category: 'Preventive Care',
  },
  {
    path: '/teeth-whitening',
    label: 'Clinical Teeth Whitening',
    summary: 'Supervised in-office whitening to safely brighten stained natural enamel.',
    category: 'Cosmetic Care',
  },
  {
    path: '/zirconia-crowns',
    label: 'Metal-Free Zirconia Crowns',
    summary: 'CAD/CAM milled ceramic tooth caps for natural esthetics and strength.',
    category: 'Prosthodontics',
  },
  {
    path: '/smile-makeover-ghaziabad',
    label: 'Smile Makeover in Ghaziabad',
    summary: 'Customized cosmetic dentistry combining veneers, bonding, and alignment.',
    category: 'Cosmetic Care',
  },
  {
    path: '/clear-aligners',
    label: 'Clear Aligners',
    summary: 'Removable, discreet orthodontic trays for comfortable teeth straightening.',
    category: 'Orthodontics',
  },
  {
    path: '/dental-braces',
    label: 'Dental Braces',
    summary: 'Metal, ceramic, and self-ligating braces for crowded or gapped teeth.',
    category: 'Orthodontics',
  },
];

const ExploreTreatmentsSection: React.FC<ExploreTreatmentsSectionProps> = ({ navigateToPath }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    if (navigateToPath) {
      e.preventDefault();
      navigateToPath(path);
    }
  };

  return (
    <section
      id="explore-treatments"
      aria-labelledby="explore-treatments-heading"
      className="cv-auto py-12 sm:py-14 bg-[#FFF8EC] border-t border-[#087B57]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#FF8A24]">
              Oracle Dental Clinic • Chipiyana Buzurg, Ghaziabad
            </p>
            <h2
              id="explore-treatments-heading"
              className="text-2xl sm:text-3xl font-extrabold text-[#087B57] tracking-tight"
            >
              Explore Our Dental Treatments
            </h2>
            <p className="text-sm text-[#26352F]/80 leading-relaxed">
              Browse our primary dental procedures, cost guides, and local clinic information led by
              Dr. Prashant Kumar Vats (BDS, MIDA).
            </p>
          </div>
          <a
            href="/dental-services"
            onMouseEnter={() => preloadRoute('/dental-services')}
            onTouchStart={() => preloadRoute('/dental-services')}
            onClick={(e) => handleLinkClick(e, '/dental-services')}
            className="self-start md:self-auto inline-flex items-center gap-1.5 text-sm font-bold text-[#087B57] hover:text-[#FF654F] underline underline-offset-4 transition-colors"
          >
            <span>View Full Dental Services Directory</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <nav aria-label="Featured dental treatments and clinic pages">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {FEATURED_TREATMENTS.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  onMouseEnter={() => preloadRoute(item.path)}
                  onTouchStart={() => preloadRoute(item.path)}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className="group h-full flex flex-col justify-between p-4 rounded-2xl bg-white border border-[#087B57]/12 hover:border-[#00A99D] shadow-2xs hover:shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087B57]"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wide text-[#00A99D]">
                      {item.category}
                    </span>
                    <span className="block font-extrabold text-sm sm:text-base text-[#26352F] group-hover:text-[#087B57] leading-snug">
                      {item.label}
                    </span>
                    <p className="text-xs text-[#26352F]/75 leading-relaxed">{item.summary}</p>
                  </div>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#087B57] group-hover:text-[#FF654F]">
                    <span>Learn more</span>
                    <span aria-hidden="true">→</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default ExploreTreatmentsSection;
