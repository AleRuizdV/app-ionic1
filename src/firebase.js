// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD37f8ag1uivKlG-0r6OhROzGyyaNZJtQE",
  authDomain: "testproyectstring.firebaseapp.com",
  projectId: "testproyectstring",
  storageBucket: "testproyectstring.firebasestorage.app",
  messagingSenderId: "572468137914",
  appId: "1:572468137914:web:87ddfa3bb5f3af2742d783"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const dataBase = getFirestore(app)

export {
  dataBase
}