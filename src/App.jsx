import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Bienvenido a mi aplicación de maquillaje</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>
          Has clics: {count}
        </button>
      </div>
    </>
  )
}

export default App