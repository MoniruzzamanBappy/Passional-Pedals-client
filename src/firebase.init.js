// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyQL6lOSAmXOjPUTJuyU88nWXqjuIRttQ",
  authDomain: "passional-pedals.firebaseapp.com",
  projectId: "passional-pedals",
  storageBucket: "passional-pedals.appspot.com",
  messagingSenderId: "511460278512",
  appId: "1:511460278512:web:5cdee3207d369837058235"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;