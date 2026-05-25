import { FaSpinner } from 'react-icons/fa'

export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <FaSpinner className="text-4xl text-yellow-400 animate-spin" />
      <p className="mt-4 text-gray-400 text-lg">Cargando dragones...</p>
    </div>
  )
}
