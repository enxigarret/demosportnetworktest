import Image from 'next/image'

import FeatImage01 from '@/public/images/jorge1.jpg'
import FeatImage02 from '@/public/images/jorge2.jpg'
import FeatImage03 from '@/public/images/jorge3.jpg'
import Link from 'next/link'


//to do: the list of athelets info.

export default function ZigzagChmap() {
  return (
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

                <h4 className="h4 mb-2 text-gray-500">Lyon</h4>
                {/* <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p> */}
              </div>

            {/* 1st item */}
            {/* <div className="md:grid md:grid-cols-12 md:gap-6 items-center"> */}
              {/* Image */}
              {/* <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={540} height={405} alt="Features 01" />
              </div> */}
              {/* Content */}
              {/* <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">More speed. Less spend</div> */}
                  {/* <h3 className="h3 mb-3 text-black-800">Conférences et Tables ronde</h3> */}
                  {/* <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                  {/* <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Avoir des outils pour améliorer ses conditions de vie liées à son handicap.</span>
                    </li>
                    <li className="flex items-center mb-2">
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
                  {/* </ul>
                </div> */}
              {/* </div>
            </div> */}

            {/* 2nd item */}
     

            {/* 3rd item */}
      

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
  )
}
