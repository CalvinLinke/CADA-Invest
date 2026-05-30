import { NextRequest, NextResponse } from "next/server";

const TO = process.env.CONTACT_EMAIL ?? "info@cada-invest.de";

export async function POST(req: NextRequest) {
  try {
    const { name, email, telefon, betreff, nachricht } = await req.json();

    if (!name || !email || !nachricht) {
      return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json({ error: "E-Mail-Konfiguration fehlt" }, { status: 500 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from:    "CADA Website <onboarding@resend.dev>",
      to:      TO,
      subject: `Kontaktanfrage: ${betreff || "Allgemeine Anfrage"} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#16542c;padding:32px;border-radius:8px 8px 0 0">
            <h2 style="color:#fff;margin:0;font-size:22px">Neue Kontaktanfrage</h2>
            <p style="color:rgba(255,255,255,.6);margin:8px 0 0;font-size:13px">über cada-invest.de/kontakt</p>
          </div>
          <div style="background:#f8f4ef;padding:32px;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#666;width:120px">Name</td><td style="padding:8px 0;color:#2a2a2a;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#666">E-Mail</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#16542c">${email}</a></td></tr>
              ${telefon ? `<tr><td style="padding:8px 0;color:#666">Telefon</td><td style="padding:8px 0;color:#2a2a2a">${telefon}</td></tr>` : ""}
              ${betreff ? `<tr><td style="padding:8px 0;color:#666">Betreff</td><td style="padding:8px 0;color:#2a2a2a">${betreff}</td></tr>` : ""}
            </table>
            <div style="margin-top:16px;padding-top:16px;border-top:1px solid #e5e7eb">
              <p style="color:#666;font-size:13px;margin:0 0 8px">Nachricht:</p>
              <p style="color:#2a2a2a;white-space:pre-wrap;margin:0">${nachricht}</p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
