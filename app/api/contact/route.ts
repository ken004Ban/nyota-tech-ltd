import { NextResponse } from "next/server";
import { COMPANY } from "@/lib/constants";

export const runtime = "nodejs";

type Body = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * POST /api/contact
 * Sends inbound messages via Resend (https://resend.com) using fetch — no extra SDK.
 * Set RESEND_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL in the environment.
 */
export async function POST(req: Request) {
  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured. Set RESEND_API_KEY, CONTACT_FROM_EMAIL, and CONTACT_TO_EMAIL.",
      },
      { status: 503 },
    );
  }

  const subject = `[${COMPANY.brandName}] Message from ${name}`;
  const text = `Name: ${name}\nEmail: ${email}\n\n${message}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Resend error:", res.status, errText);
    return NextResponse.json(
      { error: "Could not send message. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
