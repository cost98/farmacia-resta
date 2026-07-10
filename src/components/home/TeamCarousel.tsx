'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/team/MAD_0691.jpg',
  '/images/team/MAD_0695.jpg',
  '/images/team/MAD_0697.jpg',
  '/images/team/MAD_0703.jpg',
  '/images/team/MAD_0725.jpg',
  '/images/team/MAD_0762.jpg',
  '/images/team/MAD_0784.jpg',
  '/images/team/MAD_0850.jpg',
  '/images/team/MAD_0938.jpg',
  '/images/team/MAD_0953.jpg',
  '/images/team/MAD_0960.jpg',
  '/images/team/MAD_0963.jpg',
  '/images/team/MAD_0965.jpg',
  '/images/team/MAD_0983.jpg',
  '/images/team/MAD_0993.jpg',
  '/images/team/MAD_1004.jpg',
  '/images/team/MAD_1007.jpg',
  '/images/team/MAD_1023.jpg',
  '/images/team/MAD_1025.jpg',
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg group">
      {/* Images */}
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Team Farmacia Resta - Foto ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        aria-label="Foto precedente"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
        aria-label="Foto successiva"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? 'w-8 h-2 bg-white'
                : 'w-2 h-2 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Vai alla foto ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
