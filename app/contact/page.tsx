import BookingForm from "@/components/BookingForm";
import JsonLd from "@/components/JsonLd";
import { Icon, WhatsAppIcon } from "@/components/Icons";
import { Features, PageHero, SectionHead } from "@/components/Sections";
import { pageMeta } from "@/lib/seo";
import { ADDRESS, IMG, MAP_EMBED, MAP_LINK, PHONE_DISPLAY, PHONE_TEL, WHATSAPP, breadcrumbSchema, hotelSchema } from "@/lib/site";

const PATH = "/contact";

export const metadata = pageMeta({
  path: PATH,
  title: "Contact & Booking | Grand Empire Hotel Bahria Town",
  description:
    "Book Grand Empire Hotel & Apartments, Plot 23, Street 4, Civic Center, Bahria Town Phase 4, Rawalpindi. Call or WhatsApp 0319 9193124 — front desk open 24/7. Map & directions.",
  keywords: [
    "grand empire hotel contact", "grand empire hotel bahria town", "hotel booking bahria town rawalpindi",
    "hotel in bahria civic center", "hotel phone number bahria town phase 4", "hotel near me bahria town rawalpindi",
  ],
  image: IMG.front,
});

export default function Contact() {
  return (
    <>
      <JsonLd data={[hotelSchema, breadcrumbSchema([{ path: PATH, name: "Contact" }])]} />
      <PageHero
        img={IMG.front}
        trail={[{ label: "Contact" }]}
        title="Contact & Book — Grand Empire Hotel Bahria Town"
        lead="Our front desk is open 24/7. Call, WhatsApp or send a booking request and we'll confirm your room right away."
      />

      <section className="section" id="book">
        <div className="container grid-2" style={{ alignItems: "start" }}>
          <div className="contact-card reveal">
            <span className="eyebrow">Get in touch</span>
            <h2>We&apos;re here 24/7</h2>
            <div className="contact-line">
              <div className="ic"><Icon name="pin" /></div>
              <div>
                <strong>Address</strong>
                <br />
                {ADDRESS}
                <br />
                <a href={MAP_LINK} target="_blank" rel="noopener">Get directions →</a>
              </div>
            </div>
            <div className="contact-line">
              <div className="ic"><Icon name="phone" /></div>
              <div>
                <strong>Phone</strong>
                <br />
                <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a> &nbsp;/&nbsp; <a href={`tel:${PHONE_TEL}`}>+92 319 9193124</a>
              </div>
            </div>
            <div className="contact-line">
              <div className="ic"><WhatsAppIcon /></div>
              <div>
                <strong>WhatsApp</strong>
                <br />
                <a href={WHATSAPP} target="_blank" rel="noopener">Chat with us on WhatsApp</a>
              </div>
            </div>
            <div className="contact-line">
              <div className="ic"><Icon name="clock" /></div>
              <div>
                <strong>Front Desk</strong>
                <br />
                Open 24 hours, 7 days a week
              </div>
            </div>
            <p className="note">Please bring your original CNIC (or passport) for all guests at check-in.</p>
          </div>
          <BookingForm />
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHead eyebrow="Location" title="Find us in Bahria Town Phase 4 Civic Center" text={ADDRESS} />
          <div className="map reveal">
            <iframe
              src={MAP_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map to Grand Empire Hotel, Bahria Town Phase 4 Civic Center, Rawalpindi"
            />
          </div>
          <div className="mt-2">
            <Features
              cols="grid-3"
              items={[
                ["pin", "Heart of Civic Center", "Restaurants, cafés, banks and shopping steps from our door."],
                ["calendar", "Easy access to Islamabad", "Convenient routes to Islamabad via the Expressway and GT Road."],
                ["lock", "Safe gated community", "Stay inside secure, well-managed Bahria Town Rawalpindi."],
              ]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
