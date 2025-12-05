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

/* ============================================================
   ⭐ CARROSSEL – 3 CARDS NO DESKTOP IGUAIS AO PRIMEIRO
=============================================================== */

function BestSellerCarousel() {
  const products = [
    { img: "/kit-platinium.svg", name: "Forno Elétrico e Micro-ondas Platinium Fischer", link: "https://www.pikotshop.com.br/casa-cozinha/eletrodomesticos/fornos-eletricos/kit-platinium-fischer-forno-eletrico-43l-e-micro-ondas-com-grill" },
    { img: "/kit-fit-line-preto.svg", name: "Forno Elétrico e Micro-ondas Fit Line Fischer", link: "https://www.pikotshop.com.br/casa-cozinha/eletrodomesticos/fornos-eletricos/kit-fit-line-fischer-forno-eletrico-preto-e-micro-ondas-com-descongelar" },
    { img: "/kit-infinity-cinza.svg", name: "Forno Elétrico e Micro-ondas Infinity Fischer", link: "https://www.pikotshop.com.br/casa-cozinha/eletrodomesticos/fornos-eletricos/kit-infinity-fischer-micro-ondas-inox-grill-e-forno-com-air-fryer-50l" },
  ];

  return (
    <div className="w-full py-10">
      <h2 className="text-center font-display text-3xl font-bold mb-10">
        CONHEÇA O TOP 3 DA PIKOT SHOP
      </h2>

      {/* 📱 MOBILE – CARROSSEL */}
      <div className="lg:hidden grid grid-flow-col auto-cols-[85%] gap-8 overflow-x-auto px-6 no-scrollbar scroll-smooth">
        {products.map((p, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 flex flex-col items-center min-h-[460px] w-full"
          >
            {/* IMAGEM PADRONIZADA */}
            <div className="w-full h-64 flex items-center justify-center mb-6">
              <img src={p.img} alt={p.name} className="max-h-full object-contain" />
            </div>

            <p className="text-center text-[18px] font-semibold text-black mb-6 leading-tight">
              {p.name}
            </p>

            <a
              href={p.link}
              target="_blank"
              className="bg-[#ff4600] text-white font-bold w-full py-3 rounded-full text-center hover:bg-orange-600 transition"
            >
              VER NA LOJA
            </a>
          </div>
        ))}
      </div>

      {/* 💻 DESKTOP — APENAS 3 CARDS IGUAIS AO PRIMEIRO */}
      <div className="hidden lg:flex justify-center gap-10 px-10">
        {products.slice(0, 3).map((p, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 flex flex-col items-center min-h-[460px] w-[330px]"
          >
            {/* IMAGEM PADRONIZADA */}
            <div className="w-full h-64 flex items-center justify-center mb-6">
              <img src={p.img} alt={p.name} className="max-h-full object-contain" />
            </div>

            <p className="text-center text-[18px] font-semibold text-black mb-6 leading-tight">
              {p.name}
            </p>

            <a
              href={p.link}
              target="_blank"
              className="bg-[#ff4600] text-white font-bold w-full py-3 rounded-full text-center hover:bg-orange-600 transition"
            >
              VER NA LOJA
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
   ⭐ BLOG PAGE COMPLETA
=============================================================== */

const BlogPage = () => {
  const { posts: dbPosts, loading } = usePosts(12);
  const { posts: popularPosts } = usePopularPosts(4);

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
    seo: {
      title: post.title,
      description: post.excerpt || "",
      keywords: [],
    },
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
              post={dbPosts.length > 0 ? convertToCardFormat(featuredPost as any) : (featuredPost as any)}
            />
          )}
        </section>

        {/* CARROSSEL */}
        <section className="bg-muted/30 py-12">
          <div className="container mx-auto px-4">
            <BestSellerCarousel />
          </div>
        </section>

        <HorizontalAd />

        <section className="container mx-auto px-4 py-12">
          <BannerCarousel />
        </section>

        <section className="container mx-auto px-4 pb-12">
          <NewsletterForm variant="hero" />
        </section>

        <HorizontalAd />

        {/* POSTS */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            <div>
              <h2 className="font-display text-3xl font-bold mb-8">Artigos Recentes</h2>

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
                        post={dbPosts.length > 0 ? convertToCardFormat(post as any) : (post as any)}
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

            <Sidebar />
          </div>
        </section>

        {popularPosts.length > 0 && (
          <section className="bg-muted/30 py-12">
            <div className="container mx-auto px-4">
              <h2 className="font-display text-3xl font-bold mb-8">Mais Lidos</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularPosts.map((post) => (
                  <PostCard key={post.id} post={convertToCardFormat(post)} />
                ))}
              </div>
            </div>
          </section>
        )}

        <HorizontalAd />

        <section className="bg-gradient-to-br from-primary to-secondary py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Encontre os Melhores Equipamentos
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Visite a Pikot Shop e descubra equipamentos de áudio profissionais com os melhores preços.
            </p>

            <Button asChild size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground">
              <a href="https://www.pikotshop.com.br" target="_blank">Visitar Pikot Shop</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
