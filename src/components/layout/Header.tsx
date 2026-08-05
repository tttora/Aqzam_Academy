import Image from "next/image";

export default function Header() {
  return (
    <header className="
      fixed left-1/2 top-4 z-50 
      flex w-[92%] max-w-[1400px] 
      -translate-x-1/2 items-center justify-between
      rounded-full border border-white/40 
      bg-white/25 px-5 py-3
      backdrop-blur-2xl shadow-lg
      sm:px-10 sm:py-4
    ">
      
      <a href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          alt="Aqzam Academy"
          width={80}
          height={80}
          className="sm:w-[100px]"
        />
      </a>


      {/* Desktop menu */}
      <nav className="
        hidden lg:flex 
        gap-8 
        text-gray-700 
        font-semibold 
        text-lg
        xl:gap-12
        xl:text-xl
      ">
        <a href="#hero">Басты бет</a>
        <a href="#products">Материалдар</a>
        <a href="#jinaktar">Жинақтар</a>
        <a href="#reviews">Пікірлер</a>
        <a href="#aboutme">Автор</a>
        <a href="#contacts">Байланысу</a>
      </nav>


      <button className="
        rounded-full 
        bg-violet-600 
        px-4 py-2
        text-sm
        font-semibold 
        text-white
        sm:px-6 sm:py-3 sm:text-base
        transition hover:bg-violet-700
      ">
        Сатып алу
      </button>

    </header>
  );
}