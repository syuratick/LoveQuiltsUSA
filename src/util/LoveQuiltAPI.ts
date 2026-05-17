// ─── Centralized API service for Love Quilts USA ───

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_CODE = import.meta.env.VITE_API_CODE;

// ─── Types ───

export interface Recipient {
  id: string;
  year: string;
  month: string;
  name: string;
  age: string;
  diagnosis: string;
  theme: string;
  color: string;
  dueDate: string;
  story: string;
  numberOfSignups: string;
  imageUrl?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// ─── Helper ───

async function apiFetch<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${BASE_URL}/${endpoint}`);
  url.searchParams.set('code', API_CODE);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

// ─── API Endpoints ───

/**
 * Fetch recipients/children by year
 */
export async function getRecipients(year: number): Promise<Recipient[]> {
  return apiFetch<Recipient[]>('getRecipients', { year: year.toString() });
}

/**
 * Fetch a single recipient by ID
 */
export async function getRecipientById(id: string): Promise<Recipient> {
  return apiFetch<Recipient>('getRecipientById', { id });
}

/**
 * Submit contact form
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  const url = new URL(`${BASE_URL}/submitContact`);
  url.searchParams.set('code', API_CODE);

  const res = await fetch(url.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
}

/**
 * Subscribe to newsletter
 */
export async function subscribeNewsletter(email: string): Promise<void> {
  const url = new URL(`${BASE_URL}/subscribe`);
  url.searchParams.set('code', API_CODE);

  const res = await fetch(url.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
}

/**
 * Fetch gallery images for a specific year
 */
export async function getGalleryImages(year: number): Promise<string[]> {
  return apiFetch<string[]>('getGalleryImages', { year: year.toString() });
}

/**
 * Request a quilt (form submission)
 */
export async function requestQuilt(data: Record<string, string>): Promise<void> {
  const url = new URL(`${BASE_URL}/requestQuilt`);
  url.searchParams.set('code', API_CODE);

  const res = await fetch(url.toString(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }
}
