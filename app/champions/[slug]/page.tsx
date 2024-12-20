import Link from "next/link";
import Image from 'next/image';
import FeatImage01 from '@/public/images/jorge1.jpg';


export default function Athlete(){
    return (
        <>
        <section className="mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20"></div>
         <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
      
    
        <div className="w-32 h-32 mb-18" >
         <Link href="/athl" className="block" aria-label="Cruip">
         <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={180} height={135} alt="Features 01" />
        </Link>  					
        </div>
        </div>
        </div>
        </div>
        </section>
        </>
    )
}