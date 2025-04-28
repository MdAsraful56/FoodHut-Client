import { createContext, useEffect } from 'react';
import React, { useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import useAxiosPublic from './../Hooks/useAxiosPublic';

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();



    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })

    }


    useEffect( () => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                // get token and store client 
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo) 
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                        }
                    })
            } else {
                // TODO: remove token (if token stored in the client side )
                localStorage.removeItem('access-token');
            }
            setLoading(false);
            console.log('Current User:', currentUser);
        })
        return () => {
            return unsubcribe();
        }
    } ,[axiosPublic])





    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;