// src/lib/cms.ts
// CFEdge-CMS Headless API Client Helper
import type { BlogRecord, CmsListResponse } from '../types/cms';
import fallbackBlogs from '../data/cmsBlogCache.json';

const PUBLIC_API_URL =
  import.meta.env.PUBLIC_API_URL ||
  (typeof process !== 'undefined' ? process.env.PUBLIC_API_URL : null) ||
  'https://cms-api.alokmahapatra2604.workers.dev';

const WORKSPACE_SLUG =
  import.meta.env.WORKSPACE_SLUG ||
  (typeof process !== 'undefined' ? process.env.WORKSPACE_SLUG : null) ||
  'aqua-shakti';

export interface FetchBlogOptions {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
  search?: string;
}

/**
 * Fetch all blogs from CFEdge-CMS with fallback resilience
 */
export async function getBlogPosts(options: FetchBlogOptions = {}): Promise<BlogRecord[]> {
  const { page = 1, limit = 100, sort = 'created_at', order = 'desc', search } = options;

  const url = new URL(`${PUBLIC_API_URL}/api/v1/${WORKSPACE_SLUG}/content/blog`);
  url.searchParams.set('page', String(page));
  url.searchParams.set('limit', String(limit));
  url.searchParams.set('sort', sort);
  url.searchParams.set('order', order);
  if (search) {
    url.searchParams.set('search', search);
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(url.toString(), {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      console.warn(`[CMS API] HTTP error ${res.status} from ${url.toString()}, using cache.`);
      return (fallbackBlogs as unknown as BlogRecord[]) || [];
    }

    const json = (await res.json()) as CmsListResponse<any>;

    if (json && Array.isArray(json.data) && json.data.length > 0) {
      // Only update cache file on disk if content actually changed (prevents Vite HMR reload loops on navigation)
      try {
        if (typeof process !== 'undefined' && process.versions?.node) {
          const fs = await import('node:fs');
          const path = await import('node:path');
          const cachePath = path.resolve(process.cwd(), 'src/data/cmsBlogCache.json');
          const nextJson = JSON.stringify(json.data, null, 2);
          const existingJson = fs.existsSync(cachePath) ? fs.readFileSync(cachePath, 'utf8') : '';
          if (existingJson !== nextJson) {
            fs.writeFileSync(cachePath, nextJson, 'utf8');
          }
        }
      } catch (e) {
        // ignore disk write errors
      }
      return json.data as BlogRecord[];
    }

    return (json?.data as BlogRecord[]) || [];
  } catch (err: any) {
    console.warn(`[CMS API] Fetch failed (${err?.message || err}), using cache.`);
    return (fallbackBlogs as unknown as BlogRecord[]) || [];
  }
}

/**
 * Fetch a single blog record by ID from CFEdge-CMS
 */
export async function getBlogPostById(id: string): Promise<BlogRecord | null> {
  const cleanId = id.trim();
  const url = `${PUBLIC_API_URL}/api/v1/${WORKSPACE_SLUG}/content/blog/${encodeURIComponent(cleanId)}?populate=true`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    });

    clearTimeout(timeoutId);

    if (!res.ok) {
      // Find in fallback cache
      const found = (fallbackBlogs as unknown as BlogRecord[]).find((b) => b.id.trim() === cleanId);
      return found || null;
    }

    const raw = (await res.json()) as any;
    const record: BlogRecord | null = raw?.id ? raw : raw?.data?.id ? raw.data : null;
    if (record) return record;

    const found = (fallbackBlogs as unknown as BlogRecord[]).find((b) => b.id.trim() === cleanId);
    return found || null;
  } catch (err: any) {
    const found = (fallbackBlogs as unknown as BlogRecord[]).find((b) => b.id.trim() === cleanId);
    return found || null;
  }
}
