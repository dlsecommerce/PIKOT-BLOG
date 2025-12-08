"use client";

import { useState, useEffect, useRef } from "react";

const banners = [
  { id: 1, image: "/banners/carrousel.svg" },
];

const extended = [
  banners[banners.length - 1],
  ...banners,
  banners[0],
];

export const BannerCarousel = () => {
  const sliderWidth = 1535;
  const sliderHeight = 394;

  const transitionDuration = 600;

  const [index, setIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const goNext = () => {
    setIsTransitioning(true);
    setIndex((i) => i + 1);
  };

  const goPrev = () => {
    setIsTransitioning(true);
    setIndex((i) => i - 1);
  };

  useEffect(() => {
    const interval = setInterval(goNext, 4000);
    return () => clearInterval(interval);
  }, []);

  // RESET INVISÍVEL (Bootstrap behavior)
  useEffect(() => {
    if (index === banners.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(1);
      }, transitionDuration);
    }

    if (index === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(banners.length);
      }, transitionDuration);
    }
  }, [index]);

  return (
    <section
      className="relative mx-auto select-none"
      style={{ width: sliderWidth, height: sliderHeight }}
    >
      <div
        className="overflow-hidden rounded-xl"
        style={{ width: sliderWidth, height: sliderHeight }}
      >
        <div
          className={`
            flex 
            ${isTransitioning ? "" : "carousel-no-transition"}
          `}
          style={{
            width: extended.length * sliderWidth,
            transform: `translateX(-${index * sliderWidth}px)`,
            transition: isTransitioning
              ? `transform ${transitionDuration}ms ease-in-out`
              : "none",
          }}
        >
          {extended.map((banner, i) => (
            <div
              key={i}
              className="bg-cover bg-center bg-no-repeat"
              style={{
                width: sliderWidth,
                height: sliderHeight,
                backgroundImage: `url(${banner.image})`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
