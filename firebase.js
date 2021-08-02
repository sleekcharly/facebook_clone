import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAowHgrItHQebw8FJl4CEWNYxExmjEmX2U",
  authDomain: "facebook-clone-fced4.firebaseapp.com",
  projectId: "facebook-clone-fced4",
  storageBucket: "facebook-clone-fced4.appspot.com",
  messagingSenderId: "1028914918034",
  appId: "1:1028914918034:web:1c41eeb092f71512846c4b"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
