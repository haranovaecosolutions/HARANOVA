import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { asset } from "../lib";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__glow" />
      <div className="container site-footer__top">
        <div className="site-footer__brand">
          <img src={asset("assets/vs_logo.svg")} alt="HaraViba" />
          <p>
            Plant-fiber tableware and food-service packaging designed for practical performance and a greener tomorrow.
          </p>
          <Link to="/bulk-enquiry" className="button button--light">
            Start an enquiry <ArrowUpRight size={18} />
          </Link>
        </div>

        <div>
          <h3>Explore</h3>
          <div className="footer-links">
            <Link to="/about">About us</Link>
            <Link to="/products">Product range</Link>
            <Link to="/manufacturing">Manufacturing</Link>
            <Link to="/sustainability">Sustainability</Link>
            <Link to="/branding">Custom branding</Link>
            <Link to="/catalogue">Catalogue</Link>
          </div>
        </div>

        <div>
          <h3>Contact</h3>
          <div className="footer-contact">
            <a href="https://maps.google.com/?q=A-101+Veer+Bhadra+Complex+Navsari+396445" target="_blank" rel="noreferrer">
              <MapPin size={18} />
              <span>A-101 Veer Bhadra Complex, Navsari - 396445, Gujarat, India</span>
            </a>
            <a href="tel:+916353237802"><Phone size={18} /> +91 63532 37802</a>
            <a href="mailto:info@haraviba.com"><Mail size={18} /> info@haraviba.com</a>
          </div>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <span>© {new Date().getFullYear()} HaraViba. All rights reserved.</span>
        <span>Green Goes Global</span>
        <span>Product claims are subject to applicable product-wise test reports and certifications.</span>
      </div>
    </footer>
  );
}
