import { useState } from 'react'

import { Avatar } from '@heroui/react'

import AvatarNameHeader from './logic/extractNameInitials'
import NavMainButton from './components/NavButtonHeader/NavMainButtonHeader'
import NavMobilButtonHeader from './components/NavMobilButtonHeader/NavMobilButtonHeader'

const LandingHeader = () => {
  const [active, setActive] = useState('inicio')

  const scrollToSection = (id: string) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <header className="bg-primary fixed inset-x-0 mx-auto flex h-16 w-full max-w-[1920px] flex-col max-[850px]:justify-between">
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

          <div className="flex justify-end">
            <Avatar className="mr-12 aspect-square shadow-sm max-[850px]:mr-6 max-[850px]:h-[2rem] max-[850px]:w-[2rem] max-[850px]:shadow-xs">
              <Avatar.Fallback className="">{AvatarNameHeader('Yariel Zamora')}</Avatar.Fallback>
            </Avatar>
          </div>
        </div>

        <nav className="bg-secondary mx-auto hidden w-full justify-around max-[850px]:flex">
          <div className="mx-auto flex w-11/12 items-center justify-around">
            <NavMobilButtonHeader
              id="inicio"
              label="Inicio"
              active={active}
              onScroll={scrollToSection}
            />
            <NavMobilButtonHeader
              id="preview"
              label="Preview"
              active={active}
              onScroll={scrollToSection}
            />
            <NavMobilButtonHeader
              id="remixes"
              label="Remixes"
              active={active}
              onScroll={scrollToSection}
            />
            <NavMobilButtonHeader
              id="mixwish"
              label="MixWish"
              active={active}
              onScroll={scrollToSection}
            />
          </div>
        </nav>
      </header>
    </div>
  )
}

export default LandingHeader
