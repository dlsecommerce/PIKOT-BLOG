"use client";

import Link from "next/link";
import { TrendingUp, Tag, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getRecentPosts } from "@/data/blogPosts";
import { SidebarAd } from "@/components/GoogleAdsense";

export const Sidebar = () => {
  const recentPosts = getRecentPosts(5);

  return (
    <aside className="space-y-6">

      {/* Popular Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Posts Populares
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          {recentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/post/${post.slug}`}
              className="block group"
            >
              <div className="flex gap-3">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-16 h-16 rounded object-cover flex-shrink-0"
                />

                <div>
                  <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {post.readTime}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="h-5 w-5 text-secondary" />
            Categorias
          </CardTitle>
        </CardHeader>

        <CardContent>
          <ul className="space-y-2">

            {[
              { name: "Guias", slug: "guias", count: 15 },
              { name: "Reviews", slug: "reviews", count: 12 },
              { name: "Instrumentos", slug: "instrumentos", count: 8 },
              { name: "Dicas", slug: "dicas", count: 10 },
            ].map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/categoria/${cat.slug}`}
                  className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                >
                  <span>{cat.name}</span>
                  <span className="text-xs text-muted-foreground">{cat.count}</span>
                </Link>
              </li>
            ))}

          </ul>
        </CardContent>
      </Card>

      {/* Google Adsense */}
      <SidebarAd />

      {/* Pikot Shop Products */}
      <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
        <CardHeader>
          <CardTitle className="text-lg">
            Produtos Mais Vendidos
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Confira os equipamentos mais populares da Pikot Shop
          </p>

          <Button
            asChild
            className="w-full bg-accent hover:bg-accent-hover text-accent-foreground"
          >
            <a
              href="https://www.pikotshop.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Produtos
            </a>
          </Button>
        </CardContent>
      </Card>

      {/* Newsletter */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-accent" />
            Newsletter
          </CardTitle>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Receba guias exclusivos e novidades direto no seu e-mail
          </p>

          <form className="space-y-3">
            <Input type="email" placeholder="Seu melhor e-mail" required />

            <Button type="submit" className="w-full bg-primary hover:bg-primary-hover">
              Inscrever-se
            </Button>
          </form>
        </CardContent>
      </Card>

    </aside>
  );
};
