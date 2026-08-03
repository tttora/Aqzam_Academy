"use client";

import { useState } from "react";

const videos = [
  {
    src: "/images/sergitu1.mp4",
    title: "Сергіту сәті №1",
  },
  {
    src: "/images/sergitu2.mp4",
    title: "Сергіту сәті №2",
  },
  {
    src: "/images/sergity3.mp4",
    title: "Сергіту сәті №3",
  },
  {
    src: "/images/sergitu4.mp4",
    title: "Сергіту сәті №4",
  },
];

export default function Videos() {
  const [current, setCurrent] = useState(0);

  const prevVideo = () => {
    setCurrent((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  const nextVideo = () => {
    setCurrent((prev) =>
      prev === videos.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="videos"
      className="-mt-30 relative overflow-hidden bg-white py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="text-center">
          <span className="rounded-full bg-violet-200 px-5 py-2 text-sm font-semibold text-violet-700">
            Сергіту сәттері
          </span>

          <h2 className="mt-6 font-heading text-5xl font-bold text-slate-900">
            Сабақ қалай өтеді?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Авторлық сергіту сәттерінің қысқа үзінділерін көріп,
            сабақтың атмосферасымен танысыңыз.
          </p>
        </div>

        {/* Video */}

        <div className="mt-10 flex items-center justify-center gap-8">
          {/* Left */}

          <button
            onClick={prevVideo}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 shadow-xl transition hover:scale-110 hover:bg-violet-100"
          >
            <span className="text-3xl text-violet-500">←</span>
          </button>

          {/* Video */}

          <div className="overflow-hidden rounded-[40px] bg-white shadow-2xl">
            <video
              key={videos[current].src}
              src={videos[current].src}
              controls
              className="h-[500px] w-[640px] object-cover object-[30%_50%] brightness-50"
            />
          </div>

          {/* Right */}

          <button
            onClick={nextVideo}
            className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 shadow-xl transition hover:scale-110 hover:bg-violet-100"
          >
            <span className="text-3xl text-violet-500">→</span>
          </button>
        </div>

        {/* Title */}

        <h3 className="mt-8 text-center font-heading text-3xl font-bold text-slate-900">
          {videos[current].title}
        </h3>

        {/* Dots */}

        <div className="mt-8 flex justify-center gap-3">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition ${
                current === index
                  ? "bg-violet-700 w-8"
                  : "bg-violet-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}