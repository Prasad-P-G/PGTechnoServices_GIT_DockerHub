import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDm97xAewOYY4ki1DbQAaGQrRKTKd4N4jY",
//   authDomain: "pgtechnodomain.firebaseapp.com",
//   projectId: "pgtechnodomain",
//   storageBucket: "pgtechnodomain.appspot.com",
//   messagingSenderId: "117228464586",
//   appId: "1:117228464586:web:37826f8324fad56afd4733",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);
// export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxcOmS_p-0GMj1JjFIhtTYVoX1iX3Fzno",
  authDomain: "bgtechdomain.firebaseapp.com",
  projectId: "bgtechdomain",
  storageBucket: "bgtechdomain.firebasestorage.app",
  messagingSenderId: "457233106298",
  appId: "1:457233106298:web:21604c87aa9aa7e66902c3",
  measurementId: "G-K2HWC4N4BV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
