import React, { useState , useEffect} from "react";

function HookCounterone() {
  const [count, setCount] = useState(0);
  const [name,setName] = useState('');
  
  //everytime the component is rerendered the arguement passed to use effect as function gets called
  useEffect(()=>{ 
    console.log("updating file") 
    document.title = `You clciked ${count} times`;
  },[count])   //in this array we will pass props,state on whose change the component should render
   
  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
      {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click
      </button>
    </div>
  );
}

export default HookCounterone;
