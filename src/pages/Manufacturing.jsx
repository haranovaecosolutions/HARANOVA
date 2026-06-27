import SectionTitle from "../components/SectionTitle";
import { processSteps } from "../data/products";
import { CheckCircle2, Factory } from "lucide-react";

function Manufacturing() {
  return (
    <main className="bg-[#f8f5ef] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Manufacturing & Quality"
          title="A process-led presentation to build buyer confidence."
          description="This page will show the real manufacturing process, quality controls, packing standards and dispatch capability."
        />

        <div className="mt-14 rounded-[3rem] bg-[#1f2f24] p-8 text-white md:p-12">
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <Factory className="text-[#d7b56d]" />
                <p className="mt-5 text-3xl font-extrabold text-[#d7b56d]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-8 premium-shadow">
            <h3 className="text-2xl font-bold">Manufacturing Process</h3>
            <p className="mt-5 leading-8 text-[#5f6b61]">
              The production process begins with sourcing sugarcane bagasse,
              followed by pulp preparation, moulding, forming, drying, finishing,
              quality inspection, packing and dispatch.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-8 premium-shadow">
            <h3 className="text-2xl font-bold">Quality Control Parameters</h3>
            <div className="mt-5 grid gap-3">
              {[
                "Product shape and finishing",
                "Strength and rigidity",
                "Packing accuracy",
                "Batch consistency",
                "Hygienic handling",
                "Dispatch readiness",
              ].map((item) => (
                <p key={item} className="flex gap-3 text-[#5f6b61]">
                  <CheckCircle2 className="text-[#1f5f3b]" size={20} />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Manufacturing;