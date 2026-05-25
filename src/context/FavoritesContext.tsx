import { createContext, useContext, useState } from 'react'

const FavoritesContext = createContext(null)

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([])

  // TODO: Implementar función addFavorite(dragon)
  // - Si el dragón ya está en favoritos, no hacer nada
  // - Agregar el dragón al array de favoritos

  // TODO: Implementar función removeFavorite(dragonName)
  // - Filtrar el dragón del array por nombre

  // TODO: Implementar función isFavorite(dragonName)
  // - Retornar true si el dragón ya está en favoritos

  const value = {
    favorites,
    // addFavorite,     // ← reemplazar con función real
    // removeFavorite,  // ← reemplazar con función real
    // isFavorite,      // ← reemplazar con función real
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (!context) {
    throw new Error('useFavorites debe usarse dentro de FavoritesProvider')
  }
  return context
}