import React, { useMemo, useState } from 'react'
import { initialItems } from './utilsOfUseMemo';
// useCallback momizes the value


const HookUseMemo = () => {
    // State for the input number
  const [number, setNumber] = useState(0);

  // Calculate the square of the number
  const square = useMemo(() => {
    console.log('Calculating square...');
    return number * number;
  }, [number]);

  // Handler for changing the input number
  const handleInputChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter a number"
      />
      <p>The square of {number} is {square}</p>
    </div>
  );
}

export default HookUseMemo