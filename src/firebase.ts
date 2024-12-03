import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-toEOBSDLk1S1Ks-cfhXhoC8JwOn1I6M",
  authDomain: "discord-clone-24259.firebaseapp.com",
  projectId: "discord-clone-24259",
  storageBucket: "discord-clone-24259.firebasestorage.app",
  messagingSenderId: "327652768358",
  appId: "1:327652768358:web:0e21fd4f841aae0c90cba7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signIn = () => {
  signInWithPopup(auth, provider).catch((err) => {
    alert(err);
  });
};

const signOut = () => {
  auth.signOut();
};

export { auth, provider, db, signIn, signOut };
