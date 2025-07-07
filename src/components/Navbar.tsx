import Link from "next/link";
import React from "react";
import LoginButton from "./LoginButton";

const Navbar = () => {
  return (
    <nav className="py-2 fixed left-2 lg:left-32 right-2 lg:right-32">
      <ul className="flex items-center ">
        <li className="flex-1 text-lg lg:text-xl font-semibold">
          <Link href={"/"}>AI Agent Index</Link>
        </li>
        <li className="text-sm lg:text-base">
          <Link href={"/"}>Agents</Link>
        </li>
        <li className="ml-4">
          <LoginButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
