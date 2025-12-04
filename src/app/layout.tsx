import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // Base da URL do site (ajuda em OG, canonicals, etc.)
  metadataBase: new URL("https://www.blog.pikotshop.com.br"),

  applicationName: "PIKOT BLOG",
  category: "blog",
  referrer: "origin-when-cross-origin",

  // Título global + template para páginas internas
  title: {
    default: "PIKOT BLOG - O Blog da PIKOT SHOP",
    template: "%s | PIKOT BLOG",
  },

  // Descrição global (homepage / fallback)
  description:
    "Conteúdo especializado sobre instrumentos musicais, máquinas, equipamentos e acessórios. Tutoriais, recomendações e explicações simples para ajudar você a fazer as melhores escolhas e aproveitar o máximo de cada produto.",

  keywords: [
    "Pikot Blog",
    "blog pikot",
    "marketing digital",
    "e-commerce",
    "loja virtual",
    "empreendedorismo",
    "criação de conteúdo",
    "negócios digitais",
    "pikotshop",
  ],

  authors: [
    {
      name: "Pikotshop",
      url: "https://www.pikotshop.com.br",
    },
  ],
  creator: "Pikotshop",
  publisher: "Pikotshop",

  // Canonical + idiomas (ajuda muito em SEO internacional)
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },

  // Open Graph (para redes sociais, WhatsApp, etc.)
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
        url: "/og-image.png", // crie depois em /public
        width: 1200,
        height: 630,
        alt: "PIKOT BLOG - O Blog da PIKOT SHOP",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "PIKOT BLOG - O Blog da PIKOT SHOP",
    description:
      "Conteúdo especializado sobre instrumentos musicais, máquinas, equipamentos e acessórios. Tutoriais, recomendações e explicações simples para ajudar você a fazer as melhores escolhas e aproveitar o máximo de cada produto.",
    images: ["/og-image.png"],
    creator: "@pikotshop",
    site: "@pikotshop",
  },

  // Robots meta avançado (inclui diretivas para Googlebot)
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  // Favicons / ícones
  icons: {
  icon: [
    { url: "/favicon.svg", type: "image/svg+xml" },
    { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    { url: "/favicon.png", sizes: "192x192", type: "image/png" },
  ],
  apple: [
    { url: "/favicon.png", sizes: "180x180", type: "image/png" },
  ],
},


  // Cores do navegador (light/dark)
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],

  // PWA / Apple Web App (se você evoluir para app instalável)
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "PIKOT BLOG",
  },

  // Evitar auto-detecção de telefone, etc. em mobile
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  // Manifest (se quiser PWA depois)
  manifest: "/site.webmanifest",

  // Verificações de serviços
  verification: {
    google: "REPLACE_WITH_GOOGLE_SITE_VERIFICATION",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
