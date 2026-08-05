import Image from "next/image";

export default function Header() {
  return (
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
      backdrop-blur-2xl 
      shadow-lg

      sm:px-10 
      sm:py-4
    "
    >

      <a href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Aqzam Academy"
          width={100}
          height={100}
          className="
          h-[65px]
          w-[65px]

          sm:h-[90px]
          sm:w-[90px]
          "
        />
      </a>


      <nav
        className="
        hidden

        lg:flex

        gap-6
        xl:gap-10

        text-gray-700
        font-semibold

        lg:text-base
        xl:text-xl
      "
      >
        <a href="#hero">Басты бет</a>
        <a href="#products">Материалдар</a>
        <a href="#jinaktar">Жинақтар</a>
        <a href="#reviews">Пікірлер</a>
        <a href="#aboutme">Автор</a>
        <a href="#contacts">Байланысу</a>
      </nav>



      <button
        className="
        rounded-full 
        bg-violet-600 
        px-5 
        py-3 

        text-sm
        font-semibold 
        text-white

        sm:px-6
        sm:text-base

        transition
        hover:bg-violet-700
      "
      >
        Сатып алу
      </button>


    </header>
  );
}