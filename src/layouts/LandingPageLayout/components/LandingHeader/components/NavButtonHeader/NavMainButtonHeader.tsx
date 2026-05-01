import { cn } from '../../../../../../lib/clsx'
import './styles/NavButtonHeader.css'

interface NavMainButtonProps {
  id: string
  label: string
  active: string
  onScroll: (id: string) => void
}

const NavMainButton = ({ id, label, active, onScroll }: NavMainButtonProps) => {
  return (
    <>
      <button
        onClick={() => onScroll(id)}
        className={cn(
          'nav-button font-secondary p-0 text-lg text-black/75',
          active === id && 'active text-black'
        )}>
        {label}
      </button>
    </>
  )
}

export default NavMainButton
