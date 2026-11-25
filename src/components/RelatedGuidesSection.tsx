import React from 'react';
import { preloadRoute } from '../utils/routePreloader';

export interface RelatedGuideLink {
  path: string;
  label: string;
  description: string;
  tag?: string;
}

interface RelatedGuidesSectionProps {
  title?: string;
  subtitle?: string;
  links: RelatedGuideLink[];
  navigateToPath?: (path: string) => void;
  ariaLabel?: string;
}

export const RelatedGuidesSection: React.FC<RelatedGuidesSectionProps> = ({
  title = 'Related Dental Treatments & Cost Guides',
  subtitle = 'Explore clinically connected procedures, symptom guides, and transparent Ghaziabad pricing information at Oracle Dental Clinic.',
  links,
  navigateToPath,
  ariaLabel = 'Related dental treatment guides',
}) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    if (navigateToPath) {
      navigateToPath(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section
      aria-label={ariaLabel}
      className="cv-auto bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-5"
    >
      <div className="space-y-1.5">
        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">{title}</h2>
        <p className="text-xs sm:text-sm text-slate-600 max-w-3xl leading-relaxed">{subtitle}</p>
      </div>

      <nav aria-label={ariaLabel}>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {links.map((item) => (
            <li key={item.path}>
              <a
                href={item.path}
                onMouseEnter={() => preloadRoute(item.path)}
                onTouchStart={() => preloadRoute(item.path)}
                onClick={(e) => handleLinkClick(e, item.path)}
                className="group h-full flex flex-col justify-between p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 hover:border-blue-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                <div className="space-y-1.5">
                  {item.tag && (
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-blue-700">
                      {item.tag}
                    </span>
                  )}
                  <span className="block font-bold text-sm text-slate-900 group-hover:text-blue-700 leading-snug">
                    {item.label}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-700">
                  <span>View Guide</span>
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default RelatedGuidesSection;
