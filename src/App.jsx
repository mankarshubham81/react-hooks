import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HookUseState from './AllHooks/HookUseState'
import HookUsestatewithObj from './AllHooks/HookUsestatewithObj'
import HookUseEffect from './AllHooks/HookUseEffect'
import HookUseMemo from './AllHooks/HookUseMemo'
import HookUseCallback from './AllHooks/HookUseCallback'
import HookUseRef from './AllHooks/HookUseRef'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <HookUseState/> */}
      {/* <HookUsestatewithObj/> */}
      {/* <HookUseEffect /> */}
      {/* <HookUseMemo/> */}
      {/* <HookUseCallback/> */}
      <HookUseRef/>
    </>
  )
}

export default App
