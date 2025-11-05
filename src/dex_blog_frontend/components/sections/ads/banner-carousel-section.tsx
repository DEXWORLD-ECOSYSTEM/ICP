'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { Carousel, CarouselContent, CarouselItem, CarouselIndicatorGroup } from '@/components/ui/carousel';

export const BannerCarouselSection = () => {
  const fadePlugin = useRef(Fade());
  const bannerImages = Array.from({ length: 10 }, (_, i) => `/images/ads/banner/${i + 1}.png`);

  return (
    <section className="mb-12">
      <Carousel
        className="w-full"
        opts={{ loop: true }}
        plugins={[fadePlugin.current, Autoplay({ delay: 5000 })]}
      >
        <CarouselContent>
          {bannerImages.map((src, index) => (
            <CarouselItem key={index}>
              <Link href="#">
                <div className="relative h-[90px] w-full overflow-hidden rounded-lg md:h-[150px]">
                  <Image
                    src={src}
                    alt={`Banner de anúncio ${index + 1}`}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselIndicatorGroup />
      </Carousel>
    </section>
  );
};
