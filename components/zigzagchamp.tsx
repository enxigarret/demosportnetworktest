import Image from 'next/image'

import FeatImage01 from '@/public/images/jorge1.jpg'
import FeatImage02 from '@/public/images/jorge2.jpg'
import FeatImage03 from '@/public/images/jorge3.jpg'
import Link from 'next/link'
import { infoAthlete } from '@/app/champions/page'


//to do: the list of athelets info.

export default function ZigzagChmap(athlete:any) {
  return (
    <>
          <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
                {/* <svg className="w-32 h-32 mb-18" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                  <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                  <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                  <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
                </svg> */}
                <div className="w-48 h-48 mb-18" >
                <Link href="/athl" className="block" aria-label="Cruip">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={180} height={135} alt="Features 01" />
              </Link>  					
                </div>

                <h4 className="h4 mb-2 text-gray-500">{athlete.city}</h4>
                {/* <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p> */}
              </div>

              </>



      

  )
  
}
