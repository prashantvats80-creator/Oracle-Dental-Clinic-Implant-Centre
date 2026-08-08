import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareCode, ExternalLink, MapPin, Phone, CalendarRange } from 'lucide-react';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { InteractiveButton } from './InteractiveButton';

interface TestimonialReview {
  author: string;
  avatarLetter: string;
  rating: number;
  date: string;
  text: string;
  highlight?: string;
}

const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<TestimonialReview[]>(GBP_CONFIG.STATIC_REVIEWS);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // If dynamic fetching is configured and active, try to fetch reviews securely
    if (GBP_CONFIG.api.USE_DYNAMIC_API && GBP_CONFIG.api.API_ENDPOINT) {
      setIsLoading(true);
      fetch(GBP_CONFIG.api.API_ENDPOINT)
        .then((res) => {
          if (!res.ok) throw new Error("Could not load dynamic reviews from the API.");
          return res.json();
        })
        .then((data) => {
          if (data && Array.isArray(data.reviews) && data.reviews.length > 0) {
            setReviews(data.reviews);
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.warn("API Error, falling back to verified static reviews:", err);
          // Keep fallback static reviews (default state)
          setError("Using cached verified reviews");
          setIsLoading(false);
        });
    }
  }, []);

  const handleWriteReview = () => {
    window.open(GBP_CONFIG.GOOGLE_WRITE_REVIEW_URL, '_blank', 'noopener,noreferrer');
  };

  const handleReadAllReviews = () => {
    window.open(GBP_CONFIG.GOOGLE_BUSINESS_PROFILE_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="testimonials" className="py-16 bg-blue-50/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Google Business Profile Trust Banner */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/80 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
            {/* Google G Icon */}
            <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shadow-sm flex-shrink-0">
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-blue-950 flex items-center gap-2 justify-center sm:justify-start">
                <span>Find Us on Google</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">Official Profile</span>
              </h3>
              <p className="text-slate-600 text-sm mt-0.5">
                Providing verified, premium dental care at Chipiyana Buzurg, Ghaziabad
              </p>
              
              <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start">
                <div className="flex text-amber-500">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-extrabold text-slate-800">{GBP_CONFIG.FALLBACK_RATING}</span>
                <span className="text-slate-400">|</span>
                <span className="text-sm font-semibold text-slate-600">{GBP_CONFIG.FALLBACK_REVIEW_COUNT} Google Reviews</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <InteractiveButton 
              id="write-google-review-btn"
              onClick={handleWriteReview}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-5 rounded-xl shadow-md transition-all hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2"
            >
              <MessageSquareCode className="w-4 h-4" />
              Write a Google Review
            </InteractiveButton>
            <InteractiveButton 
              id="read-google-reviews-btn"
              onClick={handleReadAllReviews}
              className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-3 px-5 rounded-xl shadow-md transition-all hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2 border border-blue-800"
            >
              <span>Read All Reviews</span>
              <ExternalLink className="w-4 h-4" />
            </InteractiveButton>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-blue-900 mb-3">Patient Success Stories</h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Read real, unedited reviews from families who found relief, comfort, and premium quality dental implants, painless root canals, and smile transformations at our clinic.
          </p>
        </div>

        {/* Reviews Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white/60 h-60 rounded-2xl border border-slate-100"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(idx * 0.1, 0.4) }}
                key={idx} 
                id={`testimonial-card-${idx}`}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
              >
                {review.highlight && (
                  <div className="absolute top-0 right-0 bg-blue-100/80 text-blue-800 text-[9px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    {review.highlight}
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-1.5 text-amber-400 mb-3.5">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between border-t border-slate-50 pt-4 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center text-blue-800 font-extrabold text-sm shadow-inner">
                      {review.avatarLetter}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 leading-tight">{review.author}</h4>
                      <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                        <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        Verified Google Patient
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Local Trust Card - Google Maps & Contact Coordinates */}
        <div className="mt-14 bg-gradient-to-br from-blue-900 to-indigo-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-blue-800 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none"></div>
          
          <div className="max-w-2xl relative z-10 text-center lg:text-left">
            <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider">
              Serving Ghaziabad & Greater Noida Border
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-4 mb-3 tracking-tight">
              Visit Oracle Dental Clinic & Implant Center
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              We are situated at Jaat Chowk, Chipiyana Buzurg, near ABES Engineering College—conveniently connecting Crossing Republik, Greater Noida West, Noida Extension, and Ghaziabad. Enjoy professional, state-of-the-art treatments with absolute transparency.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs text-blue-100">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-8 h-8 rounded-lg bg-blue-800/60 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-left font-medium">Chipiyana Buzurg, Ghaziabad (Near Border)</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-8 h-8 rounded-lg bg-blue-800/60 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-left font-medium">Call us directly: +91 70119 61515</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto relative z-10">
            <InteractiveButton 
              id="trust-card-directions-btn"
              onClick={() => window.open(GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL, '_blank', 'noopener,noreferrer')}
              className="bg-white hover:bg-slate-50 text-blue-950 font-extrabold py-4 px-6 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-blue-600" />
              Get Directions on Maps
            </InteractiveButton>
            <InteractiveButton 
              id="trust-card-book-btn"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 px-6 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2 border border-blue-500"
            >
              <CalendarRange className="w-4 h-4" />
              Book Free Consultation
            </InteractiveButton>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
