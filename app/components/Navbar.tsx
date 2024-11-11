import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-pink-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Wild Earth</Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-green-200">Home</Link></li>
          <li><Link href="/episodes" className="hover:text-green-200">Episodes</Link></li>
          <li><Link href="/about" className="hover:text-green-200">About</Link></li>
        </ul>
      </div>
    </nav>
  )
}