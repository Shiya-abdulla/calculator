import { useState } from 'react'
import './App.css'
import Calculater from './Calculater'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Calculater/>
    </>
  )
}

export default App
