// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0U2ecfsx0K2GmvJhWFbx1Dg3-t0GC7yo",
  authDomain: "developerstar-e9fd6.firebaseapp.com",
  projectId: "developerstar-e9fd6",
  storageBucket: "developerstar-e9fd6.appspot.com",
  messagingSenderId: "840572856697",
  appId: "1:840572856697:web:152dede414acaa93aee7a8",
  measurementId: "G-8CZX9F8K17",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(app);
