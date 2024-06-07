import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(false)
  const toggleSignUpForm = () => {
    setIsSignUpForm(!isSignUpForm)
  }
  return (
    <div>
        <Header />
        <div>
        <img
         className='absolute'
         src='https://assets.nflxext.com/ffe/siteui/vlv3/cacfadb7-c017-4318-85e4-7f46da1cae88/e43aa8b1-ea06-46a5-abe3-df13243e718d/IN-en-20240603-popsignuptwoweeks-perspective_alpha_website_large.jpg'
         alt='bg-image'
         />
        </div>
        <form className='w-3/12 p-12 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isSignUpForm ? 'Sign Up' : 'Sign In' }</h1>
          {isSignUpForm && <input type='name' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-70'/>}
          <input type='email' placeholder='Email or phone number' className='p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-70' />
          <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-lg bg-opacity-70'/>
          <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignUpForm ? 'Sign Up' : 'Sign In' }</button>
          <p className='py-4 cursor-pointer' onClick={toggleSignUpForm}>{isSignUpForm ? 'Already registered? Sign In Now' : 'New to Netflix? Sign Up' }</p>
        </form>
    </div>
  )
}

export default Login
