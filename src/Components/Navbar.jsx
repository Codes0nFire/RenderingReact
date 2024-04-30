import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className=' p-2 flex gap-4 bg-red-600 align-center justify-center text-white' >
      <NavLink to="/" className={(e)=> e.isActive ? "text-black" : ""} >home</NavLink>
      {/* <NavLink to="/feed"  className={(e)=> e.isActive ? "text-black" : ""} >feed</NavLink> */}
      <NavLink to="/profile"  className={(e)=> e.isActive ? "text-black" : ""} >profile</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
