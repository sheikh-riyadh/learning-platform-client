// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBppxN792U-rlwf8fl_QeROA3d2lG5f0_0",
    authDomain: "courses-d9dfd.firebaseapp.com",
    projectId: "courses-d9dfd",
    storageBucket: "courses-d9dfd.appspot.com",
    messagingSenderId: "872555807787",
    appId: "1:872555807787:web:4b4c0a395b797e250ad66e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app