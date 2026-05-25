export interface DragonListItem {
  name: string
  url: string
}

export interface DragonType {
  type: {
    name: string
  }
}

export interface DragonStat {
  base_stat: number
  stat: {
    name: string
  }
}

export interface DragonAbility {
  ability: {
    name: string
  }
}

export interface Dragon {
  id: number
  name: string
  sprites: {
    other: {
      'official-artwork': {
        front_default: string
      }
    }
  }
  types: DragonType[]
  stats: DragonStat[]
  abilities: DragonAbility[]
}

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export async function fetchDragons(): Promise<Dragon[]> {
  const res = await fetch(`${BASE_URL}?limit=30`)
  if (!res.ok) throw new Error('Error al cargar los datos')

  const data = await res.json()
  const lista: DragonListItem[] = data.results

  const dragones = await Promise.all(
    lista.map(async (item) => {
      const detailRes = await fetch(item.url)
      if (!detailRes.ok) throw new Error('Error al cargar detalle')
      return detailRes.json() as Promise<Dragon>
    })
  )

  return dragones
}

export async function fetchDragonDetail(name: string): Promise<Dragon> {
  const res = await fetch(`${BASE_URL}/${name}`)
  if (!res.ok) throw new Error('Error al cargar el detalle')
  return res.json()
}
