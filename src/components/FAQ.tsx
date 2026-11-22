import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  faqs: { question: string; answer: string }[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="cv-auto py-14 sm:py-16 bg-[#FFF8EC] border-t border-[#087B57]/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[#FF8A24] mb-2">
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
                  isOpen ? 'border-[#00A99D] shadow-sm' : 'border-[#087B57]/12 hover:border-[#00A99D]/50'
                }`}
              >
                <button
                  type="button"
                  id={`faq-toggle-btn-${index}`}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full min-h-[54px] px-5 sm:px-6 py-4 text-left flex justify-between items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00A99D] cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-[#26352F] text-sm sm:text-lg">{faq.question}</span>
                  <span
                    className={`shrink-0 p-2 rounded-full transition-colors ${
                      isOpen ? 'bg-[#FF654F] text-white' : 'text-[#087B57] bg-[#E5F5EC]'
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
      </div>
    </section>
  );
};

export default FAQ;
