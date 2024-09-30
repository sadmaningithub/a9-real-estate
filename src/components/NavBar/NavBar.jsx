import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import profilePic from '../../assets/img/profile.png'

const NavBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    // console.log(user.photoURL)

    const navLinks = <>
        <li> <NavLink to='/'>Home</NavLink>  </li>
        <li> <NavLink to='/properties'>Properties</NavLink> </li>
        <li> <NavLink to='/services'>Services</NavLink> </li>
        <li> <NavLink to='/about'>About Us</NavLink> </li>
    </>

    return (
        <div className=" navbar bg-base-100">
            <div className="navbar-start z-10">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">

                    Cozy Homes
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <Link onClick={handleSignOut} className="btn"> Sign Out </Link> : <Link to='/login' className="btn">Login</Link>
                }
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img title={user ? user.displayName : 'Please login to see your name here'} src={user ? user.photoURL : profilePic} />
                        </div>
                    </div>
                    {
                        user&& <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link to='/profile'> Profile</Link>
                        </li>
                        <li>
                            <Link to='/update_user_profile'> Update Profile </Link>
                             
                        </li>
                    </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;