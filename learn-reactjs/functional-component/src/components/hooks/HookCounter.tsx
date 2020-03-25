import React, { useState } from "react";

function HookCounter() {
    let initialValue:number=0
  const [count, setCount] = useState(initialValue);
  const incrementByFive=()=>{
      for(let i=0;i<5;i++){
          setCount(prevCount=>prevCount+1)
      }
  }
  return (
    <div>
      <h1>count {count}</h1>
      <button onClick={()=>{setCount(prevCount=>prevCount+1)}}>Incement by 1</button>
      <button onClick={incrementByFive}>Incement by 5</button>
      <button onClick={()=>{setCount(prevCount=>prevCount-1)}}>Decrement by 1</button>
      <button onClick={()=>{setCount(initialValue)}}>Reset</button>

    </div>
  );
}

export default HookCounter;
