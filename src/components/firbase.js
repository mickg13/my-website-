
import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZYn5BN0TS_oa8y8YTCN_l6vx6I_USxxQ",
  authDomain: "my-first-project-82c45.firebaseapp.com",
  databaseURL: "https://my-first-project-82c45-default-rtdb.firebaseio.com",
  projectId: "my-first-project-82c45",
  storageBucket: "my-first-project-82c45.appspot.com",
  messagingSenderId: "342677667114",
  appId: "1:342677667114:web:477955e9666a7d1d823253",
  measurementId: "G-HY67N1MKKS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
export { db, auth, storage }