import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/data';
import { ArticleEditor } from '@/components/admin/article-editor';

export default function EditPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold">Edit Post</h1>
        <p className="text-muted-foreground">
          You are editing: "{post.title}"
        </p>
      </div>
      <ArticleEditor post={post} />
    </div>
  );
}
