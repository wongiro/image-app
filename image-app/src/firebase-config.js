// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, EmailAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW9FksuIRN-yu4jNLLVk8D7VnsfkDPJQk",
  authDomain: "image-store-467ba.firebaseapp.com",
  projectId: "image-store-467ba",
  storageBucket: "image-store-467ba.appspot.com",
  messagingSenderId: "812872305486",
  appId: "1:812872305486:web:45509e1b96ad09dd996c1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const provider = new EmailAuthProvider();