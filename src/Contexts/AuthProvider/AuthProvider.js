import React, { createContext } from 'react';
import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from 'react';
import app from '../../firebase/firebase.config';
export const AuthContext=createContext()
const auth=getAuth(app)
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')
    const [loading,setLoading]=useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
            
        })
    
        return () => {
            unsubscribe();
        }
    }, [])

    //createUser
    const createUser=(email,password)=>{
        
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updatProfile=(userName,image)=>{
        return updateProfile(auth.currentUser,{
         displayName: userName, photoURL:image
       })
     }

      //logIn
    const logIn =(email,password)=>{
        setLoading(true)
        
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn=()=>{
        setLoading(true)
        
        return signInWithPopup(auth,provider)
    }

    const logOut=()=>{
        setLoading(true)
        localStorage.removeItem('CookingToken')
        return signOut(auth)
    }


   

    const authInfo={user,createUser,updatProfile,logIn,googleSignIn,logOut,loading}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;