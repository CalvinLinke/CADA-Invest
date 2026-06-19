type Fields = Record<string, string | number | undefined | null>;

export async function submitContact(opts: {
  subject: string;
  replyTo?: string;
  fields: Fields;
}): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    throw new Error("Web3Forms Access Key fehlt (NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY).");
  }

  const payload: Record<string, string> = {
    access_key: accessKey,
    subject: opts.subject,
    from_name: "CADA Invest Website",
  };

  if (opts.replyTo) {
    payload.replyto = opts.replyTo;
  }

  for (const [key, value] of Object.entries(opts.fields)) {
    if (value !== undefined && value !== null && String(value).trim() !== "") {
      payload[key] = String(value);
    }
  }

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });

  const result = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };

  if (!res.ok || !result.success) {
    throw new Error(result.message || "Versand fehlgeschlagen");
  }
}
