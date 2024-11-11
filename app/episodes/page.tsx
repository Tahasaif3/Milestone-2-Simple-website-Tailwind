import Link from 'next/link'
import Image from 'next/image'

const episodes = [
  { 
    id: 1, 
    title: "The Secret Life of Trees", 
    description: "Discover the hidden world of forest communication.",
    image: "/trees.jpg" 
  },
  { 
    id: 2, 
    title: "Ocean Giants", 
    description: "Explore the lives of whales and other marine mammals.",
    image: "/Monique-Baer-©-Wild-Earth-Expeditions-097.jpg" 
  },
  { 
    id: 3, 
    title: "Savanna Survivors", 
    description: "Learn about the animals adapting to life in the African grasslands.",
    image: "/savanna.jpeg" 
  },
  { 
    id: 4, 
    title: "Mountain Mysteries", 
    description: "Uncover the secrets of high-altitude ecosystems.",
    image: "/mountain.webp"
  },
  { 
    id: 5, 
    title: "Deep Sea Wonders", 
    description: "Venture into the mysterious depths of the ocean to uncover its hidden creatures.",
    image: "/sea.jpg"
  },
  { 
    id: 6, 
    title: "Jungle Giants", 
    description: "Explore the largest trees and animals in the tropical rainforests.",
    image: "/jungle.webp"
  }
]

export default function Episodes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Episodes</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {episodes.map((episode) => (
          <div key={episode.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-48">
              <img 
                src={episode.image} 
                alt={episode.title} 
                className="object-cover w-full h-full" 
              />
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{episode.title}</h2>
              <p className="text-gray-600 mb-4">{episode.description}</p>
              <Link href={`/episodes/${episode.id}`} className="text-green-600 hover:underline">
                Watch Now &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
