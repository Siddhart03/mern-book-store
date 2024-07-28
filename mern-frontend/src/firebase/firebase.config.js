// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW-UghaN9XmQsejtIUv9QRg5JjtZy-36E",
  authDomain: "mern-book-store-80adc.firebaseapp.com",
  projectId: "mern-book-store-80adc",
  storageBucket: "mern-book-store-80adc.appspot.com",
  messagingSenderId: "660814364045",
  appId: "1:660814364045:web:a7b327dba27ef1f48f11c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;