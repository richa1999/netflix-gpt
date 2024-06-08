// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr0W0I0xMl2kEtYdKsjiGgE9p09blhMQc",
  authDomain: "netflix-gpt-ce082.firebaseapp.com",
  projectId: "netflix-gpt-ce082",
  storageBucket: "netflix-gpt-ce082.appspot.com",
  messagingSenderId: "713210210023",
  appId: "1:713210210023:web:aa1b5e9871568d90d82442",
  measurementId: "G-R74PPG1WC4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
