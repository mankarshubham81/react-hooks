import React, {useLayoutEffect} from 'react'

const HookUseLayoutEffect = () => {
  
    useLayoutEffect(() => {
      console.log("this is gping yo loag before component is load(UI)")
    }, [])

    return (
    <div>HookUseLayoutEffect</div>
  )
}

export default HookUseLayoutEffect