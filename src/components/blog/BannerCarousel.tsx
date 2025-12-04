"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const banners = [
  {
    id: 1,
    title: "Equipamentos Profissionais",
    description: "Os melhores equipamentos de áudio com até 30% OFF",
    image: "/banners/banner-1.jpg",
    link: "https://www.pikotshop.com.br/promocoes",
    cta: "Ver Promoções"
  },
  {
    id: 2,
    title: "Caixas de Som Ativas",
    description: "Potência e qualidade para seus eventos",
    image: "/banners/banner-2.jpg",
    link: "https://www.pikotshop.com.br/caixas-ativas",
    cta: "Conferir"
  },
  {
    id: 3,
    title: "Instrumentos Musicais",
    description: "Tudo para músicos e bandas",
    image: "/banners/banner-3.jpg",
    link: "https://www.pikotshop.com.br/instrumentos",
    cta: "Explorar"
  }
];

export const BannerCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Auto-play com pausa ao passar o mouse
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);

  const goNext = () =>
    setCurrentIndex((prev) => (prev + 1) % banners.length);

  return (
    <section
      className="relative w-full h-[350px] sm:h-[420px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-700 ease-out
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
          `}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${banner.image})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative h-full flex items-center justify-center px-6 sm:px-10">
            <div className="text-center text-white max-w-3xl animate-fade-in">
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
                {banner.title}
              </h2>

              <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8">
                {banner.description}
              </p>

              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent-hover text-accent-foreground"
              >
                <a href={banner.link} target="_blank" rel="noopener noreferrer">
                  {banner.cta}
                </a>
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 
        text-white opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={goPrev}
        aria-label="Banner anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 
        text-white opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={goNext}
        aria-label="Próximo banner"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all 
              ${index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/50 hover:bg-white/80"}
            `}
            aria-label={`Ir para banner ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
