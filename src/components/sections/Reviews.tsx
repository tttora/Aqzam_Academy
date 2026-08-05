"use client";

import { useState } from "react";
import Image from "next/image";

const videoReviews = [
  {
    name: "Айгүл Ж.",
    role: "Бастауыш сынып мұғалімі",
    video: "/images/отзыв1.mp4",
  },
  {
    name: "Гүлнұр С.",
    role: "Тәрбиеші",
    video: "/images/отзыв2.mp4",
  },
  {
    name: "Назерке А.",
    role: "Оқу орталығының жетекшісі",
    video: "/images/отзыв3.mp4",
  },
  {
    name: "Айгүл Ф.",
    role: "Бастауыш сынып мұғалімі",
    video: "/images/отзыв4.mp4",
  },
  {
    name: "Гүлнұр В.",
    role: "Тәрбиеші",
    video: "/images/отзыв5.mp4",
  },
  {
    name: "Назерке Л.",
    role: "Оқу орталығының жетекшісі",
    video: "/images/отзыв6.mp4",
  },
];

const textReviews = [
  {
    name: "Айсұлу Қ.",
    role: "Мұғалім",
    text: "Бүгінгі сабақ өте қатты ұнады😍 Мен 1-2 күнде мынанша білім аламын деп жүз ұйықтасам да кірмейтін болар🫢 мен ойладым 1 ай да үйренем деп. шок болды 1-2 күнде кітапты толық білгеніме😍 мотивация, жігер беріп жібердіңіз. тек оқи бергім келіп талпыныс күшті болып отыр🌸 рахмет сізге❤️",
    rating: 5,
  },
  {
    name: "Жанар Т.",
    role: "Балабақша тәрбиешісі",
    text: "Қосымша балаларды оқытып бастадым Сізден оқыған методика сізден оқыған техникамен Дәл сіз айтқандай әліппе нейрожазу коркем жазу математиканы қолданып бастадым Ровно 1 ай оқыткан балаларым, еш қиналмай жүргізіп оқып жүр. Диогностика жасауды да өте жақсы менгердім. Сізді ардайым айтып, мақтанып жүрем. Сізге алғысым шексіз.",
    rating: 5,
  },
  {
    name: "Динара Б.",
    role: "Оқу орталығы",
    text: "Гулфайруз Ақзамқызы сізге мың алғыс🙏🏻Барлық біліміңізді бізбен бөлісіп жатырсыз. Енбегіңіздің жемісін көріп біз сияқты шәкірттеріңіз көп болып, Маңғыстау ұстаздарының білімдерін арттыра беріңіз. Кешегі өткізген сабағыңыз мен үшін ерекше өтті. Тіл байлығым жетпеседе корқынышымды жеңе білуге үйретіп жатырсыз. Көп нәрсені үйретіп жатырсыз. Алғысым шексіз сізге😍",
    rating: 5,
  },
];
export default function Reviews() {
  const [tab, setTab] = useState<"video" | "text">("video");

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-white py-32 -mt-20"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="text-center">
          <span className="rounded-full bg-violet-200 px-5 py-2 text-sm font-semibold text-violet-700">
            Пікірлер
          </span>

          <h2 className="mt-6 font-heading text-5xl font-bold text-slate-900">
            Пікірлер
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-2xl leading-8 text-slate-600">
            Мұғалімдер мен ата-аналардың пікірлері.
          </p>
        </div>

        {/* Tabs */}

        <div className="mt-12 flex justify-center gap-4">
          <button
            onClick={() => setTab("video")}
            className={`rounded-full px-8 py-3 font-semibold transition ${
              tab === "video"
                ? "bg-violet-700 text-white"
                : "bg-violet-100 text-violet-700"
            }`}
          >
            🎥 Бейне пікірлер
          </button>

          <button
            onClick={() => setTab("text")}
            className={`rounded-full px-8 py-3 font-semibold transition ${
              tab === "text"
                ? "bg-violet-700 text-white"
                : "bg-violet-100 text-violet-700"
            }`}
          >
            💬 Жазбаша пікірлер
          </button>
        </div>

        {/* VIDEO REVIEWS */}

        {tab === "video" && (
          <div className="mt-16 grid grid-cols-3 gap-8">
            {videoReviews.map((review) => (
              <div
                key={review.name}
                className="overflow-hidden rounded-[32px] bg-white shadow-xl"
              >
                <video
                  controls
                  className="h-[520px] w-full object-cover"
                >
                  <source
                    src={review.video}
                    type="video/mp4"
                  />
                </video>

                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold">
                    {review.name}
                  </h3>

                  <p className="mt-2 text-slate-600">
                    {review.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TEXT REVIEWS */}

        {tab === "text" && (
          <div className="mt-16 grid grid-cols-3 gap-8">
            {textReviews.map((review) => (
              <div
                key={review.name}
                className="rounded-[32px] bg-gradient-to-br from-[#f8f5ff] to-white p-8 shadow-lg"
              >
                <div className="mb-5 flex gap-1 text-2xl">
                  {"⭐".repeat(review.rating)}
                </div>

                <p className="leading-8 text-slate-700">
                  "{review.text}"
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-200">
                    <Image
                      src="/images/avatar.png"
                      alt={review.name}
                      width={56}
                      height={56}
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      {review.name}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* INSTAGRAM CTA */}

        <div className="mt-20 rounded-[40px] bg-gradient-to-r from-violet-700 via-purple-600 to-pink-500 p-10 text-center text-white shadow-xl">
          <h3 className="font-heading text-3xl font-bold">
            Тағы да көптеген пікірлерді көргіңіз келе ме? ✨
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Біздің Instagram парақшамызда мұғалімдер мен ата-аналардың жүздеген пікірлері бар.
          </p>

          <a
            href="https://instagram.com/aqzam_academy"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-violet-700 transition hover:scale-105"
          >
            📸 Instagram-ға өту
          </a>
        </div>

      </div>
    </section>
  );
}