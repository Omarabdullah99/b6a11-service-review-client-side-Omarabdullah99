import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';


const Register = () => {

  const {createUser,updatProfile} = useContext(AuthContext)

  const [error,setError]=useState('')
  const [userName,setUserName]=useState('')
  const [image,setImage]=useState('')
  const [loader,setLoader]=useState(false)

  const handelName=(e)=>{
    setUserName(e.target.value)
  }
  const handleImage=(e)=>{
    setImage(e.target.value)
  }
  updatProfile(userName,image)
    .then(() => {
      // Profile updated!
      // ...
    }).catch((error) => {
      // An error occurred
      // ...
    });
  // console.log(userName,image)

    const handleSubmit=(event)=>{
      event.preventDefault()
      setLoader(true)
      const form= event.target;
      const name=form.name.value;
      const photoURL=form.photoURL.value
      const email=form.email.value;
      const password=form.password.value;
      console.log(email,password,name,photoURL)
      createUser(email,password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
       
        
        console.log(user)
        setLoader(false)
        updatProfile()
        setError('')
        form.reset()
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        setLoader(false)
        const errorMessage = error.message;
        console.log(errorMessage)
        setError(errorMessage)
        // ..
      });

      if(password.length <6){
        setError('passwored should be 6 charecter')
        return;
    }

    }
    return (
      <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className='text-3xl font-bold text-red-400'>{error}</p>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
    
          <div className="form-control">
          <label className="label">
            <span className="label-text"> Full Name</span>
          </label>
          <input onBlur={handelName} type="text" name='name' placeholder="user name" className="input input-bordered" required />
        </div>
    
        <div className="form-control">
        <label className="label">
          <span className="label-text"> PhotoURl</span>
        </label>
        <input onBlur={handleImage} type="text" name='photoURL' placeholder="Phot URL" className="input input-bordered" required />
      </div>
    
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
                <h1>Already have an Account?<Link to='/login'><span className='text-blue-500 font-bold'>Login Here</span></Link></h1>
              </label>
             
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
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

export default Register;