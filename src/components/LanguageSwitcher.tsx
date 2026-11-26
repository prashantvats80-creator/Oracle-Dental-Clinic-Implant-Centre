import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
  variant?: 'header' | 'topbar' | 'mobile' | 'mobile-header';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ 
  className = '', 
  variant = 'header' 
}) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'topbar') {
    return (
      <div
        role="group"
        aria-label="Language switcher"
        className={`inline-flex items-center bg-white/15 rounded-full p-0.5 border border-white/25 text-xs ${className}`}
      >
        <button
          type="button"
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
          className={`px-2 py-0.5 rounded-full font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD36A] ${
            language === 'en' 
              ? 'bg-[#FFD36A] text-[#111C18] shadow-xs' 
              : 'text-white hover:bg-white/15'
          }`}
          aria-label="EN — Switch language to English"
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLanguage('hi')}
          aria-pressed={language === 'hi'}
          className={`px-2 py-0.5 rounded-full font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD36A] ${
            language === 'hi' 
              ? 'bg-[#FFD36A] text-[#111C18] shadow-xs' 
              : 'text-white hover:bg-white/15'
          }`}
          aria-label="हिंदी — Switch language to Hindi"
        >
          हिंदी
        </button>
      </div>
    );
  }

  if (variant === 'mobile-header') {
    return (
      <div
        role="group"
        aria-label="Language switcher"
        className={`inline-flex items-center bg-[#E5F5EC] rounded-full p-0.5 border border-[#087B57]/25 text-[11px] shrink-0 ${className}`}
      >
        <button
          type="button"
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
          className={`min-h-[30px] px-2 py-0.5 rounded-full font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087B57] ${
            language === 'en'
              ? 'bg-[#087B57] text-white shadow-xs'
              : 'text-[#26352F] hover:text-[#087B57]'
          }`}
          aria-label="EN — Switch language to English"
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => setLanguage('hi')}
          aria-pressed={language === 'hi'}
          className={`min-h-[30px] px-2 py-0.5 rounded-full font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087B57] ${
            language === 'hi'
              ? 'bg-[#087B57] text-white shadow-xs'
              : 'text-[#26352F] hover:text-[#087B57]'
          }`}
          aria-label="हिंदी — Switch language to Hindi"
        >
          हिंदी
        </button>
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label="Language switcher"
      className={`inline-flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 ${className}`}
    >
      <Globe className="w-4 h-4 text-[#087B57] ml-1 shrink-0" aria-hidden="true" />
      <div className="flex items-center bg-white rounded-lg p-0.5 shadow-2xs border border-slate-200/80">
        <button
          type="button"
          onClick={() => setLanguage('en')}
          aria-pressed={language === 'en'}
          className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087B57] ${
            language === 'en'
              ? 'bg-[#087B57] text-white shadow-xs'
              : 'text-[#26352F] hover:text-[#087B57]'
          }`}
        >
          English
        </button>
        <button
          type="button"
          onClick={() => setLanguage('hi')}
          aria-pressed={language === 'hi'}
          className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087B57] ${
            language === 'hi'
              ? 'bg-[#087B57] text-white shadow-xs'
              : 'text-[#26352F] hover:text-[#087B57]'
          }`}
        >
          हिंदी
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
