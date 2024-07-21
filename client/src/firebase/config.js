// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "crescentaria-dac62.firebaseapp.com",
  projectId: "crescentaria-dac62",
  storageBucket: "crescentaria-dac62.appspot.com",
  messagingSenderId: "694715052348",
  appId: "1:694715052348:web:b1267c143bdf1691a76e39",
  measurementId: "G-VB3Z1FHJGN",
};

export const app = initializeApp(firebaseConfig);
