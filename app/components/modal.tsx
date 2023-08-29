import { navLinks } from "./nav/navContent";
import Link from "next/link";
import Button from "./button";

export default function Modal({ show, close }: { show: boolean; close: any }) {
  return (
    <div className={show ? "h-screen bg-white z-auto" : "hidden"}>
      <div className="flex justify-end items-end p-6">
        <button className="text-2xl text-black" onClick={close}>
          X
        </button>
      </div>
      <ul className="flex flex-col justify-center align-middle items-center text-4xl gap-10 h-4/5 text-black">
        {navLinks.map((link, index) => (
          <li key={index} onClick={close}>
            <Link href={link.linkTo} >
              {link.text}
            </Link>
          </li>
        ))}
        <Link href="#contact" scroll={false} >
          <Button text="Get Quote!" close={close} />
        </Link>
      </ul>
    </div>
  );
}
