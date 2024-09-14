/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-dark": "  linear-gradient(to bottom, #000428 0%, #002f6c 90%)",
        "custom-dark-hover":
          "linear-gradient(90deg, rgba(0,40,60,1) 0%, rgba(0,70,130,1) 50%, rgba(0,80,140,1) 100%)",
        "custom-dark-btn": " linear-gradient(to right, #6a11cb, #2575fc)",
        "custom-table-heading": "linear-gradient(to right, #4b0e91, #1a4ba5)",
        "custom-inner-text": "linear-gradient(to right, #8e2de2, #4a00e0);",
        "custom-icon": "linear-gradient(to bottom, #be93c5, #7bc6cc) ",
      },
    },
  },
  plugins: [],
};
