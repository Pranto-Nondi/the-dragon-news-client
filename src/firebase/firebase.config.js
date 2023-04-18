// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj7pstjw9Yd7cwo_D9dOlodxrPaLDun90",
    authDomain: "the-dragon-news-c1c99.firebaseapp.com",
    projectId: "the-dragon-news-c1c99",
    storageBucket: "the-dragon-news-c1c99.appspot.com",
    messagingSenderId: "956160124235",
    appId: "1:956160124235:web:5a4773ba6df80674b3b4ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app