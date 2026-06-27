import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Products() {
  return (
    <main className="bg-[#f8f5ef] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Our Products"
          title="Complete bagasse food packaging product range."
          description="Product details, sizes and packing information can be expanded later with real product photographs, carton quantity, MOQ and technical specifications."
        />

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border border-[#1f5f3b]/10 bg-white p-8">
          <h3 className="text-2xl font-bold text-[#1f2f24]">
            Product Note
          </h3>
          <p className="mt-4 leading-8 text-[#5f6b61]">
            Claims such as certified compostable, food-grade certified,
            microwave-safe, freezer-safe, PFAS-free, leak-proof or
            heat-resistant should be displayed only where supported by actual
            product-wise certificates or test reports.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Products;