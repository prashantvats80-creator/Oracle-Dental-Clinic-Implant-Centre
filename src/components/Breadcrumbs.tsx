import React from 'react';
import { Home, ChevronRight } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  navigateToHome?: () => void;
  navigateToPath?: (path: string) => void;
  badge?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  navigateToHome,
  navigateToPath,
  badge
}) => {
  const origin = typeof window !== 'undefined' ? window.location.origin : 'https://oracle-dental.com';

  // Build Schema.org BreadcrumbList JSON-LD object
  const schemaList = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: `${origin}/`
    },
    ...items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 2,
      name: item.label,
      ...(item.path ? { item: `${origin}${item.path}` } : {})
    }))
  ];

  const jsonLdData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaList
  };

  const handleItemClick = (e: React.MouseEvent, path?: string) => {
    e.preventDefault();
    if (!path || path === '/') {
      if (navigateToHome) navigateToHome();
      else if (navigateToPath) navigateToPath('/');
    } else if (navigateToPath) {
      navigateToPath(path);
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <nav 
        className="bg-slate-900 text-slate-300 py-2.5 px-4 sm:px-8 text-xs sm:text-sm border-b border-slate-800/80 sticky top-0 z-30 backdrop-blur-md bg-slate-900/95" 
        aria-label="Breadcrumb"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
          <ol className="flex items-center space-x-1.5 sm:space-x-2 text-slate-300 whitespace-nowrap" itemScope itemType="https://schema.org/BreadcrumbList">
            {/* Root / Home item */}
            <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
              <a
                href="/"
                onClick={(e) => handleItemClick(e, '/')}
                itemProp="item"
                className="hover:text-amber-400 transition-colors flex items-center gap-1 font-medium text-slate-200"
              >
                <Home className="w-3.5 h-3.5 text-amber-400" />
                <span itemProp="name">Home</span>
              </a>
              <meta itemProp="position" content="1" />
            </li>

            {items.map((item, index) => {
              const isLast = index === items.length - 1;
              const position = index + 2;

              return (
                <li key={index} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center">
                  <ChevronRight className="w-3.5 h-3.5 mx-1 text-slate-500 shrink-0" aria-hidden="true" />
                  {isLast || !item.path ? (
                    <span 
                      itemProp="name" 
                      className="text-white font-semibold truncate max-w-[200px] sm:max-w-none"
                      aria-current="page"
                    >
                      {item.label}
                    </span>
                  ) : (
                    <a
                      href={item.path}
                      onClick={(e) => handleItemClick(e, item.path)}
                      itemProp="item"
                      className="hover:text-amber-400 transition-colors font-medium text-slate-300"
                    >
                      <span itemProp="name">{item.label}</span>
                    </a>
                  )}
                  <meta itemProp="position" content={String(position)} />
                </li>
              );
            })}
          </ol>

          {badge && (
            <span className="hidden md:inline-flex text-[11px] font-medium bg-amber-500/15 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30 shrink-0">
              {badge}
            </span>
          )}
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
