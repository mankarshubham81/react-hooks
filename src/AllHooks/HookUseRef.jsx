import React, {useState, useEffect, useRef} from 'react'

const HookUseRef = () => {
    const [count, setCount] = useState({
        num: 1,
        id: "abcd", 
    });
    const [name, setName] = useState("")

    // const [rendered, setRendered] = useState(1);
    const renderRef = useRef(1)
    const countRef = useRef()
    // useEffect(() => {
    //   setRendered(prev => prev + 1);
    // })
    // useEffect(() => {
    //   renderRef.current = renderRef.current + 1;
    // })
    useEffect(() => {
      countRef.current = name;
    }, [name])


    

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
        {/* <p ref={countRef} >{count.num}</p> */}
        <p>{count.num}</p>
        <p>{count.id}</p>
        <button  onClick={handleAdd}>+</button>
        <p>Renderd : {renderRef.current} times</p>
        <input ref={countRef} onChange={(e) => setName(e.target.value)} />
        {/* <button onClick={() => {
          countRef.current.innerHTML = 10;
        }}>Change to 10</button> */}
        <p>{name} is state and {countRef.current} is ref</p>
      </div>
    )
}

export default HookUseRef;