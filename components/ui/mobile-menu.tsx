'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
  console.log('the click event,',mobileNavOpen,mobileNav?.current?.contains(target as Node),trigger.current?.contains(target as Node))
 // console.log("come to check",mobileNavOpen,mobileNav.current?.contains(target as Node),trigger.current.contains(target as Node))
      if (!mobileNav.current || !trigger.current) return;
      if ( trigger.current.contains(target as Node)) return;
      // For the click on menu, mobileNav.current.contains(target as Node) ||!mobileNavOpen || 
      setMobileNavOpen(false)
   

    };
     // Add the event listener here
       document.addEventListener('click', clickHandler);
  
    return () =>  {
      console.log("come hrer")
      document.removeEventListener('click', clickHandler)}
     
  },[])

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out bg-white border border-gray-300 shadow-lg rounded-lg"
        style={mobileNavOpen && mobileNav.current ? { maxHeight: mobileNav.current.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <ul className="bg-white px-4 py-2">
          {/* List items with dividers */}
          <li className="border-b border-gray-200 py-2">
            <Link
              href="/signup"
              className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
            >
              Ambassadeurs
            </Link>
          </li>
          <li className="border-b border-gray-200 py-2">
            <Link
              href="/entreprise"
              className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
            >
              Entreprise
            </Link>
          </li>
          <li className="border-b border-gray-200 py-2">
            <Link
              href="/"
              className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
            >
              Concept
            </Link>
          </li>
          <li className="py-2">
            <Link
              href="mailto:pasdeloup.jorge@gmail.com"
              className="font-medium w-full inline-flex items-center justify-center border border-transparent px-4 py-2 my-2 rounded-sm text-white bg-green-600 hover:bg-green-700 transition duration-150 ease-in-out" onClick={() => setMobileNavOpen(false)}
            >
              Réserver
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
