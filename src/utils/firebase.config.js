// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAi5l4FefHFpxbYFgD4vI3-3X--j1cUnso",
  authDomain: "redux-f6882.firebaseapp.com",
  projectId: "redux-f6882",
  storageBucket: "redux-f6882.appspot.com",
  messagingSenderId: "1094236194654",
  appId: "1:1094236194654:web:40961182e3c7c4f49631cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;