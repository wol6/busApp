import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Tickets from './Tickets'
import UserHeader from '../Header/UserHeader'

function SetTicket() {
    const [myTicket,setMyTicket] = useState({})
    const id = localStorage.getItem('userid')
    useEffect(()=>{
        axios.post("http://localhost:8080/myticket",{id})
        .then(resp=>{
            console.log(resp.data.ticket)
            setMyTicket(resp.data.ticket)
        }).catch(err=>console.log(err))
    },[])
  return (
    <>
        <UserHeader/>
        <Tickets
        fullName={myTicket.fullname}
        ticket={myTicket.ticket}
        />
           
    
    </>
  )
}

export default SetTicket