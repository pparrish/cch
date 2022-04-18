import {initializeApp} from "firebase/app";
import {doc, getFirestore} from "firebase/firestore";
import {getAnalytics} from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyCc6WP644uQnO9NGQM1ZfjUzlgi1AtBpZw",

    authDomain: "cartas-contra-la-humanid-79b42.firebaseapp.com",

    projectId: "cartas-contra-la-humanid-79b42",

    storageBucket: "cartas-contra-la-humanid-79b42.appspot.com",

    messagingSenderId: "962239729044",

    appId: "1:962239729044:web:0b64a28d04db589d075381",

    measurementId: "G-BXT8XNYHDJ"

};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const  db = getFirestore(app);
const analytics = getAnalytics(app);

