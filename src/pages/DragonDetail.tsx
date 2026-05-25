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
      <Link to="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6">
        <FaArrowLeft />
        Volver
      </Link>

      <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src={image} alt={dragon.name} className="w-48 h-48 object-contain" />
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <h1 className="text-3xl font-bold capitalize">{dragon.name}</h1>
              <button onClick={toggleFavorite} className="text-2xl">
                {favorite ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400" />}
              </button>
            </div>

            <div className="mb-4">
              <h2 className="text-sm text-gray-400 mb-1">Tipos</h2>
              <div className="flex gap-2 justify-center md:justify-start">
                {dragon.types.map(t => {
                  const colors: Record<string, string> = {
                    fire: 'bg-red-500/20 text-red-400',
                    water: 'bg-blue-500/20 text-blue-400',
                    ice: 'bg-blue-400/20 text-blue-300',
                    electric: 'bg-yellow-500/20 text-yellow-400',
                    dark: 'bg-purple-900/20 text-purple-400',
                    ghost: 'bg-purple-700/20 text-purple-300',
                    dragon: 'bg-purple-800/20 text-purple-400',
                    grass: 'bg-green-500/20 text-green-400',
                    poison: 'bg-purple-500/20 text-purple-400',
                    psychic: 'bg-pink-500/20 text-pink-400',
                    flying: 'bg-sky-400/20 text-sky-300',
                    fighting: 'bg-red-700/20 text-red-400',
                    ground: 'bg-amber-600/20 text-amber-400',
                    rock: 'bg-stone-500/20 text-stone-400',
                    bug: 'bg-lime-500/20 text-lime-400',
                    steel: 'bg-slate-400/20 text-slate-300',
                    fairy: 'bg-pink-400/20 text-pink-300',
                    normal: 'bg-gray-400/20 text-gray-300',
                  }
                  return (
                    <span key={t.type.name} className={`px-3 py-1 rounded-full text-sm capitalize ${colors[t.type.name] || 'bg-gray-400/20 text-gray-300'}`}>
                      {t.type.name}
                    </span>
                  )
                })}
              </div>
            </div>

            <div>
              <h2 className="text-sm text-gray-400 mb-1">Habilidades</h2>
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

        <div className="mt-6 border-t border-gray-700 pt-6">
          <h2 className="text-sm text-gray-400 mb-3">Estadísticas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {dragon.stats.map(s => (
              <div key={s.stat.name} className="bg-gray-700 rounded-lg p-3 text-center">
                <span className="text-xs text-gray-400 capitalize">{s.stat.name}</span>
                <p className="text-xl font-bold text-blue-400">{s.base_stat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
