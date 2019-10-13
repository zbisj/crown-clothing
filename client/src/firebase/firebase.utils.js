import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCQM_He3QcJFT9eRdBf6xP5rVbaS46Svbs",
  authDomain: "crown-clothing-3f45c.firebaseapp.com",
  databaseURL: "https://crown-clothing-3f45c.firebaseio.com",
  projectId: "crown-clothing-3f45c",
  storageBucket: "",
  messagingSenderId: "1084837032035",
  appId: "1:1084837032035:web:cd421a05b4847ff054c856",
  measurementId: "G-E6HHJ3TDGX"
};

// this function will create a user document within the users collection based on whether a user is authenticate and does not already exist with the users collection
export const createUserProfileDocument = async (userAuth, addtionalData) => {

  // if there is no user we return and exit out of the function
  if(!userAuth) return;

  // if there is an authenticated user we query that document from firestore to check if it is added to the users collection
  const userRef = firestore.doc(`users/${ userAuth.uid }`);

  // here we are getting the snapshot of the authenticated user, this data will tell us if the user exists within the users collection or not
  const userSnapshot = await userRef.get();

  // if the user does not exist withing the users collection, we get the email, displayName properties from the userAuth object which gets created when the auth serive has a users

  // within the try-catch block we then create the user with the displayName, emai, date and any other properties we might need
  if (!userSnapshot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt,
        displayName,
        ...addtionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }

  }

  // if the user exist with the users collection we return that user document
  return userRef;

}

//
export const addCollectionAndDocuments = async(collectionName, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionName);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj)
  });

  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
  // looping throught the 'collections' querySnapshot or collectionSnaphot to get individual collection and destruting 'title' and 'items'
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    // we then return an object with the destruted values to 'id' from the querySnapshot and 'routeName' wich is transformed to be URL compatible
    return {
      title,
      items,
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
    }
  })

  // converting the transformedCollection from an array to an object
  // this creates an object of objects where each object's key is that objects title
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {})
}


// using the above config to connect our Firebase app to our codebase
firebase.initializeApp(config);

// exprting auth and firestore to be used in globally in the app
export const auth = firebase.auth();
export const firestore = firebase.firestore();


// setting up Google Auth Provider
const provider = new firebase.auth.GoogleAuthProvider();
// enabling Google prompt popup
provider.setCustomParameters({ prompt: 'select_account' });

// passig the above Google provider to the pop up when signing in
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// exprting firebase for global use
export default firebase;
