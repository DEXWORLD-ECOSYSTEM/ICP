import Link from 'next/link';
import type { Tag } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

type TagPillsProps = {
  tags: Tag[];
};

export function TagPills({ tags }: TagPillsProps) {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag.id} variant="outline" asChild>
          <Link href={`/tags/${tag.slug}`}>{tag.name}</Link>
        </Badge>
      ))}
    </div>
  );
}
