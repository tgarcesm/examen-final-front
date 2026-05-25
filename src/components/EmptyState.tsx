import { FaGhost } from 'react-icons/fa'

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <FaGhost className="text-4xl text-gray-500" />
      <p className="mt-4 text-gray-400">No se encontraron dragones.</p>
    </div>
  )
}
