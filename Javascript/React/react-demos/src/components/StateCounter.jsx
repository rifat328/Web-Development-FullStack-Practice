import React from 'react'
import { useState } from 'react'

const StateCounter = () => {
  const [count, setCount]=useState(0);
 const incriment =()=>setCount(count+1);
 const decriment=()=>setCount(count-1);
  return (
    <div> 
        <h3>Counter Using State</h3>
        <h1>{count}</h1>
        <button onClick={incriment}>+</button>
        <button onClick={decriment}>-</button>
        
    </div>

  )
}

export default StateCounter;