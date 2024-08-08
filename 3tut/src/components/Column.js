import React from 'react'

function Column() {
    /*td cannot have div as its parent element therefore we use react fragments */
  return (  
    <React.Fragment>   
        <td>Name : </td>
        <td>Rushikesh</td>
    </React.Fragment>
  )
}

export default Column