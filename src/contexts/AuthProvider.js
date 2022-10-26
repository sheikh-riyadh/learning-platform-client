import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { ToastContainer, toast } from 'react-toastify';


export const AuthContext = createContext()
const auth = getAuth(app)


const AuthProvider = ({ children }) => {

    const signInWithEmailAndPassword = (email, passowrd) => {
        return createUserWithEmailAndPassword(auth, email, passowrd)
    }

    const authInfo = { signInWithEmailAndPassword, ToastContainer, toast }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;