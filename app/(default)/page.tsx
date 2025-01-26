export const metadata = {
  title: 'Home - Open PRO',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import HeroChamp from '@/components/hero-champ'
import Blocks from '@/components/blocks'
import BlockMaintenance from '@/components/block-maintenance'

import Entreprises from '@/components/entreprise'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />


    

      <Zigzag />
      {/* <Testimonials />
      <Newsletter /> */}
    </>
  )
}


//the login 
//add router priviate for admin page
//page admin athelete
//page admin : text : ajouter, supprimer, modifier text
//page admin : image : ajouter, supprimer, image 
//page list de athelete 
