
import Cookies from 'js-cookie';
import { createContext, useContext, useState } from 'react';


export const setAuth=(uid:string)=>{
  Cookies.set("uid",uid,{expires:1})
}

export const checkHasAuth=()=>{
  const token =Cookies.get('uid');
  if( !token ) return false;
  return true;
}

export const useAuth= () =>{
  
        const cookies = document.cookie.split(';');
        let isAuthorized;
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.startsWith(`uid=`)) {
            return  true;
          }
        }
          return false;
      
      
   

    // return {
    //     isAuthorized
    //     setToken: setAuthToken,
    //     getToken: getAuthToken,
    //     isAuthorized,
    //     authorize(token:string){
    //         setAuthToken(token);
    //         setAuthorized(true)
    //     },
    //     unauthorize(){
    //         setAuthorized(false);
    //         removeAuthToken();        
    //     }

    
}