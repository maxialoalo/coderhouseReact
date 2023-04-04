// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrr9mmpmr2PCM6BJsyz43Xnponm_GmgSA",
  authDomain: "ecommerce-maxi.firebaseapp.com",
  projectId: "ecommerce-maxi",
  storageBucket: "ecommerce-maxi.appspot.com",
  messagingSenderId: "1040199494513",
  appId: "1:1040199494513:web:88fa48882c8445351024d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore()