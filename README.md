# @clarivant/metrics-carousel

Reusable Key Metrics carousel component (Tailwind CSS compatible).

## Install

If published to npm:

```bash
npm i @clarivant/metrics-carousel
```

If used via workspace/monorepo, add to your workspace and run build.

## Peer dependencies

- react >= 18
- react-dom >= 18
- Tailwind CSS optional but recommended for styling classes used in the component

## Usage

```tsx
import { KeyMetricsCarousel, type MetricsItem } from '@clarivant/metrics-carousel';

const items: MetricsItem[] = [
  { id: 1, title: 'COMMISSIONS PAID BY FUNDS', value: '$1.23B', description: 'TTM total', trend: 'up', trendValue: '+3.2%' },
  { id: 2, title: 'Broker Allocated Commissions', value: '64.1%', description: 'TTM allocated', trend: 'down', trendValue: '-12 bps' },
  { id: 3, title: '# of Accounts Covered', value: '523', description: 'Active MCs' },
  // ...
];

export default function Page() {
  return (
    <KeyMetricsCarousel
      items={items}
      itemsPerSlide={3}
      autoRotateMs={7000}
      heading="Key Commission Insights"
      valueFontSizePx={30}
    />
  );
}
```

## Props

- `items`: MetricsItem[] (required)
- `itemsPerSlide`: number (default: 3)
- `autoRotateMs`: number (default: 7000)
- `heading`: string (default: 'Key Commission Insights')
- `className`: string
- `valueFontSizePx`: number (default: 30)

## Types

```ts
export type Trend = 'up' | 'down' | 'neutral';

export interface MetricsItem {
  id: string | number;
  title: string;
  value: string; // formatted display; supports HTML via dangerouslySetInnerHTML
  description?: string;
  trend?: Trend;
  trendValue?: string;
}
```

## Build

```bash
npm run build
```

Outputs ESM and CJS bundles with type declarations to `dist/`.


