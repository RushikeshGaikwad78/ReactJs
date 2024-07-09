import React, { Component } from 'react'

class Eventbind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         msg: "helllooo"
      }

      this.setHandler = this.setHandler.bind(this)  //third method : binding in constructor
    }
    
    //this keyword within an event handler is undefined
    // setHandler(){
    //     this.setState({
    //         msg: "Goodbye"      //will give uh error
    //     })
    // }

    //fourth method : changing the way we write handler method
    setHandler=()=>{
        this.setState({
            msg: "Goodbye"      
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.msg}</h1>
        {/* <button onClick={this.setHandler.bind(this)}>event bind click</button>  first method : binding in render method */}
        <button onClick={()=> this.setHandler()                                   /*second method : using arrow functions in render method*/
        }>event bind click</button> 
      </div>
    )
  }
}

export default Eventbind
