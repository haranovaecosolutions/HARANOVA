import { ArrowRight, Droplets, Leaf, Microwave, Recycle, Snowflake, Sprout, ThermometerSun, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import SectionHeading from "../../components/SectionHeading";
import { asset } from "../../lib";

const properties = [
  { icon: Utensils, title: "Food-service oriented", text: "Designed around practical tableware and takeaway use." },
  { icon: Recycle, title: "Compostable direction", text: "Catalogue positions the range as compostable and biodegradable." },
  { icon: Microwave, title: "Microwaveable", text: "Stated as suitable for microwave use, subject to product documentation." },
  { icon: ThermometerSun, title: "Ovenable", text: "Catalogue identifies oven use as a product property." },
  { icon: Snowflake, title: "Freezer friendly", text: "Presented for refrigerated and freezer-friendly applications." },
  { icon: Droplets, title: "Water & oil resistance", text: "Designed to protect food against water and oil exposure." },
];

const cycle = ["Sugarcane", "Juice extraction", "Bagasse fiber", "Pulp processing", "Moulded tableware", "Food-service use", "Responsible disposal"];

export default function SustainabilityPage() {
  return (
    <main>
      <PageHero
        eyebrow="Sustainability"
        title="A circular material story made tangible through everyday food service."
        description="Bagasse is the fibrous residue left after sugarcane juice extraction. HaraViba's catalogue presents it as the basis for practical, plant-fiber packaging."
        image={asset("assets/sustainable.png")}
      >
        <Link to="/catalogue" className="button button--forest">View catalogue evidence <ArrowRight size={18} /></Link>
      </PageHero>

      <section className="shell-section">
        <div className="container sustainability-cycle">
          <Reveal><SectionHeading eyebrow="Material journey" title="From raw material to responsible disposal." description="The cycle below reflects the sustainability flow shown in the company catalogue." /></Reveal>
          <div className="cycle-track">
            {cycle.map((item, index) => (
              <Reveal className="cycle-step" key={item} delay={index * 0.05}>
                <span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p>
                {index < cycle.length - 1 && <i />}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell-section shell-section--soft">
        <div className="container">
          <Reveal><SectionHeading eyebrow="Catalogue properties" title="A performance vocabulary buyers can understand." align="center" /></Reveal>
          <div className="property-grid">
            {properties.map(({ icon: Icon, title, text }, index) => (
              <Reveal className="property-card glass-card" key={title} delay={index * 0.055}>
                <span><Icon size={24} /></span><h3>{title}</h3><p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell-section sustainability-statement">
        <div className="container sustainability-statement__grid">
          <Reveal className="sustainability-statement__visual">
            <img src={asset("assets/world 2.png")} alt="HaraViba sustainable product globe" loading="lazy" />
          </Reveal>
          <Reveal className="sustainability-statement__copy" delay={0.1}>
            <span className="eyebrow">Responsible communication</span>
            <h2>Strong sustainability marketing requires equally strong substantiation.</h2>
            <p>The catalogue uses terms such as natural, compostable, biodegradable, renewable, plastic-free, non-toxic, recyclable and eco-friendly. On a production website, those statements should be read with the relevant product scope, test conditions, certification validity and disposal infrastructure.</p>
            <div className="statement-note"><Sprout size={22} /><span>This website preserves the catalogue's sustainability positioning while expressly directing commercial buyers to product-wise documentation.</span></div>
            <Link to="/bulk-enquiry" className="button button--forest">Request documentation <ArrowRight size={18} /></Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
