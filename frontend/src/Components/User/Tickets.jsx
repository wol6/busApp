import React from 'react'

function Tickets({ fullName, ticket }) {
  return (
    <>
      <div className='flex justify-between mb-10'>
        <h1 className='text-3xl ml-10 mt-5'>myTicket</h1>
        <h1 className='text-lg mr-10 mt-5'>User Name: {fullName}</h1>
      </div>
      {
        ticket ? (
          ticket.map((item) => {
            return <>
              <div className='px-8 border m-3 bg-blue-100'>

                {/* busname drop and date  */}
                <div className='flex justify-around border-b-2'>
                  <div>
                    <h2>Bus Name</h2>
                  </div>
                  <div>
                    <h2>Source - Destination</h2>
                  </div>
                  <div>
                    <h2>Ticket Id</h2>
                  </div>
                </div>

                <div className='flex justify-around'>
                  <div>
                    <h2>{item.busName}</h2>
                  </div>
                  <div>
                    <h2>{item.from}-{item.to}</h2>
                  </div>
                  <div>
                    <h2>{item.orderId}</h2>
                  </div>
                </div>

                {/* booked seat  */}
                <div className='mx-16 my-4'>
                  <span>Booked Seat : </span>
                  {
                    item.selectedSeat.map((seat) => {
                      return <span >{seat} </span>

                    })
                  }
                </div>
                <div className='flex justify-around mb-11 '>
                  {/* time and date  */}
                  <div className=''>
                    <h2>Date & Time: <span>{item.date} &nbsp; &nbsp;{item.time}</span></h2>
                  </div>
                  <div>
                    <h2>Total Price :{item.totalPrice}</h2>
                  </div>
                </div>
              </div>
            </>
          })
        ) : (<p>loading</p>)
      }





    </>
  )
}

export default Tickets