"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-white mt-0"> 
      <div className="container mx-auto px-4 py-12">

        {/* ===== GRID 4 COLUNAS ===== */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* ================= COLUNA 1 – LOGO + DESCRIÇÃO + REDES ================= */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/pikot-blog.svg"
                alt="Pikot Blog"
                width={160}
                height={50}
                priority
              />
            </Link>

            <p className="text-sm text-muted-foreground mb-4 max-w-[260px]">
              Blog especializado em equipamentos de áudio, instrumentos musicais e acessórios
              para músicos profissionais e entusiastas.
            </p>

            {/* Redes Sociais */}
            <div className="flex space-x-4">
              <a href="https://facebook.com/pikotshop" target="_blank" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/pikotshop" target="_blank" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@pikotshop" target="_blank" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="mailto:contato@pikotshop.com.br" className="text-muted-foreground hover:text-primary">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* ================= COLUNA 2 – LINKS ÚTEIS ================= */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/contato" className="text-muted-foreground hover:text-primary">
                  Contato
                </Link>
              </li>
              <li>
                <a
                  href="https://www.pikotshop.com.br"
                  target="_blank"
                  className="text-muted-foreground hover:text-primary"
                >
                  Loja Pikot Shop
                </a>
              </li>
            </ul>
          </div>

          {/* ================= COLUNA 3 – LEGAL ================= */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacidade" className="text-muted-foreground hover:text-primary">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-muted-foreground hover:text-primary">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/lgpd" className="text-muted-foreground hover:text-primary">
                  LGPD
                </Link>
              </li>
            </ul>
          </div>

          {/* ================= COLUNA 4 – TELEFONE + SELOS ================= */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Telefone</h3>

            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-primary mt-1" />
              <div>
                <p className="font-semibold text-sm text-foreground">Atendimento</p>
                <p className="text-sm text-muted-foreground">(47) 3307-6468</p>
              </div>
            </div>

            {/* Selos de segurança */}
            <div className="flex items-center space-x-4 pt-6">
              {/* Google Safe Browsing */}
              <a
                href="https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fblog.pikotshop.com.br%2F"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/selos/google-safe.svg"
                  alt="Google Safe Browsing"
                  width={150}
                  height={40}
                  className="hover:opacity-80 transition"
                />
              </a>

              {/* Comodo Secure */}
              <a
                href="https://www.sslshopper.com/ssl-checker.html#hostname=https://blog.pikotshop.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/selos/comodo-secure.svg"
                  alt="Comodo Secure"
                  width={130}
                  height={40}
                  className="hover:opacity-80 transition"
                />
              </a>
            </div>
          </div>

        </div>

        {/* ===== LINHA INFERIOR ===== */}
        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Blog Pikot Shop. Todos os direitos reservados.</p>

          <p className="mt-2">
            Uma iniciativa da{" "}
            <a
              href="https://www.pikotshop.com.br"
              target="_blank"
              className="text-accent hover:underline"
            >
              Pikot Shop
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};
