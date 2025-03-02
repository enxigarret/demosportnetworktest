import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import { checkHasAuth } from '../auth/use_auth';

import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '@/firebase'; // Import your Firebase config
import { addAthelete, deleteAthelet, updateAthelet } from '@/data/admin-tools';
import { useRouter } from 'next/navigation';
import { AthletProps } from '@/app/athl/page';


export interface UserInfo {
    name:string;
    city:string;
    description:string;
    image:string
}


interface signinProps {
    handleSingin:(e:React.FormEvent<HTMLFormElement>)=>void;
}





const AdminForm=(props:{athletInfo:AthletProps,id_athlet:string|null})=>{
    const router = useRouter();

    const isAuthorized = checkHasAuth();
    const isCreation = !!props.id_athlet;
    const [userInfo,setUserinfo] =useState<AthletProps>({
        name:'',
        city:'',
        description:'',
        image:''
     });

     useEffect(()=>{
        if(props.athletInfo){
            setUserinfo(props.athletInfo)
        }
     },[props.athletInfo])
    //  const [city,setCity] =useState<string>();
    //  const [description,setDescription] =useState<string>();

     const handleUserInfoChange =(e:React.ChangeEvent<HTMLInputElement |HTMLTextAreaElement>)=>{
   
        if(e.target.name ==='name'){
            setUserinfo({
                ...userInfo,
                name:e.target.value}
                )
        }
        if(e.target.name ==='city'){
            setUserinfo({
                ...userInfo,
                city:e.target.value}
                )
        }
        if(e.target.name ==='description'){
            setUserinfo({
                ...userInfo,
                description:e.target.value}
                )
        }
        if(e.target.name ==='image'){
            setUserinfo({
                ...userInfo,
                image:e.target.value}
                )
        }

    
       // setName(e.target.value)
        
     }
    //  const handleCityChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     setCity(e.target.value)
    //  }
    //  const handleDesChange =(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    //     setDescription(e.target.value)
   //  }
    console.log('email+password',userInfo,props.id_athlet)

    const handleDelete = async(e:any)=>{
        e.preventDefault();
        if (window.confirm("Etes vous sure de supprimer l'info?")) {
            if(isAuthorized){
               
                 if(props.id_athlet){
                    try{
                      const deletev =await deleteAthelet(props.id_athlet)
                       router.push('/champions')
                    }catch(error){
                        console.error('Error deleting document: ', error);
                    }
              }
        }}
    }

    const handleAdmin=async(e:any)=>{
        e.preventDefault();
        if (window.confirm("Etes vous sure d'ajouter l'info?")) {
            if(isAuthorized){
               
            try {
                    if(isCreation &&props.id_athlet ){
                        const docRef = await updateAthelet(
                            {id_athelet : props.id_athlet,
                            userInfo:userInfo,}
                          );
                        
                         
                // Clear the input field
                           window.alert("Athlete updated successfully!");

                       
                            router.push('/champions')
                       
                        //    if(docRef.id){
                        //          router.push('/champions')
                        //    }
                            
        
                        }else{
                         const docRef = await addAthelete({
                           ...userInfo,
                         });
                   
               // Clear the input field
                          window.alert("Athlete added successfully!");
                          if(docRef.id){
                                router.push('/champions')
                          }
                        }
                } catch (error) {
                            console.error('Error adding document: ', error);
                }

             }
         }
    }
    

    return (

        <form className="space-y-4" onSubmit={handleAdmin}>
        <div className="flex flex-col">
            <label className="mb-1" htmlFor="name">Name:</label>
            <input 
                type="text" 
                id="name" 
                name="name" 
                className="border rounded p-2"
                value={userInfo.name}
                onChange={handleUserInfoChange}
            />
        </div>
        <div className="flex flex-col">
            <label className="mb-1" htmlFor="city">City:</label>
            <input 
                type="text" 
                id="city" 
                name="city"  
                value={userInfo.city}
                onChange={handleUserInfoChange}
                className="border rounded p-2"
            />
        </div>
        <div className="flex flex-col">
            <label className="mb-1" htmlFor="imageUrl">Image URL:</label>
            <input 
                type="text" 
                id="image" 
                name="image"  
                value={userInfo.image} // Ensure userInfo has imageUrl property
                onChange={handleUserInfoChange}
                className="border rounded p-2"
            />
        </div>
        <div  className="flex flex-col">
            <label className="mb-1" htmlFor="description">Description:</label>
            <textarea 
               id="description" 
               name="description" 
               value={userInfo.description}
               onChange={handleUserInfoChange}
               className="border rounded p-2"
               >

            </textarea>
        </div>
        <button 
            type="submit" 
            className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            >
               {isCreation? "Modify" : "Create"}
        </button>
        {isCreation && <button 
            type="button" 
            className="bg-red-500 text-white rounded p-2 hover:bg-red-600 mt-2"
            onClick={handleDelete}
        >
            Delete Athlete
        </button>}
 
    </form>     
    )
};

export default AdminForm;