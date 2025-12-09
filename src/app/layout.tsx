import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

// -----------------------------
//  FONTES
// -----------------------------

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

// -----------------------------
//  METADATA (SEM themeColor)
// -----------------------------

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blog.pikotshop.com.br"),

  applicationName: "PIKOT BLOG",
  category: "blog",
  referrer: "origin-when-cross-origin",

  title: {
    default: "PIKOT BLOG - O Blog da PIKOT SHOP",
    template: "%s | PIKOT BLOG",
  },

  description:
    "Conteúdo especializado sobre instrumentos musicais, máquinas, equipamentos e acessórios. Tutoriais, recomendações e explicações simples para ajudar você a fazer as melhores escolhas e aproveitar o máximo de cada produto.",

  keywords: [
    "Pikot Blog",
    "blog pikot",
    "blog",
    "Blog",
    "loja virtual",
    "ecommerce",
    "mercadolivre",
    "shopee",
    "instrumentos musicais",
    "baquetas",
    "máquinas",
    "baquetas para bateria",
    "pikotshop",
    "PIKOT SHOP",
    "pikot shop",
    "blog pikot",
    "pikot blog",
  ],

  authors: [
    {
      name: "Pikotshop",
      url: "https://www.pikotshop.com.br",
    },
  ],
  creator: "Pikotshop",
  publisher: "Pikotshop",

  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.blog.pikotshop.com.br",
    siteName: "PIKOT BLOG",
    title: "PIKOT BLOG - O Blog da PIKOT SHOP",
    description:
      "Conteúdo especializado sobre instrumentos musicais, máquinas, equipamentos e acessórios. Tutoriais, recomendações e explicações simples para ajudar você a fazer as melhores escolhas e aproveitar o máximo de cada produto.",
    locale: "pt_BR",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "PIKOT BLOG - O Blog da PIKOT SHOP",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PIKOT BLOG - O Blog da PIKOT SHOP",
    description:
      "Conteúdo especializado sobre instrumentos musicais, máquinas, equipamentos e acessórios. Tutoriais, recomendações e explicações simples para ajudar você a fazer as melhores escolhas e aproveitar o máximo de cada produto.",
    images: ["/og-image.png"],
    creator: "@pikotshop",
    site: "@pikotshop",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/favicon.png", sizes: "180x180", type: "image/png" }],
  },

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PIKOT BLOG",
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "REPLACE_WITH_GOOGLE_SITE_VERIFICATION",
  },
};

// -----------------------------
//  VIEWPORT (themeColor CORRIGIDO)
// -----------------------------

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
};

// -----------------------------
//  ROOT LAYOUT
// -----------------------------

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${montserrat.variable}
          antialiased
        `}
      >
        {children}
        <Analytics /> {/* 🔥 ANALYTICS ATIVADO */}
      </body>
    </html>
  );
}
