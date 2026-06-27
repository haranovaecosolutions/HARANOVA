import { ArrowRight, PackageCheck } from "lucide-react";
import { Link } from "react-router";

function ProductCard({ product }) {
  return (
    <div
      id={product.id}
      className="group rounded-[2rem] border border-[#1f5f3b]/10 bg-white p-6 premium-shadow transition duration-300 hover:-translate-y-1"
    >
      <div className="mb-6 flex h-52 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-[#eef0df] via-[#f8f5ef] to-[#d9e4cf]">
        <div className="rounded-full bg-white/80 p-6 shadow-lg">
          <PackageCheck size={54} className="text-[#1f5f3b]" />
        </div>
      </div>

      <p className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#8a6f3d]">
        {product.category}
      </p>

      <h3 className="text-2xl font-bold text-[#1f2f24]">{product.name}</h3>

      <p className="mt-4 min-h-24 text-sm leading-7 text-[#5f6b61]">
        {product.description}
      </p>

      <div className="mt-5 rounded-2xl bg-[#f8f5ef] p-4 text-sm text-[#425143]">
        <p>
          <span className="font-semibold">Sizes:</span> {product.sizes}
        </p>
        <p className="mt-2">
          <span className="font-semibold">Applications:</span>{" "}
          {product.applications}
        </p>
      </div>

      <ul className="mt-5 space-y-2">
        {product.features.map((feature) => (
          <li key={feature} className="flex gap-2 text-sm text-[#425143]">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1f5f3b]" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to="/bulk-enquiry"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#1f5f3b] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#17482d]"
      >
        Enquire Now <ArrowRight size={16} />
      </Link>
    </div>
  );
}

export default ProductCard;