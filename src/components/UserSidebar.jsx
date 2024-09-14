import React, { useRef, useEffect } from "react";
import CryptoProvider, { useCrypto } from "../CryptoContext";
import WatchList from "./WatchList";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";

export default function Drawer() {
  const drawerRef = useRef(null);
  const { user } = useCrypto();
  const logoutNotify = () => toast("You have been logged out successfully");

  //SideBar Logic
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        drawerRef.current.classList.add("translate-x-full"); // Close drawer if clicked outside
      }
    };

    // Add event listener to handle clicks outside of drawer
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Cleanup event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const logout = () => {
    signOut(auth);
    logoutNotify();
  };
  return (
    <div>
      <div className="text-center">
        <button
          className="h-10 mr-1 align-middle"
          type="button"
          onClick={() => drawerRef.current.classList.remove("translate-x-full")}
        >
          {user ? (
            <img
              className="h-full rounded-full border-2 border-gray-600"
              src={user.photoURL ? user.photoURL : "/user.png"}
            />
          ) : (
            ""
          )}
        </button>
      </div>

      {/* Drawer component */}
      <div
        ref={drawerRef}
        className="fixed top-0 right-0 z-40 h-screen p-4  bg-white w-80 dark:bg-gray-800 transform translate-x-full transition-transform duration-300"
      >
        <h5 className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400">
          Info
        </h5>

        <div className="h-1/3 flex items-center justify-center flex-col gap-2 p-2">
          <img
            className="w-100 h-5/6 rounded-full border border-1 border-blue-600"
            src={
              user ? (user.photoURL ? user.photoURL : "/user.png") : "/user.png"
            }
            alt="User Profile"
          />

          <span className="w-100 text-center text-gray-300">{user.email}</span>
        </div>
        <WatchList />
        <button
          className="  w-full bg-blue-600 text-white rounded-md p-1 hover:bg-blue-800"
          onClick={logout}
        >
          LogOut
        </button>
      </div>
    </div>
  );
}
