import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAhRq5AUDReD80IdJVUW-VPSK1hLSGoKK8",
  authDomain: "adventure-axis-9609e.firebaseapp.com",
  projectId: "adventure-axis-9609e",
  storageBucket: "adventure-axis-9609e.appspot.com",
  messagingSenderId: "287426266938",
  appId: "1:287426266938:web:2df934e71814e716573203"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;