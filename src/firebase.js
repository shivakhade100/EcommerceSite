// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMLi3s6AoK4ZgZSabR2BN4KAQCoJZ22xs",
  authDomain: "ecommerce16-a52ad.firebaseapp.com",
  projectId: "ecommerce16-a52ad",
  storageBucket: "ecommerce16-a52ad.firebasestorage.app",
  messagingSenderId: "576413724191",
  appId: "1:576413724191:web:5bc0d51a76796f175e2f2a",
  measurementId: "G-7WRYYLLFK6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
export { db };
