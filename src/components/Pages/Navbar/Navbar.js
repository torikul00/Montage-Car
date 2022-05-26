import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import logo from '../../../images/logo.png'
import auth from '../../Shared/firebase.init';
const Navbar = () => {
    let [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth)
        localStorage.removeItem('token')
        toast.success('Logout successful')
    }
    return (
        <div>
            <div className="navbar bg-base-100 lg:px-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/myPortfolio'>Portfolio</NavLink></li>
                        <li>
                            <NavLink to='/blogs'>Blogs</NavLink>
                        </li>
                        {user && <li>
                            <NavLink to='/dashboard'>Dashboard</NavLink>
                        </li>}
                        {user ? <li><buttton onClick={handleLogout}>Logout</buttton></li>
                            :

                            <li><NavLink to='/login'>Login</NavLink></li>
                        }
                        </ul>
                    </div>
                    <NavLink to='' className=" w-36">
                        <img className='mx-auto block' src={logo} alt="" />
                    </NavLink>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/myPortfolio'>Portfolio</NavLink></li>
                        <li>
                            <NavLink to='/blogs'>Blogs</NavLink>
                        </li>
                        {user && <li>
                            <NavLink to='/dashboard'>Dashboard</NavLink>
                        </li>}
                        {user ? <li><buttton onClick={handleLogout}>Logout</buttton></li>
                            :

                            <li><NavLink to='/login'>Login</NavLink></li>
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;