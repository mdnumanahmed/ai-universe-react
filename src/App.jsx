import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// API Links
// All data: https://openapi.programming-hero.com/api/ai/tools

// Single data details: https://openapi.programming-hero.com/api/ai/tool/${id}

// Single data Example: https://openapi.programming-hero.com/api/ai/tool/01

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Welcome to AI Universe</h1>
    </div>
  )
}

export default App
