import Link from 'next/link'
import { Magnetic } from '../../Common'

function Logo() {
  return (
    <Magnetic>
      <Link
        href="/"
        className="w-fit h-fit p-1 uppercase text-lg flex flex-col items-start
       justify-center font-semibold font-dm-sans"
        data-hover="none"
      >
        <div className="flex items-center justify-center gap-px -mb-2.5 pointer-events-none">
          dev{' '}
          <span className="w-6 h-0.5 bg-primary-default ml-1 pointer-events-none"></span>
        </div>
        <div className="pl-2.5 pointer-events-none">junior</div>
      </Link>
    </Magnetic>
  )
}

export default Logo
