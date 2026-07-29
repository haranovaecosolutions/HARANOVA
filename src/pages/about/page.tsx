import { ArrowRight, BadgeCheck, Factory, Globe2, Leaf, Target } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { asset } from "../../lib";

const pillars = [
  { icon: Leaf, title: "Plant-fiber thinking", text: "A product range developed around sugarcane bagasse and practical food-service use." },
  { icon: Factory, title: "Manufacturing mindset", text: "Quality processes, testing orientation, product consistency and bulk supply capability." },
  { icon: Target, title: "Commercial relevance", text: "Formats designed for restaurants, takeaway, institutional meals and distribution channels." },
  { icon: Globe2, title: "Global ambition", text: "A Made-in-India proposition with a clear export and private-label direction." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About HaraViba"
        title="A packaging brand shaped by nature and built for food-service scale."
        description="HaraViba offers plant-based rigid packaging solutions made from sugarcane bagasse, spanning tableware, takeaway packaging, drinkware, cutlery and custom brand-support programmes."
        image={asset("assets/about.png")}
      >
        <Link to="/products" className="button button--forest">Explore products <ArrowRight size={18} /></Link>
        <Link to="/catalogue" className="button button--ghost">View catalogue</Link>
      </PageHero>

      <section className="shell-section">
        <div className="container editorial-grid">
          <Reveal>
            <span className="editorial-number">01</span>
            <SectionHeading eyebrow="Who we are" title="A natural-material story with a modern business purpose." />
          </Reveal>
          <Reveal className="editorial-copy" delay={0.1}>
            <p className="lead">The company catalogue presents HaraViba as a sustainable food-packaging brand offering rigid pulp-fiber products intended to reduce dependence on single-use plastics.</p>
            <p>Its stated range includes plates, trays, cups, cutlery, clamshells, takeaway boxes, drink lids, pizza boxes and additional food-service solutions made from plant fibers.</p>
            <p>The product proposition combines a natural appearance with performance claims relating to food safety, microwave and oven use, refrigeration, stackability, oil and water resistance, and compostability. Product-wise applicability should be confirmed against relevant certifications and test reports.</p>
          </Reveal>
        </div>
      </section>

      <section className="shell-section shell-section--soft">
        <div className="container">
          <Reveal><SectionHeading eyebrow="What defines us" title="Four pillars behind the HaraViba experience." align="center" /></Reveal>
          <div className="pillar-grid">
            {pillars.map(({ icon: Icon, title, text }, index) => (
              <Reveal className="pillar-card glass-card" key={title} delay={index * 0.06}>
                <span className="pillar-card__icon"><Icon size={24} /></span>
                <span className="pillar-card__number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell-section">
        <div className="container split-feature">
          <Reveal className="split-feature__image">
            <img src={asset("assets/about 2.png")} alt="Custom printing and product design by HaraViba" loading="lazy" />
            <div className="split-feature__badge glass-card"><BadgeCheck size={22} /><span>Custom printing · Product design · Prototyping</span></div>
          </Reveal>
          <Reveal className="split-feature__content" delay={0.1}>
            <SectionHeading eyebrow="Beyond the standard catalogue" title="A partner for brand-led packaging programmes." description="The catalogue specifically highlights high-quality printing, prototyping and low-volume manufacturing support for custom requirements." />
            <ul className="check-list">
              <li><BadgeCheck size={19} /> Customized, tailor-made printing</li>
              <li><BadgeCheck size={19} /> Product design and prototyping support</li>
              <li><BadgeCheck size={19} /> Branding that helps products stand out</li>
              <li><BadgeCheck size={19} /> B2B and bulk-order orientation</li>
            </ul>
            <Link to="/branding" className="button button--forest">Explore brand support <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
