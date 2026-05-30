import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, email, telefon, kontaktweg, strasse, plz, ort, typ, groesse, zimmer, baujahr, zustand, info } = data;

    if (!name || !email || !strasse || !plz || !ort) {
      return NextResponse.json({ error: "Pflichtfelder fehlen" }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL ?? "info@cada-invest.de";

    if (!apiKey) {
      console.error("RESEND_API_KEY not set");
      return NextResponse.json({ error: "E-Mail-Konfiguration fehlt" }, { status: 500 });
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const html = `
      <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #2a2a2a;">
        <div style="background: #16542c; padding: 32px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 400;">
            Neue Immobilienbewertung
          </h1>
          <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0; font-size: 14px;">
            CADA Invest — Eingehende Anfrage
          </p>
        </div>
        <div style="background: #f8f4ef; padding: 32px; border-radius: 0 0 12px 12px;">

          <h2 style="font-size: 14px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #aa734a; margin-bottom: 16px;">
            Immobilie
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px; width: 160px;">Adresse</td><td style="padding: 8px 0; font-size: 14px;">${strasse}, ${plz} ${ort}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Art</td><td style="padding: 8px 0; font-size: 14px;">${typ || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Wohnfläche</td><td style="padding: 8px 0; font-size: 14px;">${groesse ? groesse + " m²" : "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Zimmer</td><td style="padding: 8px 0; font-size: 14px;">${zimmer || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Baujahr</td><td style="padding: 8px 0; font-size: 14px;">${baujahr || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Zustand</td><td style="padding: 8px 0; font-size: 14px;">${zustand || "—"}</td></tr>
            ${info ? `<tr><td style="padding: 8px 0; color: #888; font-size: 14px; vertical-align: top;">Infos</td><td style="padding: 8px 0; font-size: 14px;">${info}</td></tr>` : ""}
          </table>

          <div style="border-top: 1px solid rgba(170,115,74,0.2); margin: 24px 0;"></div>

          <h2 style="font-size: 14px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #aa734a; margin-bottom: 16px;">
            Kontakt
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px; width: 160px;">Name</td><td style="padding: 8px 0; font-size: 14px;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">E-Mail</td><td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #16542c;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Telefon</td><td style="padding: 8px 0; font-size: 14px;">${telefon || "—"}</td></tr>
            <tr><td style="padding: 8px 0; color: #888; font-size: 14px;">Kontaktweg</td><td style="padding: 8px 0; font-size: 14px;">${kontaktweg || "—"}</td></tr>
          </table>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "CADA Invest Website <noreply@cada-invest.de>",
      to: [toEmail],
      replyTo: email,
      subject: `Neue Bewertungsanfrage: ${strasse}, ${plz} ${ort}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Bewertung API error:", err);
    return NextResponse.json({ error: "Interner Fehler" }, { status: 500 });
  }
}
