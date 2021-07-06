import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBx35BS-COc8wsk9boYANdez0OzC2K5ShM",
    authDomain: "posterroom-efa7a.firebaseapp.com",
    projectId: "posterroom-efa7a",
    storageBucket: "posterroom-efa7a.appspot.com",
    messagingSenderId: "731684465097",
    appId: "1:731684465097:web:964c271a81d96967482018"
  };
  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const storage = firebase.storage();
  const auth = firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();
  export {db, auth, provider, storage};