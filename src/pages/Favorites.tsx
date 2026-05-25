import { useFavorites } from '../context/FavoritesContext'
import DragonList from '../components/DragonList'
import EmptyState from '../components/EmptyState'

export default function Favorites() {
  const { favorites } = useFavorites()

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-400">Mis Favoritos</h1>
      {favorites.length === 0 ? <EmptyState /> : <DragonList dragons={favorites} />}
    </div>
  )
}
