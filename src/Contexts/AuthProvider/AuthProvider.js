import React, { createContext } from 'react';
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
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


   

    const authInfo={user,createUser,updatProfile}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;