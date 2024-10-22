import React from "react";
import Carousel from "./Carousel";

export default function Banner() {
  return (
    <div
      className="h-96 p-5 "
    >
      <div className="  h-1/2 flex flex-col items-center text-white justify-center">
      <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold my-2 bg-custom-inner-text bg-clip-text leading-normal	 text-transparent">
      CryptoBar
        </h2>
        <span>Get all the Info regarding your favorite Crypto Currency</span>
      </div>
      <Carousel />
    </div>
  );
}
