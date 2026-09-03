/**
 * TikTok Pixel & Events Helper for neotiktok.com (pt-BR / BRL)
 * Implements official TikTok Web Events specification with SHA-256 PII hashing.
 */

import { PUBLIC_API_BASE_URL } from '../config/api';

export type TikTokEventName =
  | 'ViewContent'
  | 'InitiateCheckout'
  | 'Contact'
  | 'ClickButton';

declare global {
  interface Window {
    ttq?: {
      page: () => void;
      track: (event: string, params?: Record<string, unknown>) => void;
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

export interface TikTokEventParams {
  content_id?: string;
  content_type?: 'product' | 'product_group';
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  event_id?: string;
  description?: string;
}

function createEventId(): string {
  if (typeof window !== 'undefined' && window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `${Date.now()}_${Math.random().toString(36).slice(2, 14)}`;
}

function readCookie(name: string): string | undefined {
  const prefix = `${encodeURIComponent(name)}=`;
  const entry = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(prefix));
  if (!entry) return undefined;
  try {
    return decodeURIComponent(entry.slice(prefix.length));
  } catch {
    return entry.slice(prefix.length);
  }
}

function getTikTokClickId(): string | undefined {
  try {
    const queryValue = new URLSearchParams(window.location.search).get('ttclid');
    if (queryValue) {
      window.sessionStorage.setItem('neo_ttclid', queryValue);
      return queryValue;
    }
    return window.sessionStorage.getItem('neo_ttclid') || undefined;
  } catch {
    return undefined;
  }
}

async function sendServerEvent(
  eventName: TikTokEventName,
  eventId: string,
  params: TikTokEventParams
): Promise<void> {
  if (
    typeof window === 'undefined' ||
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  ) {
    return;
  }

  const ttclid = getTikTokClickId();
  const ttp = readCookie('_ttp');
  const properties = { ...params };
  delete properties.event_id;
  await fetch(`${PUBLIC_API_BASE_URL}/events/tiktok`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    keepalive: true,
    credentials: 'omit',
    body: JSON.stringify({
      event: eventName,
      event_id: eventId,
      url: window.location.href,
      ...(document.referrer ? { referrer: document.referrer } : {}),
      ...(ttclid ? { ttclid } : {}),
      ...(ttp ? { ttp } : {}),
      ...(Object.keys(properties).length > 0 ? { properties } : {}),
    }),
  });
}

/**
 * Sends the same event_id through Pixel and Events API so TikTok can dedupe.
 * Browser tracking remains operational when the server path is unavailable.
 */
export function trackTikTokEvent(
  eventName: TikTokEventName,
  params: TikTokEventParams = {}
): string | undefined {
  if (typeof window === 'undefined' || !window.ttq) return undefined;
  const eventId = params.event_id ?? createEventId();
  const payload = { ...params, event_id: eventId };
  window.ttq.track(eventName, payload);
  void sendServerEvent(eventName, eventId, params).catch(() => undefined);
  return eventId;
}

export const trackViewContent = (params: TikTokEventParams) =>
  trackTikTokEvent('ViewContent', params);
export const trackInitiateCheckout = (params: TikTokEventParams) =>
  trackTikTokEvent('InitiateCheckout', params);
