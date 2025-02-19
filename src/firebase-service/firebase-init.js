// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtTIrX027OdY5WqEX3Z0C7UHVKfPCw5fE",
  authDomain: "pinny-teaching.firebaseapp.com",
  databaseURL: "https://pinny-teaching-default-rtdb.firebaseio.com",
  projectId: "pinny-teaching",
  storageBucket: "pinny-teaching.appspot.com",
  messagingSenderId: "1097742267449",
  appId: "1:1097742267449:web:8df7105675d4c75fb689e8",
  measurementId: "G-YD12S68LJN",
};

export class FirebaseService {
  static app = null;
  static analytics = null;
  static database = null;

  static init() {
    console.log("FirebaseService.init");
    FirebaseService.app = initializeApp(firebaseConfig);
    FirebaseService.analytics = getAnalytics(FirebaseService.app);
    FirebaseService.database = getDatabase(FirebaseService.app);
  }
}
