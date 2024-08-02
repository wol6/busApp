import React from 'react'
import bg from '../img/bgg.jpg'

function Home() {
    return (
        <>
            <div className='flex justify-around'>
                <div className='p-8 my-16'>
                    <img src={bg} alt="" />
                </div>
              <div  className='p-8 w-74  my-36 text-2xl text-purple-700 font-medium'>
              <h1 className='w-11/12'>
                WE ARE YOUR PARTNER TO FIND A LUXURY COACH</h1>
                <h2 className='mx-40 my-3'>Book Now</h2>
              </div>
            </div>
        </>
    )
}

export default Home