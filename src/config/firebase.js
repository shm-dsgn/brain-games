// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeqqlUIcSjyWR7kVGBpAMwpyjTQ-ZouBE",
  authDomain: "shm-brain-games.firebaseapp.com",
  projectId: "shm-brain-games",
  storageBucket: "shm-brain-games.appspot.com",
  messagingSenderId: "830589476101",
  appId: "1:830589476101:web:a01c4df5782de2e41d2b6c",
  measurementId: "G-69BF35CL6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
