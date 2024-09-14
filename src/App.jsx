import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import Login from "./Pages/Login";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFoundPage from "./Pages/NotFoundPage";
import ProtectedRoutes from "./ProtectedRoutes";

export default function App() {

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/coin/:id",
          element: <CoinPage />,
        },
        {
          path: "/login",
          element: (
            <ProtectedRoutes>
              <Login />
            </ProtectedRoutes>
          ),
        },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);
  return (
    <div className="bg-custom-dark max-h-min ">
      <RouterProvider router={routes} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="dark"
        rtl={false}
        draggable
      />
    </div>
  );
}
