import React,{useCallback,useState} from 'react'
// useCallback momizes whole function

const Child = React.memo(({handleChange, setShow}) => {
  console.log("child ran")
  return (
    <>
    <p>{handleChange()}</p>
    <button onClick={() => setShow((prev) => !prev)}>hide id</button>
    </>
  )
});

// HookUseCallback = child component
const HookUseCallback = () => {

  const [count, setCount] = useState({
    num: 1,
    id: "abcd", 
  })

  const [show, setShow] = useState(false);

  const handleChange = useCallback(() => {
    return count.num * 2;
  }, [count])

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
      {show && <p>{count.id}</p>}
      <button  onClick={handleAdd}>+</button> 
      <Child handleChange={handleChange} setShow={setShow} />
    </div>
  )
}

export default HookUseCallback;