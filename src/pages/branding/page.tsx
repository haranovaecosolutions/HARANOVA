import { ArrowRight, Boxes, Brush, Megaphone, PackageSearch, PenTool, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { asset } from "../../lib";

const services = [
  { icon: Brush, title: "Custom printing", text: "Add brand identity, campaign messaging or product information to selected formats." },
  { icon: PenTool, title: "Product design", text: "Translate food-service needs into shape, size and application conversations." },
  { icon: PackageSearch, title: "Prototyping", text: "Evaluate a concept before commercial-scale manufacturing decisions." },
  { icon: Boxes, title: "Low-volume support", text: "Catalogue highlights support for qualifying low-volume development requirements." },
];

export default function BrandingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Custom brand support"
        title="Make sustainable packaging recognizably yours."
        description="HaraViba's catalogue highlights custom printing, product design, prototyping and low-volume manufacturing support for tailored customer requirements."
        image={asset("assets/custom.png")}
      >
        <Link to="/bulk-enquiry" className="button button--forest">Start a custom brief <ArrowRight size={18} /></Link>
      </PageHero>

      <section className="shell-section">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Capability stack" title="From blank fiber to a branded food-service experience." align="center" /></Reveal>
          <div className="branding-services">
            {services.map(({ icon: Icon, title, text }, index) => (
              <Reveal className="branding-service glass-card" key={title} delay={index * 0.07}>
                <div className="branding-service__head"><span>0{index + 1}</span><Icon size={24} /></div>
                <h3>{title}</h3><p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell-section shell-section--dark branding-project">
        <div className="container branding-project__grid">
          <Reveal>
            <span className="eyebrow eyebrow--light">A practical custom workflow</span>
            <h2>Define. Design. Validate. Produce.</h2>
            <p>A clear custom programme reduces ambiguity before tooling, printing and production commitments.</p>
          </Reveal>
          <Reveal className="branding-project__steps" delay={0.1}>
            {["Brief & application", "Product / size selection", "Artwork & prototype", "Commercial validation", "Production & dispatch"].map((step, index) => (
              <div key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="shell-section">
        <div className="container branding-showcase">
          <Reveal className="branding-showcase__image"><img src={asset("assets/brand 2.png")} alt="Extended HaraViba product range" loading="lazy" /></Reveal>
          <Reveal className="branding-showcase__copy" delay={0.1}>
            <SectionHeading eyebrow="Where branding creates value" title="Private labels, food brands and distribution programmes." description="Custom printing can help create recall, support word-of-mouth, communicate sustainability choices and connect a package with the food brand behind it." />
            <div className="mini-feature"><Megaphone size={21} /><div><strong>Market visibility</strong><span>Turn a functional package into a branded touchpoint.</span></div></div>
            <div className="mini-feature"><Sparkles size={21} /><div><strong>Distinctive presentation</strong><span>Help products stand out without losing the natural visual language.</span></div></div>
            <Link to="/bulk-enquiry" className="button button--forest">Submit project details <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
