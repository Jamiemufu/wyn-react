import { navLinks } from "./nav/navContent";
import Link from "next/link";
import Button from "./button";
import NavLogo from "./nav/navLogo";

export default function Modal({ show, close }: { show: boolean; close: any }) {
  return (
    <div className={show ? "h-screen bg-white z-auto" : "hidden"}>
      <div className="flex justify-end items-end p-7">
        <button className="text-6xl font-light text-brandGray" onClick={close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 32 32"
            className="fill-current"
          >
            <path d="M 7.21875 5.78125 L 5.78125 7.21875 L 14.5625 16 L 5.78125 24.78125 L 7.21875 26.21875 L 16 17.4375 L 24.78125 26.21875 L 26.21875 24.78125 L 17.4375 16 L 26.21875 7.21875 L 24.78125 5.78125 L 16 14.5625 Z"></path>
          </svg>
        </button>
      </div>

      <ul className="flex flex-col justify-center align-middle items-center text-lg sm:text-4xl gap-10 h-4/5 text-brandOrange">
        <li className="ml-5">
          <NavLogo />
        </li>
        {navLinks.map((link, index) => (
          <li key={index} onClick={close}>
            <Link href={link.linkTo}>{link.text}</Link>
          </li>
        ))}
        <Link href="#contact" scroll={false}>
          <Button text="Get A Quote!" close={close} />
        </Link>
      </ul>
    </div>
  );
}
