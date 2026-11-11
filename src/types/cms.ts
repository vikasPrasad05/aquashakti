// src/types/cms.ts
// TypeScript Data Types for CFEdge-CMS Headless API

export interface CmsRecord<T = Record<string, any>> {
  id: string;
  collection_slug: string;
  workspace_id?: string;
  data: T;
  created_at: string;
  updated_at: string;
}

// Schema for collection 'Blog' (slug: 'blog')
export interface BlogData {
  title?: string;
  content?: string; // Rich text HTML;
  thumbnail?: string; // Cloudflare R2 Media URL;
  description?: string;
  published?: string; // ISO Date (YYYY-MM-DD);
}

export type BlogRecord = CmsRecord<BlogData>;

export interface CmsPagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface CmsListResponse<T = Record<string, any>> {
  data: CmsRecord<T>[];
  pagination: CmsPagination;
}

