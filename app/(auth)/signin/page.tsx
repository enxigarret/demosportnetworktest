'use client'; 

// export const metadata = {
//   title: 'Sign In - Open PRO',
//   description: 'Page description',
// }

import Link from 'next/link'
import {firebaseApp} from "@/firebase"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { SinginForm } from '@/components/auth/signin';
import { useRouter } from 'next/navigation';
import Cookies from "js-cookie";
import { setAuth } from '@/components/auth/use_auth';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation'

export default function SignIn() {
  const auth = getAuth(firebaseApp);
  const router = useRouter();
  const [isAuthorized,setIsAuthorized]=useState(false)

  useEffect(() => {
    // Ensure router is only used on the client side
    if (!router) return;
  }, [router]);

  // useEffect(()=>{
  //   router.push('/admin')
  // },[isAuthorized])
  
  const handleSingin=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
  
    
    const formData = new FormData(e.currentTarget);
    // console.log("eeeee value",e.target,Object.fromEntries(formData))
    const email = formData.get('email')?.toString()
    const password = formData.get('password')?.toString();
    const user = auth.currentUser;
    // console.log("auth",auth,user)  

 

    if( email !=null && password){   
       signInWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
         // Signed in 

         const user = userCredential.user;

         setAuth(user.uid)
         setIsAuthorized(true)
         if(router){
          router.push('/admin')
         }


         //document.cookie = `uid=${user.uid}; path=/; secure; samesite=strict`;
         //redirect('/admin')
     
         // sign out + redirect to the page of add items .
        // console.log("user",user)
         // ...
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log("login error ",errorCode,errorMessage)
       }); 
  }
}
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome back. We exist to make entrepreneurship easier.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            {/* <form > */}
              {/* <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
                    <svg className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                    </svg>
                    <span className="h-6 flex items-center border-r border-white border-opacity-25 mr-4" aria-hidden="true"></span>
                    <span className="flex-auto pl-16 pr-8 -ml-16">Sign in with Google</span>
                  </button>
                </div>
              </div> */}
            {/* </form> */}
            <div className="flex items-center my-6">
              <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
              <div className="text-gray-400">Or, sign in with your email</div>
              <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
            </div>
              <SinginForm handleSingin={handleSingin}/>
            <div className="text-gray-400 text-center mt-6">
              Don’t you have an account? <Link href="/signup" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign up</Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
