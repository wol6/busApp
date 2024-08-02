import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
     <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-9">
        <div className="text-2xl font-bold px-11">NeoGo Travels</div>
        <nav className="space-x-20 px-20">
         <NavLink to='/'> <a href="#" className="hover:text-gray-300">Home</a></NavLink>
         <NavLink to='/search'> <a href="#" className="hover:text-gray-300">Search</a></NavLink>
         <NavLink to='/signin'> <a href="#" className="hover:text-gray-300">SigIn</a></NavLink>
         <NavLink to='/signup'> <a href="#" className="hover:text-gray-300">SigUp</a></NavLink>
         <NavLink to='/'> <a href="#" className="hover:text-gray-300">About</a></NavLink>
        </nav>
      </div>
    </header>
    </>
  )
}

export default Header