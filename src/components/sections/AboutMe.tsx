import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="aboutme"
      className="mt-10 relative overflow-hidden bg-white py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-20 px-6">
        <div className="relative z-0 max-w-full">
          <div className="absolute inset-0 -z-10 -mt-20 -ml-6 h-[1280px] w-[1280px] rounded-3xl bg-gradient-to-t from-[#d3cae8] to-white p-6"></div>

          <span className="relative -top-20 rounded-full bg-violet-200 px-5 py-2 text-sm font-semibold text-violet-700">
            Автор туралы
          </span>

          <h2 className="-mt-13 font-heading text-5xl font-bold text-slate-900">
            Сафиева Гүлфайруз Ақзамқызы
          </h2>

          <div className="mt-10 rounded-3xl border border-violet-100 bg-white/70 p-8 shadow-lg backdrop-blur-sm">
            <p className="text-lg leading-9 text-slate-700">
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

            <p className="mt-5 text-lg leading-9 text-slate-700">
              Қазіргі балалардың ең өзекті мәселелерінің бірі саналатын
              <span className="font-semibold text-violet-700">
                {" "}
                жылдам оқу{" "}
              </span>
              бағыты бойынша авторлық әрі заманауи әдістемемен жұмыс істеп,
              оқушылардың оқу жылдамдығы мен мәтінді түсіну қабілетін тиімді
              дамытады.
            </p>

            <p className="mt-5 text-lg leading-9 text-slate-700">
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

            <p className="mt-5 text-lg leading-9 text-slate-700">
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
          <div className="mt-10 grid grid-cols-2 gap-6">
            <div className="rounded-3xl bg-gradient-to-l from-violet-250 to-[#e3dcf2] p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-200 text-2xl">
                👩‍🏫
              </div>

              <h3 className="font-heading text-2xl font-bold text-slate-900">
                Мұғалімдерге арналған курстар
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                <span className="font-semibold text-violet-700">
                  900-ден астам мұғалім
                </span>{" "}
                онлайн курстардан өтіп, заманауи әдістемелерді меңгеріп,
                кәсіби біліктілігін арттырды.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-l from-violet-250 to-[#e3dcf2] p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-200 text-2xl">
                🚀
              </div>

              <h3 className="font-heading text-2xl font-bold text-slate-900">
                Авторлық әдістемелер
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
                Жылдам оқу, мектепалды даярлық, математика, сауат ашу және
                балабақшаның ересек, мектепалды топтарына арналған авторлық
                бағдарламалар.
              </p>
            </div>

            <div className="rounded-3xl bg-gradient-to-l from-violet-250 to-[#e3dcf2] p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-200 text-2xl">
                🏫
              </div>

              <h3 className="font-heading text-2xl font-bold text-slate-900">
                Оқу орталығын дамыту
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
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

            <div className="rounded-3xl bg-gradient-to-l from-violet-250 to-[#e3dcf2] p-7 transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-200 text-2xl">
                💜
              </div>

              <h3 className="font-heading text-2xl font-bold text-slate-900">
                Инклюзивті білім беру
              </h3>

              <p className="mt-3 leading-8 text-slate-600">
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