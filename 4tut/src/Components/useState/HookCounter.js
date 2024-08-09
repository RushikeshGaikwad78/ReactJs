import React, { useState } from "react";

function HookCounter() {
  const [count, setCount] = useState(0); //array destructuring
  return (
    <div>
      {count}
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  );
}

export default HookCounter;
