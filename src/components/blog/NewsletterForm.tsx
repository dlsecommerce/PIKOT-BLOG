"use client";

import { useState } from "react";
import { Mail, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface NewsletterFormProps {
  variant?: "default" | "compact" | "hero";
}

export const NewsletterForm = ({ variant = "default" }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("newsletter_subscribers")
      .insert({ email });

    setLoading(false);

    if (error) {
      if (error.code === "23505") {
        toast({
          title: "E-mail já cadastrado",
          description: "Este e-mail já está inscrito na nossa newsletter.",
        });
      } else {
        toast({
          title: "Erro ao cadastrar",
          description: "Tente novamente em instantes.",
          variant: "destructive",
        });
      }
      return;
    }

    setSuccess(true);
    setEmail("");

    toast({
      title: "Inscrição realizada!",
      description: "Agora você receberá nossas novidades por e-mail.",
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  // 🟩 VARIANTE HERO (para seções grandes)
  if (variant === "hero") {
    return (
      <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-lg text-center">
        <Mail className="h-12 w-12 text-primary-foreground mx-auto mb-4" />

        <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2">
          Fique por dentro das novidades!
        </h3>

        <p className="text-primary-foreground/90 mb-6">
          Receba guias, dicas e promoções exclusivas direto no seu e-mail.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-background/90 border-0"
            disabled={loading}
          />

          <Button
            type="submit"
            className="bg-accent hover:bg-accent-hover text-accent-foreground"
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : success ? (
              <CheckCircle className="h-5 w-5" />
            ) : (
              "Inscrever"
            )}
          </Button>
        </form>
      </div>
    );
  }

  // 🟧 VARIANTE COMPACT (para footers e seções reduzidas)
  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2 w-full">
        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1"
          disabled={loading}
        />

        <Button
          type="submit"
          size="sm"
          className="bg-accent hover:bg-accent-hover text-accent-foreground"
          disabled={loading}
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "OK"}
        </Button>
      </form>
    );
  }

  // 🟦 VARIANTE DEFAULT (com título e bloco completo)
  return (
    <div className="bg-card border rounded-lg p-6">
      <div className="flex items-center gap-2 mb-3">
        <Mail className="h-5 w-5 text-primary" />
        <h3 className="font-display font-bold">Newsletter</h3>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Receba novidades e promoções direto no seu e-mail.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />

        <Button
          type="submit"
          className="w-full bg-accent hover:bg-accent-hover text-accent-foreground"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
          ) : success ? (
            <CheckCircle className="h-4 w-4 mr-2" />
          ) : (
            <Mail className="h-4 w-4 mr-2" />
          )}
          {success ? "Inscrito!" : "Inscrever-se"}
        </Button>
      </form>
    </div>
  );
};
