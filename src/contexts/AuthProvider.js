import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true)

    /* Create use with email and password */
    const createUserWithEmailPassword = (email, passowrd) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, passowrd)
    }

    /* login with email and password */
    const logInWithEmailPassword = (email, passowrd) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, passowrd)
    }

    /* Sign with google */
    const signInWithGoogle = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    /* Sign in with github */
    const loginWithGithub = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => unsubscribe()

    }, [])

    const authInfo = { createUserWithEmailPassword, ToastContainer, toast, logInWithEmailPassword, FaGoogle, FaGithub, signInWithGoogle, loginWithGithub }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;