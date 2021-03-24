import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaa7Dp-8cCKvYcsrTwoUA5iKpQm0XIe7A",
  authDomain: "netflix-challenge-541aa.firebaseapp.com",
  projectId: "netflix-challenge-541aa",
  storageBucket: "netflix-challenge-541aa.appspot.com",
  messagingSenderId: "1083099817777",
  appId: "1:1083099817777:web:c48631f5ba2c0068def210",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth }; // * explicit export

export default db; // * default export
