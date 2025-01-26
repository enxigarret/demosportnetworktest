// add private route 
// logout + bloque 
// assurere redirect into admin 
// the page admin layout 
// identification text + image chamops 
// modification text sur un endoit : post / delete / modify 
// apply on all the champs.
"use client"

import { useContext, useEffect } from "react";
import { AdminContext } from "../layout";
import { useRouter } from "next/navigation"; 
import { checkHasAuth, useAuth } from "@/components/auth/use_auth";




 const AdminDashboard =()=>{
    const  context = checkHasAuth();
   
  
  
    const router = useRouter();
    useEffect(()=>{
        if(!context){
            router.push('/signin');
        }
    },[context,router])

    return(
        <div className="admin-dashboard">
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

           <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" name="city" />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <textarea id="description" name="description"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    </div>
    )
};


export default AdminDashboard;