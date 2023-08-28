import ContactForm from "./contactForm";
import SocialContacts from "./socialContacts";

export default function Contact() {
  return (
    <section className="text-black flex flex-col p-5 pt-0 max-w-6xl m-auto" id="contact">
      <h2 className="text-4xl font-bold text-left sm:text-4xl py-5">
        Contact Us
      </h2>
      <p className="py-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        impedit molestias voluptate similique distinctio veritatis natus
        obcaecati accusantium esse illum! Numquam id repellendus sequi excepturi
        magni cum error dolores illum.
      </p>
      <h3 className="font-semibold py-5 text-brandOrange">Send an email with your enquiry below</h3>
      <ContactForm />
      <h3 className="font-semibold py-5 text-brandOrange">Prefer speaking to someone or getting in touch on social media?</h3>
      <p className="py-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        impedit molestias voluptate similique distinctio veritatis natus
        obcaecati accusantium esse illum! Numquam id repellendus sequi excepturi
        magni cum error dolores illum.
      </p>
      <SocialContacts />
    </section>
  );
}
