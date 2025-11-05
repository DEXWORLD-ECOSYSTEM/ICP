import { ArticleEditor } from '@/components/admin/article-editor';

export default function NewPostPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-headline text-3xl font-bold">New Post</h1>
        <p className="text-muted-foreground">
          Create a new article for your blog.
        </p>
      </div>
      <ArticleEditor />
    </div>
  );
}
