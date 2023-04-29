import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider()
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
    const githubSignIn = () => {

        return signInWithPopup(auth, githubProvider)
    }
    const loggedOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const setUpdateProfile = (user, name, url) => {
        setLoading(true)
        return updateProfile(user, {
            displayName: name,
            photoURL: url

        })
    }
    const emailVerification = (user) => {
        setLoading(true)
        return sendEmailVerification(user)
    }
    const authInfo = { user, createUser, logInUser, loggedOut, loading, setLoading, setUpdateProfile, googleSignIn, githubSignIn, emailVerification }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
           
            if (currentUser == null || currentUser.emailVerified) {
                setUser(currentUser)
                setLoading(false)
                // console.log(currentUser)
            }

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