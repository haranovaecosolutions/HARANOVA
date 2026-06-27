import SectionTitle from "../components/SectionTitle";
import { ArrowDown, Leaf, Recycle, Sprout } from "lucide-react";

function Sustainability() {
  const flow = [
    "Sugarcane",
    "Juice Extraction",
    "Bagasse Fiber",
    "Pulp Processing",
    "Moulded Tableware",
    "Food-Service Use",
    "Responsible Disposal",
  ];

  return (
    <main className="bg-[#f8f5ef] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Sustainability"
          title="A natural alternative for responsible food-service packaging."
          description="Bagasse is the fibrous residue left after sugarcane juice extraction and can be converted into practical food packaging products."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {[
            [Leaf, "Renewable Source", "Made from sugarcane fiber."],
            [Recycle, "Plastic Alternative", "Supports reduced dependence on plastic disposables."],
            [Sprout, "Eco-conscious Choice", "Supports responsible packaging decisions."],
          ].map(([Icon, title, text]) => (
            <div key={title} className="rounded-[2rem] bg-white p-8 premium-shadow">
              <Icon className="text-[#1f5f3b]" size={34} />
              <h3 className="mt-5 text-2xl font-bold">{title}</h3>
              <p className="mt-4 leading-7 text-[#5f6b61]">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-[3rem] bg-white p-8 premium-shadow">
          <h3 className="text-2xl font-bold text-[#1f2f24]">
            Sustainability Flow
          </h3>

          <div className="mt-8 grid gap-4 md:grid-cols-7 md:items-center">
            {flow.map((item, index) => (
              <div key={item} className="contents">
                <div className="rounded-3xl bg-[#f8f5ef] p-5 text-center">
                  <p className="font-bold text-[#1f5f3b]">{item}</p>
                </div>
                {index !== flow.length - 1 && (
                  <ArrowDown className="mx-auto text-[#8a6f3d] md:rotate-[-90deg]" />
                )}
              </div>
            ))}
          </div>

          <p className="mt-8 leading-8 text-[#5f6b61]">
            Compostability, biodegradation and disposal-related claims should be
            made subject to applicable certification, disposal conditions and
            local composting infrastructure.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Sustainability;