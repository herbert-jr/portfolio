import Link from 'next/link'

interface LinkItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  title: string
  link: string
}

function LinkItem({ title, link, ...props }: LinkItemProps) {
  return (
    <Link
      href={link}
      {...props}
      className="w-fit flex items-center justify-center gap-3 text-7xl font-medium group
       -translate-x-12 transition-transform duration-200 ease-in-out hover:translate-x-0"
    >
      <svg
        width="38"
        height="38"
        viewBox="0 0 38 38"
        fill="none"
        className="opacity-0 group-hover:opacity-100 transition-opacity
         duration-400 ease-in-out"
      >
        <circle cx="19" cy="19" r="18.5" stroke="var(--copy)"></circle>
        <path
          d="M16.2953 14.025C18.2334 16.3871 20.8199 17.8654 24.0675 18.8234C20.8946 20.0056 18.4176 21.6606 16.6489 24.1522"
          stroke="var(--copy)"
          strokeLinejoin="bevel"
        ></path>
      </svg>
      <span
        className="group-hover:text-copy-default transition-colors
       duration-200"
      >
        {title}
      </span>
    </Link>
  )
}

export default LinkItem
