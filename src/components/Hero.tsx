import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import FadeUpAnimation from "./FadeUpAnimation";

const Hero = () => {
  return (
    <div className="mt-20 w-full flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col items-center text-4xl lg:text-6xl font-medium">
        <FadeUpAnimation>
          <h1>AI Agents Index:</h1>
        </FadeUpAnimation>
        <FadeUpAnimation delay={0.2}>
          <h1>Discover your next</h1>
        </FadeUpAnimation>
      </div>

      <FadeUpAnimation delay={0.3}>
        <p className="text-gray-300 text-center text-sm lg:text-base">
          Browse and compare curated AI agents for any workflow.
        </p>
      </FadeUpAnimation>

      <FadeUpAnimation delay={0.4}>
        <Link href={"/agents"}>
          <Button
            className="text-lg font-normal flex items-center  "
            variant="link"
          >
            <span>Explore Agents</span>{" "}
            <ArrowUpRightIcon className="w-5 h-5 " />
          </Button>
        </Link>
      </FadeUpAnimation>
    </div>
  );
};

export default Hero;
