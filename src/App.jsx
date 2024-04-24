import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HookUseState from './AllHooks/HookUseState'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HookUseState/>
    </>
  )
}

export default App
