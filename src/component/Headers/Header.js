import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
  const {user,logOut} = useContext(AuthContext)
  console.log(user)

  const handleLogOut=()=>{
    logOut()
    .then(()=> {})
    .catch(error => console.log(error))
}
  // {
  //   user?.displayName ? 
  //   <div>
  //   <h1>{user.displayName}</h1>
  //   </div>
  //   :
  //   <div>
  //   <h1>nai</h1>
  //   </div>
  // }
    return (
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       <Link to='/'> <li>Home</li></Link>
       <Link to='/services'> <li>Services</li></Link>
       <Link to='/blog'> <li>Blog</li></Link>
       
      </ul>
    </div>
   <Link><h1 className='text-5xl'>Daisiui</h1></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
    <Link to='/'> <li>Home</li></Link>
    <Link to='/services'> <li>Services</li></Link>
    <Link to='/blog'> <li>Blog</li></Link>
    </ul>
  </div>
  <div className="navbar-end">
   {
    user?.uid ?
    <div>
    <button onClick={handleLogOut}>Logout</button>
    <Link to='/myreview'><button>MyReview</button></Link>
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