import { useFavorites } from '../context/FavoritesContext'
import DragonList from '../components/DragonList'
import EmptyState from '../components/EmptyState'
import { FaHeart } from 'react-icons/fa'

export default function Favorites() {
  const { favorites } = useFavorites()

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center gap-3">
        <FaHeart className="text-red-500" />
        <span className="text-yellow-400">Mis Favoritos</span>
      </h1>
      {favorites.length === 0 ? <EmptyState /> : <DragonList dragons={favorites} />}
    </div>
  )
}
