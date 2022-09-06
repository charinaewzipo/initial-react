// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAspBIgruwOWfZVVHrOuYC9IccXg9fNQ-Y",
  authDomain: "chat-cfe75.firebaseapp.com",
  projectId: "chat-cfe75",
  storageBucket: "chat-cfe75.appspot.com",
  messagingSenderId: "515090972174",
  appId: "1:515090972174:web:19b0a3c45e8cf28f63c65f",
  measurementId: "G-7RLTLTF0V8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
