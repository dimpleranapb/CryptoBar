import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const [counter, setCounter] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 0) {
          clearInterval(interval); // Stop the interval when the counter is 1
          navigate("/"); // Navigate when the counter reaches 1
        }
        return prevCounter - 1; // Decrement the counter
      });
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [navigate]);

  return (
    <main class="grid h-full w-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold text-blue-600">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Page Not Found
        </h1>
        <p class="mt-6 text-base leading-7 text-gray-400">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            class="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
          >
            Go Back Home
          </Link>
          <Link
            href="/contact"
            class="text-sm font-semibold text-gray-400 hover:text-white"
          >
            Automatically redirecting to Homepage in {counter}
          </Link>
        </div>
      </div>
    </main>
  );
}
