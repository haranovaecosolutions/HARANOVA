import { ArrowRight, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import ProductCard from "../../components/ProductCard";
import Reveal from "../../components/Reveal";
import { products } from "../../data/products";
import { asset } from "../../lib";

const categories = ["All", ...Array.from(new Set(products.map((product) => product.category)))];

export default function ProductsPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const term = search.trim().toLowerCase();
    return products.filter((product) => {
      const categoryMatch = category === "All" || product.category === category;
      const searchMatch = !term || `${product.name} ${product.summary} ${product.applications.join(" ")}`.toLowerCase().includes(term);
      return categoryMatch && searchMatch;
    });
  }, [category, search]);

  return (
    <main>
      <PageHero
        eyebrow="Product range"
        title="A complete tableware system, not a collection of isolated SKUs."
        description="Browse detailed product families with catalogue dimensions, applications and direct bulk-enquiry pathways."
        image={asset("assets/products.png")}
      >
        <a className="button button--forest" href={asset("HaraViba-Catalogue.pdf")} download>Download catalogue <ArrowRight size={18} /></a>
      </PageHero>

      <section className="shell-section products-browser">
        <div className="container">
          <Reveal className="product-toolbar glass-card">
            <div className="product-search"><Search size={19} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search products or applications" /></div>
            <div className="product-filter-label"><SlidersHorizontal size={18} /> Filter range</div>
            <div className="product-filters">
              {categories.map((item) => (
                <button key={item} type="button" onClick={() => setCategory(item)} className={category === item ? "active" : ""}>{item}</button>
              ))}
            </div>
          </Reveal>

          <div className="product-grid">
            {filtered.map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
          </div>

          {filtered.length === 0 && (
            <div className="empty-state">
              <h2>No matching product family</h2>
              <p>Try a broader search or reset the category filter.</p>
              <button className="button button--forest" onClick={() => { setSearch(""); setCategory("All"); }}>Reset filters</button>
            </div>
          )}

          <Reveal className="products-browser__cta glass-card">
            <div><span className="eyebrow">Need a tailored format?</span><h2>Custom printing, product design and prototyping are available for qualified programmes.</h2></div>
            <Link to="/branding" className="button button--forest">Explore custom branding <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
