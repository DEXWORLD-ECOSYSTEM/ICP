'use client';

import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { BannerCarouselSection } from '@/components/sections/ads/banner-carousel-section';
import { FeaturedPostSection } from '@/components/sections/featured-post-section';
import { CreatorsListComponent } from '@/components/sections/creators-list-section';
import { RecentArticlesSection } from '@/components/sections/recent-articles-section';
import { VideosSection } from '@/components/sections/videos-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <BannerCarouselSection />
          <FeaturedPostSection />
          <div className="my-12">
             <CreatorsListComponent />
          </div>
          <div className="my-12">
             <VideosSection />
          </div>
          <RecentArticlesSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
