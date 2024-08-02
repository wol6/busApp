import React, { useState } from 'react'
import axios from 'axios'
import Header from '../Header/Header'
import {isStrongPassword} from 'validator'
import { ToastContainer, toast } from 'react-toastify';

function Register() {
  const [register, setRegister] = useState({
    fullname: '',
    email: '',
    password: '',
    cpassword: '',
    mobno: ''
  })

  function handleSubmit(e) {
    e.preventDefault()
    const checkValidators = {
      minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10,
      pointsForContainingNumber: 10, pointsForContainingSymbol: 10
    }

    if (register.fullname == "" || register.email == "" || register.password == ""
      || register.cpassword == "" || register.mobno == "") {
      // toast.info("all column must fill")
      toast.info("all column must fill")
    }
    else if (!isStrongPassword(register.password, checkValidators)) {
      toast.info("enter strong password")
    }
    else if (register.password != register.cpassword) {
      toast.info("password is not matching")
    }
    else {
      axios.post('http://localhost:8080/signup', register)
        .then(resp => {
          console.log(resp.data)
          if(resp.data.message=="email already exists")
            {
              toast.info('user alredy exists')
              setRegister({
                fullname: '',
                email: '',
                password: '',
                cpassword: '',
                mobno: ''
              })
            }
            else {
              toast.info("successfully registered")
              setRegister({
                fullname: '',
                email: '',
                password: '',
                cpassword: '',
                mobno: ''
              })
            }
          
        })
    }


  }


  function changeHandler(e) {
    setRegister((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <>
      <Header />
      <ToastContainer stacked/>
      <div className="border-8 border-black-600 m-16">

        <h1 className="text-5xl px-28 py-3  text-purple-700">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className='p-4'>
            <label htmlFor="fname" className='text-blue-500 px-12'>
              Full Name
            </label>
            <input onChange={changeHandler} name='fullname'  value={register.fullname}
              className='border w-60 border-blue-300 h-8' type="text" id='fname' />
          </div>

          <div className='p-4'>
            <label htmlFor="emailId" className='text-blue-500 px-16'>
              Email
            </label>
            <input onChange={changeHandler} name='email' value={register.email}
              className='border w-60 border-blue-300 h-8' type="text" id='emailId' />
          </div>

          <div className='p-4'>
            <label htmlFor="password" className='text-blue-500 px-12'>
              Password
            </label>
            <input onChange={changeHandler} name='password' value={register.password}
              className='border w-60 border-blue-300 h-8' type="password" id='password' />
          </div>

          <div className='p-4'>
            <label htmlFor="cpassword" className='text-blue-500 px-5'>
              Confirm Password
            </label>
            <input onChange={changeHandler} name='cpassword' value={register.cpassword}
              className='border w-60 border-blue-300 h-8' type="password" id='cpassword' />
          </div>

          <div className='p-4'>
            <label htmlFor="mobno" className='text-blue-500 px-11'>
              Mobile No:
            </label>
            <input onChange={changeHandler} name='mobno' value={register.mobno}
              className='border w-60 border-blue-300 h-8' type="number" id='mobno' />
          </div>
          <div className='px-40 py-3'>
            <button
              type="submit" className="py-1.5 px-6 me-2 mb-2 text-md font-medium text-blue-600 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Register</button>
          </div>
        </form>
      </div>
    

    </>
  )
}

export default Register