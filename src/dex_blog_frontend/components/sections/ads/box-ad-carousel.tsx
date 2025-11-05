'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselIndicatorGroup } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';

export function BoxAdCarousel() {
  const fadePlugin = useRef(Fade());
  const adImages = ['/images/ads/box/ad1.png', '/images/ads/box/ad2.png'];

  return (
    <Carousel
      className="w-full"
      opts={{
        loop: true,
      }}
      plugins={[fadePlugin.current, Autoplay({ delay: 5000 })]}
    >
      <CarouselContent>
        {adImages.map((src, index) => (
          <CarouselItem key={index}>
            <Card className="overflow-hidden">
              <Link href="#">
                <div className="relative aspect-[6/5] w-full">
                  <Image
                    src={src}
                    alt={`Box advertisement ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselIndicatorGroup />
    </Carousel>
  );
}
