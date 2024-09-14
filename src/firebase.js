// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Get the API key from environment variables
const apiKey = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "crypto-c35c4.firebaseapp.com",
  projectId: "crypto-c35c4",
  storageBucket: "crypto-c35c4.appspot.com",
  messagingSenderId: "960354243720",
  appId: "1:960354243720:web:f3ac5a9c0c93d6c0247b3d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
