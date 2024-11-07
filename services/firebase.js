// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9zxtejKzEad7gE1GJHvX1i9i0QGonMck",
  authDomain: "food-delivery-fe9d8.firebaseapp.com",
  projectId: "food-delivery-fe9d8",
  storageBucket: "food-delivery-fe9d8.appspot.com",
  messagingSenderId: "806663186005",
  appId: "1:806663186005:web:951d3c5b567d8a6c0096dc",
  measurementId: "G-ME7VMD74HS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Services
const auth = getAuth(app);
const db = getFirestore(app);

// Export services
export { auth, db };

