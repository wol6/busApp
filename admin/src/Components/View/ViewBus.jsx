import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

function  ViewBus() {
    const [showBus,setShowBus] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8080/viewbus")
        .then(resp=>{
            setShowBus(resp.data.buses)
        }).catch(err=>{console.log(err)})
    })

    function onDeleteHandler(deleteId)
    {
      console.log(deleteId)
  
      let confirm = window.confirm("Are You Sure")
      if(confirm)
        {
          axios.delete(`http://localhost:8080/deletebus/${deleteId}`)
          .then(resp=>{
            console.log(resp.data)

          })
        }
    }
  return (
    <>
    <div className="relative overflow-x-auto">
  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          Bus Name
        </th>
        <th scope="col" className="px-6 py-3">
          From
        </th>
        <th scope="col" className="px-6 py-3">
          To
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
        <th scope="col" className="px-6 py-3">
          Date
        </th>
        <th scope="col" className="px-6 py-3">
          Time
        </th>
        <th scope="col" className="px-6 py-3">
          Reserved Seats
        </th>
        <th scope="col" className="px-6 py-3">
          Delete / Update
        </th>
      </tr>
    </thead>
    <tbody>
        {
            Array.isArray(showBus)?(
                showBus.map((bus)=>{
                    return <>
                     <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                     key={bus._id}>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
         {bus.busname}
        </th>
        <td className="px-6 py-4">{bus.from}</td>
        <td className="px-6 py-4">{bus.to}</td>
        <td className="px-6 py-4">{bus.price}</td>
        <td className="px-6 py-4">{bus.date}</td>
        <td className="px-6 py-4">{bus.time}</td>
        <td className="px-6 py-4">
            {
                bus.seats.map((seat)=>{
                    return <span>{seat}-</span>
                })
            }
        </td>
        <td className="px-6 py-4">
          <button className='px-1' onClick={()=>onDeleteHandler(bus._id)}>Delete</button>
          <NavLink to={`/editbus/${bus._id}`}><a href="#">Update</a></NavLink>
        </td>
      </tr>
                    </>
                })
            ):(<p>Loading</p>)
        }
     
    </tbody>
  </table>
</div>


    </>
  )
}

export default ViewBus