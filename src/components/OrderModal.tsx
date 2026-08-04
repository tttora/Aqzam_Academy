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
  const [orderCode, setOrderCode] = useState("");
  const [copied, setCopied] = useState(false);

  async function handleSubmit() {
    const newOrderCode = `AQZ-${Math.floor(100000 + Math.random() * 900000)}`;
    console.log("ORDER CODE:", newOrderCode);
    const { error } = await supabase
        .from("orders")
        .insert({
            order_code: newOrderCode,

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
        console.log("SENDING TELEGRAM", newOrderCode);
        const telegramResponse = await fetch("/api/telegram", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            message: `
                🔔 Жаңа тапсырыс!

                🆔 Код: ${newOrderCode}

                👤 Аты: ${name}

                📧 Email: ${email}

                📱 Телефон: ${phone}

                📚 Курс: ${product}

                💰 Бағасы: ${amount} ₸


                ⏳ Төлем күтілуде
            `,
            orederCode: newOrderCode,
        }),
    });

    const telegramData = await telegramResponse.json();
    console.log("Telegram:", telegramData);

    setOrderCode(newOrderCode);
    setSubmitted(true);

  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-[90%] max-w-md rounded-3xl bg-white p-8">

        {submitted ? (
          <>
            <h2 className="text-center text-3xl font-bold text-violet-700">
              🎉 Тапсырысыңыз қабылданды!
            </h2>

            <p className="mt-5 text-center text-gray-600">
              Материалдарға қолжетімділік алу үшін
              алдымен Telegram ботқа тапсырыс кодын жіберіңіз.
            </p>

            <div className="my-6 rounded-2xl border-2 border-dashed border-violet-300 bg-violet-50 p-5 text-center">
              <p className="text-sm text-gray-500">
                Тапсырыс коды
              </p>

              <p className="mt-2 text-3xl font-bold tracking-widest text-violet-700">
                {orderCode}
              </p>
            </div>

            <div className="mb-6 rounded-2xl bg-amber-50 p-4 text-sm text-amber-900">
              <p className="font-semibold">
                📌 Келесі қадамдар:
              </p>

              <ol className="mt-2 list-decimal space-y-1 pl-5">
                <li>Төмендегі батырма арқылы Telegram ботқа өтіңіз.</li>
                <li><b>/start {orderCode}</b> командасын жіберіңіз.</li>
                <li>Бот сізге Kaspi төлем сілтемесін жібереді.</li>
                <li>Төлем расталғаннан кейін материалдарға қолжетімділік ашылады.</li>
              </ol>
            </div>

            <button
              onClick={() => {
                navigator.clipboard.writeText(`/start ${orderCode}`);
                setCopied(true);

                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
              className="mb-3 w-full rounded-full bg-violet-100 py-3 font-semibold text-violet-700 transition hover:bg-violet-200"
            >
              {copied
                ? "✅ Көшірілді"
                : "📋 /start кодын көшіру"}
            </button>

            <a
              href="https://t.me/S_GulfairuzBot"
              target="_blank"
              className="block w-full rounded-full bg-sky-500 py-3 text-center font-semibold text-white transition hover:bg-sky-600"
            >
              🤖 Telegram ботқа өту
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