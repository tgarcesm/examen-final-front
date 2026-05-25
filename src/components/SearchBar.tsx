import { FaSearch } from 'react-icons/fa'

interface Props {
  onSearch: (value: string) => void
}

export default function SearchBar({ onSearch }: Props) {
  return (
    <div className="relative mb-6">
      <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input
        type="text"
        placeholder="Buscar dragón..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full pl-10 pr-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:border-yellow-400 focus:outline-none transition-colors"
      />
    </div>
  )
}
