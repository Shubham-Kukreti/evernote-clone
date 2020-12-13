import firebase from 'firebase/app'
import 'firebase/firestore'


var firebaseConfig = {
    apiKey: "AIzaSyD1nGnHPVaK2sqsgyUybi4zvYkXwnXfCf8",
    authDomain: "evernote-clone-2bd9a.firebaseapp.com",
    projectId: "evernote-clone-2bd9a",
    storageBucket: "evernote-clone-2bd9a.appspot.com",
    messagingSenderId: "903088454552",
    appId: "1:903088454552:web:3f657ccb75c5f44455c9ed"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase
