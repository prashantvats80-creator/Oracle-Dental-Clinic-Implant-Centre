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
  badge,
}) => {
  const handleItemClick = (e: React.MouseEvent, path?: string) => {
    e.preventDefault();
    if (!path || path === '/') {
      if (navigateToHome) navigateToHome();
      else if (navigateToPath) navigateToPath('/');
    } else if (path.startsWith('/#')) {
      if (navigateToHome) navigateToHome();
      const targetId = path.slice(2);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else if (navigateToPath) {
      navigateToPath(path);
    }
  };

  return (
    <nav
      className="bg-[#066647] text-[#E5F5EC] py-2 px-3 sm:px-8 text-xs sm:text-sm border-b border-[#087B57] overflow-x-auto"
      aria-label="Breadcrumb"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-x-auto">
        <ol className="flex items-center space-x-1 sm:space-x-2 text-[#E5F5EC] whitespace-nowrap min-w-0">
          <li className="flex items-center shrink-0">
            <a
              href="/"
              onClick={(e) => handleItemClick(e, '/')}
              className="hover:text-[#FFD36A] transition-colors flex items-center gap-1 font-medium text-white"
            >
              <Home className="w-3.5 h-3.5 text-[#FFD36A]" aria-hidden="true" />
              <span>Home</span>
            </a>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const href = item.path && item.path.startsWith('/') ? item.path : '/';

            return (
              <li key={index} className="flex items-center min-w-0">
                <ChevronRight className="w-3.5 h-3.5 mx-0.5 sm:mx-1 text-[#FFD36A]/60 shrink-0" aria-hidden="true" />
                {isLast ? (
                  <span
                    className="text-white font-semibold truncate max-w-[130px] sm:max-w-[220px] md:max-w-none"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={href}
                    onClick={(e) => handleItemClick(e, item.path)}
                    className="hover:text-[#FFD36A] transition-colors font-medium text-[#E5F5EC] truncate max-w-[100px] sm:max-w-none"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ol>

        {badge && (
          <span className="hidden md:inline-flex text-[11px] font-semibold text-[#FFD36A] shrink-0">
            {badge}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
