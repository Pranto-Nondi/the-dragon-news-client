import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const loggedOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const setUpdateProfile = (user, name) => {
        setLoading(true)
        return updateProfile(user, {
            displayName: name

        })
    }
    const authInfo = { user, createUser, logInUser, loggedOut, loading, setLoading, setUpdateProfile,googleSignIn }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)

        })
        return () => {
            unsubscribe()
        }
    }, [])
    console.log(user)
    return (
        <>
            <AuthContext.Provider value={authInfo} >
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;