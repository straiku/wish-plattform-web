import { useState } from 'react'

import {Avatar} from '@heroui/react'

import AvatarNameHeader from './components/AvatarNameHeader/AvatarNameHeader'
import NavButton from './components/NavButtonHeader/NavButtonHeader'

const Header=()=>{

  const [active, setActive] = useState('inicio')

  const scrollToSection = (id: string) => {
    setActive(id)

    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className='w-full box-border bg-pink-100 border-none sm:p-0 md:p-2 flex justify-around items-center'>
    
      <h1 className='font-secondary italic sm:text-[0.4rem] md:text-[1.1rem]'>WishFactory</h1>

      <nav className='w-[60%]  flex justify-between'>
        <NavButton id='inicio' label='Inicio' active={active} onScroll={scrollToSection} />
        <NavButton id='preview' label='Preview' active={active} onScroll={scrollToSection} />
        <NavButton id='remixes' label='Remixes' active={active} onScroll={scrollToSection} />
        <NavButton id='filosofia' label='Filosofía' active={active} onScroll={scrollToSection} />
      </nav>

      <Avatar className='w-5 h-5 shadow-sm'>
        <Avatar.Fallback  className='text-[0.6rem]'>{AvatarNameHeader('Lianni Quick')}</Avatar.Fallback>
      </Avatar>
      
    </div>
  )
}

export default Header