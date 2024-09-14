import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCrypto } from "./CryptoContext";

export default function ProtectedRoutes({ children }) {
  const navigate = useNavigate();
  const { user } = useCrypto();

  useEffect(() => {
    // If the user is logged in, redirect to the homepage
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return !user ? children : null;
}
