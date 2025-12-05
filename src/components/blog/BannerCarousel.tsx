"use client";

import { useState, useEffect, useRef } from "react";

const banners = [
  { id: 1, image: "/banners/banner-1.jpg" },
  { id: 2, image: "/banners/banner-2.jpg" },
  { id: 3, image: "/banners/banner-3.jpg" }
];

export const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Controle de arrasto
  const startX = useRef(0);
  const dragging = useRef(false);

  // Auto-play a cada 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Funções de navegação
  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Início do arrasto
  const handleStart = (clientX: number) => {
    dragging.current = true;
    startX.current = clientX;
  };

  // Fim do arrasto
  const handleEnd = (clientX: number) => {
    if (!dragging.current) return;

    const diff = clientX - startX.current;

    if (diff > 50) goPrev();      // arrastou para direita
    else if (diff < -50) goNext(); // arrastou para esquerda

    dragging.current = false;
  };

  return (
    <section
      className="relative w-[1342px] h-[344px] overflow-hidden rounded-xl mx-auto select-none"

      // Mouse drag
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseUp={(e) => handleEnd(e.clientX)}
      onMouseLeave={() => (dragging.current = false)}

      // Touch drag
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
    >
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-out 
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
          `}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${banner.image})` }}
          />
        </div>
      ))}
    </section>
  );
};
