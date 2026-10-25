import Link from "next/link";
import { PHONE_TEL, WHATSAPP_BOOK } from "@/lib/site";
import { Icon, WhatsAppIcon } from "./Icons";

// Sticky Call / WhatsApp / Book bar shown only on phones.
export default function MobileBar() {
  return (
    <div className="mobile-bar" role="navigation" aria-label="Quick contact">
      <a href={`tel:${PHONE_TEL}`}>
        <Icon name="phone" />
        <span>Call</span>
      </a>
      <a href={WHATSAPP_BOOK} target="_blank" rel="noopener" className="mb-wa">
        <WhatsAppIcon />
        <span>WhatsApp</span>
      </a>
      <Link href="/contact#book" className="mb-book">
        <Icon name="calendar" />
        <span>Book Now</span>
      </Link>
    </div>
  );
}
