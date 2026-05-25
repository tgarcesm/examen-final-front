import { FaExclamationTriangle } from 'react-icons/fa'

interface Props {
  message: string
  onRetry?: () => void
}

export default function ErrorMessage({ message, onRetry }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <FaExclamationTriangle className="text-4xl text-red-500" />
      <p className="mt-4 text-red-400 text-lg">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-6 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
        >
          Reintentar
        </button>
      )}
    </div>
  )
}
