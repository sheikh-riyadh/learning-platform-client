import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    /* Create use with email and password */
    const createUserWithEmailPassword = (email, passowrd) => {
        return createUserWithEmailAndPassword(auth, email, passowrd)
    }

    /* sign in with email and password */
    const logInWithEmailPassword = (email, passowrd) => {
        return signInWithEmailAndPassword(auth, email, passowrd)
    }

    const authInfo = { createUserWithEmailPassword, ToastContainer, toast, logInWithEmailPassword }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;