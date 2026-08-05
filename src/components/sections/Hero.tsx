import Image from "next/image";

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden bg-white" 
      id="hero"
    >

      {/* ===== Hero Content ===== */}
      <div 
        className="
          relative 
          z-10 
          mx-auto 
          flex 
          min-h-[95vh] 
          max-w-7xl 
          justify-between 
          px-6 
          pt-[260px]

          flex-col
          gap-12

          lg:flex-row
          lg:gap-0
        "
      >

        <div 
          className="
            absolute 
            inset-0 
            -z-10 
            mt-20 
            rounded-t-[50px] 
            bg-gradient-to-b 
            from-[#d3cae8] 
            to-white
          "
        />


        {/* Left */}

        <div className="relative z-10 max-w-[750px]">

          <h1 
            className="
              -mt-15 
              mb-10 

              ml-0
              sm:ml-10

              font-heading 
              text-3xl 
              font-bold 
              leading-tight 
              text-slate-900

              sm:text-4xl
            "
          >
            Мұғалімдер және репетиторларға, балабақша тәрбиешілеріне:
            ересек және мат топтарына арналған заманауи оқу материалдары
          </h1>



          <p 
            className="
              mb-10 

              ml-0
              sm:ml-10

              text-lg 
              leading-8 
              text-slate-700

              sm:text-xl
              sm:leading-9
            "
          >
            Оқушыларды қызықтыратын әдістер, сергіту сәттері,
            шаттық шеңбері, авторлық кітаптар, бейнесабақтар
            және дайын материалдар арқылы
            педагогтердің кәсіби дамуына қолдау көрсетеміз.
          </p>



          <div 
            className="
              flex 
              flex-col
              gap-5

              sm:flex-row
              sm:ml-10
            "
          >

            <a 
              href="#products"
              className="
                rounded-full 
                bg-violet-700 
                px-8 
                py-4 
                font-semibold 
                text-white 
                transition 
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
                font-semibold 
                text-violet-700 
                backdrop-blur-md 
                transition 
                hover:bg-blue-50
              "
            >
              Автор туралы
            </a>

          </div>

        </div>





        {/* Right */}

        <div className="relative -mt-10">

          <div 
            className="
              absolute 
              -right-8 
              -top-8 
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

              className="
                h-[360px]
                w-[300px]

                sm:h-[460px]
                sm:w-[400px]

                object-cover
              "

              priority
            />

          </div>

        </div>

      </div>





      {/* ===== Floating Glass Card ===== */}

      <div 
        className="
          absolute 
          bottom-8 
          left-1/2 
          z-20

          flex
          w-[90%]
          max-w-[850px]

          -translate-x-1/2

          items-center
          justify-between

          rounded-[30px]
          border
          border-white/40

          bg-white/70

          px-6
          py-4

          shadow-xl
          backdrop-blur-xl

          sm:px-10
        "
      >


        <div className="flex-1 text-center">

          <h2 
            className="
              font-heading 
              text-3xl
              font-bold 
              text-violet-700

              sm:text-4xl
            "
          >
            5000+
          </h2>

          <p className="text-sm text-slate-600 sm:text-base">
            Педагог
          </p>

        </div>



        <div className="h-10 w-px bg-slate-200"></div>



        <div className="flex-1 text-center">

          <h2 
            className="
              font-heading 
              text-3xl
              font-bold 
              text-violet-700

              sm:text-4xl
            "
          >
            25
          </h2>

          <p className="
            text-sm 
            whitespace-nowrap 
            text-slate-600

            sm:text-base
          ">
            Авторлық материал
          </p>

        </div>



        <div className="h-10 w-px bg-slate-200"></div>



        <div className="flex-1 text-center">

          <h2 
            className="
              font-heading 
              text-3xl
              font-bold 
              text-violet-700

              sm:text-4xl
            "
          >
            15+
          </h2>

          <p className="text-sm text-slate-600 sm:text-base">
            Жыл тәжірибе
          </p>

        </div>


      </div>


    </section>
  );
}