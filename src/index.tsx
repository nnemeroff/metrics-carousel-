import React, { useEffect, useMemo, useState } from 'react';

export type Trend = 'up' | 'down' | 'neutral';

export interface MetricsItem {
  id: string | number;
  title: string;
  value: string; // already formatted string, may include HTML (e.g., superscripts)
  description?: string;
  trend?: Trend;
  trendValue?: string; // already formatted like +1.2% or -15 bps
}

export interface KeyMetricsCarouselProps {
  items: MetricsItem[];
  itemsPerSlide?: number; // default 3
  autoRotateMs?: number; // default 7000
  heading?: string; // default "Key Commission Insights"
  className?: string;
  valueFontSizePx?: number; // default 30
}

function getTrendIcon(trend?: Trend): string {
  if (trend === 'up') return '↗';
  if (trend === 'down') return '↘';
  return '';
}

function getTrendColor(trend?: Trend): string {
  if (trend === 'up') return 'text-green-600';
  if (trend === 'down') return 'text-red-600';
  return 'text-gray-600';
}

export const KeyMetricsCarousel: React.FC<KeyMetricsCarouselProps> = ({
  items,
  itemsPerSlide = 3,
  autoRotateMs = 7000,
  heading = 'Key Commission Insights',
  className,
  valueFontSizePx = 30,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const numSlides = useMemo(() => {
    return items.length > 0 ? Math.ceil(items.length / itemsPerSlide) : 1;
  }, [items.length, itemsPerSlide]);

  useEffect(() => {
    if (numSlides <= 1) return; // no rotation if single slide
    const id = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % numSlides);
    }, autoRotateMs);
    return () => window.clearInterval(id);
  }, [numSlides, autoRotateMs]);

  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <div className={className ?? ''}>
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {heading && (
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{heading}</h2>
          )}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: numSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className={`grid grid-cols-1 ${itemsPerSlide === 2 ? 'md:grid-cols-2' : ''} ${itemsPerSlide === 3 ? 'md:grid-cols-3' : ''} ${itemsPerSlide === 4 ? 'md:grid-cols-4' : ''} gap-6`}>
                      {items
                        .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                        .map((it) => (
                          <div key={it.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                            <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-wider mb-2" style={{ fontSize: '14px' }}>
                              {it.title}
                            </h3>
                            <div className="flex items-baseline gap-2 mb-3">
                              <p className="font-bold text-gray-900" style={{ fontSize: `${valueFontSizePx}px` }} dangerouslySetInnerHTML={{ __html: it.value }} />
                              {it.trend && it.trendValue && (
                                <span className={`text-sm font-medium ${getTrendColor(it.trend)}`}>
                                  {getTrendIcon(it.trend)} {it.trendValue.replace(/^[+-]/, '')}
                                </span>
                              )}
                            </div>
                            {it.description && (
                              <p className="text-sm text-gray-600">{it.description}</p>
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {numSlides > 1 && (
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: numSlides }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${currentSlide === idx ? 'bg-blue-600' : 'bg-gray-300'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyMetricsCarousel;


