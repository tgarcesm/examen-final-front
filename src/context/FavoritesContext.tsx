import { createContext, useContext, useState, type ReactNode } from 'react'
import type { Dragon } from '../services/DragonService'

interface FavoritesContextType {
  favorites: Dragon[]
  addFavorite: (dragon: Dragon) => void
  removeFavorite: (name: string) => void
  isFavorite: (name: string) => boolean
}

interface FavoritesProviderProps {
  children: ReactNode
}

const FavoritesContext = createContext<FavoritesContextType | null>(null)

export function FavoritesProvider({ children }: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<Dragon[]>([])

  const addFavorite = (dragon: Dragon) => {
    setFavorites(prev =>
      prev.find(f => f.name === dragon.name) ? prev : [...prev, dragon]
    )
  }

  const removeFavorite = (name: string) => {
    setFavorites(prev => prev.filter(f => f.name !== name))
  }

  const isFavorite = (name: string): boolean => {
    return favorites.some(f => f.name === name)
  }

  const value: FavoritesContextType = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites(): FavoritesContextType {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites debe usarse dentro de FavoritesProvider')
  }
  return context
}
