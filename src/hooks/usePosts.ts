import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  featured_image: string | null;
  read_time: string | null;
  published_at: string | null;
  created_at: string;
  view_count: number;
  category: {
    name: string;
    slug: string;
  } | null;
  author: {
    display_name: string | null;
    avatar_url: string | null;
  } | null;
}

export const usePosts = (limit?: number, categorySlug?: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      let query = supabase
        .from("blog_posts")
        .select(`
          id,
          title,
          slug,
          excerpt,
          content,
          featured_image,
          read_time,
          published_at,
          created_at,
          view_count,
          author_id,
          blog_categories(name, slug)
        `)
        .eq("status", "published")
        .order("published_at", { ascending: false });

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;

      if (!error && data) {
        const formattedPosts = data.map((post) => ({
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          featured_image: post.featured_image,
          read_time: post.read_time,
          published_at: post.published_at,
          created_at: post.created_at,
          view_count: post.view_count,
          category: post.blog_categories
            ? { name: post.blog_categories.name, slug: post.blog_categories.slug }
            : null,
          author: { display_name: "Equipe Pikot", avatar_url: null },
        }));

        if (categorySlug) {
          setPosts(formattedPosts.filter((p) => p.category?.slug === categorySlug));
        } else {
          setPosts(formattedPosts);
        }
      }
      setLoading(false);
    };

    fetchPosts();
  }, [limit, categorySlug]);

  return { posts, loading };
};

export const usePopularPosts = (limit = 5) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPopularPosts = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select(`
          id,
          title,
          slug,
          excerpt,
          content,
          featured_image,
          read_time,
          published_at,
          created_at,
          view_count,
          blog_categories(name, slug)
        `)
        .eq("status", "published")
        .order("view_count", { ascending: false })
        .limit(limit);

      if (!error && data) {
        const formattedPosts = data.map((post) => ({
          id: post.id,
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt,
          content: post.content,
          featured_image: post.featured_image,
          read_time: post.read_time,
          published_at: post.published_at,
          created_at: post.created_at,
          view_count: post.view_count,
          category: post.blog_categories
            ? { name: post.blog_categories.name, slug: post.blog_categories.slug }
            : null,
          author: { display_name: "Equipe Pikot", avatar_url: null },
        }));
        setPosts(formattedPosts);
      }
      setLoading(false);
    };

    fetchPopularPosts();
  }, [limit]);

  return { posts, loading };
};

export const usePost = (slug: string) => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select(`
          id,
          title,
          slug,
          excerpt,
          content,
          featured_image,
          read_time,
          published_at,
          created_at,
          view_count,
          seo_title,
          seo_description,
          pikot_cta_text,
          pikot_cta_link,
          blog_categories(name, slug)
        `)
        .eq("slug", slug)
        .eq("status", "published")
        .maybeSingle();

      if (!error && data) {
        await supabase
          .from("blog_posts")
          .update({ view_count: (data.view_count || 0) + 1 })
          .eq("id", data.id);

        setPost({
          id: data.id,
          title: data.title,
          slug: data.slug,
          excerpt: data.excerpt,
          content: data.content,
          featured_image: data.featured_image,
          read_time: data.read_time,
          published_at: data.published_at,
          created_at: data.created_at,
          view_count: data.view_count,
          category: data.blog_categories
            ? { name: data.blog_categories.name, slug: data.blog_categories.slug }
            : null,
          author: { display_name: "Equipe Pikot", avatar_url: null },
        });
      }
      setLoading(false);
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { post, loading };
};
