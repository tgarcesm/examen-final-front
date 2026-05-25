import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FaHeart, FaRegHeart, FaArrowLeft } from 'react-icons/fa'
import { fetchDragonDetail } from '../services/DragonService'
import type { Dragon } from '../services/DragonService'
import { useFavorites } from '../context/FavoritesContext'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

export default function DragonDetail() {
  const { name } = useParams<{ name: string }>()
  const [dragon, setDragon] = useState<Dragon | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { addFavorite, removeFavorite, isFavorite } = useFavorites()

  useEffect(() => {
    const cargar = async () => {
      try {
        if (!name) return
        const data = await fetchDragonDetail(name)
        setDragon(data)
      } catch (err) {
        setError('Error al cargar el detalle')
      } finally {
        setLoading(false)
      }
    }
    cargar()
  }, [name])

  if (loading) return <Loader />
  if (error) return <ErrorMessage message={error} onRetry={() => window.location.reload()} />
  if (!dragon) return <ErrorMessage message="No se encontró el dragón" />

  const image = dragon.sprites.other['official-artwork'].front_default
  const favorite = isFavorite(dragon.name)

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(dragon.name)
    } else {
      addFavorite(dragon)
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 mb-6 transition-colors">
        <FaArrowLeft />
        Volver
      </Link>

      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src={image}
            alt={dragon.name}
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
          />
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <h1 className="text-3xl font-bold capitalize">{dragon.name}</h1>
              <button
                onClick={toggleFavorite}
                className="text-2xl hover:scale-125 transition-transform"
              >
                {favorite ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-400 hover:text-red-400" />
                )}
              </button>
            </div>

            <div className="mb-4">
              <h2 className="text-sm text-gray-400 uppercase mb-1">Tipos</h2>
              <div className="flex gap-2 justify-center md:justify-start">
                {dragon.types.map(t => (
                  <span key={t.type.name} className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm capitalize">
                    {t.type.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <h2 className="text-sm text-gray-400 uppercase mb-1">Habilidades</h2>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {dragon.abilities.map(a => (
                  <span key={a.ability.name} className="px-3 py-1 bg-gray-700 rounded-full text-sm capitalize">
                    {a.ability.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-sm text-gray-400 uppercase mb-3">Estadísticas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {dragon.stats.map(s => (
              <div key={s.stat.name} className="flex items-center gap-3">
                <span className="text-sm capitalize w-32 text-gray-300">{s.stat.name}</span>
                <div className="flex-1 bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-yellow-400 h-3 rounded-full transition-all"
                    style={{ width: `${Math.min(100, (s.base_stat / 150) * 100)}%` }}
                  ></div>
                </div>
                <span className="text-sm font-semibold w-8 text-right">{s.base_stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
