import React, { useState } from 'react';
import { ChevronDown, BookOpen, ArrowRight } from 'lucide-react';
import { HOMEPAGE_FAQS, type HomepageFAQItem } from '../data/homepageFaqs';
import { preloadRoute } from '../utils/routePreloader';

interface FAQProps {
  faqs?: HomepageFAQItem[];
  navigateToPath?: (path: string) => void;
}

const FAQ: React.FC<FAQProps> = ({ faqs = HOMEPAGE_FAQS, navigateToPath }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleHubClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (navigateToPath) {
      e.preventDefault();
      navigateToPath('/dental-faqs');
    }
  };

  return (
    <section id="faq" className="cv-auto py-14 sm:py-16 bg-[#FFF8EC] border-t border-[#087B57]/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[#B84D00] mb-2">
            Helpful Patient Answers
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#087B57] mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#26352F]/75">
            Clear answers about dental treatments, timings, and visiting our Chipiyana Buzurg clinic.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className={`bg-white border rounded-2xl overflow-hidden transition-colors shadow-xs ${
                  isOpen ? 'border-[#067067] shadow-sm' : 'border-[#087B57]/12 hover:border-[#067067]/50'
                }`}
              >
                <button
                  type="button"
                  id={`faq-toggle-btn-${index}`}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full min-h-[54px] px-5 sm:px-6 py-4 text-left flex justify-between items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#087B57] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#26352F] text-sm sm:text-lg">{faq.question}</span>
                  <span
                    className={`shrink-0 p-2 rounded-full transition-colors ${
                      isOpen ? 'bg-[#C63621] text-white' : 'text-[#087B57] bg-[#E5F5EC]'
                    }`}
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 text-[#26352F]/85 text-sm sm:text-base leading-relaxed border-t border-[#E5F5EC] pt-3 bg-[#FFF8EC]/35">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Internal Link to the Complete 130+ Question Dental FAQs & Patient Education Knowledge Hub */}
        <div className="mt-8 bg-white rounded-2xl border border-[#087B57]/15 p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <p className="text-xs font-extrabold uppercase tracking-wider text-[#B84D00] flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#087B57]" aria-hidden="true" />
              <span>Dental FAQs &amp; Patient Education Hub</span>
            </p>
            <h3 className="text-base sm:text-lg font-extrabold text-[#26352F]">
              Looking for detailed answers on Dental Implants, India &amp; NCR Costs, RCT, Crowns, or Recovery?
            </h3>
            <p className="text-xs sm:text-sm text-[#26352F]/75">
              Browse 130+ medically reviewed questions across 28 dental categories by Dr. Prashant Kumar Vats.
            </p>
          </div>
          <a
            href="/dental-faqs"
            onMouseEnter={() => preloadRoute('/dental-faqs')}
            onTouchStart={() => preloadRoute('/dental-faqs')}
            onClick={handleHubClick}
            className="min-h-[44px] px-5 py-2.5 rounded-full bg-[#087B57] hover:bg-[#066647] text-white font-bold text-xs sm:text-sm inline-flex items-center gap-2 whitespace-nowrap shrink-0 transition-colors shadow-xs"
          >
            <span>Explore All 130+ Dental FAQs</span>
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
