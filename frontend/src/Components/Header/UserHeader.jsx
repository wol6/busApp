import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


function UserHeader() {
    const navigate = useNavigate()

    function onLogout()
    {
        localStorage.clear()
        navigate('/')
    }
  return (
    <>
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center py-9">
        <div className="text-2xl font-bold px-11">NeoGo Travels</div>
        <nav className="space-x-20 px-20">
         <NavLink to='/'> <a href="#" className="hover:text-gray-300">Home</a></NavLink>
         <NavLink to='/search'> <a href="#" className="hover:text-gray-300">search</a></NavLink>
         <NavLink to='/yourticket'> <a href="#" className="hover:text-gray-300">myTicket</a></NavLink>
         <NavLink to='/'> <a href="#" className="hover:text-gray-300">About</a></NavLink>
         <button onClick={onLogout} className=' hover:text-gray-300 underline'>Logout</button>
        </nav>
      </div>
    </header>
    </>
  )
}

export default UserHeader