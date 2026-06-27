import { Link } from "react-router";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#1f2f24] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7b56d] text-[#1f2f24]">
              <Leaf />
            </div>
            <div>
              <p className="text-xl font-extrabold">HaraNova</p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#d7b56d]">
                Eco Solutions
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-xl leading-8 text-white/70">
            Premium bagasse tableware and food packaging solutions for
            restaurants, caterers, institutions, distributors and bulk buyers.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-[#d7b56d]">Quick Links</h4>
          <div className="mt-5 grid gap-3 text-sm text-white/70">
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/manufacturing">Manufacturing</Link>
            <Link to="/sustainability">Sustainability</Link>
            <Link to="/bulk-enquiry">Bulk Enquiry</Link>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-[#d7b56d]">Contact</h4>
          <div className="mt-5 grid gap-4 text-sm text-white/70">
            <p className="flex gap-3">
              <MapPin size={18} /> Factory Address, Gujarat, India
            </p>
            <a href="tel:+919033112673" className="flex gap-3 transition hover:text-white">
              <Phone size={18} /> +919033112673
            </a>
            <a href="mailto:haranovaecosolutions@gmail.com" className="flex gap-3 transition hover:text-white">
              <Mail size={18} /> haranovaecosolutions@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-sm text-white/50">
        © {new Date().getFullYear()} HaraNova. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;