'use client';

import { BoxAdCarousel } from './ads/box-ad-carousel';
import { SkyscraperAdCarousel } from './ads/skyscraper-ad-carousel';

export function PostSidebarSection() {
  return (
    <aside className="lg:col-span-4 mt-8 lg:mt-0">
      <div className="sticky top-24 space-y-8">
        <BoxAdCarousel />
        <SkyscraperAdCarousel />
      </div>
    </aside>
  );
}
