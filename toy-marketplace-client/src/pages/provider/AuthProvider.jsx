/* eslint-disable react/prop-types */
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const AuthProvider = ({children}) => {

    const auth = getAuth(app);

    const user = {name : 'md mohosin', email : 'mohosin@ali.com'}

    const authInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;