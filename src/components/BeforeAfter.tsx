import React from 'react';
import { Sparkles } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  const transformations = [
    {
      id: 0,
      title: 'Teeth Whitening – Brighter Smile',
      description: 'In-office clinical teeth whitening to lighten surface stains.',
      singleImg: '/assets/images/case-01.webp',
    },
    {
      id: 1,
      title: 'Teeth Whitening – Stain Reduction',
      description: 'Supervised whitening following thorough ultrasonic scaling.',
      singleImg: '/assets/images/case-02.webp',
    },
    {
      id: 2,
      title: 'Dental Implants – Single Tooth',
      description: 'Single-tooth titanium implant with custom shade-matched crown.',
      singleImg: '/assets/images/case-03.webp',
    },
    {
      id: 3,
      title: 'Dental Implants – Gap Restoration',
      description: 'Natural-looking replacement blending comfortably with adjacent teeth.',
      singleImg: '/assets/images/case-04.webp',
    },
    {
      id: 4,
      title: 'Dental Implants – Bite Function',
      description: 'Restoring chewing comfort with implant-supported prosthetics.',
      singleImg: '/assets/images/case-05.webp',
    },
    {
      id: 5,
      title: 'Dental Implants – Smile Rehabilitation',
      description: 'Functional and aesthetic rehabilitation for missing teeth.',
      singleImg: '/assets/images/case-06.webp',
    },
    {
      id: 6,
      title: 'Smile Design & Veneers',
      description: 'Refining tooth shape and smile harmony with conservative restorations.',
      singleImg: '/assets/images/case-07.webp',
    },
    {
      id: 7,
      title: 'Orthodontic Alignment',
      description: 'Progressive alignment of crowded and spaced teeth.',
      singleImg: '/assets/images/case-08.webp',
    },
    {
      id: 8,
      title: 'Restorative Dental Care',
      description: 'Rebuilding damaged teeth for comfort and durability.',
      singleImg: '/assets/images/case-09.webp',
    },
    {
      id: 9,
      title: 'Full Mouth Rehabilitation',
      description: 'Comprehensive bite and arch restoration planned in stages.',
      singleImg: '/assets/images/case-10.webp',
    },
    {
      id: 10,
      title: 'Cosmetic Composite Restoration',
      description: 'Repairing chips and minor gaps with tooth-colored composite.',
      singleImg: '/assets/images/case-11.webp',
    },
  ];

  return (
    <section id="transformations" className="cv-auto py-14 sm:py-16 bg-[#FFF8EC] border-t border-[#087B57]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <p className="text-xs font-extrabold uppercase tracking-wider text-[#FF8A24] mb-2">
            Real Clinical Focus
          </p>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-6 h-6 text-[#FF8A24] shrink-0" aria-hidden="true" />
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#087B57]">Smile Transformations</h2>
            <Sparkles className="w-6 h-6 text-[#FF8A24] shrink-0" aria-hidden="true" />
          </div>
          <p className="text-[#26352F]/75 max-w-2xl mx-auto text-sm sm:text-base">
            Illustrative dental treatment outcomes. Individual clinical results vary based on oral health, bone volume, and treatment plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {transformations.map((item) => (
            <div
              key={item.id}
              id={`transformation-card-${item.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-[#087B57]/12 shadow-xs hover:shadow-lg hover:border-[#00A99D] transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="p-4 bg-[#E5F5EC]/45">
                <div className="w-full rounded-xl overflow-hidden border border-[#087B57]/10 bg-white">
                  <img
                    src={item.singleImg}
                    alt={`${item.title} – Oracle Dental Clinic Chipiyana Buzurg`}
                    width="640"
                    height="360"
                    className="w-full h-auto object-contain aspect-video"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="p-5 text-center border-t border-[#E5F5EC] bg-white">
                <h3 className="text-lg font-bold text-[#26352F] mb-1.5">{item.title}</h3>
                <p className="text-sm text-[#26352F]/75">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
