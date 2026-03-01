// components/ImageCarousel.tsx
"use client";

import { useState } from "react";

const images = [
  "/images/road-traffic-2.png",
  "/images/road-traffic-3.png",
  "/images/road-traffic-4.png",
  "/images/road-traffic-5.png",
  "/images/road-traffic-6.png",
  "/images/road-traffic-7.png",
];

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto px-0">
        {/* Headline */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Field‑Driven Traffic Insights
          </h2>
          <p className="text-muted text-lg max-w-lg mx-auto">
            Real‑world survey footage from our traffic video data extraction projects.
          </p>
        </div>

        {/* Full‑width 1920×800 image container */}
        <div className="relative h-96 md:h-[620px] lg:h-[620px] overflow-hidden rounded-2xl shadow-lg">
          <img
            src={images[currentIndex]}
            alt={`Traffic survey photo ${currentIndex + 1}`}
            className="w-full h-full object-cover object-center"
          />

          {/* Left arrow */}
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right arrow */}
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-md flex items-center justify-center transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex
                  ? "bg-primary w-4"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}