import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, telefon, immobilienart, adresse, groesse, zustand, anmerkungen } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json({ error: "E-Mail-Konfiguration fehlt" }, { status: 500 });
    }

    const toEmail = process.env.CONTACT_EMAIL ?? "info@cada-invest.de";

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from:    "CADA Website <onboarding@resend.dev>",
      to:      toEmail,
      replyTo: email,
      subject: `Deal-Anfrage von ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
          <div style="background:#16542c;padding:32px;border-radius:8px 8px 0 0">
            <h2 style="color:#fff;margin:0;font-size:22px">Neue Deal-Anfrage</h2>
            <p style="color:rgba(255,255,255,.6);margin:8px 0 0;font-size:13px">über cada-invest.de/partner</p>
          </div>
          <div style="background:#f8f4ef;padding:32px;border-radius:0 0 8px 8px">
            <table style="width:100%;border-collapse:collapse;font-size:14px">
              <tr><td style="padding:8px 0;color:#666;width:120px">Name</td><td style="padding:8px 0;color:#2a2a2a;font-weight:600">${name}</td></tr>
              <tr><td style="padding:8px 0;color:#666">E-Mail</td><td style="padding:8px 0"><a href="mailto:${email}" style="color:#16542c">${email}</a></td></tr>
              ${telefon ? `<tr><td style="padding:8px 0;color:#666">Telefon</td><td style="padding:8px 0;color:#2a2a2a">${telefon}</td></tr>` : ""}
              ${immobilienart ? `<tr><td style="padding:8px 0;color:#666">Immobilienart</td><td style="padding:8px 0;color:#2a2a2a">${immobilienart}</td></tr>` : ""}
              ${adresse ? `<tr><td style="padding:8px 0;color:#666">Adresse</td><td style="padding:8px 0;color:#2a2a2a">${adresse}</td></tr>` : ""}
              ${groesse ? `<tr><td style="padding:8px 0;color:#666">Größe</td><td style="padding:8px 0;color:#2a2a2a">${groesse} m²</td></tr>` : ""}
              ${zustand ? `<tr><td style="padding:8px 0;color:#666">Zustand</td><td style="padding:8px 0;color:#2a2a2a">${zustand}</td></tr>` : ""}
              ${anmerkungen ? `<tr><td style="padding:8px 0;color:#666;vertical-align:top">Anmerkungen</td><td style="padding:8px 0;color:#2a2a2a;white-space:pre-wrap">${anmerkungen}</td></tr>` : ""}
            </table>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
