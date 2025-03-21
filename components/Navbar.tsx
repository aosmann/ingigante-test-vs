import React, { useState } from "react";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../public/assets/images/logo.png";
import Link from "next/link";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const handleLinkClick = () => {
    setNavbar(false); // Close the menu when a link is clicked
  };
  return (
    <nav className="w-full bg-primary absolute sticky fixed top-0 z-50">
      <div className=" justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-4">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" onClick={handleLinkClick}>
              <Image src={logo} alt="logo" height={32} />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="#B2A978"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#B2A978"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0 text-secondary gap-4">
              <li className="text-secondary hover:text-[#cfc591]">
                <Link href="/sales" onClick={handleLinkClick}>For Sale</Link>
              </li>
              <li className="text-secondary hover:text-[#cfc591]">
                <Link href="/rentals" onClick={handleLinkClick}>For Rent</Link>
              </li>
              <li className="text-secondary hover:text-[#cfc591]">
                <Link href="/services" onClick={handleLinkClick}>Services</Link>
              </li>
              <li className="text-secondary hover:text-[#cfc591]">
                <Link href="/#about" scroll={false} onClick={handleLinkClick}>
                  About
                </Link>
              </li>
              <li className="text-secondary hover:text-[#cfc591]">
                <Link href="/blog" onClick={handleLinkClick}>Blog</Link>
              </li>
              <li className="hover:text-secondary">
                <Link href={"/contact"} onClick={handleLinkClick}>
                  <button className="bg-secondary hover:bg-[#9c9260] py-2 px-4 text-white rounded-md">
                    Contact Us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
