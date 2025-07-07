import React from "react";
import { Button } from "./ui/button";
import { userSignOut } from "@/actions";

const SignOutButton = () => {
  return (
    <form action={userSignOut}>
      <Button variant="outline" size="sm" className="rounded-xl">
        Logout
      </Button>
    </form>
  );
};

export default SignOutButton;
