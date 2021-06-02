import React from 'react'
import { atom, useAtom } from 'jotai'
import { countAtom, doubledCountAtom } from '../../atoms'

export const Counter: React.FC = () => {
  const [count, setCount] = useAtom(countAtom)

  const [doubledCount] = useAtom(doubledCountAtom)

  return (
    <div>
      <p>{count}</p>

      <p>{doubledCount}</p>

      <button onClick={() => setCount(c => c + 1)}>one up</button>
    </div>
  )
}