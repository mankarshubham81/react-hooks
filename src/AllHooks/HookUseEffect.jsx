import React, { useEffect, useState } from 'react'

const HookUseEffect = () => {
    const [count, setCount] = useState({
        num: 1,
        id: "abcd", 
    })

    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        setCount((prev) => {
            return  {
                id: "Random",
                num: 5
            }
          })
        //   setCount({
        //     id: "Random2",
        //     num: 2
        // })
        console.log("this log will display onle at one time");
    }, []);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setScreenWidth(window.innerWidth)
        })
        console.log("ran useeff")

        return () => {
            console.log("ran retured")
            // window.removeEventListener("resize");
        };
        
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
        <p>{count.id}</p>
        <p>{screenWidth}</p>
        <button  onClick={handleAdd}>+</button>
      </div>
    )
}

export default HookUseEffect