export type Author = {
  id: string;
  name: string;
  avatarUrl: string;
  imageHint: string;
  bio: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export type Tag = {
  id: string;
  name: string;
  slug: string;
};

export type Post = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  imageHint: string;
  publishedAt: string;
  isFeatured: boolean;
  authorId: string;
  categoryId: string;
  tagIds: string[];
};

export type Comment = {
  id: string;
  postId: string;
  authorName: string;
  content: string;
  publishedAt: string;
};
