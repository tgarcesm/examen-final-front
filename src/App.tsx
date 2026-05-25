import { Routes, Route, Link } from 'react-router-dom'
import { FaHome, FaHeart } from 'react-icons/fa'
import Home from './pages/Home'
import DragonDetail from './pages/DragonDetail'
import Favorites from './pages/Favorites'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4 flex items-center gap-6 shadow-lg">
        <h1 className="text-xl font-bold text-yellow-400 mr-auto">DragonDex</h1>
        <Link to="/" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
          <FaHome />
          <span className="hidden md:inline">Inicio</span>
        </Link>
        <Link to="/favorites" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
          <FaHeart />
          <span className="hidden md:inline">Favoritos</span>
        </Link>
      </nav>
      <main className="p-4 max-w-7xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dragon/:name" element={<DragonDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}
