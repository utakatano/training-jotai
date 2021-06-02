import React from 'react'
import { Counter } from '../../components/Counter'

export const Home: React.FC = () => {
  return (
    <div>
      This is Home page.

      <section>
        <Counter />
      </section>
    </div>
  )
}