/* eslint-disable react/prop-types */
import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const auth = getAuth(app);

    // create user with email and password
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user login with email and password

    const loginUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login
    const googleProvider = new GoogleAuthProvider();
    const googleLogin = () =>{
        return signInWithPopup(auth, googleProvider)
    }



    const user = {name : 'md mohosin', email : 'mohosin@ali.com'}

    const authInfo = {
        user,
        createUser,
        loginUser, 
        googleLogin,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;