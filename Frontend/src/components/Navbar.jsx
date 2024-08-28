import React, { useEffect, useState } from 'react';
import Login from './Login';
import { useAuth } from '../context/AuthProvider';
import Logout from './Logout';


function Navbar() {
  const [authUser, setAuthUser]=useAuth()
  
  const[theme, setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme") : "light")
  const element=document.documentElement;
  useEffect(()=>{
    if(theme==="dark"){
      element.classList.add("dark");
      localStorage.setItem("theme", "dark")
      document.body.classList.add("dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  },[theme])

  const [sticky, setSticky]=useState(false)
  useEffect(()=>{
const handleScroll=()=>{
  if(window.scrollY>0){
    setSticky(true)
  }
  else{
    setSticky(false)
  }
}
window.addEventListener('scroll', handleScroll)
return()=>{
  window.removeEventListener('scroll', handleScroll)
}
  },[])
  const navItem = (
    <>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="course">Course</a>
      </li>
      <li>
        <a href="contact">Contact</a>
      </li>
      <li>
        <a href="about">About</a>
      </li>
    </>
  );

  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
sticky?"sticky-navbar shadow-md bg-base-100 duration-300 transition-all ease-in-out":""
    }`}>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItem}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">EpicReads</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItem}</ul>
        </div>
        <div className="navbar-end space-x-3">
          <div className="hidden md:flex items-center space-x-4">
           

          </div>
          <label className="swap swap-rotate">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" className="theme-controller" value="synthwave" />

  

  
</label>
{
  authUser?(
  <Logout/>
  ):(
  <div>
          <a className="bg-black text-white p-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
          onClick={()=>document.getElementById("my_modal_3").showModal()}>
            Login
          </a>
          <Login/>
          </div>
)}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
