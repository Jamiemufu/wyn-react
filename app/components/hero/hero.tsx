import Link from "next/link";
import Button from "../button";
export default function Hero() {
  return (
    <section
      className="bg-cover bg-center bg-black"
      style={{ backgroundImage: "url(" + "/van.jpg" + ")" }}
    >
      <div className="h-full text-white bg-black bg-opacity-70">
        <div className="flex flex-col h-full m-auto p-5 py-20 max-w-6xl">
          <h1 className="text-4xl py-7 text-left font-bold sm:text-6xl">Wyn Edwards Electrical</h1>
          <p className="text-l w-full text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Earum, ipsa aperiam.
            Commodi magnam hic aliquam, perspiciatis eveniet dignissimos, minus
            at magni accusantium dolorum, ipsam quam ea et fugiat error sunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit voluptatum commodi blanditiis! Voluptate ad dignissimos maiores itaque. Voluptatibus officiis molestias quae, minus, consequuntur aliquam cupiditate possimus consectetur dolor cumque ipsam.
          </p>
          <div className="py-10 text-center sm:self-center">
            <Link href="#contact">
              <Button text="Get a Free Quote!" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
