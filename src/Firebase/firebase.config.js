// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRmWZ2t43XF61rWyqKHLW57wGUa6o6teQ",
  authDomain: "cofee-store-b9f7b.firebaseapp.com",
  projectId: "cofee-store-b9f7b",
  storageBucket: "cofee-store-b9f7b.firebasestorage.app",
  messagingSenderId: "1067458511382",
  appId: "1:1067458511382:web:7b7d5fb87a209c02c2ab37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;