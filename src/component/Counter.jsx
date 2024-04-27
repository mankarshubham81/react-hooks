import React, { forwardRef, useState, useImperativeHandle } from 'react'

const Counter = forwardRef((props, ref) => {
    const [count, setCount] = useState({
        num: 1,
        id: "abcd", 
    })

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

    useImperativeHandle(
      ref,
      () => {
        return {
            handleAdd,
            handleSubstract
        };
      }
    )
    // useImperativeHandle(
    //     ref,
    //     () => ({
    //           handleAdd,
    //           handleSubstract
    //       })
    //   )
  
    return (
      <div >
        <p>{count.num}</p>
      </div>
    )
})

export default Counter