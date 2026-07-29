import { ArrowLeft, ArrowRight, BadgeCheck, MessageCircle } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { products } from "../../data/products";
import { asset, whatsappUrl } from "../../lib";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = products.find((item) => item.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  const message = `Hello HaraViba, I am interested in ${product.name}. Please share MOQ, packing, pricing and availability.`;
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <main>
      <section className="product-detail-hero shell-section">
        <div className="container">
          <Link to="/products" className="back-link"><ArrowLeft size={18} /> Back to products</Link>
          <div className="product-detail-hero__grid">
            <Reveal className="product-detail-hero__media">
              <img src={asset(product.image)} alt={product.name} />
              <span className="product-detail-hero__category">{product.category}</span>
            </Reveal>
            <Reveal className="product-detail-hero__copy" delay={0.1}>
              <span className="eyebrow">HaraViba catalogue range</span>
              <h1>{product.name}</h1>
              <p className="lead">{product.summary}</p>
              <p>{product.description}</p>
              <div className="product-detail-hero__actions">
                <a className="button button--forest button--large" href={whatsappUrl(message)} target="_blank" rel="noreferrer">Enquire on WhatsApp <MessageCircle size={18} /></a>
                <Link className="button button--ghost button--large" to="/bulk-enquiry">Detailed enquiry <ArrowRight size={18} /></Link>
              </div>
              <div className="product-detail-hero__chips">
                {product.features.map((feature) => <span key={feature}><BadgeCheck size={16} />{feature}</span>)}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell-section shell-section--soft">
        <div className="container product-spec-layout">
          <Reveal>
            <SectionHeading eyebrow="Catalogue specifications" title="Available formats and dimensions." description="Specifications below are transcribed from the uploaded company catalogue. Commercial packing, MOQ and product-wise compliance documents should be confirmed during enquiry." />
            <div className="application-cloud">
              {product.applications.map((item) => <span key={item}>{item}</span>)}
            </div>
          </Reveal>
          <Reveal className="spec-table-wrap glass-card" delay={0.1}>
            <table className="spec-table">
              <thead><tr>{product.specColumns.map((column) => <th key={column.key}>{column.label}</th>)}</tr></thead>
              <tbody>
                {product.specs.map((row, index) => (
                  <tr key={index}>{product.specColumns.map((column) => <td key={column.key}>{row[column.key]}</td>)}</tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      <section className="shell-section">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Continue exploring" title="Related product families." /></Reveal>
          <div className="related-grid">
            {related.map((item) => (
              <Link className="related-card" to={`/products/${item.slug}`} key={item.slug}>
                <img src={asset(item.image)} alt={item.name} loading="lazy" />
                <div><span>{item.category}</span><h3>{item.shortName}</h3><ArrowRight size={19} /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
