import Link from 'next/link'
import React, { useState } from 'react';

interface signinProps {
    handleSingin:(e:React.FormEvent<HTMLFormElement>)=>void;
}


export const SinginForm=({handleSingin}:signinProps)=>{

     const [email,setEmail] =useState<string>();
     const [password,setPassword] =useState<string>();

     const handleEmailChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(e.target.value)
        
     }
     const handlePassChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        setPassword(e.target.value)
     }
    console.log('email+password',email,password)

    return (
    <form onSubmit={handleSingin} > 
    <div className="flex flex-wrap -mx-3 mb-4">
      <div className="w-full px-3">
        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email</label>
        <input 
            id="email" 
            type="email" 
            name='email'
            className="form-input w-full text-gray-300" 
            placeholder="you@yourcompany.com" 
            defaultValue="pasdeloup.jorge@gmail.com" 
            value={email}
            onChange={handleEmailChange}
            required />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-4">
      <div className="w-full px-3">
        <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="password">Password</label>
        <input 
            id="password" 
            name='password'
            type="password" 
            className="form-input w-full text-gray-300" 
            placeholder="Password (at least 10 characters)" 
            required 
            value={password}
            onChange={handlePassChange}
            defaultValue="" />
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mb-4">
      <div className="w-full px-3">
        <div className="flex justify-between">
          {/* <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="text-gray-400 ml-2">Keep me signed in</span>
          </label> */}
          <Link href="/reset-password" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Forgot Password?</Link>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap -mx-3 mt-6">
      <div className="w-full px-3">
        <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full" type='submit'>Sign in</button>
      </div>
    </div>
  </form>
    )
}