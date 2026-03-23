import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const message = `
🚀 New Contact Form Submission

👤 Name: ${body.name}
📧 Email: ${body.email}
📞 Phone: ${body.phone || 'N/A'}
🏢 Company: ${body.company || 'N/A'}
📌 Subject: ${body.subject}

💬 Message:
${body.message}
  `;

  try {
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}