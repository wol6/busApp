import React from 'react'
import Header from '../Header/Header'
import BusSchedule from './BusSchedule'
import UserHeader from '../Header/UserHeader'

function Search() {
  const loginId = localStorage.getItem('userid')
  return (
    <div>
      {
        loginId ? (<UserHeader/>):(<Header/>)
      }
        <BusSchedule/>
    </div>
  )
}

export default Search