import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaGraduationCap, FaUserCircle } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className="navbar uppercase bg-slate-200 text-gray-900 font-semibold">
            <div className="navbar lg:mx-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to='/home'>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="ml-5" to='/courses'>Courses</NavLink>
                            </li>
                            <li>
                                <NavLink className="ml-5" to='/faq'>Faq</NavLink>
                            </li>
                            <li>
                                <NavLink className="ml-5" to='/blogs'>Blog</NavLink>
                            </li>
                            {
                                user?.uid ? undefined
                                    :
                                    <><li>
                                        <NavLink className="ml-5" to='/register'>Register</NavLink>
                                    </li>
                                        <li>
                                            <NavLink className="ml-5" to='/login'>Login</NavLink>
                                        </li></>
                            }
                            {
                                user?.uid && <><li>
                                    <button onClick={handleLogOut} className='uppercase ml-5'>Log out</button>
                                </li></>
                            }
                            {
                                user?.uid && <p>{user.displayName}</p>
                            }
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <input type="checkbox" className="toggle toggle-primary" />
                                </label>
                            </div>
                            <div>
                                {
                                    user?.uid ? <img className='w-10 h-10 rounded-full' src={user?.photoURL} alt="userImage" /> : <FaUserCircle className='text-2xl' />
                                }
                            </div>
                        </ul>
                    </div>
                    <div className='flex items-center'>
                        <FaGraduationCap className='text-3xl' /><Link to='/' className="btn btn-ghost normal-case text-xl">Educrat</Link>
                    </div>
                </div>


                {/* Desktop menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <NavLink to='/home'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className="ml-5" to='/courses'>Courses</NavLink>
                        </li>
                        <li>
                            <NavLink className="ml-5" to='/faq'>Faq</NavLink>
                        </li>
                        <li>
                            <NavLink className="ml-5" to='/blogs'>Blog</NavLink>
                        </li>
                        {
                            user?.uid ? undefined
                                :
                                <><li>
                                    <NavLink className="ml-5" to='/register'>Register</NavLink>
                                </li>
                                    <li>
                                        <NavLink className="ml-5" to='/login'>Login</NavLink>
                                    </li></>
                        }
                        {
                            user?.uid && <><li>
                                <button onClick={handleLogOut} className='uppercase ml-5'>Log out</button>
                            </li></>
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.uid && <p className='hidden lg:block'>{user.displayName}</p>
                    }
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <input type="checkbox" className="toggle toggle-primary" />
                        </label>
                    </div>
                    <div>
                        {
                            user?.uid ? <img className='w-10 h-10 rounded-full hidden lg:block' title={user.displayName} src={user?.photoURL} alt="userImage" /> : <FaUserCircle className='text-2xl' />
                        }
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;