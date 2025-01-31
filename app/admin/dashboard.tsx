// add private route 
// logout + bloque 
// assurere redirect into admin 
// the page admin layout 
// identification text + image chamops 
// modification text sur un endoit : post / delete / modify 
// apply on all the champs.
"use client"

import { useContext, useEffect, useState } from "react";
import { AdminContext } from "../layout";
import { useRouter, useSearchParams } from "next/navigation"; 
import { checkHasAuth, useAuth } from "@/components/auth/use_auth";
import AdminForm from "@/components/admin/admin-form";
import { getAuth } from "firebase/auth";
import { firebaseApp } from "@/firebase";
import { AthletProps } from "../athl/page";
import { getAthelete } from "@/data/admin-tools";




 const AdminDashboard =()=>{
    const  context = checkHasAuth();
    const [athlet,setAthlet]= useState<AthletProps>({city:'', description:'', name:'',image:''
          });
    const auth = getAuth(firebaseApp);
    const searchParams = useSearchParams();
    const id_ahlt = searchParams.get('id')



    useEffect(()=>{
        if(id_ahlt){
        const fetchAthlete = async () => {   
            const athleteData = await getAthelete(id_ahlt!) as AthletProps;
            if (athleteData) { // Await the promise
            setAthlet(athleteData);
            }
          }
        
        fetchAthlete();
        }
    },[id_ahlt])

  

    console.log("the auth in admin",auth,id_ahlt,athlet)
    console.log("the athlete in admin",athlet)
   
  
  
    const router = useRouter();
    useEffect(()=>{
        if(!context){
            router.push('/signin');
        }
    },[context,router])

    return(
        <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Enseigner toutes les informations d'un athlète.</h1>
          </div>
        <div className="admin-dashboard">
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

           <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
           <AdminForm athletInfo={athlet} id_athlet={id_ahlt}/>
        </div>
        </div>
    </div>
    </div>
    </div>
    </section>
    )
};


export default AdminDashboard;