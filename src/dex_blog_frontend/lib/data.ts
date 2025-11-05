
import type { Post, Author, Category, Tag, Comment } from './types';

const authors: Author[] = [
  {
    id: '1',
    name: 'Jane Doe',
    avatarUrl: 'https://picsum.photos/seed/author1/100/100',
    imageHint: 'woman portrait',
    bio: 'Jane is a full-stack developer and a passionate writer, focusing on modern web technologies and productivity.',
  },
  {
    id: '2',
    name: 'John Smith',
    avatarUrl: 'https://picsum.photos/seed/author2/100/100',
    imageHint: 'man portrait',
    bio: 'John explores the intersection of design and technology, with a special interest in user experience and creative coding.',
  },
];

const categories: Category[] = [
  { id: '1', name: 'Technology', slug: 'technology' },
  { id: '2', name: 'Productivity', slug: 'productivity' },
  { id: '3', name: 'Lifestyle', slug: 'lifestyle' },
];

const tags: Tag[] = [
  { id: '1', name: 'React', slug: 'react' },
  { id: '2', name: 'Next.js', slug: 'next-js' },
  { id: '3', name: 'Design', slug: 'design' },
  { id: '4', name: 'AI', slug: 'ai' },
  { id: '5', name: 'Career', slug: 'career' },
];

