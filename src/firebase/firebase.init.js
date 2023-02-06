// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDClSosPQq9GgFsRvYJSSt-9-r33Tab_tQ",
  authDomain: "express-hotel.firebaseapp.com",
  projectId: "express-hotel",
  storageBucket: "express-hotel.appspot.com",
  messagingSenderId: "1087658402823",
  appId: "1:1087658402823:web:9fef85d64b8f1312f5b6a2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
