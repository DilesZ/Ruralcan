import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface Slide {
  id: number;
  image: string;
  alt: string;
}

type HeroCarouselProps = {
  slides: Slide[];
  className?: string;
};

const HeroCarousel = ({ slides, className }: HeroCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, slides.length]);

  return (
    <section className={`relative w-full max-w-6xl mx-auto px-4 py-8 ${className ?? ''}`}>
      <div className="relative overflow-hidden rounded-2xl shadow-2xl">
        <div className="relative h-[300px] md:h-[500px]">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroCarousel;
