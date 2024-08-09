import React, { useState } from "react";

function HookCounterTwo() {
  const initialcount = 0;
  const [count, setCount] = useState(initialcount);

  const incrementfive = () => {
    for(let i=0;i<5;i++){
        // setCount(count+1);          //count will only increment with only 1

        setCount(prevCount => prevCount + 1)    //when we need to change state value based on previous state
    } 
  }

  return (
    <div>
      count : {count}
      <button onClick={() => setCount(initialcount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>

      <button onClick={incrementfive}>Increment by 5</button>
    </div>
  );
}

export default HookCounterTwo;
