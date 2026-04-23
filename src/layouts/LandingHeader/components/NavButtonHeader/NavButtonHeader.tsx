import './styles/NavButtonHeader.css'
import { Button } from '@heroui/react'

interface NavButtonProps{
  id:string,
  label:string,
  active: string,
  onScroll: (id: string) => void
}

const NavButton = ({ id, label , active , onScroll }:NavButtonProps) => {
    
    return (
      <Button
        onClick={() => onScroll(id)}
        className={`nav-button sm:text-[0.1rem] md:text-[1rem]  p-0 ${active === id ? 'active' : ''}`}
      >
        {label}
      </Button>
    )
  }

export default NavButton