import SectionTitle from "../components/SectionTitle";
import EnquiryForm from "../components/EnquiryForm";
import { PackageCheck, Truck, Users } from "lucide-react";

function BulkEnquiry() {
  return (
    <main className="bg-[#f8f5ef] px-5 py-20">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="Bulk Orders"
            title="Partner with us for regular bagasse product supply."
            description="This page is designed for distributors, hotels, restaurants, institutions, caterers, cloud kitchens and export buyers."
          />

          <div className="mt-10 grid gap-5">
            {[
              [PackageCheck, "Product-wise bulk supply"],
              [Truck, "Packing and dispatch support"],
              [Users, "Distributor and private-label enquiries"],
            ].map(([Icon, title]) => (
              <div key={title} className="flex gap-4 rounded-3xl bg-white p-6">
                <Icon className="text-[#1f5f3b]" />
                <p className="font-bold text-[#1f2f24]">{title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] bg-white p-8 premium-shadow">
          <h3 className="mb-6 text-2xl font-bold text-[#1f2f24]">
            Submit Your Requirement
          </h3>
          <EnquiryForm />
        </div>
      </div>
    </main>
  );
}

export default BulkEnquiry;