import DragonCard from './DragonCard'
import type { Dragon } from '../services/DragonService'

interface Props {
  dragons: Dragon[]
}

export default function DragonList({ dragons }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {dragons.map(dragon => (
        <DragonCard key={dragon.name} dragon={dragon} />
      ))}
    </div>
  )
}