const posts: Post[] = [
  {
    id: '1',
    slug: 'mastering-react-hooks',
    title: 'Mastering React Hooks: A Deep Dive',
    excerpt: 'Explore the full potential of React Hooks, from useState to custom hooks, and elevate your component logic.',
    content: `
## Introduction to React Hooks
React Hooks were introduced in React 16.8 and they let you use state and other React features without writing a class. This has revolutionized how we write React components, making them more concise and easier to reason about.

### The Power of useState
The most fundamental hook is \`useState\`. It allows you to add state to your functional components. Here\'s a simple example:
\`\`\`javascript
import React, { useState } from \'react\';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`
This simple counter component demonstrates the core of \`useState\`. It returns a pair: the current state value and a function that lets you update it.

### Understanding useEffect
The \`useEffect\` Hook lets you perform side effects in functional components. Data fetching, subscriptions, or manually changing the DOM in React components are all examples of side effects. It\'s the equivalent of \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` combined.
`,
    imageUrl: 'https://picsum.photos/seed/post1/600/400',
    imageHint: 'technology abstract',
    publishedAt: '2024-05-15T10:00:00Z',
    isFeatured: true,
    authorId: '1',
    categoryId: '1',
    tagIds: ['1', '2'],
  },
  {
    id: '2',
    slug: 'ai-in-web-development',
    title: 'The Rise of AI in Web Development',
    excerpt: 'Artificial intelligence is no longer science fiction. Learn how AI is transforming the way we build websites and applications.',
    content: `
## AI-Powered Tools
From code completion with GitHub Copilot to automated testing, AI is augmenting the developer workflow. These tools help us write better code, faster.

## Generative UI
Imagine describing a user interface in plain English and having an AI generate the component code for you. This is the promise of generative UI, and it\'s closer than you think. Tools like v0.dev are pioneering this space, allowing for rapid prototyping and development.

### The Future is Now
As AI models become more powerful, their integration into our development processes will only deepen. It\'s an exciting time to be a web developer.
`,
    imageUrl: 'https://picsum.photos/seed/post2/600/400',
    imageHint: 'laptop code',
    publishedAt: '2024-05-12T14:30:00Z',
    isFeatured: false,
    authorId: '1',
    categoryId: '1',
    tagIds: ['4'],
  },
  {
    id: '3',
    slug: 'a-guide-to-component-driven-development',
    title: 'A Guide to Component-Driven Development',
    excerpt: 'Learn how to build UIs in a modular and scalable way with component-driven development principles.',
    content: 'Component-driven development is a methodology that focuses on building user interfaces from the bottom up, starting with individual components.',
    imageUrl: 'https://picsum.photos/seed/post3/600/400',
    imageHint: 'abstract block puzzle',
    publishedAt: '2024-05-10T09:00:00Z',
    isFeatured: false,
    authorId: '2',
    categoryId: '1',
    tagIds: ['1', '3'],
  },
  {
    id: '4',
    slug: 'boost-your-productivity-with-these-simple-hacks',
    title: 'Boost Your Productivity with These Simple Hacks',
    excerpt: 'Discover simple yet effective techniques to manage your time, stay focused, and get more done.',
    content: 'Productivity is not about working harder, but smarter. This article explores several techniques to improve your focus and efficiency.',
    imageUrl: 'https://picsum.photos/seed/post4/600/400',
    imageHint: 'person working on laptop',
    publishedAt: '2024-05-08T11:00:00Z',
    isFeatured: false,
    authorId: '1',
    categoryId: '2',
    tagIds: ['5'],
  },
  {
    id: '5',
    slug: 'the-art-of-minimalist-living',
    title: 'The Art of Minimalist Living',
    excerpt: 'Find joy in simplicity. A guide to decluttering your life and focusing on what truly matters.',
    content: 'Minimalism is a lifestyle that helps people question what things add value to their lives. By clearing the clutter, you can make room for more: more time, more passion, more experiences.',
    imageUrl: 'https://picsum.photos/seed/post5/600/400',
    imageHint: 'minimalist interior design',
    publishedAt: '2024-05-05T16:00:00Z',
    isFeatured: false,
    authorId: '2',
    categoryId: '3',
    tagIds: ['3'],
  },
  {
    id: '6',
    slug: 'getting-started-with-nextjs-15',
    title: 'Getting Started with Next.js 15',
    excerpt: 'A beginner-friendly tutorial on setting up a new project with the latest version of Next.js.',
    content: 'Next.js 15 brings several new features and improvements. This tutorial will walk you through the process of creating a new Next.js app and exploring its new capabilities.',
    imageUrl: 'https://picsum.photos/seed/post6/600/400',
    imageHint: 'Next.js logo',
    publishedAt: '2024-05-02T18:00:00Z',
    isFeatured: false,
    authorId: '1',
    categoryId: '1',
    tagIds: ['2'],
  },
  {
    id: '7',
    slug: 'advanced-css-techniques',
    title: 'Advanced CSS Techniques for Modern Web Design',
    excerpt: 'Go beyond the basics and explore powerful CSS features like Grid, Flexbox, and custom properties to create stunning layouts.',
    content: 'This post delves into advanced CSS topics that can help you create more complex and responsive web designs.',
    imageUrl: 'https://picsum.photos/seed/post7/600/400',
    imageHint: 'abstract design',
    publishedAt: '2024-04-28T10:00:00Z',
    isFeatured: false,
    authorId: '2',
    categoryId: '1',
    tagIds: ['3'],
  },
  {
    id: '8',
    slug: 'work-life-balance-for-developers',
    title: 'Finding Work-Life Balance as a Developer',
    excerpt: 'Practical tips and strategies to avoid burnout and maintain a healthy work-life balance in the fast-paced tech industry.',
    content: 'In the demanding world of software development, maintaining a healthy work-life balance is crucial. This article provides actionable advice.',
    imageUrl: 'https://picsum.photos/seed/post8/600/400',
    imageHint: 'person relaxing',
    publishedAt: '2024-04-25T14:00:00Z',
    isFeatured: false,
    authorId: '1',
    categoryId: '2',
    tagIds: ['5'],
  }
];

const comments: Comment[] = [
  {
    id: '1',
    postId: '1',
    authorName: 'Alex',
    content: 'Great overview! The section on custom hooks was particularly helpful.',
    publishedAt: '2024-05-15T12:30:00Z',
  },
  {
    id: '2',
    postId: '1',
    authorName: 'Sarah',
    content: 'Thanks for breaking down useEffect. I always found the dependency array a bit tricky.',
    publishedAt: '2024-05-15T15:00:00Z',
  },
  {
    id: '3',
    postId: '2',
    authorName: 'Mike',
    content: 'The idea of generative UI is mind-blowing. The future is definitely exciting.',
    publishedAt: '2024-05-13T10:00:00Z',
  },
];

// Data fetching functions
export function getPosts(args: { page?: number; limit?: number; categorySlug?: string; tagSlug?: string } = {}): Post[] {
  const { page, limit, categorySlug, tagSlug } = args;

  let filteredPosts = posts;

  // Filter by category
  if (categorySlug) {
    const category = getCategoryBySlug(categorySlug);
    if (category) {
      filteredPosts = filteredPosts.filter(post => post.categoryId === category.id);
    } else {
      return [];
    }
  }

  // Filter by tag
  if (tagSlug) {
    const tag = getTagBySlug(tagSlug);
    if (tag) {
      filteredPosts = filteredPosts.filter(post => post.tagIds.includes(tag.id));
    } else {
      return [];
    }
  }

  // Sort by date descending
  const sortedPosts = [...filteredPosts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  // If no pagination is requested, return all filtered & sorted posts
  if (page === undefined || limit === undefined) {
    return sortedPosts;
  }

  // Apply pagination
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return sortedPosts.slice(startIndex, endIndex);
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getFeaturedPost(): Post | undefined {
  return posts.find((post) => post.isFeatured);
}

export function getAuthorById(id: string): Author | undefined {
  return authors.find((author) => author.id === id);
}

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getTagsByIds(ids: string[]): Tag[] {
  return tags.filter((tag) => ids.includes(tag.id));
}

export function getTagBySlug(slug: string): Tag | undefined {
    return tags.find(t => t.slug === slug);
}

export function getAllTags(): Tag[] {
    return tags;
}

export function getAllCategories(): Category[] {
    return categories;
}

export function getAllAuthors(): Author[] {
    return authors;
}

export function getAllPosts(): Post[] {
    return posts;
}

export function getCommentsByPostId(postId: string): Comment[] {
  return comments
    .filter((comment) => comment.postId === postId)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}
