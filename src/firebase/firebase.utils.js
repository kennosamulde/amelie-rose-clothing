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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log("error creating user", error.message)
    }
  }

  return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  const transformedCollection = collectionsSnapshot.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data()

    return {
      routeName: encodeURI(title.replace(/ /g, "").toLowerCase()),
      id: docSnapshot.id,
      title,
      items,
    }
  })

  // add title as key to each item in the collection
  return transformedCollection.reduce((acc, collection) => {
    acc[collection.title.toLowerCase().replace(/ /g, "")] = collection
    return acc
  }, {})
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
