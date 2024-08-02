import React, { useState } from 'react'
import axios from 'axios'

function Add() {

    const [add, setAdd] = useState({
        busname: '',
        from: '',
        to: '',
        date: '',
        time: '',
        price: '',
        seats:''
    })

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:8080/addbus', add)
            .then(resp => {
                console.log(resp)
                alert("added successfully")
                setAdd({
                    busname: '',
                    from: '',
                    to: '',
                    date: '',
                    time: '',
                    price: '',
                    seats:''
                })
            }).catch(err=>console.log(err))

    }

    function changeHandler(e) {
        setAdd((prev) => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }
    return (
        <>
            <h1 className="text-center text-5xl px-28 py-3  text-purple-700">Add Bus</h1>
            <div className="border-y-8 flex justify-center border-black-600 m-15 mx-60">

                <form onSubmit={handleSubmit}>
                    <div className='p-4'>
                        <label htmlFor="bname" className='text-blue-500 px-12'>
                            Bus Name
                        </label>
                        <input onChange={changeHandler} name='busname' value={add.busname}
                            className='border w-60 border-blue-300 h-8' type="text" id='bname' />
                    </div>

                    <div className='p-4'>
                        <label htmlFor="from" className='text-blue-500 px-16'>
                            From
                        </label>
                        <input onChange={changeHandler} name='from' value={add.from}
                            className='border w-60 border-blue-300 h-8' type="text" id='from' />
                    </div>

                    <div className='p-4 px-1'>
                        <label htmlFor="to" className='text-blue-500 px-20'>
                            To
                        </label>
                        <input onChange={changeHandler} name='to' value={add.to}
                            className='border w-60 border-blue-300 h-8' type="text" id='to' />
                    </div>

                    <div className='p-4'>
                        <label htmlFor="date" className='text-blue-500 px-16'>
                            Date
                        </label>
                        <input onChange={changeHandler} name='date' value={add.date}
                            className='border w-60 border-blue-300 h-8' type="date" id='date' />
                    </div>

                    <div className='p-4'>
                        <label htmlFor="time" className='text-blue-500 px-16'>
                            Time
                        </label>
                        <input onChange={changeHandler} name='time' value={add.time}
                            className='border w-60 border-blue-300 h-8' type="text" id='time' />
                    </div>
                    <div className='p-4'>
                        <label htmlFor="price" className='text-blue-500 px-16'>
                            Price
                        </label>
                        <input onChange={changeHandler} name='price' value={add.price}
                            className='border w-60 border-blue-300 h-8' type="number" id='price' />
                    </div>

                    {/* <div className='p-4'>
                        <label htmlFor="seats" className='text-blue-500 px-16'>
                            Seats
                        </label>
                        <input onChange={changeHandler} name='seats' value={add.seats}
                            className='border w-60 border-blue-300 h-8' type="number" id='seats' />
                    </div> */}
                    <div className='px-40 py-3'>
                        <button
                            type="submit" className="py-1.5 px-8 me-2 mb-2 text-md font-medium text-blue-600 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Add</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Add