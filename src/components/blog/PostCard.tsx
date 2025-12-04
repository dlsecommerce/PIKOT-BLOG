"use client";

import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface PostCardProps {
  post: {
    id?: string;
    slug: string;
    title: string;
    excerpt?: string | null;
    featured_image?: string | null;
    featuredImage?: string;
    category?: { name: string; slug: string } | string | null;
    read_time?: string | null;
    readTime?: string;
    published_at?: string | null;
    publishedAt?: string;
    created_at?: string;
    author?: {
      display_name?: string | null;
      avatar_url?: string | null;
      name?: string;
      avatar?: string;
    } | null;
  };
}

export const PostCard = ({ post }: PostCardProps) => {
  const image = post.featured_image || post.featuredImage || "/placeholder.svg";
  const categoryName =
    typeof post.category === "object" ? post.category?.name : post.category;

  const readTime = post.read_time || post.readTime || "5 min";
  const publishedDate =
    post.published_at || post.publishedAt || post.created_at || new Date().toISOString();

  const authorName =
    post.author?.display_name || post.author?.name || "Equipe Pikot";

  const authorAvatar = post.author?.avatar_url || post.author?.avatar;

  return (
    <Card className="overflow-hidden hover-lift transition-all duration-300">
      <Link href={`/post/${post.slug}`}>
        <div className="relative aspect-video overflow-hidden">
          <img
            src={image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />

          {categoryName && (
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                {categoryName}
              </span>
            </div>
          )}
        </div>
      </Link>

      <CardHeader>
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <time dateTime={publishedDate}>
              {new Date(publishedDate).toLocaleDateString("pt-BR")}
            </time>
          </div>

          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>{readTime}</span>
          </div>
        </div>

        <h3 className="font-display text-xl font-bold leading-tight line-clamp-2">
          <Link
            href={`/post/${post.slug}`}
            className="hover:text-primary transition-colors"
          >
            {post.title}
          </Link>
        </h3>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>
      </CardContent>

      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {authorAvatar ? (
            <img
              src={authorAvatar}
              alt={authorName}
              className="w-6 h-6 rounded-full object-cover"
            />
          ) : (
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-xs font-bold text-primary">{authorName[0]}</span>
            </div>
          )}

          <span className="text-xs font-medium">{authorName}</span>
        </div>

        <Link
          href={`/post/${post.slug}`}
          className="text-xs font-medium text-primary hover:underline"
        >
          Ler mais →
        </Link>
      </CardFooter>
    </Card>
  );
};
