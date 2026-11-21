import React from 'react';
import { Sparkles } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  const transformations = [
    {
      id: 0,
      title: 'Teeth Whitening – Brighter Smile',
      description: 'In-office clinical teeth whitening to lighten surface stains.',
      singleImg: 'https://i.postimg.cc/FsZjZccD/Chat-GPT-Image-Jun-23-2026-07-40-02-PM.png',
    },
    {
      id: 1,
      title: 'Teeth Whitening – Stain Reduction',
      description: 'Supervised whitening following thorough ultrasonic scaling.',
      singleImg: 'https://i.postimg.cc/FHT82Ytw/Chat-GPT-Image-Jun-23-2026-07-42-37-PM.png',
    },
    {
      id: 2,
      title: 'Dental Implants – Single Tooth',
      description: 'Single-tooth titanium implant with custom shade-matched crown.',
      singleImg: 'https://i.postimg.cc/K88srmK7/Chat-GPT-Image-Jun-23-2026-07-48-17-PM.png',
    },
    {
      id: 3,
      title: 'Dental Implants – Gap Restoration',
      description: 'Natural-looking replacement blending comfortably with adjacent teeth.',
      singleImg: 'https://i.postimg.cc/QMR4356D/Chat-GPT-Image-Jun-23-2026-07-50-45-PM.png',
    },
    {
      id: 4,
      title: 'Dental Implants – Bite Function',
      description: 'Restoring chewing comfort with implant-supported prosthetics.',
      singleImg: 'https://i.postimg.cc/GhqXp6MY/Chat-GPT-Image-Jun-23-2026-07-55-08-PM.png',
    },
    {
      id: 5,
      title: 'Dental Implants – Smile Rehabilitation',
      description: 'Functional and aesthetic rehabilitation for missing teeth.',
      singleImg: 'https://i.postimg.cc/k5tsfG7F/Chat-GPT-Image-Jun-23-2026-08-00-40-PM.png',
    },
    {
      id: 6,
      title: 'Smile Design & Veneers',
      description: 'Refining tooth shape and smile harmony with conservative restorations.',
      singleImg: 'https://i.postimg.cc/2S3dHyCP/Chat-GPT-Image-Jun-23-2026-08-09-59-PM.png',
    },
    {
      id: 7,
      title: 'Orthodontic Alignment',
      description: 'Progressive alignment of crowded and spaced teeth.',
      singleImg: 'https://i.postimg.cc/Zqd8SQBw/Chat-GPT-Image-Jun-23-2026-08-17-03-PM.png',
    },
    {
      id: 8,
      title: 'Restorative Dental Care',
      description: 'Rebuilding damaged teeth for comfort and durability.',
      singleImg: 'https://i.postimg.cc/fL7Y30vY/Chat-GPT-Image-Jun-23-2026-08-31-58-PM.png',
    },
    {
      id: 9,
      title: 'Full Mouth Rehabilitation',
      description: 'Comprehensive bite and arch restoration planned in stages.',
      singleImg: 'https://i.postimg.cc/gcT2V2Bw/Chat-GPT-Image-Jun-23-2026-08-38-15-PM.png',
    },
    {
      id: 10,
      title: 'Cosmetic Composite Restoration',
      description: 'Repairing chips and minor gaps with tooth-colored composite.',
      singleImg: 'https://i.postimg.cc/VkyshHw1/Chat-GPT-Image-Jun-23-2026-08-42-13-PM.png',
    },
  ];

  return (
    <section id="transformations" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-6 h-6 text-amber-500" aria-hidden="true" />
            <h2 className="text-3xl font-bold text-blue-900">Smile Transformations</h2>
            <Sparkles className="w-6 h-6 text-amber-500" aria-hidden="true" />
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Illustrative dental treatment outcomes. Individual clinical results vary based on oral health, bone volume, and treatment plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {transformations.map((item) => (
            <div
              key={item.id}
              id={`transformation-card-${item.id}`}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-4">
                <div className="w-full rounded-xl overflow-hidden shadow-inner border border-slate-200 bg-slate-100">
                  <img
                    src={item.singleImg}
                    alt={`${item.title} – Oracle Dental Clinic Chipiyana Buzurg`}
                    width="640"
                    height="360"
                    className="w-full h-auto object-contain aspect-video"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              <div className="p-5 text-center border-t border-slate-100 bg-white">
                <h3 className="text-lg font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
