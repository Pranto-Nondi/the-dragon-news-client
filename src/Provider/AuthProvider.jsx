import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loggedOut = () => {
        return signOut(auth)
    }
    const setUpdateProfile = (user, name) => {
        return updateProfile(user, {
            displayName: name

        })
    }
    const authInfo = { createUser, logInUser, loggedOut, loading, setUpdateProfile }

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