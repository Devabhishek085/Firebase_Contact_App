// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1qsdkQk0XQpLvV2OQ-UWP151lZTuBclE",
  authDomain: "fir-contact-app-3c52c.firebaseapp.com",
  projectId: "fir-contact-app-3c52c",
  storageBucket: "fir-contact-app-3c52c.firebasestorage.app",
  messagingSenderId: "118410532530",
  appId: "1:118410532530:web:994710b9c91b88c9bd9bab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);