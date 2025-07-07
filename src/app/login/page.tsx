import React from "react";
import SocialLogin from "./SocialLogin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | Agent Index",
  description: "AI Agents Index: Discover your next Automation wizard",
};

const LoginPage = async () => {
  return (
    <div className="mt-20">
      <div className=" flex justify-center items-center">
        <SocialLogin />
      </div>
    </div>
  );
};

export default LoginPage;
