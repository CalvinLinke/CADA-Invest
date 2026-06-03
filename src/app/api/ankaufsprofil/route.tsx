import React from "react";
import { renderToBuffer } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { AnkaufsprofilPDF } from "@/components/AnkaufsprofilPDF";

export const dynamic = "force-dynamic";

export async function GET() {
  const qrOpts = { width: 200, margin: 1, color: { dark: "#16542c", light: "#ffffff" } };

  const vcardCalvin = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Calvin Linke",
    "N:Linke;Calvin;;;",
    "ORG:CADA Invest GmbH",
    "TITLE:Geschäftsführer",
    "TEL;TYPE=CELL:+49 162 1766880",
    "EMAIL:info@cada-invest.de",
    "END:VCARD",
  ].join("\n");

  const vcardDave = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:Dave Blümel",
    "N:Blümel;Dave;;;",
    "ORG:CADA Invest GmbH",
    "TITLE:Geschäftsführer",
    "TEL;TYPE=CELL:+49 174 4853652",
    "EMAIL:info@cada-invest.de",
    "END:VCARD",
  ].join("\n");

  const [qrCodeCalvin, qrCodeDave] = await Promise.all([
    QRCode.toDataURL(vcardCalvin, qrOpts),
    QRCode.toDataURL(vcardDave, qrOpts),
  ]);

  const buffer = await renderToBuffer(<AnkaufsprofilPDF qrCodeCalvin={qrCodeCalvin} qrCodeDave={qrCodeDave} />);

  return new Response(buffer as unknown as BodyInit, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="CADA-Invest-Ankaufsprofil.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
