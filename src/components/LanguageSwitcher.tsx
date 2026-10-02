import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'header' | 'topbar' | 'mobile';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  className = '', 
  variant = 'header' 
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'topbar') {
    return (
      <div className={`inline-flex items-center bg-white/10 backdrop-blur-md rounded-full p-0.5 border border-white/20 text-xs ${className}`}>
        <button
          onClick={() => setLanguage('en')}
          className={`px-2 py-0.5 rounded-full font-bold transition-all ${
            language === 'en' 
              ? 'bg-amber-400 text-slate-950 shadow-xs' 
              : 'text-white/80 hover:text-white'
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('hi')}
          className={`px-2 py-0.5 rounded-full font-bold transition-all ${
            language === 'hi' 
              ? 'bg-amber-400 text-slate-950 shadow-xs' 
              : 'text-white/80 hover:text-white'
          }`}
          aria-label="Switch to Hindi"
        >
          हिंदी
        </button>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 ${className}`}>
      <Globe className="w-4 h-4 text-blue-600 ml-1 shrink-0" />
      <div className="flex items-center bg-white dark:bg-slate-900 rounded-lg p-0.5 shadow-2xs border border-slate-200/80">
        <button
          onClick={() => setLanguage('en')}
          className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
            language === 'en'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-blue-600'
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage('hi')}
          className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
            language === 'hi'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'text-slate-600 hover:text-blue-600'
          }`}
        >
          हिंदी
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
