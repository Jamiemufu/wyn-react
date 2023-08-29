"use client";

import React, { useState } from "react";
import Link from "next/link";
import NavLogo from "./navLogo";
import NavLink from "./navLink";
import Button from "../button";
import { navLinks } from "./navContent.js";
import NavButton from "./navButton";
import Modal from "../modal";

export default function Nav() {
  const [modalOpen, setModalOpen] = useState(false);

  /**
   * showModal is a function that sets the modalOpen state variable to true
   * It also disables scrolling on the background
   * @returns {void}
   * 
   */
  const showModal = () => {
    setModalOpen(true);
    // Disables Background Scrolling whilst the SideDrawer/Modal is open
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
  }
  };

  /**
   * hideModal is a function that sets the modalOpen state variable to false
   * It also enables scrolling on the background
   * @returns {void}
   */
  const hideModal = () => {
    setModalOpen(false);
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'unset';
    }
  };

  return (
    <nav className="fixed w-full z-auto">
      <Modal show={modalOpen} close={hideModal} />
      <div className="flex items-center justify-between align-center sm:flex-wrap bg-white text-black m-auto text-sm lg:justify-between sm:justify-center">
        <div>
          <NavLogo />
        </div>
        {/* open menu */}
        <div className="sm:flex sm:flex-wrap justify-center p-5 sm:p-2 sm:flex-row hidden">
          <ul className="grid grid-flow-col self-center gap-10 items-center text-black">
            {navLinks.map((link, index) => (
              <NavLink key={index} linkTo={link.linkTo} text={link.text} />
            ))}
            <Link href="#contact">
              <Button text="Get Quote!" />
            </Link>
          </ul>
        </div>
        {/* close menu */}
        <div className="sm:hidden flex justify-end p-5">
          <NavButton onClick={showModal} />
        </div>
      </div>
    </nav>
  );
}
