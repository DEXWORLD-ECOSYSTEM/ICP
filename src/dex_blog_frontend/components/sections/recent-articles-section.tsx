'use client';

import { Suspense } from 'react';
import { getPosts } from '@/lib/data';
import { PostCard } from '@/components/post-card';
import { PaginationComponent } from '@/components/pagination-component';

export const RecentArticlesSection = () => {
  const posts = getPosts({ page: 1, limit: 8 });

  return (
    <section>
      <h2 className="font-headline text-3xl font-bold mb-8">Artigos Recentes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      <div className="mt-12">
        <Suspense fallback={<div>Carregando...</div>}>
          <PaginationComponent totalPages={Math.ceil(getPosts({}).length / 8)} />
        </Suspense>
      </div>
    </section>
  );
};
