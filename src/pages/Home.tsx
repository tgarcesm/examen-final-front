import { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import DragonList from '../components/DragonList'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'
import EmptyState from '../components/EmptyState'
// import { fetchDragons } from '../services/dragonService'

export default function Home() {
    const [dragons, setDragons] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState('')

    // TODO: cargar dragones al montar
    // TODO: Filtrar dragones
    // TODO: Manejar estados

    return (
        // aplicar tailwindcss
        <div className="p-4">
            <SearchBar onSearch={setSearch} />
            {/* Mostrar Loader, ErrorMessage, EmptyState o DragonList según estado */}
        </div>
    )
}