import Link from 'next/link'

export default function Navbar() {
  return (
    <nav>
      <div>
        <Link legacyBehavior href='/'>
          Coder Wikipedia
        </Link>
      </div>
      <div>
        <Link legacyBehavior href='/about'>
          About
        </Link>
        <Link legacyBehavior href='/coders'>
          All Coders
        </Link>
      </div>
    </nav>
  )
}
