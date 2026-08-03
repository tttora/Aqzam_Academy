import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products";

export default function Products() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-24" id = "products">
        <div className="mt-10 rounded-t-[50px] absolute inset-0 -z-10 bg-gradient-to-b from-[#d3cae8] to-white"></div>       

        <h2 className="z-10 mb-8 text-center text-5xl font-bold text-slate-900">
          Материалдар
        </h2>

        <p className="mb-12 text-center text-xl text-slate-600">
          Авторлық оқу материалдары мен бейнесабақтар
        </p>

        <div className="grid grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
             key={product.id}
             title={product.title}
             price={product.price}
             description={product.description}
             image={product.image}
              />
         ))}
        </div>
    </section>
  );
}