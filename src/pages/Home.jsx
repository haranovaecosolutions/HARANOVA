import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Factory,
  Globe2,
  Leaf,
  PackageCheck,
  Recycle,
  ShieldCheck,
  Truck,
} from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import ProductCard from "../components/ProductCard";
import { industries, processSteps, products } from "../data/products";

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f8f5ef]">
        <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#d9e4cf] blur-3xl opacity-70" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-[#eadfca] blur-3xl opacity-80" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.32em] text-[#8a6f3d]">
              Bagasse Products Manufacturing Unit
            </p>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-[#1f2f24] md:text-7xl">
              Premium Bagasse Tableware & Food Packaging.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-[#5f6b61]">
              Sustainable, durable and elegant sugarcane bagasse products for
              restaurants, caterers, cloud kitchens, institutions, distributors
              and export buyers.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-[#1f5f3b] px-7 py-4 text-sm font-bold text-white shadow-xl hover:bg-[#17482d]"
              >
                View Products <ArrowRight size={18} />
              </Link>

              <Link
                to="/bulk-enquiry"
                className="inline-flex items-center gap-2 rounded-full border border-[#1f5f3b]/20 bg-white px-7 py-4 text-sm font-bold text-[#1f5f3b] hover:bg-[#f0eadf]"
              >
                Request Bulk Quote
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl">
              {[
                ["B2B", "Bulk Supply"],
                ["Eco", "Packaging"],
                ["India", "Manufacturing"],
              ].map(([number, label]) => (
                <div
                  key={label}
                  className="rounded-3xl border border-[#1f5f3b]/10 bg-white/70 p-4 text-center shadow-sm"
                >
                  <p className="text-2xl font-extrabold text-[#1f5f3b]">
                    {number}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#5f6b61]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-[3rem] bg-[#1f5f3b] p-5 premium-shadow">
              <div className="rounded-[2.5rem] bg-gradient-to-br from-[#f8f5ef] via-[#eef0df] to-[#d9e4cf] p-8">
                <div className="grid gap-5">
                  {[
                    ["Plates", "Round, square and compartment plates"],
                    ["Bowls", "Soup, curry and dessert bowls"],
                    ["Trays", "Meal trays for institutions"],
                    ["Clamshells", "Takeaway and delivery boxes"],
                  ].map(([title, text]) => (
                    <div
                      key={title}
                      className="flex items-center gap-4 rounded-3xl bg-white/80 p-5 shadow-md"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f5f3b] text-white">
                        <PackageCheck />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#1f2f24]">
                          {title}
                        </h3>
                        <p className="text-sm text-[#5f6b61]">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-3xl bg-white p-5 shadow-xl">
              <p className="text-sm font-bold text-[#1f5f3b]">
                Sustainable Choice
              </p>
              <p className="mt-1 text-xs text-[#5f6b61]">
                Made from sugarcane fiber
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-8">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-4">
          {[
            [Leaf, "Eco-conscious Material"],
            [ShieldCheck, "Quality Focused"],
            [Truck, "Bulk Dispatch"],
            [Globe2, "Export Ready Approach"],
          ].map(([Icon, title]) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-2xl bg-[#f8f5ef] p-5"
            >
              <Icon className="text-[#1f5f3b]" />
              <p className="font-semibold text-[#1f2f24]">{title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Product Range"
            title="Manufactured for modern food-service businesses."
            description="A complete product architecture for bulk buyers who need reliable, sustainable and practical food packaging solutions."
          />

          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1f2f24] px-5 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="Manufacturing Flow"
            title="From sugarcane fiber to finished food packaging."
            description="Our website will highlight a clear process flow to build confidence among serious B2B and institutional buyers."
          />

          <div className="mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-3xl font-extrabold text-[#d7b56d]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <SectionTitle
              eyebrow="Why Choose Us"
              title="Built for trust, consistency and long-term supply."
              description="The website should communicate manufacturing credibility, professional systems and buyer-friendly support."
            />
          </div>

          <div className="grid gap-4">
            {[
              [Factory, "Manufacturing-led business presentation"],
              [BadgeCheck, "Quality and certification-focused structure"],
              [Recycle, "Sustainability-first brand identity"],
              [Truck, "Bulk order and distributor enquiry flow"],
            ].map(([Icon, title]) => (
              <div
                key={title}
                className="flex gap-4 rounded-3xl bg-white p-6 premium-shadow"
              >
                <Icon className="mt-1 text-[#1f5f3b]" />
                <p className="text-lg font-bold text-[#1f2f24]">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            center
            eyebrow="Industries We Serve"
            title="Packaging solutions for every food-service channel."
            description="Our product positioning will support restaurants, institutions, distributors and export buyers."
          />

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-[#1f5f3b]/15 bg-[#f8f5ef] px-6 py-3 font-semibold text-[#425143]"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogue" className="px-5 py-20">
        <div className="mx-auto max-w-7xl rounded-[3rem] bg-[#1f5f3b] p-10 text-white md:p-16 premium-shadow">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#d7b56d]">
                Bulk Enquiry
              </p>
              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                Looking for regular supply or distributor pricing?
              </h2>
              <p className="mt-5 leading-8 text-white/75">
                Share your requirement and our team can respond with product
                details, packing options, MOQ and commercial terms.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 md:justify-end">
              <Link
                to="/bulk-enquiry"
                className="rounded-full bg-white px-7 py-4 text-sm font-bold text-[#1f5f3b]"
              >
                Request Quote
              </Link>
              <Link
                to="/contact"
                className="rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-white"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;