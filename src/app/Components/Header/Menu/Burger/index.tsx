import { Magnetic } from '@/app/Components/Common'

interface BurgerProps {
  isOpen: boolean
  onClick: () => void
}

function Burger({ isOpen, onClick }: BurgerProps) {
  return (
    <Magnetic>
      <span className="p-1 z-40">
        <button
          onClick={onClick}
          className="w-14 h-14 bg-burger relative flex flex-col items-center
          justify-center rounded-full transition-all duration-300 ease-in-out"
          data-hover="burger"
          data-open={isOpen}
        >
          <span
            data-open={isOpen}
            className="w-6 h-0.5 bg-copy-default absolute -translate-y-1 
            data-[open=true]:translate-y-0 data-[open=true]:rotate-45 
            transition-all duration-300 ease-in-out pointer-events-none"
          ></span>
          <span
            data-open={isOpen}
            className="w-6 h-0.5 bg-copy-default translate-y-1 
          data-[open=true]:translate-y-0 data-[open=true]:rotate-[315deg]
           transition-all duration-300 ease-in-out pointer-events-none"
          ></span>
        </button>
      </span>
    </Magnetic>
  )
}

export default Burger
