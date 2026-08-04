import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const update = await req.json();
  console.log("FROM WEBSITE:", update);

  console.log("NEW UPDATE:");
  console.log(JSON.stringify(update, null, 2));
  if (update.callback_query) {
  const callbackData = update.callback_query.data;

  if (callbackData.startsWith("confirm_")) {
    const orderCode = callbackData.replace("confirm_", "");

    console.log("CONFIRM ORDER:", orderCode);

    const { data: updatedOrder, error } = await supabase
      .from("orders")
      .update({
        payment_status: "paid",
      })
      .eq("order_code", orderCode)
      .select();

    console.log("PAYMENT UPDATED:", updatedOrder);
    console.log("PAYMENT ERROR:", error);

    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: update.callback_query.message.chat.id,
          text: `
            ✅ Оплата подтверждена!

            Код заказа:
            ${orderCode}
          `,
        }),
      }
    );
  }

  return NextResponse.json({ ok: true });
}
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
    console.log("SUPABASE URL:", process.env.NEXT_PUBLIC_SUPABASE_URL);

    if (!orderCode) {
      return NextResponse.json({ ok: true });
    }

    console.log("ORDER CODE FROM TELEGRAM:", orderCode);

    const { data: order, error } = await supabase
      .from("orders")
      .select("*")
      .eq("order_code", orderCode)
      .single();

    console.log("FOUND ORDER:", order);
    console.log("FIND ERROR:", error);

    if (error || !order) {
      console.log("Order not found");
      return NextResponse.json({ ok: true });
    }

    const { data: updatedOrder, error: updateError } = await supabase
        .from("orders")
        .update({
            telegram_chat_id: chatId,
            telegram_username: username,
        })
        .eq("order_code", orderCode)
        .select();

    console.log("UPDATED ORDER:", updatedOrder);
    console.log("UPDATE ERROR:", updateError);

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