import { initializeApp } from 'firebase/app'
import { Firestore, doc, getDoc, getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyBigw7mJf0KYy4OBJv7Y6QI8nGDuDIXRbY",
    authDomain: "cs-322-0.firebaseapp.com",
    projectId: "cs-322-0",
    storageBucket: "cs-322-0.appspot.com",
    messagingSenderId: "416702487992",
    appId: "1:416702487992:web:45bb3fdfc16dc674cd434d",
    measurementId: "G-3NSQJDVRRL"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export async function getCats(db: Firestore): Promise<any>{
    const docRef = doc(db, "Facts", "Cat");
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}
