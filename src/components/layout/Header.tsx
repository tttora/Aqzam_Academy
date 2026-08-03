import Image from "next/image";
export default function Header() {
    return (
        <header className="fixed left-1/2 top-6 z-50 flex w-[85%] max-w-[1400px] -translate-x-1/2 items-center justify-between rounded-full border border-white/40 bg-white/25 px-10 py-4 backdrop-blur-2xl shadow-lg">
            <a href="/" className=" flex items-center gap-3">
                <Image
                src="/images/logo.png"
                alt="Aqzam Academy"
                width={100}
                height={100}
                />
            </a>
            <nav className=" flex gap-12 text-gray-700 font-semibold text-xl">
                <a href="#hero">Басты бет</a>
                <a href="#products">Материалдар</a>
                <a href="#jinaktar">Жинақтар</a>
                <a href="#reviews">Пікірлер</a>
                <a href="#aboutme">Автор</a>
                <a href="#contacts">Байланысу</a>
            </nav>

            <button className=" rounded-full bg-violet-600 px-6 py-3 font-semibold text-white transition hover:bg-violet-700">
                Сатып алу
            </button>
        </header>
    );
}