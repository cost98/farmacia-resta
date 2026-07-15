import { NextResponse } from 'next/server';

export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

const PLACEHOLDER_POSTS: InstagramPost[] = [
  { id: '1', media_type: 'IMAGE', media_url: '', permalink: 'https://www.instagram.com', timestamp: new Date().toISOString(), caption: 'Prodotti per la tua salute' },
  { id: '2', media_type: 'IMAGE', media_url: '', permalink: 'https://www.instagram.com', timestamp: new Date().toISOString(), caption: 'Consulenza personalizzata' },
  { id: '3', media_type: 'IMAGE', media_url: '', permalink: 'https://www.instagram.com', timestamp: new Date().toISOString(), caption: 'Siamo qui per te' },
  { id: '4', media_type: 'IMAGE', media_url: '', permalink: 'https://www.instagram.com', timestamp: new Date().toISOString(), caption: 'Novità in farmacia' },
  { id: '5', media_type: 'IMAGE', media_url: '', permalink: 'https://www.instagram.com', timestamp: new Date().toISOString(), caption: 'La tua farmacia di fiducia' },
  { id: '6', media_type: 'IMAGE', media_url: '', permalink: 'https://www.instagram.com', timestamp: new Date().toISOString(), caption: 'Dal 1970 al vostro servizio' },
];

// Cache duration: 15 minutes
const CACHE_TTL = 900;

// Helper to get token from KV or env
async function getInstagramToken(): Promise<string | null> {
  // Try to get from Cloudflare KV first (updated by cron)
  // KV binding is available in Cloudflare Workers runtime via globalThis
  try {
    const kvNamespace = (globalThis as any).INSTAGRAM_KV;
    if (kvNamespace && typeof kvNamespace.get === 'function') {
      const token = await kvNamespace.get('access_token');
      if (token) return token;
    }
  } catch (e) {
    // KV not available (local dev or build time) - ignore
  }
  
  // Fallback to environment variable
  return process.env.INSTAGRAM_ACCESS_TOKEN || null;
}

export async function GET(request: Request) {
  const token = await getInstagramToken();

  if (!token) {
    return NextResponse.json(
      { posts: PLACEHOLDER_POSTS, isPlaceholder: true },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
        },
      }
    );
  }

  try {
    // Fetch data from Instagram (Next.js caches automatically with revalidate)
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&limit=6&access_token=${token}`,
      { next: { revalidate: CACHE_TTL } }
    );

    if (!res.ok) {
      return NextResponse.json(
        { posts: PLACEHOLDER_POSTS, isPlaceholder: true },
        {
          headers: {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
          },
        }
      );
    }

    const data = await res.json();
    const posts: InstagramPost[] = (data.data as InstagramPost[]).filter(
      (p) => p.media_type === 'IMAGE' || p.media_type === 'CAROUSEL_ALBUM'
    ).slice(0, 6);

    // Return response with cache headers
    return NextResponse.json(
      { posts, isPlaceholder: false },
      {
        headers: {
          'Cache-Control': `public, s-maxage=${CACHE_TTL}, stale-while-revalidate=300`,
        },
      }
    );
  } catch {
    return NextResponse.json(
      { posts: PLACEHOLDER_POSTS, isPlaceholder: true },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
        },
      }
    );
  }
}
