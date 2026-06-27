import { Send } from "lucide-react";

function EnquiryForm() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you. Your enquiry has been captured for website demo purpose.");
  }

  const inputClass =
    "w-full rounded-2xl border border-[#1f5f3b]/15 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#1f5f3b]";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input className={inputClass} placeholder="Your Name" required />
        <input className={inputClass} placeholder="Company Name" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <input className={inputClass} placeholder="Mobile Number" required />
        <input className={inputClass} type="email" placeholder="Email Address" />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <select className={inputClass} defaultValue="">
          <option value="" disabled>
            Type of Buyer
          </option>
          <option>Restaurant / Hotel</option>
          <option>Caterer</option>
          <option>Distributor</option>
          <option>Export Buyer</option>
          <option>Institution</option>
          <option>Other</option>
        </select>

        <select className={inputClass} defaultValue="">
          <option value="" disabled>
            Product Interest
          </option>
          <option>Bagasse Plates</option>
          <option>Bagasse Bowls</option>
          <option>Meal Trays</option>
          <option>Clamshell Containers</option>
          <option>Custom / Bulk Products</option>
        </select>
      </div>

      <input
        className={inputClass}
        placeholder="Approx Monthly Requirement / Quantity"
      />

      <textarea
        className={`${inputClass} min-h-32 resize-none`}
        placeholder="Tell us about your requirement"
      />

      <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f5f3b] px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-[#17482d]">
        Submit Enquiry <Send size={17} />
      </button>
    </form>
  );
}

export default EnquiryForm;