"use client";

import { Header } from "@/components/blog/Header";
import { Footer } from "@/components/blog/Footer";
import { FeaturedPost } from "@/components/blog/FeaturedPost";
import { PostCard } from "@/components/blog/PostCard";
import { Sidebar } from "@/components/blog/Sidebar";
import { BannerCarousel } from "@/components/blog/BannerCarousel";
import { Button } from "@/components/ui/button";
import { InArticleAd } from "@/components/GoogleAdsense";
import { Loader2 } from "lucide-react";

import { usePosts, usePopularPosts } from "@/hooks/usePosts";
import { blogPosts } from "@/data/blogPosts";

/* ============================================================
   ⭐ CARROSSEL – TOP 3 PIKOT SHOP
=============================================================== */

function BestSellerCarousel() {
  const products = [
    {
      img: "/top3/kit-platinium.svg",
      name: "Forno Elétrico e Micro-ondas Platinium Fischer",
      link: "https://www.pikotshop.com.br/casa-cozinha/eletrodomesticos/fornos-eletricos/kit-platinium-fischer-forno-eletrico-43l-e-micro-ondas-com-grill",
    },
    {
      img: "/top3/kit-fit-line-preto.svg",
      name: "Forno Elétrico e Micro-ondas Fit Line Fischer",
      link: "https://www.pikotshop.com.br/casa-cozinha/eletrodomesticos/fornos-eletricos/kit-fit-line-fischer-forno-eletrico-preto-e-micro-ondas-com-descongelar",
    },
    {
      img: "/top3/kit-infinity-cinza.svg",
      name: "Forno Elétrico e Micro-ondas Infinity Fischer",
      link: "https://www.pikotshop.com.br/casa-cozinha/eletrodomesticos/fornos-eletricos/kit-infinity-fischer-micro-ondas-inox-grill-e-forno-com-air-fryer-50l",
    },
  ];

  return (
    <div className="w-full py-10">
      <h2 className="text-center font-display text-3xl font-bold mb-10">
        CONHEÇA O TOP 3 DA PIKOT SHOP
      </h2>

      {/* MOBILE */}
      <div className="lg:hidden grid grid-flow-col auto-cols-[85%] gap-8 overflow-x-auto px-6 no-scrollbar scroll-smooth">
        {products.map((p, index) => (
          <a
            key={index}
            href={p.link}
            target="_blank"
            className="bg-white rounded-2xl p-6 flex flex-col items-center min-h-[460px] w-full transition cursor-pointer"
          >
            <div className="w-full h-64 flex items-center justify-center mb-6">
              <img src={p.img} alt={p.name} className="max-h-full object-contain" />
            </div>

            <p className="text-center text-[18px] font-semibold text-black mb-6 leading-tight">
              {p.name}
            </p>

            <div className="bg-[#ff4600] text-white font-bold w-full py-3 rounded-full text-center hover:bg-orange-600 transition">
              VER NA LOJA
            </div>
          </a>
        ))}
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:flex justify-center gap-10 px-10">
        {products.slice(0, 3).map((p, index) => (
          <a
            key={index}
            href={p.link}
            target="_blank"
            className="bg-white rounded-2xl p-6 flex flex-col items-center min-h-[460px] w-[330px] transition cursor-pointer"
          >
            <div className="w-full h-64 flex items-center justify-center mb-6">
              <img src={p.img} alt={p.name} className="max-h-full object-contain" />
            </div>

            <p className="text-center text-[18px] font-semibold text-black mb-6 leading-tight">
              {p.name}
            </p>

            <div className="bg-[#ff4600] text-white font-bold w-full py-3 rounded-full text-center hover:bg-orange-600 transition">
              VER NA LOJA
            </div>
          </a>
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
              post={
                dbPosts.length > 0
                  ? convertToCardFormat(featuredPost as any)
                  : (featuredPost as any)
              }
            />
          )}
        </section>

        {/* TOP 3 */}
        <section className="bg-muted/30 pt-6 pb-0">
          <div className="container mx-auto px-4">
            <BestSellerCarousel />
          </div>
        </section>

        {/* ⭐ CARROSSEL FULL WIDTH (CORRIGIDO) */}
        <section className="w-screen relative left-1/2 right-1/2 -mx-[50vw] p-0 m-0">
          <BannerCarousel />
        </section>

        {/* POSTS */}
        <section className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
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

            <Sidebar />
          </div>
        </section>

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
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
