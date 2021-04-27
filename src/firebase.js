import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDoWNnzwzABpsabmyqT5ZxxSNFbq_9qjKU",
    authDomain: "clone-ba9f8.firebaseapp.com",
    databaseURL: "https://clone-ba9f8.firebaseio.com",
    projectId: "clone-ba9f8",
    storageBucket: "clone-ba9f8.appspot.com",
    messagingSenderId: "803294841752",
    appId: "1:803294841752:web:0b15865d2de45bf22039ed",
    measurementId: "G-KJC6FK1L7Q"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};