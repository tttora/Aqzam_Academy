"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#hero", label: "Басты бет" },
    { href: "#products", label: "Материалдар" },
    { href: "#jinaktar", label: "Жинақтар" },
    { href: "#reviews", label: "Пікірлер" },
    { href: "#aboutme", label: "Автор" },
    { href: "#contacts", label: "Байланысу" },
  ];

  return (
    <>
      <header
        className="
          fixed
          left-1/2
          top-4
          z-50
          flex
          w-[92%]
          max-w-[1400px]
          -translate-x-1/2
          items-center
          justify-between
          rounded-full
          border
          border-white/40
          bg-white/25
          px-4
          py-2.5
          shadow-lg
          backdrop-blur-2xl

          sm:px-6
          sm:py-3

          md:px-8
        "
      >
        {/* Logo */}
        <a href="/">
          <Image
            src="/images/logo.png"
            alt="Aqzam Academy"
            width={95}
            height={95}
            priority
            className="
              h-[60px]
              w-auto

              sm:h-[70px]

              lg:h-[90px]
            "
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8 text-lg font-semibold text-gray-700">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-violet-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          <button className="hidden md:block rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700">
            Сатып алу
          </button>

          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              bg-violet-600
              shadow-lg
              transition
              duration-200
              hover:scale-105
              hover:bg-violet-700
              active:scale-95
              lg:hidden
            "
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black/30 lg:hidden"
            onClick={() => setOpen(false)}
          />

          <div
            className="
              fixed
              left-1/2
              top-24
              z-40
              w-[92%]
              -translate-x-1/2
              rounded-[28px]
              border
              border-white/40
              bg-white/95
              p-6
              shadow-2xl
              backdrop-blur-2xl
              lg:hidden
            "
          >
            <nav className="flex flex-col gap-5 text-lg font-semibold text-gray-700">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="transition hover:text-violet-700"
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700"
              >
                Сатып алу
              </button>
            </nav>
          </div>
        </>
      )}
    </>
  );
}