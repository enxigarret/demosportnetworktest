import FeatImage01 from '@/public/images/features-03-image-01.png'
import Image from 'next/image'

import VideoThumb from '@/public/images/photo_badminton.jpeg'
import ModalVideo from '@/components/modal-video'

export default function Features() {

  
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-20">
            <h2 className="h2 mb-4 text-black-800">Notre sportif du moment</h2>
            <p className="text-xl text-gray-400">Découvrez le handisport à travers Hugo Barbotin</p>
          </div>
          <div className="max-w-max mx-auto sm:max-w-none sm:flex sm:justify-center sm:w-auto pb-4">
             <button >
                <a className="btn text-white bg-gray-700 hover:bg-purple-700 w-full sm:w-auto sm:ml-4" href="/champions" >Découvrir les ambassadeurs </a>
             </button>
          </div>

          {/* Items */}
          {/* <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks> */}
          <div className="relative pt-0 pb-10 md:pt-0 md:pb-16 sm:w-auto w-full">
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />
            {/* 1st item */}
     
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="mx-auto md:max-w-none h-auto" src={FeatImage01} width={230} height={180} alt="Features 01" />
              <h4 className="h4 mb-2">Jade MARECHAL</h4>
              <p className="text-lg text-gray-400 text-center">Escrime</p>
              <p className="text-lg text-gray-400 text-center">2x Championne d’Europe en équipes</p>
            </div> */}

            {/* 2nd item */}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100" data-aos-anchor="[data-aos-id-blocks]">
            <Image className="mx-auto md:max-w-none h-auto" src={FeatImage01} width={230} height={180} alt="Features 01" />
         
              <h4 className="h4 mb-2">Morgan CHARRIERE</h4>
              <p className="text-lg text-gray-400 text-center">MMA</p>
              <p className="text-lg text-gray-400 text-center">Champion du Cage Warriors +20 victoires en professionnel</p>
            </div> */}

            {/* 3rd item */}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-blocks]">
              
            <Image className="mx-auto md:max-w-none h-auto" src={FeatImage01} width={230} height={180} alt="Features 01" />

              <h4 className="h4 mb-2">Camille LACOURT</h4>
              <p className="text-lg text-gray-400 text-center">MMA</p>
              <p className="text-lg text-gray-400 text-center">5x Champion du Monde5x Champion d’Europe 14x Champion de France</p>
            </div> */}

                        {/* buttton */}
                        <div className="max-w-12xl mx-auto px-4 sm:px-6">

{/* Section header */}
{/* <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">


                <a className="btn text-white bg-gray-700 hover:bg-gray-800 w-full sm:w-auto sm:ml-auto" href="#0">Découvrir les ambassadeurs</a>
              </div> */}
            </div>

            {/* 4th item
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5" />
                  <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div>

            {/* 5th item */}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100" d="M29 42h10.229a2 2 0 001.912-1.412l2.769-9A2 2 0 0042 29h-7v-4c0-2.373-1.251-3.494-2.764-3.86a1.006 1.006 0 00-1.236.979V26l-5 6" />
                  <path className="stroke-current text-purple-300" d="M22 30h4v12h-4z" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div> */}

            {/* 6th item */}
            {/* <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="500" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-300" d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415" />
                  <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3" />
                  <path className="stroke-current text-purple-100" d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948" />
                </g>
              </svg>
              <h4 className="h4 mb-2">Instant Features</h4>
              <p className="text-lg text-gray-400 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.</p>
            </div> */} 

          </div>

        </div>
      </div>
    </section>
  )
}
