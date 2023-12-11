import Link from "next/link";
import React from "react";
import logo from "../assets/rm-logo.png";
import Image from "next/image";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="h-12 flex flex-row justify-between content-center mt-3 mb-3 border-b-2 border-gray-500 shadow-md px-4">
      <Link href="/">
        <Image
          src={logo}
          alt="rick and morty logo"
          className="w-32"
          width="120"
        />
      </Link>
      <ul
        className="flex align-middle mb-0 gap-3 text-lg"
        // style={{
        //   fontFamily: "'Fuzzy Bubbles', cursive",
        // }}
      >
        <li className="hover:text-cyan-600">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-cyan-600">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
