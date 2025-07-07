import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const LoginButton = () => {
  return (
    <>
      <Link href={"/login"}>
        <Button variant="outline" className="rounded-xl" size="sm">
          Login
        </Button>
      </Link>
    </>
  );
};

export default LoginButton;
