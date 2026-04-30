import { cn } from '../../../../../../lib/clsx'

interface NavMobileButtonProps {
  id: string
  label: string
  active: string
  onScroll: (id: string) => void
}

const NavMobilButtonHeader = ({ id, label, active, onScroll }: NavMobileButtonProps) => {
  return (
    <>
      <button
        onClick={() => onScroll(id)}
        className={cn(
          'font-primary p-0 text-sm text-black/65',
          active === id && 'active text-black'
        )}>
        {label}
      </button>
    </>
  )
}

export default NavMobilButtonHeader
