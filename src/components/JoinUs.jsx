import React from "react";
import { Link } from "react-router-dom";

export default function JoinUs() {
  return (
    <div className="flex flex-col bg-transparent w-full p-10 h-min items-center justify-center">
      <span className="text-4xl sm:text-4xl md:text-7xl lg:text-8xl font-bold my-2 text-white">
        JOIN US VIA
      </span>
      <span className="text-4xl sm:text-4xl md:text-7xl lg:text-8xl font-bold my-2 bg-custom-inner-text bg-clip-text text-transparent">
        DISCORD
      </span>
      <p className="p-5 text-white">Invest and manage all your crypto at one place.</p>
      <Link className="p-3 px-8 bg-custom-dark-btn rounded-full text-white hover:opacity-90">JOIN NOW</Link>
    </div>
  );
}
