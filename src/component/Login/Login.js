import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaLessThanEqual} from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {
  const provider = new GoogleAuthProvider();
   const {logIn,googleSignIn} = useContext(AuthContext)
   const [error,setError]=useState('')
   const [loader,setLoader]=useState(false)

   const navigate=useNavigate()
   const location=useLocation()
  
   const from= location.state?.from?.pathname || '/'

   const handleGoogleSignIn =()=>{
    googleSignIn(provider)
    .then(result =>{
      const user=result.user;
      console.log(user)
     
      navigate(from, {replace:true})
     
    })
    .cathc(error => console.error(error))
  }

    const handleSubmit=(event)=>{
        event.preventDefault()
        setLoader(true)
        const form= event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password)

        logIn(email,password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
         
          console.log(user)
          setLoader(false)
          setError('')
          form.reset()
          navigate(from, {replace:true})
           
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          setLoader(false)
          const errorMessage = error.message;
          console.log(errorMessage)
          setError(errorMessage)
        });

    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className='text-xl font-bold text-red-400'>{error} </p>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text" >Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to='/register' className="label-text-alt link link-hover">If you have no account? please Register</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <button onClick={handleGoogleSignIn} className='btn btn-primary mt-5 w-9/12 mx-auto'>Sign In Google <span className='ml-5 text-xl'><FaGoogle></FaGoogle></span> </button>
    </div>
  </div>
{
  loader? 
  
  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
  :
  <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 hidden"></div>

}

</div>
    );
};

export default Login;