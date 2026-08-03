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
      className="-mt-25 relative overflow-hidden bg-white py-32"
    >
        <div className="mx-auto max-w-7xl px-6">
            {/* Header */}
            <div className="text-center">
                <span className="rounded-full bg-violet-200 px-5 py-2 text-sm font-semibold text-violet-700">
                    Авторлық материалдар
                </span>

                <h2 className="mt-6 font-heading text-5xl font-bold text-slate-900">
                    Оқу жинақтары
                </h2>

                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                Мұғалімдерге, тәрбиешілерге және оқу орталықтарына арналған
                авторлық оқу материалдары.
                </p>
            </div>

                {/* Featured Offer */}
            <div className="relative mt-20 overflow-hidden rounded-[40px] bg-gradient-to-r from-violet-300 to-violet-200 p-12 text-white shadow-2xl">
            {/* Badge */}
                <div className="absolute right-8 top-8 rounded-full bg-fuchsia-300 px-5 py-2 font-bold text-slate-900">
                    🔥 Арнайы ұсыныс
                </div>

                <div className="flex items-center justify-between gap-16">
                    {/* LEFT */}
                    <div className="max-w-2xl">
                        <h3 className="font-heading text-5xl font-bold text-black">
                            Диагностика + Әліппе + Математика
                        </h3>

                        <p className="mt-6 text-xl leading-9 text-black">
                        Баланы мектепке жан-жақты дайындауға арналған толық жинақ.
                        </p>

                        <div className="mt-8 flex items-end gap-6">
                            <span className="text-3xl line-through text-gray-500">
                                60 000 ₸
                            </span>

                            <span className="font-heading text-7xl text-black font-bold">
                                49 990 ₸
                            </span>

                            <span className="rounded-full text-xl bg-red-600 px-4 py-3 font-semibold">
                                -17%
                            </span>
                        </div>

                        <div className="mt-8 rounded-3xl bg-white/15 p-5 backdrop-blur-md">
                            <p className="text-2xl font-semibold text-black">
                                🎁 Сыйлыққа
                            </p>

                            <p className="mt-2 text-black text-xl">
                                <strong>«Сергіту сәті»</strong> жинағы тегін беріледі.
                            </p>
                        </div>

                        <button className="mt-10 rounded-full bg-white px-11 py-5 font-bold text-2xl text-violet-900 transition hover:scale-105">
                            🔥 Қазір сатып алу
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex items-center">
                    {/* Stack */}
                        <div className="mt-10 relative h-[340px] w-[230px] -left-13 ">
                            <Image
                                src="/images/обложки321-1.png"
                                alt="Әліппе"
                                width={220}
                                height={320}
                                className="absolute left-0 top-0 rotate-[-22deg] rounded-2xl shadow-2xl"
                            />

                            <Image
                                src="/images/обложки321-2.png"
                                alt="Математика"
                                width={220}
                                height={320}
                                className="absolute left-8 top-5 rotate-[0deg] rounded-2xl shadow-2xl"
                            />

                            <Image
                                src="/images/обложки321-5.png"
                                alt="Диагностика"
                                width={220}
                                height={320}
                                className="absolute left-16 top-10 rotate-[22deg] rounded-2xl shadow-2xl"
                            />
                        </div>

                        <span className="mx-10 text-7xl text-black font-bold">+</span>

                        <Image
                            src="/images/sergitucover1.png"
                            alt="Сергіту сәттері"
                            width={200}
                            height={250}
                            className="rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="mx-auto max-w-7xl px-6">
            {/* Header */}

                {/* Featured Offer */}
            <div className="relative mt-20 overflow-hidden rounded-[40px] bg-gradient-to-r from-violet-300 to-violet-200 p-12 text-white shadow-2xl">
            {/* Badge */}
                <div className="absolute right-8 top-8 rounded-full bg-fuchsia-300 px-5 py-2 font-bold text-slate-900">
                    🔥 Арнайы ұсыныс
                </div>

                <div className="flex items-center justify-between gap-16">
                    {/* LEFT */}
                    <div className="max-w-2xl">
                        <h3 className="font-heading text-4xl font-bold text-black">
                            Диагностика + Әліппе + Математика + "Біз мектепке дайынбыз ба?" + Нейрожазу
                        </h3>

                        <p className="mt-6 text-xl leading-9 text-black">
                        Баланы мектепке жан-жақты дайындауға арналған толық жинақ.
                        </p>

                        <div className="mt-8 flex items-end gap-6">
                            <span className="text-3xl line-through text-gray-500">
                                100 000 ₸
                            </span>

                            <span className="font-heading text-7xl text-black font-bold">
                                59 990₸
                            </span>

                            <span className="rounded-full text-xl bg-red-600 px-4 py-3 font-semibold">
                                -40%
                            </span>
                        </div>

                        <div className="mt-8 rounded-3xl bg-white/15 p-5 backdrop-blur-md">
                            <p className="text-2xl font-semibold text-black">
                                🎁 Сыйлыққа
                            </p>

                            <p className="mt-2 text-black text-xl">
                                <strong>«Сергіту сәті»</strong> жинағы тегін беріледі.
                            </p>
                        </div>

                        <button className="mt-10 rounded-full bg-white px-11 py-5 font-bold text-2xl text-violet-900 transition hover:scale-105">
                            🔥 Қазір сатып алу
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex items-center">
                    {/* Stack */}
                        <div className="mt-10 relative h-[320px] w-[230px] -left-18 ">
                            <Image
                                src="/images/обложки321-1.png"
                                alt="Әліппе"
                                width={220}
                                height={320}
                                className="absolute left-0 top-0 rotate-[-32deg] rounded-2xl shadow-2xl"
                            />

                            <Image
                                src="/images/обложки321-3.png"
                                alt="Нейрожазу"
                                width={220}
                                height={320}
                                className="absolute left-6 top-2 rotate-[-15deg] rounded-2xl shadow-2xl"
                            />

                            <Image
                                src="/images/обложки321-4.png"
                                alt="Біз мекткпке дайынбыз ба?"
                                width={220}
                                height={320}
                                className="absolute left-12 top-3 rotate-[-5deg] rounded-2xl shadow-2xl"
                            />

                            <Image
                                src="/images/обложки321-2.png"
                                alt="Математика"
                                width={220}
                                height={320}
                                className="absolute left-18 top-5 rotate-[10deg] rounded-2xl shadow-2xl"
                            />

                            <Image
                                src="/images/обложки321-5.png"
                                alt="Диагностика"
                                width={220}
                                height={320}
                                className="absolute left-24 top-8 rotate-[22deg] rounded-2xl shadow-2xl"
                            />
                        </div>

                        <span className=" mx-12 text-7xl text-black font-bold">+</span>

                        <Image
                            src="/images/sergitucover1.png"
                            alt="Сергіту сәті"
                            width={200}
                            height={250}
                            className="rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}