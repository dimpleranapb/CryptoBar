import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  function handlePrivacyClick() {
    window.scrollTo({
      top: 0,
    });
  }

  return (
    <div
      className="h-64 flex justify-center items-center flex-col bg-cover bg-center"
      style={{ backgroundImage: "url('/footerbg.png')" }}
    >
      <div className="flex gap-4">
        <i className="fa-brands fa-facebook text-4xl bg-custom-icon bg-clip-text text-transparent hover:bg-custom-inner-text"></i>
        <i className="fa-brands fa-discord text-4xl bg-custom-icon bg-clip-text text-transparent hover:bg-custom-inner-text"></i>
        <i className="fa-brands fa-twitter text-4xl bg-custom-icon bg-clip-text text-transparent hover:bg-custom-inner-text"></i>
        <i className="fa-brands fa-instagram text-4xl bg-custom-icon bg-clip-text text-transparent hover:bg-custom-inner-text"></i>
      </div>
      <div className="text-white flex p-8 gap-8">
        <Link
          to="privacy-policy"
          className="hover:text-blue-200"
          onClick={handlePrivacyClick}
        >
          Privacy Policy
        </Link>
        <Link
          to="terms"
          className="hover:text-blue-200"
          onClick={handlePrivacyClick}
        >
          Terms And Conditions
        </Link>
        <Link
          to="about-us"
          className="hover:text-blue-200"
          onClick={handlePrivacyClick}
        >
          About Us
        </Link>
      </div>
      <span className="text-white">
        <i className="fa-solid fa-copyright"></i> 2024 CRYPTOBAR
      </span>
    </div>
  );
}
