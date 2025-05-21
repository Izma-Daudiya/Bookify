import { initializeApp } from "firebase/app";
import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCGzi8HQfhmjaoAbrMyoogxzFYmk3jZ0RU",
  authDomain: "bookify-4da63.firebaseapp.com",
  projectId: "bookify-4da63",
  storageBucket: "bookify-4da63.firebasestorage.app",
  messagingSenderId: "991264600175",
  appId: "1:991264600175:web:b04ae96686d1aa40ae9d9a"
};


const firebaseApp = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider() 
const firestore = getFirestore(firebaseApp)

const FirebaseContext = createContext(null)

export const FirebaseProvider = ({children}) => {

    const [user, setUser] = useState('')

    useEffect(() => {
        onAuthStateChanged(firebaseAuth, user => {
            if(user) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
    }, [])

    const signupUserWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(firebaseAuth, email, password)
    }
    const signinUserWithEmailAndPassword = (email, password) => {
        signInWithEmailAndPassword(firebaseAuth, email, password)
    } 
    const signinWithGoogle = () => {
        signInWithPopup(firebaseAuth, googleProvider)
    }
    const isLoggedIn = user ? true : false;
    const handleCreateNewListing = (name, isbn, price, cover) => {

    } 

    return <FirebaseContext.Provider value={{signupUserWithEmailAndPassword, signinUserWithEmailAndPassword, signinWithGoogle, isLoggedIn, handleCreateNewListing}}>
        {children}
    </FirebaseContext.Provider>
}

export const useFirebase = () => useContext(FirebaseContext)