/**
 * TikTok Pixel & Events Helper for neotiktok.com (pt-BR / BRL)
 * Implements official TikTok Web Events specification with SHA-256 PII hashing.
 */

declare global {
  interface Window {
    ttq?: {
      page: () => void;
      track: (event: string, params?: Record<string, any>) => void;
      identify: (params: Record<string, string>) => void;
    };
  }
}

/**
 * Computes client-side SHA-256 hash for PII (email, phone, external_id)
 */
export async function sha256(value: string): Promise<string> {
  const clean = value.trim().toLowerCase();
  if (!clean) return '';
  if (typeof window === 'undefined' || !window.crypto?.subtle) return '';
  const buffer = new TextEncoder().encode(clean);
  const hash = await window.crypto.subtle.digest('SHA-256', buffer);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

export interface TikTokUserIdentify {
  email?: string;
  phoneNumber?: string;
  externalId?: string;
}

/**
 * Identifies the user with hashed PII for advanced matching
 */
export async function identifyTikTokUser(user: TikTokUserIdentify): Promise<void> {
  if (typeof window === 'undefined' || !window.ttq) return;

  const identifyPayload: Record<string, string> = {};

  if (user.email) {
    identifyPayload.email = await sha256(user.email);
  }
  if (user.phoneNumber) {
    identifyPayload.phone_number = await sha256(user.phoneNumber);
  }
  if (user.externalId) {
    identifyPayload.external_id = await sha256(user.externalId);
  }

  if (Object.keys(identifyPayload).length > 0) {
    window.ttq.identify(identifyPayload);
  }
}

export interface TikTokContentItem {
  content_id: string;
  content_type: 'product' | 'product_group';
  content_name: string;
}

export interface TikTokEventParams {
  contents?: TikTokContentItem[];
  content_id?: string;
  content_type?: string;
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  search_string?: string;
  status?: string;
  event_id?: string;
  description?: string;
  [key: string]: any;
}

/**
 * Generic safe tracker for TikTok events
 */
export function trackTikTokEvent(eventName: string, params?: TikTokEventParams): void {
  if (typeof window === 'undefined' || !window.ttq) return;
  const payload = {
    currency: 'BRL',
    ...params,
  };
  window.ttq.track(eventName, payload);
}

// Shortcut helpers for standard funnel events
export const trackViewContent = (params?: TikTokEventParams) => trackTikTokEvent('ViewContent', params);
export const trackAddToWishlist = (params?: TikTokEventParams) => trackTikTokEvent('AddToWishlist', params);
export const trackSearch = (searchString: string, params?: TikTokEventParams) =>
  trackTikTokEvent('Search', { search_string: searchString, ...params });
export const trackAddPaymentInfo = (params?: TikTokEventParams) => trackTikTokEvent('AddPaymentInfo', params);
export const trackAddToCart = (params?: TikTokEventParams) => trackTikTokEvent('AddToCart', params);
export const trackInitiateCheckout = (params?: TikTokEventParams) => trackTikTokEvent('InitiateCheckout', params);
export const trackPlaceAnOrder = (params?: TikTokEventParams) => trackTikTokEvent('PlaceAnOrder', params);
export const trackCompleteRegistration = (params?: TikTokEventParams) => trackTikTokEvent('CompleteRegistration', params);
export const trackPurchase = (params?: TikTokEventParams) => trackTikTokEvent('Purchase', params);
