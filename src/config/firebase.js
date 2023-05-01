// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQZaRU4lgVPqS1H_aHRu_Gl1LRxfvgY5A",
  authDomain: "my-game-5b1b4.firebaseapp.com",
  projectId: "my-game-5b1b4",
  storageBucket: "my-game-5b1b4.appspot.com",
  messagingSenderId: "785129737067",
  appId: "1:785129737067:web:2b3896676f519fbdc65a2e",
  measurementId: "G-HQWH63S2GM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
