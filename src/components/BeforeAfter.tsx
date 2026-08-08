import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight } from 'lucide-react';

const BeforeAfter: React.FC = () => {
  // Placeholder data - we will replace these with your actual patient images
  type Transformation = {
    id: number;
    title: string;
    description: string;
    singleImg?: string;
    beforeImg?: string;
    afterImg?: string;
  };

  const transformations: Transformation[] = [
    {
      id: 0,
      title: "Teeth Whitening - Instant Glow",
      description: "Brighten your smile dramatically in just one session.",
      singleImg: "https://i.postimg.cc/FsZjZccD/Chat-GPT-Image-Jun-23-2026-07-40-02-PM.png", 
    },
    {
      id: 1,
      title: "Teeth Whitening - Deep Clean",
      description: "Professional laser whitening for tough stains.",
      singleImg: "https://i.postimg.cc/FHT82Ytw/Chat-GPT-Image-Jun-23-2026-07-42-37-PM.png", 
    },
    {
      id: 2,
      title: "Dental Implants - Single Tooth",
      description: "Complete restoration of a missing tooth.",
      singleImg: "https://i.postimg.cc/K88srmK7/Chat-GPT-Image-Jun-23-2026-07-48-17-PM.png",
    },
    {
      id: 3,
      title: "Dental Implants - Gap Correction",
      description: "Seamless replacement blending naturally with other teeth.",
      singleImg: "https://i.postimg.cc/QMR4356D/Chat-GPT-Image-Jun-23-2026-07-50-45-PM.png",
    },
    {
      id: 4,
      title: "Dental Implants - Perfect Fit",
      description: "Restoring confidence with natural-looking implants.",
      singleImg: "https://i.postimg.cc/GhqXp6MY/Chat-GPT-Image-Jun-23-2026-07-55-08-PM.png",
    },
    {
      id: 5,
      title: "Dental Implants - Smile Makeover",
      description: "Complete aesthetic and functional restoration.",
      singleImg: "https://i.postimg.cc/k5tsfG7F/Chat-GPT-Image-Jun-23-2026-08-00-40-PM.png",
    },
    {
      id: 6,
      title: "Smile Design & Veneers",
      description: "Complete facial aesthetics and smile transformation.",
      singleImg: "https://i.postimg.cc/2S3dHyCP/Chat-GPT-Image-Jun-23-2026-08-09-59-PM.png",
    },
    {
      id: 7,
      title: "Orthodontic Realignment",
      description: "Straightening teeth effectively for a perfect bite.",
      singleImg: "https://i.postimg.cc/Zqd8SQBw/Chat-GPT-Image-Jun-23-2026-08-17-03-PM.png",
    },
    {
      id: 8,
      title: "Advanced Dental Care",
      description: "Restoring form and function with precision.",
      singleImg: "https://i.postimg.cc/fL7Y30vY/Chat-GPT-Image-Jun-23-2026-08-31-58-PM.png",
    },
    {
      id: 9,
      title: "Full Mouth Rehabilitation",
      description: "Comprehensive care for extensive dental needs.",
      singleImg: "https://i.postimg.cc/gcT2V2Bw/Chat-GPT-Image-Jun-23-2026-08-38-15-PM.png",
    },
    {
      id: 10,
      title: "Cosmetic Restoration",
      description: "Fixing chips and gaps seamlessly in one visit.",
      singleImg: "https://i.postimg.cc/VkyshHw1/Chat-GPT-Image-Jun-23-2026-08-42-13-PM.png",
    }
  ];

  return (
    <section id="transformations" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-amber-500" />
            <h2 className="text-3xl font-bold text-blue-900">Smile Transformations</h2>
            <Sparkles className="w-6 h-6 text-amber-500" />
          </div>
          <p className="text-slate-600 max-w-2xl mx-auto">Real results from our clinic. See the difference our expert treatments can make.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {transformations.map((item, idx) => (
            <motion.div 
              key={item.id}
              id={`transformation-card-${item.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(idx * 0.1, 0.4) }}
              className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="p-4 flex gap-2 relative">
                {item.singleImg ? (
                  /* Single Image View (for pre-combined Before/After images) */
                  <div className="w-full rounded-xl overflow-hidden shadow-inner border border-slate-200 bg-slate-100 flex items-center justify-center">
                    <img 
                      src={item.singleImg} 
                      alt={`${item.title} Result`} 
                      className="w-full h-auto object-contain"
                      style={{ aspectRatio: '16/9' }}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // Fallback handling if image hasn't been uploaded yet
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = "https://images.unsplash.com/photo-1590664095641-7fa05f689813?auto=format&fit=crop&w=600&q=80";
                        target.style.filter = "grayscale(100%) blur(2px)";
                        // Ensure we have a way to visually tell it's a fallback
                      }}
                    />
                  </div>
                ) : (
                  /* Dual Image View (Before & After separately) */
                  <div className="flex gap-2 w-full h-48 sm:h-64 lg:h-48">
                    <div className="relative w-1/2 h-full rounded-xl overflow-hidden shadow-inner border border-slate-200">
                      <img 
                        src={item.beforeImg} 
                        alt={`${item.title} Before`} 
                        className="w-full h-full object-cover filter grayscale-[30%]"
                        style={{ aspectRatio: '4/3' }}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-2 left-2 bg-slate-800/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-md">
                        Before
                      </div>
                    </div>

                    <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-lg text-blue-600 hidden sm:block lg:hidden">
                      <ArrowRight className="w-5 h-5" />
                    </div>

                    <div className="relative w-1/2 h-full rounded-xl overflow-hidden shadow-inner border border-slate-200">
                      <img 
                        src={item.afterImg} 
                        alt={`${item.title} After`} 
                        className="w-full h-full object-cover"
                        style={{ aspectRatio: '4/3' }}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-2 right-2 bg-[#25D366]/90 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-md">
                        After
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none"></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6 text-center border-t border-slate-100 bg-white">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
