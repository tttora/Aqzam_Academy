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
    text: "Бүгінгі сабақ өте қатты ұнады😍 Мен 1-2 күнде мынанша білім аламын деп жүз ұйықтасам да кірмейтін болар🫢 мен ойладым 1 ай да үйренем деп. Шок болды 1-2 күнде кітапты толық білгеніме😍 Мотивация, жігер беріп жібердіңіз. Тек оқи бергім келіп талпыныс күшті болып отыр🌸 Рахмет сізге❤️",
    rating: 5,
  },
  {
    name: "Жанар Т.",
    role: "Балабақша тәрбиешісі",
    text: "Қосымша балаларды оқытып бастадым. Сізден оқыған методика, техникамен дәл сіз айтқандай әліппе, нейрожазу, көркем жазу, математиканы қолданып бастадым. Ровно 1 ай оқытқан балаларым еш қиналмай жүргізіп оқып жүр. Диагностика жасауды да өте жақсы меңгердім. Сізді әрдайым айтып, мақтанып жүрем. Сізге алғысым шексіз.",
    rating: 5,
  },
  {
    name: "Динара Б.",
    role: "Оқу орталығы",
    text: "Гүлфайруз Ақзамқызы, сізге мың алғыс🙏🏻 Барлық біліміңізді бізбен бөлісіп жатырсыз. Еңбегіңіздің жемісін көріп, біз сияқты шәкірттеріңіз көп болып, Маңғыстау ұстаздарының білімдерін арттыра беріңіз. Кешегі өткізген сабағыңыз мен үшін ерекше өтті. Көп нәрсені үйретіп жатырсыз. Алғысым шексіз😍",
    rating: 5,
  },
];

export default function Reviews() {
  const [tab, setTab] = useState<"video" | "text">("video");

  return (
    <section
      id="reviews"
      className="relative -mt-20 overflow-hidden bg-gradient-to-b from-white to-violet-50 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Header */}

        <div className="text-center">
          <span className="rounded-full bg-violet-200 px-5 py-2 text-sm font-semibold text-violet-700">
            Пікірлер
          </span>

          <h2 className="mt-6 font-heading text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Біз туралы не айтады?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 lg:text-lg">
            Мұғалімдер мен ата-аналардың шынайы пікірлері мен нәтижелері.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="text-2xl">⭐⭐⭐⭐⭐</span>

            <span className="text-lg font-bold text-slate-900">
              5.0 / 5
            </span>

            <span className="text-slate-500">
              • 900+ мұғалім сенім білдірді
            </span>
          </div>
        </div>

        {/* Tabs */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setTab("video")}
            className={`rounded-full px-8 py-3 font-semibold transition duration-300 ${
              tab === "video"
                ? "bg-violet-700 text-white shadow-lg"
                : "bg-violet-100 text-violet-700 hover:bg-violet-200"
            }`}
          >
            🎥 Бейне пікірлер
          </button>

          <button
            onClick={() => setTab("text")}
            className={`rounded-full px-8 py-3 font-semibold transition duration-300 ${
              tab === "text"
                ? "bg-violet-700 text-white shadow-lg"
                : "bg-violet-100 text-violet-700 hover:bg-violet-200"
            }`}
          >
            💬 Жазбаша пікірлер
          </button>
        </div>

        {/* VIDEO REVIEWS */}

        {tab === "video" && (
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {videoReviews.map((review) => (
              <div
                key={review.name}
                className="overflow-hidden rounded-[32px] border border-violet-100 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <video
                  controls
                  preload="metadata"
                  className="aspect-[9/16] w-full object-cover"
                >
                  <source src={review.video} type="video/mp4" />
                </video>

                <div className="p-6">
                  <h3 className="font-heading text-2xl font-bold text-slate-900">
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
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {textReviews.map((review) => (
              <div
                key={review.name}
                className="rounded-[32px] border border-violet-100 bg-gradient-to-br from-[#faf8ff] to-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-5 flex gap-1 text-2xl">
                  {"⭐".repeat(review.rating)}
                </div>

                <p className="max-h-56 overflow-y-auto pr-2 leading-8 text-slate-700">
                  “{review.text}”
                </p>

                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-violet-200">
                    <Image
                      src="/images/avatar.png"
                      alt={review.name}
                      width={56}
                      height={56}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900">
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

        {/* Instagram CTA */}

        <div className="mt-20 overflow-hidden rounded-[40px] bg-gradient-to-r from-violet-700 via-purple-600 to-pink-500 p-8 text-center text-white shadow-2xl sm:p-10 lg:p-14">
          <span className="inline-block rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-md">
            Instagram
          </span>

          <h3 className="mt-6 font-heading text-3xl font-bold sm:text-4xl">
            Тағы да көптеген пікірлерді көргіңіз келе ме? ✨
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 lg:text-lg">
            Instagram парақшамызда мұғалімдер мен ата-аналардың жүздеген
            пікірлері, оқушылардың нәтижелері және күнделікті пайдалы
            материалдар жарияланады.
          </p>

          <div className="mt-10">
            <a
              href="https://instagram.com/s_gulfairuz_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-lg font-bold text-violet-700 transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              📸 Instagram-ға өту
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}