"use client"
import Link from 'next/link'
import MobileMenu from './mobile-menu'

import { AnimatePresence, motion } from "framer-motion";
import { useState } from 'react';

const Products = () => {
  return (
    <div>
      <div className="flex gap-4">
        <div>
          {/* <h3 className="mb-2 text-sm font-medium">Startup</h3> */}
          <a href="#" className="mb-1 block text-sm text-neutral-400">
           Athlétisme
          </a>
          <a href="#" className="block text-sm text-neutral-400">
          Badminton sourds
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
          Cyclisme
          </a>
          <a href="#" className="block text-sm text-neutral-400">
          Boccia
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
          Boules et pétanque sourds
          </a>
          <a href="#" className="block text-sm text-neutral-400">
          Bowling sourds
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
          Canoë-kayak
          </a>
          <a href="#" className="block text-sm text-neutral-400">
          Cécifoot (foot à 5 DV)
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
          Basket-ball
          </a>
          <a href="#" className="block text-sm text-neutral-400">
          Danse
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
          Développé couché & Musculation
          </a>
          <a href="#" className="block text-sm text-neutral-400">
          Équitation
          </a>
          <a href="#" className="mb-1 block text-sm text-neutral-400">
          Escrime
          </a>
          <a href="#" className="block text-sm text-neutral-400">
          Foot fauteuil électrique
          </a>
          <a href="#" className="block text-sm text-neutral-400">
          Football sourds
          </a>
          <a href="#" className="block text-sm text-neutral-400">
          FUTSAL
          </a>
          <a href="#" className="block text-sm text-neutral-400">
          Goalball
          </a>
          <a href="#" className="block text-sm text-neutral-400">
          Handball Sourds
          </a>
        </div>
        </div>
        </div>
    )}


const ButtonHover =({selected}:{selected:boolean})=>{
  return(
    <motion.div
    id="overlay-content"
    initial={{
      opacity: 0,
      y: 8,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    exit={{
      opacity: 0,
      y: 8,
    }}
    className={`absolute left-0 top-[calc(100%_+_24px)] w-96 rounded-lg border border-neutral-600 bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-4 ${selected?"visible":"invisible"}`}
  >
    <div className="overflow-hidden" >
    {selected  && (
      <motion.div
        initial={{
          opacity: 0,
          x:  0,
        }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        <Products />
      </motion.div>
    )}
    
  </div>
  </motion.div>
  )
}

export default function Header() {
  const [selected, setSelected] = useState(false);


  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg className="w-8 h-8 fill-current text-purple-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.952 14.751a260.51 260.51 0 00-4.359-4.407C23.932 6.734 20.16 3.182 16.171 0c1.634.017 3.21.28 4.692.751 3.487 3.114 6.846 6.398 10.163 9.737.493 1.346.811 2.776.926 4.262zm-1.388 7.883c-2.496-2.597-5.051-5.12-7.737-7.471-3.706-3.246-10.693-9.81-15.736-7.418-4.552 2.158-4.717 10.543-4.96 16.238A15.926 15.926 0 010 16C0 9.799 3.528 4.421 8.686 1.766c1.82.593 3.593 1.675 5.038 2.587 6.569 4.14 12.29 9.71 17.792 15.57-.237.94-.557 1.846-.952 2.711zm-4.505 5.81a56.161 56.161 0 00-1.007-.823c-2.574-2.054-6.087-4.805-9.394-4.044-3.022.695-4.264 4.267-4.97 7.52a15.945 15.945 0 01-3.665-1.85c.366-3.242.89-6.675 2.405-9.364 2.315-4.107 6.287-3.072 9.613-1.132 3.36 1.96 6.417 4.572 9.313 7.417a16.097 16.097 0 01-2.295 2.275z" />
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signup"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Ambassadeurs
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Entreprise
                </Link>
              </li>
              <li  onMouseLeave={() => setSelected(false)}  onMouseEnter={() => setSelected(true)}>
                <div  className="relative flex h-fit gap-2">
                <Link
                  href="/list"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Handisports
                  
                </Link>
                <AnimatePresence>
                    <ButtonHover selected={selected} />
                </AnimatePresence>
                </div>
             
              </li>
              <li>
                <Link
                  href="/"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Concept
                </Link>
              </li>
              <li>
                <Link
                  href="/list"
                  className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Réserver
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-green-600 hover:bg-green-700 ml-3">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
