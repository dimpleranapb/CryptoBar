import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="h-64 flex justify-center items-center flex-col bg-cover bg-center" style={{ backgroundImage: "url('/public/footerbg.png')" }}>
      <div className="flex gap-4">
        <i className="fa-brands fa-facebook text-4xl bg-custom-icon bg-clip-text text-transparent hover:bg-custom-inner-text"></i>
        <i className="fa-brands fa-discord text-4xl bg-custom-icon bg-clip-text text-transparent hover:bg-custom-inner-text"></i>
        <i className="fa-brands fa-twitter text-4xl bg-custom-icon bg-clip-text text-transparent hover:bg-custom-inner-text"></i>
        <i className="fa-brands fa-instagram text-4xl bg-custom-icon bg-clip-text text-transparent hover:bg-custom-inner-text"></i>
      </div>
      <div className="text-white flex p-8 gap-8">
        <Link className="hover:text-blue-200">Privacy Policy</Link>
        <Link className="hover:text-blue-200">Terms And Conditions</Link>
        <Link className="hover:text-blue-200">About Us</Link>
      </div>
      <span className="text-white">
        <i className="fa-solid fa-copyright"></i> 2024 CRYPTOBAR
      </span>
    </div>
  );
}
