import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQProps {
  faqs: { question: string; answer: string }[];
}

const FAQ: React.FC<FAQProps> = ({ faqs }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-600">
            Clear answers about dental treatments, timings, and visiting our Chipiyana Buzurg clinic.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  id={`faq-toggle-btn-${index}`}
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-base sm:text-lg">{faq.question}</span>
                  <span className="shrink-0 text-blue-600 bg-blue-50 p-2 rounded-full">
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-3">
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
