"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t bg-muted/50 mt-16">
      <div className="container mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Sobre */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Sobre</h3>
            <p className="text-sm text-muted-foreground">
              Blog especializado em equipamentos de áudio, instrumentos musicais e acessórios
              para músicos profissionais e entusiastas.
            </p>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/sobre"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre Nós
                </Link>
              </li>

              <li>
                <Link
                  href="/contato"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </li>

              <li>
                <a
                  href="https://www.pikotshop.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Loja Pikot Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacidade"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </Link>
              </li>

              <li>
                <Link
                  href="/termos"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Termos de Uso
                </Link>
              </li>

              <li>
                <Link
                  href="/cookies"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Política de Cookies
                </Link>
              </li>

              <li>
                <Link
                  href="/lgpd"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LGPD
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter + Redes */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Receba as últimas novidades e guias direto no seu e-mail.
            </p>

            {/* Redes Sociais */}
            <div className="flex space-x-4 mb-4">
              <a
                href="https://facebook.com/pikotshop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="https://instagram.com/pikotshop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="https://youtube.com/pikotshop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>

              <a
                href="mailto:contato@pikotshop.com.br"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="E-mail"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Linha inferior */}
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Blog Pikot Shop. Todos os direitos reservados.</p>

          <p className="mt-2">
            Uma iniciativa da{" "}
            <a
              href="https://www.pikotshop.com.br"
              target="_blank"
              rel="noopener noreferrer"
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
