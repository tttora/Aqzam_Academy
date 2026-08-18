import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { telegramChannels } from "@/lib/telegramChannels";

export async function POST(req: Request) {
  console.log("🚀 WEBHOOK START");

  const update = await req.json();

  console.log("FROM TELEGRAM:", update);
  console.log("FULL UPDATE:");
  console.log(JSON.stringify(update, null, 2));
  if (update.callback_query) {
  const callbackData = update.callback_query.data;

  if (callbackData.startsWith("confirm_")) {
    const orderCode = callbackData.replace("confirm_", "");
    const { data: order } = await supabaseAdmin
      .from("orders")
      .select("*")
      .eq("order_code", orderCode)
      .single();

      if (!order) {
      return NextResponse.json({ ok: true });
    }
    if (order.payment_status === "paid") {
      await fetch(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/answerCallbackQuery`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            callback_query_id: update.callback_query.id,
            text: "⚠️ Бұл тапсырыстың төлемі бұрын расталған.",
            show_alert: true,
          }),
        }
      );
    
      return NextResponse.json({ ok: true });
    }
    console.log("CONFIRM ORDER:", orderCode);

    const { data: updatedOrder, error } = await supabaseAdmin
      .from("orders")
      .update({
        payment_status: "paid",
      })
      .eq("order_code", orderCode)
      .select();

    console.log("PAYMENT UPDATED:", updatedOrder);
    console.log("PAYMENT ERROR:", error);

    const paidOrder = updatedOrder?.[0];

    if (paidOrder) {
      const channels = telegramChannels[paidOrder.product] || [];

      if (channels.length > 0 && paidOrder.telegram_chat_id) {
        await fetch(
          `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              chat_id: paidOrder.telegram_chat_id,
              text: `
                🎉 Төлеміңіз сәтті расталды!

                Құрметті оқырман!

                Материалдарыңызға қолжетімділік ашылды.

                📚 Сілтемелер:

                ${channels
                  .map((link, index) => `${index + 1}. ${link}`)
                  .join("\n")}

                ━━━━━━━━━━━━━━━

                📩 Сұрақтарыңыз болса,
                бізбен әрқашан байланыса аласыз.

                Іске сәт! 💜

                Aqzam Academy
                `,   
              
            }),
          }
        );
      }
    }

    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/editMessageReplyMarkup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: update.callback_query.message.chat.id,
          message_id: update.callback_query.message.message_id,
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "✅ Төлем расталды!",
                  callback_data: "already_paid",
                },
              ],
            ],
          },
        }),
      }
    );

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
            ✅ Төлем сәтті расталды.

            Тапсырыс коды:
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
    console.log(
        "SERVICE KEY EXISTS:",
        !!process.env.SUPABASE_SERVICE_ROLE_KEY
    );

    if (!orderCode) {
      return NextResponse.json({ ok: true });
    }


    console.log("ORDER CODE FROM TELEGRAM:", orderCode);

    const { data: order, error } = await supabaseAdmin
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

    const { data: updatedOrder, error: updateError } = await supabaseAdmin
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
          ✅ Код қабылданды!

          Сіздің тапсырысыңыз:
          ${order.product}
          
          Cілтемеге өтіп төлем жасаңыз: https://pay.kaspi.kz/pay/hkldv1vm

          Төлем расталғаннан кейін материалдарға қолжетімділік беріледі.
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