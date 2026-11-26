import React from 'react';
import { ShieldCheck, Calendar, UserCheck } from 'lucide-react';
import { GBP_CONFIG } from '../config/googleBusinessProfile';

interface ClinicalReviewBoxProps {
  /** Direct, concise patient question answered immediately for AI search & quick readability */
  question: string;
  /** Evidence-based, clinically responsible 2-3 sentence direct answer (no guaranteed outcomes) */
  directAnswer: string;
  /** Optional last clinical review date label */
  lastUpdated?: string;
}

/**
 * Lightweight Answer-First Summary + Clinical Attribution Box
 * - Improves patient clarity, E-E-A-T attribution, and extractability for AI-assisted search.
 * - Uses only verified clinic and doctor credentials from GBP_CONFIG.
 */
const ClinicalReviewBox: React.FC<ClinicalReviewBoxProps> = ({
  question,
  directAnswer,
  lastUpdated = 'November 2026',
}) => {
  const base = import.meta.env.BASE_URL || '/';
  const baseRoot = base.endsWith('/') ? base : `${base}/`;

  return (
    <aside
      aria-label="Clinical Quick Answer and Medical Review Information"
      className="bg-[#FFF8EC] border border-[#087B57]/20 rounded-2xl p-5 sm:p-6 shadow-xs space-y-3"
    >
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-[#087B57]">
        <span className="inline-flex items-center gap-1.5 uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-[#067067] shrink-0" aria-hidden="true" />
          Quick Clinical Answer
        </span>
        <span className="inline-flex items-center gap-1.5 text-[#26352F]/75 font-semibold">
          <Calendar className="w-3.5 h-3.5 text-[#B84D00] shrink-0" aria-hidden="true" />
          Last Updated: {lastUpdated}
        </span>
      </div>

      <h2 className="text-lg sm:text-xl font-extrabold text-[#26352F] leading-snug">
        {question}
      </h2>

      <p className="text-sm sm:text-base text-[#26352F]/85 leading-relaxed">
        {directAnswer}
      </p>

      <div className="pt-3 border-t border-[#087B57]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#26352F]/80">
        <p className="inline-flex items-start sm:items-center gap-1.5">
          <UserCheck className="w-4 h-4 text-[#087B57] shrink-0 mt-0.5 sm:mt-0" aria-hidden="true" />
          <span>
            Clinically reviewed by{' '}
            <a
              href={`${baseRoot}#doctor-profile`}
              className="font-bold text-[#087B57] underline underline-offset-2 hover:text-[#066647]"
            >
              {GBP_CONFIG.DOCTOR_NAME} ({GBP_CONFIG.DOCTOR_QUALIFICATION}, Certified Oral Implantologist)
            </a>
            {' · '}Individual suitability is confirmed after in-person examination.
          </span>
        </p>
        <a
          href={`${baseRoot}#contact`}
          className="font-bold text-[#066D50] underline underline-offset-2 hover:text-[#05523A] shrink-0"
        >
          Clinic Location &amp; Contact
        </a>
      </div>
    </aside>
  );
};

export default ClinicalReviewBox;
