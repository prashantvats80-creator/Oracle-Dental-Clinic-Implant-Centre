import React from 'react';
import { ArrowLeft, ShieldCheck, PhoneCall, MapPin, Clock, MailCheck } from 'lucide-react';
import { GBP_CONFIG } from '../config/googleBusinessProfile';
import { trackClinicEvent } from '../utils/analytics';

interface PrivacyPolicyPageProps {
  navigateToHome: () => void;
  navigateToPath: (path: string) => void;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  navigateToHome,
  navigateToPath,
}) => {
  return (
    <article className="bg-[#FFF8EC] py-10 sm:py-14">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#26352F]/75">
            <li>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToHome();
                }}
                className="font-semibold text-[#087B57] hover:text-[#FF654F] transition-colors inline-flex items-center gap-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Home</span>
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="font-bold text-[#26352F]">
              Privacy Policy
            </li>
          </ol>
        </nav>

        <header className="bg-gradient-to-br from-[#087B57] via-[#00A99D] to-[#087B57] text-white rounded-3xl p-7 sm:p-10 shadow-md mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#FFD36A] mb-3">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>Patient Privacy &amp; Website Transparency</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Privacy Policy – {GBP_CONFIG.BUSINESS_NAME}
          </h1>
          <p className="text-sm sm:text-base text-[#E5F5EC] mt-3 max-w-2xl leading-relaxed">
            How we handle website analytics, appointment enquiries, WhatsApp messages, and AI
            Dental Assistant interactions when you visit oracledentals.netlify.app.
          </p>
          <p className="text-xs text-[#FFD36A] font-semibold mt-4">
            Effective Date: November 2026 · Clinic Location: Chipiyana Buzurg, Ghaziabad, UP 201009
          </p>
        </header>

        <div className="bg-white rounded-3xl border border-[#087B57]/12 shadow-sm p-6 sm:p-10 space-y-8 text-sm sm:text-base text-[#26352F]/85 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#087B57]">
              1. Who We Are
            </h2>
            <p>
              This website is operated by <strong>{GBP_CONFIG.BUSINESS_NAME}</strong>, led by{' '}
              <strong>
                {GBP_CONFIG.DOCTOR_NAME} ({GBP_CONFIG.DOCTOR_QUALIFICATION},{' '}
                {GBP_CONFIG.DOCTOR_ROLE})
              </strong>
              , physically located at {GBP_CONFIG.ADDRESS}.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#087B57]">
              2. Information You Voluntarily Share
            </h2>
            <p>
              Our website is designed as an informational resource and direct appointment gateway.
              We do not require user accounts or store patient health records in a website database.
              You only share personal details when you voluntarily choose to contact us:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Phone Calls &amp; WhatsApp Enquiries:</strong> Clicking a Call button dials{' '}
                {GBP_CONFIG.PHONE_DISPLAY}. Clicking a WhatsApp button or submitting the callback
                enquiry form opens WhatsApp on your device so you can send your name, phone number,
                and preferred appointment time directly to our clinic reception.
              </li>
              <li>
                <strong>AI Dental Assistant:</strong> If you open our optional Botpress AI Dental
                Assistant widget, the questions you type are processed by Botpress to answer general
                dental clinic queries (such as clinic hours, directions, and general treatment
                information). Please avoid sharing sensitive personal identification numbers or
                confidential medical records inside web chat.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#087B57]">
              3. Privacy-Safe Website Analytics
            </h2>
            <p>
              We use Google Analytics 4 and Google Tag Manager to understand aggregate website
              performance, such as which informational pages are helpful and how visitors reach our
              appointment buttons. Our analytics events are configured to avoid sending personal
              names, phone numbers, email addresses, or private patient symptom descriptions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#087B57]">
              4. External Links &amp; Third-Party Services
            </h2>
            <p>
              Our website links to official clinic pages on Google Business Profile / Google Maps,
              WhatsApp, YouTube, Facebook, and Instagram. When you navigate to those external
              platforms, your interaction is governed by their respective privacy policies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#087B57]">
              5. Medical &amp; Dental Information Disclaimer
            </h2>
            <p>
              All articles, treatment guides, cost factor breakdowns, and AI Dental Assistant
              responses on this website are provided for general patient education only. They do not
              replace an in-person clinical examination, digital X-ray assessment, or individualized
              diagnosis by {GBP_CONFIG.DOCTOR_TITLE}.
            </p>
          </section>

          <section className="space-y-4 bg-[#E5F5EC]/60 border border-[#087B57]/15 rounded-2xl p-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-[#087B57] flex items-center gap-2">
              <MailCheck className="w-5 h-5 text-[#FF8A24]" aria-hidden="true" />
              <span>6. Contact Our Clinic</span>
            </h2>
            <p className="text-sm text-[#26352F]/85">
              For questions about this privacy policy, clinic records, or appointments, contact us
              directly:
            </p>
            <ul className="space-y-2 text-sm text-[#26352F]">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF654F] mt-0.5 shrink-0" aria-hidden="true" />
                <span>{GBP_CONFIG.ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-[#087B57] shrink-0" aria-hidden="true" />
                <a
                  href={GBP_CONFIG.CALL_URL}
                  onClick={() => trackClinicEvent('call_click', { placement: 'privacy_policy_call' })}
                  className="font-bold text-[#087B57] hover:text-[#FF654F] underline underline-offset-2"
                >
                  {GBP_CONFIG.PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#00A99D] shrink-0" aria-hidden="true" />
                <span className="font-semibold">{GBP_CONFIG.HOURS}</span>
              </li>
            </ul>
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="/dental-services"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToPath('/dental-services');
                }}
                className="min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#087B57] hover:bg-[#066647] text-white text-xs sm:text-sm font-bold transition-colors"
              >
                Explore Dental Services
              </a>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  navigateToHome();
                }}
                className="min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white hover:bg-[#FFF8EC] text-[#087B57] border border-[#087B57]/25 text-xs sm:text-sm font-bold transition-colors"
              >
                Return to Homepage
              </a>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default PrivacyPolicyPage;
