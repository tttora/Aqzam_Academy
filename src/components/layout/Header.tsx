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
          top-6
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
          px-5
          py-3
          shadow-lg
          backdrop-blur-2xl
          md:px-8
        "
      >
        <a href="/">
          <Image
            src="/images/logo.png"
            alt="Aqzam Academy"
            width={95}
            height={95}
            priority
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

        <div className="flex items-center gap-3">
          <button className="hidden sm:block rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700">
            Сатып алу
          </button>

          {/* Burger */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M3 6h20" />
                  <path d="M3 12h20" />
                  <path d="M3 18h20" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            fixed
            left-1/2
            top-28
            z-40
            w-[92%]
            -translate-x-1/2
            rounded-[28px]
            border
            border-white/40
            bg-white/90
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

            <button className="mt-3 rounded-full bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700">
              Сатып алу
            </button>
          </nav>
        </div>
      )}
    </>
  );
}