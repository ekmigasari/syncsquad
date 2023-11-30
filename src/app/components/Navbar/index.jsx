"use client";
import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

  return (

   
   <div className="shadow">
    <div className="navbar container mx-auto p-4">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <Link href="">Home</Link>
                </li>
                <li>
                    <Link href="">About</Link>
                </li>
                <li>
                    <Link href="">Event</Link>
                </li>
                <li>
                    <Link href="">Contact</Link>
                </li>
            </ul>
            </div>
            <Link href="" className="btn btn-ghost text-xl">daisyUI</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-1">
                <li>
                    <Link href="">Home</Link>
                </li>
                <li>
                    <Link href="">About</Link>
                </li>
                <li>
                    <Link href="">Event</Link>
                </li>
                <li>
                    <Link href="">Contact</Link>
                </li>
            </ul>
        </div>
        <div className="navbar-end space-x-5">
            
         {
            isLoggedIn ?
                <Link href="/login">
                    <span 
                    onClick={handleLogin}
                    className="border border-indigo-600 text-indigo-500 border-solid outline-none focus:border-blue-500 px-4 py-2 rounded-lg hover:bg-indigo-500 hover:text-white">
                        Login
                    </span>
                </Link>
            :
            <div className="dropdown dropdown-end flex">
                <span className="flex items-center justify-center px-3">username</span>
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img alt="Avatar" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                </div>
                <ul className="shadow border-gray-600 mt-14 z-[1] p-2 menu menu-sm dropdown-content bg-gray-800 rounded-box w-52">
                    <li><Link href="">Profile</Link></li>
                    <li><Link href="">Logout</Link></li>
                </ul>
            </div>   
         }   
           
        </div>
    </div>
   </div> 
  )
}
