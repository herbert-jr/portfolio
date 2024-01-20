import BigDot from './BigDot'
import SmallDot from './SmallDot'

function Cursor() {
  return (
    <div className="hidden md:flex z-[9999] pointer-events-none fixed">
      <BigDot />
      <SmallDot />
    </div>
  )
}

export default Cursor
