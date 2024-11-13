// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "petadopt-4a566.firebaseapp.com",
  projectId: "petadopt-4a566",
  storageBucket: "petadopt-4a566.firebasestorage.app",
  messagingSenderId: "587337062450",
  appId: "1:587337062450:web:bfcd66936d3b96c299442b",
  measurementId: "G-VTH0XG7YT7"
};

const app = initializeApp(firebaseConfig);

// Mendapatkan referensi Firestore
const db = getFirestore(app);

// Fungsi untuk mendapatkan data
export { db };