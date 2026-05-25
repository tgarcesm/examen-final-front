import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useFavorites } from '../context/FavoritesContext'
import type { Dragon } from '../services/DragonService'

interface Props {
  dragon: Dragon
}

export default function DragonCard({ dragon }: Props) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()
  const favorite = isFavorite(dragon.name)

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    if (favorite) {
      removeFavorite(dragon.name)
    } else {
      addFavorite(dragon)
    }
  }

  const image = dragon.sprites.other['official-artwork'].front_default
  const types = dragon.types.map(t => t.type.name).join(', ')

  return (
    <Link to={`/dragon/${dragon.name}`} className="block">
      <div className="bg-gray-800 rounded-xl p-4 hover:bg-gray-750 hover:shadow-lg hover:shadow-yellow-400/10 transition-all border border-gray-700 hover:border-yellow-400/50">
        <div className="relative">
          <img
            src={image}
            alt={dragon.name}
            className="w-full h-40 object-contain mx-auto"
          />
          <button
            onClick={toggleFavorite}
            className="absolute top-0 right-0 text-xl p-2 hover:scale-125 transition-transform"
          >
            {favorite ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-400 hover:text-red-400" />
            )}
          </button>
        </div>
        <h3 className="text-lg font-semibold capitalize mt-2 text-center">{dragon.name}</h3>
        <p className="text-sm text-gray-400 text-center capitalize">{types}</p>
      </div>
    </Link>
  )
}
