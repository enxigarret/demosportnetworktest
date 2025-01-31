"use client"
import Link from "next/link";
import Image from 'next/image';
import FeatImage01 from '@/public/images/jorge1.jpg';
import { useRouter,useSearchParams } from "next/navigation";
import { getAthelete } from "@/data/admin-tools";
import { useEffect, useState } from "react";
import { checkHasAuth } from "@/components/auth/use_auth";

export interface AthletProps {
  city:string,
   
    description:string,

 
    name:string,
    image:string
  }



export default function Athl(){
  const [athlet,setAthlet]= useState<AthletProps>({city:'',
   
    description:'',
 
    name:'',
    image:''
  });
  const isAuthorized = checkHasAuth();
  const [imageUrl, setImageUrl] = useState<string>('');
  const searchParams = useSearchParams();
  // //const { query } = router;
  const id_athelet = searchParams.get('id')
  const athelet = getAthelete(id_athelet!)

  useEffect(()=>{
    const fetchAthlete = async () => {
    
        const athleteData = await athelet as AthletProps;
        if (athleteData) { // Await the promise
        setAthlet(athleteData);
        setImageUrl( athleteData.image); 
        }
      }
    
    fetchAthlete();
  },[])
 
   console.log("the query",athlet)
    return (
        <>
        <section className="mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20"></div>
         <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
         {/* <div className="grid gap-20"> */}
         <div className="md:grid md:grid-cols-2 md:gap-6 items-center">
        {/* <div className="w-32 h-32 mb-18" > */}
          <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-1 lg:col-span-1 mb-8  md:mb-0 md:order-0" data-aos="fade-up">

          <Link href="/athl" className="block" aria-label="Cruip">
            <Image className="max-w-full mx-auto md:max-w-none h-auto" src={imageUrl} width={430} height={580} alt="Features 01" />
          </Link>  					
         </div>
         <div className="grid grid-cols-1 divide-y max-w-xl md:col-span-1 lg:col-span-1md:max-w-none md:w-full">
          <div className="flex flex-col justify-items-start">
          <div className="flex flex-row place-items-center">

             {/* <h3 className="h3 mb-3 text-black-800 mr-3"> Thomas Numitor</h3> */}
             <h3 className="h3 mb-3 text-black-800 mr-3"> {athlet.name}</h3>
             <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path fill="currentColor" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"/>
    <path fill="#fff" d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"/>
</svg>
<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z"/>
</svg>
             <a className="text-purple-600 hover:text-gray-200 mb-3 transition duration-150 ease-in-out font-bold" >{athlet.city}</a>

          </div>
          <div className="flex flex-row place-items-center">
          <div className=" text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Rejoignez une communauté Handisport</div>
        
            </div>
            </div>
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2 mt-2">Ce que tu vas vivre</div>
                  <h4 className="h4 mb-3 text-black-800">Vivez votre handicap autrement.</h4>
                  {/* <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      {/* <span>Avoir des outils pour améliorer ses conditions de vie liées à son handicap.</span> */}
                      <span>{athlet.description}</span>

                    </li>



     
                    {/* <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Être accompagné en rejoignant une communauté de Para-athlètes pour mieux appréhender son handicap et renforcer son intégration dans la société et le regard de l'autre.</span>
                    </li> */}
                    {/* <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li> */}
                  </ul>
                </div>

             { isAuthorized &&  <Link href={`/admin?id=${id_athelet}`} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                           Modifier 
                         </Link>}
              </div>
              </div>
        {/* </div> */}
        </div>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}
