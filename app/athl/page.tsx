import Link from "next/link";
import Image from 'next/image';
import FeatImage01 from '@/public/images/jorge1.jpg';


export default function Athl(){
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
            <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage01} width={430} height={580} alt="Features 01" />
          </Link>  					
         </div>
         <div className="grid grid-cols-1 divide-y max-w-xl md:col-span-1 lg:col-span-1md:max-w-none md:w-full">
          <div>

          </div>
        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-purple-600 mb-2 mt-2">Ce que tu vas vivre</div>
                  <h3 className="h3 mb-3 text-black-800">Vivez votre handicap autrement.</h3>
                  {/* <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                  <ul className="text-lg text-gray-400 -mb-2">
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
                    </li>
                    {/* <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li> */}
                  </ul>
                </div>
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
