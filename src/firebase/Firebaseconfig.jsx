// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqcppscECrKAaJtBXwIOyn7rBD3dO4Mn8",
  authDomain: "everything-hub.firebaseapp.com",
  projectId: "everything-hub",
  storageBucket: "everything-hub.firebasestorage.app",
  messagingSenderId: "785435359448",
  appId: "1:785435359448:web:73f3b97f20467669acffad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }