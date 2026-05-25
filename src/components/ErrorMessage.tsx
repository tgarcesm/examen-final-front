import { FaExclamationTriangle } from 'react-icons/fa'

interface Props {
  message: string
  onRetry?: () => void
}

export default function ErrorMessage({ message, onRetry }: Props) {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <FaExclamationTriangle className="text-4xl text-red-500" />
      <p className="mt-4 text-red-400">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-400"
        >
          Reintentar
        </button>
      )}
    </div>
  )
}
