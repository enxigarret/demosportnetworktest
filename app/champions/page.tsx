'use client';
import AthleteProfile from "@/components/athleteprofile";
import HeroChamp from "@/components/hero-champ";
import Zigzag from "@/components/zigzag";
import ZigzagChmap from "@/components/zigzagchamp";
import { getAllAthelete } from "@/data/admin-tools";

export interface infoAthlete {

city:string;

date_created:Date;

description:string;

id:string;

name:string;


}

export default async function Champions() {

  const allAthelets = await getAllAthelete();
  console.log('all atheltes',allAthelets)
  if(!allAthelets){
    return <p>Loading</p>
  }
    return (
      <>
          <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Les Portraits</div>

            {/* <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p> */}
          </div>

          {/* Items */}
          {/* <div className="grid gap-20"> */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-6 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

         {allAthelets &&
            allAthelets.map((athlete)=>{
              return(
                <>
                 <AthleteProfile athlete={athlete} />
           
               </>
            )
          })
         
      }
       
      
     
      </div>

       </div>
      <div className="py-12 md:py-20 border-t border-gray-800">

  {/* Section header */}
           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Les Services</div>

    {/* <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p> */}
                 </div>

  {/* Items */}


            </div>
        </div>
      </section>
    
      </>
    )
  }