import React, { createContext } from 'react';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from 'react';
import { useState } from 'react';
import app from '../../firebase/firebase.config';
export const AuthContext=createContext()
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState('')

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            
            setUser(currentUser)
            
        })
    
        return () => {
            unsubscribe();
        }
    }, [])

    //createUser
    const createUser=(email,password)=>{
        
        
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const updatProfile=(userName,image)=>{
        return updateProfile(auth.currentUser,{
         displayName: userName, photoURL:image
       })
     }

      //logIn
    const logIn =(email,password)=>{
        
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn=(provider)=>{
        
        return signInWithPopup(auth,provider)
    }

    const logOut=()=>{
        
        return signOut(auth)
    }


   

    const authInfo={user,createUser,updatProfile,logIn,googleSignIn,logOut}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;