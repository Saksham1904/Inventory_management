// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  { getStorage}  from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB75xZsKKs5EwMN1E-Y6Is8LSBp2BmPz1g",
  authDomain: "ecommerece-e5114.firebaseapp.com",
  projectId: "ecommerece-e5114",
  storageBucket: "ecommerece-e5114.appspot.com",
  messagingSenderId: "922843116411",
  appId: "1:922843116411:web:8d7f9192764aa7888cc3de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)
