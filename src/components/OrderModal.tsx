"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

const KASPI_LINK = "https://pay.kaspi.kz/pay/hkldv1vm";

type OrderModalProps = {
  product: string;
  amount: number;
  onClose: () => void;
};

export default function OrderModal({
  product,
  amount,
  onClose,
}: OrderModalProps) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit() {
    const orderCode = `AQZ-${Math.floor(100000 + Math.random() * 900000)}`;
    console.log("ORDER CODE:", orderCode);
    const { error } = await supabase
        .from("orders")
        .insert({
            order_code: orderCode,

            costumer_name: name,
            email,
            phone,
            product,
            amount,

            payment_status: "pending",

            telegram_invite_link: "",
        });

        if (error) {
            console.log(error);
            alert("Қате орын алды");
            return;
        }

        const telegramResponse = await fetch("/api/telegram", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            message: `
            🔔 Жаңа тапсырыс!

            🆔 Код: ${orderCode}

            👤 Аты: ${name}

            📧 Email: ${email}

            📱 Телефон: ${phone}

            📚 Курс: ${product}

            💰 Бағасы: ${amount} ₸


            ⏳ Төлем күтілуде
            `,
        }),
    });

    const telegramData = await telegramResponse.json();
    console.log("Telegram:", telegramData);

    setSubmitted(true);

    alert(`
        Тапсырыс қабылданды!

        Сіздің код:
        ${orderCode}

        Telegram ботқа енгізіңіз:

        /start ${orderCode}
        `);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-[90%] max-w-md rounded-3xl bg-white p-8">

        {submitted ? (
          <>
            <h2 className="mb-4 text-2xl font-bold text-slate-800">
              Өтініш қабылданды 🎉
            </h2>

            <p className="mb-6 text-slate-600">
              Төлем жасау үшін Kaspi арқылы төлеңіз.
            </p>

            <a
              href={KASPI_LINK}
              target="_blank"
              className="block rounded-full bg-violet-700 py-3 text-center font-semibold text-white transition hover:bg-violet-800"
            >
              Kaspi арқылы төлеу
            </a>

            <button
              onClick={onClose}
              className="mt-3 w-full text-gray-500"
            >
              Жабу
            </button>
          </>
        ) : (
          <>
            <h2 className="mb-6 text-2xl font-bold text-slate-800">
              Сатып алу: {product}
            </h2>

            <input
              placeholder="Аты-жөні"
              className="mb-3 w-full rounded-xl border border-violet-200 bg-violet-50 p-3 text-slate-900 placeholder:text-slate-500"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Email"
              className="mb-3 w-full rounded-xl border border-violet-200 bg-violet-50 p-3 text-slate-900 placeholder:text-slate-500"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              placeholder="Телефон нөмірі"
              className="mb-3 w-full rounded-xl border border-violet-200 bg-violet-50 p-3 text-slate-900 placeholder:text-slate-500"
              onChange={(e) => setPhone(e.target.value)}
            />

            <p className="mb-4 rounded-2xl bg-violet-50 p-4 text-sm text-slate-700">
                ⚠️ Төлем жасамас бұрын Telegram ботымызға кіріп,
                <span className="font-semibold"> Start </span>
                батырмасын басыңыз.
            </p>

            <a
                href="https://t.me/S_GulfairuzBot"
                target="_blank"
                className="mb-4 block w-full rounded-full bg-sky-500 py-3 text-center font-semibold text-white transition hover:bg-sky-600"
            >
            🤖 Telegram ботты ашу
            </a>

            <button
              onClick={handleSubmit}
              className="w-full rounded-full bg-violet-700 py-3 text-white transition hover:bg-violet-800"
            >
              Жіберу
            </button>

            <button
              onClick={onClose}
              className="mt-3 w-full text-gray-500"
            >
              Бас тарту
            </button>
          </>
        )}

      </div>

    </div>
  );
}