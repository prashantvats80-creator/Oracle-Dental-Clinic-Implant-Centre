import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FAQItem[];
}

const HOMEPAGE_FAQS: FAQItem[] = [
  {
    question: 'Where is Oracle Dental Clinic located in Chipiyana Buzurg, Ghaziabad?',
    answer:
      'Oracle Dental Clinic & Implant Center is located at Shop No. 47, KTS Complex, Jaat Chowk, Near Dolphin Public School, Chipiyana Buzurg, Ghaziabad, Uttar Pradesh 201009. Patients regularly visit us from Jaat Chowk, Crossings Republik, ABES Engineering College surroundings, Shahberi, Noida Extension, nearby Greater Noida West residential societies, and Lal Kuan.',
  },
  {
    question: 'What are the clinic timings and emergency consultation hours?',
    answer:
      'Oracle Dental Clinic & Implant Center is Open Daily: 9:00 AM – 9:00 PM (Monday to Sunday). For urgent toothache, swelling, or prompt dental consultations, call or WhatsApp +91 7011961515 before visiting so the clinic can coordinate immediate care.',
  },
  {
    question: 'How much does a dental implant cost in Ghaziabad?',
    answer:
      'Dental implant cost depends on the implant system selected, crown material (such as zirconia or ceramic), number of teeth replaced, and whether bone grafting or sinus lift procedures are needed. During your consultation with Dr. Prashant Kumar Vats (BDS, MIDA), a clinical exam and diagnostic scan are reviewed before sharing a transparent written estimate.',
  },
  {
    question: 'Does root canal treatment (RCT) hurt and how many visits are needed?',
    answer:
      'Root canal treatment is performed under local anesthesia to keep you comfortable while removing infected pulp tissue. Depending on tooth anatomy and infection severity, RCT may be completed in one visit or across two to three sittings. Mild post-procedure tenderness for a couple of days is common and manageable with prescribed care.',
  },
  {
    question: 'When is wisdom tooth extraction recommended?',
    answer:
      'Wisdom tooth removal is evaluated when a third molar is impacted, causes recurring gum swelling (pericoronitis), traps food, damages the neighboring molar, or creates persistent jaw discomfort. Dr. Prashant Kumar Vats (BDS, MIDA) reviews clinical findings and X-rays before recommending extraction.',
  },
  {
    question: 'What is the difference between dental braces and clear aligners?',
    answer:
      'Fixed metal or ceramic braces use brackets and archwires and are well suited for mild to complex bite or crowding corrections. Clear aligners are removable, transparent trays worn 20–22 hours daily and are often chosen by adults and teens for discreet alignment and easier brushing. Suitability depends on your orthodontic assessment.',
  },
  {
    question: 'Do you offer full mouth dental implants and smile makeovers?',
    answer:
      'Yes. We provide single, multiple, and full-arch implant restorations (including All-on-4 and All-on-6 protocols) as well as cosmetic dentistry options including dental veneers, zirconia crowns, E-max crowns, teeth whitening, composite bonding, and complete smile makeover planning.',
  },
  {
    question: 'How can I book an appointment with Dr. Prashant Kumar Vats (BDS, MIDA)?',
    answer:
      'You can book directly by calling +91 7011961515 or tapping the WhatsApp contact icon on any page. Walk-in consultations are also welcome at Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad.',
  },
];

const FAQ: React.FC<FAQProps> = ({ faqs = HOMEPAGE_FAQS }) => {
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
