import { initializeApp } from "firebase/app";
import axios from "axios";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  signInWithRedirect,
} from "firebase/auth";
import { url } from "../../../weburl";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVkfW8FXIyiuoL90DGaqqFgEyW6mM57Ac",
  authDomain: "afbr-80930.firebaseapp.com",
  projectId: "afbr-80930",
  storageBucket: "afbr-80930.appspot.com",
  messagingSenderId: "905105460514",
  appId: "1:905105460514:web:a9c22a1e64ce7c2c63a97b",
  measurementId: "G-TXC9MJ6FVV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  const auth = getAuth();
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      console.log(result);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
   
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  var error = false;
  var res;
  var user;

  try {
    res = await createUserWithEmailAndPassword(auth, email, password);
    user = res.user;
    user.displayName = name;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  } finally {
    if (!error) {
      axios
        .post(`${url}api/users`, {
          uid: user.uid,
          username: name,
          email: email,
        })
        .then((res) => console.log("success", res))
        .catch((err) => console.log(err));
    }
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const Logout = () => {
  signOut(auth).then((res) => (window.location = "/login"));
};

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  Logout,
};
