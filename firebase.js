// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database"; // ✅ import Realtime Database

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSYFt9G90BP7jfAbp5UD3pqv_Icya_vGw",
  authDomain: "chat-web-app-9baf5.firebaseapp.com",
  databaseURL: "https://chat-web-app-9baf5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chat-web-app-9baf5",
  storageBucket: "chat-web-app-9baf5.appspot.com",
  messagingSenderId: "211901180283",
  appId: "1:211901180283:web:b0b1c8909be7732b9ab5de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getDatabase(app); // ✅ use this for Realtime Database
