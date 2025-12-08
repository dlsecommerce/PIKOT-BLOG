"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvancedSearch } from "@/components/blog/AdvancedSearch";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 border-b bg-white backdrop-blur supports-[backdrop-filter]:bg-white/80 header-shadow">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/pikot-blog.svg"
              alt="Pikot Blog"
              width={160}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="font-heading font-medium text-[15px] text-[#333] hover:text-primary transition-colors"
            >
              Início
            </Link>

            <Link
              href="/categorias"
              className="font-heading font-medium text-[15px] text-[#333] hover:text-primary transition-colors"
            >
              Áudio
            </Link>

            <Link
              href="/autores"
              className="font-heading font-medium text-[15px] text-[#333] hover:text-primary transition-colors"
            >
              Música
            </Link>

            <Link
              href="/instrumentos"
              className="font-heading font-medium text-[15px] text-[#333] hover:text-primary transition-colors"
            >
              Instrumentos
            </Link>

            <a
              href="https://www.pikotshop.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading font-medium text-[15px] text-[#333] hover:text-primary transition-colors"
            >
              Loja Pikot
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <AdvancedSearch />

            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <Link href="https://www.pikotshop.com.br" target="_blank">
                Visitar Loja
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded hover:bg-accent/10 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in border-t">

            <div className="mb-4">
              <AdvancedSearch />
            </div>

            <Link
              href="/"
              className="block py-2 font-heading font-medium text-[15px] text-[#333] hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Início
            </Link>

            <Link
              href="/categorias"
              className="block py-2 font-heading font-medium text-[15px] text-[#333] hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Áudio
            </Link>

            <Link
              href="/autores"
              className="block py-2 font-heading font-medium text-[15px] text-[#333] hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Música
            </Link>

            <Link
              href="/instrumentos"
              className="block py-2 font-heading font-medium text-[15px] text-[#333] hover:text-primary transition-colors"
              onClick={() => setOpen(false)}
            >
              Instrumentos
            </Link>

            <a
              href="https://www.pikotshop.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 font-heading font-medium text-[15px] text-[#333] hover:text-primary transition-colors"
            >
              Loja Pikot
            </a>

            <Button className="w-full bg-accent hover:bg-accent-hover text-accent-foreground flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              <Link href="https://www.pikotshop.com.br" target="_blank">
                Visitar Loja
              </Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}
