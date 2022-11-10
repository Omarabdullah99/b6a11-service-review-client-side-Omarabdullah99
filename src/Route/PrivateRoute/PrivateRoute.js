import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()

    if(loading){
        return <div className='absolute w-[100vw] h-[100vh] max-w-full bg-slate-600'>
        
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        </div>
    }
    if(!user){
        return <Navigate to="/login"  state={{from:location}} replace></Navigate>
    }
    return children;
   
};

export default PrivateRoute;