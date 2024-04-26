import React, { createContext, useState } from 'react';

export const HookDemo = createContext();

const Context = ({ children }) => {
    
  const [globalCount, setGlobalCount] = useState({
    num: 1,
    id: "abcd", 
  });  

  return <HookDemo.Provider value={{globalCount, setGlobalCount}} >{children}</HookDemo.Provider>
}

export default Context;