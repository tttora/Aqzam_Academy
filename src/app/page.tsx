import Header from "@/components/layout/Header";
import Products from "@/components/sections/Products";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AboutMe from "@/components/sections/AboutMe";
import Jinaktar from "@/components/sections/Jinaktar";
import Videos from "@/components/sections/Videos";
import Reviews from "@/components/sections/Reviews";
import Contacts from "@/components/sections/Contacts";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />

      <Hero />

      <AboutMe />

      <Products />

      <Jinaktar />

      <Videos />

      <Reviews />

      <Contacts />
    </main>
  );
}