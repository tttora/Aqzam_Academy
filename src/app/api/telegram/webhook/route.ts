import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const update = await req.json();

  console.log("NEW UPDATE:");
  console.log(JSON.stringify(update, null, 2));

  const message = update.message;

  if (!message) {
    return NextResponse.json({ ok: true });
  }

  const text = message.text || "";

  const chatId = message.chat.id;
  const username = message.from?.username || null;

  if (text.startsWith("/start")) {
    const parts = text.split(" ");
    const orderCode = parts[1];

    if (!orderCode) {
      return NextResponse.json({ ok: true });
    }

    const { data: order, error } = await supabase
      .from("orders")
      .select("*")
      .eq("order_code", orderCode)
      .single();

    if (error || !order) {
      console.log("Order not found");
      return NextResponse.json({ ok: true });
    }

    await supabase
      .from("orders")
      .update({
        telegram_chat_id: chatId,
        telegram_username: username,
      })
      .eq("order_code", orderCode);

    console.log("Telegram connected:", orderCode);

    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: `
✅ Код принят!

Ваш заказ:
${order.product}

Ожидаем подтверждение оплаты.
          `,
        }),
      }
    );
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json({
    status: "Webhook is working ✅",
  });
}