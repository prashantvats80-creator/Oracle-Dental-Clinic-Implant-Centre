import React, { useState } from 'react';
import { Star, MessageSquareCode, ExternalLink, MapPin, Phone, CalendarRange, CheckCircle2, Sparkles } from 'lucide-react';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { PATIENT_REVIEW_HIGHLIGHTS, type PatientReviewHighlight } from '../data/patientReviews';

const CATEGORIES = [
  'All Reviews',
  'Dental Implants',
  'Root Canal',
  'Wisdom Tooth',
  'Aligners & Cosmetic',
  'Crowns & Fillings',
  'Emergency Care',
];

export const Testimonials: React.FC = () => {
  const [reviews] = useState<PatientReviewHighlight[]>(PATIENT_REVIEW_HIGHLIGHTS);
  const [selectedCategory, setSelectedCategory] = useState('All Reviews');
  const [visibleCount, setVisibleCount] = useState(6);

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
    <section id="testimonials" className="cv-auto py-14 sm:py-16 bg-[#FFF8EC] scroll-mt-20 border-t border-[#087B57]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Business Profile Trust Card */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-[#087B57]/15 mb-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 flex-col sm:flex-row text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#FFF8EC] flex items-center justify-center border border-[#FF8A24]/25 shadow-xs shrink-0">
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start flex-wrap">
                  <h2 className="text-xl font-extrabold text-[#087B57]">
                    Google Business Profile
                  </h2>
                  <span className="text-xs font-bold text-[#067067] inline-flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" /> Verified Listing
                  </span>
                </div>
                <p className="text-[#26352F]/75 text-sm mt-0.5 font-medium">
                  {GBP_CONFIG.BUSINESS_NAME} • {GBP_CONFIG.SHORT_ADDRESS}
                </p>

                <div className="flex items-center gap-2 mt-2 justify-center sm:justify-start flex-wrap">
                  <div className="flex text-[#B84D00]" aria-label="4.9 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-lg font-black text-[#26352F]">{GBP_CONFIG.FALLBACK_RATING}</span>
                  <span className="text-[#26352F]/70 text-sm">/ 5.0</span>
                  <span className="text-[#26352F]/30" aria-hidden="true">•</span>
                  <span className="text-sm font-bold text-[#087B57]">View live reviews on Google Maps</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <a
                id="write-google-review-btn"
                href={GBP_CONFIG.GOOGLE_WRITE_REVIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] bg-gradient-to-r from-[#C93B25] to-[#B84D00] hover:from-[#A92D1A] hover:to-[#963E00] text-white font-extrabold py-3 px-6 rounded-full shadow-xs transition-all text-sm flex items-center justify-center gap-2"
              >
                <MessageSquareCode className="w-4 h-4" aria-hidden="true" />
                <span>Write a Google Review</span>
              </a>
              <a
                id="read-google-reviews-btn"
                href={GBP_CONFIG.GOOGLE_BUSINESS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] bg-[#087B57] hover:bg-[#066647] text-white font-extrabold py-3 px-6 rounded-full shadow-xs transition-colors text-sm flex items-center justify-center gap-2"
              >
                <span>Open Google Business Profile</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Section Heading & Category Filter Tabs */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#B84D00] mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#C63621]" aria-hidden="true" />
            <span>Patient Feedback Highlights</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#087B57] mb-3">
            What Local Patients Say About Oracle Dental Clinic
          </h2>
          <p className="text-[#26352F]/75 max-w-2xl mx-auto leading-relaxed text-sm md:text-base">
            Feedback from families across Chipiyana Buzurg, Jaat Chowk, Shahberi, Chappraula, Crossings Republik,
            Noida Extension, and Lal Kuan. Read all verified, up-to-date reviews directly on our{' '}
            <a
              href={GBP_CONFIG.GOOGLE_BUSINESS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#087B57] hover:text-[#C63621] font-bold underline"
            >
              Google Business Profile
            </a>.
          </p>

          <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
            {CATEGORIES.map((category) => (
              <button
                type="button"
                key={category}
                aria-pressed={selectedCategory === category}
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleCount(6);
                }}
                className={`min-h-[40px] text-xs font-bold px-4 py-2 rounded-full transition-colors cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-[#C63621] text-white shadow-xs'
                    : 'bg-white text-[#26352F] hover:bg-[#E5F5EC] border border-[#087B57]/15'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review, idx) => (
            <div
              key={idx}
              id={`testimonial-card-${idx}`}
              className="bg-white p-6 rounded-2xl shadow-xs border border-[#087B57]/12 hover:shadow-md hover:border-[#067067]/50 transition-all flex flex-col justify-between relative overflow-hidden"
            >
              {review.highlight && (
                <div className="text-[11px] font-bold text-[#067067] mb-2">
                  {review.highlight}
                </div>
              )}

              <div>
                <div className="flex items-center gap-1 text-[#FF8A24] mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" aria-hidden="true" />
                  ))}
                </div>

                {review.treatment && (
                  <div className="text-xs font-bold text-[#087B57] mb-2">
                    Treatment: {review.treatment}
                  </div>
                )}

                <p className="text-[#26352F]/85 text-sm leading-relaxed italic mb-5">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-[#E5F5EC] pt-3.5 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#087B57] to-[#00A99D] rounded-full flex items-center justify-center text-white font-extrabold text-sm">
                    {review.avatarLetter}
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#26352F] leading-tight">{review.author}</h3>
                    {review.location && (
                      <div className="text-[11px] text-[#26352F]/60 font-medium">{review.location}</div>
                    )}
                  </div>
                </div>
                <span className="text-[10px] text-[#26352F]/55 font-semibold">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {filteredReviews.length > visibleCount && (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setVisibleCount((prev) => prev + 6)}
              className="bg-white hover:bg-[#E5F5EC] text-[#087B57] font-bold px-6 py-3 rounded-xl border border-[#087B57]/25 shadow-xs text-sm transition-colors cursor-pointer"
            >
              Show More Reviews ({filteredReviews.length - visibleCount} more)
            </button>
          </div>
        )}

        {/* Local Trust Card */}
        <div className="mt-12 bg-gradient-to-br from-[#087B57] via-[#066647] to-[#00A99D] text-white rounded-3xl p-6 md:p-10 shadow-lg flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="text-[#FFD36A] font-bold text-xs uppercase tracking-wider">
              Chipiyana Buzurg • Jaat Chowk • Shahberi • Crossings Republik
            </p>
            <h3 className="text-2xl md:text-3xl font-extrabold mt-2 mb-3 tracking-tight">
              Visit {GBP_CONFIG.BUSINESS_NAME}
            </h3>
            <p className="text-[#E5F5EC] text-sm leading-relaxed">
              {GBP_CONFIG.ADDRESS}. {GBP_CONFIG.HOURS}.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 text-xs text-white/95">
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <MapPin className="w-4 h-4 text-[#FFD36A] shrink-0" aria-hidden="true" />
                <span>Near Dolphin Public School, Jaat Chowk</span>
              </div>
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <Phone className="w-4 h-4 text-[#FFD36A] shrink-0" aria-hidden="true" />
                <a href={`tel:${GBP_CONFIG.PHONE}`} className="font-bold hover:underline">
                  Call: {GBP_CONFIG.PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <a
              id="trust-card-directions-btn"
              href={GBP_CONFIG.GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] bg-white hover:bg-[#FFF8EC] text-[#087B57] font-extrabold py-3.5 px-6 rounded-xl shadow-md transition-colors text-sm flex items-center justify-center gap-2"
            >
              <MapPin className="w-4 h-4 text-[#FF8A24]" aria-hidden="true" />
              <span>Get Directions on Maps</span>
            </a>
            <a
              id="trust-card-book-btn"
              href="#contact"
              className="min-h-[48px] bg-[#C63621] hover:bg-[#A82B18] text-white font-extrabold py-3.5 px-6 rounded-xl shadow-md transition-colors text-sm flex items-center justify-center gap-2"
            >
              <CalendarRange className="w-4 h-4" aria-hidden="true" />
              <span>Book Consultation</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
