import React from 'react';

type Trend = 'up' | 'down' | 'neutral';
interface MetricsItem {
    id: string | number;
    title: string;
    value: string;
    description?: string;
    trend?: Trend;
    trendValue?: string;
}
interface KeyMetricsCarouselProps {
    items: MetricsItem[];
    itemsPerSlide?: number;
    autoRotateMs?: number;
    heading?: string;
    className?: string;
    valueFontSizePx?: number;
}
declare const KeyMetricsCarousel: React.FC<KeyMetricsCarouselProps>;

export { KeyMetricsCarousel, type KeyMetricsCarouselProps, type MetricsItem, type Trend, KeyMetricsCarousel as default };
