import { atom } from 'jotai'

export const countAtom = atom(0)
export const countryAtom = atom('Japan')
export const citiesAtom = atom(['Tokyo', 'Kyoto', 'Osaka'])
export const mangaAtom = atom({
  'Dragon Ball': 1984,
  'One Piece': 1997,
  Naruto: 1999
})

export const doubledCountAtom = atom((get) => get(countAtom) * 2)

const urlAtom = atom('/src/json/data.json')

export const fetchUrlAtom = atom(
  async (get) => {
    const response = await fetch(get(urlAtom))
    return await response.json()
  }
)
