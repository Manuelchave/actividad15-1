import { initializeApp } from "firebase/app";
import { getDatabase} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDwYWmzNq5O9EECY8lpW1GlLS_-AUMiCFk",
    authDomain: "actividad15-1-a056c.firebaseapp.com",
    projectId: "actividad15-1-a056c",
    storageBucket: "actividad15-1-a056c.appspot.com",
    messagingSenderId: "183973207442",
    appId: "1:183973207442:web:694ac4174cb43fd067754b"
};

const db = initializeApp(firebaseConfig);

export default getDatabase(db);