interface ContainerProps {
  children: React.ReactNode
}

function Container({ children }: ContainerProps) {
  return (
    <header
      className="w-screen h-24 flex items-center justify-between 
  px-5 fixed top-0 left-0 z-30"
    >
      {children}
    </header>
  )
}

export default Container
