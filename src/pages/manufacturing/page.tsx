import { ArrowRight, CheckCircle2, Factory, Gauge, PackageCheck, ScanLine, ShieldCheck, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { asset } from "../../lib";

const process = [
  { icon: Factory, title: "Fiber preparation", text: "Sugarcane bagasse is prepared for pulp-based moulding." },
  { icon: Gauge, title: "Pulp control", text: "Material consistency is managed before forming." },
  { icon: ScanLine, title: "Moulding & forming", text: "Product geometry is created through shaped moulds." },
  { icon: ShieldCheck, title: "Finishing & inspection", text: "Shape, surface, rigidity and consistency are checked." },
  { icon: PackageCheck, title: "Packing", text: "Products are counted, stacked and packed for handling." },
  { icon: Truck, title: "Dispatch", text: "Orders are prepared for B2B and distribution movement." },
];

const controls = ["Product shape and finishing", "Strength and rigidity", "Packing accuracy", "Batch consistency", "Hygienic handling", "Dispatch readiness"];

export default function ManufacturingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Manufacturing & quality"
        title="A process-led presentation for serious procurement teams."
        description="HaraViba's manufacturing story is built around fiber preparation, controlled moulding, finishing, inspection, packing and commercial dispatch."
        image={asset("assets/manufacturing .png")}
        sectionClassName="manufacturing-hero"
      >
        <Link to="/bulk-enquiry" className="button button--forest">Discuss supply requirement <ArrowRight size={18} /></Link>
      </PageHero>

      <section className="shell-section manufacturing-process">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Process flow" title="From agricultural residue to finished food-service packaging." align="center" /></Reveal>
          <div className="process-rail">
            {process.map(({ icon: Icon, title, text }, index) => (
              <Reveal className="process-card glass-card" key={title} delay={index * 0.055}>
                <div className="process-card__top"><span>0{index + 1}</span><Icon size={24} /></div>
                <h3>{title}</h3><p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell-section shell-section--dark">
        <div className="container manufacturing-quality">
          <Reveal>
            <SectionHeading eyebrow="Quality controls" title="Quality is visible in the product before it is written in a certificate." description="The website presents the practical parameters a buyer can evaluate during sampling and commercial qualification." light />
          </Reveal>
          <Reveal className="quality-panel glass-card" delay={0.1}>
            {controls.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p><CheckCircle2 size={18} />{item}</p></div>)}
          </Reveal>
        </div>
      </section>

      <section className="shell-section">
        <div className="container split-feature split-feature--reverse">
          <Reveal className="split-feature__image split-feature__image--compact">
            <img src={asset("assets/manufacturing 02.png")} alt="Catalogue certification references" loading="lazy" />
          </Reveal>
          <Reveal className="split-feature__content" delay={0.1}>
            <SectionHeading eyebrow="Testing & documentation" title="Certification references should support, not replace, product qualification." description="The catalogue displays references to BPI compostability, TÜV Austria OK Compost Industrial, TÜV Austria OK Compost Home, CIPET testing and ISO certification." />
            <p className="body-copy">For production use, the website carefully states that product-wise applicability, scope, validity and relevant test reports should be confirmed before a buyer relies on any particular claim.</p>
            <Link to="/sustainability" className="button button--forest">Review sustainability claims <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
