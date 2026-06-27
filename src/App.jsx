import { HashRouter, Route, Routes, useLocation } from "react-router";
import { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Manufacturing from "./pages/Manufacturing";
import Sustainability from "./pages/Sustainability";
import BulkEnquiry from "./pages/BulkEnquiry";
import Contact from "./pages/Contact";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-[#f8f5ef] text-[#1f2f24]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/bulk-enquiry" element={<BulkEnquiry />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;