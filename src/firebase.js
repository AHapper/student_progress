import firebase from 'firebase'
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBiC7bJSHW7mIfG3pI3dtn-jSTRP2XI3Ag",
    authDomain: "studentprogressnotes.firebaseapp.com",
    projectId: "studentprogressnotes",
    storageBucket: "studentprogressnotes.appspot.com",
    messagingSenderId: "561007590485",
    appId: "1:561007590485:web:c3907f252d5522f78fe8dc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;