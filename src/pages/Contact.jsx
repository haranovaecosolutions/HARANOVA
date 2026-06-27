import SectionTitle from "../components/SectionTitle";
import EnquiryForm from "../components/EnquiryForm";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

function Contact() {
  return (
    <main className="bg-[#f8f5ef] px-5 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact Us"
          title="Let us discuss your packaging requirement."
          description="Share your product requirement, quantity, location and business type. Our team can respond with product details and commercial terms."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-[#1f2f24] p-8 text-white premium-shadow">
            <h3 className="text-2xl font-bold">Contact Details</h3>

            <div className="mt-8 grid gap-6 text-white/75">
              <p className="flex gap-4">
                <MapPin className="text-[#d7b56d]" />
                Factory Address, Gujarat, India
              </p>
              <p className="flex gap-4">
                <Phone className="text-[#d7b56d]" />
                +91-XXXXXXXXXX
              </p>
              <p className="flex gap-4">
                <Mail className="text-[#d7b56d]" />
                sales@harnova.com
              </p>
              <p className="flex gap-4">
                <Clock className="text-[#d7b56d]" />
                Monday to Saturday, 10:00 AM to 6:00 PM
              </p>
            </div>

            <div className="mt-10 rounded-3xl bg-white/10 p-6">
              <p className="text-sm leading-7 text-white/75">
                Google Map, GSTIN, MSME, IEC, catalogue download and WhatsApp
                button can be added once final business details are available.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 premium-shadow">
            <h3 className="mb-6 text-2xl font-bold text-[#1f2f24]">
              Enquiry Form
            </h3>
            <EnquiryForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;