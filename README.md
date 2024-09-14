# CryptoBar - Cryptocurrency Tracker

A modern cryptocurrency tracker built with React JS, Tailwind CSS, and Chart.js. Track real-time crypto prices, view historical data through interactive charts, and search for your favorite cryptocurrencies.

## Features
- 📈 Real-time cryptocurrency prices
- 📊 Interactive historical charts
- 🔍 Search functionality for cryptocurrencies
- 💻 Responsive design using Tailwind CSS
- 🚀 Fast development with Vite and HMR (Hot Module Replacement)
- ⭐ Add to Watchlist feature (requires user login)
- 🔐 User authentication (Sign up and Login) using Firebase

## Setup with React and Vite

This project uses **React + Vite** for fast and efficient development with HMR (Hot Module Replacement). Vite provides an optimized build setup with minimal configuration and includes the following:

- **Vite** for fast bundling and development server
- **@vitejs/plugin-react** for Fast Refresh using Babel

## Firebase Authentication

The app integrates **Firebase** for user authentication, enabling the following:

- User sign-up and login
- Add cryptocurrencies to a personalized watchlist

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/cryptobar.git

2. **Navigate to the project directory**:
   ```bash
   cd cryptobar
3. **Install dependencies**:
   ```bash
   npm install
4. **Set up Firebase**:

```
# Create a Firebase project at Firebase Console (https://console.firebase.google.com/)
# Add Firebase SDK to your project
# Update your Firebase configuration in the project (e.g., firebaseConfig.js)
```

5. **Run the development server**:
```bash
npm run dev
