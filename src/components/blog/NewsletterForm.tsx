"use client";

import { useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const NewsletterFormPikot = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      toast({
        title: "E-mail inválido",
        description: "Digite um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("newsletter_subscribers").insert({
      email,
      name,
    });

    setLoading(false);

    if (error) {
      toast({
        title: "Erro ao cadastrar",
        description: "Tente novamente.",
        variant: "destructive",
      });
      return;
    }

    setSuccess(true);
    setEmail("");
    setName("");

    toast({
      title: "Inscrição realizada!",
      description: "Você receberá nossas novidades por e-mail.",
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="w-full bg-[#0E5960] py-6 footer-padding">
      <div className="container mx-auto">
        <div className="flex justify-between items-center newsletter">

          {/* Texto */}
          <div className="flex items-center info">
            <div className="text text-white uppercase font-bold">
              <div className="first text-[23px] leading-tight">
                Cadastre-se em nossa newsletter
              </div>
              <div className="last text-sm opacity-100 font-light">
                e receba novidades e promoções
              </div>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="form">
            <div className="flex gap-2">

              <input
                type="text"
                placeholder="Seu nome"
                className="field h-16 px-8 rounded-sm bg-white !text-black !opacity-100 font-light outline-none placeholder:font-light placeholder:!text-black placeholder:!opacity-100"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={loading}
              />

              <input
                type="email"
                placeholder="Seu e-mail"
                className="field h-16 px-8 rounded-sm bg-white !text-black !opacity-100 font-light outline-none placeholder:font-light placeholder:!text-black placeholder:!opacity-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />

              <button
                type="submit"
                className="button news-button bg-[#FF5100] hover:bg-[#e84900] text-white font-bold text-sm px-6 rounded-sm flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : success ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <span>CADASTRE-SE</span>
                )}
              </button>

            </div>
          </form>

        </div>
      </div>
    </div>
  );
};
