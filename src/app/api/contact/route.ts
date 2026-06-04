import { NextResponse } from 'next/server';

interface ContactBody {
  name?: string;
  email?: string;
  company?: string;
  leadVolume?: string;
  message?: string;
  hp_field?: string;
}

export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as ContactBody | null;
  if (!body) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  // honeypot — silently accept + drop
  if (body.hp_field) {
    return NextResponse.json({ ok: true });
  }

  if (!body.name || !body.email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? 'hi@askchimps.ai';
  const from = process.env.CONTACT_FROM ?? 'AskChimps <hi@askchimps.ai>';

  if (!apiKey) {
    // soft-fail in dev — log + accept so the UI doesn't error out before Resend is configured
    console.log('[contact] RESEND_API_KEY missing — would have emailed:', body);
    return NextResponse.json({ ok: true, dev: true });
  }

  const text = [
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    `Company: ${body.company ?? '—'}`,
    `Monthly leads: ${body.leadVolume ?? '—'}`,
    '',
    body.message ?? '',
  ].join('\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: body.email,
      subject: `New AskChimps lead — ${body.name} (${body.company ?? 'no company'})`,
      text,
    }),
  });

  if (!res.ok) {
    const err = await res.text().catch(() => '');
    console.error('[contact] resend failed', res.status, err);
    return NextResponse.json({ error: 'Email delivery failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
