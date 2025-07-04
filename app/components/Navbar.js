"use client";
import Link from "next/link";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { navLinks } from "../utils/constants";
import Image from "next/image";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto bg-white top-0 left-0 right-0 z-10">
      <div className="flex px-12 py-4 flex-wrap items-center justify-between mx-auto">
        <Link href="/" className="text-black" aria-label="link to the homepage">
          Hyagriva
          {/* <Image src="/logo.png" alt="logo" loading="eager" width="100" height="100"/> */}
        </Link>
        <div className="mobile-menu block pt-1 md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              title="Navbar menu button"
              aria-label="nav menu button"
              className="flex items-center px-2 py-3 "
            >
              <CiMenuFries className="h-10 w-10" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-2 py-3 "
              title="Navbar close button"
              aria-label="nav close menu button"
            >
              <IoMdClose className="h-10 w-10" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  aria-label="link to the navbar links"
                  className="block py-2 pl-3 pr-4  text-black sm:text-xl font-bold rounded md:p-0 hover:text-[#EE227A]"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen && (
        <ul className="flex bg-black flex-col py-4 items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                aria-label="link to the navbar links"
                onClick={() => setNavbarOpen(false)}
                className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-2xl rounded font-bold md:p-0 hover:text-[#EE227A]"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
