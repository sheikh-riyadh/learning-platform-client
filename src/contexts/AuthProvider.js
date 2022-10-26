import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';
import { FaGoogle, FaGithub } from 'react-icons/fa';


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    /* Create use with email and password */
    const createUserWithEmailPassword = (email, passowrd) => {
        return createUserWithEmailAndPassword(auth, email, passowrd)
    }

    /* login with email and password */
    const logInWithEmailPassword = (email, passowrd) => {
        return signInWithEmailAndPassword(auth, email, passowrd)
    }

    /* Sign with google */

    const signInWithGoogle = (provider) => {
        return signInWithPopup(auth, provider)
    }

    const authInfo = { createUserWithEmailPassword, ToastContainer, toast, logInWithEmailPassword, FaGoogle, FaGithub, signInWithGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;