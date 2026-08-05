import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
      relative
      overflow-hidden
      bg-white
      pb-32
      "
    >


      {/* BACKGROUND */}

      <div
        className="
        absolute
        inset-x-0
        top-20
        -z-10
        h-[90%]
        rounded-t-[50px]
        bg-gradient-to-b
        from-[#d3cae8]
        to-white
        "
      />



      {/* CONTENT */}

      <div
        className="
        relative
        z-10
        mx-auto
        flex
        min-h-[95vh]
        max-w-7xl
        items-center
        justify-between
        gap-10

        px-6
        pt-[180px]

        lg:pt-[220px]
        "
      >



        {/* LEFT */}


        <div
          className="
          max-w-[750px]
          "
        >

          <h1
            className="
            mb-8

            font-heading
            text-3xl
            font-bold
            leading-tight

            text-slate-900

            sm:text-4xl

            lg:text-4xl
            "
          >
            Мұғалімдер және репетиторларға,
            балабақша тәрбиешілеріне:
            ересек және мат топтарына
            арналған заманауи оқу материалдары
          </h1>



          <p
            className="
            mb-10

            text-lg
            leading-8

            text-slate-700

            sm:text-xl
            sm:leading-9
            "
          >
            Оқушыларды қызықтыратын әдістер,
            сергіту сәттері, шаттық шеңбері,
            авторлық кітаптар, бейнесабақтар
            және дайын материалдар арқылы
            педагогтердің кәсіби дамуына қолдау көрсетеміз.
          </p>



          <div
            className="
            flex
            flex-col
            gap-4

            sm:flex-row
            "
          >

            <a
              href="#products"
              className="
              rounded-full
              bg-violet-700
              px-8
              py-4
              text-center
              font-semibold
              text-white

              hover:bg-violet-800
              "
            >
              Материалдарды қарау
            </a>



            <a
              href="#aboutme"
              className="
              rounded-full
              border
              border-violet-700
              bg-white/70
              px-8
              py-4
              text-center
              font-semibold
              text-violet-700
              backdrop-blur-md

              hover:bg-blue-50
              "
            >
              Автор туралы
            </a>


          </div>

        </div>





        {/* RIGHT IMAGE */}


        <div
          className="
          relative
          hidden

          sm:block
          "
        >


          <div
            className="
            absolute
            -right-10
            -top-10

            h-full
            w-full

            rounded-[40px]

            bg-blue-200/30

            blur-3xl
            "
          />



          <div
            className="
            relative

            overflow-hidden

            rounded-[40px]

            shadow-2xl
            "
          >

            <Image
              src="/images/1stpage-2.png"
              alt="Гульфайруз Ақзамқызы"
              width={460}
              height={500}
              priority

              className="
              h-[400px]
              w-[320px]

              object-cover

              lg:h-[460px]
              lg:w-[400px]
              "
            />

          </div>

        </div>


      </div>






      {/* STATS */}


      <div
        className="
        absolute

        bottom-[-70px]

        left-1/2

        z-20

        flex

        w-[90%]

        -translate-x-1/2

        flex-col
        items-center

        gap-5

        rounded-[30px]

        border
        border-white/40

        bg-white/70

        px-8
        py-5

        shadow-xl

        backdrop-blur-xl


        sm:flex-row
        sm:justify-center
        sm:gap-10
        "
      >


        <div className="text-center">

          <h2
            className="
            font-heading
            text-3xl
            font-bold
            text-violet-700
            "
          >
            5000+
          </h2>

          <p className="text-slate-600">
            Педагог
          </p>

        </div>




        <div
          className="
          hidden
          h-10
          w-px
          bg-slate-200

          sm:block
          "
        />




        <div className="text-center">

          <h2
            className="
            font-heading
            text-3xl
            font-bold
            text-violet-700
            "
          >
            25
          </h2>

          <p className="text-slate-600">
            Авторлық материал
          </p>

        </div>




        <div
          className="
          hidden
          h-10
          w-px
          bg-slate-200

          sm:block
          "
        />



        <div className="text-center">

          <h2
            className="
            font-heading
            text-3xl
            font-bold
            text-violet-700
            "
          >
            15+
          </h2>

          <p className="text-slate-600">
            Жыл тәжірибе
          </p>

        </div>


      </div>



    </section>
  );
}