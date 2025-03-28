// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAMfLokfNC6Hx4oJYCHK4Q7pfeIQse9dA",
  authDomain: "talk-27334.firebaseapp.com",
  projectId: "talk-27334",
  storageBucket: "talk-27334.firebasestorage.app",
  messagingSenderId: "996658141695",
  appId: "1:996658141695:web:5835a8dbedd4c2d3422fca",
  measurementId: "G-J2XSE73V9S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);