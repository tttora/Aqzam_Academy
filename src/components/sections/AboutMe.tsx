import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="aboutme"
      className="relative mt-10 overflow-hidden bg-white py-20 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6">
        <div className="relative">

          {/* Gradient */}
          <div className="absolute -left-10 -top-24 -z-10 h-[700px] w-[700px] rounded-full bg-gradient-to-t from-[#d3cae8] to-white blur-3xl lg:h-[1280px] lg:w-[1280px]" />

          {/* Badge */}
          <span className="inline-block rounded-full bg-violet-200 px-5 py-2 text-sm font-semibold text-violet-700">
            Автор туралы
          </span>

          {/* Heading */}
          <h2 className="mt-6 font-heading text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Сафиева Гүлфайруз Ақзамқызы
          </h2>

          {/* Main Card */}
          <div className="mt-8 rounded-3xl border border-violet-100 bg-white/70 p-6 shadow-lg backdrop-blur-sm sm:p-8">

            <p className="text-base leading-8 text-slate-700 lg:text-lg lg:leading-9">
              <span className="font-semibold text-violet-700">
                Сафиева Гүлфайруз Ақзамқызы
              </span>{" "}
              — тәжірибелі{" "}
              <span className="font-semibold">
                мұғалім, әдіскер және авторлық оқу бағдарламаларының авторы.
              </span>{" "}
              Балаларды ғана емес,{" "}
              <span className="font-semibold">
                мұғалімдерді, оқу орталықтарының директорлары мен мамандарын,
                сондай-ақ балабақшаның ересек және мектепалды даярлық
                топтарының тәрбиешілерін
              </span>{" "}
              заманауи әдістемелер бойынша оқытады.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-700 lg:text-lg lg:leading-9">
              Қазіргі балалардың ең өзекті мәселелерінің бірі саналатын
              <span className="font-semibold text-violet-700">
                {" "}
                жылдам оқу{" "}
              </span>
              бағыты бойынша авторлық әрі заманауи әдістемемен жұмыс істеп,
              оқушылардың оқу жылдамдығы мен мәтінді түсіну қабілетін тиімді
              дамытады.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-700 lg:text-lg lg:leading-9">
              Ақтау қаласындағы білім беру орталығы арқылы
              <span className="font-semibold text-violet-700">
                {" "}
                5000-нан астам оқушы
              </span>{" "}
              офлайн білім алды, ал
              <span className="font-semibold text-violet-700">
                {" "}
                900-ден астам мұғалім
              </span>{" "}
              онлайн курстардан өтіп, кәсіби біліктілігін арттырды. Сонымен
              қатар,
              <span className="font-semibold text-violet-700">
                {" "}
                50-ден астам мұғалімге
              </span>{" "}
              Маңғыстау облысында өз оқу орталығын ашуға көмектесті.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-700 lg:text-lg lg:leading-9">
              Инклюзивті білім беру бағытында да нәтижелі еңбек етіп келеді.
              Авторлық оқу материалдары мен жеке оқыту әдістемесінің арқасында
              даму ерекшелігі бар балалардың
              <span className="font-semibold text-violet-700">
                {" "}
                бір айдың ішінде-ақ айтарлықтай нәтижеге жетуіне
              </span>{" "}
              мүмкіндік береді.
            </p>

          </div>
                    {/* Services / Expertise */}
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl bg-gradient-to-l from-[#f5f0ff] to-[#e3dcf2] p-6 transition hover:-translate-y-1 hover:shadow-xl lg:p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-200 text-2xl">
                👩‍🏫
              </div>

              <h3 className="font-heading text-xl font-bold text-slate-900 lg:text-2xl">
                Мұғалімдерге арналған курстар
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 lg:text-base lg:leading-8">
                <span className="font-semibold text-violet-700">
                  900-ден астам мұғалім
                </span>{" "}
                онлайн курстардан өтіп, заманауи әдістемелерді меңгеріп,
                кәсіби біліктілігін арттырды.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-l from-[#f5f0ff] to-[#e3dcf2] p-6 transition hover:-translate-y-1 hover:shadow-xl lg:p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-200 text-2xl">
                🚀
              </div>

              <h3 className="font-heading text-xl font-bold text-slate-900 lg:text-2xl">
                Авторлық әдістемелер
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 lg:text-base lg:leading-8">
                Жылдам оқу, мектепалды даярлық, математика, сауат ашу және
                балабақшаның ересек, мектепалды топтарына арналған авторлық
                бағдарламалар.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-l from-[#f5f0ff] to-[#e3dcf2] p-6 transition hover:-translate-y-1 hover:shadow-xl lg:p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-200 text-2xl">
                🏫
              </div>

              <h3 className="font-heading text-xl font-bold text-slate-900 lg:text-2xl">
                Оқу орталығын дамыту
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 lg:text-base lg:leading-8">
                Ақтау қаласындағы білім беру орталығы арқылы
                <span className="font-semibold text-violet-700">
                  {" "}
                  5000+ оқушы
                </span>{" "}
                офлайн білім алды. Сонымен қатар,
                <span className="font-semibold text-violet-700">
                  {" "}
                  50+ мұғалімге
                </span>{" "}
                Маңғыстауда жеке оқу орталығын ашуға қолдау көрсетті.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-l from-[#f5f0ff] to-[#e3dcf2] p-6 transition hover:-translate-y-1 hover:shadow-xl lg:p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-200 text-2xl">
                💜
              </div>

              <h3 className="font-heading text-xl font-bold text-slate-900 lg:text-2xl">
                Инклюзивті білім беру
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600 lg:text-base lg:leading-8">
                Авторлық материалдар даму ерекшелігі бар балалармен жеке жұмыс
                барысында
                <span className="font-semibold text-violet-700">
                  {" "}
                  1 айдың ішінде
                </span>{" "}
                айқын нәтижелер көрсетуге мүмкіндік береді.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}