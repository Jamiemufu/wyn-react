import ContactForm from "./contactForm";

export default function Contact() {
  return (
    <section className="text-black flex flex-col p-5 pt-0 max-w-6xl m-auto">
      <h2 className="text-4xl font-bold text-left sm:text-6xl py-5">
        Contact Us
      </h2>
      <p className="sm:py-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        impedit molestias voluptate similique distinctio veritatis natus
        obcaecati accusantium esse illum! Numquam id repellendus sequi excepturi
        magni cum error dolores illum.
      </p>
      <ContactForm />
    </section>
  );
}
