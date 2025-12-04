"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AdvancedSearch } from "@/components/blog/AdvancedSearch";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/pikot-blog.svg"
              alt="Pikot Blog"
              width={160}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="nav-item text-sm font-medium hover:text-primary">Inicio</Link>
            <Link href="/categorias" className="nav-item text-sm font-medium hover:text-primary">Categorias</Link>
            <Link href="/autores" className="nav-item text-sm font-medium hover:text-primary">Autores</Link>
            <Link href="/sobre" className="nav-item text-sm font-medium hover:text-primary">Sobre</Link>
            <a
              href="https://www.pikotshop.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-accent"
            >
              Loja Pikot
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <AdvancedSearch />

            <Button className="bg-accent hover:bg-accent-hover text-accent-foreground">
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

            <Link href="/" className="mobile-item" onClick={() => setOpen(false)}>Inicio</Link>
            <Link href="/categorias" className="mobile-item" onClick={() => setOpen(false)}>Categorias</Link>
            <Link href="/autores" className="mobile-item" onClick={() => setOpen(false)}>Autores</Link>
            <Link href="/sobre" className="mobile-item" onClick={() => setOpen(false)}>Sobre</Link>

            <a
              href="https://www.pikotshop.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-sm font-medium hover:text-accent"
            >
              Loja Pikot
            </a>

            <Button className="w-full bg-accent hover:bg-accent-hover text-accent-foreground">
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
