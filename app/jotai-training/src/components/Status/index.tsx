import { useAtom } from 'jotai'
import React from 'react'
import { fetchUrlAtom } from '../../atoms'

export const Status: React.FC = () => {
  const [json] = useAtom(fetchUrlAtom)

  return null
}