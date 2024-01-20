import Link from 'next/link'
import { Magnetic } from '../../Common'

function Logo() {
  return (
    <Magnetic>
      <Link
        href="/"
        className="w-fit h-full uppercase text-lg flex flex-col items-start
       justify-center font-semibold font-dm-sans"
        data-hover="none"
        id="logo"
      >
        <div className="flex items-center justify-center gap-px -mb-2.5">
          dev <span className="w-6 h-0.5 bg-primary-default ml-1"></span>
        </div>
        <div className="pl-2.5">junior</div>
      </Link>
    </Magnetic>
  )
}

export default Logo
