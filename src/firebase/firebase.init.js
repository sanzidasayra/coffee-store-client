// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDASGUAx2Aw907tqDy081Eb_5svIwa1kUs",
  authDomain: "coffee-store-app-7f1bc.firebaseapp.com",
  projectId: "coffee-store-app-7f1bc",
  storageBucket: "coffee-store-app-7f1bc.firebasestorage.app",
  messagingSenderId: "97433144146",
  appId: "1:97433144146:web:b4a4441199a5d97060488b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);