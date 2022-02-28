import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHMwuieA_gAFrOX_Engi74LTd6b-tN_No",
  authDomain: "netflix-clone-95057.firebaseapp.com",
  projectId: "netflix-clone-95057",
  storageBucket: "netflix-clone-95057.appspot.com",
  messagingSenderId: "894226587489",
  appId: "1:894226587489:web:8418487b1f089b69c92f20",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
