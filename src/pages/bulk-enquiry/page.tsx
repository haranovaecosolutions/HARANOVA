import { BadgeCheck, Boxes, Globe2, PackageCheck } from "lucide-react";
import EnquiryForm from "../../components/EnquiryForm";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { asset } from "../../lib";

const points = [
  { icon: PackageCheck, title: "Product requirement", text: "Specify product family, size and intended food-service application." },
  { icon: Boxes, title: "Commercial volume", text: "Share estimated order or monthly quantity for meaningful discussions." },
  { icon: Globe2, title: "Destination & market", text: "Mention city, state or export destination and any logistics expectations." },
  { icon: BadgeCheck, title: "Documentation", text: "Identify certification, testing, branding or packing information required." },
];

export default function BulkEnquiryPage() {
  return (
    <main>
      <PageHero
        eyebrow="Bulk enquiry"
        title="A focused form for faster commercial qualification."
        description="Share enough context to start a useful conversation on product, volume, destination, packing, branding and documentation."
        image={asset("assets/meal.png")}
      />

      <section className="shell-section enquiry-page">
        <div className="container enquiry-page__grid">
          <Reveal className="enquiry-page__intro">
            <span className="eyebrow">Before you submit</span>
            <h2>The strongest enquiry is specific.</h2>
            <p>For GitHub Pages compatibility, this form does not require a backend. It composes your details into WhatsApp or email so the submission remains functional on static hosting.</p>
            <div className="enquiry-points">
              {points.map(({ icon: Icon, title, text }) => <div key={title}><span><Icon size={21} /></span><div><h3>{title}</h3><p>{text}</p></div></div>)}
            </div>
          </Reveal>
          <Reveal className="enquiry-page__form glass-card" delay={0.1}>
            <EnquiryForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
