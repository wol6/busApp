import React, { useState } from 'react'
import { MdOutlineAirlineSeatReclineNormal } from "react-icons/md";
import axios from 'axios'
import Payment from '../Payment/Payment';
import { useNavigate } from 'react-router-dom';


function Seat({ busId, bookedSeat, busPrice,busItems }) {
    console.log(busItems)
    const navigate = useNavigate()
    const userId = localStorage.getItem('userid')
    const [selectedSeat, setSelectedSeat] = useState([])
    const [rowOne, setRowOne] = useState([{ id: 1, value: "A1" }, { id: 2, value: "A2" },
    { id: 3, value: "A3" }, { id: 4, value: "A4" }, { id: 5, value: "A5" }, { id: 6, value: "A6" }, { id: 7, value: "A7" },
    ])
    const [rowTwo, setRowTwo] = useState([
        { id: 11, value: "B1" }, { id: 12, value: "B2" }, { id: 13, value: "B3" }, { id: 14, value: "B4" },
        { id: 15, value: "B5" }, { id: 16, value: "B6" }, { id: 17, value: "B7" },
    ])
    let totalSeat = selectedSeat.length
    console.log(busPrice * totalSeat)
    let totalPrice = busPrice * totalSeat

    function handleClick(e) {
        let seatNo = e.target.value
        console.log(seatNo)
        const index = selectedSeat.indexOf(seatNo)
        if (index !== -1) {
            setSelectedSeat(selectedSeat.filter((seat) => seat !== seatNo))

        } else {
            setSelectedSeat([...selectedSeat, seatNo])
        }

    }

    function handleBookSeats(orderId) {
        console.log(orderId)
        if(orderId)
            {

                axios.post("http://localhost:8080/bookseat", { userId: userId, busItems:busItems,busId:busId,
                 selectedSeat: selectedSeat,orderId:orderId,totalPrice:totalPrice })
                .then(resp => {
                    console.log(resp)
                    navigate('/yourticket')
                }).catch(err => console.log(err))
            }else{
                console.log("failed")
            }
    }



    return (
        <>
            <div className='mr-8 mt-6'>
                {/* rowOne */}
                <div className='flex'>
                    {
                        rowOne.map((seat) => {
                            return <>
                                <div >
                                    <label htmlFor="seat1">

                                        <MdOutlineAirlineSeatReclineNormal size={50} />
                                        {seat.value}
                                        <input disabled={bookedSeat.includes(seat.value)}
                                            type="checkbox" id='seat' value={seat.value} onClick={handleClick} />
                                    </label>
                                </div>
                            </>
                        })
                    }



                </div>

                {/* rowTwo */}
                <div className='flex my-6'>
                    {
                        rowTwo.map((seat) => {
                            return <>
                                <div >
                                    <label htmlFor="seat1">

                                        <MdOutlineAirlineSeatReclineNormal size={50} />
                                        {seat.value}
                                        <input disabled={bookedSeat.includes(seat.value)}
                                            type="checkbox" id='seat' value={seat.value} onClick={handleClick} />
                                    </label>
                                </div>
                            </>
                        })
                    }

                </div>
                {/* submitting data  */}
                <div className='px-40 py-3'>
                    <Payment
                    totalPrice={totalPrice}
                    paidSuccessfully={handleBookSeats} />
                </div>
            </div>
        </>
    )
}

export default Seat