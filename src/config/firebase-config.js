// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE28WKJJj3YHYDnzGPrxFnziHHy6YHh6M",
  authDomain: "koltsegvetes-4f446.firebaseapp.com",
  projectId: "koltsegvetes-4f446",
  storageBucket: "koltsegvetes-4f446.appspot.com",
  messagingSenderId: "754632839840",
  appId: "1:754632839840:web:2179b32d58d8a7b6576fc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)