import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDFiVFIHrZmY-fpCZHF_oyZs-OCdb1vV-E",
  authDomain: "crwn-db-dca62.firebaseapp.com",
  databaseURL: "https://crwn-db-dca62.firebaseio.com",
  projectId: "crwn-db-dca62",
  storageBucket: "crwn-db-dca62.appspot.com",
  messagingSenderId: "156552073364",
  appId: "1:156552073364:web:f80033b944cfdb28dea481",
  measurementId: "G-ZV6F27MH61",
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
