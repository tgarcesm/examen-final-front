import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import DragonList from '../components/DragonList'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import EmptyState from '../components/EmptyState'
import { fetchDragons } from '../services/DragonService'
import type { Dragon } from '../services/DragonService'

export default function Home() {
  const [dragons, setDragons] = useState<Dragon[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState<string>('')

  useEffect(() => {
    const cargar = async () => {
      try {
        const data = await fetchDragons()
        setDragons(data)
      } catch (err) {
        setError('Error al cargar los datos')
      } finally {
        setLoading(false)
      }
    }
    cargar()
  }, [])

  const filtered = dragons.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  )

  if (loading) return <Loader />
  if (error) return <ErrorMessage message={error} onRetry={() => window.location.reload()} />

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mb-2 text-blue-400">DragonDex</h1>
      <p className="text-sm text-gray-400 text-center mb-6">Asociación Internacional de Criaturas Míticas</p>
      <SearchBar onSearch={setSearch} />
      {filtered.length === 0 ? <EmptyState /> : <DragonList dragons={filtered} />}
    </div>
  )
}
