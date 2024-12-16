import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";


const Register = () => {
   const [message, setMessage] = useState();

   const { register, handleSubmit, watch, formState: { errors } } = useForm();

   const onSubmit = data => console.log(data);

   const handleGooglSignUp = () =>{
    console.log("google Sign up");
    
   }

  return (
    <div className='h-[calc(100vh-120px)] border flex items-center justify-center '>
        <div className='w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 py-6 mb-4 mt-4'>
            <h2 className='text-xl font-semibold mb-4'>Please Register</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Email</label>
                    <input 
                    {...register("email", { required: true })}
                    type="email" name='email' id='email' placeholder='Email Address' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow' />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="email">Password</label>
                    <input
                    {...register("password", { required: true })} type="password" name='password' id='password' placeholder='Password' className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow' />
                </div>
                {
                    message && <p className='text-red-500 text-xs italic mb-3'>{message}</p>
                }

                <div >
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded focus:outline-none'>Register</button>
                </div>

            </form>
            <p className='align-baseline font-medium mt-4 text-sm' >Have an account? Please <Link to="/login" className='text-blue-500 hover:text-blue-700'>Login</Link></p>

            {/* google signin */}
            <div className='mt-4'>
                <button onClick={handleGooglSignUp} className='w-full flex flex-wrap items-center justify-center gap-1 bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none'>
                <FaGoogle  className='mr-2'/>
                Sign up with Google
                </button>
            </div>

            <p className='mt-5 text-center text-gray-500 text-xs'>©2025 Book store. All rights reserved</p>
        </div>
    </div>
  )
}

export default Register