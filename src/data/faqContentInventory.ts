import { DENTAL_KNOWLEDGE_FAQS, FAQCategoryName, FAQSearchIntent } from './dentalKnowledgeHubFaqs';

/**
 * 500-FAQ Long-Term Phased Content Strategy & Inventory Tracker
 * For Oracle Dental Clinic & Implant Center
 */

export interface DraftOrCandidateFAQ {
  id: string;
  proposedQuestion: string;
  targetCategory: FAQCategoryName;
  searchIntent: FAQSearchIntent;
  relatedPageUrl: string;
  phase: 'Phase 2 (200–250 FAQs)' | 'Phase 3 (300–400 FAQs)' | 'Phase 4 (Toward 500 FAQs)';
  status:
    | 'Draft — Pending Clinical Review'
    | 'Needs Additional Research'
    | 'Duplicate Candidate (Rejected / Merged)'
    | 'Awaiting Search Console Query Validation';
  notes: string;
}

export const FAQ_EXPANSION_PHASES = [
  {
    phase: 'Phase 1 (Current Active Release)',
    targetCount: '130 Published High-Quality FAQs',
    status: 'Active & Published on /dental-faqs',
    focus:
      '28 core clinical, cost, local SEO, safety, and recovery categories covering implants, Delhi NCR/Ghaziabad/Noida pricing, RCT, crowns, veneers, aligners, oral surgery, pediatric care, and emergency triage.',
  },
  {
    phase: 'Phase 2 (200–250 FAQs)',
    targetCount: '+70 to 120 New FAQs',
    status: 'Planned — Driven by Google Search Console & Reception Desk Queries',
    focus:
      'Long-tail patient queries with high impressions in Google Search Console, systemic health interactions (thyroid, osteoporosis, asthma), and deeper tooth-by-tooth restorative comparisons.',
  },
  {
    phase: 'Phase 3 (300–400 FAQs)',
    targetCount: '+100 to 150 New FAQs',
    status: 'Planned — Unanswered AI Search & Symptom-Cluster Expansion',
    focus:
      'Granular post-operative day-by-day recovery questions, orthodontic appliance troubleshooting, geriatric prosthodontics, and preventive nutrition.',
  },
  {
    phase: 'Phase 4 (Up to 500 FAQs)',
    targetCount: 'Up to 500 Distinct FAQs (Only When Clinically Distinct)',
    status: 'Long-Term Goal — Strict Anti-Duplication Gate',
    focus:
      'Expanded only when each new entry passes duplicate-meaning checks, clinical accuracy review by Dr. Prashant Kumar Vats, and genuine patient utility verification.',
  },
];

export const FAQ_CONTENT_INVENTORY_CANDIDATES: DraftOrCandidateFAQ[] = [
  {
    id: 'cand-p2-001',
    proposedQuestion: 'Can patients taking oral bisphosphonates for osteoporosis get dental implants safely?',
    targetCategory: 'Dental Treatment Safety',
    searchIntent: 'Treatment Decision',
    relatedPageUrl: '/dental-implants',
    phase: 'Phase 2 (200–250 FAQs)',
    status: 'Draft — Pending Clinical Review',
    notes: 'Requires Dr. Prashant Kumar Vats review of MRONJ risk stratification protocol before publishing.',
  },
  {
    id: 'cand-p2-002',
    proposedQuestion: 'What is the difference between a surgical guide (guided implant surgery) and freehand implant placement?',
    targetCategory: 'Dental Implants',
    searchIntent: 'Commercial Investigation',
    relatedPageUrl: '/dental-implants',
    phase: 'Phase 2 (200–250 FAQs)',
    status: 'Draft — Pending Clinical Review',
    notes: 'Awaiting confirmation of 3D surgical stent workflow details at Oracle Dental Clinic.',
  },
  {
    id: 'cand-p2-003',
    proposedQuestion: 'How do flexible Valplast partial dentures compare with cast partial metal-framework dentures?',
    targetCategory: 'Dental Treatment Costs and Payment Questions',
    searchIntent: 'Commercial Investigation',
    relatedPageUrl: '/dentures',
    phase: 'Phase 2 (200–250 FAQs)',
    status: 'Draft — Pending Clinical Review',
    notes: 'Compare clasp visibility, rigidity, and relining options.',
  },
  {
    id: 'cand-p2-004',
    proposedQuestion: 'What is internal tooth bleaching (walking bleach technique) for a dark root-canal-treated front tooth?',
    targetCategory: 'Teeth Whitening',
    searchIntent: 'Informational',
    relatedPageUrl: '/black-tooth',
    phase: 'Phase 2 (200–250 FAQs)',
    status: 'Needs Additional Research',
    notes: 'Compile sodium perborate vs carbamide peroxide walking bleach clinical steps and cervical barrier safety.',
  },
  {
    id: 'cand-p2-005',
    proposedQuestion: 'Can thyroid disorders (hypothyroidism or hyperthyroidism) affect gum healing or local dental anesthesia?',
    targetCategory: 'Dental Treatment Safety',
    searchIntent: 'Informational',
    relatedPageUrl: '/dental-services',
    phase: 'Phase 2 (200–250 FAQs)',
    status: 'Needs Additional Research',
    notes: 'Verify epinephrine precaution thresholds in uncontrolled hyperthyroidism.',
  },
  {
    id: 'cand-dup-001',
    proposedQuestion: 'What is the cost of dental implants in Crossings Republik vs Shahberi?',
    targetCategory: 'Dental Implant Cost in Ghaziabad',
    searchIntent: 'Cost Comparison',
    relatedPageUrl: '/dental-implant-cost-ghaziabad',
    phase: 'Phase 2 (200–250 FAQs)',
    status: 'Duplicate Candidate (Rejected / Merged)',
    notes: 'Merged into dicg-001 and dicne-001 to prevent thin city-name-swap duplication.',
  },
];

export function getFAQInventorySummary() {
  const totalPublished = DENTAL_KNOWLEDGE_FAQS.length;
  const pricingEntries = DENTAL_KNOWLEDGE_FAQS.filter((f) => Boolean(f.pricingDate)).length;
  const draftPendingReview = FAQ_CONTENT_INVENTORY_CANDIDATES.filter(
    (c) => c.status === 'Draft — Pending Clinical Review'
  ).length;
  const needsResearch = FAQ_CONTENT_INVENTORY_CANDIDATES.filter(
    (c) => c.status === 'Needs Additional Research'
  ).length;
  const rejectedDuplicates = FAQ_CONTENT_INVENTORY_CANDIDATES.filter(
    (c) => c.status === 'Duplicate Candidate (Rejected / Merged)'
  ).length;

  return {
    totalPublished,
    pricingEntries,
    draftPendingReview,
    needsResearch,
    rejectedDuplicates,
    lastPricingAudit: 'November 2026',
    clinicalVerificationNote:
      'Authored with Dr. Prashant Kumar Vats (BDS, MIDA) clinical guidance; formal line-by-line post-deployment sign-off date remains pending until logged by the doctor.',
  };
}
