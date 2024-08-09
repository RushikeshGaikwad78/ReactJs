import React, {useState,useEffect} from 'react'

function HookMouse() {
    const [x,setx] = useState(0)
    const [y,sety] = useState(0)

    const logMousePosition = e => {
        console.log("mouse event");
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(()=>{
        console.log("use effect called");
        window.addEventListener('mousemove' , logMousePosition)

        return () => {     //whenever the component is unmounted this is returned
            console.log("component unmounting mode")
            window.removeEventListener('mousemove' , logMousePosition)
        }

    },[])  //if this array is empty then useEffect hook is called only once.... mimicing componentdidmount in class component


  return (
    <div>
        HOOKS :- X : {x}  Y : {y}
    </div>
  )
}

export default HookMouse