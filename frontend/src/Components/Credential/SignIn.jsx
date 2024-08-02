import axios from 'axios'
import React, { useState } from 'react'
import Header from '../Header/Header'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

function SignIn() {
  const [login, setlogin] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  function handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:8080/signin', login)
      .then(resp => {
        if (login.email == "" || login.password == "") {
          toast.info("all fields required")
        }
        else if (resp.data.success == true) {
          // console.log(resp.data.user[0]._id)
          let userId = resp.data.user[0]._id
          let userName = resp.data.user[0].fullname
          localStorage.setItem('userid', userId)
          localStorage.setItem('username', userName)
          navigate('/search')
        }
        else {
          toast.info("Invalid Credential")
        }
        setlogin({
          email: '',
          password: ''
        })
      }).catch(err => console.log(err))
  }
  function changeHandler(e) {
    setlogin((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <>
      <Header />
      <ToastContainer stacked />
      <h1 className='text-center py-10 text-4xl text-blue-500 font-medium'>SignIn</h1>
      <div className='my-18 mx-96'>
        <div className="w-full max-w-xl">
          <form onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
                onChange={changeHandler}
                name='email'
                value={login.email}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-gray-200 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={changeHandler}
                name='password'
                value={login.password}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Forgot Password?
              </a>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default SignIn