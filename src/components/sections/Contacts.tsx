import Image from "next/image";
export default function Contacts() {
  return (
    <section
      id="contacts"
      className="relative overflow-hidden bg-white py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#faf8ff] to-[#f3efff]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="text-center">
          <span className="rounded-full bg-violet-200 px-5 py-2 text-sm font-semibold text-violet-700">
            Байланысу
          </span>

          <h2 className="mt-6 font-heading text-5xl font-bold text-slate-900">
            Бізбен байланысыңыз
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-2xl leading-8 text-slate-700">
            Сұрақтарыңыз болса немесе материалдарды сатып алғыңыз келсе,
            бізге ыңғайлы тәсілмен хабарласа аласыз.
          </p>
        </div>

        {/* Contact Cards */}

        <div className="mt-20 grid grid-cols-3 gap-8">

          {/* Phone */}

          <a
            href="tel:+77771234567"
            className="group rounded-[36px] border border-violet-100 bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-4xl">
                <Image
                    src="/images/Phone_iOS.png"
                    alt="Phone"
                    width={34}
                    height={34}
                />
            </div>

            <h3 className="mt-8 font-heading text-3xl font-bold text-slate-900">
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
            className="group rounded-[36px] border border-violet-100 bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-4xl">
              <Image
                    src="/images/Whatsapp-IOS.png"
                    alt="Whats'app"
                    width={34}
                    height={34}
                />
            </div>

            <h3 className="mt-8 font-heading text-3xl font-bold text-slate-900">
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
            className="group rounded-[36px] border border-violet-100 bg-white p-10 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-4xl">
                <Image
                    src="/images/Insta-IOS.png"
                    alt="Instagram"
                    width={34}
                    height={34}
                />
            </div>

            <h3 className="mt-8 font-heading text-3xl font-bold text-slate-900">
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

        {/* Bottom CTA */}

        <div className="mt-20 rounded-[40px] bg-gradient-to-r from-violet-700 to-violet-500 p-12 text-center text-white shadow-2xl">

          <h3 className="font-heading text-4xl font-bold">
            Сұрақтарыңыз бар ма?
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-violet-100">
            Біз сізге қажетті оқу материалын таңдауға көмектесеміз және барлық
            сұрақтарыңызға қуана жауап береміз.
          </p>

          <a
            href="https://wa.me/77756064717?text=Сәлеметсіз%20бе!%20Оқу%20материалдары%20туралы%20ақпарат%20алғым%20келеді."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-white px-10 py-4 font-semibold text-violet-700 transition hover:scale-105"
          >
            WhatsApp арқылы жазу
          </a>

        </div>

      </div>
    </section>
  );
}