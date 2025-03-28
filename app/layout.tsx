"use client"

import './css/style.css'

import { Inter, Architects_Daughter } from 'next/font/google'
import { createContext, useContext, useState } from 'react';



import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap'
})

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

interface AdminContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AdminContext = createContext<AdminContextType | undefined>({isOpen:false,setIsOpen:()=>false});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const [isOpen, setIsOpen] = useState(false);
  return (
    <html lang="en">
      <head>
      <script type="text/javascript" id="hs-script-loader" async defer src="//js-na1.hs-scripts.com/49019076.js"></script>
      </head>
      <body className={`${inter.variable} ${architects_daughter.variable} font-inter antialiased bg-white text-gray-200 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden">
     
          <Header />
            <AdminContext.Provider value={{ isOpen,setIsOpen }}>
                {children}
           </ AdminContext.Provider >
            
          <Banner />
        </div>
      </body>
    </html>
  )
}
 