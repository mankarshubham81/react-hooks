import React, { useRef, useState } from 'react'
import Counter from '../component/Counter'

const HookUseImperativeHandle = () => {
    const ref = useRef();
  
    return (
      <div >
        <button  onClick={() => ref.current.handleSubstract()}>--</button>
        {/* <p>{count.num}</p> */}
        <Counter ref={ref}/>
        <button  onClick={() => ref.current.handleAdd()}>+</button>
      </div>
    )
}

export default HookUseImperativeHandle