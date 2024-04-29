import { Link, NavLink } from "react-router-dom";
import useAuth from "./useAuth";
// import { FaCircleUser } from "react-icons/fa6";

const Nav = () => {
    const { user, logOut } = useAuth()
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/allTouristsSpot'}>All Tourists Spot</NavLink></li>
        <li><NavLink to={'/addTouristsSpot'}>Add Tourists Spot</NavLink></li>
        <li><NavLink to={'/myList'}>My List</NavLink></li>
        <li><NavLink to={'/profile'}>Profile</NavLink></li>
    </>
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost hover:bg-[#D2B48C] hover:text-white text-xl">AdventureAxis</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-x-5">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div className="dropdown dropdown-hover">
                            {
                                user?.photoURL && (
                                    <img src={user?.photoURL} tabIndex={0} role="button" className="w-11 h-11 rounded-full"></img>
                                )
                            }
                            {
                                user?.displayName && (
                                    <ul tabIndex={0} className="-ml-12 flex flex-col items-center justify-center dropdown-content z-[1] menu shadow bg-[#e8e8e1] rounded-box w-36">
                                        <li><a>{user?.displayName}</a></li>
                                        <li><a onClick={handleLogOut}>Logout</a></li>
                                    </ul>
                                )
                            }
                        </div>
                        :
                        <div className="flex gap-x-4">
                            <Link to={'/login'} className="btn bg-[#D2B48C] font-bold text-lg text-white">Sign In</Link>
                            <Link to={'/register'} className="btn bg-[#EA4744] font-bold text-lg text-white">Sign Up</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Nav;