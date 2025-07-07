import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col items-center text-6xl font-medium">
        <h1>AI Agents Index:</h1>
        <h1>Discover your next</h1>
        <h1>Automation wizard</h1>
      </div>
      <p className="text-gray-300">
        Browse and compare curated AI agents for any workflow.
      </p>
    </div>
  );
};

export default Hero;
