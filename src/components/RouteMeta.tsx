import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const titles: Record<string, string> = {
  "/": "HaraViba | Sustainable Bagasse Packaging",
  "/about": "About HaraViba | Plant-Fiber Packaging",
  "/products": "Products | HaraViba Bagasse Tableware",
  "/manufacturing": "Manufacturing & Quality | HaraViba",
  "/sustainability": "Sustainability | HaraViba",
  "/branding": "Custom Branding | HaraViba",
  "/catalogue": "Product Catalogue | HaraViba",
  "/bulk-enquiry": "Bulk Enquiry | HaraViba",
  "/contact": "Contact | HaraViba",
};

export default function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = pathname.startsWith("/products/")
      ? "Product Details | HaraViba"
      : titles[pathname] ?? "HaraViba | Green Goes Global";
  }, [pathname]);

  return null;
}
