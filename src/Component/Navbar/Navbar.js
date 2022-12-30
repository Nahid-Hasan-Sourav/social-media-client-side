import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)

  const handleLogout=()=>{
    logOut();
  }

    const menuItem=(
        <>
            <li className='text-black mr-2'>
                <Link to='/home'>Home</Link>
            </li>
            <li className='text-black mr-2'>
                <Link>Timeline</Link>
            </li>
             <li className='text-black mr-2'>
            <Link>Media</Link>
            </li>
            {
              user?.uid ? 
              <>
            <li className='text-black mr-2'
            onClick={handleLogout}
            >
            <Link to='/register'>Logout</Link>
            </li>
              </>

              :
              <>
            <li className='text-black mr-2'>
            <Link to='/login'>Login</Link>
            </li>
              </>
            }
            
           
           
           
        </>
    )
    return (
      <div>
        <div className="navbar bg-[#58946c] shadow-md ">
          <div className="navbar-start ">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
              {
                menuItem
              }
              </ul>
            </div>
            <Link className="btn btn-ghost normal-case text-xl">
            people<span className='text-blue-500'>Connect</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {menuItem}
            </ul>
          </div>
          {/* <div className="navbar-end">
            <a className="btn">Get started</a>
          </div> */}
        </div>
      </div>
    );
};

export default Navbar;