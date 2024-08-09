import React, { useState , useEffect} from "react";

function HookCounterone() {
  const [count, setCount] = useState(0);

  //everytime the component is rerendered the arguement passed to use effect as function gets called
  useEffect(()=>{  
    document.title = `You clciked ${count} times`;
  })

  return (
    <div>
      {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click
      </button>
    </div>
  );
}

export default HookCounterone;
