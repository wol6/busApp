import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function BusSchedule() {
    let [busArr, setBusArr] = useState([])
    const [searchState, setSearchState] = useState({
        from: '',
        to: '',
        date: ''
    })
    
    let loginId = localStorage.getItem('userid')


    function changeHandler(e) {

        setSearchState(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    function searchHandler(e) {
        e.preventDefault()
        axios.post("http://localhost:8080/searchbus",searchState)
            .then(resp => {
                if(resp.data.success==true)
                    {
                        let busData = resp.data.filter_bus
                        setBusArr(busData)
                    }
                    else{
                        toast.info("no bus found",{
                            position: "top-center"
                        })
                    }

                // setBusArr(busData.filter((item) => {
                //     return searchState.from == item.from && searchState.to == item.to && searchState.date == item.date;
                // }))
            })


    }

    return (
        <>
            <ToastContainer stacked />
            <div>

                <form onSubmit={searchHandler}
                    class="flex items-center max-w-3xl mx-auto m-8">
                    <label for="voice-search" class="sr-only">Search</label>
                    <div class="relative w-80 p-2">
                        <input type="text" id="voice-search"
                            name='from'
                            onChange={changeHandler}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="From" required />
                    </div>
                    <div class="relative w-80 p-2">

                        <input type="text" id="voice-search"
                            name='to'
                            onChange={changeHandler}
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="To" required />
                    </div>

                    <div class="relative w-34">

                        <input type="date"
                            name='date'
                            onChange={changeHandler}
                            id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="To" required />
                    </div>

                    <button type="submit" class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>Search
                    </button>
                </form>



                <div className='mx-16'>
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Bus Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    From
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    To
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Date
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Time
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Price / head
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">

                            {
                                busArr.map((item) => {
                                    return <>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.busname}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {item.from}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.to}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.date}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.time}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {item.price}
                                            </td>
                                            {
                                                loginId?(
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    <NavLink to={`/booknow/${item._id}`}>
                                                    <button className='text-gray-600 bg-white underline focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'>
                                                        booknow</button>
                                                    </NavLink>
                                                </td>
                                                ):('')
                                            }
                                        </tr>
                                    </>
                                })
                            }

                        </tbody>
                    </table>
                </div>



            </div>

        </>
    )
}

export default BusSchedule 