import SectionTitle from "../components/SectionTitle";
import { BadgeCheck, Factory, Leaf, Target } from "lucide-react";

function About() {
  return (
    <main>
      <section className="bg-[#f8f5ef] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow="About Us"
            title="A manufacturing-first brand for sustainable food packaging."
            description="We are building a premium digital presence for a bagasse products manufacturing unit focused on quality, consistency, sustainability and B2B supply."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] bg-white p-8 premium-shadow">
              <h3 className="text-2xl font-bold text-[#1f2f24]">
                Company Profile
              </h3>
              <p className="mt-5 leading-8 text-[#5f6b61]">
                We manufacture eco-friendly bagasse-based disposable food
                packaging products using sugarcane fiber. Our products are
                designed for hotels, restaurants, caterers, cloud kitchens,
                institutions, distributors and bulk buyers seeking alternatives
                to conventional plastic and foam packaging.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#1f5f3b] p-8 text-white premium-shadow">
              <h3 className="text-2xl font-bold">Our Direction</h3>
              <p className="mt-5 leading-8 text-white/75">
                The focus is to position the business as a credible,
                quality-oriented and scalable manufacturing partner for
                sustainable food-service packaging.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              [Target, "Mission", "Reliable sustainable packaging solutions."],
              [Leaf, "Vision", "Trusted Indian bagasse product manufacturer."],
              [Factory, "Strength", "Manufacturing and bulk supply capability."],
              [BadgeCheck, "Quality", "Product consistency and inspection."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-6 shadow-sm">
                <Icon className="text-[#1f5f3b]" />
                <h4 className="mt-5 text-xl font-bold">{title}</h4>
                <p className="mt-3 text-sm leading-6 text-[#5f6b61]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;