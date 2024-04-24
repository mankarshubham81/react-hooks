import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {
    const [count, setCount] = useState({
        num: 1,
        id: "abcd", 
    })

    useEffect(() => {
        console.log("this log will display onle at one time");
    }, [count]);

    const handleSubstract = () => {
      setCount((prev) => {
        return  {
            ...prev,
            num: prev.num -1
        }
      })
    };
    const handleAdd = () => {
        setCount((prev) => {
            return  {
                ...prev,
                num: prev.num + 1
            }
          })
          setCount((prev) => {
            return  {
                ...prev,
                num: prev.num + 1
            }
          })
    };
  
    return (
      <div >
        <button  onClick={handleSubstract}>-</button>
        <p>{count.num}</p>
        <button  onClick={handleAdd}>+</button>
      </div>
    )
}

export default HookUseEffect