import React, { useReducer, useState } from 'react'

const HookUseReducer = () => {
    // const [count, setCount] = useState({
    //     num: 1,
    //     id: "abcd", 
    // })

    const countReducer = (state, action) => {
        switch(action.type) {
            case 'add': {
                return state + 1; 
            }
            case 'substract': {
                return state - action.payload; 
            }
            default: 
                return state;
        }
    }

    // const [state, dispatch] =  useReducer(reducer, )
    const [state, dispatch] = useReducer(countReducer, 0)

    // const handleSubstract = () => {
    //   setCount((prev) => {
    //     return  {
    //         ...prev,
    //         num: prev.num -1
    //     }
    //   })
    // };
    // const handleAdd = () => {
    //     setCount((prev) => {
    //         return  {
    //             ...prev,
    //             num: prev.num + 1
    //         }
    //       })
    //       setCount((prev) => {
    //         return  {
    //             ...prev,
    //             num: prev.num + 1
    //         }
    //       })
    // };
  
    return (
    //     <div >
    //     <button  onClick={handleSubstract}>-</button>
    //     <p>{count.num}</p>
    //     <button  onClick={handleAdd}>+</button>
    //   </div>
      <div >
      <button onClick={() => dispatch({type: 'substract', payload: 5})} >-</button>
      <p>{state}</p>
      <button onClick={() => dispatch({type: 'add'})}>+</button>
    </div>
    )
}

export default HookUseReducer