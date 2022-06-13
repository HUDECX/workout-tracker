// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnVMI0tp1UySe7Cp3dw2KvbKmi2xoL_84",
  authDomain: "workout-tracker-ddfc1.firebaseapp.com",
  projectId: "workout-tracker-ddfc1",
  storageBucket: "workout-tracker-ddfc1.appspot.com",
  messagingSenderId: "476311216614",
  appId: "1:476311216614:web:c1a4f06e27cd5bece6b627",
  measurementId: "G-VW4R83GDWY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default getFirestore()