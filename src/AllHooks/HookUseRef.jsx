import React, {useState, useEffect, useRef} from 'react'

const HookUseRef = () => {
    const [count, setCount] = useState({
        num: 1,
        id: "abcd", 
    });

    // const [rendered, setRendered] = useState(1);
    const renderRef = useRef(1)
    // useEffect(() => {
    //   setRendered(prev => prev + 1);
    // })
    useEffect(() => {
      renderRef.current = renderRef.current + 1;
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
          // setCount((prev) => {
          //   return  {
          //       ...prev,
          //       num: prev.num + 1
          //   }
          // })
    };
  
    return (
      <div >
        <button  onClick={handleSubstract}>-</button>
        <p>{count.num}</p>
        <p>{count.id}</p>
        <button  onClick={handleAdd}>+</button>
        <p>Renderd : {renderRef.current} times</p>
      </div>
    )
}

export default HookUseRef;