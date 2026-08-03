export default function Stats() {
  return (
    <section id = "stats" className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid grid-cols-3 gap-8 rounded-3xl bg-blue-700 p-10 text-center text-white shadow-lg">
        <div>
          <h2 className="text-5xl font-bold">1000+</h2>
          <p className="mt-2 text-lg">Педагог</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">9</h2>
          <p className="mt-2 text-lg">Авторлық материал</p>
        </div>

        <div>
          <h2 className="text-5xl font-bold">15+</h2>
          <p className="mt-2 text-lg">Жыл тәжірибе</p>
        </div>
      </div>
    </section>
  );
}