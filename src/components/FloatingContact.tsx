import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib";

export default function FloatingContact() {
  return (
    <a
      className="floating-contact"
      href={whatsappUrl("Hello HaraViba, I would like to discuss a bulk packaging requirement.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Contact HaraViba on WhatsApp"
    >
      <span className="floating-contact__pulse" />
      <MessageCircle size={22} />
      <span>WhatsApp</span>
    </a>
  );
}
