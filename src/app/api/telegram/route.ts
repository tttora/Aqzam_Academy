import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { message, orderCode } = await request.json();

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const adminId = process.env.TELEGRAM_ADMIN_ID;

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: adminId,
        text: message,
        reply_markup: {
        inline_keyboard: [
        [
        {
          text: "✅ Төлемді растау",
          callback_data: `confirm_${orderCode}`,
        },
        ],
        ],
        },
      }),
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}