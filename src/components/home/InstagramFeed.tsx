'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import type { InstagramPost } from '@/app/api/instagram/route';

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [isPlaceholder, setIsPlaceholder] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/instagram')
      .then((r) => r.json())
      .then((data) => {
        setPosts(data.posts);
        setIsPlaceholder(data.isPlaceholder);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Seguici su Instagram</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Aggiornamenti, consigli e novità dalla nostra farmacia</p>
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : isPlaceholder ? (
          /* Stato senza token — invito a seguire */
          <div className="flex flex-col items-center justify-center py-16 gap-6">
            <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#00746b' }}>
              <Instagram className="w-10 h-10 text-white" />
            </div>
            <div className="text-center">
              <p className="text-gray-700 font-semibold text-lg">Siamo su Instagram!</p>
              <p className="text-gray-500 mt-1">Seguici per aggiornamenti, consigli e offerte speciali</p>
            </div>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#00746b' }}
            >
              <Instagram className="w-4 h-4" />
              Seguici su Instagram
            </a>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {posts.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100"
                >
                  <Image
                    src={post.thumbnail_url ?? post.media_url}
                    alt={post.caption ?? 'Post Instagram Farmacia Resta'}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  {/* Overlay al hover */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Instagram className="w-8 h-8 text-white drop-shadow" />
                  </div>
                </a>
              ))}
            </div>
            {/* CTA */}
            <div className="text-center mt-10">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#00746b' }}
              >
                <Instagram className="w-4 h-4" />
                Vedi tutti i post
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
