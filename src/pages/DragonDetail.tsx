import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
// import { fetchDragonDetail } from '../services/dragonService'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

export default function DragonDetail() {
  const { name } = useParams()
  const [dragon, setDragon] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // TODO: useEffect para cargar detalle con fetchDragonDetail(name)
  // TODO: Mostrar datos completos, imagen grande, estadísticas
  // TODO: Botón de favorito

  if (loading) return <Loader />
  if (error) return <ErrorMessage message={error} />

  return (
    <div className="p-4">
      <Link to="/" className="text-yellow-400">← Volver</Link>
      {/* Contenido del detalle */}
    </div>
  )
}