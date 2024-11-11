import Link from 'next/link'
import Image from 'next/image'
import { Play } from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Wild Earth Documentaries</h1>
        <p className="text-xl mb-6">Explore the wonders of nature through our captivating documentary series.</p>
        <Link href="/episodes" className="bg-green-600 text-white px-6 py-2 rounded-full inline-flex items-center hover:bg-green-700">
          <Play size={20} className="mr-2" />
          Watch Now
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Featured Episode</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative w-full h-64">
            <Image 
              src="/trees.jpg" 
              alt="Featured Episode" 
              layout="fill" 
              objectFit="cover" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">The Secret Life of Trees</h3>
            <p className="text-gray-600 mb-4">Discover the hidden world of forest communication and how trees support each other.</p>
            <Link href="/episodes/1" className="text-green-600 hover:underline">Watch Episode &rarr;</Link>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">About Our Series</h2>
        <p className="text-gray-700 mb-4">
          Wild Earth Documentaries takes you on a journey through the most fascinating ecosystems on our planet. 
          From the depths of the oceans to the heights of the mountains, we explore the intricate relationships 
          between plants, animals, and their environments.
        </p>
        <Link href="/about" className="text-green-600 hover:underline">Learn More &rarr;</Link>
      </section>
    </div>
  )
}
