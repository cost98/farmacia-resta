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

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json({ posts: PLACEHOLDER_POSTS, isPlaceholder: true });
  }

  try {
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=${fields}&limit=6&access_token=${token}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return NextResponse.json({ posts: PLACEHOLDER_POSTS, isPlaceholder: true });
    }

    const data = await res.json();
    const posts: InstagramPost[] = (data.data as InstagramPost[]).filter(
      (p) => p.media_type === 'IMAGE' || p.media_type === 'CAROUSEL_ALBUM'
    ).slice(0, 6);

    return NextResponse.json({ posts, isPlaceholder: false });
  } catch {
    return NextResponse.json({ posts: PLACEHOLDER_POSTS, isPlaceholder: true });
  }
}
