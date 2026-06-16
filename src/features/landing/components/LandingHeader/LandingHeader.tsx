'use client'

import { useState ,useEffect } from 'react'

import { Avatar } from '@heroui/react'

import AvatarNameHeader from '@/logic/extractNameInitials'
import NavMainButton from './components/NavButtonHeader/NavMainButtonHeader'
import { NavMobilButtonHeader } from './components/NavMobilButtonHeader/NavMobilButtonHeader'

const LandingHeader = () => {
  const [active, setActive] = useState('inicio')

  const scrollToSection = (id: string) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

    useEffect(()=>{

    const sections = ['inicio', 'mixwish', 'preview','remixes']

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (const id of sections) {

        const section = document.getElementById(id)
        if (!section) continue

        const top = section.offsetTop
        const height = section.offsetHeight

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActive(id)
          break
        }

      }
    }

    handleScroll()
    window.addEventListener('scroll',handleScroll)

    return ()=> window.removeEventListener('scroll',handleScroll)
  },[])

  return (
    <div>
      <header className="bg-primary fixed inset-x-0 z-50 mx-auto flex h-16 w-full max-w-[1920px] flex-col max-[850px]:justify-between">
        <div className="grid h-full grid-cols-3 items-center max-[850px]:grid-cols-2">
          <h1 className="font-secondary ml-14 text-2xl italic max-[850px]:-mb-2 max-[850px]:ml-6 max-[850px]:text-lg">
            WishFactory
          </h1>

          <nav className="flex w-full justify-center gap-12 max-[850px]:hidden">
            <NavMainButton id="inicio" label="Inicio" active={active} onScroll={scrollToSection} />
            <NavMainButton
              id="preview"
              label="Preview"
              active={active}
              onScroll={scrollToSection}
            />
            <NavMainButton
              id="remixes"
              label="Remixes"
              active={active}
              onScroll={scrollToSection}
            />
            <NavMainButton
              id="mixwish"
              label="MixWish"
              active={active}
              onScroll={scrollToSection}
            />
          </nav>

          <div className="flex items-center justify-end max-[850px]:gap-2">
            <Avatar className="mr-12 aspect-square shadow-sm max-[850px]:mr-0 max-[850px]:h-[2rem] max-[850px]:w-[2rem] max-[850px]:shadow-xs">
              <Avatar.Fallback className="">{AvatarNameHeader('Yariel Zamora')}</Avatar.Fallback>
            </Avatar>

            <NavMobilButtonHeader
              buttonClass="hidden max-[850px]:flex max-[850px]:mr-4"
              scrollToSection={scrollToSection}
            />
          </div>
        </div>
      </header>
    </div>
  )
}

export default LandingHeader
