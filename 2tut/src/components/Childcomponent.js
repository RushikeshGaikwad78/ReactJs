import React from 'react'

function Childcomponent(props) {
  return (
    <div>
        {/*if need to have parameters then use arrow function as shown else props.getHandler would work */}
        <button onClick={()=>props.greetHandler('child')}>Greet Parent</button> 
    </div>
  )
}

export default Childcomponent