'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { getFeaturedPost } from '@/lib/data';

export const FeaturedPostSection = () => {
  const featuredPost = getFeaturedPost();

  if (!featuredPost) {
    return null;
  }

  return (
    <section className="mb-12">
      <Card className="overflow-hidden bg-brand-dark shadow-glow border border-brand-cyan/30 rounded-lg">
        <div className="md:flex">
          <div className="md:w-1/2">
            <Link href={`/posts/${featuredPost.slug}`}>
              <div className="relative h-64 md:h-full">
                <Image
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                  data-ai-hint="blog post"
                />
              </div>
            </Link>
          </div>
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <Badge
              variant="outline"
              className="mb-2 w-fit border-brand-cyan/50 text-brand-cyan bg-transparent"
            >
              Post em Destaque
            </Badge>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 text-white">
              <Link href={`/posts/${featuredPost.slug}`}>
                {featuredPost.title}
              </Link>
            </h2>
            <p className="text-brand-secondary mb-4">
              {featuredPost.excerpt}
            </p>
            <Link
              href={`/posts/${featuredPost.slug}`}
              className="text-brand-primary hover:underline font-semibold"
            >
              Leia Mais
            </Link>
          </div>
        </div>
      </Card>
    </section>
  );
};
