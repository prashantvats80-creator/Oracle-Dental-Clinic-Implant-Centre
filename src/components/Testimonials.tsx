import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquareCode, ExternalLink, MapPin, Phone, CalendarRange, CheckCircle2, Award, ThumbsUp, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { InteractiveButton } from './InteractiveButton';

interface TestimonialReview {
  author: string;
  avatarLetter: string;
  rating: number;
  date: string;
  text: string;
  highlight?: string;
  treatment?: string;
  location?: string;
}

const CATEGORIES = [
  'All Reviews',
  'Dental Implants',
  'Root Canal',
  'Wisdom Tooth',
  'Aligners & Cosmetic',
  'Crowns & Fillings',
  'Emergency Care'
];

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<TestimonialReview[]>(GBP_CONFIG.STATIC_REVIEWS);
  const [selectedCategory, setSelectedCategory] = useState('All Reviews');
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

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

  const filteredReviews = reviews.filter((review) => {
    if (selectedCategory === 'All Reviews') return true;
    const cat = selectedCategory.toLowerCase();
    const highlight = (review.highlight || '').toLowerCase();
    const treatment = (review.treatment || '').toLowerCase();
    const text = (review.text || '').toLowerCase();

    if (cat.includes('implant')) {
      return highlight.includes('implant') || treatment.includes('implant') || text.includes('implant');
    }
    if (cat.includes('canal') || cat.includes('rct')) {
      return highlight.includes('rct') || highlight.includes('root') || treatment.includes('root') || text.includes('root canal');
    }
    if (cat.includes('wisdom')) {
      return highlight.includes('wisdom') || treatment.includes('wisdom') || text.includes('wisdom');
    }
    if (cat.includes('aligner') || cat.includes('cosmetic')) {
      return highlight.includes('aligner') || highlight.includes('whitening') || treatment.includes('aligner') || treatment.includes('whitening');
    }
    if (cat.includes('crown') || cat.includes('filling')) {
      return highlight.includes('crown') || highlight.includes('filling') || treatment.includes('crown') || treatment.includes('filling');
    }
    if (cat.includes('emergency')) {
      return highlight.includes('emergency') || treatment.includes('emergency') || text.includes('emergency');
    }
    return true;
  });

  const displayedReviews = filteredReviews.slice(0, visibleCount);

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-blue-50/70 via-white to-blue-50/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Google Business Profile Trust Card */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/90 mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
            
            {/* Left: Official Google Badge & Rating */}
            <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center border border-slate-200 shadow-sm flex-shrink-0">
                <svg className="w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                </svg>
              </div>
              
              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <h3 className="text-xl font-extrabold text-blue-950">
                    Google Business Profile
                  </h3>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified Clinic
                  </span>
                </div>
                <p className="text-slate-600 text-sm mt-0.5 font-medium">
                  {GBP_CONFIG.BUSINESS_NAME} • Jaat Chowk, Chipiyana Buzurg
                </p>
                
                <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start flex-wrap">
                  <div className="flex text-amber-500">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <span className="text-xl font-black text-slate-900">{GBP_CONFIG.FALLBACK_RATING}</span>
                  <span className="text-slate-300">/ 5.0</span>
                  <span className="text-slate-400 font-bold">•</span>
                  <span className="text-sm font-bold text-blue-900">{GBP_CONFIG.FALLBACK_REVIEW_COUNT}+ Google Reviews</span>
                </div>
              </div>
            </div>

            {/* Right: CTA Actions */}
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <InteractiveButton 
                id="write-google-review-btn"
                onClick={handleWriteReview}
                className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-5 rounded-xl shadow-md transition-all hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquareCode className="w-4 h-4" />
                Write a Google Review
              </InteractiveButton>
              <InteractiveButton 
                id="read-google-reviews-btn"
                onClick={handleReadAllReviews}
                className="bg-blue-900 hover:bg-blue-950 text-white font-bold py-3 px-5 rounded-xl shadow-md transition-all hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2 border border-blue-800 active:scale-95"
              >
                <span>See All {GBP_CONFIG.FALLBACK_REVIEW_COUNT}+ Reviews</span>
                <ExternalLink className="w-4 h-4" />
              </InteractiveButton>
            </div>
          </div>

          {/* Rating Breakdown & Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-center">
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-500 font-medium block">5-Star Satisfaction</span>
              <span className="text-lg font-black text-emerald-600">96.8%</span>
              <span className="text-[10px] text-slate-400 block">475+ Five-Star Ratings</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-500 font-medium block">Hospital Sterilization</span>
              <span className="text-lg font-black text-blue-900">5.0 / 5.0</span>
              <span className="text-[10px] text-slate-400 block">Class-B Autoclave Protocol</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-500 font-medium block">Painless Treatment</span>
              <span className="text-lg font-black text-blue-900">4.9 / 5.0</span>
              <span className="text-[10px] text-slate-400 block">Computerized Anesthesia</span>
            </div>
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
              <span className="text-xs text-slate-500 font-medium block">Transparent Pricing</span>
              <span className="text-lg font-black text-blue-900">₹200 Fee</span>
              <span className="text-[10px] text-slate-400 block">Zero Hidden Charges</span>
            </div>
          </div>
        </div>

        {/* Section Heading & Category Filter Tabs */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100/70 text-blue-800 font-extrabold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Verified Patient Testimonials
          </div>
          <h2 className="text-3xl font-extrabold text-blue-950 mb-3">
            Real Reviews From Real Patients
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Read verified reviews from families across Ghaziabad, Chipiyana Buzurg, Crossing Republik, and Greater Noida West who experienced gentle, world-class dental care.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleCount(6);
                }}
                className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-blue-900 text-white shadow-md scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
            {[1, 2, 3].map((n) => (
              <div key={n} className="bg-white/60 h-64 rounded-2xl border border-slate-100"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedReviews.map((review, idx) => (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(idx * 0.05, 0.3) }}
                key={idx} 
                id={`testimonial-card-${idx}`}
                className="bg-white p-6 rounded-2xl shadow-xs border border-slate-200/80 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group relative overflow-hidden"
              >
                {review.highlight && (
                  <div className="absolute top-0 right-0 bg-blue-100 text-blue-900 text-[10px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    {review.highlight}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-1.5 text-amber-500 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="text-xs font-extrabold text-slate-700 ml-1.5">5.0</span>
                  </div>

                  {review.treatment && (
                    <div className="text-xs font-bold text-amber-700 mb-2">
                      Treatment: {review.treatment}
                    </div>
                  )}

                  <p className="text-slate-700 text-sm leading-relaxed italic mb-5">
                    "{review.text}"
                  </p>
                </div>
                
                <div className="flex items-center justify-between border-t border-slate-100 pt-3.5 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-full flex items-center justify-center text-white font-extrabold text-sm shadow-xs">
                      {review.avatarLetter}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-900 leading-tight">{review.author}</h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5">
                        <span className="text-emerald-700 font-semibold flex items-center gap-0.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 inline" /> Verified Google Review
                        </span>
                      </div>
                      {review.location && (
                        <div className="text-[10px] text-slate-400 font-medium">
                          {review.location}
                        </div>
                      )}
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold">{review.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Load More Button if filtered count exceeds visible */}
        {filteredReviews.length > visibleCount && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="bg-white hover:bg-slate-100 text-blue-900 font-bold px-6 py-3 rounded-xl border border-slate-300 shadow-sm text-sm transition-all hover:scale-105 active:scale-95"
            >
              Show More Patient Reviews ({filteredReviews.length - visibleCount} more)
            </button>
          </div>
        )}

        {/* Local Trust Card - Google Maps & Contact Coordinates */}
        <div className="mt-14 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white rounded-3xl p-6 md:p-10 shadow-xl border border-blue-900/60 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.03] pointer-events-none"></div>
          
          <div className="max-w-2xl relative z-10 text-center lg:text-left">
            <span className="bg-amber-400 text-slate-950 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              Serving Ghaziabad, Crossing Republik & Noida Extension
            </span>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-4 mb-3 tracking-tight">
              Visit Oracle Dental Clinic & Implant Center
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Conveniently located at Jaat Chowk, Chipiyana Buzurg, near ABES Engineering College—connecting Crossing Republik, Greater Noida West, and Ghaziabad. Join our 493+ satisfied patients for gentle, transparent dental care.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-xs text-slate-300">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-8 h-8 rounded-lg bg-blue-900/80 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-left font-medium">Chipiyana Buzurg, Ghaziabad (Near ABES College)</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="w-8 h-8 rounded-lg bg-blue-900/80 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-amber-400" />
                </div>
                <span className="text-left font-medium">Call Us: +91 70119 61515</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto relative z-10">
            <InteractiveButton 
              id="trust-card-directions-btn"
              onClick={() => window.open(GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL, '_blank', 'noopener,noreferrer')}
              className="bg-white hover:bg-slate-100 text-blue-950 font-extrabold py-3.5 px-6 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2 active:scale-95"
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
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3.5 px-6 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 text-sm flex items-center justify-center gap-2 border border-amber-400 active:scale-95"
            >
              <CalendarRange className="w-4 h-4" />
              Book ₹200 Consultation
            </InteractiveButton>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
