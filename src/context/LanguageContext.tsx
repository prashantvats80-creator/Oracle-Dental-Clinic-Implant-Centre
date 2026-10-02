import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, defaultText: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Hindi translations dictionary for core site elements
const translations: Record<string, Record<Language, string>> = {
  // Top bar & Header
  'clinic_hours': {
    en: 'Mon-Sun: 10 AM - 2 PM, 5 PM - 9 PM',
    hi: 'सोम-रवि: सुबह 10-2, शाम 5-9 बजे'
  },
  'location_ghaziabad': {
    en: 'Chipiyana Buzurg, Ghaziabad',
    hi: 'चिपियाना बुजुर्ग, गाज़ियाबाद'
  },
  'clinic_title': {
    en: 'Oracle Dental',
    hi: 'ऑरैकल डेंटल'
  },
  'clinic_subtitle': {
    en: 'Clinic & Implants',
    hi: 'क्लीनिक एवं इम्प्लांट सेंटर'
  },
  'call_now': {
    en: 'Call 7011961515',
    hi: 'कॉल करें 7011961515'
  },
  'book_appointment': {
    en: 'Book Appointment',
    hi: 'अपॉइंटमेंट बुक करें'
  },
  'whatsapp_booking': {
    en: 'WhatsApp Booking',
    hi: 'व्हाट्सएप पर बुक करें'
  },
  'chipiyana_branch': {
    en: 'Chipiyana Branch',
    hi: 'चिपियाना शाखा'
  },
  'all_treatments': {
    en: 'All Dental Pages',
    hi: 'सभी दंत उपचार'
  },
  'results': {
    en: 'Results',
    hi: 'परिणाम'
  },
  'services': {
    en: 'Services',
    hi: 'सेवाएं'
  },
  'why_us': {
    en: 'Why Us',
    hi: 'हम क्यों'
  },
  'reviews': {
    en: 'Reviews',
    hi: 'समीक्षाएं'
  },
  'faq': {
    en: 'FAQ',
    hi: 'सामान्य प्रश्न'
  },
  'contact': {
    en: 'Contact',
    hi: 'संपर्क करें'
  },
  'doctor_name': {
    en: 'Dr. Prashant Kumar Vats, BDS',
    hi: 'डॉ. प्रशांत कुमार वत्स, बीडीएस'
  },
  'doctor_title': {
    en: 'Senior Dental Surgeon & Implantologist',
    hi: 'वरिष्ठ दंत चिकित्सक एवं इम्प्लांटोलॉजिस्ट'
  },
  'consultation_fee': {
    en: '₹200 Consultation Fee',
    hi: '₹200 परामर्श शुल्क'
  },
  'get_directions': {
    en: 'Get Directions',
    hi: 'रास्ता देखें'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('oracle_dental_lang') as Language;
      return saved === 'hi' ? 'hi' : 'en';
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('oracle_dental_lang', lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  const t = (key: string, defaultText: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return defaultText;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    // Fallback if rendered outside provider
    return {
      language: 'en',
      setLanguage: () => {},
      toggleLanguage: () => {},
      t: (_key: string, defaultText: string) => defaultText
    };
  }
  return context;
};
