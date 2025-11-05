import Link from 'next/link';
import Image from 'next/image';
import type { Post } from '@/lib/types';
import { getAuthorById, getCategoryById } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { format, parseISO } from 'date-fns';

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  const author = getAuthorById(post.authorId);
  const category = getCategoryById(post.categoryId);

  return (
    <Card className="flex flex-col overflow-hidden shadow-glow h-full">
      <Link href={`/posts/${post.slug}`} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={post.imageHint}
          />
        </div>
      </Link>
      <CardHeader>
        {category && (
          <Badge
            variant="outline"
            className="mb-2 w-fit"
          >
            <Link href={`/categories/${category.slug}`}>{category.name}</Link>
          </Badge>
        )}
        <h3 className="font-headline text-xl font-semibold">
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h3>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
      </CardContent>
      <CardFooter>
        <div className="flex items-center space-x-3">
          {author && (
            <Avatar>
              <AvatarImage src={author.avatarUrl} alt={author.name} data-ai-hint={author.imageHint} />
              <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
            </Avatar>
          )}
          <div>
            <p className="text-sm font-medium">{author?.name}</p>
            <p className="text-xs text-muted-foreground">
              {format(parseISO(post.publishedAt), 'MMMM d, yyyy')}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
