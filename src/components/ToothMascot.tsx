import React from 'react';

interface ToothMascotProps {
  className?: string;
}

/**
 * Original Illustrated Cartoon Tooth Mascot for Oracle Dental Clinic
 * - White glossy tooth body, big expressive friendly eyes, cheerful smile,
 *   small arms with animated thumbs-up gesture, teal & orange details,
 *   and decorative "Smile Brighter!" callout.
 * - Pure lightweight inline SVG + compositor-only CSS animations.
 */
export const ToothMascot: React.FC<ToothMascotProps> = ({ className = '' }) => {
  return (
    <div className={`mascot-float relative select-none ${className}`}>
      {/* Decorative "Smile Brighter!" Speech Bubble */}
      <div className="mb-1.5 inline-flex items-center gap-1.5 bg-white text-[#087B57] font-extrabold text-xs sm:text-sm px-3.5 py-1.5 rounded-2xl shadow-md border-2 border-[#FFD36A] whitespace-nowrap">
        <svg
          viewBox="0 0 20 20"
          className="w-4 h-4 text-[#FF8A24] shrink-0 hero-sparkle"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10 1l2.2 5.8L18 9l-5.8 2.2L10 17l-2.2-5.8L2 9l5.8-2.2L10 1z" />
        </svg>
        <span>Smile Brighter!</span>
      </div>

      {/* Original Cartoon Tooth Character SVG */}
      <svg
        viewBox="0 0 200 200"
        className="w-28 h-28 sm:w-36 sm:h-36 drop-shadow-[0_12px_20px_rgba(8,123,87,0.22)]"
        role="img"
        aria-label="Cute smiling cartoon tooth mascot giving a thumbs up"
      >
        <defs>
          <linearGradient id="oracleToothBody" x1="25%" y1="10%" x2="80%" y2="95%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="72%" stopColor="#F5FDF9" />
            <stop offset="100%" stopColor="#D7F2E8" />
          </linearGradient>
          <linearGradient id="oracleTealBadge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00A99D" />
            <stop offset="100%" stopColor="#087B57" />
          </linearGradient>
        </defs>

        {/* Soft ground shadow */}
        <ellipse cx="96" cy="184" rx="44" ry="8" fill="#087B57" opacity="0.16" />

        {/* Twinkling sunshine sparkles around mascot */}
        <g className="hero-sparkle" fill="#FFD36A">
          <path d="M32 34l3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8z" />
        </g>
        <g className="hero-sparkle-delayed" fill="#FF8A24">
          <path d="M168 30l2.2 5.8 5.8 2.2-5.8 2.2-2.2 5.8-2.2-5.8-5.8-2.2 5.8-2.2 2.2-5.8z" />
        </g>
        <circle cx="176" cy="144" r="4.5" fill="#00A99D" opacity="0.75" />
        <circle cx="24" cy="136" r="4" fill="#FF654F" opacity="0.75" />

        {/* Left friendly waving arm */}
        <path
          d="M46 106 C28 102, 22 92, 27 83"
          fill="none"
          stroke="#087B57"
          strokeWidth="8"
          strokeLinecap="round"
        />
        <circle cx="26" cy="81" r="7.5" fill="#FFFFFF" stroke="#087B57" strokeWidth="3.5" />

        {/* Plump White Tooth Body */}
        <path
          d="M62 36
             C78 28, 90 38, 96 42
             C102 38, 114 28, 130 36
             C150 45, 156 70, 150 98
             C146 118, 141 146, 134 166
             C130 176, 117 177, 112 165
             C107 152, 103 141, 96 141
             C89 141, 85 152, 80 165
             C75 177, 62 176, 58 166
             C51 146, 46 118, 42 98
             C36 70, 42 45, 62 36 Z"
          fill="url(#oracleToothBody)"
          stroke="#087B57"
          strokeWidth="4.5"
          strokeLinejoin="round"
        />

        {/* Glossy enamel highlight */}
        <path
          d="M64 50 C55 56, 53 69, 55 82"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinecap="round"
          opacity="0.95"
        />
        <circle cx="57" cy="92" r="3" fill="#FFFFFF" opacity="0.9" />

        {/* Cute Teal & Orange Bowtie / Clinic Accent at base of smile */}
        <g transform="translate(96, 127)">
          <path d="M-16 -5 L-3 0 L-16 6 Z" fill="#FF8A24" stroke="#087B57" strokeWidth="2" strokeLinejoin="round" />
          <path d="M16 -5 L3 0 L16 6 Z" fill="#FF8A24" stroke="#087B57" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="0" cy="0.5" r="4.5" fill="url(#oracleTealBadge)" stroke="#087B57" strokeWidth="2" />
        </g>

        {/* Big Friendly Expressive Eyes */}
        <g>
          {/* Left Eye */}
          <ellipse cx="77" cy="84" rx="9" ry="10.5" fill="#26352F" />
          <circle cx="80" cy="80" r="3.4" fill="#FFFFFF" />
          <circle cx="74" cy="87" r="1.6" fill="#FFFFFF" opacity="0.85" />
          {/* Right Eye */}
          <ellipse cx="115" cy="84" rx="9" ry="10.5" fill="#26352F" />
          <circle cx="118" cy="80" r="3.4" fill="#FFFFFF" />
          <circle cx="112" cy="87" r="1.6" fill="#FFFFFF" opacity="0.85" />
          {/* Gentle friendly eyebrows */}
          <path d="M68 68 Q77 63 85 68" fill="none" stroke="#087B57" strokeWidth="2.8" strokeLinecap="round" />
          <path d="M107 68 Q115 63 124 68" fill="none" stroke="#087B57" strokeWidth="2.8" strokeLinecap="round" />
        </g>

        {/* Rosy Warm Coral Cheeks */}
        <ellipse cx="62" cy="98" rx="7.5" ry="4.5" fill="#FF654F" opacity="0.45" />
        <ellipse cx="130" cy="98" rx="7.5" ry="4.5" fill="#FF654F" opacity="0.45" />

        {/* Big Happy Smile */}
        <path
          d="M80 100 Q96 117 112 100"
          fill="#FF654F"
          stroke="#087B57"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M84 101 Q96 107 108 101"
          fill="#FFFFFF"
        />

        {/* Right Arm with Animated Thumbs-Up Gesture */}
        <g className="mascot-thumb-wave">
          <path
            d="M146 105 C160 104, 169 96, 171 84"
            fill="none"
            stroke="#087B57"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Teal cuff accent */}
          <circle cx="164" cy="94" r="5" fill="#00A99D" stroke="#087B57" strokeWidth="2" />
          {/* Cute hand giving Thumbs-Up */}
          <path
            d="M163 86
               C163 78, 167 74, 171 74
               L172 64
               C172 59, 179 59, 179 65
               L179 74
               C184 74, 187 78, 186 83
               C185 88, 182 91, 176 91
               L168 91
               C165 91, 163 89, 163 86 Z"
            fill="#FFFFFF"
            stroke="#087B57"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          {/* Tiny orange highlight star beside thumb */}
          <circle cx="187" cy="60" r="3" fill="#FFD36A" />
        </g>
      </svg>
    </div>
  );
};

export default ToothMascot;
