import Link from "next/link";
import React from "react";
import LoginButton from "./LoginButton";
import { auth } from "@/auth";
import Image from "next/image";
import SignOutButton from "./SignOutButton";

const Navbar = async () => {
  const session = await auth();
  const user = session?.user;
  console.log(user);
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
          {!user ? (
            <LoginButton />
          ) : (
            <div className="flex items-center gap-1">
              <div className="w-8 h-8 overflow-hidden rounded-full">
                <Image
                  src={user?.image as string}
                  alt={user?.name || "User image"}
                  width={10}
                  height={10}
                  className="w-full h-full object-cover"
                />
              </div>
              <SignOutButton />
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
