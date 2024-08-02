import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Seat from './Seat'
import UserHeader from '../Header/UserHeader'

function BookTicket() {
    const [bus, setBus] = useState([])
    const [busPrice,setBusPrice]=useState('')
    const { id } = useParams()
    const psngrName = localStorage.getItem('username')
    const [bookedSeat,setBookedSeat] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/selectedbus/" + id)
            .then(resp => {
                // console.log(resp.data.busDetails)
                setBus(resp.data.busDetails)
                // console.log(resp.data.busDetails[0].seats)
                setBookedSeat(resp.data.busDetails[0].seats)
                setBusPrice(resp.data.busDetails[0].price)
            }).catch(err => { console.log(err) })
    }, [])
  
    return (
        <>
        <UserHeader/>                    {
            bus.map((item) => {
                return <>
            <div className='flex justify-around my-14'>
            <div className='border-4 rounded-lg w-4/12 bg-slate-200'>
                <h2 className='bg-sky-800 text-2xl text-gray-200 font-bold px-3'>Passanger Pass</h2>
                <div className='flex space-around'>

                                <div className='px-3 my-3'>
                                    <p className='text-blue-900 text-lg font-medium'>Passanger Name:</p>
                                    <h3 className='text-blue-900 text-2xl font-bold px-2'>{psngrName}</h3>
                                    <p className='text-blue-900 text-lg font-medium'>Bus Name: </p>
                                    <h4 className='text-blue-900 text-1xl font-bold px-1'>{item.busname}</h4>
                                </div>
                                <div className='px-12'>
                                    <p className='text-blue-900 text-lg font-medium'>Destination</p>
                                    <h3 className='text-blue-900 text-xl font-bold'>{item.from} - {item.to}</h3>
                                    <p className='text-blue-900 text-lg font-medium'>Date & Time</p>
                                    <h3 className='text-blue-900 text-xl font-bold'>{item.date} , {item.time}</h3>
                                    <p className='text-blue-900 text-lg font-medium'>price</p>
                                    <h3 className='text-blue-900 text-xl font-bold'>{item.price}</h3>
                                </div>
                     

                </div>
            </div>
            <div>
            
            <Seat busId={id} bookedSeat={bookedSeat}
            busPrice={busPrice}
            busItems={item}
            />
            </div>
            </div>
            </>
                        })
                    }
        </>
    )
}

export default BookTicket