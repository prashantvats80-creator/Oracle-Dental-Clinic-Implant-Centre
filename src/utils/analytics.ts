/**
 * Privacy-safe analytics event dispatcher for GA4 (G-57S4LGPZ65) and GTM (GTM-P8XCSB9P).
 * Strictly excludes any PII (never sends patient names, phone numbers, or medical details).
 */

export type ClinicAnalyticsEvent =
  | 'whatsapp_click'
  | 'call_click'
  | 'appointment_cta_click'
  | 'directions_click'
  | 'service_expand';

interface EventPayload {
  placement: string;
  service_category?: string;
  interaction_label?: string;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackClinicEvent(eventName: ClinicAnalyticsEvent, payload: EventPayload): void {
  if (typeof window === 'undefined') return;

  const safeParams: Record<string, string> = {
    event_category: 'clinic_interaction',
    placement: payload.placement,
  };

  if (payload.service_category) {
    safeParams.service_category = payload.service_category;
  }
  if (payload.interaction_label) {
    safeParams.interaction_label = payload.interaction_label;
  }

  try {
    // Push structured non-PII event to dataLayer for GTM-P8XCSB9P
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...safeParams,
    });

    // Send non-PII event to GA4 G-57S4LGPZ65 without duplicating page_view
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        ...safeParams,
        send_to: 'G-57S4LGPZ65',
      });
    }
  } catch {
    // Never block navigation or dialer/WhatsApp launch if analytics fails
  }
}
