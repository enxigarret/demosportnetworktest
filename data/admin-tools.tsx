

import { UserInfo } from "@/components/admin/admin-form";
import { checkHasAuth } from "@/components/auth/use_auth";
import { db, firebaseApp } from "@/firebase";
import { async } from "@firebase/util";
import { getAuth } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { useState } from "react";

const auth = getAuth(firebaseApp)

export const addAthelete=async (userInfo:UserInfo)=>{
 
    
        const docRef = await addDoc(collection(db, 'athelets'), {
          ...userInfo,
          date_created:new Date()
        });
        return docRef;


    }

export const getAthelete=async(id:string)=>{

    const docRef = doc(db, 'athelets', id); 
    try {
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
          console.log('Document data:', docSnap.data());
          return docSnap.data();  // Return document data
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
}
export const getAllAthelete= async()=>{
        //const [athls,setAthls] = useState<any>([])
        const isOpen = checkHasAuth()
        console.log("check login",isOpen)
    
        const querySnapshot = await getDocs(collection(db, 'athelets'));
        const postsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
          }));
          console.log('all data get',postsData)
        //   setAthls(postsData);
        return postsData;
    }
        // Clear the input field
   

export const updateAthelet=async (props:{id_athelet:string,userInfo:UserInfo})=>{

 
        const docRef = doc(db, 'athelets', props.id_athelet);
        const updat = await updateDoc(docRef, {
          ...props.userInfo
        });

   
    
}

export const deleteAthelet=async(id_athelet:string)=>{
 
        const docRef = doc(db, 'athelets', id_athelet); // Replace 'posts' with your collection
        const deleteInfo= await deleteDoc(docRef);
        console.log('the delete',deleteInfo)
       
  
}
