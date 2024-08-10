import React, { useEffect, useState } from 'react'

//we can have multiple useEffect hook in one component

function IntervalHookCounter() {
    const [count,setCount] = useState(0);

    const tick = () => {
        // setCount(count+1);                //first method....we have to put count in array as dependecy to rerender
        setCount(prevCount => prevCount + 1)  //second method...no need to put count in array  
    }

    //whenever we need to call any function in useEffect then it is prefeered to define that function in use effect only
    //so that the props,or state that are necessary for rerendering of component dont get missed.
    useEffect(()=>{
        const interval = setInterval(tick,1000);

        return () => {
            clearInterval(interval);
        }
    },[])


  return (
    <div>{count}</div>
  )
}

export default IntervalHookCounter