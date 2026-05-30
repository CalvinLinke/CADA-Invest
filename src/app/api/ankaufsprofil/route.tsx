import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { AnkaufsprofilPDF } from "@/components/AnkaufsprofilPDF";

export const dynamic = "force-dynamic";

export async function GET() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Calvin Linke",
    "N:Linke;Calvin;;;",
    "ORG:CADA Invest GmbH",
    "TITLE:Geschäftsführer",
    "TEL;TYPE=CELL:+49 1621766880",
    "EMAIL:Info@cada-invest.de",
    "END:VCARD",
  ].join("\n");

  const qrDataUrl = await QRCode.toDataURL(vcard, {
    width: 200,
    margin: 1,
    color: { dark: "#16542c", light: "#ffffff" },
  });

  const buffer = await renderToBuffer(<AnkaufsprofilPDF qrCode={qrDataUrl} />);

  return new Response(buffer as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="CADA-Invest-Ankaufsprofil.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
