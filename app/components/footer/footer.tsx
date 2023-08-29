import { navLinks } from "../nav/navContent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brandOrange w-full ">
      <div className="text-white grid grid-cols-1 sm:grid-cols-3 gap-10 px-5 py-8 max-w-6xl m-auto sm:justify-items-center">
        {/* col - 1 */}
        <div>
          <h2 className="font-bold py-5">Get in touch!</h2>
          <p>
            Wyn Edwards Electrical operate throughout the North Wales region
            however upon request we can provide quotations throughout the United
            Kingdom.
          </p>
        </div>
        {/* col-2 */}
        <div>
          <h2 className="font-bold py-5">Follow me!</h2>
          <div className="flex flex-row">
            <Link href="https://www.facebook.com/wynedwardselectrical">
              <FontAwesomeIcon
                icon={faFacebook}
                height={30}
                width={30}
                className="mr-4"
              />
            </Link>
            <Link href="https://twitter.com/WynEdwardsElec">
              <FontAwesomeIcon
                icon={faTwitter}
                height={30}
                width={30}
                className="mr-4"
              />
            </Link>
            <Link href="#">
              <FontAwesomeIcon
                icon={faLinkedin}
                height={30}
                width={30}
                className="mr-4"
              />
            </Link>
            <Link href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                height={30}
                width={30}
                className="mr-4"
              />
            </Link>
          </div>
        </div>
        {/* col-3 */}
        <div>
          <h2 className="font-bold py-5">Site Links</h2>
          <ul className="text-white">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.linkTo} >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-row max-w-6xl m-auto p-5 text-sm">
        <p>
          All Rights Reserved Wyn Edwards Electrical &copy; Website designed and
          created by Jamie Evans
        </p>
        <p></p>
      </div>
    </footer>
  );
}
