import { Clock3, ExternalLink, Globe2, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { asset, whatsappUrl } from "../../lib";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact HaraViba"
        title="Start with a product. Continue with a partnership."
        description="Connect for catalogue products, custom branding, distribution, institutional supply and export-oriented enquiries."
        image={asset("assets/IMG-20260721-WA0013.jpg.jpeg")}
      >
        <a className="button button--forest" href={whatsappUrl("Hello HaraViba, I would like to discuss your sustainable packaging products.")} target="_blank" rel="noreferrer">Message on WhatsApp <ExternalLink size={18} /></a>
      </PageHero>

      <section className="shell-section contact-page">
        <div className="container contact-page__grid">
          <Reveal className="contact-card contact-card--primary">
            <span className="eyebrow eyebrow--light">Registered office</span>
            <h2>Navsari, Gujarat, India</h2>
            <p>HaraViba's catalogue lists its registered office at A-101 Veer Bhadra Complex, Navsari - 396445, Gujarat, India.</p>
            <a href="https://maps.google.com/?q=A-101+Veer+Bhadra+Complex+Navsari+396445" target="_blank" rel="noreferrer" className="button button--light">Open in Maps <ExternalLink size={18} /></a>
          </Reveal>

          <Reveal className="contact-card glass-card" delay={0.05}>
            <span><Phone size={23} /></span><h3>Phone</h3><a href="tel:+916353237802">+91 63532 37802</a><p>Call for product and bulk supply discussions.</p>
          </Reveal>
          <Reveal className="contact-card glass-card" delay={0.1}>
            <span><Mail size={23} /></span><h3>Email</h3><a href="mailto:info@haraviba.com">info@haraviba.com</a><p>Share specifications, destination and documentation requirements.</p>
          </Reveal>
          <Reveal className="contact-card glass-card" delay={0.15}>
            <span><Globe2 size={23} /></span><h3>Website</h3><a href="https://www.haraviba.com" target="_blank" rel="noreferrer">www.haraviba.com</a><p>Official digital address stated in the catalogue.</p>
          </Reveal>
          <Reveal className="contact-card glass-card" delay={0.2}>
            <span><Clock3 size={23} /></span><h3>Enquiry response</h3><p>Use the structured bulk-enquiry page for the clearest commercial hand-off.</p><Link to="/bulk-enquiry" className="text-link">Open enquiry form <ExternalLink size={17} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="shell-section shell-section--soft">
        <div className="container contact-map-card glass-card">
          <div><MapPin size={26} /><div><span className="eyebrow">Location</span><h2>A-101 Veer Bhadra Complex, Navsari - 396445</h2></div></div>
          <iframe title="HaraViba office map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=A-101%20Veer%20Bhadra%20Complex%20Navsari%20396445&output=embed" />
        </div>
      </section>
    </main>
  );
}
