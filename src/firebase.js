import firebase from "firebase";

const firebaseConfig = firebase.initializeApp({
      apiKey: "AIzaSyCyt9a7ACxN5W8m80zB5C1fp2DwFzM090Y",
    authDomain: "facebook-clone-ab6a8.firebaseapp.com",
    projectId: "facebook-clone-ab6a8",
    storageBucket: "facebook-clone-ab6a8.appspot.com",
    messagingSenderId: "259650033205",
    appId: "1:259650033205:web:b357b3a99de82e8991437c"
});

const auth = firebase.auth();
const db = firebaseConfig.firestore();
const storage = firebase.storage();

export { auth, db, storage };
