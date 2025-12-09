import { NextResponse } from "next/server";

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_LIST_ID = Number(process.env.BREVO_LIST_ID ?? "2"); // você pode deixar 2 fixo se quiser

export async function POST(req: Request) {
  try {
    if (!BREVO_API_KEY) {
      console.error("❌ BREVO_API_KEY não encontrada nas variáveis de ambiente.");
      return NextResponse.json(
        { error: "Configuração do Brevo ausente no servidor." },
        { status: 500 }
      );
    }

    const data = await req.json();

    const email = data.email as string | undefined;
    const name = (data.name as string | undefined) ?? "";
    const utm_source = data.utm_source as string | undefined;
    const utm_medium = data.utm_medium as string | undefined;
    const utm_campaign = data.utm_campaign as string | undefined;
    const utm_term = data.utm_term as string | undefined;
    const utm_content = data.utm_content as string | undefined;

    if (!email) {
      console.error("❌ Webhook recebido sem e-mail válido:", data);
      return NextResponse.json(
        { error: "Payload inválido: email ausente" },
        { status: 400 }
      );
    }

    console.log("📩 Novo inscrito recebido do Supabase via webhook:");
    console.log("Email:", email);
    console.log("Nome:", name);
    console.log("IP:", data.signup_ip);
    console.log("UTM Source:", utm_source);
    console.log("UTM Medium:", utm_medium);
    console.log("UTM Campaign:", utm_campaign);
    console.log("UTM Term:", utm_term);
    console.log("UTM Content:", utm_content);
    console.log("-------------------------------------------");

    // Monta o payload para a API do Brevo
    const brevoPayload: any = {
      email,
      listIds: [BREVO_LIST_ID],
      updateEnabled: true, // se já existir, ele atualiza
      attributes: {
        NOME: name || undefined,
        UTM_SOURCE: utm_source || undefined,
        UTM_MEDIUM: utm_medium || undefined,
        UTM_CAMPAIGN: utm_campaign || undefined,
        UTM_TERM: utm_term || undefined,
        UTM_CONTENT: utm_content || undefined,
      },
    };

    // Remove atributos undefined para não sujar o payload
    Object.keys(brevoPayload.attributes).forEach((key) => {
      if (brevoPayload.attributes[key] === undefined) {
        delete brevoPayload.attributes[key];
      }
    });

    console.log("📤 Enviando contato para o Brevo...");

    const brevoResponse = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify(brevoPayload),
    });

    const brevoText = await brevoResponse.text();

    if (!brevoResponse.ok) {
      console.error("❌ Erro ao enviar contato para o Brevo:");
      console.error("Status:", brevoResponse.status);
      console.error("Body:", brevoText);

      return NextResponse.json(
        {
          error: "Falha ao enviar contato para o Brevo",
          status: brevoResponse.status,
          body: brevoText,
        },
        { status: 500 }
      );
    }

    console.log("✅ Contato enviado/atualizado no Brevo com sucesso.");
    console.log("Resposta do Brevo:", brevoText);

    return NextResponse.json(
      { message: "Webhook processado e contato enviado ao Brevo" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erro no processamento do webhook:", error);
    return NextResponse.json(
      { error: "Erro interno no webhook" },
      { status: 500 }
    );
  }
}
