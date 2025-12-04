import { blogPosts } from "./blogPosts";

export interface Category {
  name: string;
  slug: string;
}

export const categories: Category[] = Array.from(
  new Set(blogPosts.map((post) => post.category))
).map((name) => ({
  name,
  slug: name.toLowerCase().replace(/\s+/g, "-"),
}));
