import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HookUseState from './AllHooks/HookUseState'
import HookUsestatewithObj from './AllHooks/HookUsestatewithObj'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HookUseState/> */}
      <HookUsestatewithObj/>
    </>
  )
}

export default App
