import Image from "next/image";

export default function Hero() {
  return (
    <section 
      className="relative overflow-hidden bg-white" 
      id="hero"
    >

      {/* Background */}
      <div className="
        absolute 
        inset-0 
        -z-10 
        mt-20 
        rounded-t-[50px] 
        bg-gradient-to-b 
        from-[#d3cae8] 
        to-white
      "></div>


      {/* Hero Content */}
      <div className="
        relative 
        z-10 
        mx-auto 
        flex 
        min-h-screen 
        max-w-7xl 
        flex-col 
        items-center 
        justify-center 
        gap-12 
        px-6 
        pt-32

        lg:flex-row
        lg:justify-between
        lg:pt-[220px]
      ">


        {/* LEFT */}
        <div className="
          relative 
          z-10 
          max-w-[750px]
          text-center
          lg:text-left
        ">


          <h1 className="
            mb-8
            font-heading 
            text-3xl 
            font-bold 
            leading-tight 
            text-slate-900

            sm:text-4xl

            lg:ml-10
            lg:text-4xl
          ">
            Мұғалімдер және репетиторларға,
            балабақша тәрбиешілеріне:
            ересек және мат топтарына
            арналған заманауи оқу материалдары
          </h1>


          <p className="
            mb-10 
            text-lg 
            leading-8 
            text-slate-700

            sm:text-xl

            lg:ml-10
            lg:text-xl
            lg:leading-9
          ">
            Оқушыларды қызықтыратын әдістер, сергіту сәттері,
            шаттық шеңбері, авторлық кітаптар, бейнесабақтар
            және дайын материалдар арқылы
            педагогтердің кәсіби дамуына қолдау көрсетеміз.
          </p>



          <div className="
            flex 
            flex-col 
            items-center 
            gap-4

            sm:flex-row
            sm:justify-center

            lg:ml-10
            lg:justify-start
          ">

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




        {/* RIGHT IMAGE */}
        <div className="
          relative
          -mt-5
          lg:-mt-10
        ">

          <div className="
            absolute 
            -right-8 
            -top-8 
            h-full 
            w-full 
            rounded-[40px] 
            bg-blue-200/30 
            blur-3xl
          "></div>



          <div className="
            relative 
            overflow-hidden 
            rounded-[40px] 
            shadow-2xl
          ">

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





      {/* STATS CARD */}

      <div className="
        absolute
        bottom-6
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
      ">


        <div className="text-center">

          <h2 className="
            font-heading 
            text-3xl 
            font-bold 
            text-violet-700
            sm:text-4xl
          ">
            5000+
          </h2>

          <p className="text-base text-slate-600">
            Педагог
          </p>

        </div>



        <div className="
          hidden 
          h-10 
          w-px 
          bg-slate-200 
          sm:block
        "></div>




        <div className="text-center">

          <h2 className="
            font-heading 
            text-3xl 
            font-bold 
            text-violet-700
            sm:text-4xl
          ">
            25
          </h2>

          <p className="text-base text-slate-600">
            Авторлық материал
          </p>

        </div>




        <div className="
          hidden 
          h-10 
          w-px 
          bg-slate-200 
          sm:block
        "></div>




        <div className="text-center">

          <h2 className="
            font-heading 
            text-3xl 
            font-bold 
            text-violet-700
            sm:text-4xl
          ">
            15+
          </h2>

          <p className="text-base text-slate-600">
            Жыл тәжірибе
          </p>

        </div>


      </div>


    </section>
  );
}