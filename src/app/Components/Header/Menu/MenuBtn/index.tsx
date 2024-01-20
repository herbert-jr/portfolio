import { Magnetic } from '@/app/Components/Common'

interface MenuBtnProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function MenuBtn({ open, setOpen }: MenuBtnProps) {
  return (
    <Magnetic>
      <span className="z-50 p-1">
        <button
          className="w-12 h-12 border border-burger rounded-full
       relative data-[active=true]:bg-background data-[active=true]:border-transparent 
       transition-all duration-500 ease-in-out"
          onClick={() => setOpen(!open)}
          data-active={open}
        >
          <span
            className="w-4 h-px bg-burger absolute -translate-x-2 -translate-y-1 
        data-[active=true]:translate-y-0 data-[active=true]:rotate-45
        transition-all duration-500 ease-in-out"
            data-active={open}
          ></span>
          <span
            className="w-4 h-px bg-burger absolute -translate-x-2 translate-y-1 
        data-[active=true]:translate-y-0 data-[active=true]:-rotate-45
        transition-all duration-500 ease-in-out"
            data-active={open}
          ></span>
        </button>
      </span>
    </Magnetic>
  )
}

export default MenuBtn
