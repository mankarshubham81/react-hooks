import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HookUseState from './AllHooks/HookUseState'
import HookUsestatewithObj from './AllHooks/HookUsestatewithObj'
import HookUseEffect from './AllHooks/HookUseEffect'
import HookUseMemo from './AllHooks/HookUseMemo'
import HookUseCallback from './AllHooks/HookUseCallback'
import HookUseRef from './AllHooks/HookUseRef'
import HookUseContext from './AllHooks/HookUseContext'
import HookUseReducer from './AllHooks/HookUseReducer'
import HookUseImperativeHandle from './AllHooks/HookUseImperativeHandle'
import HookUseLayoutEffect from './AllHooks/HookUseLayoutEffect'
import useFetchAPI from './AllHooks/useFetchAPI'

function App() {
  const [count, setCount] = useState(0);

  const {data, loading, error} = useFetchAPI("https://jsonplaceholder.typicode.com/users");

  if(error) return <p>Error....!</p>
  if(loading) return <p>Loading....!</p>
  console.log(data)
  return (
    <>
      {/* <HookUseState/> */}
      {/* <HookUsestatewithObj/> */}
      {/* <HookUseEffect /> */}
      {/* <HookUseMemo/> */}
      {/* <HookUseCallback/> */}
      {/* <HookUseRef/> */}
      {/* <HookUseContext/> */}
      {/* <HookUseReducer/> */}
      {/* <HookUseImperativeHandle/> */}
      {/* <HookUseLayoutEffect /> */}
      <ul>
        {data && data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}

      </ul>
    </>
  )
}

export default App
