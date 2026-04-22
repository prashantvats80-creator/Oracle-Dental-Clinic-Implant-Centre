import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: 'Rahul Sharma', text: 'Best dental clinic in Ghaziabad. Got my RCT done painlessly. Highly recommend!' },
    { name: 'Priya Singh', text: 'Very clean clinic and professional doctor. The implant procedure was smooth and affordable.' },
    { name: 'Amit Kumar', text: 'Visited for severe toothache. The doctor was very patient and provided immediate relief. Excellent service.' }
  ];

  return (
    <section id="testimonials" className="py-16 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Patient Reviews</h2>
          <div className="flex justify-center items-center gap-2 mb-2">
            <span className="text-2xl font-bold text-slate-800">4.9</span>
            <div className="flex text-amber-500">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
          </div>
          <p className="text-slate-600">Based on Google Reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(idx * 0.1, 0.4) }}
              key={idx} 
              className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              <div className="flex text-amber-400 mb-3">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-4 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">{review.name}</h4>
                  <span className="text-xs text-slate-500">Verified Patient</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
