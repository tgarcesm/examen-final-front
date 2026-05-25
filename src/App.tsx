import { Routes, Route, Link } from 'react-router-dom'
import { FaHome, FaHeart, FaDragon } from 'react-icons/fa'
import Home from './pages/Home'
import DragonDetail from './pages/DragonDetail'
import Favorites from './pages/Favorites'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 p-4 flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 text-blue-400 font-bold text-xl mr-auto">
          <FaDragon />
          DragonDex
        </Link>
        <Link to="/" className="flex items-center gap-2 hover:text-blue-400">
          <FaHome />
          <span className="hidden md:inline">Inicio</span>
        </Link>
        <Link to="/favorites" className="flex items-center gap-2 hover:text-blue-400">
          <FaHeart />
          <span className="hidden md:inline">Favoritos</span>
        </Link>
      </nav>
      <main className="p-4 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dragon/:name" element={<DragonDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  )
}
