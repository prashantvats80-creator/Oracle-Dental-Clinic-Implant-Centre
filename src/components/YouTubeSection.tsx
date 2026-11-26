import React from 'react';
import { ExternalLink, BookOpen, ShieldCheck, HeartPulse } from 'lucide-react';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { trackClinicEvent } from '../utils/analytics';

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@oracledentalclinic0';

const YouTubeLogo: React.FC<{ className?: string }> = ({ className = 'w-7 h-5' }) => (
  <svg
    viewBox="0 0 28 20"
    className={className}
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M27.42 3.12a3.51 3.51 0 0 0-2.47-2.48C22.77 0 14 0 14 0S5.23 0 3.05.64A3.51 3.51 0 0 0 .58 3.12C0 5.32 0 10 0 10s0 4.68.58 6.88a3.51 3.51 0 0 0 2.47 2.48C5.23 20 14 20 14 20s8.77 0 10.95-.64a3.51 3.51 0 0 0 2.47-2.48C28 14.68 28 10 28 10s0-4.68-.58-6.88Z"
      fill="#FF0000"
    />
    <path d="M11.2 14.29 18.47 10 11.2 5.71v8.58Z" fill="#FFFFFF" />
  </svg>
);

const YouTubeSection: React.FC = () => {
  return (
    <section
      id="youtube-videos"
      aria-labelledby="youtube-section-heading"
      className="cv-auto py-14 sm:py-16 bg-[#E5F5EC] border-t border-[#087B57]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-[#087B57]/15 shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Left Column: Heading, Description & CTA */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 space-y-5">
              <div className="inline-flex items-center gap-2.5 text-xs font-extrabold tracking-wider uppercase text-[#B84D00]">
                <YouTubeLogo className="w-6 h-4 shrink-0" />
                <span>Official YouTube Channel</span>
              </div>

              <h2
                id="youtube-section-heading"
                className="text-2xl sm:text-4xl font-extrabold text-[#087B57] tracking-tight leading-tight"
              >
                Watch Our Dental Videos
              </h2>

              <p className="text-[#26352F]/80 text-sm sm:text-base leading-relaxed max-w-xl">
                Explore dental education, treatment information, oral health tips and helpful videos from Oracle Dental Clinic.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                <div className="flex items-center gap-2.5 bg-[#FFF8EC] border border-[#FF8A24]/25 rounded-2xl px-3.5 py-2.5">
                  <BookOpen className="w-4 h-4 text-[#FF8A24] shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-[#26352F]">Dental Education</span>
                </div>
                <div className="flex items-center gap-2.5 bg-[#E5F5EC] border border-[#087B57]/20 rounded-2xl px-3.5 py-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#087B57] shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-[#26352F]">Treatment Info</span>
                </div>
                <div className="flex items-center gap-2.5 bg-[#FFF8EC] border border-[#00A99D]/25 rounded-2xl px-3.5 py-2.5">
                  <HeartPulse className="w-4 h-4 text-[#00A99D] shrink-0" aria-hidden="true" />
                  <span className="text-xs font-bold text-[#26352F]">Oral Health Tips</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  id="homepage-youtube-cta"
                  href={YOUTUBE_CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Our YouTube Channel - Oracle Dental Clinic on YouTube"
                  onClick={() =>
                    trackClinicEvent('youtube_channel_click', {
                      placement: 'homepage_youtube_cta',
                      page_group: 'homepage',
                    })
                  }
                  className="inline-flex items-center justify-center gap-2.5 min-h-[50px] bg-gradient-to-r from-[#C93B25] to-[#B84D00] hover:from-[#A92D1A] hover:to-[#963E00] text-white font-extrabold text-sm sm:text-base px-7 py-3 rounded-full shadow-[0_8px_20px_rgba(201,59,37,0.28)] transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD36A]"
                >
                  <span className="bg-white rounded-md px-1.5 py-1 inline-flex items-center justify-center">
                    <YouTubeLogo className="w-5 h-3.5 shrink-0" />
                  </span>
                  <span>Visit Our YouTube Channel</span>
                  <ExternalLink className="w-4 h-4 shrink-0 opacity-90" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right Column: Lightweight Clickable Channel Preview Card (Zero Heavy Iframes / Zero Autoplay) */}
            <div className="lg:col-span-5 p-6 sm:p-10 lg:p-10 lg:pl-0">
              <a
                id="homepage-youtube-preview"
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Oracle Dental Clinic @oracledentalclinic0 — Watch official YouTube channel"
                onClick={() =>
                  trackClinicEvent('youtube_channel_click', {
                    placement: 'homepage_youtube_preview',
                    page_group: 'homepage',
                  })
                }
                className="group block rounded-2xl overflow-hidden border border-[#087B57]/15 bg-[#087B57] shadow-md hover:shadow-xl transition-shadow focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#FFD36A]"
              >
                {/* Channel Visual Stage */}
                <div className="relative aspect-video bg-gradient-to-br from-[#087B57] via-[#00A99D] to-[#066647] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                  <div
                    aria-hidden="true"
                    className="absolute -top-8 -right-8 w-28 h-28 rounded-full bg-[#FFD36A]/25 pointer-events-none"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full bg-[#FF8A24]/25 pointer-events-none"
                  />
                  <div
                    aria-hidden="true"
                    className="relative w-16 h-12 rounded-2xl bg-[#FF0000] group-hover:bg-[#E00000] group-hover:scale-105 transition-transform flex items-center justify-center shadow-lg border-2 border-white/80"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="#FFFFFF"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M8 5.14v14l11-7-11-7z" />
                    </svg>
                  </div>
                  <p className="relative mt-4 text-white font-extrabold text-base sm:text-lg tracking-tight">
                    Oracle Dental Clinic
                  </p>
                  <p className="relative text-[#FFD36A] font-semibold text-xs sm:text-sm mt-0.5">
                    @oracledentalclinic0
                  </p>
                </div>

                {/* Channel Identity Bar */}
                <div className="bg-[#FFF8EC] px-5 py-4 flex items-center justify-between gap-3 border-t border-[#087B57]/10">
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      aria-hidden="true"
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-[#087B57] to-[#00A99D] text-white font-bold text-base flex items-center justify-center shrink-0"
                    >
                      O
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-[#26352F] truncate">
                        {GBP_CONFIG.BUSINESS_NAME}
                      </p>
                      <p className="text-xs text-[#26352F]/70 truncate">
                        {GBP_CONFIG.DOCTOR_TITLE} • YouTube
                      </p>
                    </div>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 text-xs font-bold text-[#C63621] group-hover:underline">
                    <span>Watch</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;
