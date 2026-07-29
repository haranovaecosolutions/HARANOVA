import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { products } from "../data/products";
import { whatsappUrl } from "../lib";

type FormState = {
  name: string;
  company: string;
  phone: string;
  email: string;
  buyerType: string;
  product: string;
  quantity: string;
  destination: string;
  requirement: string;
};

const initialState: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  buyerType: "",
  product: "",
  quantity: "",
  destination: "",
  requirement: "",
};

export default function EnquiryForm() {
  const [form, setForm] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  const message = useMemo(
    () => [
      "Hello HaraViba, I would like a bulk quotation.",
      `Name: ${form.name}`,
      `Company: ${form.company || "-"}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email || "-"}`,
      `Buyer type: ${form.buyerType || "-"}`,
      `Product: ${form.product || "-"}`,
      `Approx. quantity: ${form.quantity || "-"}`,
      `Destination: ${form.destination || "-"}`,
      `Requirement: ${form.requirement || "-"}`,
    ].join("\n"),
    [form],
  );

  const update = (key: keyof FormState, value: string) => setForm((prev) => ({ ...prev, [key]: value }));

  const submitWhatsApp = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form className="enquiry-form" onSubmit={submitWhatsApp}>
      <div className="form-grid form-grid--two">
        <label>
          <span>Your name *</span>
          <input value={form.name} onChange={(e) => update("name", e.target.value)} required placeholder="Full name" />
        </label>
        <label>
          <span>Company</span>
          <input value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Company / brand" />
        </label>
      </div>

      <div className="form-grid form-grid--two">
        <label>
          <span>Phone *</span>
          <input value={form.phone} onChange={(e) => update("phone", e.target.value)} required placeholder="Country code + number" />
        </label>
        <label>
          <span>Email</span>
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="name@company.com" />
        </label>
      </div>

      <div className="form-grid form-grid--two">
        <label>
          <span>Buyer type</span>
          <select value={form.buyerType} onChange={(e) => update("buyerType", e.target.value)}>
            <option value="">Select buyer type</option>
            <option>Restaurant / QSR</option>
            <option>Hotel / Caterer</option>
            <option>Distributor</option>
            <option>Private label</option>
            <option>Institution</option>
            <option>Export buyer</option>
          </select>
        </label>
        <label>
          <span>Product interest</span>
          <select value={form.product} onChange={(e) => update("product", e.target.value)}>
            <option value="">Select product</option>
            {products.map((product) => <option key={product.slug}>{product.shortName}</option>)}
            <option>Custom programme</option>
          </select>
        </label>
      </div>

      <div className="form-grid form-grid--two">
        <label>
          <span>Approx. quantity</span>
          <input value={form.quantity} onChange={(e) => update("quantity", e.target.value)} placeholder="Monthly / order quantity" />
        </label>
        <label>
          <span>Delivery destination</span>
          <input value={form.destination} onChange={(e) => update("destination", e.target.value)} placeholder="City / country" />
        </label>
      </div>

      <label>
        <span>Requirement</span>
        <textarea value={form.requirement} onChange={(e) => update("requirement", e.target.value)} placeholder="Sizes, packing, branding or certification requirements" rows={5} />
      </label>

      <div className="enquiry-form__actions">
        <button className="button button--forest" type="submit">
          Send on WhatsApp <MessageCircle size={18} />
        </button>
        <a
          className="button button--ghost"
          href={`mailto:info@haraviba.com?subject=${encodeURIComponent("HaraViba bulk enquiry")}&body=${encodeURIComponent(message)}`}
        >
          Send by email <Mail size={18} />
        </a>
      </div>

      {submitted && (
        <p className="form-success">Your enquiry has been prepared. Complete sending it in WhatsApp, or use the email option. <ArrowUpRight size={15} /></p>
      )}
    </form>
  );
}
