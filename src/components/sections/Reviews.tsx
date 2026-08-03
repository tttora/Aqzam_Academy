"use client";

import { useState } from "react";
import Image from "next/image";

const videoReviews = [
  {
    name: "Айгүл Ж.",
    role: "Бастауыш сынып мұғалімі",
    video: "/reviews/review1.mp4",
  },
  {
    name: "Гүлнұр С.",
    role: "Тәрбиеші",
    video: "/reviews/review2.mp4",
  },
  {
    name: "Назерке А.",
    role: "Оқу орталығының жетекшісі",
    video: "/reviews/review3.mp4",
  },
];

const textReviews = [
  {
    name: "Айсұлу Қ.",
    role: "Мұғалім",
    text: "Гүлфайруз Ақзамқызының авторлық материалдары сабақтарымды мүлде басқа деңгейге шығарды. Балалардың қызығушылығы бірден артты.",
    rating: 5,
  },
  {
    name: "Жанар Т.",
    role: "Балабақша тәрбиешісі",
    text: "Сергіту сәттері балаларға өте ұнайды. Күн сайын қолданамыз.",
    rating: 5,
  },
  {
    name: "Динара Б.",
    role: "Оқу орталығы",
    text: "Курстан кейін өз оқу орталығымды аштым. Алған білімімнің пайдасы өте көп болды.",
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

      </div>
    </section>
  );
}