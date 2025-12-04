"use client";

import { Header } from "@/components/blog/Header";
import { Footer } from "@/components/blog/Footer";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { PostCard } from "@/components/blog/PostCard";
import { Sidebar } from "@/components/blog/Sidebar";
import { BannerCarousel } from "@/components/blog/BannerCarousel";
import { NewsletterForm } from "@/components/blog/NewsletterForm";
import { Button } from "@/components/ui/button";
import { HorizontalAd, InArticleAd } from "@/components/GoogleAdsense";
import { Loader2 } from "lucide-react";

import { usePosts, usePopularPosts } from "@/hooks/usePosts";
import { blogPosts } from "@/data/blogPosts";

const BlogPage = () => {
  const { posts: dbPosts, loading } = usePosts(12);
  const { posts: popularPosts } = usePopularPosts(4);

  // fallback para posts estáticos
  const posts = dbPosts.length > 0 ? dbPosts : blogPosts;
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1, 9);

  const convertToCardFormat = (post: typeof dbPosts[0]) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || "",
    content: post.content,
    featuredImage: post.featured_image || "/placeholder.svg",
    category: post.category?.name || "Sem categoria",
    tags: [],
    author: {
      name: post.author?.display_name || "Equipe Pikot",
      avatar: post.author?.avatar_url || "/avatars/pikot-team.jpg",
    },
    readTime: post.read_time || "5 min",
    publishedAt: post.published_at || post.created_at,
    seo: { title: post.title, description: post.excerpt || "", keywords: [] },
    pikotCta: {
      text: "Ver na Pikot Shop",
      link: "https://www.pikotshop.com.br",
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* FEATURED */}
        <section className="container mx-auto px-4 py-8">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <FeaturedPost
              post={
                dbPosts.length > 0
                  ? convertToCardFormat(featuredPost as any)
                  : (featuredPost as any)
              }
            />
          )}
        </section>

        {/* PRODUTOS MAIS VENDIDOS */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-display text-3xl font-bold mb-2">
                  Produtos Mais Vendidos da Pikot Shop
                </h2>
                <p className="text-muted-foreground">
                  Equipamentos de áudio profissionais com os melhores preços
                </p>
              </div>
              <Button
                asChild
                className="bg-accent hover:bg-accent-hover text-accent-foreground hidden md:inline-flex"
              >
                <a
                  href="https://www.pikotshop.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Todos
                </a>
              </Button>
            </div>

            {/* GRID DE PRODUTOS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Caixa Ativa 12"', price: "R$ 899,90", desc: "Som potente" },
                { name: "Baquetas Neon 5A", price: "R$ 49,90", desc: "Cores vibrantes" },
                { name: "Microfone Sem Fio", price: "R$ 299,90", desc: "Alcance 50m" },
                { name: "Cabo P10 5m", price: "R$ 39,90", desc: "Alta qualidade" },
              ].map((item, index) => (
                <a
                  key={index}
                  href="https://www.pikotshop.com.br"
                  target="_blank"
                  className="group"
                >
                  <div className="bg-card rounded-lg overflow-hidden hover-lift border">
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground text-sm">Imagem</span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.desc}
                      </p>
                      <p className="font-display font-bold text-lg text-accent">
                        {item.price}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <Button
              asChild
              className="w-full mt-6 md:hidden bg-accent hover:bg-accent-hover text-accent-foreground"
            >
              <a href="https://www.pikotshop.com.br" target="_blank">
                Ver Todos os Produtos
              </a>
            </Button>
          </div>
        </section>

        {/* ADS */}
        <HorizontalAd />

        {/* BANNERS */}
        <section className="container mx-auto px-4 py-12">
          <BannerCarousel />
        </section>

        <section className="container mx-auto px-4 pb-12">
          <NewsletterForm variant="hero" />
        </section>

        <HorizontalAd />

        {/* POSTS RECENTES */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            {/* POSTS */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-8">
                Artigos Recentes
              </h2>

              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-6 mb-8">
                    {recentPosts.map((post) => (
                      <PostCard
                        key={post.id}
                        post={
                          dbPosts.length > 0
                            ? convertToCardFormat(post as any)
                            : (post as any)
                        }
                      />
                    ))}
                  </div>

                  <InArticleAd />

                  <div className="text-center">
                    <Button variant="outline" size="lg">
                      Carregar Mais Artigos
                    </Button>
                  </div>
                </>
              )}
            </div>

            {/* SIDEBAR */}
            <Sidebar />
          </div>
        </section>

        {/* MAIS LIDOS */}
        {popularPosts.length > 0 && (
          <section className="bg-muted/30 py-12">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-3xl font-bold mb-8">
                Mais Lidos
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularPosts.map((post) => (
                  <PostCard key={post.id} post={convertToCardFormat(post)} />
                ))}
              </div>
            </div>
          </section>
        )}

        <HorizontalAd />

        {/* CTA */}
        <section className="bg-gradient-to-br from-primary to-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Encontre os Melhores Equipamentos
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Visite a Pikot Shop e descubra equipamentos de áudio profissionais
              com os melhores preços do mercado
            </p>

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent-hover text-accent-foreground"
            >
              <a href="https://www.pikotshop.com.br" target="_blank">
                Visitar Pikot Shop
              </a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
