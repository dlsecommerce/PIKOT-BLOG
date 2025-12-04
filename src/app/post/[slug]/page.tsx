"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Header } from "@/components/blog/Header";
import { Footer } from "@/components/blog/Footer";
import { Sidebar } from "@/components/blog/Sidebar";

import { usePost, usePosts } from "@/hooks/usePosts";

import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PostCard } from "@/components/blog/PostCard";

import { InArticleAd, HorizontalAd, SidebarAd } from "@/components/GoogleAdsense";

import { TableOfContents, addHeadingIds } from "@/components/blog/TableOfContents";
import { Skeleton } from "@/components/ui/skeleton";


export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const router = useRouter();

  const { post, loading } = usePost(slug);
  const { posts: relatedPosts } = usePosts(3);

  // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  // LOADING STATE
  // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            <div>
              <Skeleton className="h-8 w-32 mb-6" />
              <Skeleton className="aspect-video rounded-2xl mb-8" />
              <Skeleton className="h-6 w-48 mb-4" />
              <Skeleton className="h-12 w-full mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            <div>
              <Skeleton className="h-64 w-full" />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  // POST NÃO ENCONTRADO
  // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post não encontrado</h1>

            <Button asChild>
              <Link href="/">Voltar para Home</Link>
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  // PARSE DO CONTEÚDO COM IDS
  // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  const contentWithIds = addHeadingIds(post.content);

  const contentParts = contentWithIds.split(/<h2/);

  const firstPart =
    contentParts.length > 2
      ? contentParts.slice(0, 2).join("<h2")
      : contentWithIds.substring(0, contentWithIds.length / 2);

  const secondPart =
    contentParts.length > 2
      ? "<h2" + contentParts.slice(2).join("<h2")
      : contentWithIds.substring(contentWithIds.length / 2);

  // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  // PAGE RENDER
  // ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">

        {/* BREADCRUMB */}
        <div className="border-b">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">

              <Link href="/" className="hover:text-foreground">
                Home
              </Link>

              <span>/</span>

              {post.category && (
                <>
                  <Link
                    href={`/categoria/${post.category.slug}`}
                    className="hover:text-foreground"
                  >
                    {post.category.name}
                  </Link>
                  <span>/</span>
                </>
              )}

              <span className="text-foreground line-clamp-1">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* ARTIGO */}
        <article className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">

            {/* LEFT AREA */}
            <div>

              {/* BOTÃO VOLTAR */}
              <Button variant="ghost" asChild className="mb-6">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Voltar
                </Link>
              </Button>

              {/* IMAGEM DESTACADA */}
              {post.featured_image && (
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              {/* META */}
              <div className="flex flex-wrap items-center gap-4 mb-6">

                {post.category && (
                  <Link
                    href={`/categoria/${post.category.slug}`}
                    className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm 
                    font-medium text-accent-foreground hover:bg-accent/80 transition-colors"
                  >
                    {post.category.name}
                  </Link>
                )}

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={post.published_at || post.created_at}>
                    {new Date(
                      post.published_at || post.created_at
                    ).toLocaleDateString("pt-BR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>

                {post.read_time && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>{post.read_time}</span>
                  </div>
                )}

                {/* BOTÃO DE COMPARTILHAR */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    navigator.share?.({
                      title: post.title,
                      url: window.location.href,
                    });
                  }}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>
              </div>

              {/* TÍTULO */}
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>

              {/* AUTOR */}
              <div className="flex items-center gap-3 mb-8 pb-8 border-b">

                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  {post.author?.avatar_url ? (
                    <img
                      src={post.author.avatar_url}
                      alt={post.author.display_name}
                      className="w-12 h-12 rounded-full"
                    />
                  ) : (
                    <span className="text-lg font-bold text-primary">
                      {(post.author?.display_name || "P")[0].toUpperCase()}
                    </span>
                  )}
                </div>

                <div>
                  <p className="font-medium">{post.author?.display_name}</p>
                  <p className="text-sm text-muted-foreground">Autor</p>
                </div>
              </div>

              {/* TABELA DE CONTEÚDO */}
              <TableOfContents content={post.content} />

              {/* CTA PIKOT */}
              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 p-6 mb-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-lg mb-2">
                      Encontre na Pikot Shop
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Equipamentos profissionais com os melhores preços
                    </p>
                  </div>
                  <Button
                    asChild
                    className="bg-accent hover:bg-accent-hover text-accent-foreground whitespace-nowrap"
                  >
                    <a
                      href="https://www.pikotshop.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Produtos
                    </a>
                  </Button>
                </div>
              </Card>

              {/* PRIMEIRA METADE DO CONTEÚDO */}
              <div
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: firstPart }}
              />

              {/* AD */}
              <InArticleAd />

              {/* CTA MEIO */}
              <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground p-6 my-8">
                <div className="text-center">
                  <h3 className="font-display font-bold text-xl mb-2">
                    🎵 Aproveite as Ofertas da Pikot Shop!
                  </h3>
                  <p className="text-primary-foreground/80 mb-4">
                    Equipamentos de áudio profissionais com frete grátis
                  </p>

                  <Button asChild variant="secondary" size="lg">
                    <a
                      href="https://www.pikotshop.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Conferir Promoções
                    </a>
                  </Button>
                </div>
              </Card>

              {/* SEGUNDA METADE DO CONTEÚDO */}
              <div
                className="prose prose-lg max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: secondPart }}
              />

              {/* AD */}
              <HorizontalAd />

              {/* CTA FINAL */}
              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 p-8 mt-12">
                <div className="text-center">
                  <h3 className="font-display text-2xl font-bold mb-3">
                    Gostou do Artigo?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Confira os melhores equipamentos de áudio na Pikot Shop
                  </p>

                  <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground">
                    <a
                      href="https://www.pikotshop.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visitar Pikot Shop
                    </a>
                  </Button>
                </div>
              </Card>

              {/* POSTS RELACIONADOS */}
              <div className="mt-16">
                <h2 className="font-display text-3xl font-bold mb-8">
                  Artigos Relacionados
                </h2>

                <HorizontalAd />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {relatedPosts
                    .filter((p) => p.slug !== post.slug)
                    .slice(0, 3)
                    .map((relatedPost) => (
                      <PostCard key={relatedPost.id} post={relatedPost} />
                    ))}
                </div>
              </div>

            </div>

            {/* SIDEBAR */}
            <div className="lg:sticky lg:top-20 lg:self-start space-y-6">
              <SidebarAd />
              <Sidebar />
              <SidebarAd />
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
