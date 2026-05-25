import { Link } from 'react-router-dom'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useFavorites } from '../context/FavoritesContext'
import type { Dragon } from '../services/DragonService'

interface Props {
  dragon: Dragon
}

const typeColors: Record<string, string> = {
  fire: 'border-red-500 text-red-400',
  water: 'border-blue-500 text-blue-400',
  ice: 'border-blue-400 text-blue-300',
  electric: 'border-yellow-500 text-yellow-400',
  dark: 'border-purple-900 text-purple-400',
  ghost: 'border-purple-700 text-purple-300',
  dragon: 'border-purple-800 text-purple-400',
  grass: 'border-green-500 text-green-400',
  poison: 'border-purple-500 text-purple-400',
  psychic: 'border-pink-500 text-pink-400',
  flying: 'border-sky-400 text-sky-300',
  fighting: 'border-red-700 text-red-400',
  ground: 'border-amber-600 text-amber-400',
  rock: 'border-stone-500 text-stone-400',
  bug: 'border-lime-500 text-lime-400',
  steel: 'border-slate-400 text-slate-300',
  fairy: 'border-pink-400 text-pink-300',
  normal: 'border-gray-400 text-gray-300',
}

function getCardBorder(types: string[]): string {
  const main = types[0] || 'normal'
  if (types.includes('fire')) return 'border-red-500'
  if (types.includes('electric')) return 'border-yellow-500'
  if (types.includes('ice') || types.includes('water')) return 'border-blue-500'
  if (types.includes('dark') || types.includes('ghost') || types.includes('dragon')) return 'border-purple-800'
  return typeColors[main]?.split(' ')[0] || 'border-gray-700'
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
  const typeNames = dragon.types.map(t => t.type.name)
  const cardBorder = getCardBorder(typeNames)

  return (
    <Link to={`/dragon/${dragon.name}`} className="block">
      <div className={`bg-gray-800 rounded-lg p-5 border-2 ${cardBorder} hover:opacity-90 transition-colors`}>
        <div className="relative">
          <img src={image} alt={dragon.name} className="w-full h-44 object-contain" />
          <button onClick={toggleFavorite} className="absolute top-0 right-0 text-lg">
            {favorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />}
          </button>
        </div>
        <h3 className="text-lg font-semibold capitalize text-center mt-2">{dragon.name}</h3>
        <div className="flex gap-2 justify-center mt-1 flex-wrap">
          {dragon.types.map(t => (
            <span key={t.type.name} className={`text-xs capitalize ${typeColors[t.type.name]?.split(' ')[1] || 'text-gray-400'}`}>
              {t.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
