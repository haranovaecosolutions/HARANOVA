import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { asset } from "../lib";

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Products", "/products"],
  ["Manufacturing", "/manufacturing"],
  ["Sustainability", "/sustainability"],
  ["Branding", "/branding"],
  ["Catalogue", "/catalogue"],
  ["Contact", "/contact"],
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__inner">
        <NavLink to="/" className="brand" aria-label="HaraViba home" onClick={() => setOpen(false)}>
          <img src={asset("assets/vs_logo.svg")} alt="HaraViba - Green Goes Global" />
        </NavLink>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) => `nav-link ${isActive ? "nav-link--active" : ""}`}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/bulk-enquiry" className="button button--forest site-header__cta">
          Bulk enquiry <ArrowUpRight size={17} />
        </NavLink>

        <button
          type="button"
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
          >
            <nav className="container mobile-menu__nav" aria-label="Mobile navigation">
              {nav.map(([label, path], index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035 }}
                >
                  <NavLink
                    to={path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `mobile-link ${isActive ? "mobile-link--active" : ""}`}
                  >
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {label}
                    <ArrowUpRight size={18} />
                  </NavLink>
                </motion.div>
              ))}
              <NavLink to="/bulk-enquiry" onClick={() => setOpen(false)} className="button button--forest mobile-menu__cta">
                Request a bulk quote <ArrowUpRight size={18} />
              </NavLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
