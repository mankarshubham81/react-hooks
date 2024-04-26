import React, { useContext } from 'react'
import { HookDemo } from './../Context';


const HookUseContext = ({ children }) => {
  // const [count, setCount] = useState({
  //   num: 1,
  //   id: "abcd", 
  // })

  // const {globalCount, setGlobalCount} = useContext(HookDemo)
  const { globalCount: count, setGlobalCount: setCount } = useContext(HookDemo);


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

export default HookUseContext;