import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import FloatingContact from "./components/FloatingContact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RouteMeta from "./components/RouteMeta";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/about/page";
import BrandingPage from "./pages/branding/page";
import BulkEnquiryPage from "./pages/bulk-enquiry/page";
import CataloguePage from "./pages/catalogue/page";
import ContactPage from "./pages/contact/page";
import HomePage from "./pages/home/page";
import ManufacturingPage from "./pages/manufacturing/page";
import ProductDetailPage from "./pages/product-detail/page";
import ProductsPage from "./pages/products/page";
import SustainabilityPage from "./pages/sustainability/page";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <RouteMeta />
      <div className="app-shell">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:slug" element={<ProductDetailPage />} />
          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/branding" element={<BrandingPage />} />
          <Route path="/catalogue" element={<CataloguePage />} />
          <Route path="/bulk-enquiry" element={<BulkEnquiryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
        <FloatingContact />
      </div>
    </HashRouter>
  );
}
