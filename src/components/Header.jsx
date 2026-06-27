import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Leaf, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Manufacturing", path: "/manufacturing" },
  { name: "Sustainability", path: "/sustainability" },
  { name: "Bulk Enquiry", path: "/bulk-enquiry" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    isActive
      ? "text-[#1f5f3b] font-semibold"
      : "text-[#425143] hover:text-[#1f5f3b]";

  return (
    <header className="sticky top-0 z-50 border-b border-[#1f5f3b]/10 bg-[#f8f5ef]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1f5f3b] text-white shadow-lg">
            <Leaf size={22} />
          </div>
          <div>
            <p className="text-lg font-extrabold tracking-tight text-[#1f2f24]">
              HaraNova
            </p>
            <p className="text-xs uppercase tracking-[0.22em] text-[#8a6f3d]">
              Eco Solutions
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navClass}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#catalogue"
            className="rounded-full border border-[#1f5f3b]/20 px-5 py-3 text-sm font-semibold text-[#1f5f3b] hover:bg-white"
          >
            Catalogue
          </a>

          <Link
            to="/bulk-enquiry"
            className="rounded-full bg-[#1f5f3b] px-5 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[#17482d]"
          >
            Get Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full bg-white p-3 text-[#1f5f3b] shadow-md lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[#1f5f3b]/10 bg-[#f8f5ef] px-5 py-5 lg:hidden">
          <nav className="grid gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={navClass}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;