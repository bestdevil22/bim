import { FaWhatsapp } from "react-icons/fa";
import { CONTENT } from "../content";

export function WhatsAppButton() {
  return (
    <a
      href={CONTENT.contact.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 hover:-translate-y-1 transition-all duration-300"
      aria-label="Chat on WhatsApp"
      data-testid="button-whatsapp-floating"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
}
