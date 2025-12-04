"use client";

import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";

interface FeaturedPostProps {
  post: BlogPost;
}

export const FeaturedPost = ({ post }: FeaturedPostProps) => {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-1 animate-fade-in">
      <div className="relative overflow-hidden rounded-xl bg-card">
        <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">

          {/* Image */}
          <div className="relative aspect-video md:aspect-square rounded-lg overflow-hidden group">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />

            <div className="absolute top-4 left-4">
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                {post.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center">
            {/* Meta */}
            <div className="flex items-center flex-wrap gap-4 text-sm text-muted-foreground mb-3">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
                </time>
              </div>

              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Title */}
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 leading-tight">
              <Link
                href={`/post/${post.slug}`}
                className="hover:text-primary transition-colors"
              >
                {post.title}
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="text-muted-foreground mb-6 line-clamp-3">
              {post.excerpt}
            </p>

            {/* CTA + Author */}
            <div className="flex items-center gap-4 flex-wrap">

              <Button
                asChild
                className="bg-accent hover:bg-accent-hover text-accent-foreground"
              >
                <Link href={`/post/${post.slug}`}>
                  Ler Artigo Completo
                </Link>
              </Button>

              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="text-sm font-medium">
                  {post.author.name}
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
