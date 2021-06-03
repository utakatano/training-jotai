import React from 'react'
import { Counter } from '../../components/Counter'
// import { Status } from '../../components/Status'

export const Home: React.FC = () => {
  return (
    <div>
      This is Home page.

      <section>
        <Counter />
      </section>

      <section>
        {/* <Status /> */}
      </section>
    </div>
  )
}