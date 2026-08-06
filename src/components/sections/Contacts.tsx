import Image from "next/image";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#faf8ff] to-[#f3efff]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">

        {/* Header */}

        <div className="text-center">
          <span className="rounded-full bg-violet-200 px-5 py-2 text-sm font-semibold text-violet-700">
            Байланысу
          </span>

          <h2 className="mt-6 font-heading text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Бізбен байланысыңыз
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700 lg:text-lg">
            Сұрақтарыңыз болса немесе материалдарды сатып алғыңыз келсе,
            бізге өзіңізге ыңғайлы тәсілмен хабарласа аласыз.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 lg:mt-20 lg:gap-8">

          {/* Phone */}

          <a
            href="tel:+77756064717"
            className="group rounded-[36px] border border-violet-100 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl lg:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 lg:h-16 lg:w-16">
              <Image
                src="/images/Phone_iOS.png"
                alt="Phone"
                width={34}
                height={34}
              />
            </div>

            <h3 className="mt-8 font-heading text-2xl font-bold text-slate-900 lg:text-3xl">
              Телефон
            </h3>

            <p className="mt-4 text-lg text-slate-600">
              +7 (775) 606-47-17
            </p>

            <p className="mt-8 font-semibold text-violet-700 transition group-hover:translate-x-1">
              Қоңырау шалу →
            </p>
          </a>

          {/* WhatsApp */}

          <a
            href="https://wa.me/77756064717?text=Сәлеметсіз%20бе!%20Оқу%20материалдары%20туралы%20ақпарат%20алғым%20келеді."
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[36px] border border-violet-100 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl lg:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 lg:h-16 lg:w-16">
              <Image
                src="/images/Whatsapp-IOS.png"
                alt="WhatsApp"
                width={34}
                height={34}
              />
            </div>

            <h3 className="mt-8 font-heading text-2xl font-bold text-slate-900 lg:text-3xl">
              WhatsApp
            </h3>

            <p className="mt-4 text-lg text-slate-600">
              Жылдам жауап береміз
            </p>

            <p className="mt-8 font-semibold text-violet-700 transition group-hover:translate-x-1">
              Хабарлама жазу →
            </p>
          </a>

          {/* Instagram */}

          <a
            href="https://instagram.com/s_gulfairuz_"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-[36px] border border-violet-100 bg-white p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl lg:p-10 md:col-span-2 xl:col-span-1"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-100 lg:h-16 lg:w-16">
              <Image
                src="/images/Insta-IOS.png"
                alt="Instagram"
                width={34}
                height={34}
              />
            </div>

            <h3 className="mt-8 font-heading text-2xl font-bold text-slate-900 lg:text-3xl">
              Instagram
            </h3>

            <p className="mt-4 text-lg text-slate-600">
              @s_gulfairuz_
            </p>

            <p className="mt-8 font-semibold text-violet-700 transition group-hover:translate-x-1">
              Парақшаға өту →
            </p>
          </a>

        </div>

        {/* Trust Stats */}
                <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-[32px] border border-violet-100 bg-white/80 p-8 text-center shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">👩‍🏫</div>

            <h3 className="mt-5 font-heading text-4xl font-bold text-violet-700">
              900+
            </h3>

            <p className="mt-3 text-slate-600">
              Онлайн курс өткен мұғалім
            </p>
          </div>

          <div className="rounded-[32px] border border-violet-100 bg-white/80 p-8 text-center shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">🎓</div>

            <h3 className="mt-5 font-heading text-4xl font-bold text-violet-700">
              5000+
            </h3>

            <p className="mt-3 text-slate-600">
              Офлайн оқытуға қатысты
            </p>
          </div>

          <div className="rounded-[32px] border border-violet-100 bg-white/80 p-8 text-center shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="text-5xl">🏫</div>

            <h3 className="mt-5 font-heading text-4xl font-bold text-violet-700">
              50+
            </h3>

            <p className="mt-3 text-slate-600">
              Оқу орталығын ашуға көмектесті
            </p>
          </div>

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 overflow-hidden rounded-[40px] bg-gradient-to-r from-violet-700 via-purple-600 to-pink-500 p-8 text-center text-white shadow-2xl sm:p-10 lg:p-14">

          <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-md">
            Біз әрқашан байланыстамыз 💜
          </span>

          <h3 className="mt-6 font-heading text-3xl font-bold sm:text-4xl lg:text-5xl">
            Сұрақтарыңыз бар ма?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/90 lg:text-lg">
            Қай материал сізге сәйкес келетінін таңдауға көмектесеміз,
            барлық сұрақтарыңызға жауап береміз және сатып алу процесін
            бірге аяқтаймыз.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="https://wa.me/77756064717?text=Сәлеметсіз%20бе!%20Оқу%20материалдары%20туралы%20ақпарат%20алғым%20келеді."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-lg font-bold text-violet-700 transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              💬 WhatsApp арқылы жазу
            </a>

            <a
              href="tel:+77756064717"
              className="inline-flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-10 py-4 text-lg font-bold text-white backdrop-blur-md transition duration-300 hover:bg-white/20"
            >
              📞 Қоңырау шалу
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}