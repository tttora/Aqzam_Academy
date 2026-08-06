import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section
      id="products"
      className="relative z-10 mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-6 lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 mt-10 rounded-t-[40px] bg-gradient-to-b from-[#d3cae8] to-white lg:rounded-t-[50px]" />

      {/* Heading */}
      <h2 className="mb-6 text-center font-heading text-3xl font-bold text-slate-900 sm:text-4xl lg:mb-8 lg:text-5xl">
        Материалдар
      </h2>

      <p className="mx-auto mb-10 max-w-2xl text-center text-base text-slate-600 sm:text-lg lg:mb-12 lg:text-xl">
        Авторлық оқу материалдары мен бейнесабақтар
      </p>

      {/* Products */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            image={product.image}
            previewVideo={product.previewVideo}
          />
        ))}
      </div>
    </section>
  );
}