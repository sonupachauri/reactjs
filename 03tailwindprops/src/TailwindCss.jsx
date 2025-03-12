import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Tailwind.css'

import Card from './components/Card'

function TailwindCSS() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1 className="bg-green-400 rounded-xl mb-10"> Hello, Tailwind </h1>
        <Card />
    </>
  )
}

export default TailwindCSS