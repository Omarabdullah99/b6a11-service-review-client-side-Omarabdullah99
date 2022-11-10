import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import logo from '../../assest/logocooking.png'

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  console.log(user)

  const handleLogOut=()=>{
    logOut()
    .then(()=> {})
    .catch(error => console.log(error))
}

    return (
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden p-2 md:p-[unset]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       <Link to='/'> <li>Home</li></Link>
       <Link to='/services'> <li>Services</li></Link>
       <Link to='/blog'> <li>Blog</li></Link>
       
      </ul>
    </div>
   <Link to='/'><h1  className='text-xl italic flex items-center md:text-3xl md:font-bold text-[tomato] '><span><img src={logo} alt="logo" className='w-20 md:w-44 rounded-full' /></span> Rosui Ghor </h1></Link> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 text-2xl">
    <Link to='/'> <li>Home</li></Link>
    <Link to='/services'> <li className='mx-5'>Services</li></Link>
    <Link to='/blog'> <li>Blog</li></Link>
    </ul>
  </div>
  <div className="navbar-end md:text-2xl">
   {
    user?.uid ?
    <div>
    <button onClick={handleLogOut} className="mr-10 md:mr-[unset]">Logout</button>
    <Link to='/myreview'><button className='mx-1 lg:mx-5'>MyReview</button></Link>
    <Link to='/addservices'><button>AddServices</button></Link>
    </div>
    :
    <div>
    <Link to='/login'><button>Login</button></Link>
    
    
    </div>
   }
  
  </div>
</div>
    );
};

export default Header;