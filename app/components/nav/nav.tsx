import Link from "next/link";
import NavLogo from "./navLogo";
import NavLink from "./navLink";
import NavIconLink from "./navIconLink";
import Button from "../button";
import { navLinks } from "./navContent.js";

export default function nav() {
  return (
    <nav>
      <div className="flex items-center justify-center align-center flex-wrap bg-white text-black m-auto text-sm sm:justify-between">
        <div>
          <NavLogo />
        </div>
        <div className="flex flex-wrap justify-center p-5 sm:p-2 sm:flex-row">
          <NavIconLink image="/gmail-96.png" text="Email Us" />
          <NavIconLink image="/whatsapp-96.png" text="07858382831" />
          <div className="hidden sm:flex">
            <Link href="#contact">
              <Button text="Get Quote!" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <ul className="justify-evenly align-center flex-wrap p-3 bg-brandOrange text-white text-sm hidden sm:flex">
          {navLinks.map((link, index) => (
            <NavLink key={index} linkTo={link.linkTo} text={link.text} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
