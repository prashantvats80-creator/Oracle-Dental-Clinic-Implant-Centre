/**
 * Privacy-safe conversion analytics dispatcher for GA4 (G-57S4LGPZ65) and GTM (GTM-P8XCSB9P).
 *
 * Healthcare privacy policy:
 * - Strictly excludes PII and sensitive health information.
 * - NEVER sends patient names, phone numbers, medical conditions, or specific treatment details
 *   to GA4 or GTM dataLayer.
 * - Normalizes legacy caller event names to standardized conversion event names.
 */

export type StandardClinicEvent =
  | 'click_call'
  | 'click_whatsapp'
  | 'appointment_button_click'
  | 'directions_click'
  | 'contact_form_submit'
  | 'service_page_view'
  | 'youtube_channel_click';

export type LegacyClinicEvent =
  | 'whatsapp_click'
  | 'call_click'
  | 'appointment_cta_click'
  | 'service_expand';

export type ClinicAnalyticsEvent = StandardClinicEvent | LegacyClinicEvent;

export type SafePageGroup =
  | 'homepage'
  | 'services_hub'
  | 'treatment_guide'
  | 'local_page'
  | 'cost_guide';

interface EventPayload {
  placement: string;
  page_group?: SafePageGroup;
  /**
   * Accepted for backward compatibility with existing component callers,
   * but intentionally stripped before dispatch so clinical/treatment details
   * are NEVER transmitted to analytics.
   */
  service_category?: string;
  /**
   * Accepted for backward compatibility, stripped before dispatch to prevent
   * leaking treatment or symptom slugs into analytics.
   */
  interaction_label?: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

const EVENT_NAME_MAP: Record<ClinicAnalyticsEvent, StandardClinicEvent> = {
  click_call: 'click_call',
  call_click: 'click_call',
  click_whatsapp: 'click_whatsapp',
  whatsapp_click: 'click_whatsapp',
  appointment_button_click: 'appointment_button_click',
  appointment_cta_click: 'appointment_button_click',
  directions_click: 'directions_click',
  contact_form_submit: 'contact_form_submit',
  service_page_view: 'service_page_view',
  service_expand: 'service_page_view',
  youtube_channel_click: 'youtube_channel_click',
};

const SAFE_PLACEMENT_PATTERN = /^[a-z0-9_-]{1,64}$/i;

function sanitizePlacement(raw: string): string {
  const cleaned = raw.trim().replace(/[^a-z0-9_-]/gi, '_').slice(0, 64);
  return SAFE_PLACEMENT_PATTERN.test(cleaned) ? cleaned : 'clinic_ui';
}

export function trackClinicEvent(eventName: ClinicAnalyticsEvent, payload: EventPayload): void {
  if (typeof window === 'undefined') return;

  const canonicalEvent = EVENT_NAME_MAP[eventName];

  // Only allowlisted, non-PII, non-clinical metadata is sent
  const safeParams: Record<string, string> = {
    event_category: 'clinic_interaction',
    placement: sanitizePlacement(payload.placement),
  };

  if (payload.page_group) {
    safeParams.page_group = payload.page_group;
  }

  try {
    // Push structured non-PII conversion event to dataLayer for GTM
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: canonicalEvent,
      ...safeParams,
    });

    // Send non-PII conversion event to GA4 G-57S4LGPZ65 (never duplicates page_view)
    if (typeof window.gtag === 'function') {
      window.gtag('event', canonicalEvent, {
        ...safeParams,
        send_to: 'G-57S4LGPZ65',
      });
    }
  } catch {
    // Never block navigation or dialer/WhatsApp launch if analytics fails
  }
}
