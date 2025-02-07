// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  //apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mypro-295b3.firebaseapp.com",
  projectId: "mypro-295b3",
  storageBucket: "mypro-295b3.appspot.com", // Corrected
  messagingSenderId: "539683106943",
  appId: "1:539683106943:web:e9b5ae40461c7643a6cf4a",
  measurementId: "G-D6SNZGK8PG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
