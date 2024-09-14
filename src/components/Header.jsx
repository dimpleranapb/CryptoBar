import React from "react";
import { Outlet, Link } from "react-router-dom";
import { useCrypto } from "../CryptoContext";
import UserSidebar from "./UserSidebar";
import Footer from "./Footer";

export default function Header() {
  const { currency, setCurrency, user } = useCrypto();

  return (
    <>
      <header className="flex flex-row items-center justify-center py-3 px-2 bg-transparent max-w-full text-blue-600 lg:px-40">
        <div className="flex justify-between items-center w-full">
          <Link className="text-blue-600 text-xl" to="/">
            <img src="/logo.png"></img>
          </Link>
          <div className="flex items-center justify-center gap-2">
            <select
              className="bg-transparent text-white border border-gray-600 rounded p-2 hover:bg-blue-800"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="INR" className="bg-gray-700 hover:bg-gray-600">
                INR
              </option>
              <option value="USD" className="bg-gray-700 hover:bg-gray-600">
                USD
              </option>
            </select>
            <img></img>
            {user ? (
              <UserSidebar />
            ) : (
              <Link
                to="login"
                className="p-1 bg-transparent border border-gray-600 rounded text-white font-semibold hover:bg-blue-800"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </header>
      <Outlet />
      <Footer />
    </>
  );
}
