import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Globe2,
  Leaf,
  PackageCheck,
  Recycle,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import BrandMarquee from "../../components/BrandMarquee";
import Metric from "../../components/Metric";
import ProductCard from "../../components/ProductCard";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { products } from "../../data/products";
import { asset } from "../../lib";

const reasons = [
  { icon: Leaf, title: "Plant-fiber by design", text: "Sugarcane bagasse is shaped into practical tableware for modern food service." },
  { icon: ShieldCheck, title: "Performance-led range", text: "Catalogue formats cover plates, bowls, meals, takeaway containers, cups and cutlery." },
  { icon: Globe2, title: "Built for B2B scale", text: "A focused proposition for distributors, institutions, private labels and export buyers." },
];

export default function HomePage() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-hero__mesh" />
        <div className="home-hero__grain" />
        <div className="container home-hero__grid">
          <div className="home-hero__copy">
            <motion.div
              className="hero-kicker glass-pill"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <Sparkles size={16} /> Sustainable products for a better tomorrow
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              Packaging that feels <em>natural</em> and performs commercially.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
            >
              HaraViba creates plant-based sugarcane bagasse tableware and food-service packaging for restaurants, caterers, institutions, distributors, private labels and global buyers.
            </motion.p>

            <motion.div
              className="home-hero__actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <Link to="/products" className="button button--forest button--large">
                Explore product range <ArrowRight size={19} />
              </Link>
              <Link to="/bulk-enquiry" className="button button--glass button--large">
                Request bulk quote <ArrowUpRight size={19} />
              </Link>
            </motion.div>

            <motion.div
              className="home-hero__trust"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.34 }}
            >
              <span><BadgeCheck size={18} /> B2B manufacturing focus</span>
              <span><Recycle size={18} /> Compostable product direction</span>
            </motion.div>
          </div>

          <motion.div
            className="home-hero__visual"
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.95, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-product-orbit hero-product-orbit--one" />
            <div className="hero-product-orbit hero-product-orbit--two" />
            <div className="hero-product-card glass-card">
              <img src={asset("assets/try.png")} alt="HaraViba bagasse packaging product range" />
              <div className="hero-product-card__shade" />
              <div className="hero-product-card__label">
                <PackageCheck size={20} />
                <div>
                  <strong>Complete food-service range</strong>
                  <span>Plates · Bowls · Trays · Containers · Cups</span>
                </div>
              </div>
            </div>
            <motion.div
              className="hero-floating-card hero-floating-card--top glass-card"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Leaf size={21} />
              <div><strong>Plant based</strong><span>Sugarcane bagasse</span></div>
            </motion.div>
            <motion.div
              className="hero-floating-card hero-floating-card--bottom glass-card"
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <Boxes size={21} />
              <div><strong>Bulk ready</strong><span>B2B enquiries</span></div>
            </motion.div>
          </motion.div>
        </div>

        <div className="container home-hero__metrics">
          <Metric value="8" label="Core product families" detail="From bowls to custom ranges" />
          <Metric value="B2B" label="Commercially focused" detail="Institutional, distribution and export" delay={0.06} />
          <Metric value="360°" label="Brand support" detail="Design, prototyping and custom printing" delay={0.12} />
          <Metric value="Global" label="Market direction" detail="Green goes global" delay={0.18} />
        </div>
      </section>

      <BrandMarquee />

      <section className="shell-section">
        <div className="container">
          <Reveal>
            <SectionHeading
              eyebrow="Product architecture"
              title="Built around the way food is served, carried and delivered."
              description="Explore a curated preview. Every product family has its own detail page with catalogue specifications and enquiry pathways."
            />
          </Reveal>
          <div className="product-grid product-grid--featured">
            {products.slice(0, 4).map((product, index) => <ProductCard key={product.slug} product={product} index={index} />)}
          </div>
          <Reveal className="section-end-link">
            <Link to="/products" className="text-link">View all product families <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="shell-section home-story">
        <div className="container home-story__grid">
          <Reveal className="home-story__visual">
            <div className="image-stack">
              <img className="image-stack__main" src={asset("assets/world.png")} alt="Global HaraViba product concept" loading="lazy" />
              <div className="image-stack__glass glass-card">
                <Globe2 size={24} />
                <strong>Green goes global</strong>
                <span>Made in India · Built for responsible food service</span>
              </div>
            </div>
          </Reveal>
          <Reveal className="home-story__content" delay={0.12}>
            <SectionHeading
              eyebrow="The HaraViba proposition"
              title="Sustainable packaging, presented with manufacturing credibility."
              description="The catalogue positions HaraViba as a plant-fiber packaging brand with a broad tableware range, scientific testing orientation and custom brand-support capability."
            />
            <div className="reason-list">
              {reasons.map(({ icon: Icon, title, text }) => (
                <div className="reason-item" key={title}>
                  <span><Icon size={22} /></span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
            <div className="home-story__links">
              <Link to="/about" className="button button--forest">Discover HaraViba <ArrowRight size={18} /></Link>
              <Link to="/sustainability" className="text-link">Our sustainability story <ArrowUpRight size={18} /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell-section shell-section--dark home-cta">
        <div className="home-cta__orb" />
        <div className="container home-cta__grid">
          <Reveal>
            <span className="eyebrow eyebrow--light">For procurement teams & distributors</span>
            <h2>Turn a product requirement into a clear commercial conversation.</h2>
          </Reveal>
          <Reveal className="home-cta__panel glass-card" delay={0.12}>
            <p>Share your product, quantity, destination and branding requirement. The enquiry flow works directly through WhatsApp or email on a static GitHub Pages deployment.</p>
            <Link to="/bulk-enquiry" className="button button--light button--large">Start bulk enquiry <ArrowUpRight size={19} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
