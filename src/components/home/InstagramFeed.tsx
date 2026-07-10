'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import type { InstagramPost } from '@/app/api/instagram/route';
import { social } from '@/lib/data/contatti';
import SectionIntro from '@/components/ui/SectionIntro';

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
        <SectionIntro
          eyebrow="Rimani aggiornato"
          title="Le nostre novità"
          highlight="novità"
          handwritten
          subtitle="Scopri consigli, promozioni e iniziative della farmacia direttamente dal nostro Instagram"
        />

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : isPlaceholder ? (
          /* Stato senza token — mostra placeholder visivi */
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
                >
                  {/* Icona Instagram al centro */}
                  <Instagram className="w-12 h-12 text-gray-400" />
                  {/* Overlay decorativo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>
              ))}
            </div>
          </>
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
          </>
        )}
      </div>
    </section>
  );
}
