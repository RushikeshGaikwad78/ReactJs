import React from 'react'

function Column() {
    /*td cannot have div as its parent element therefore we use react fragments */

    //only key can be passed as attribute to the fragment

    const item = [];


  return (  
    // <> </>   this is also react fragment only
    <React.Fragment>   
        {
            item.map(item => (
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            ))
        }
        <td>Name : </td>
        <td>Rushikesh</td>
    </React.Fragment>
  )
}

export default Column