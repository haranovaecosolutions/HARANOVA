import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type { Product } from "../data/products";
import { asset } from "../lib";

type ProductCardProps = {
  product: Product;
  index?: number;
};

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.65, delay: Math.min(index * 0.06, 0.3) }}
      whileHover={{ y: -10, rotateX: 1.5, rotateY: -1.5 }}
    >
      <Link to={`/products/${product.slug}`} className="product-card__link" aria-label={`View ${product.name}`}>
        <div className="product-card__media">
          <img src={asset(product.image)} alt={product.name} loading="lazy" />
          <div className="product-card__media-overlay" />
          <span className="product-card__index">{String(index + 1).padStart(2, "0")}</span>
          <span className="product-card__arrow"><ArrowUpRight size={20} /></span>
        </div>
        <div className="product-card__body">
          <span className="product-card__category">{product.category}</span>
          <h3>{product.shortName}</h3>
          <p>{product.summary}</p>
          <div className="product-card__meta">
            <span>{product.specs.length} catalogue options</span>
            <span style={{ backgroundColor: product.accent }} />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
