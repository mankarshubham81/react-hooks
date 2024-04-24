import React, { useState } from 'react'

const HookUseState = () => {
  const [count, setCount] = useState(0)

  const handleSubstract = () => {
    setCount((prev) => prev - 1)
  };
  const handleAdd = () => {
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
  };

  return (
    <div >
      <button  onClick={handleSubstract}>-</button>
      <p>{count}</p>
      <button  onClick={handleAdd}>+</button>
    </div>
  )
}

export default HookUseState