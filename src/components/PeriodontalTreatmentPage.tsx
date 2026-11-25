import React, { useState } from 'react';
import {
  PhoneCall,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Activity,
  Droplets,
  AlertTriangle,
  ShieldCheck,
  Clock,
  MapPin
} from 'lucide-react';
import { InteractiveButton } from './InteractiveButton';
import { Breadcrumbs } from './Breadcrumbs';
import { GBP_CONFIG } from '../config/googleBusinessProfile';

interface PeriodontalTreatmentPageProps {
  handleCall: () => void;
  handleWhatsApp: () => void;
  handleDirections?: () => void;
  navigateToHome: () => void;
  navigateToPath?: (path: string) => void;
}

export default function PeriodontalTreatmentPage({
  handleCall,
  handleWhatsApp,
  handleDirections,
  navigateToHome,
  navigateToPath
}: PeriodontalTreatmentPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    if (navigateToPath) {
      navigateToPath(path);
    } else {
      window.history.pushState({}, '', path);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  const faqs = [
    {
      q: 'What is the difference between gingivitis and periodontitis?',
      a: 'Gingivitis is early superficial gum inflammation caused by surface plaque and tartar, marked by red, puffy, bleeding gums without bone loss; it is generally reversible with professional scaling and consistent brushing. Periodontitis develops when inflammation extends deeper into the periodontal ligament and supporting jawbone, creating deep pockets and progressive bone resorption.'
    },
    {
      q: 'Why do my gums bleed when I brush, and should I stop brushing?',
      a: 'Bleeding gums are most commonly triggered by bacterial plaque irritating the gum margins (gingivitis). Do NOT stop brushing because your gums bleed—stopping allows more plaque to accumulate and worsens inflammation. Use a soft-bristled brush gently and schedule a clinical dental scaling.'
    },
    {
      q: 'What is scaling and root planing (deep cleaning)?',
      a: 'Ultrasonic scaling removes hardened tartar (calculus) above and around the gumline. Root planing reaches deeper inside periodontal pockets (under local anesthesia when needed) to clear subgingival deposits and smooth rough root surfaces so gum tissue can heal and reattach more closely.'
    },
    {
      q: 'How long does it take for bleeding gums to improve after scaling?',
      a: 'In cases of mild plaque-induced gingivitis, noticeable reduction in gum bleeding and puffiness often occurs within 7 to 14 days after professional scaling paired with gentle twice-daily home care. Advanced periodontitis requires staged follow-up and ongoing maintenance.'
    },
    {
      q: 'Can gum disease make adult teeth become loose?',
      a: 'Yes. The alveolar jawbone and periodontal fibers anchor your teeth in place. When untreated periodontitis destroys supporting bone, teeth gradually lose support and may begin to shift or feel mobile.'
    },
    {
      q: 'Can receding gums grow back on their own?',
      a: 'Receded gum tissue does not regenerate spontaneously. However, identifying the cause—such as hard-bristle scrubbing, tartar buildup, or bite trauma—helps halt further recession, while clinical desensitizers, protective bonding, or periodontal care protect exposed sensitive roots.'
    },
    {
      q: 'Is gum bleeding common during pregnancy?',
      a: 'Hormonal changes during pregnancy can heighten the gum response to plaque, resulting in pregnancy gingivitis with tender or easily bleeding gums. Gentle daily oral hygiene and clinically supervised cleaning are recommended.'
    },
    {
      q: 'What is the consultation fee and clinic timing at Oracle Dental Clinic?',
      a: 'Initial dental and periodontal consultation is ₹200 with Dr. Prashant Kumar Vats, BDS, MIDA at Shop No. 47, KTS Complex, Jaat Chowk, Chipiyana Buzurg, Ghaziabad. The clinic is Open Daily: 9:00 AM – 9:00 PM (Monday to Sunday).'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans leading-relaxed selection:bg-teal-100 selection:text-teal-900">
      <Breadcrumbs
        items={[
          { label: 'Dental Services', path: '/dental-services' },
          { label: 'Gum & Periodontal Treatment', path: '/periodontal-gum-treatment-ghaziabad' }
        ]}
        navigateToHome={navigateToHome}
        navigateToPath={navigateToPath}
        badge="Periodontics & Gum Care"
      />

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-slate-950 via-teal-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-teal-500/20 text-teal-200 border border-teal-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            <Activity className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
            <span>Gum Health &amp; Bone Protection • Oracle Dental Clinic, Ghaziabad</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Gum Disease &amp; Periodontal Treatment in Ghaziabad
          </h1>

          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed">
            Healthy gums protect the jawbone that holds every tooth firmly in place. Whether you are dealing with{' '}
            <strong>bleeding gums</strong>, <strong>swollen gums</strong>, <strong>gum recession</strong>, or advancing{' '}
            <strong>periodontitis</strong>, <strong>Dr. Prashant Kumar Vats, BDS, MIDA</strong> provides structured periodontal diagnosis, ultrasonic scaling, and deep cleaning at{' '}
            <strong>Oracle Dental Clinic &amp; Implant Center</strong> in Chipiyana Buzurg, Ghaziabad.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl text-xs">
            <div className="bg-white/10 p-3 rounded-xl border border-white/10">
              <span className="text-slate-300 block">Consultation Fee</span>
              <span className="text-amber-300 font-bold text-base">₹200</span>
            </div>
            <div className="bg-white/10 p-3 rounded-xl border border-white/10">
              <span className="text-slate-300 block">Attending Doctor</span>
              <span className="text-white font-bold text-sm">Dr. Prashant Kumar Vats, BDS, MIDA</span>
            </div>
            <div className="bg-white/10 p-3 rounded-xl border border-white/10 col-span-2 sm:col-span-1">
              <span className="text-slate-300 block">Clinic Hours</span>
              <span className="text-emerald-300 font-bold text-xs">{GBP_CONFIG.HOURS}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <InteractiveButton
              id="perio-call"
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-3.5 rounded-xl flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" aria-hidden="true" /> <span>Call {GBP_CONFIG.PHONE_DISPLAY}</span>
            </InteractiveButton>
            <InteractiveButton
              id="perio-wa"
              onClick={handleWhatsApp}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" /> <span>Book Gum Checkup</span>
            </InteractiveButton>
            {handleDirections && (
              <InteractiveButton
                id="perio-dir"
                onClick={handleDirections}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-5 py-3.5 rounded-xl flex items-center gap-2 text-sm"
              >
                <MapPin className="w-4 h-4 text-amber-400" aria-hidden="true" /> <span>Clinic Directions</span>
              </InteractiveButton>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {/* Section 1: Causes, Symptoms & Progression Stages */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-teal-700 text-xs font-bold uppercase tracking-wider">Causes &amp; Clinical Progression</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              How Gum Disease Develops: Gingivitis to Periodontitis
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
              Daily bacterial plaque that stays along the gumline mineralizes into hardened tartar (calculus) within 24 to 72 hours. Once calcified, tartar cannot be brushed off at home and progressively irritates gum tissue and supporting bone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-md uppercase">Stage 1 • Early</span>
              <h3 className="font-bold text-base text-slate-900">Gingivitis</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Plaque and surface tartar cause red, tender, puffy gums that bleed during brushing or flossing. Supporting jawbone is still intact, so gingivitis responds very well to routine ultrasonic scaling and improved home brushing.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold bg-rose-100 text-rose-900 px-2.5 py-0.5 rounded-md uppercase">Stage 2 • Moderate</span>
              <h3 className="font-bold text-base text-slate-900">Mild to Moderate Periodontitis</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Chronic inflammation breaks down connective tissue fibers, forming 4–6 mm periodontal pockets beneath the gumline where subgingival tartar collects and early alveolar bone resorption begins.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-[11px] font-bold bg-red-100 text-red-900 px-2.5 py-0.5 rounded-md uppercase">Stage 3 • Advanced</span>
              <h3 className="font-bold text-base text-slate-900">Advanced Periodontitis</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Deeper pockets (&gt;6 mm), substantial jawbone loss, persistent bad breath, recurrent gum abscesses, gum recession, and tooth mobility or drifting. Requires deep root planing and ongoing periodontal recall.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs text-slate-700">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong>Plaque &amp; Tartar Buildup:</strong> Incomplete brushing along the gumline lets bacteria calcify into calculus.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong>Smoking &amp; Tobacco:</strong> Restricts gum blood supply, masks early bleeding, and accelerates bone destruction.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong>Uncontrolled Diabetes:</strong> Weakens tissue healing and heightens inflammatory response inside gum pockets.
            </div>
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200">
              <strong>Hormonal &amp; Genetic Factors:</strong> Pregnancy hormone shifts or family predisposition increase gum susceptibility.
            </div>
          </div>
        </section>

        {/* Section 2: Dedicated Bleeding Gums Treatment Section */}
        <section id="bleeding-gums" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-wider">
            <Droplets className="w-4 h-4 text-rose-600" aria-hidden="true" />
            <span>Condition Focus 1</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Bleeding Gums Treatment
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            Spotting pink foam or blood while brushing or biting crisp foods is one of the earliest clinical signs of gingival inflammation. Because early bleeding is rarely painful, many patients delay evaluation until deeper periodontal damage occurs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Common Causes of Bleeding Gums</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span><strong>Plaque-Induced Gingivitis:</strong> Bacterial toxins inflame delicate gum margins so they bleed on light contact.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span><strong>Subgingival Periodontitis:</strong> Deep tartar deposits beneath the gumline trigger persistent bleeding and pocket swelling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span><strong>Hard-Bristle Scrubbing:</strong> Aggressive horizontal brushing mechanically abrades healthy gingival edges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" aria-hidden="true" />
                  <span><strong>Tobacco, Pregnancy or Medications:</strong> Systemic factors and blood thinners can amplify gum bleeding.</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <h3 className="font-bold text-amber-950 text-base">Key Clinical Advice for Bleeding Gums</h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  <strong>Do not stop brushing because your gums bleed.</strong> Avoiding the bleeding area lets plaque thicken rapidly, intensifying inflammation. Instead, switch to an ultra-soft or soft toothbrush with gentle circular strokes and book professional ultrasonic scaling to remove the hardened irritants.
                </p>
              </div>
              <div className="pt-2 border-t border-amber-200/80 text-xs font-bold text-teal-800">
                Related Guide:{' '}
                <a
                  href="/teeth-cleaning"
                  onClick={(e) => handleLinkClick(e, '/teeth-cleaning')}
                  className="underline hover:text-teal-950"
                >
                  Ultrasonic Teeth Cleaning &amp; Scaling
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Dedicated Swollen Gums Treatment Section */}
        <section id="swollen-gums" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4 text-amber-600" aria-hidden="true" />
            <span>Condition Focus 2</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Swollen Gums Treatment
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            Puffy, tender, or visibly enlarged gums—either generalized along the arch or localized around a single tooth—indicate active tissue irritation or infection that warrants a focused dental exam.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Trapped Food &amp; Tartar</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Fibrous food wedged between teeth or heavy calculus collars irritate local gum papillae, causing tender swelling that eases once professionally cleaned and flushed.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Wisdom Tooth Gum Flap (Pericoronitis)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Partially erupted back molars trap debris under an overlying gum flap, leading to painful back-jaw swelling and cheek tenderness. See{' '}
                <a href="/wisdom-tooth-extraction" onClick={(e) => handleLinkClick(e, '/wisdom-tooth-extraction')} className="text-blue-700 font-bold underline">
                  Wisdom Tooth Care
                </a>.
              </p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Localized Gum or Tooth Abscess</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A pimple-like boil on the gum, pus discharge, or cheek swelling signals a deeper infection requiring prompt clinical drainage. See{' '}
                <a href="/dental-abscess-treatment" onClick={(e) => handleLinkClick(e, '/dental-abscess-treatment')} className="text-blue-700 font-bold underline">
                  Dental Abscess Treatment
                </a>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Dedicated Gum Recession Treatment Section */}
        <section id="gum-recession" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-blue-600" aria-hidden="true" />
            <span>Condition Focus 3</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Gum Recession Treatment &amp; Exposed Root Protection
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl">
            Gum recession happens when the margin of gum tissue surrounding a tooth gradually wears away or pulls back, making teeth appear longer and uncovering the root surface underneath. Because tooth roots lack protective enamel, exposed root dentin is prone to sharp cold sensitivity and root-surface cavities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Primary Triggers of Receding Gums</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Chronic periodontal bone loss pulling the supporting gum attachment downward</li>
                <li>• Years of heavy horizontal scrubbing with medium or hard toothbrush bristles</li>
                <li>• Localized tartar collars, thin gum biotype, or heavy bite/grinding forces</li>
                <li>• Tobacco chewing or smoking irritating the gingival margin</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-base">Clinical Management &amp; Root Care</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Removing plaque/tartar and retraining gentle brushing to arrest further pullback</li>
                <li>• Clinical root desensitization and fluoridated care for{' '}
                  <a href="/tooth-sensitivity" onClick={(e) => handleLinkClick(e, '/tooth-sensitivity')} className="text-blue-700 font-bold underline">
                    Tooth Sensitivity Relief
                  </a>
                </li>
                <li>• Tooth-colored cervical composite bonding to shield notched, sensitive root necks</li>
                <li>• Periodontal surgical evaluation or referral where deep recession threatens tooth stability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 5: Diagnosis & Periodontal Treatment Options */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Clinical Protocols</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Diagnosis &amp; Periodontal Treatment Options at Oracle Dental Clinic
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
              Dr. Prashant Kumar Vats, BDS, MIDA evaluates gum pocket depth, bleeding tendency, calculus buildup, tooth mobility, and diagnostic X-rays before recommending the appropriate level of periodontal care:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-amber-400">Step 1</span>
              <h3 className="font-bold text-base text-white">Ultrasonic Scaling &amp; Polishing</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Water-cooled ultrasonic vibrations gently clear plaque and hardened tartar above and along the gumline without scratching enamel.
              </p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-cyan-400">Step 2</span>
              <h3 className="font-bold text-base text-white">Subgingival Root Planing</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Deep cleaning beneath the gumline (under local anesthesia when needed) to remove hidden calculus and smooth root surfaces in 4+ mm pockets.
              </p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-emerald-400">Step 3</span>
              <h3 className="font-bold text-base text-white">Antimicrobial Irrigation</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Flushing deep periodontal pockets with therapeutic rinses and prescribing short-term antimicrobial mouthwash only when clinically indicated.
              </p>
            </div>
            <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-5 space-y-2">
              <span className="text-xs font-bold text-rose-400">Step 4</span>
              <h3 className="font-bold text-base text-white">Maintenance &amp; Stabilization</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Re-evaluation after 4–6 weeks, splinting evaluation for loose teeth, and 3-to-6-month preventive recall visits to keep gums stable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6: Prevention & When to Consult */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Prevention &amp; Daily Oral Hygiene
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Brush twice daily for 2 minutes using a soft-bristled brush angled gently at 45° toward the gumline.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Clean between teeth daily with dental floss or interdental brushes where toothbrush bristles cannot reach.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Avoid smoking and smokeless tobacco, and keep blood sugar well controlled if diabetic.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" aria-hidden="true" />
                <span>Schedule routine ultrasonic scaling and gum screening every 6 months (or 3–4 months if managing periodontitis).</span>
              </li>
            </ul>
          </div>

          <div className="bg-rose-50/70 rounded-3xl p-6 sm:p-8 border border-rose-200 space-y-4">
            <h2 className="text-xl sm:text-2xl font-extrabold text-rose-950">
              When to Consult a Dentist Promptly
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-700">
              <li>• Gums that bleed repeatedly while brushing, flossing, or eating</li>
              <li>• Persistent red, swollen, or tender gum tissue lasting more than a few days</li>
              <li>• Pus around the gumline, a recurring gum boil, or persistent bad breath</li>
              <li>• Teeth appearing longer due to receding gums or new cold sensitivity at the gum margin</li>
              <li>• Adult teeth feeling loose, shifting apart, or changing how your bite feels</li>
            </ul>
          </div>
        </section>

        {/* Related Guides */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Related Treatment &amp; Cost Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs font-bold text-blue-700">
            {[
              { label: 'Teeth Cleaning & Ultrasonic Scaling', path: '/teeth-cleaning' },
              { label: 'Teeth Cleaning & Scaling Cost', path: '/teeth-cleaning-cost-ghaziabad' },
              { label: 'Loose Tooth Treatment', path: '/loose-tooth-treatment' },
              { label: 'Tooth Sensitivity Relief', path: '/tooth-sensitivity' },
              { label: 'Bad Breath (Halitosis) Treatment', path: '/bad-breath-treatment' },
              { label: 'Dental Abscess Treatment', path: '/dental-abscess-treatment' }
            ].map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleLinkClick(e, item.path)}
                className="p-3.5 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:underline flex justify-between items-center"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center">
            Frequently Asked Questions About Gum &amp; Periodontal Care
          </h2>
          <div className="max-w-3xl mx-auto space-y-3 pt-2">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center gap-4 bg-white hover:bg-slate-50"
                  aria-expanded={openFaq === idx}
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">{faq.q}</span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-teal-700 shrink-0" aria-hidden="true" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" aria-hidden="true" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="bg-slate-50/70 border-t border-slate-100 p-6 text-slate-600 text-sm leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Clinic Contact Banner */}
        <section className="bg-slate-950 text-white rounded-3xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-extrabold">Schedule Your Periodontal Evaluation</h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            {GBP_CONFIG.BUSINESS_NAME} • {GBP_CONFIG.ADDRESS} • Consultation fee ₹200.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-1">
            <InteractiveButton
              id="perio-bottom-call"
              onClick={handleCall}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold py-3 px-6 rounded-xl text-sm"
            >
              Call {GBP_CONFIG.PHONE_DISPLAY}
            </InteractiveButton>
            <InteractiveButton
              id="perio-bottom-wa"
              onClick={handleWhatsApp}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-xl text-sm"
            >
              WhatsApp Booking
            </InteractiveButton>
          </div>
          <p className="text-xs text-slate-400 flex items-center justify-center gap-1.5 pt-1">
            <Clock className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" /> {GBP_CONFIG.HOURS}
          </p>
        </section>
      </main>
    </div>
  );
}
