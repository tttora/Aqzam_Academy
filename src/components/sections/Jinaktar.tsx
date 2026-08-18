import Image from "next/image";

const collections = [
  {
    title: "Әліппе",
    description: "Мектепке дейінгі балаларға арналған авторлық әліппе жинағы.",
    image: "/images/alippe.png",
  },
  {
    title: "Математика",
    description: "Қызықты тапсырмалар мен логикалық жаттығулар жинағы.",
    image: "/images/math.png",
  },
  {
    title: "Диагностика",
    description: "Баланың білім деңгейін анықтауға арналған тапсырмалар.",
    image: "/images/diagnostic.png",
  },
  {
    title: "Жылдам оқу",
    description: "Оқу жылдамдығы мен мәтінді түсінуді дамыту әдістемесі.",
    image: "/images/reading.png",
  },
  {
    title: "Бейнесабақтар",
    description: "Авторлық бейнесабақтар мен практикалық түсіндірмелер.",
    image: "/images/video.png",
  },
  {
    title: "Сергіту сәттері",
    description: "Балалардың қызығушылығын арттыратын сергіту жаттығулары.",
    image: "/images/sergitu.png",
  },
];

export default function Jinaktar() {
  return (
    <section
    id="jinaktar"
    className="relative -mt-1 overflow-visible bg-white py-20 lg:-mt-25 lg:py-32"
    >
        <div className="mx-auto max-w-7xl px-5 sm:px-6">

            {/* Header */}

            <div className="text-center">

                <span className="rounded-full bg-violet-200 px-5 py-2 text-sm font-semibold text-violet-700">
                    Авторлық материалдар
                </span>

                <h2 className="mt-6 font-heading text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                    Оқу жинақтары
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 lg:text-lg">
                    Мұғалімдерге, тәрбиешілерге және оқу орталықтарына арналған
                    авторлық оқу материалдары.
                </p>

            </div>

            {/* FIRST OFFER */}

            <div className="relative mt-14 overflow-visible rounded-[30px] bg-gradient-to-r from-violet-300 to-violet-200 p-6 shadow-2xl lg:mt-20 lg:overflow-hidden lg:rounded-[40px] lg:p-12">

                {/* Badge */}

                <div className="mb-5 inline-block rounded-full bg-fuchsia-300 px-4 py-2 text-sm font-bold text-slate-900 lg:absolute lg:right-8 lg:top-8 lg:mb-0">
                    🔥 Арнайы ұсыныс
                </div>

                <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-16">

                    {/* LEFT */}

                    <div className="max-w-2xl">

                    <h3 className="font-heading text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
                        Диагностика + Әліппе + Математика
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-black lg:text-xl lg:leading-9">
                        Мектеп алды даярлық тобына арналған НЕГІЗГІ жинақ.
                    </p>

                    <div className="mt-8 flex flex-wrap items-end gap-4">

                        <span className="text-xl text-gray-500 line-through lg:text-3xl">
                        60 000 ₸
                        </span>

                        <span className="font-heading text-4xl font-bold text-black sm:text-5xl lg:text-7xl">
                        49 990 ₸
                        </span>

                        <span className="rounded-full bg-red-600 px-4 py-2 text-base font-semibold text-white lg:text-xl">
                        -17%
                        </span>

                    </div>

                    <div className="mt-8 rounded-3xl bg-white/15 p-5 backdrop-blur-md">

                        <p className="text-xl font-semibold text-black lg:text-2xl">
                        🎁 Сыйлыққа
                        </p>

                        <p className="mt-2 text-lg text-black lg:text-xl">
                        <strong>«Сергіту сәті»</strong> жинағы тегін беріледі.
                        </p>

                    </div>

                    <button className="mt-10 w-full rounded-full bg-white px-8 py-4 text-lg font-bold text-violet-900 transition hover:scale-105 lg:w-auto lg:px-11 lg:py-5 lg:text-2xl">
                        🔥 Қазір сатып алу
                    </button>

                    </div>

                    {/* RIGHT */}

                    <div className="mt-6 flex w-full items-center justify-center gap-5 overflow-visible sm:gap-8 lg:mt-0 lg:w-auto lg:gap-14">
                                    {/* Books */}
                    <div className="relative h-[220px] w-[210px] sm:h-[260px] sm:w-[260px] lg:-left-10 lg:h-[340px] lg:w-[360px]">

                        <Image
                        src="/images/обложки321-1.png"
                        alt="Әліппе"
                        width={220}
                        height={320}
                        className="absolute left-0 top-0 w-[95px] rotate-[-20deg] rounded-xl shadow-2xl sm:w-[135px] lg:w-[180px]"
                        />

                        <Image
                        src="/images/обложки321-2.png"
                        alt="Математика"
                        width={220}
                        height={320}
                        className="absolute left-5 top-3 w-[95px] rounded-xl shadow-2xl sm:left-8 sm:w-[135px] lg:left-8 lg:top-5 lg:w-[180px]"                        />

                        <Image
                        src="/images/обложки321-5.png"
                        alt="Диагностика"
                        width={220}
                        height={320}
                        className="absolute left-10 top-7 w-[95px] rotate-[18deg] rounded-xl shadow-2xl sm:left-15 sm:w-[135px] lg:left-16 lg:top-10 lg:w-[180px]"                        />

                    </div>

                    <span className="mx-2 text-5xl font-black text-black sm:text-6xl lg:mx-4 lg:text-8xl">
                    +
                    </span>

                    <Image
                        src="/images/sergitucover1.png"
                        alt="Сергіту сәттері"
                        width={200}
                        height={250}
                        className="w-[95px] self-center rounded-xl shadow-2xl sm:w-[135px] lg:w-[170px]"                    />

                    </div>
                </div>
            </div>

            {/* SECOND OFFER */}

            <div className="relative mt-14 overflow-visible rounded-[30px] bg-gradient-to-r from-violet-300 to-violet-200 p-6 shadow-2xl lg:mt-20 lg:overflow-visible lg:rounded-[40px] lg:p-12">

                <div className="mb-5 inline-block rounded-full bg-fuchsia-300 px-4 py-2 text-sm font-bold text-slate-900 lg:absolute lg:right-8 lg:top-8 lg:mb-0">
                    🔥 Арнайы ұсыныс
                </div>

                <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:gap-16">

                    {/* LEFT */}

                    <div className="max-w-2xl">

                    <h3 className="font-heading text-2xl font-bold text-black sm:text-3xl lg:text-4xl">
                        Диагностика + Әліппе + Математика + "Біз мектепке дайынбыз ба?" + Нейрожазу
                    </h3>

                    <p className="mt-6 text-lg leading-8 text-black lg:text-xl lg:leading-9">
                        Мектеп алды даярлық тобына арналған ТОЛЫҚ жинақ.
                    </p>

                    <div className="mt-8 flex flex-wrap items-end gap-4">

                        <span className="text-xl text-gray-500 line-through lg:text-3xl">
                        100 000 ₸
                        </span>

                        <span className="font-heading text-4xl font-bold text-black sm:text-5xl lg:text-7xl">
                        59 990 ₸
                        </span>

                        <span className="rounded-full bg-red-600 px-4 py-2 text-base font-semibold text-white lg:text-xl">
                        -40%
                        </span>

                    </div>

                    <div className="mt-8 rounded-3xl bg-white/15 p-5 backdrop-blur-md">

                        <p className="text-xl font-semibold text-black lg:text-2xl">
                        🎁 Сыйлыққа
                        </p>

                        <p className="mt-2 text-lg text-black lg:text-xl">
                        <strong>«Сергіту сәті»</strong> жинағы тегін беріледі.
                        </p>

                    </div>

                    <button className="mt-10 w-full rounded-full bg-white px-8 py-4 text-lg font-bold text-violet-900 transition hover:scale-105 lg:w-auto lg:px-11 lg:py-5 lg:text-2xl">
                        🔥 Қазір сатып алу
                    </button>

                    </div>

                    {/* RIGHT */}

                    <div className="mt-6 flex w-full items-center justify-center gap-5 overflow-visible sm:gap-8 lg:mt-0 lg:w-auto lg:gap-14">
                    {/* Books */}
                    <div className="relative h-[220px] w-[210px] sm:h-[260px] sm:w-[260px] lg:-left-10 lg:h-[340px] lg:w-[360px]">

                    <Image
                        src="/images/обложки321-1.png"
                        alt="Әліппе"
                        width={220}
                        height={320}
                        className="absolute left-0 top-0 w-[95px] rotate-[-30deg] rounded-xl shadow-2xl sm:w-[135px] lg:w-[180px]"
                    />

                    <Image
                        src="/images/обложки321-3.png"
                        alt="Нейрожазу"
                        width={220}
                        height={320}
                        className="absolute left-3 top-2 w-[95px] rotate-[-15deg] rounded-xl shadow-2xl sm:left-5 sm:w-[135px] lg:left-6 lg:w-[180px]"
                    />

                    <Image
                        src="/images/обложки321-4.png"
                        alt="Біз мектепке дайынбыз ба?"
                        width={220}
                        height={320}
                        className="absolute left-6 top-4 w-[95px] rotate-[-5deg] rounded-xl shadow-2xl sm:left-9 sm:w-[135px] lg:left-12 lg:top-3 lg:w-[180px]"
                    />

                    <Image
                        src="/images/обложки321-2.png"
                        alt="Математика"
                        width={220}
                        height={320}
                        className="absolute left-9 top-6 w-[95px] rotate-[10deg] rounded-xl shadow-2xl sm:left-13 sm:w-[135px] lg:left-18 lg:top-5 lg:w-[180px]"
                    />

                    <Image
                        src="/images/обложки321-5.png"
                        alt="Диагностика"
                        width={220}
                        height={320}
                        className="absolute left-12 top-8 w-[95px] rotate-[22deg] rounded-xl shadow-2xl sm:left-17 sm:w-[135px] lg:left-24 lg:top-8 lg:w-[180px]"
                    />

                    </div>

                    <span className="mx-2 text-5xl font-black text-black sm:text-6xl lg:mx-4 lg:text-8xl">
                    +
                    </span>

                    <Image
                    src="/images/sergitucover1.png"
                    alt="Сергіту сәті"
                    width={200}
                    height={250}
                    className="w-[95px] self-center rounded-xl shadow-2xl sm:w-[135px] lg:w-[170px]"
                    />

                </div>
              </div>
          </div>
          {/* THIRD OFFER — ТАБЫСТЫ РЕПЕТИТОР */}

            <div className="relative mt-14 overflow-hidden rounded-[30px] bg-gradient-to-br from-violet-400 via-violet-300 to-fuchsia-200 p-6 shadow-2xl lg:mt-20 lg:rounded-[40px] lg:p-12">

                {/* Badge */}

                <div className="mb-6 inline-block rounded-full bg-white/70 px-4 py-2 text-sm font-bold text-violet-900 backdrop-blur-md lg:absolute lg:right-8 lg:top-8 lg:mb-0">
                    👑 ПРЕМИУМ КУРС
                </div>

                <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between lg:gap-16">

                    {/* LEFT */}

                    <div className="max-w-2xl">

                        <h3 className="font-heading text-3xl font-bold text-black sm:text-4xl lg:text-5xl">
                            «Табысты репетитор»
                        </h3>

                        <p className="mt-5 text-xl font-semibold text-violet-950 lg:text-2xl">
                            Репетиторлықты нөлден бастап,
                            табысты маман болуға дейінгі толық курс.
                        </p>

                        <p className="mt-4 text-base leading-7 text-black/80 lg:text-lg lg:leading-8">
                            МАД тәрбиешілеріне, бастауыш сынып мұғалімдеріне, жас мамандарға, репетиторларға арналған толық авторлық курс:
                            дайын материалдар, бейнесабақтар, әдістемелер, көрнекіліктер,
                            тапсырмалар және сабаққа қажетті барлық ақпарат.
                        </p>

                        {/* PRICE */}

                        <div className="mt-8 flex flex-wrap items-end gap-4">

                            <span className="text-xl text-gray-600 line-through lg:text-3xl">
                                300 000 ₸
                            </span>

                            <span className="font-heading text-4xl font-bold text-black sm:text-5xl lg:text-6xl">
                                149 990 ₸
                            </span>

                            <span className="rounded-full bg-red-600 px-4 py-2 text-base font-semibold text-white lg:text-xl">
                                -50%
                            </span>

                        </div>

                        {/* CONTENT */}

                        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">

                            <div className="rounded-2xl bg-white/30 p-4 backdrop-blur-md">
                                <p className="text-2xl">📚</p>
                                <p className="mt-2 font-semibold text-black">
                                    Барлық материалдар
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/30 p-4 backdrop-blur-md">
                                <p className="text-2xl">🎥</p>
                                <p className="mt-2 font-semibold text-black">
                                    Бейнесабақтар
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/30 p-4 backdrop-blur-md">
                                <p className="text-2xl">📝</p>
                                <p className="mt-2 font-semibold text-black">
                                    Дайын әдістемелер
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white/30 p-4 backdrop-blur-md">
                                <p className="text-2xl">💼</p>
                                <p className="mt-2 font-semibold text-black">
                                    Репетиторлық жүйе
                                </p>
                            </div>

                        </div>

                        <button className="mt-10 w-full rounded-full bg-white px-8 py-4 text-lg font-bold text-violet-900 transition hover:scale-105 lg:w-auto lg:px-11 lg:py-5 lg:text-2xl">
                            👑 Курсқа қатысу
                        </button>

                    </div>

                    {/* RIGHT */}

                    <div className="relative flex w-full items-center justify-center lg:w-[420px]">

                        {/* Decorative glow */}

                        <div className="absolute h-[300px] w-[300px] rounded-full bg-white/30 blur-3xl" />

                        {/* Main course cover */}

                        <div className="relative z-10">

                            <Image
                                src="/images/tabysty-repetitor.png"
                                alt="Табысты репетитор"
                                width={360}
                                height={500}
                                className="w-[220px] rounded-2xl shadow-2xl sm:w-[270px] lg:w-[320px]"
                            />

                        </div>

                        {/* Small floating cards */}

                        <div className="absolute -left-2 top-8 z-20 rounded-2xl bg-white/85 px-4 py-3 shadow-xl backdrop-blur-md sm:-left-6">
                            <p className="text-sm font-bold text-violet-900">
                                📚 БАРЛЫҒЫ БІР КУРСТА
                            </p>
                        </div>

                        <div className="absolute -right-2 bottom-10 z-20 rounded-2xl bg-white/85 px-4 py-3 shadow-xl backdrop-blur-md sm:-right-6">
                            <p className="text-sm font-bold text-violet-900">
                                🎓 ДАЙЫН ЖҮЙЕ
                            </p>
                        </div>

                    </div>

                </div>
            </div>
         </div>
    </section>
  );
}